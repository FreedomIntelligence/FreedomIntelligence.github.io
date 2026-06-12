(function () {
  const GITHUB_REPO_URL = 'https://api.github.com/repos/';
  const SHIELDS_GITHUB_STARS_URL = 'https://img.shields.io/github/stars/';
  const CACHE_TTL_MS = 10 * 60 * 1000;

  function onReady(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  }

  function requestJson(url) {
    if (window.fetch) {
      return window.fetch(url).then(function (response) {
        if (!response.ok) throw new Error(response.status + ' ' + response.statusText);
        return response.json();
      });
    }

    return new Promise(function (resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
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
      xhr.send();
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
      // Metrics still work when sessionStorage is unavailable.
    }
  }

  function formatCount(value) {
    const number = Number(value);
    if (!Number.isFinite(number)) return null;
    return number.toLocaleString('en-US');
  }

  function githubInfoFromUrl(value) {
    try {
      const url = new URL(value);
      if (!/(^|\.)github\.com$/i.test(url.hostname)) return null;
      const parts = url.pathname.replace(/^\/+/, '').split('/').filter(Boolean);
      if (!parts.length) return null;

      const owner = parts[0];
      const repo = parts[1] ? parts[1].replace(/\.git$/i, '') : '';
      return {
        owner: owner,
        repo: repo,
        repoPath: repo ? owner + '/' + repo : '',
        isRepo: Boolean(owner && repo)
      };
    } catch (error) {
      return null;
    }
  }

  function githubRepoPath(repo) {
    return repo.split('/').map(encodeURIComponent).join('/');
  }

  function parseShieldStars(data) {
    const raw = data && (data.value || data.message);
    if (typeof raw === 'number') return raw;
    if (!raw) return null;

    const match = String(raw).trim().toLowerCase().replace(/,/g, '').match(/^([\d.]+)\s*([km])?/);
    if (!match) return null;

    let count = Number(match[1]);
    if (!Number.isFinite(count)) return null;
    if (match[2] === 'k') count *= 1000;
    if (match[2] === 'm') count *= 1000000;
    return Math.round(count);
  }

  async function fetchGithubStars(repo) {
    const repoPath = githubRepoPath(repo);
    const data = await requestJson(GITHUB_REPO_URL + repoPath).catch(function () {
      return null;
    });

    if (data && typeof data.stargazers_count === 'number') return data.stargazers_count;

    const fallback = await requestJson(SHIELDS_GITHUB_STARS_URL + repoPath + '.json').catch(function () {
      return null;
    });
    return parseShieldStars(fallback);
  }

  function stripCodeSuffix(value) {
    return value.replace(/\s+Code\s*$/i, '').trim();
  }

  function linkLabel(link, info) {
    const explicit = link.dataset.githubLabel;
    if (explicit) return explicit;

    const text = stripCodeSuffix(link.textContent.replace(/\s+/g, ' ').trim());
    if (text && text !== 'GitHub') return text;
    if (info && info.repo) return info.repo;
    return 'GitHub';
  }

  function resetLink(link, label) {
    link.textContent = '';
    link.dataset.githubLabel = label;

    const icon = document.createElement('i');
    icon.className = 'fab fa-github';
    icon.setAttribute('aria-hidden', 'true');

    const labelNode = document.createElement('span');
    labelNode.setAttribute('data-github-label', '');
    labelNode.textContent = label;

    link.appendChild(icon);
    link.appendChild(labelNode);
    link.dataset.githubLink = 'true';
  }

  function appendStars(link, count) {
    const formatted = formatCount(count);
    if (!formatted) return;

    const existing = link.querySelector('[data-github-stars-inline]');
    if (existing) existing.remove();

    const wrapper = document.createElement('span');
    wrapper.className = 'github-star-count';
    wrapper.setAttribute('data-github-stars-inline', '');

    const icon = document.createElement('i');
    icon.className = 'fas fa-star';
    icon.setAttribute('aria-hidden', 'true');

    const value = document.createElement('span');
    value.setAttribute('data-github-stars', '');
    value.textContent = formatted;

    wrapper.appendChild(icon);
    wrapper.appendChild(value);
    link.appendChild(wrapper);
  }

  async function loadRepoStars(repo, links) {
    const cacheKey = 'people-github-stars:' + repo;
    let count = getCached(cacheKey);

    if (typeof count !== 'number') {
      count = await fetchGithubStars(repo);
      if (typeof count === 'number') setCached(cacheKey, count);
    }

    if (typeof count !== 'number') return;

    links.forEach(function (link) {
      appendStars(link, count);
      link.classList.add('is-ready');
      link.title = 'Live GitHub stars for ' + repo;
      link.setAttribute('aria-label', linkLabel(link, githubInfoFromUrl(link.href)) + ', ' + formatCount(count) + ' GitHub stars');
    });
  }

  onReady(function () {
    const links = Array.from(document.querySelectorAll('.alumni-links a[href*="github.com"]'));
    if (!links.length) return;

    const repoLinks = new Map();

    links.forEach(function (link) {
      const info = githubInfoFromUrl(link.href);
      if (!info) return;

      const label = linkLabel(link, info);
      resetLink(link, label);

      if (!info.isRepo) {
        link.title = 'GitHub';
        link.setAttribute('aria-label', label === 'GitHub' ? 'GitHub' : label + ' GitHub');
        return;
      }

      link.dataset.githubRepo = info.repoPath;
      link.title = 'GitHub repository for ' + info.repoPath;
      link.setAttribute('aria-label', label + ' GitHub repository');

      if (!repoLinks.has(info.repoPath)) repoLinks.set(info.repoPath, []);
      repoLinks.get(info.repoPath).push(link);
    });

    repoLinks.forEach(function (attachedLinks, repo) {
      loadRepoStars(repo, attachedLinks);
    });
  });
})();
