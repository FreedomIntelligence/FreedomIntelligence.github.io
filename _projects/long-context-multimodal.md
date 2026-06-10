---
layout: page
title: LongLLaVA and MileBench
description: Long-context multimodal models and benchmarks for reasoning over many images and videos.
img: assets/img/media-roundup-2026/longllava-architecture.webp
importance: 3
category: work
github: https://github.com/FreedomIntelligence/LongLLaVA
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div class="impact-kicker">Long-context multimodal AI</div>

<div class="impact-tags">
  <span class="impact-tag">LongLLaVA</span>
  <span class="impact-tag">MileBench</span>
  <span class="impact-tag">Many-image reasoning</span>
  <span class="impact-tag">Video understanding</span>
  <span class="impact-tag">Efficient MLLMs</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://github.com/FreedomIntelligence/LongLLaVA" target="_blank" rel="noopener">LongLLaVA</a>
  <a class="impact-action secondary" href="https://huggingface.co/datasets/FreedomIntelligence/MileBench" target="_blank" rel="noopener">MileBench</a>
  <a class="impact-action secondary" href="https://arxiv.org/abs/2409.02889" target="_blank" rel="noopener">LongLLaVA paper</a>
  <a class="impact-action secondary" href="https://arxiv.org/abs/2404.18532" target="_blank" rel="noopener">MileBench paper</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/media-roundup-2026/longllava-architecture.webp" alt="LongLLaVA architecture">
</div>

<p class="impact-lede">
LongLLaVA asks how multimodal LLMs can reason over hundreds or thousands of images without exploding memory or latency. MileBench provides the benchmark pressure: long-context visual QA, retrieval, counting, ordering, and video tasks that expose whether a model truly uses long visual context.
</p>

<section class="impact-section">
  <h2>Technical Shape</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>Hybrid language backbone</strong>
      <p>The model combines Transformer-style reasoning with sequence-efficient components, targeting long visual contexts that ordinary MLLM attention struggles to scale.</p>
    </div>
    <div class="impact-card">
      <strong>Progressive multimodal training</strong>
      <p>Training moves from single-image alignment to multi-image and video-style instruction tuning so the model can retain both ordinary VQA ability and long-context behavior.</p>
    </div>
    <div class="impact-card">
      <strong>Benchmark-driven iteration</strong>
      <p>MileBench makes progress measurable across long visual sequences, multi-image retrieval, temporal context, and mixed image-video reasoning tasks.</p>
    </div>
  </div>
</section>

<div class="impact-figure">
  <img src="/assets/img/media-roundup-2026/longllava-training.png" alt="LongLLaVA training strategy">
</div>

<section class="impact-section">
  <h2>Why It Matters</h2>
  <ul class="impact-list">
    <li>Real multimodal agents need to inspect many screenshots, frames, pages, or documents, not just answer about a single image.</li>
    <li>Long visual context is a systems problem: architecture, data mixture, token reduction, and evaluation all have to co-evolve.</li>
    <li>The LongLLaVA/MileBench pairing creates both a model direction and a public yardstick for future long-context MLLMs.</li>
  </ul>
</section>

<section class="impact-section">
  <h2>Resource Map</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>LongLLaVA</strong>
      <p>Model architecture, training recipe, and release material for long-context multimodal understanding.</p>
      <a href="https://github.com/FreedomIntelligence/LongLLaVA" target="_blank" rel="noopener">Repository</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>MileBench dataset</strong>
      <p>Long-context multimodal benchmark data for evaluating image, video, and cross-context capabilities.</p>
      <a href="https://huggingface.co/datasets/FreedomIntelligence/MileBench" target="_blank" rel="noopener">Dataset</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>Related efficiency line</strong>
      <p>TRIM and token-reduction work connect to the same goal: make multimodal context longer without making inference unusable.</p>
      <a href="https://github.com/FreedomIntelligence/TRIM" target="_blank" rel="noopener">TRIM</a>
    </div>
  </div>
</section>

</div>
