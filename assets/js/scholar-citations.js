(function () {
  function onReady(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  }

  function formatNumber(value) {
    const number = Number(value);
    if (!Number.isFinite(number)) return null;
    return number.toLocaleString('en-US');
  }

  function formatUpdatedAt(value) {
    if (!value) return '';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return '';

    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  function dataUrl() {
    const scripts = Array.from(document.scripts || []);
    const current = document.currentScript || scripts.find(function (script) {
      return /scholar-citations\.js(?:\?|$)/.test(script.src || '');
    });

    const base = current && current.src ? current.src : window.location.origin + '/assets/js/scholar-citations.js';
    const url = new URL('../data/scholar-citations.json', base);
    url.searchParams.set('v', String(Date.now()));
    return url.toString();
  }

  function isInlineLink(node) {
    return node.tagName && node.tagName.toLowerCase() === 'a';
  }

  function baseLabel(node) {
    if (!node.dataset.scholarBaseLabel) {
      node.dataset.scholarBaseLabel = node.textContent.replace(/\s+/g, ' ').trim() || 'Google Scholar';
    }

    return node.dataset.scholarBaseLabel;
  }

  function setUnavailable(node) {
    node.classList.add('is-unavailable');
    if (isInlineLink(node)) {
      node.textContent = baseLabel(node);
      return;
    }

    const value = node.querySelector('[data-scholar-citations-value]');
    const updated = node.querySelector('[data-scholar-updated]');
    if (value) value.textContent = 'Unavailable';
    if (updated) updated.textContent = '';
  }

  function setMetric(node, profile) {
    const formatted = profile && formatNumber(profile.citations);
    if (!formatted) {
      setUnavailable(node);
      return;
    }

    if (isInlineLink(node)) {
      node.textContent = baseLabel(node) + ' (' + formatted + ' citations)';
    }

    const value = node.querySelector('[data-scholar-citations-value]');
    const updated = node.querySelector('[data-scholar-updated]');
    if (value) value.textContent = formatted;

    const updatedAt = formatUpdatedAt(profile.updated_at);
    if (updated && updatedAt) updated.textContent = 'updated ' + updatedAt;

    const titleParts = ['Google Scholar citations'];
    if (typeof profile.h_index === 'number') titleParts.push('h-index ' + profile.h_index);
    if (typeof profile.i10_index === 'number') titleParts.push('i10-index ' + profile.i10_index);
    if (updatedAt) titleParts.push('updated ' + updatedAt);
    node.title = titleParts.join(', ');
    node.classList.add('is-ready');
  }

  onReady(function () {
    const nodes = Array.from(document.querySelectorAll('[data-scholar-user]'));
    if (!nodes.length || !window.fetch) return;

    window.fetch(dataUrl(), { cache: 'no-store' })
      .then(function (response) {
        if (!response.ok) throw new Error(response.status + ' ' + response.statusText);
        return response.json();
      })
      .then(function (data) {
        const profiles = (data && data.profiles) || {};
        nodes.forEach(function (node) {
          setMetric(node, profiles[node.dataset.scholarUser]);
        });
      })
      .catch(function () {
        nodes.forEach(setUnavailable);
      });
  });
})();
