---
layout: page
permalink: /publications/
title: Publications
title_zh: 论文
description:
years: [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016]
nav: true
nav_order: 2
---
<!-- _pages/publications.md -->
<style>
  /* Filters use the six research directions of _data/research.yml (same as /projects/). */
  .pub-filter {
    margin: 0.4rem 0 1.6rem;
  }

  .pub-filter__row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .pub-filter__programs {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.4rem;
    margin-top: 0.7rem;
    padding: 0.7rem 0.8rem;
    border-radius: 14px;
    background: var(--rx-soft);
  }

  .pub-filter__programs[hidden] {
    display: none;
  }

  .pub-filter p.pub-status {
    margin: 0.8rem 0 0;
    color: var(--rx-muted);
    font-size: 0.86rem;
  }

  .publication-meta-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.35rem 0.4rem;
    margin: 0.35rem 0 0.25rem;
  }

  .publication-tags,
  .publication-metrics {
    display: contents;
  }

  .publication-tag {
    border: 1px solid var(--rx-line-strong);
    border-radius: 999px;
    color: var(--rx-muted);
    font-size: 0.74rem;
    line-height: 1.2;
    padding: 0.18rem 0.5rem;
  }

  .publication-metric {
    border: 1px solid var(--global-divider-color);
    border-radius: 999px;
    color: var(--global-text-color-light);
    font-size: 0.76rem;
    line-height: 1.2;
    padding: 0.18rem 0.5rem;
  }

  .publication-metric:hover {
    border-color: var(--rx-ink);
    color: var(--rx-ink);
    text-decoration: none;
  }

  .publications ol.bibliography.is-hidden,
  .publications li.is-hidden,
  .publication-entry.is-hidden,
  .publications .year.is-hidden {
    display: none;
  }

  .publication-empty {
    color: var(--global-text-color-light);
    margin: 1rem 0;
  }
</style>

{%- assign rx = site.data.research %}
<div class="pub-filter" data-pub-filter>
  <div class="pub-filter__row" role="group" aria-label="Filter by research direction">
    <button type="button" class="rx-filter-chip is-active" data-pub-dir="all" aria-pressed="true">{% include icon.html name="layers" %}<span data-lang="en">All</span><span data-lang="zh">全部</span></button>
    {%- for d in rx.directions %}
    <button type="button" class="rx-filter-chip" data-pub-dir="{{ d.id }}" aria-pressed="false">{% include icon.html name=d.icon %}<span data-lang="en">{{ d.name }}</span><span data-lang="zh">{{ d.name_zh }}</span></button>
    {%- endfor %}
  </div>
  {%- for d in rx.directions %}
  <div class="pub-filter__programs" data-pub-programs="{{ d.id }}" role="group" aria-label="{{ d.name }} programs" hidden>
    <button type="button" class="rx-filter-chip rx-filter-chip--sub is-active" data-pub-prog="all" aria-pressed="true"><span data-lang="en">All programs</span><span data-lang="zh">全部研究主线</span></button>
    {%- for t in d.topics %}
    <button type="button" class="rx-filter-chip rx-filter-chip--sub" data-pub-prog="{{ t.id }}" aria-pressed="false">{% include icon.html name=t.icon %}<span data-lang="en">{{ t.short }}</span><span data-lang="zh">{{ t.short_zh }}</span></button>
    {%- endfor %}
  </div>
  {%- endfor %}
  <p class="pub-status sr-only" data-pub-status aria-live="polite"></p>
</div>

<p class="publication-empty" hidden><span data-lang="en">No publications in this selection yet.</span><span data-lang="zh">该分类下暂无论文。</span></p>

<div class="publications" id="publication-list">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>

