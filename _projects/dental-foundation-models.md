---
layout: page
title: Dental Foundation Models & Benchmarks
description: Dental multimodal LLMs, clinical reasoning benchmarks, expert-calibrated dental evaluation, and OmniDentBench.
img: assets/img/media-roundup-2026/cmb-overview.png
importance: 4
category: work
github: https://github.com/FreedomIntelligence/DentalGPT
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div class="impact-kicker">Dental LLMs, multimodal diagnosis, and expert-calibrated benchmarks</div>

<div class="impact-tags">
  <span class="impact-tag">Dental Foundation Models</span>
  <span class="impact-tag">DentalGPT</span>
  <span class="impact-tag">GlobalDentBench</span>
  <span class="impact-tag">OmniDentBench</span>
  <span class="impact-tag">Clinical reasoning</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://freedomdle.cn/" target="_blank" rel="noopener">OmniDentBench</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/DentalGPT" target="_blank" rel="noopener">DentalGPT</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/GlobalDentBench" target="_blank" rel="noopener">GlobalDentBench</a>
  <a class="impact-action secondary" href="https://huggingface.co/datasets/FreedomIntelligence/GlobalDentBench-OA" target="_blank" rel="noopener">GlobalDentBench-OA</a>
  <a class="impact-action secondary" href="/projects/">All Projects</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/media-roundup-2026/cmb-overview.png" alt="Dental foundation model benchmark stack">
</div>

<p class="impact-lede">
牙科大模型是医疗 AI 里足够独立的一条垂直线：它需要理解口腔影像、牙科专科知识、病例推理、治疗风险、专家评分和跨地区诊疗标准。DentalGPT 提供多模态牙科模型路线，GlobalDentBench 和 OmniDentBench 则提供高难度、专家校准、临床推理导向的 benchmark 入口。
</p>

<section class="impact-section">
  <h2>Research Storyline</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>Model</span>
      <div><strong>训练牙科多模态大模型</strong><p>DentalGPT 用大规模牙科图像、专业 caption、instruction tuning 和 GRPO 强化多模态复杂推理。</p></div>
    </div>
    <div class="impact-step">
      <span>Bench</span>
      <div><strong>构建跨国临床推理 benchmark</strong><p>GlobalDentBench 覆盖 88 个国家/地区、14 个牙科专科和多种题型，强调专家校准和风险分析。</p></div>
    </div>
    <div class="impact-step">
      <span>ODB</span>
      <div><strong>搭建开放评测平台</strong><p>OmniDentBench 面向复杂临床决策和生物医学研究，提供全球牙科基准评测与 leaderboard 入口。</p></div>
    </div>
    <div class="impact-step">
      <span>Context</span>
      <div><strong>对齐外部 dental benchmark</strong><p>DentalBench、OralGPT-Omni 和 OralMLLM-Bench 等工作显示牙科领域正在形成专门的模型和评测生态。</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Representative Work</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>Model</span>
      <div><strong>DentalGPT: Incentivizing Multimodal Complex Reasoning in Dentistry</strong><p>Builds a specialized 7B dental MLLM with domain knowledge injection and reinforcement learning for dental visual reasoning.</p><a href="https://arxiv.org/abs/2512.11558" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Bench</span>
      <div><strong>GlobalDentBench</strong><p>A multinational benchmark for LLM clinical reasoning in dentistry with expert calibration, specialty taxonomy, and risk analysis.</p><a href="https://arxiv.org/abs/2605.24636" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Platform</span>
      <div><strong>OmniDentBench</strong><p>A global dental benchmarking platform for high-difficulty clinical decision-making and biomedical research evaluation.</p><a href="https://freedomdle.cn/" target="_blank" rel="noopener">Platform</a></div>
    </div>
    <div class="impact-paper">
      <span>QA</span>
      <div><strong>DentalBench</strong><p>A bilingual dental QA benchmark and DentalCorpus for evaluating and adapting LLMs in dentistry.</p><a href="https://arxiv.org/abs/2508.20416" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>MLLM</span>
      <div><strong>OralGPT-Omni</strong><p>A dental-specialized multimodal LLM and MMOral-Uni benchmark for dental image analysis.</p><a href="https://arxiv.org/abs/2511.22055" target="_blank" rel="noopener">Paper</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Benchmark Layers</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>Dental visual understanding</strong>
      <p>Intraoral photos, panoramic X-rays, periapical radiographs, and dental-specific VQA expose failures that generic medical MLLMs often miss.</p>
    </div>
    <div class="impact-card">
      <strong>Clinical reasoning complexity</strong>
      <p>GlobalDentBench moves from knowledge recall to routine reasoning and individualized reasoning with patient-specific constraints.</p>
    </div>
    <div class="impact-card">
      <strong>Expert calibration</strong>
      <p>Dentist-in-the-loop validation and rubric-based scoring make dental evaluation more clinically meaningful than generic QA accuracy.</p>
    </div>
    <div class="impact-card">
      <strong>Risk analysis</strong>
      <p>Dental AI needs to track unsafe treatment suggestions, irreversible harm risks, and specialty-specific failure modes.</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Resource Map</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>OmniDentBench</strong>
      <p>Global dental benchmark platform and leaderboard.</p>
      <a href="https://freedomdle.cn/" target="_blank" rel="noopener">Platform</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>DentalGPT</strong>
      <p>Dental multimodal model repository and evaluation setup.</p>
      <a href="https://github.com/FreedomIntelligence/DentalGPT" target="_blank" rel="noopener">Repository</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>GlobalDentBench</strong>
      <p>Expert-calibrated multinational dental clinical reasoning benchmark.</p>
      <a href="https://github.com/FreedomIntelligence/GlobalDentBench" target="_blank" rel="noopener">Repository</a>
    </div>
  </div>
</section>

<div class="impact-actions">
  <a class="impact-action secondary" href="/projects/">Back to Projects</a>
</div>

</div>

