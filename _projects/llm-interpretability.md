---
layout: page
title: LLM Interpretability and Sparse Autoencoders
description: Mechanistic interpretability studies on sparse autoencoders, controllable unlearning, and fine-tuning circuits in large language models.
img: assets/img/freedomai-2026/impact/llm-interpretability.svg
importance: 11
category: work
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div class="impact-kicker">Mechanistic interpretability</div>

<div class="impact-tags">
  <span class="impact-tag">Sparse Autoencoders</span>
  <span class="impact-tag">Circuit Analysis</span>
  <span class="impact-tag">Model Unlearning</span>
  <span class="impact-tag">Fine-Tuning Mechanisms</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://arxiv.org/abs/2510.03659" target="_blank" rel="noopener">ICLR 2026 Paper</a>
  <a class="impact-action secondary" href="https://arxiv.org/abs/2505.24428" target="_blank" rel="noopener">EMNLP 2025 Paper</a>
  <a class="impact-action secondary" href="https://arxiv.org/abs/2502.11812" target="_blank" rel="noopener">ICML 2025 Paper</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/freedomai-2026/impact/llm-interpretability.svg" alt="LLM interpretability and sparse autoencoder analysis">
</div>

<p class="impact-lede">
This project studies how to make LLM behavior legible and controllable. The line connects sparse autoencoder feature analysis, SAE-guided subspace projections for unlearning, and circuit-level studies of what fine-tuning changes inside a model.
</p>

<section class="impact-section">
  <h2>Research Storyline</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>Utility</span>
      <div><strong>Test whether interpretability predicts usefulness</strong><p>The SAE utility work compares interpretability scores against actual steering utility and studies when interpretable features are not the most effective control features.</p></div>
    </div>
    <div class="impact-step">
      <span>Control</span>
      <div><strong>Use interpretable features for model unlearning</strong><p>SAE-guided subspace projections turn feature-level evidence into constrained parameter updates, aiming for precise and robust removal of unwanted knowledge.</p></div>
    </div>
    <div class="impact-step">
      <span>Circuits</span>
      <div><strong>Explain how fine-tuning changes computation</strong><p>Circuit analysis tracks edge changes, subtask composition, and circuit-aware LoRA allocation during fine-tuning.</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Key Papers</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>ICLR 2026</span>
      <div><strong>Does Higher Interpretability Imply Better Utility? A Pairwise Analysis on Sparse Autoencoders</strong><p>Xu Wang, Yan Hu, Benyou Wang, Difan Zou. Also received the Outstanding Paper Award at the NeurIPS 2025 ResponsibleFM Workshop.</p><a href="https://arxiv.org/abs/2510.03659" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>EMNLP 2025</span>
      <div><strong>Model Unlearning via Sparse Autoencoder Subspace Guided Projections</strong><p>Xu Wang, Zihao Li, Benyou Wang, Yan Hu, Difan Zou. Studies SAE-guided subspace projection unlearning for controllable and robust knowledge removal.</p><a href="https://arxiv.org/abs/2505.24428" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>ICML 2025</span>
      <div><strong>Towards Understanding Fine-Tuning Mechanisms of LLMs via Circuit Analysis</strong><p>Xu Wang, Yan Hu, Wenyu Du, Reynold Cheng, Benyou Wang, Difan Zou. Uses circuit analysis to understand fine-tuning dynamics and circuit-aware adaptation.</p><a href="https://arxiv.org/abs/2502.11812" target="_blank" rel="noopener">Paper</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Why It Matters</h2>
  <ul class="impact-list">
    <li>Interpretability should be validated against downstream utility, not treated as a proxy by default.</li>
    <li>SAE features can support controllable model editing when connected to parameter-space objectives.</li>
    <li>Circuit-level views make fine-tuning more inspectable and can guide more efficient adaptation methods.</li>
  </ul>
</section>

</div>
