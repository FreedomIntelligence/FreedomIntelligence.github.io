---
layout: page
permalink: /publications/
title: Publications
description:
years: [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016]
publication_tags:
  - Multi-modal LLMs
  - Medical LLMs
  - Multilingual LLMs
  - Agent
  - AI for Social Science
  - Human-agent Interaction
  - Speech LLMs
  - AI for Reasoning and Agentic RL
  - AI for Healthcare
  - LLM Efficiency and AI Infra
  - LLM Interpretability
  - World Models and Embodied AI
nav: true
nav_order: 2
---
<!-- _pages/publications.md -->
<style>
  .publication-filter {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0.4rem 0 1.5rem;
  }

  .publication-filter button {
    border: 1px solid var(--global-divider-color);
    border-radius: 999px;
    background: var(--global-bg-color);
    color: var(--global-text-color);
    cursor: pointer;
    font-size: 0.88rem;
    line-height: 1.2;
    padding: 0.38rem 0.72rem;
    transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
  }

  .publication-filter button:hover,
  .publication-filter button.is-active {
    border-color: var(--global-theme-color);
    background: var(--global-theme-color);
    color: #fff;
  }

  .publication-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin: 0.35rem 0 0.2rem;
  }

  .publication-tag {
    border: 1px solid var(--global-divider-color);
    border-radius: 999px;
    color: var(--global-text-color-light);
    font-size: 0.74rem;
    line-height: 1.2;
    padding: 0.18rem 0.5rem;
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

<div class="publication-filter" aria-label="Publication filters">
  <button type="button" class="is-active" data-publication-filter="all">All</button>
  {% for tag in page.publication_tags %}
    <button type="button" data-publication-filter="{{ tag | escape }}">{{ tag }}</button>
  {% endfor %}
</div>

<p class="publication-empty" hidden>No publications found for this tag.</p>

<div class="publications" id="publication-list">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const buttons = Array.from(document.querySelectorAll('[data-publication-filter]'));
    const entries = Array.from(document.querySelectorAll('.publication-entry'));
    const years = Array.from(document.querySelectorAll('.publications .year'));
    const empty = document.querySelector('.publication-empty');

    function tagsFor(entry) {
      return (entry.dataset.tags || '')
        .split(';')
        .map(function (tag) { return tag.trim(); })
        .filter(Boolean);
    }

    function updateYears() {
      years.forEach(function (yearHeading) {
        const list = yearHeading.nextElementSibling;
        const hasVisibleEntry = list && list.matches('ol.bibliography')
          ? Boolean(list.querySelector('.publication-entry:not(.is-hidden)'))
          : false;

        yearHeading.classList.toggle('is-hidden', !hasVisibleEntry);
        if (list && list.matches('ol.bibliography')) {
          list.classList.toggle('is-hidden', !hasVisibleEntry);
        }
      });
    }

    function setFilter(activeTag, updateUrl) {
      let visibleCount = 0;

      entries.forEach(function (entry) {
        const shouldShow = activeTag === 'all' || tagsFor(entry).includes(activeTag);
        const item = entry.closest('li');
        entry.classList.toggle('is-hidden', !shouldShow);
        if (item) item.classList.toggle('is-hidden', !shouldShow);
        if (shouldShow) visibleCount += 1;
      });

      buttons.forEach(function (button) {
        const isActive = button.dataset.publicationFilter === activeTag;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
      });

      if (empty) empty.hidden = visibleCount > 0;
      updateYears();

      if (updateUrl) {
        const url = new URL(window.location.href);
        if (activeTag === 'all') {
          url.searchParams.delete('tag');
        } else {
          url.searchParams.set('tag', activeTag);
        }
        window.history.replaceState({}, '', url);
      }
    }

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        setFilter(button.dataset.publicationFilter, true);
      });
    });

    const initialTag = new URLSearchParams(window.location.search).get('tag');
    const hasInitialTag = buttons.some(function (button) {
      return button.dataset.publicationFilter === initialTag;
    });
    setFilter(hasInitialTag ? initialTag : 'all', false);
  });
</script>
