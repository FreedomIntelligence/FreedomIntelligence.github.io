---
layout: page
title: General LLM Evaluation
title_zh: "通用大模型评估"
direction: evaluation-safety
description: Rubric-centered, trustworthy, and responsible evaluation for large models across modalities, time, cultures, ethics, and rewards.
description_zh: "以 rubric 为核心、可信且负责任的大模型评估，覆盖多模态、时效性、文化、伦理与奖励。"
img: assets/img/research/general-evaluation.svg
importance: 1
category: work
github: https://github.com/FreedomIntelligence/Awesome-Rubrics
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div data-lang="en">

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
  <img src="/assets/img/research/general-evaluation.svg" alt="Diagram: per-sample rubrics, human and LLM judges, calibrated scores, and rewards for training" width="1200" height="675">
</div>

<p class="impact-lede">
General LLM evaluation treats rubric-based evaluation, LLM-as-a-judge, trustworthy evaluation, responsible AI, and reward design as one connected line of work. Its goal is not to pile up another leaderboard, but to turn open-ended outputs, subjective quality, freshness, cultural differences, ethical principles, and expert standards into evaluation signals that are auditable, reproducible, and trainable.
</p>

<section class="impact-section">
  <h2>Research Storyline</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>Criteria</span>
      <div><strong>Move from right-or-wrong answers to per-sample criteria</strong><p>MLLM-Bench organizes multimodal evaluation around per-sample criteria, stressing that a judge needs to know exactly what to look at in each sample.</p></div>
    </div>
    <div class="impact-step">
      <span>Judge</span>
      <div><strong>Calibrate LLM-as-a-judge</strong><p>"Humans or LLMs as the Judge?" exposes biases in both human and model judges, moving automatic evaluation from merely convenient to quality-controlled.</p></div>
    </div>
    <div class="impact-step">
      <span>Trust</span>
      <div><strong>Evaluate real deployment risks</strong><p>FreshBench, Culture Bias, and PrinciplismQA address outdated knowledge, cross-cultural bias, and clinical medical ethics respectively, extending evaluation to the boundaries where models can do real harm.</p></div>
    </div>
    <div class="impact-step">
      <span>Reward</span>
      <div><strong>Turn evaluation signals into training signals</strong><p>Awesome-Rubrics organizes rubrics into a unified interface for evaluation, alignment, reward modeling, and post-training.</p></div>
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

<div data-lang="zh">

<div class="impact-kicker">rubric、评委、时效性、偏差、伦理与奖励</div>

<div class="impact-tags">
  <span class="impact-tag">通用大模型评估</span>
  <span class="impact-tag">基于 rubric 的评测</span>
  <span class="impact-tag">LLM-as-a-judge</span>
  <span class="impact-tag">负责任 AI</span>
  <span class="impact-tag">奖励设计</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://github.com/FreedomIntelligence/Awesome-Rubrics" target="_blank" rel="noopener">Awesome-Rubrics</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/MLLM-Bench" target="_blank" rel="noopener">MLLM-Bench</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/FreshBench" target="_blank" rel="noopener">FreshBench</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/PrinciplismQA" target="_blank" rel="noopener">PrinciplismQA</a>
  <a class="impact-action secondary" href="/projects/">全部项目</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/research/general-evaluation-zh.svg" alt="示意图：样本级 rubric、人类与大模型评审、校准后的分数，以及用于训练的奖励" width="1200" height="675">
</div>

<p class="impact-lede">
通用大模型评估把基于 rubric 的评测、LLM-as-a-judge、可信评测、负责任 AI 和奖励设计放在同一条线上。它的目标不是再堆一个榜单，而是把开放式输出、主观质量、时效性、文化差异、伦理原则和专家标准变成可审计、可复现、可训练的评测信号。
</p>

<section class="impact-section">
  <h2>研究脉络</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>标准</span>
      <div><strong>从答案对错走向样本级标准</strong><p>MLLM-Bench 用样本级标准组织多模态评测，强调评委需要知道每个样本到底该看什么。</p></div>
    </div>
    <div class="impact-step">
      <span>评委</span>
      <div><strong>校准 LLM-as-a-judge</strong><p>“Humans or LLMs as the Judge?”暴露了人类和模型评委的偏差，让自动评测从“方便”走向“可质控”。</p></div>
    </div>
    <div class="impact-step">
      <span>可信</span>
      <div><strong>评估真实部署风险</strong><p>FreshBench、Culture Bias 和 PrinciplismQA 分别处理过时知识、跨文化偏差和临床医学伦理，让评测覆盖模型真正会伤人的边界。</p></div>
    </div>
    <div class="impact-step">
      <span>奖励</span>
      <div><strong>把评测信号变成训练信号</strong><p>Awesome-Rubrics 将 rubric 组织成评测、对齐、奖励建模和后训练的统一接口。</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>代表性工作</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>Rubric</span>
      <div><strong>Awesome-Rubrics</strong><p>精选阅读清单与综述，涵盖基于 rubric 的评测、奖励建模、对齐和智能体 AI。</p><a href="https://github.com/FreedomIntelligence/Awesome-Rubrics" target="_blank" rel="noopener">代码仓库</a></div>
    </div>
    <div class="impact-paper">
      <span>多模态</span>
      <div><strong>MLLM-Bench: Evaluating Multimodal LLMs with Per-sample Criteria</strong><p>用样本级标准让多模态评测更明确，也更易于评判。</p><a href="https://aclanthology.org/2025.naacl-long.256/" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>评委</span>
      <div><strong>Humans or LLMs as the Judge? A Study on Judgement Biases</strong><p>研究人类评委与大模型评委的判断偏差，这是自动评测的核心问题。</p><a href="https://arxiv.org/abs/2402.10669" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>时效</span>
      <div><strong>FreshBench: Is Your LLM Outdated?</strong><p>检验模型的时间泛化能力，以及世界变化后它是否依然可靠。</p><a href="https://github.com/FreedomIntelligence/FreshBench" target="_blank" rel="noopener">代码仓库</a></div>
    </div>
    <div class="impact-paper">
      <span>文化</span>
      <div><strong>From Word to World</strong><p>通过适配大模型的词语联想测试，评测并缓解文化偏差。</p><a href="https://arxiv.org/abs/2505.18562" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>伦理</span>
      <div><strong>PrinciplismQA</strong><p>用经专家验证的选择题、开放式案例和 rubric 要点，评估模型与临床医学伦理的对齐程度。</p><a href="https://github.com/FreedomIntelligence/PrinciplismQA" target="_blank" rel="noopener">代码仓库</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>这一方向的贡献</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>评测即基础设施</strong>
      <p>rubric、评委、评价标准、校准和可靠性检验，成为可复用于多个领域的基础设施。</p>
    </div>
    <div class="impact-card">
      <strong>评测即对齐信号</strong>
      <p>结构化反馈可以监督 SFT、偏好调优、奖励建模、强化学习和自我改进循环。</p>
    </div>
    <div class="impact-card">
      <strong>评测即风险视角</strong>
      <p>时效性、文化、伦理、安全和专家标准，能暴露准确率等常规分数遗漏的失败情形。</p>
    </div>
  </div>
</section>

<div class="impact-actions">
  <a class="impact-action secondary" href="/projects/">返回项目页</a>
</div>

</div>

</div>

