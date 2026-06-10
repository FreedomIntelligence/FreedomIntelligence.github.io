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
  <h2>Research Storyline</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>Benchmark</span>
      <div><strong>MileBench defines the pressure</strong><p>Many-image and video tasks expose whether a multimodal model can retrieve, count, order, and reason across long visual contexts.</p></div>
    </div>
    <div class="impact-step">
      <span>Model</span>
      <div><strong>LongLLaVA scales the context window</strong><p>The model combines hybrid architecture, data construction, and progressive training so a single model can handle many images efficiently.</p></div>
    </div>
    <div class="impact-step">
      <span>Efficiency</span>
      <div><strong>TRIM attacks token waste</strong><p>Token reduction is the practical counterpart of long-context modeling: longer context only matters if inference remains affordable.</p></div>
    </div>
    <div class="impact-step">
      <span>Agents</span>
      <div><strong>Phone and web agents need this capability</strong><p>Real agents inspect many screenshots, browser states, UI panels, and videos; long-context multimodal reasoning becomes infrastructure for agentic workflows.</p></div>
    </div>
  </div>
</section>

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
  <h2>Display Figures</h2>
  <div class="impact-gallery">
    <figure>
      <img src="/assets/img/media-roundup-2026/longllava-architecture.webp" alt="LongLLaVA hybrid architecture">
      <figcaption>The architecture story: scale multimodal context without letting attention cost dominate the whole model.</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/media-roundup-2026/longllava-training.png" alt="LongLLaVA progressive training">
      <figcaption>The training story: retain single-image ability while teaching the model to reason over many images and video frames.</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/media-roundup-2026/phoneharness-architecture.png" alt="PhoneHarness mobile agent architecture">
      <figcaption>Downstream agent settings, such as phone control, turn long visual context into an operational requirement.</figcaption>
    </figure>
  </div>
</section>

<section class="impact-section">
  <h2>Why It Matters</h2>
  <ul class="impact-list">
    <li>Real multimodal agents need to inspect many screenshots, frames, pages, or documents, not just answer about a single image.</li>
    <li>Long visual context is a systems problem: architecture, data mixture, token reduction, and evaluation all have to co-evolve.</li>
    <li>The LongLLaVA/MileBench pairing creates both a model direction and a public yardstick for future long-context MLLMs.</li>
  </ul>
</section>

<section class="impact-section">
  <h2>Paper Trail</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>Benchmark</span>
      <div><strong>MileBench: Benchmarking MLLMs in Long Context</strong><p>Creates the public pressure test for many-image and video reasoning, making long-context claims measurable.</p><a href="https://huggingface.co/datasets/FreedomIntelligence/MileBench" target="_blank" rel="noopener">Dataset</a></div>
    </div>
    <div class="impact-paper">
      <span>Model</span>
      <div><strong>LongLLaVA: Scaling Multi-modal LLMs to 1000 Images Efficiently via Hybrid Architecture</strong><p>Responds to the benchmark pressure with a hybrid architecture and progressive multimodal training recipe.</p><a href="https://github.com/FreedomIntelligence/LongLLaVA" target="_blank" rel="noopener">Repository</a></div>
    </div>
    <div class="impact-paper">
      <span>Efficiency</span>
      <div><strong>TRIM and efficient multimodal context</strong><p>Complements LongLLaVA by reducing redundant visual tokens so long-context systems can be deployed more cheaply.</p><a href="https://github.com/FreedomIntelligence/TRIM" target="_blank" rel="noopener">TRIM</a></div>
    </div>
  </div>
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
