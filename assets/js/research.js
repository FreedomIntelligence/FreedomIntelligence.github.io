/*
 * Research map interactions for /projects/ (markup in _pages/reading.md,
 * content in _data/research.yml):
 *   - /projects/#<program id> scrolls to and opens that program
 *   - search box (also ?q=), highlighting matches in both languages
 *   - sticky direction bar that follows the section in view
 *   - expand / collapse all, "/" to focus search, open everything for print
 */
(function () {
  'use strict';

  var page = document.querySelector('[data-rx-page]');
  if (!page) return;

  var root = document.documentElement;
  var topics = [].slice.call(page.querySelectorAll('[data-rx-topic]'));
  var sections = [].slice.call(page.querySelectorAll('[data-rx-section]'));
  var navBar = page.querySelector('[data-rx-nav]');
  var navLinks = [].slice.call(page.querySelectorAll('[data-rx-link]'));
  var input = page.querySelector('#rx-q');
  var statusEl = page.querySelector('[data-rx-status]');
  var emptyEl = page.querySelector('[data-rx-empty]');
  var clearButtons = [].slice.call(page.querySelectorAll('[data-rx-clear]'));
  var kbd = page.querySelector('.rx-search kbd');
  var toggle = page.querySelector('[data-rx-toggle]');
  var findButton = page.querySelector('[data-rx-find]');
  var autoOpened = new Set();
  var lastStatus = null;

  var TEXT = {
    en: {
      expand: 'Expand all programs',
      collapse: 'Collapse all programs',
      search: 'Search programs',
      clear: 'Clear search',
      status: function (n, total, q) {
        return n ? 'Programs matching “' + q + '”' : '';
      }
    },
    zh: {
      expand: '展开全部研究主线',
      collapse: '收起全部研究主线',
      search: '搜索研究主线',
      clear: '清除搜索',
      status: function (n, total, q) {
        return n ? '与“' + q + '”匹配的研究主线' : '';
      }
    }
  };

  // Old ?tag= filter links from the previous projects page.
  var LEGACY_TAGS = {
    'Foundation Models': 'multimodal-interaction',
    'Reasoning & Agents': 'agentic-ai',
    'AI Systems & Infrastructure': 'ai-for-infra',
    'World Models & Simulation': 'agentic-ai',
    'Healthcare AI': 'ai-applications',
    'Legal AI': 'legal-ai',
    'AI Education': 'ai-education',
    'Evaluation & Interpretability': 'evaluation-safety',
    'LLM Agents and Applications': 'llm-agents-applications',
    'Human-Agent Interaction': 'llm-agents-applications',
    'LLM Agents, Applications & Human-Agent Interaction': 'llm-agents-applications',
    'Clinical Agents & Hospital World Models': 'clinical-agents-hospital-world-models'
  };

  function lang() {
    return root.getAttribute('data-language') === 'zh' ? 'zh' : 'en';
  }

  function text() {
    return TEXT[lang()];
  }

  function normalize(value) {
    return String(value || '').toLowerCase().replace(/\s+/g, ' ');
  }

  function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // A program is an <article data-rx-topic>; its papers, code and data sit in
  // a <details data-rx-more> inside it.
  function moreOf(topic) {
    return topic.querySelector('[data-rx-more]');
  }

  function isOpen(topic) {
    var more = moreOf(topic);
    return !!(more && more.open);
  }

  function setOpen(topic, open) {
    var more = moreOf(topic);
    if (more) more.open = open;
  }

  function textOf(topic, selector) {
    var el = topic.querySelector(selector);
    return el ? el.textContent : '';
  }

  var index = topics.map(function (topic) {
    var section = topic.closest('[data-rx-section]');
    var sectionText = section ? section.getAttribute('data-rx-name') : '';
    return {
      el: topic,
      all: normalize(topic.textContent + ' ' + sectionText),
      head: normalize(textOf(topic, '.rx-program__head') + ' ' + textOf(topic, '.rx-program__intro') + ' ' + sectionText)
    };
  });

  /* Highlighting ------------------------------------------------------- */
  function clearHighlights() {
    var parents = new Set();
    [].slice.call(page.querySelectorAll('mark.rx-hit')).forEach(function (mark) {
      var parent = mark.parentNode;
      parents.add(parent);
      parent.replaceChild(document.createTextNode(mark.textContent), mark);
    });
    parents.forEach(function (parent) {
      parent.normalize();
    });
  }

  function highlight(element, terms) {
    var pattern = new RegExp('(' + terms.map(escapeRegExp).join('|') + ')', 'gi');
    var walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!node.nodeValue.trim() || node.parentNode.closest('mark, script, style')) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      var value = node.nodeValue;
      pattern.lastIndex = 0;
      if (!pattern.test(value)) return;
      pattern.lastIndex = 0;
      var fragment = document.createDocumentFragment();
      var last = 0;
      var match;
      while ((match = pattern.exec(value))) {
        if (!match[0]) {
          pattern.lastIndex += 1;
          continue;
        }
        if (match.index > last) fragment.appendChild(document.createTextNode(value.slice(last, match.index)));
        var mark = document.createElement('mark');
        mark.className = 'rx-hit';
        mark.textContent = match[0];
        fragment.appendChild(mark);
        last = match.index + match[0].length;
      }
      if (last < value.length) fragment.appendChild(document.createTextNode(value.slice(last)));
      node.parentNode.replaceChild(fragment, node);
    });
  }

  /* Search ------------------------------------------------------------- */
  function renderStatus() {
    if (!statusEl) return;
    statusEl.textContent = lastStatus ? text().status(lastStatus.n, lastStatus.total, lastStatus.q) : '';
  }

  function syncQueryParam(query) {
    var url = new URL(window.location.href);
    if (query) url.searchParams.set('q', query);
    else url.searchParams.delete('q');
    window.history.replaceState(window.history.state, '', url);
  }

  function applySearch(raw, options) {
    var query = String(raw || '').trim();
    var terms = normalize(query).split(' ').filter(Boolean);
    var visible = 0;

    clearHighlights();
    index.forEach(function (item) {
      var match = terms.every(function (term) {
        return item.all.indexOf(term) !== -1;
      });
      var inHead = terms.length > 0 && terms.every(function (term) {
        return item.head.indexOf(term) !== -1;
      });
      item.el.hidden = !match;
      if (match) visible += 1;

      if (terms.length && match && !inHead) {
        // The match is in the papers or resources: open the program to show it.
        if (!isOpen(item.el)) {
          setOpen(item.el, true);
          autoOpened.add(item.el);
        }
      } else if (autoOpened.has(item.el)) {
        setOpen(item.el, false);
        autoOpened.delete(item.el);
      }
      if (terms.length && match) highlight(item.el, terms);
    });

    sections.forEach(function (section) {
      var hasVisible = !!section.querySelector('[data-rx-topic]:not([hidden])');
      section.hidden = terms.length > 0 && !hasVisible;
    });
    navLinks.forEach(function (link) {
      var section = document.getElementById(link.getAttribute('data-rx-link'));
      link.classList.toggle('is-empty', !!(section && section.hidden));
    });

    // While searching, hide the direction cards so results sit right under the box.
    page.classList.toggle('is-searching', terms.length > 0);
    lastStatus = terms.length ? { n: visible, total: topics.length, q: query } : null;
    renderStatus();
    if (emptyEl) emptyEl.hidden = !(terms.length && visible === 0);
    clearButtons.forEach(function (button) {
      if (button.closest('.rx-search')) button.hidden = !query;
    });
    if (kbd) kbd.hidden = !!query;
    if (!options || !options.keepUrl) syncQueryParam(query);
    updateToggle();
    scheduleActive();
  }

  function setQuery(value, options) {
    if (input) input.value = value;
    applySearch(value, options);
  }

  /* Expand / collapse all ------------------------------------------------ */
  function visibleTopics() {
    return topics.filter(function (topic) {
      return !topic.hidden;
    });
  }

  function updateToggle() {
    if (!toggle) return;
    var shown = visibleTopics();
    var allOpen = shown.length > 0 && shown.every(isOpen);
    toggle.querySelector('[data-rx-toggle-text="expand"]').hidden = allOpen;
    toggle.querySelector('[data-rx-toggle-text="collapse"]').hidden = !allOpen;
    [].slice.call(toggle.querySelectorAll('[data-rx-toggle-icon]')).forEach(function (icon) {
      icon.hidden = (icon.getAttribute('data-rx-toggle-icon') === 'collapse') !== allOpen;
    });
    toggle.setAttribute('aria-label', allOpen ? text().collapse : text().expand);
    toggle.setAttribute('aria-pressed', String(allOpen));
  }

  var toggleFrame = 0;
  function scheduleToggleUpdate() {
    if (toggleFrame) return;
    toggleFrame = window.requestAnimationFrame(function () {
      toggleFrame = 0;
      updateToggle();
    });
  }

  /* Sticky direction bar ------------------------------------------------- */
  function barBottom() {
    if (!navBar) return 120;
    var top = parseFloat(window.getComputedStyle(navBar).top) || 57;
    return top + navBar.offsetHeight;
  }

  function keepVisible(link) {
    var bar = link.parentNode;
    var barBox = bar.getBoundingClientRect();
    var box = link.getBoundingClientRect();
    if (box.left < barBox.left) bar.scrollLeft -= barBox.left - box.left + 12;
    else if (box.right > barBox.right) bar.scrollLeft += box.right - barBox.right + 12;
  }

  function updateActive() {
    activeFrame = 0;
    var limit = barBottom() + 32;
    var current = null;
    sections.forEach(function (section) {
      if (!section.hidden && section.getBoundingClientRect().top <= limit) current = section;
    });
    navLinks.forEach(function (link) {
      var active = !!current && link.getAttribute('data-rx-link') === current.id;
      link.classList.toggle('is-active', active);
      if (active) {
        link.setAttribute('aria-current', 'location');
        keepVisible(link);
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  var activeFrame = 0;
  function scheduleActive() {
    if (!activeFrame) activeFrame = window.requestAnimationFrame(updateActive);
  }

  /* Deep links ------------------------------------------------------------- */
  function targetFromHash() {
    var id;
    try {
      id = decodeURIComponent(window.location.hash.slice(1));
    } catch (error) {
      return null;
    }
    var target = id ? document.getElementById(id) : null;
    return target && page.contains(target) ? target : null;
  }

  function isHiddenBySearch(target) {
    var section = target.closest('[data-rx-section]');
    return target.hidden || !!(section && section.hidden);
  }

  function reveal(target, scroll) {
    var wasHidden = isHiddenBySearch(target);
    if (wasHidden) setQuery('');
    if (target.matches('[data-rx-topic]')) {
      setOpen(target, true);
      autoOpened.delete(target);
    }
    if (scroll || wasHidden) {
      window.requestAnimationFrame(function () {
        target.scrollIntoView({ block: 'start' });
      });
    }
  }

  function jumpTo(target) {
    // Instant, even with `scroll-behavior: smooth`: arriving on a deep link
    // should not animate from the top of the page.
    var style = root.style;
    var previous = style.scrollBehavior;
    style.scrollBehavior = 'auto';
    target.scrollIntoView({ block: 'start' });
    style.scrollBehavior = previous;
  }

  // Fonts and icons that finish loading after the first scroll can push the
  // target down. Re-align once they are ready, unless the visitor has scrolled.
  function settleOn(target) {
    var moved = false;
    var stop = function () {
      moved = true;
    };
    ['wheel', 'touchmove', 'keydown', 'mousedown'].forEach(function (type) {
      window.addEventListener(type, stop, { passive: true, once: true });
    });
    var align = function () {
      if (!moved) jumpTo(target);
    };
    window.requestAnimationFrame(align);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(align);
    if (document.readyState === 'complete') window.setTimeout(align, 0);
    else window.addEventListener('load', align, { once: true });
  }

  /* Language ----------------------------------------------------------------- */
  function syncLanguage() {
    var current = lang();
    if (input) input.placeholder = input.getAttribute('data-placeholder-' + current) || input.placeholder;
    [].slice.call(page.querySelectorAll('img[data-alt-' + current + ']')).forEach(function (img) {
      img.alt = img.getAttribute('data-alt-' + current);
    });
    clearButtons.forEach(function (button) {
      if (button.closest('.rx-search')) button.setAttribute('aria-label', text().clear);
    });
    if (findButton) findButton.setAttribute('aria-label', text().search);
    updateToggle();
    renderStatus();
  }

  /* Wiring ------------------------------------------------------------------- */
  var debounce = 0;
  if (input) {
    input.addEventListener('input', function () {
      window.clearTimeout(debounce);
      debounce = window.setTimeout(function () {
        applySearch(input.value);
      }, 120);
    });
    input.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        if (input.value) setQuery('');
        else input.blur();
      } else if (event.key === 'Enter') {
        var first = topics.filter(function (topic) {
          return !topic.hidden;
        })[0];
        if (first) first.scrollIntoView({ block: 'start' });
      }
    });
  }

  clearButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      setQuery('');
      if (input) input.focus();
    });
  });

  if (findButton && input) {
    findButton.addEventListener('click', function () {
      input.scrollIntoView({ block: 'center' });
      input.focus({ preventScroll: true });
    });
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var shown = visibleTopics();
      var open = !shown.every(isOpen);
      shown.forEach(function (topic) {
        setOpen(topic, open);
      });
      autoOpened.clear();
      updateToggle();
    });
  }

  topics.forEach(function (topic) {
    var more = moreOf(topic);
    if (!more) return;
    more.addEventListener('toggle', function () {
      if (!more.open) autoOpened.delete(topic);
      scheduleToggleUpdate();
    });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key !== '/' || event.ctrlKey || event.metaKey || event.altKey || !input) return;
    var tag = (event.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || tag === 'select' || event.target.isContentEditable) return;
    event.preventDefault();
    input.focus();
    input.select();
  });

  // In-page links to something the current search hides: clear the search first,
  // so the browser can scroll to it. Links to a program also open it.
  page.addEventListener('click', function (event) {
    var link = event.target.closest('a[href^="#"]');
    if (!link) return;
    var target = document.getElementById(decodeURIComponent(link.getAttribute('href').slice(1)));
    if (!target) return;
    if (isHiddenBySearch(target)) setQuery('');
    if (target.matches('[data-rx-topic]')) setOpen(target, true);
  });

  window.addEventListener('hashchange', function () {
    var target = targetFromHash();
    if (target) reveal(target, false);
  });

  window.addEventListener('scroll', scheduleActive, { passive: true });
  window.addEventListener('resize', scheduleActive);

  var printState = null;
  window.addEventListener('beforeprint', function () {
    printState = topics.map(isOpen);
    topics.forEach(function (topic) {
      setOpen(topic, true);
    });
  });
  window.addEventListener('afterprint', function () {
    if (!printState) return;
    topics.forEach(function (topic, i) {
      setOpen(topic, printState[i]);
    });
    printState = null;
  });

  new MutationObserver(syncLanguage).observe(root, { attributes: true, attributeFilter: ['data-language'] });

  /* Start ------------------------------------------------------------------- */
  var params = new URLSearchParams(window.location.search);
  var legacy = LEGACY_TAGS[params.get('tag')];
  if (!window.location.hash && legacy) {
    var url = new URL(window.location.href);
    url.searchParams.delete('tag');
    url.hash = legacy;
    window.history.replaceState(window.history.state, '', url);
  }

  syncLanguage();
  var initialQuery = params.get('q');
  if (initialQuery) setQuery(initialQuery, { keepUrl: true });

  var initialTarget = targetFromHash();
  if (initialTarget) {
    reveal(initialTarget, false);
    settleOn(initialTarget);
  }

  updateToggle();
  scheduleActive();
})();
