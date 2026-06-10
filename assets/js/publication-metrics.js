(function () {
  const S2_BATCH_URL = 'https://api.semanticscholar.org/graph/v1/paper/batch?fields=title,citationCount,url';
  const S2_MATCH_URL = 'https://api.semanticscholar.org/graph/v1/paper/search/match?fields=title,citationCount,url&query=';
  const GITHUB_REPO_URL = 'https://api.github.com/repos/';
  const CACHE_TTL_MS = 10 * 60 * 1000;

  function onReady(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  }

  function requestJson(url, options) {
    if (window.fetch) {
      return window.fetch(url, options).then(function (response) {
        if (!response.ok) throw new Error(response.status + ' ' + response.statusText);
        return response.json();
      });
    }

    return new Promise(function (resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open((options && options.method) || 'GET', url, true);

      if (options && options.headers) {
        Object.keys(options.headers).forEach(function (key) {
          xhr.setRequestHeader(key, options.headers[key]);
        });
      }

      xhr.onload = function () {
        if (xhr.status < 200 || xhr.status >= 300) {
          reject(new Error(xhr.status + ' ' + xhr.statusText));
          return;
        }
        try {
          resolve(JSON.parse(xhr.responseText));
        } catch (error) {
          reject(error);
        }
      };
      xhr.onerror = function () {
        reject(new Error('Network request failed'));
      };
      xhr.send(options && options.body ? options.body : null);
    });
  }

  function getCached(key) {
    try {
      const raw = sessionStorage.getItem(key);
      if (!raw) return null;
      const cached = JSON.parse(raw);
      if (!cached || Date.now() - cached.time > CACHE_TTL_MS) return null;
      return cached.value;
    } catch (error) {
      return null;
    }
  }

  function setCached(key, value) {
    try {
      sessionStorage.setItem(key, JSON.stringify({ time: Date.now(), value: value }));
    } catch (error) {
      // Browsers can deny sessionStorage in private modes. Metrics still work without caching.
    }
  }

  function formatCount(value) {
    return Number(value).toLocaleString('en-US');
  }

  function normalizeDoi(value) {
    if (!value) return '';
    return String(value)
      .trim()
      .replace(/^https?:\/\/(dx\.)?doi\.org\//i, '')
      .replace(/^doi:/i, '')
      .replace(/\/$/, '');
  }

  function githubRepoFromUrl(value) {
    if (!value) return null;

    try {
      const url = new URL(value);
      if (!/(^|\.)github\.com$/i.test(url.hostname)) return null;
      const parts = url.pathname.replace(/^\/+/, '').split('/');
      if (parts.length < 2 || !parts[0] || !parts[1]) return null;
      return parts[0] + '/' + parts[1].replace(/\.git$/i, '');
    } catch (error) {
      return null;
    }
  }

  function citationIdentifier(entry) {
    const arxiv = (entry.dataset.arxiv || '').trim().replace(/^arxiv:/i, '');
    if (arxiv) return 'ARXIV:' + arxiv;

    const doi = normalizeDoi(entry.dataset.doi);
    if (doi) return 'DOI:' + doi;

    return null;
  }

  function metricLink(entry, selector) {
    return entry.querySelector(selector);
  }

  function setScholarLink(entry) {
    const title = entry.dataset.title || '';
    const link = metricLink(entry, '.publication-metric--scholar');
    if (!link || !title) return;

    link.href = 'https://scholar.google.com/scholar?q=' + encodeURIComponent(title);
    link.title = 'Search this paper on Google Scholar';
  }

  function setGithubStars(entry, repo, count) {
    const link = metricLink(entry, '.publication-metric--github');
    if (!link) return;

    link.href = 'https://github.com/' + repo;
    link.hidden = false;
    link.title = 'Live GitHub stars for ' + repo;
    const value = link.querySelector('[data-github-stars]');
    if (value) value.textContent = formatCount(count);
  }

  function setCitationCount(entry, paper) {
    if (!paper || typeof paper.citationCount !== 'number') return;

    const link = metricLink(entry, '.publication-metric--citations');
    if (!link) return;

    link.href = paper.url || metricLink(entry, '.publication-metric--scholar').href;
    link.hidden = false;
    link.title = 'Live citation count from Semantic Scholar. Google Scholar does not provide a public citation-count API.';
    const value = link.querySelector('[data-citation-count]');
    if (value) value.textContent = formatCount(paper.citationCount);
  }

  function chunk(values, size) {
    const chunks = [];
    for (let i = 0; i < values.length; i += size) {
      chunks.push(values.slice(i, i + size));
    }
    return chunks;
  }

  async function runWithConcurrency(values, limit, worker) {
    let index = 0;
    const runners = Array.from({ length: Math.min(limit, values.length) }, async function () {
      while (index < values.length) {
        const current = values[index];
        index += 1;
        await worker(current);
      }
    });

    await Promise.all(runners);
  }

  async function loadGithubStars(entries) {
    const repoEntries = new Map();

    entries.forEach(function (entry) {
      const repo = githubRepoFromUrl(entry.dataset.codeUrl);
      if (!repo) return;
      if (!repoEntries.has(repo)) repoEntries.set(repo, []);
      repoEntries.get(repo).push(entry);
    });

    await runWithConcurrency(Array.from(repoEntries.entries()), 4, async function (pair) {
      const repo = pair[0];
      const attachedEntries = pair[1];
      const cacheKey = 'publication-metrics:github:' + repo;
      let data = getCached(cacheKey);

      if (!data) {
        data = await requestJson(GITHUB_REPO_URL + repo).catch(function () {
          return null;
        });
        if (data) setCached(cacheKey, data);
      }

      if (!data || typeof data.stargazers_count !== 'number') return;
      attachedEntries.forEach(function (entry) {
        setGithubStars(entry, repo, data.stargazers_count);
      });
    });
  }

  async function loadCitationBatch(idEntries, fallbackEntries) {
    const pairs = Array.from(idEntries.entries());

    for (const group of chunk(pairs, 100)) {
      const ids = group.map(function (pair) { return pair[0]; });
      const uncachedIds = [];
      const uncachedPairs = [];

      group.forEach(function (pair) {
        const cached = getCached('publication-metrics:s2:' + pair[0]);
        if (cached) {
          pair[1].forEach(function (entry) { setCitationCount(entry, cached); });
        } else {
          uncachedIds.push(pair[0]);
          uncachedPairs.push(pair);
        }
      });

      if (!uncachedIds.length) continue;

      const data = await requestJson(S2_BATCH_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: uncachedIds })
      }).catch(function () {
        return null;
      });

      const results = Array.isArray(data) ? data : (data && (data.value || data.data)) || [];

      uncachedPairs.forEach(function (pair, index) {
        const paper = results[index];
        if (paper && typeof paper.citationCount === 'number') {
          setCached('publication-metrics:s2:' + pair[0], paper);
          pair[1].forEach(function (entry) { setCitationCount(entry, paper); });
        } else {
          pair[1].forEach(function (entry) { fallbackEntries.push(entry); });
        }
      });
    }
  }

  async function loadCitationByTitle(entries) {
    const seenTitles = new Map();
    entries.forEach(function (entry) {
      const title = (entry.dataset.title || '').trim();
      if (!title) return;
      if (!seenTitles.has(title)) seenTitles.set(title, []);
      seenTitles.get(title).push(entry);
    });

    for (const pair of Array.from(seenTitles.entries())) {
      const title = pair[0];
      const attachedEntries = pair[1];
      const cacheKey = 'publication-metrics:s2-title:' + title;
      let paper = getCached(cacheKey);

      if (!paper) {
        const data = await requestJson(S2_MATCH_URL + encodeURIComponent(title)).catch(function () {
          return null;
        });
        paper = data && data.data && data.data[0] ? data.data[0] : null;
        if (paper) setCached(cacheKey, paper);
      }

      if (!paper || typeof paper.citationCount !== 'number') continue;
      attachedEntries.forEach(function (entry) {
        setCitationCount(entry, paper);
      });
    }
  }

  async function loadCitations(entries) {
    const idEntries = new Map();
    const fallbackEntries = [];

    entries.forEach(function (entry) {
      const id = citationIdentifier(entry);
      if (!id) {
        fallbackEntries.push(entry);
        return;
      }
      if (!idEntries.has(id)) idEntries.set(id, []);
      idEntries.get(id).push(entry);
    });

    await loadCitationBatch(idEntries, fallbackEntries);
    await loadCitationByTitle(fallbackEntries);
  }

  function entryIsVisible(entry) {
    const item = entry.closest('li');
    return getComputedStyle(entry).display !== 'none' && (!item || getComputedStyle(item).display !== 'none');
  }

  function loadMetricsForEntries(entries) {
    const githubEntries = [];
    const citationEntries = [];

    entries.forEach(function (entry) {
      if (!entryIsVisible(entry)) return;

      if (!entry.dataset.githubMetricsRequested) {
        entry.dataset.githubMetricsRequested = 'true';
        githubEntries.push(entry);
      }

      if (!entry.dataset.citationMetricsRequested) {
        entry.dataset.citationMetricsRequested = 'true';
        citationEntries.push(entry);
      }
    });

    if (githubEntries.length) loadGithubStars(githubEntries);
    if (citationEntries.length) loadCitations(citationEntries);
  }

  function entriesNearViewport(entries) {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    return entries.filter(function (entry) {
      if (!entryIsVisible(entry)) return false;
      const rect = entry.getBoundingClientRect();
      return rect.bottom >= -700 && rect.top <= viewportHeight + 700;
    });
  }

  onReady(function () {
    const entries = Array.from(document.querySelectorAll('.publication-entry'));
    if (!entries.length) return;

    entries.forEach(setScholarLink);

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(function (items) {
        loadMetricsForEntries(items
          .filter(function (item) { return item.isIntersecting; })
          .map(function (item) { return item.target; }));
      }, { rootMargin: '700px 0px' });

      entries.forEach(function (entry) {
        observer.observe(entry);
      });
    } else {
      const scheduleVisibleMetrics = function () {
        loadMetricsForEntries(entriesNearViewport(entries));
      };
      window.addEventListener('scroll', scheduleVisibleMetrics, { passive: true });
      window.addEventListener('resize', scheduleVisibleMetrics);
      scheduleVisibleMetrics();
    }

    document.querySelectorAll('[data-publication-filter]').forEach(function (button) {
      button.addEventListener('click', function () {
        window.setTimeout(function () {
          loadMetricsForEntries(entriesNearViewport(entries));
        }, 0);
      });
    });

    loadMetricsForEntries(entriesNearViewport(entries));
  });
})();
