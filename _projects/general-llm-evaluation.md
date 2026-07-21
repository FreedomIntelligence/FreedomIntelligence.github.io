---
layout: page
title: General LLM Evaluation
description: Rubric-centered, trustworthy, and responsible evaluation for large models across modalities, time, cultures, ethics, and rewards.
img: assets/img/freedomai-2026/impact/github-impact.jpg
importance: 1
category: work
github: https://github.com/FreedomIntelligence/Awesome-Rubrics
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div class="impact-kicker">Rubrics, judges, freshness, bias, ethics, and rewards</div>

<div class="impact-tags">
  <span class="impact-tag">General LLM Evaluation</span>
  <span class="impact-tag">Rubric-based evaluation</span>
  <span class="impact-tag">LLM-as-a-judge</span>
  <span class="impact-tag">Responsible AI</span>
  <span class="impact-tag">Reward design</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://github.com/FreedomIntelligence/Awesome-Rubrics" target="_blank" rel="noopener">Awesome-Rubrics</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/MLLM-Bench" target="_blank" rel="noopener">MLLM-Bench</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/FreshBench" target="_blank" rel="noopener">FreshBench</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/PrinciplismQA" target="_blank" rel="noopener">PrinciplismQA</a>
  <a class="impact-action secondary" href="/projects/">All Projects</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/freedomai-2026/impact/github-impact.jpg" alt="General LLM evaluation resources">
</div>

<p class="impact-lede">
通用大模型评估把 rubric-based evaluation、LLM-as-a-judge、可信评测、responsible AI 和 reward design 放在同一条线上。它的目标不是再堆一个 leaderboard，而是把开放式输出、主观质量、时效性、文化差异、伦理原则和专家标准变成可审计、可复现、可训练的评测信号。
</p>

<section class="impact-section">
  <h2>Research Storyline</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>Criteria</span>
      <div><strong>从答案对错走向样本级标准</strong><p>MLLM-Bench 用 per-sample criteria 组织多模态评测，强调 judge 需要知道每个样本到底该看什么。</p></div>
    </div>
    <div class="impact-step">
      <span>Judge</span>
      <div><strong>校准 LLM-as-a-judge</strong><p>Humans or LLMs as the Judge? 暴露人类和模型评委的偏差，让自动评测从“方便”走向“可质控”。</p></div>
    </div>
    <div class="impact-step">
      <span>Trust</span>
      <div><strong>评估真实部署风险</strong><p>FreshBench、Culture Bias 和 PrinciplismQA 分别处理过时知识、跨文化偏差和临床医学伦理，让评测覆盖模型真正会伤人的边界。</p></div>
    </div>
    <div class="impact-step">
      <span>Reward</span>
      <div><strong>把评测信号变成训练信号</strong><p>Awesome-Rubrics 将 rubrics 组织成评测、alignment、reward modeling 和 post-training 的统一接口。</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Representative Work</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>Rubric</span>
      <div><strong>Awesome-Rubrics</strong><p>A curated reading list and survey around rubric-based evaluation, reward modeling, alignment, and agentic AI.</p><a href="https://github.com/FreedomIntelligence/Awesome-Rubrics" target="_blank" rel="noopener">Repository</a></div>
    </div>
    <div class="impact-paper">
      <span>MLLM</span>
      <div><strong>MLLM-Bench: Evaluating Multimodal LLMs with Per-sample Criteria</strong><p>Uses per-sample criteria to make multimodal evaluation more explicit and judgeable.</p><a href="https://aclanthology.org/2025.naacl-long.256/" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Judge</span>
      <div><strong>Humans or LLMs as the Judge? A Study on Judgement Biases</strong><p>Studies judgement bias in human and LLM evaluators, a core issue for automated evaluation.</p><a href="https://arxiv.org/abs/2402.10669" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Fresh</span>
      <div><strong>FreshBench: Is Your LLM Outdated?</strong><p>Tests temporal generalization and whether models remain reliable as the world changes.</p><a href="https://github.com/FreedomIntelligence/FreshBench" target="_blank" rel="noopener">Repository</a></div>
    </div>
    <div class="impact-paper">
      <span>Culture</span>
      <div><strong>From Word to World</strong><p>Evaluates and mitigates culture bias through an LLM-adaptive word association test.</p><a href="https://arxiv.org/abs/2505.18562" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Ethics</span>
      <div><strong>PrinciplismQA</strong><p>Assesses clinical medical ethics alignment with expert-validated MCQA, open-ended cases, and rubric keypoints.</p><a href="https://github.com/FreedomIntelligence/PrinciplismQA" target="_blank" rel="noopener">Repository</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>What This Direction Adds</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>Evaluation as infrastructure</strong>
      <p>Rubrics, judges, criteria, calibration, and reliability checks become reusable infrastructure for many domains.</p>
    </div>
    <div class="impact-card">
      <strong>Evaluation as alignment signal</strong>
      <p>Structured feedback can supervise SFT, preference tuning, reward modeling, RL, and self-improvement loops.</p>
    </div>
    <div class="impact-card">
      <strong>Evaluation as risk lens</strong>
      <p>Freshness, culture, ethics, safety, and expert standards expose failures that ordinary accuracy scores miss.</p>
    </div>
  </div>
</section>

<div class="impact-actions">
  <a class="impact-action secondary" href="/projects/">Back to Projects</a>
</div>

</div>

