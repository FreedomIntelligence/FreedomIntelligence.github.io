---
layout: page
title: LLM Interpretability and Sparse Autoencoders
title_zh: 大模型可解释性与稀疏自编码器
direction: evaluation-safety
description: Mechanistic interpretability studies on sparse autoencoders, controllable unlearning, and fine-tuning circuits in large language models.
description_zh: 面向大模型的机制可解释性研究，涵盖稀疏自编码器、可控遗忘与微调电路。
img: assets/img/freedomai-2026/impact/llm-interpretability.svg
importance: 11
category: work
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div data-lang="en">

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

<div data-lang="zh">

<div class="impact-kicker">机制可解释性</div>

<div class="impact-tags">
  <span class="impact-tag">稀疏自编码器</span>
  <span class="impact-tag">电路分析</span>
  <span class="impact-tag">模型遗忘</span>
  <span class="impact-tag">微调机制</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://arxiv.org/abs/2510.03659" target="_blank" rel="noopener">ICLR 2026 论文</a>
  <a class="impact-action secondary" href="https://arxiv.org/abs/2505.24428" target="_blank" rel="noopener">EMNLP 2025 论文</a>
  <a class="impact-action secondary" href="https://arxiv.org/abs/2502.11812" target="_blank" rel="noopener">ICML 2025 论文</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/freedomai-2026/impact/llm-interpretability.svg" alt="大模型可解释性与稀疏自编码器分析">
</div>

<p class="impact-lede">
本项目研究如何让大模型的行为既可理解，又可控制。研究主线由三部分串联而成：分析稀疏自编码器（SAE）的特征，利用 SAE 引导的子空间投影实现遗忘，并在电路层面研究微调究竟改变了模型内部的什么。
</p>

<section class="impact-section">
  <h2>研究脉络</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>效用</span>
      <div><strong>检验可解释性能否预测实际效用</strong><p>SAE 效用研究把可解释性得分与实际的 steering 效用相对照，并分析在哪些情况下，可解释的特征并不是最有效的控制特征。</p></div>
    </div>
    <div class="impact-step">
      <span>控制</span>
      <div><strong>用可解释特征实现模型遗忘</strong><p>SAE 引导的子空间投影把特征层面的证据转化为受约束的参数更新，目标是精确、稳健地移除不需要的知识。</p></div>
    </div>
    <div class="impact-step">
      <span>电路</span>
      <div><strong>解释微调如何改变模型的计算</strong><p>电路分析追踪微调过程中边的变化、子任务的组合，以及电路感知的 LoRA 分配。</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>重点论文</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>ICLR 2026</span>
      <div><strong>Does Higher Interpretability Imply Better Utility? A Pairwise Analysis on Sparse Autoencoders</strong><p>Xu Wang、Yan Hu、Benyou Wang、Difan Zou。该论文同时获得 NeurIPS 2025 ResponsibleFM Workshop 杰出论文奖。</p><a href="https://arxiv.org/abs/2510.03659" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>EMNLP 2025</span>
      <div><strong>Model Unlearning via Sparse Autoencoder Subspace Guided Projections</strong><p>Xu Wang、Zihao Li、Benyou Wang、Yan Hu、Difan Zou。研究用 SAE 引导的子空间投影实现遗忘，做到可控、稳健地移除知识。</p><a href="https://arxiv.org/abs/2505.24428" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>ICML 2025</span>
      <div><strong>Towards Understanding Fine-Tuning Mechanisms of LLMs via Circuit Analysis</strong><p>Xu Wang、Yan Hu、Wenyu Du、Reynold Cheng、Benyou Wang、Difan Zou。用电路分析理解微调的动态过程，并据此做电路感知的模型适配。</p><a href="https://arxiv.org/abs/2502.11812" target="_blank" rel="noopener">论文</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>研究意义</h2>
  <ul class="impact-list">
    <li>可解释性应当用下游效用来检验，而不是默认把它当作效用的代理指标。</li>
    <li>SAE 特征与参数空间的目标相结合后，可以支持可控的模型编辑。</li>
    <li>电路层面的视角让微调过程更易于检视，也能指导更高效的适配方法。</li>
  </ul>
</section>

</div>

</div>
