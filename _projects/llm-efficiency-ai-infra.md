---
layout: page
title: LLM Efficiency and AI Infrastructure
description: Efficient training, inference, retrieval, data, and multimodal context infrastructure for open LLM builders.
img: assets/img/media-roundup-2026/longllava-architecture.webp
importance: 14
category: work
github: https://github.com/FreedomIntelligence/LongLLaVA
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div class="impact-kicker">Efficiency and infrastructure</div>

<div class="impact-tags">
  <span class="impact-tag">Long context</span>
  <span class="impact-tag">Efficient reasoning</span>
  <span class="impact-tag">RAG data</span>
  <span class="impact-tag">Token reduction</span>
  <span class="impact-tag">Open infrastructure</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="/projects/long-context-multimodal/">LongLLaVA and MileBench</a>
  <a class="impact-action secondary" href="/projects/rag-instruction-data/">RAG and Data</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/TRIM" target="_blank" rel="noopener">TRIM</a>
  <a class="impact-action secondary" href="/projects/">All Projects</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/media-roundup-2026/longllava-architecture.webp" alt="LongLLaVA architecture for long-context multimodal models">
</div>

<p class="impact-lede">
This project gathers the infrastructure work that makes open models more usable: longer multimodal context, cheaper visual tokens, stronger retrieval data, editable memory, efficient fine-tuning, and reasoning systems that spend computation where it matters.
</p>

<section class="impact-section">
  <h2>Background and Motivation</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>Capability is constrained by infrastructure</strong>
      <p>Better models are not enough if training data, retrieval pipelines, memory, long context, and inference cost do not scale with real tasks.</p>
    </div>
    <div class="impact-card">
      <strong>Multimodal inputs are expensive</strong>
      <p>Images, videos, and long documents quickly overload context windows, making token selection and long-context design central to deployment.</p>
    </div>
    <div class="impact-card">
      <strong>Reasoning needs adaptive compute</strong>
      <p>Efficient reasoning systems should prune weak paths, tune with minimal supervision, and update knowledge without expensive retraining.</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Core Ideas</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>Context</span>
      <div><strong>Scale multimodal context length</strong><p>LongLLaVA and MileBench study how models reason over many images and long multimodal inputs without losing global structure.</p></div>
    </div>
    <div class="impact-step">
      <span>Tokens</span>
      <div><strong>Spend visual tokens only where they help</strong><p>TRIM studies token reduction for multimodal LLMs, reducing cost while preserving reasoning-critical visual information.</p></div>
    </div>
    <div class="impact-step">
      <span>Data</span>
      <div><strong>Build instruction and retrieval infrastructure</strong><p>RAG-Instruct, LLMZoo, and related resources package data, models, and tasks so downstream builders can reproduce and extend systems.</p></div>
    </div>
    <div class="impact-step">
      <span>Update</span>
      <div><strong>Make memory and reasoning editable</strong><p>E2-RAG, prefix tuning, question-free fine-tuning, and early path pruning all aim to update or accelerate systems without rebuilding everything.</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Typical Work</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>Long</span>
      <div><strong>LongLLaVA and MileBench</strong><p>Long-context multimodal model and benchmark work for reasoning over many images, videos, and long visual contexts.</p><a href="/projects/long-context-multimodal/">Project page</a></div>
    </div>
    <div class="impact-paper">
      <span>Efficient</span>
      <div><strong>TRIM: Less is More for Efficient Multi-modal LLMs</strong><p>Reduces visual tokens so multimodal inference is cheaper while retaining task-relevant evidence.</p><a href="https://arxiv.org/abs/2409.10994" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>RAG</span>
      <div><strong>E2-RAG and RAG-Instruct</strong><p>Studies editable efficient retrieval and data infrastructure for retrieval-augmented instruction following.</p><a href="/projects/rag-instruction-data/">Project page</a></div>
    </div>
    <div class="impact-paper">
      <span>Reason</span>
      <div><strong>Question-Free Fine-Tuning and path pruning</strong><p>Improves adaptive reasoning with less supervision and by pruning low-value reasoning branches early.</p><a href="https://arxiv.org/abs/2506.12860" target="_blank" rel="noopener">QFFT</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Display Figures</h2>
  <div class="impact-gallery">
    <figure>
      <img src="/assets/img/media-roundup-2026/longllava-architecture.webp" alt="LongLLaVA architecture">
      <figcaption>Long-context multimodal infrastructure lets models reason across many images rather than isolated visual snippets.</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/media-roundup-2026/longllava-training.png" alt="LongLLaVA training data and pipeline">
      <figcaption>Efficient training pipelines connect data design, context scaling, and downstream evaluation.</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/freedomai-2026/impact/github-repos.png" alt="Open-source repositories and model resources">
      <figcaption>Open repositories, datasets, and model cards turn infrastructure work into reusable building blocks.</figcaption>
    </figure>
  </div>
</section>

<section class="impact-section">
  <h2>Resource Map</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>LongLLaVA and MileBench</strong>
      <p>Long-context multimodal project page covering models, benchmarks, and visual context scaling.</p>
      <a href="/projects/long-context-multimodal/">Project page</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>RAG and Instruction Data</strong>
      <p>Data and retrieval infrastructure for instruction tuning and knowledge-grounded model building.</p>
      <a href="/projects/rag-instruction-data/">Project page</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>LLMZoo</strong>
      <p>Open model and training resource collection that supports the lab's broader multilingual and infrastructure stack.</p>
      <a href="https://github.com/FreedomIntelligence/LLMZoo" target="_blank" rel="noopener">Repository</a>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Why It Matters</h2>
  <ul class="impact-list">
    <li>Open AI progress depends on infrastructure that smaller teams can run, inspect, and extend.</li>
    <li>Long-context and multimodal tasks need cost-aware model design, not only larger context windows.</li>
    <li>Editable retrieval and efficient adaptation make models more practical in domains where knowledge changes quickly.</li>
  </ul>
</section>

<div class="impact-actions">
  <a class="impact-action secondary" href="/projects/">Back to Projects</a>
</div>

</div>
