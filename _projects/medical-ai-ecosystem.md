---
layout: page
title: HuatuoGPT Medical AI Ecosystem
description: Open medical language, vision, reasoning, data, and deployment infrastructure for clinical AI.
img: assets/img/media-roundup-2026/huatuogpt-overview.png
importance: 1
category: work
github: https://github.com/FreedomIntelligence/HuatuoGPT
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div class="impact-kicker">Medical AI ecosystem</div>

<div class="impact-tags">
  <span class="impact-tag">Medical LLMs</span>
  <span class="impact-tag">Clinical reasoning</span>
  <span class="impact-tag">Medical vision-language</span>
  <span class="impact-tag">Open data</span>
  <span class="impact-tag">Deployment</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://github.com/FreedomIntelligence/HuatuoGPT" target="_blank" rel="noopener">HuatuoGPT</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/HuatuoGPT-o1" target="_blank" rel="noopener">HuatuoGPT-o1</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/HuatuoGPT-Vision" target="_blank" rel="noopener">HuatuoGPT-Vision</a>
  <a class="impact-action secondary" href="https://huggingface.co/datasets/FreedomIntelligence/medical-o1-reasoning-SFT" target="_blank" rel="noopener">Reasoning data</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/media-roundup-2026/huatuogpt-overview.png" alt="HuatuoGPT medical AI overview">
</div>

<p class="impact-lede">
HuatuoGPT is the lab's flagship medical AI program: an open ecosystem that moves from Chinese medical QA data to doctor-facing chat models, medical complex reasoning, multimodal medical vision, and real-world triage and pre-consultation systems.
</p>

<div class="impact-callout">
The project is not a single model release. It is a stack: medical data construction, supervised medical adaptation, verifier-style reasoning problems, visual medical knowledge injection, evaluation, and deployment loops that expose what medical AI can and cannot safely do.
</div>

<section class="impact-section">
  <h2>Research Storyline</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>Data</span>
      <div><strong>Start with Chinese medical QA</strong><p>Huatuo-26M and the early HuatuoGPT work created a reusable Chinese medical question-answering substrate for medical instruction tuning.</p></div>
    </div>
    <div class="impact-step">
      <span>Adapt</span>
      <div><strong>Turn general LLMs into medical assistants</strong><p>HuatuoGPT-II simplifies medical adaptation with a one-stage recipe and public checkpoints, making the training pipeline easier to reproduce.</p></div>
    </div>
    <div class="impact-step">
      <span>Reason</span>
      <div><strong>Move from chat to complex diagnosis</strong><p>HuatuoGPT-o1 introduces medical complex reasoning data and models, pushing beyond fluent consultation toward step-by-step clinical reasoning.</p></div>
    </div>
    <div class="impact-step">
      <span>See</span>
      <div><strong>Add visual medical knowledge</strong><p>HuatuoGPT-Vision and PubMedVision connect medical images, reports, and dialogue so the ecosystem can handle multimodal clinical questions.</p></div>
    </div>
    <div class="impact-step">
      <span>Deploy</span>
      <div><strong>Close the loop with real workflows</strong><p>Longgang triage and pre-consultation deployment turns evaluation pressure back into product and research questions.</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>What It Builds</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>Open medical LLMs</strong>
      <p>HuatuoGPT and HuatuoGPT-II adapt general LLMs to medical consultation, QA, and instruction-following with domain-specific supervision and evaluation.</p>
    </div>
    <div class="impact-card">
      <strong>Complex medical reasoning</strong>
      <p>HuatuoGPT-o1 introduces verifiable medical problems and reasoning SFT data, targeting multi-step diagnosis, treatment reasoning, and medical decision support.</p>
    </div>
    <div class="impact-card">
      <strong>Medical multimodality</strong>
      <p>HuatuoGPT-Vision and PubMedVision inject medical visual knowledge into multimodal LLMs for image-grounded medical dialogue and visual QA.</p>
    </div>
    <div class="impact-card">
      <strong>Deployment path</strong>
      <p>HuatuoGPT-powered intelligent triage and pre-consultation systems have been used in Longgang, Shenzhen public hospital and community health settings.</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Project Gallery</h2>
  <div class="impact-gallery">
    <figure>
      <img src="/assets/img/media-roundup-2026/huatuogpt-overview.png" alt="HuatuoGPT ecosystem overview">
      <figcaption>The ecosystem view: data, medical LLMs, reasoning, multimodality, and deployment form one pipeline.</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/media-roundup-2026/huatuogpt-auto-eval.jpeg" alt="HuatuoGPT-II automatic evaluation">
      <figcaption>HuatuoGPT-II focuses on a simpler medical adaptation recipe and reproducible evaluation.</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/freedomai-2026/impact/huatuogpt-longgang.jpg" alt="HuatuoGPT Longgang deployment">
      <figcaption>Deployment in Longgang turns model research into triage and pre-consultation workflow feedback.</figcaption>
    </figure>
  </div>
