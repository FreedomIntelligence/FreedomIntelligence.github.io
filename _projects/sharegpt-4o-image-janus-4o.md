---
layout: page
title: ShareGPT-4o-Image and Janus-4o
description: GPT-4o-level image generation data and a unified multimodal image generation model.
img: assets/img/freedomai-2026/impact/github-impact.jpg
importance: 11
category: work
github: https://github.com/FreedomIntelligence/ShareGPT-4o-Image
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div class="impact-kicker">Image generation alignment</div>

<div class="impact-tags">
  <span class="impact-tag">ShareGPT-4o-Image</span>
  <span class="impact-tag">Janus-4o</span>
  <span class="impact-tag">Text-to-image</span>
  <span class="impact-tag">Image editing</span>
  <span class="impact-tag">Multimodal alignment</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://github.com/FreedomIntelligence/ShareGPT-4o-Image" target="_blank" rel="noopener">GitHub</a>
  <a class="impact-action secondary" href="https://huggingface.co/datasets/FreedomIntelligence/ShareGPT-4o-Image" target="_blank" rel="noopener">Dataset</a>
  <a class="impact-action secondary" href="https://huggingface.co/FreedomIntelligence/Janus-4o-7B" target="_blank" rel="noopener">Model</a>
  <a class="impact-action secondary" href="https://arxiv.org/abs/2506.18095" target="_blank" rel="noopener">Paper</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/freedomai-2026/impact/github-impact.jpg" alt="FreedomIntelligence open source impact">
</div>

<p class="impact-lede">
ShareGPT-4o-Image distills GPT-4o-style image generation interactions into an open dataset, and Janus-4o turns that data into a practical multimodal model for text-to-image and text-plus-image-to-image generation.
</p>

<section class="impact-section">
  <h2>Research Storyline</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>Data</span>
      <div><strong>Open the interaction format</strong><p>ShareGPT-4o-Image captures text-to-image and image-conditioned editing instructions so researchers can study generation behavior with open data.</p></div>
    </div>
    <div class="impact-step">
      <span>Model</span>
      <div><strong>Train a unified multimodal generator</strong><p>Janus-4o uses the data to support image understanding and generation in one compact model family.</p></div>
    </div>
    <div class="impact-step">
      <span>Edit</span>
      <div><strong>Move beyond one-shot generation</strong><p>Image-conditioned generation and editing matter because real users usually refine, transform, and localize existing visual content.</p></div>
    </div>
    <div class="impact-step">
      <span>Reuse</span>
      <div><strong>Make visual alignment reproducible</strong><p>The dataset, model, and paper give the community an open reference point for GPT-4o-like image generation interactions.</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>What The Project Contributes</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>Open generation data</strong>
      <p>The dataset includes text-to-image and image-conditioned generation examples, making GPT-4o-like generation behavior easier to study and reproduce.</p>
    </div>
    <div class="impact-card">
      <strong>Unified multimodal model</strong>
      <p>Janus-4o adapts a unified multimodal architecture so image understanding and image generation can live in one model family.</p>
    </div>
    <div class="impact-card">
      <strong>Practical image editing</strong>
      <p>The data and model support not only generation from text but also edits and transformations conditioned on existing images.</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Display Figures</h2>
  <div class="impact-gallery">
    <figure>
      <img src="/assets/img/freedomai-2026/impact/github-impact.jpg" alt="Open multimodal generation resources">
      <figcaption>The project follows the lab's open-release pattern: dataset, model, repository, and paper linked as one reproducible package.</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/media-roundup-2026/longllava-architecture.webp" alt="Multimodal model architecture context">
      <figcaption>ShareGPT-4o-Image and Janus-4o sit alongside the lab's broader multimodal line, from understanding to generation.</figcaption>
    </figure>
  </div>
</section>

<section class="impact-section">
  <h2>Paper Trail</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>Dataset</span>
      <div><strong>ShareGPT-4o-Image</strong><p>Open image generation and editing instruction data for studying GPT-4o-style multimodal generation behavior.</p><a href="https://huggingface.co/datasets/FreedomIntelligence/ShareGPT-4o-Image" target="_blank" rel="noopener">Dataset</a></div>
    </div>
    <div class="impact-paper">
      <span>Model</span>
      <div><strong>Janus-4o-7B</strong><p>A unified multimodal model checkpoint for text-to-image and image-conditioned generation.</p><a href="https://huggingface.co/FreedomIntelligence/Janus-4o-7B" target="_blank" rel="noopener">Model</a></div>
    </div>
    <div class="impact-paper">
      <span>Context</span>
      <div><strong>LongLLaVA and multimodal infrastructure</strong><p>Connects the generation project to the lab's larger multimodal program on visual context, data quality, and open model behavior.</p><a href="/projects/long-context-multimodal/">Long-context multimodal AI</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Why It Matters</h2>
  <ul class="impact-list">
    <li>Open image generation research needs high-quality instruction data, not just model weights.</li>
    <li>Image editing is an important multimodal interaction pattern because users often refine existing visual content rather than generate from scratch.</li>
    <li>The project gives the community a compact way to study GPT-4o-level image generation behavior in open models.</li>
  </ul>
</section>

<section class="impact-section">
  <h2>Resource Map</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>ShareGPT-4o-Image dataset</strong>
      <p>Open image generation and editing instruction data.</p>
      <a href="https://huggingface.co/datasets/FreedomIntelligence/ShareGPT-4o-Image" target="_blank" rel="noopener">Dataset</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>Janus-4o-7B</strong>
      <p>Unified multimodal model checkpoint for text-to-image and image-conditioned generation.</p>
      <a href="https://huggingface.co/FreedomIntelligence/Janus-4o-7B" target="_blank" rel="noopener">Model</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>Project repository</strong>
      <p>Code, examples, and release documentation for the ShareGPT-4o-Image project.</p>
      <a href="https://github.com/FreedomIntelligence/ShareGPT-4o-Image" target="_blank" rel="noopener">Repository</a>
    </div>
  </div>
</section>

</div>