<script>
  // Filter by research direction and program (ids from _data/research.yml).
  // URLs: ?direction=<id> and ?program=<id>; old ?tag=<name> links still work.
  document.addEventListener('DOMContentLoaded', function () {
    const root = document.documentElement;
    const filter = document.querySelector('[data-pub-filter]');
    if (!filter) return;
    const entries = Array.from(document.querySelectorAll('.publication-entry'));
    const years = Array.from(document.querySelectorAll('.publications .year'));
    const empty = document.querySelector('.publication-empty');
    const status = filter.querySelector('[data-pub-status]');
    const dirButtons = Array.from(filter.querySelectorAll('[data-pub-dir]'));
    const rows = Array.from(filter.querySelectorAll('[data-pub-programs]'));
    const LEGACY = {
      'Multi-modal LLMs': ['multimodal-interaction', 'multimodal-llms'],
      'Medical LLMs': ['ai-applications'],
      'Multilingual LLMs': ['multimodal-interaction', 'multilingual-llms'],
      'Agent': ['agentic-ai'],
      'AI for Social Science': ['ai-applications', 'economic-world-models'],
      'Human-agent Interaction': ['agentic-ai', 'llm-agents-applications'],
      'Speech LLMs': ['multimodal-interaction', 'speech-llms'],
      'AI for Reasoning and Agentic RL': ['agentic-ai', 'llm-reasoning-agentic-rl'],
      'AI for Healthcare': ['ai-applications'],
      'LLM Efficiency and AI Infra': ['ai-for-infra'],
      'LLM Interpretability': ['evaluation-safety', 'interpretable-llms'],
      'World Models and Embodied AI': ['physical-ai']
    };
    const state = { dir: 'all', prog: 'all' };

    function ids(value) {
      return (value || '').split(' ').filter(Boolean);
    }
    entries.forEach(function (entry) {
      entry.rxDirs = ids(entry.dataset.directions);
      entry.rxProgs = ids(entry.dataset.programs);
    });

    // Programs without papers are hidden.
    const counts = { all: entries.length };
    entries.forEach(function (entry) {
      entry.rxDirs.concat(entry.rxProgs).forEach(function (id) {
        counts[id] = (counts[id] || 0) + 1;
      });
    });
    filter.querySelectorAll('[data-pub-prog]').forEach(function (button) {
      const id = button.dataset.pubProg;
      if (id !== 'all' && !counts[id]) button.hidden = true;
    });

    function directionOf(program) {
      const row = rows.find(function (r) {
        return r.querySelector('[data-pub-prog="' + program + '"]');
      });
      return row ? row.dataset.pubPrograms : null;
    }

    function nameOf(button) {
      const lang = root.getAttribute('data-language') === 'zh' ? 'zh' : 'en';
      const span = button && button.querySelector('[data-lang="' + lang + '"]');
      return span ? span.textContent.trim() : '';
    }

    function render(updateUrl) {
      let shown = 0;
      entries.forEach(function (entry) {
        const ok = (state.dir === 'all' || entry.rxDirs.includes(state.dir)) &&
          (state.prog === 'all' || entry.rxProgs.includes(state.prog));
        const item = entry.closest('li');
        entry.classList.toggle('is-hidden', !ok);
        if (item) item.classList.toggle('is-hidden', !ok);
        if (ok) shown += 1;
      });
      years.forEach(function (heading) {
        const list = heading.nextElementSibling;
        const isList = !!(list && list.matches('ol.bibliography'));
        const any = isList && !!list.querySelector('.publication-entry:not(.is-hidden)');
        heading.classList.toggle('is-hidden', !any);
        if (isList) list.classList.toggle('is-hidden', !any);
      });
      dirButtons.forEach(function (button) {
        const on = button.dataset.pubDir === state.dir;
        button.classList.toggle('is-active', on);
        button.setAttribute('aria-pressed', String(on));
      });
      rows.forEach(function (row) {
        row.hidden = row.dataset.pubPrograms !== state.dir;
        row.querySelectorAll('[data-pub-prog]').forEach(function (button) {
          const on = button.dataset.pubProg === state.prog;
          button.classList.toggle('is-active', on);
          button.setAttribute('aria-pressed', String(on));
        });
      });
      if (empty) empty.hidden = shown > 0;

      if (state.dir === 'all') {
        status.textContent = '';
      } else {
        const dirName = nameOf(filter.querySelector('[data-pub-dir="' + state.dir + '"]'));
        const progName = state.prog === 'all' ? '' : nameOf(filter.querySelector('[data-pub-prog="' + state.prog + '"]'));
        const label = progName ? dirName + ' · ' + progName : dirName;
        status.textContent = root.getAttribute('data-language') === 'zh'
          ? '当前显示：' + label
          : 'Showing papers in ' + label;
      }

      if (updateUrl) {
        const url = new URL(window.location.href);
        url.searchParams.delete('tag');
        if (state.dir === 'all') url.searchParams.delete('direction');
        else url.searchParams.set('direction', state.dir);
        if (state.prog === 'all') url.searchParams.delete('program');
        else url.searchParams.set('program', state.prog);
        window.history.replaceState({}, '', url);
      }
    }

    function set(dir, prog, updateUrl) {
      state.dir = dir || 'all';
      state.prog = state.dir === 'all' ? 'all' : (prog || 'all');
      render(updateUrl);
    }

    dirButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        set(button.dataset.pubDir, 'all', true);
      });
    });
    rows.forEach(function (row) {
      row.addEventListener('click', function (event) {
        const button = event.target.closest('[data-pub-prog]');
        if (button) set(state.dir, button.dataset.pubProg, true);
      });
    });

    // A direction tag inside an entry filters the list in place.
    document.addEventListener('click', function (event) {
      const tag = event.target.closest('[data-pub-direction]');
      if (!tag || event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
      event.preventDefault();
      set(tag.dataset.pubDirection, 'all', true);
      filter.scrollIntoView({ block: 'start' });
    });

    new MutationObserver(function () {
      render(false);
    }).observe(root, { attributes: true, attributeFilter: ['data-language'] });

    const params = new URLSearchParams(window.location.search);
    let dir = params.get('direction');
    let prog = params.get('program');
    const legacy = LEGACY[params.get('tag')];
    if (!dir && !prog && legacy) {
      dir = legacy[0];
      prog = legacy[1];
    }
    if (prog && !dir) dir = directionOf(prog);
    if (dir && !dirButtons.some(function (b) { return b.dataset.pubDir === dir; })) dir = null;
    if (prog && directionOf(prog) !== dir) prog = null;
    set(dir, prog, !!legacy);
  });
</script>
<script defer src="{{ '/assets/js/publication-metrics.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>
