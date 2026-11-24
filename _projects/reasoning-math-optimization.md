---
layout: page
title: Reasoning for Math and Optimization
title_zh: "数学与运筹优化推理"
direction: ai-applications
description: Model training and evaluation for mathematical reasoning, automated optimization modeling, code-integrated thinking, and video reasoning.
description_zh: "面向数学推理、自动化运筹优化建模、代码集成思考和视频推理的模型训练与评测。"
img: assets/img/research/optimization-modeling.svg
importance: 10
category: work
github: https://github.com/FreedomIntelligence/ReasoningNLP
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div data-lang="en">

<div class="impact-kicker">Reasoning systems</div>

<div class="impact-tags">
  <span class="impact-tag">MathScale</span>
  <span class="impact-tag">ORLM</span>
  <span class="impact-tag">CALM/STORM</span>
  <span class="impact-tag">CoRT</span>
  <span class="impact-tag">Video-R1</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://github.com/FreedomIntelligence/ReasoningNLP" target="_blank" rel="noopener">ReasoningNLP</a>
  <a class="impact-action secondary" href="https://github.com/Cardinal-Operations/ORLM" target="_blank" rel="noopener">ORLM</a>
  <a class="impact-action secondary" href="https://arxiv.org/abs/2403.02884" target="_blank" rel="noopener">MathScale</a>
  <a class="impact-action secondary" href="https://github.com/tulerfeng/Video-R1" target="_blank" rel="noopener">Video-R1</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/research/optimization-modeling.svg" alt="Diagram: a natural-language problem becomes variables, constraints, and an objective, then solver code and a verified solution" width="1200" height="675">
</div>

<p class="impact-lede">
The reasoning line studies how models solve problems when correctness can be checked: math, optimization modeling, medical reasoning, code-integrated thinking, critique, and multimodal video reasoning.
</p>

<section class="impact-section">
  <h2>Research Storyline</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>Math</span>
      <div><strong>Start with verifiable answers</strong><p>MathScale and outcome-supervised verifiers use problems where correctness can be checked, giving reasoning models sharper feedback than preference alone.</p></div>
    </div>
    <div class="impact-step">
      <span>Optimize</span>
      <div><strong>Translate language into executable models</strong><p>ORLM asks models to formulate optimization problems with formal constraints, objectives, and solver-ready structure.</p></div>
    </div>
    <div class="impact-step">
      <span>Compute</span>
      <div><strong>Let code enter the thinking loop</strong><p>CoRT treats computation as part of reasoning, making intermediate steps more inspectable and less dependent on hidden mental arithmetic.</p></div>
    </div>
    <div class="impact-step">
      <span>See</span>
      <div><strong>Extend reasoning to video and medicine</strong><p>Video-R1 and HuatuoGPT-o1 show the same verifiable-reasoning idea in multimodal and medical settings.</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Research Threads</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>MathScale and verifiers</strong>
      <p>Scaling instruction tuning and outcome-supervised verifiers for mathematical reasoning and planning.</p>
    </div>
    <div class="impact-card">
      <strong>ORLM and CALM/STORM</strong>
      <p>Large models for automated optimization modeling, where outputs must match formal constraints and executable optimization structure.</p>
    </div>
    <div class="impact-card">
      <strong>CoRT and code-integrated reasoning</strong>
      <p>Models reason with code inside the thinking process, making intermediate computation more explicit and testable.</p>
    </div>
    <div class="impact-card">
      <strong>Video-R1 and multimodal reasoning</strong>
      <p>Reinforcement-style training for video reasoning in multimodal LLMs, extending verifiable reasoning beyond text-only math.</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Display Figures</h2>
  <div class="impact-gallery">
    <figure>
      <img src="/assets/img/freedomai-2026/impact/iclr-financial-ai-award.jpg" alt="Reasoning and financial AI award">
      <figcaption>The reasoning line connects mathematical rigor, optimization, and applied decision systems.</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/media-roundup-2026/twinmarket-bdi.png" alt="Agent reasoning in simulation">
      <figcaption>Agentic simulations make reasoning visible in decisions, constraints, and downstream actions.</figcaption>
    </figure>
  </div>
</section>

