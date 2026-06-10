---
layout: page
title: HuatuoGPT-II
description: One-stage medical adaptation for open medical language models.
img: assets/img/media-roundup-2026/huatuogpt-auto-eval.jpeg
importance: 2
category: work
github: https://github.com/FreedomIntelligence/HuatuoGPT-II
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div class="impact-kicker">Medical LLM adaptation</div>

<div class="impact-tags">
  <span class="impact-tag">HuatuoGPT-II</span>
  <span class="impact-tag">One-stage training</span>
  <span class="impact-tag">Medical adaptation</span>
  <span class="impact-tag">Chinese medical QA</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://github.com/FreedomIntelligence/HuatuoGPT-II" target="_blank" rel="noopener">GitHub</a>
  <a class="impact-action secondary" href="https://huggingface.co/FreedomIntelligence/HuatuoGPT2-34B" target="_blank" rel="noopener">34B model</a>
  <a class="impact-action secondary" href="https://huggingface.co/FreedomIntelligence/HuatuoGPT2-7B" target="_blank" rel="noopener">7B model</a>
  <a class="impact-action secondary" href="https://arxiv.org/abs/2311.09774" target="_blank" rel="noopener">Paper</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/media-roundup-2026/huatuogpt-auto-eval.jpeg" alt="HuatuoGPT-II medical evaluation figure">
</div>

<p class="impact-lede">
HuatuoGPT-II studies how to adapt large language models to medicine with a cleaner one-stage training recipe, reducing pipeline complexity while preserving strong medical instruction-following and exam-style performance.
</p>

<section class="impact-section">
  <h2>Core Idea</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>One unified format</strong>
      <p>Training examples are organized so general instruction following and medical domain adaptation can be learned together rather than through brittle multi-stage handoffs.</p>
    </div>
    <div class="impact-card">
      <strong>Domain-specific supervision</strong>
      <p>The system uses curated medical QA and GPT-assisted medical SFT data to teach medical language, clinical question answering, and medical dialogue behavior.</p>
    </div>
    <div class="impact-card">
      <strong>Open checkpoints</strong>
      <p>HuatuoGPT2-7B and HuatuoGPT2-34B provide reusable model checkpoints for downstream research and comparison.</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Project Outputs</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>HuatuoGPT-II code</strong>
      <p>Training, evaluation, and release notes for the one-stage medical adaptation approach.</p>
      <a href="https://github.com/FreedomIntelligence/HuatuoGPT-II" target="_blank" rel="noopener">Repository</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>HuatuoGPT2-SFT-GPT4-140K</strong>
      <p>A medical SFT dataset connected to the HuatuoGPT-II training pipeline.</p>
      <a href="https://huggingface.co/datasets/FreedomIntelligence/HuatuoGPT2-SFT-GPT4-140K" target="_blank" rel="noopener">Dataset</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>HuatuoGPT2 models</strong>
      <p>Open Hugging Face checkpoints for Chinese medical language modeling and medical QA experiments.</p>
      <a href="https://huggingface.co/FreedomIntelligence/HuatuoGPT2-34B" target="_blank" rel="noopener">Model</a>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Where It Fits</h2>
  <p>
HuatuoGPT-II is the practical adaptation layer inside the broader HuatuoGPT ecosystem. HuatuoGPT starts the open medical dialogue agenda, HuatuoGPT-II simplifies medical adaptation, HuatuoGPT-o1 pushes complex reasoning, and HuatuoGPT-Vision expands the stack to multimodal medical knowledge.
  </p>
</section>

</div>
