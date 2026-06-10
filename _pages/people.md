---
layout: page
title: People
title_zh: 团队成员
permalink: /people/
description:
nav: true
nav_order: 1
display_categories: [Member, Alumni]
horizontal: false
---

<!-- pages/people.md -->
{% include alumni_showcase_styles.html %}

<div class="people">
{%- if site.enable_people_categories and page.display_categories %}
  <!-- Display people -->
  {%- for category in page.display_categories %}
  <h2 class="category" id="{{ category | slugify }}">
    {%- if category == "Member" -%}
    <span data-lang="en">Member</span><span data-lang="zh">成员</span>
    {%- elsif category == "Alumni" -%}
    <span data-lang="en">Alumni</span><span data-lang="zh">校友</span>
    {%- else -%}
    {{ category }}
    {%- endif -%}
  </h2>
  {%- assign categorized_people = site.people | where: "category", category -%}
  {%- assign sorted_people = categorized_people | sort: "importance" %}
  {%- unless category == "Member" -%}
  <!-- Generate cards for each person -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for people in sorted_people -%}
      {%- assign skip_person = false -%}
      {%- if category == "Member" and people.title == "Xidong Wang" -%}
        {%- assign skip_person = true -%}
      {%- endif -%}
      {%- if category == "Alumni" and people.title == "Zhiyong Wu" -%}
        {%- assign skip_person = true -%}
      {%- endif -%}
      {%- unless skip_person -%}
      {% include people_horizontal.html %}
      {%- endunless -%}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for people in sorted_people -%}
      {%- assign skip_person = false -%}
      {%- if category == "Member" and people.title == "Xidong Wang" -%}
        {%- assign skip_person = true -%}
      {%- endif -%}
      {%- if category == "Alumni" and people.title == "Zhiyong Wu" -%}
        {%- assign skip_person = true -%}
      {%- endif -%}
      {%- unless skip_person -%}
      {% include people.html %}
      {%- endunless -%}
    {%- endfor %}
  </div>
  {%- endif -%}
  {%- endunless -%}

  {%- if category == "Member" -%}
  {% include alumni_current_students.html %}
  {%- elsif category == "Alumni" -%}
  {% include alumni_alumni.html %}
  {%- endif -%}
  {% endfor %}

{%- else -%}
<!-- Display people without categories -->
  {%- assign sorted_people = site.people | sort: "importance" -%}
  <!-- Generate cards for each person -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for people in sorted_people -%}
      {% include people_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for people in sorted_people -%}
      {% include people.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
{%- endif -%}
</div>

<script defer src="{{ '/assets/js/scholar-citations.js' | relative_url }}"></script>