</section>

<section class="impact-section">
  <h2>Representative Work</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>Huatuo-26M</strong>
      <p>A large Chinese medical QA dataset that seeded the early HuatuoGPT training pipeline and made Chinese medical instruction data reusable.</p>
      <a href="https://github.com/FreedomIntelligence/Huatuo-26M" target="_blank" rel="noopener">Code and data</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>HuatuoGPT-o1</strong>
      <p>Medical complex reasoning models trained with medical-o1-reasoning-SFT and verifiable medical problem data.</p>
      <a href="https://huggingface.co/FreedomIntelligence/HuatuoGPT-o1-8B" target="_blank" rel="noopener">Model</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>HuatuoGPT-Vision</strong>
      <p>A multimodal medical model line connected to PubMedVision, a large image-text medical visual instruction dataset.</p>
      <a href="https://huggingface.co/FreedomIntelligence/HuatuoGPT-Vision-7B" target="_blank" rel="noopener">Model</a>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Paper Trail</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>Dataset</span>
      <div><strong>Huatuo-26M, a Large-scale Chinese Medical QA Dataset</strong><p>Builds the data foundation for Chinese medical instruction tuning and evaluation.</p><a href="https://github.com/FreedomIntelligence/Huatuo-26M" target="_blank" rel="noopener">Code and data</a></div>
    </div>
    <div class="impact-paper">
      <span>Model</span>
      <div><strong>HuatuoGPT, towards Taming Language Model to Be a Doctor</strong><p>Turns the data foundation into an open medical dialogue model and establishes the first HuatuoGPT model family.</p><a href="https://github.com/FreedomIntelligence/HuatuoGPT" target="_blank" rel="noopener">Repository</a></div>
    </div>
    <div class="impact-paper">
      <span>Adapt</span>
      <div><strong>HuatuoGPT-II, One-stage Training for Medical Adaption of LLMs</strong><p>Simplifies the adaptation pipeline and releases public checkpoints for downstream medical LLM research.</p><a href="https://github.com/FreedomIntelligence/HuatuoGPT-II" target="_blank" rel="noopener">Repository</a></div>
    </div>
    <div class="impact-paper">
      <span>Reasoning</span>
      <div><strong>HuatuoGPT-o1: Towards Medical Complex Reasoning with LLMs</strong><p>Adds verifier-style medical reasoning data and models to make medical outputs more structured and testable.</p><a href="https://github.com/FreedomIntelligence/HuatuoGPT-o1" target="_blank" rel="noopener">Repository</a></div>
    </div>
    <div class="impact-paper">
      <span>Vision</span>
      <div><strong>HuatuoGPT-Vision, Towards Injecting Medical Visual Knowledge into Multimodal LLMs at Scale</strong><p>Extends the ecosystem from text-only medical QA to image-grounded medical dialogue and multimodal knowledge.</p><a href="https://github.com/FreedomIntelligence/HuatuoGPT-Vision" target="_blank" rel="noopener">Repository</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Why It Matters</h2>
  <ul class="impact-list">
    <li>It turns medical AI from a demo into a reproducible stack of datasets, models, benchmarks, and deployment artifacts.</li>
    <li>It connects text-only consultation, visual medical understanding, and explicit reasoning rather than treating them as isolated model families.</li>
    <li>It provides open entry points for the community: GitHub repositories, Hugging Face checkpoints, and medical reasoning datasets.</li>
  </ul>
</section>

</div>