<section class="impact-section">
  <h2>Paper Trail</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>Math</span>
      <div><strong>MathScale: Scaling Instruction Tuning for Mathematical Reasoning</strong><p>Studies scaling and verifier-style feedback for mathematical reasoning.</p><a href="https://arxiv.org/abs/2403.02884" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>OR</span>
      <div><strong>ORLM: Training Large Models for Automated Optimization Modeling</strong><p>Turns natural language problem descriptions into formal optimization models and solver-ready structure.</p><a href="https://github.com/Cardinal-Operations/ORLM" target="_blank" rel="noopener">Repository</a></div>
    </div>
    <div class="impact-paper">
      <span>Code</span>
      <div><strong>CoRT: Code-integrated Reasoning within Thinking</strong><p>Uses executable computation inside the reasoning process to improve reliability and inspectability.</p><a href="https://github.com/ChengpengLi1003/CoRT" target="_blank" rel="noopener">Repository</a></div>
    </div>
    <div class="impact-paper">
      <span>Video</span>
      <div><strong>Video-R1: Reinforcing Video Reasoning in MLLMs</strong><p>Transfers reasoning-style training into video understanding and multimodal LLMs.</p><a href="https://github.com/tulerfeng/Video-R1" target="_blank" rel="noopener">Repository</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Why It Matters</h2>
  <ul class="impact-list">
    <li>Reasoning models become more trustworthy when they can be trained and evaluated against verifiable constraints.</li>
    <li>Optimization modeling is a bridge from natural language to executable decision-making systems.</li>
    <li>Code and video reasoning show that "thinking" is not a single modality; it can involve computation, perception, and action.</li>
  </ul>
</section>

<section class="impact-section">
  <h2>Resource Map</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>ORLM</strong>
      <p>Customizable framework for training large models for automated optimization modeling.</p>
      <a href="https://github.com/Cardinal-Operations/ORLM" target="_blank" rel="noopener">Repository</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>CoRT</strong>
      <p>Code-integrated reasoning within thinking for models that can use computation as part of the reasoning process.</p>
      <a href="https://github.com/ChengpengLi1003/CoRT" target="_blank" rel="noopener">Repository</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>Video-R1</strong>
      <p>Reinforcing video reasoning in multimodal LLMs.</p>
      <a href="https://github.com/tulerfeng/Video-R1" target="_blank" rel="noopener">Repository</a>
    </div>
  </div>
</section>

</div>

<div data-lang="zh">

<div class="impact-kicker">推理系统</div>

<div class="impact-tags">
  <span class="impact-tag">MathScale</span>
  <span class="impact-tag">ORLM</span>
  <span class="impact-tag">CALM/STORM</span>
  <span class="impact-tag">CoRT</span>
  <span class="impact-tag">Video-R1</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://github.com/FreedomIntelligence/ReasoningNLP" target="_blank" rel="noopener">ReasoningNLP</a>
  <a class="impact-action secondary" href="https://github.com/Cardinal-Operations/ORLM" target="_blank" rel="noopener">ORLM</a>
  <a class="impact-action secondary" href="https://arxiv.org/abs/2403.02884" target="_blank" rel="noopener">MathScale</a>
  <a class="impact-action secondary" href="https://github.com/tulerfeng/Video-R1" target="_blank" rel="noopener">Video-R1</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/research/optimization-modeling-zh.svg" alt="示意图：自然语言问题转为变量、约束与目标函数，再生成求解代码并得到可验证的解" width="1200" height="675">
</div>

<p class="impact-lede">
推理方向关注答案正确性可以检验的任务，研究模型如何解决这类问题，涵盖数学、运筹优化建模、医学推理、代码集成思考、批判能力和多模态视频推理。
</p>

