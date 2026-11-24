---
layout: page
permalink: /projects/
title: Projects
title_zh: 项目
description: Open models, benchmarks, datasets, and systems from Freedom AI, organized into six connected research directions.
description_zh: Freedom AI 的开源模型、评测基准、数据集与系统，按六个相互连接的研究方向组织。
hide_title: true
nav: true
nav_order: 2
---
{%- comment -%}
  This page only renders the research map. To add or edit a direction, program,
  paper, or resource, edit _data/research.yml: the homepage cards, the footer,
  and the breadcrumbs on /projects/<name>/ pages update from the same file.
  Icons are names from _data/icons.yml. Deep links: /projects/#<direction id>
  and /projects/#<program id> (opens its papers and resources).
{%- endcomment -%}
{%- assign rx = site.data.research -%}
<div class="rx-page" data-rx-page>
  <link rel="stylesheet" href="{{ '/assets/css/research.css' | relative_url }}?v={{ site.time | date: '%s' }}">

  <header class="rx-hero">
    <div class="rx-hero__main">
      <p class="rx-hero__eyebrow"><span data-lang="en">Projects</span><span data-lang="zh">项目</span></p>
      <h1 class="rx-hero__title"><span data-lang="en">Open, capable, and deployable AI, across six connected directions.</span><span data-lang="zh">围绕六个相互连接的方向，构建开放、强大、可落地的 AI。</span></h1>
    </div>
    <div class="rx-hero__side">
      <p class="rx-hero__lead"><span data-lang="en">Each program turns research into open models, datasets, benchmarks, and systems that others can build on.</span><span data-lang="zh">每条研究主线都把研究变成他人可以直接使用的开源模型、数据集、评测基准与系统。</span></p>
      <div class="rx-search" role="search">
        {% include icon.html name="search" %}
        <label class="sr-only" for="rx-q"><span data-lang="en">Search programs, papers, code, and datasets</span><span data-lang="zh">搜索研究主线、论文、代码与数据集</span></label>
        <input id="rx-q" type="search" autocomplete="off" spellcheck="false" enterkeyhint="search" placeholder="Search programs, papers, code, datasets…" data-placeholder-en="Search programs, papers, code, datasets…" data-placeholder-zh="搜索研究主线、论文、代码、数据集…">
        <kbd title="Press / to search">/</kbd>
        <button type="button" class="rx-search__clear" data-rx-clear hidden aria-label="Clear search">{% include icon.html name="x" %}</button>
      </div>
      <p class="rx-search-status" data-rx-status aria-live="polite"></p>
    </div>
  </header>

  {% include research/direction-index.html base="" compact="1" %}

  <div class="rx-nav" data-rx-nav>
    <nav class="rx-nav__links" aria-label="Jump to a research direction">
      {%- for d in rx.directions %}
      <a class="rx-nav__link" href="#{{ d.id }}" data-rx-link="{{ d.id }}">{% include icon.html name=d.icon %}<span data-lang="en">{{ d.name }}</span><span data-lang="zh">{{ d.name_zh }}</span></a>
      {%- endfor %}
    </nav>
    <div class="rx-nav__tools">
      <button type="button" class="rx-tool rx-tool--icon" data-rx-find aria-label="Search">{% include icon.html name="search" %}</button>
      <button type="button" class="rx-tool" data-rx-toggle aria-pressed="false" aria-label="Expand all programs">
        <span class="rx-tool__icon" data-rx-toggle-icon="expand">{% include icon.html name="chevrons-up-down" %}</span><span class="rx-tool__icon" data-rx-toggle-icon="collapse" hidden>{% include icon.html name="chevrons-down-up" %}</span>
        <span class="rx-tool__text"><span data-rx-toggle-text="expand"><span data-lang="en">Expand all</span><span data-lang="zh">全部展开</span></span><span data-rx-toggle-text="collapse" hidden><span data-lang="en">Collapse all</span><span data-lang="zh">全部收起</span></span></span>
      </button>
    </div>
  </div>

  {%- for d in rx.directions %}
  <section class="rx-section" id="{{ d.id }}" data-rx-section data-rx-name="{{ d.name | escape }} {{ d.name_zh | escape }} {{ d.tagline | escape }} {{ d.tagline_zh | escape }}" aria-labelledby="{{ d.id }}-heading">
    <header class="rx-section__head">
      <div class="rx-section__title">
        <p class="rx-section__num">{% if forloop.index < 10 %}0{% endif %}{{ forloop.index }}<span data-lang="zh"> · {{ d.name }}</span></p>
        <h2 id="{{ d.id }}-heading"><span data-lang="en">{{ d.name }}</span><span data-lang="zh">{{ d.name_zh }}</span></h2>
      </div>
      <div class="rx-section__intro">
        <span class="rx-section__icon">{% include icon.html name=d.icon %}</span>
        <p class="rx-section__lead"><span data-lang="en">{{ d.tagline }}</span><span data-lang="zh">{{ d.tagline_zh }}</span></p>
        <p class="rx-section__links">
          <a class="rx-link" href="{{ '/publications/' | relative_url }}?direction={{ d.id }}"><span data-lang="en">Papers in this direction</span><span data-lang="zh">该方向的论文</span>{% include icon.html name="arrow-right" %}</a>
          <a class="rx-link" href="{{ '/blog/' | relative_url }}?direction={{ d.id }}"><span data-lang="en">Related posts</span><span data-lang="zh">相关文章</span>{% include icon.html name="arrow-right" %}</a>
        </p>
      </div>
    </header>

    {%- for t in d.topics %}
    {%- assign np = t.papers | size %}
    {%- assign nr = t.resources | size %}
    <article class="rx-program" id="{{ t.id }}" data-rx-topic>
      <div class="rx-program__head">
        <span class="rx-program__icon">{% include icon.html name=t.icon %}</span>
        <h3 class="rx-program__title"><span data-lang="en">{{ t.title }}</span><span data-lang="zh">{{ t.title_zh }}</span></h3>
        <p class="rx-program__kicker"><span data-lang="en">{{ t.kicker }}</span><span data-lang="zh">{{ t.kicker_zh }}</span></p>
      </div>
      <div class="rx-program__body">
        <div class="rx-program__intro">
          <p class="rx-program__summary"><span data-lang="en">{{ t.summary }}</span><span data-lang="zh">{{ t.summary_zh }}</span></p>
          {%- if t.highlights %}
          <p class="rx-program__highlights"><span class="rx-program__label"><span data-lang="en">Key projects</span><span data-lang="zh">代表项目</span></span>{% for h in t.highlights %}<span class="rx-program__name">{% if t.highlights_zh %}<span data-lang="en">{{ h }}</span><span data-lang="zh">{{ t.highlights_zh[forloop.index0] }}</span>{% else %}{{ h }}{% endif %}</span>{% unless forloop.last %}<span class="rx-dot" aria-hidden="true"> · </span>{% endunless %}{% endfor %}</p>
          {%- endif %}
          <div class="rx-program__actions">
            {%- if t.page %}
            <a class="rx-link rx-link--strong" href="{{ t.page | relative_url }}"><span data-lang="en">Project page</span><span data-lang="zh">项目主页</span>{% include icon.html name="arrow-right" %}</a>
            {%- endif %}
            {%- for l in t.links %}
            {%- assign primary = false %}
            {%- if forloop.first and t.page == nil %}{% assign primary = true %}{% endif %}
            {%- assign ext = false %}
            {%- if l.url contains '://' %}{% assign ext = true %}{% endif %}
            {%- if l.url_zh %}
            <a class="rx-link{% if primary %} rx-link--strong{% endif %}" data-lang="en" href="{{ l.url | relative_url }}">{{ l.label }}{% include icon.html name="arrow-right" %}</a>
            <a class="rx-link{% if primary %} rx-link--strong{% endif %}" data-lang="zh" href="{{ l.url_zh | relative_url }}">{{ l.label_zh }}{% include icon.html name="arrow-right" %}</a>
            {%- else %}
            <a class="rx-link{% if primary %} rx-link--strong{% endif %}" href="{% if ext %}{{ l.url }}{% else %}{{ l.url | relative_url }}{% endif %}"{% if ext %} target="_blank" rel="noopener"{% endif %}><span data-lang="en">{{ l.label }}</span><span data-lang="zh">{{ l.label_zh }}</span>{% if ext %}{% include icon.html name="arrow-up-right" %}{% else %}{% include icon.html name="arrow-right" %}{% endif %}</a>
            {%- endif %}
            {%- endfor %}
          </div>
        </div>

        <details class="rx-program__more" data-rx-more>
          <summary>
            <span class="rx-program__more-label">
              {%- if np > 0 and nr > 0 -%}<span data-lang="en">Key papers, code &amp; data</span><span data-lang="zh">代表论文、代码与数据</span>
              {%- elsif np > 0 -%}<span data-lang="en">Key papers</span><span data-lang="zh">代表论文</span>
              {%- else -%}<span data-lang="en">More details</span><span data-lang="zh">更多内容</span>{%- endif -%}
            </span>
            <span class="rx-program__more-action" aria-hidden="true">{% include icon.html name="chevron-down" %}</span>
          </summary>

          <div class="rx-program__detail">
            {%- if t.image %}
            <figure class="rx-figure">
              {%- if t.image_zh %}
              <a data-lang="en" href="{{ t.image | relative_url }}" target="_blank" rel="noopener"><img src="{{ t.image | relative_url }}" alt="{{ t.image_alt | escape }}" loading="lazy" decoding="async"></a>
              <a data-lang="zh" href="{{ t.image_zh | relative_url }}" target="_blank" rel="noopener"><img src="{{ t.image_zh | relative_url }}" alt="{{ t.image_alt_zh | escape }}" loading="lazy" decoding="async"></a>
              {%- else %}
              <a href="{{ t.image | relative_url }}" target="_blank" rel="noopener"><img src="{{ t.image | relative_url }}" alt="{{ t.image_alt | escape }}" data-alt-en="{{ t.image_alt | escape }}" data-alt-zh="{{ t.image_alt_zh | escape }}" loading="lazy" decoding="async"></a>
              {%- endif %}
            </figure>
            {%- endif %}

            {%- if np > 0 or t.steps %}
            <h4 class="rx-subhead">
              {%- if t.list_title -%}<span data-lang="en">{{ t.list_title }}</span><span data-lang="zh">{{ t.list_title_zh }}</span>
              {%- else -%}<span data-lang="en">Key papers</span><span data-lang="zh">代表论文</span>{%- endif -%}
            </h4>
            <ol class="rx-list">
              {%- for p in t.papers %}
              {%- assign ext = false %}
              {%- if p.url contains '://' or p.url contains '.pdf' %}{% assign ext = true %}{% endif %}
              <li><a href="{% if p.url contains '://' %}{{ p.url }}{% else %}{{ p.url | relative_url }}{% endif %}"{% if ext %} target="_blank" rel="noopener"{% endif %}>{{ p.title }}</a>{% if p.venue %}<span class="rx-venue">{{ p.venue }}</span>{% endif %}<span class="rx-note"><span data-lang="en">{{ p.note }}</span><span data-lang="zh">{{ p.note_zh }}</span></span></li>
              {%- endfor %}
              {%- for s in t.steps %}
              {%- assign ext = false %}
              {%- if s.url contains '://' %}{% assign ext = true %}{% endif %}
              <li>
                {%- if s.url and s.url_zh -%}
                <a data-lang="en" href="{{ s.url | relative_url }}">{{ s.title }}</a><a data-lang="zh" href="{{ s.url_zh | relative_url }}">{{ s.title_zh }}</a>
                {%- elsif s.url -%}
                <a href="{% if ext %}{{ s.url }}{% else %}{{ s.url | relative_url }}{% endif %}"{% if ext %} target="_blank" rel="noopener"{% endif %}><span data-lang="en">{{ s.title }}</span><span data-lang="zh">{{ s.title_zh }}</span></a>
                {%- else -%}
                <span class="rx-list__title"><span data-lang="en">{{ s.title }}</span><span data-lang="zh">{{ s.title_zh }}</span></span>
                {%- endif -%}
                {%- if s.venue %}<span class="rx-venue">{{ s.venue }}</span>{% endif -%}
                {%- if s.note %}<span class="rx-note"><span data-lang="en">{{ s.note }}</span><span data-lang="zh">{{ s.note_zh }}</span></span>{% endif -%}
              </li>
              {%- endfor %}
            </ol>
            {%- endif %}

            {%- if nr > 0 %}
            <h4 class="rx-subhead"><span data-lang="en">Code, models &amp; data</span><span data-lang="zh">代码、模型与数据</span></h4>
            <div class="rx-resource-grid">
              {%- for r in t.resources %}
              {%- assign ty = rx.types[r.type] %}
              {%- assign ext = false %}
              {%- if r.url contains '://' or r.url contains '.pdf' %}{% assign ext = true %}{% endif %}
              <a class="rx-resource" href="{% if r.url contains '://' %}{{ r.url }}{% else %}{{ r.url | relative_url }}{% endif %}"{% if ext %} target="_blank" rel="noopener"{% endif %}>
                <span class="rx-resource__icon">{% include icon.html name=ty.icon %}</span>
                <span class="rx-resource__text">
                  <span class="rx-resource__type">{% if r.venue %}{{ r.venue }}{% else %}<span data-lang="en">{{ ty.en }}</span><span data-lang="zh">{{ ty.zh }}</span>{% endif %}</span>
                  <span class="rx-resource__name">{{ r.name | replace: '/', '/<wbr>' }}</span>
                  <span class="rx-resource__note"><span data-lang="en">{{ r.note }}</span><span data-lang="zh">{{ r.note_zh }}</span></span>
                </span>
                {% if ext %}{% include icon.html name="arrow-up-right" class="rx-resource__go" %}{% else %}{% include icon.html name="arrow-right" class="rx-resource__go" %}{% endif %}
              </a>
              {%- endfor %}
            </div>
            {%- endif %}
          </div>
        </details>
      </div>
    </article>
    {%- endfor %}
  </section>
  {%- endfor %}

  <div class="rx-empty" data-rx-empty hidden>
    <span class="rx-empty__icon">{% include icon.html name="search-x" %}</span>
    <p><span data-lang="en">No programs match this search.</span><span data-lang="zh">没有找到匹配的研究主线。</span></p>
    <button type="button" class="rx-tool" data-rx-clear>{% include icon.html name="x" %}<span data-lang="en">Clear search</span><span data-lang="zh">清除搜索</span></button>
  </div>

  <nav class="rx-more-links" aria-label="More from Freedom AI">
    <a class="rx-more-link" href="{{ '/publications/' | relative_url }}">
      {% include icon.html name="book-open" class="rx-more-link__icon" %}
      <strong><span data-lang="en">All publications</span><span data-lang="zh">全部论文</span></strong>
      <span class="rx-more-link__note"><span data-lang="en">Every paper, filterable by the same six directions.</span><span data-lang="zh">全部论文，可按同样的六个方向筛选。</span></span>
      {% include icon.html name="arrow-right" class="rx-more-link__go" %}
    </a>
    <a class="rx-more-link" href="https://github.com/{{ site.github_username }}" target="_blank" rel="noopener">
      {% include icon.html name="github" class="rx-more-link__icon" %}
      <strong>GitHub</strong>
      <span class="rx-more-link__note">github.com/{{ site.github_username }}</span>
      {% include icon.html name="arrow-up-right" class="rx-more-link__go" %}
    </a>
    <a class="rx-more-link" href="https://huggingface.co/{{ site.hf_username }}" target="_blank" rel="noopener">
      {% include icon.html name="huggingface" class="rx-more-link__icon" %}
      <strong>Hugging Face</strong>
      <span class="rx-more-link__note">huggingface.co/{{ site.hf_username }}</span>
      {% include icon.html name="arrow-up-right" class="rx-more-link__go" %}
    </a>
  </nav>
  <script src="{{ '/assets/js/research.js' | relative_url }}?v={{ site.time | date: '%s' }}" defer></script>
</div>