<section class="impact-section">
  <h2>研究脉络</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>数学</span>
      <div><strong>从可验证的答案入手</strong><p>MathScale 与结果监督验证器使用正确性可检验的题目，为推理模型提供比单靠偏好更明确的反馈。</p></div>
    </div>
    <div class="impact-step">
      <span>优化</span>
      <div><strong>把自然语言转成可执行的模型</strong><p>ORLM 让模型把优化问题写成形式化的约束和目标函数，整理成求解器可直接使用的结构。</p></div>
    </div>
    <div class="impact-step">
      <span>计算</span>
      <div><strong>让代码进入思考过程</strong><p>CoRT 把计算视为推理的一部分，中间步骤更容易检查，不再依赖模型暗中“心算”。</p></div>
    </div>
    <div class="impact-step">
      <span>视觉</span>
      <div><strong>把推理延伸到视频和医学</strong><p>Video-R1 和 HuatuoGPT-o1 把同样的可验证推理思路带到了多模态和医学场景。</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>研究主线</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>MathScale 与验证器</strong>
      <p>面向数学推理与规划，规模化指令微调，并使用结果监督验证器。</p>
    </div>
    <div class="impact-card">
      <strong>ORLM 与 CALM/STORM</strong>
      <p>用于自动化运筹优化建模的大模型，输出必须符合形式化约束，并具备可执行的优化结构。</p>
    </div>
    <div class="impact-card">
      <strong>CoRT 与代码集成推理</strong>
      <p>模型在思考过程中借助代码推理，使中间计算更加显式、可测试。</p>
    </div>
    <div class="impact-card">
      <strong>Video-R1 与多模态推理</strong>
      <p>面向多模态大模型视频推理的强化学习式训练，把可验证推理从纯文本数学拓展到更多场景。</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>图示</h2>
  <div class="impact-gallery">
    <figure>
      <img src="/assets/img/freedomai-2026/impact/iclr-financial-ai-award.jpg" alt="推理与金融 AI 奖项">
      <figcaption>推理方向把数学严谨性、优化与实际决策系统连接起来。</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/media-roundup-2026/twinmarket-bdi.png" alt="模拟环境中的智能体推理">
      <figcaption>智能体模拟让推理在决策、约束和后续行动中变得可见。</figcaption>
    </figure>
  </div>
</section>

<section class="impact-section">
  <h2>论文脉络</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>数学</span>
      <div><strong>MathScale: Scaling Instruction Tuning for Mathematical Reasoning</strong><p>研究数学推理中的规模化训练与验证器式反馈。</p><a href="https://arxiv.org/abs/2403.02884" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>运筹</span>
      <div><strong>ORLM: Training Large Models for Automated Optimization Modeling</strong><p>把自然语言的问题描述转化为形式化的优化模型和可直接求解的结构。</p><a href="https://github.com/Cardinal-Operations/ORLM" target="_blank" rel="noopener">代码仓库</a></div>
    </div>
    <div class="impact-paper">
      <span>代码</span>
      <div><strong>CoRT: Code-integrated Reasoning within Thinking</strong><p>在推理过程中引入可执行的计算，提升可靠性和可检查性。</p><a href="https://github.com/ChengpengLi1003/CoRT" target="_blank" rel="noopener">代码仓库</a></div>
    </div>
    <div class="impact-paper">
      <span>视频</span>
      <div><strong>Video-R1: Reinforcing Video Reasoning in MLLMs</strong><p>把推理式训练迁移到视频理解和多模态大模型中。</p><a href="https://github.com/tulerfeng/Video-R1" target="_blank" rel="noopener">代码仓库</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>研究意义</h2>
  <ul class="impact-list">
    <li>当推理模型能依据可验证的约束来训练和评测时，就更值得信赖。</li>
    <li>运筹优化建模是连接自然语言与可执行决策系统的桥梁。</li>
    <li>代码推理和视频推理说明，“思考”并不局限于单一模态，它可以同时涉及计算、感知和行动。</li>
  </ul>
</section>

<section class="impact-section">
  <h2>资源导航</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>ORLM</strong>
      <p>可定制的框架，用于训练自动化运筹优化建模的大模型。</p>
      <a href="https://github.com/Cardinal-Operations/ORLM" target="_blank" rel="noopener">代码仓库</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>CoRT</strong>
      <p>思考过程中的代码集成推理，让模型能把计算当作推理的一部分。</p>
      <a href="https://github.com/ChengpengLi1003/CoRT" target="_blank" rel="noopener">代码仓库</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>Video-R1</strong>
      <p>强化多模态大模型的视频推理。</p>
      <a href="https://github.com/tulerfeng/Video-R1" target="_blank" rel="noopener">代码仓库</a>
    </div>
  </div>
</section>

</div>

</div>
