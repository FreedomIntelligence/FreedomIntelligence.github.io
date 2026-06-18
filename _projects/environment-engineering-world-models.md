---
layout: page
title: 环境工程和世界模型
description: Engineering interactive environments, agent societies, micro-worlds, and executable sandboxes for training, evaluation, and alignment.
img: assets/img/economic-world-models/ewm-hero.png
importance: 1
category: work
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div class="impact-kicker">Environment engineering and world models</div>

<div class="impact-tags">
  <span class="impact-tag">Environment engineering</span>
  <span class="impact-tag">World models</span>
  <span class="impact-tag">Agent societies</span>
  <span class="impact-tag">Micro-world simulation</span>
  <span class="impact-tag">Executable reasoning</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="/projects/">Projects Map</a>
  <a class="impact-action secondary" href="/projects/economic-world-models/">Economic World Models</a>
  <a class="impact-action secondary" href="/projects/microverse-world-simulation/">MicroVerse</a>
  <a class="impact-action secondary" href="/projects/twinmarket-financial-simulation/">TwinMarket</a>
  <a class="impact-action secondary" href="https://wabyking.github.io/" target="_blank" rel="noopener">Benyou Wang Papers</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/economic-world-models/ewm-hero.png" alt="Environment engineering connects agents, environments, co-evolution, and real-world alignment">
</div>

<p class="impact-lede">
环境工程和世界模型关注的不是单个 prompt 或单次 benchmark，而是如何把任务放进一个会响应、会演化、可观测、可审计的环境里。这个方向把智能体、规则、状态、工具、用户、市场、科学机制和评价器组织成可运行的世界，用来训练模型、测试行为、做政策或系统沙盒，并把模拟结果对齐到真实证据。
</p>

<section class="impact-section">
  <h2>组织逻辑</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>Spec</span>
      <div><strong>定义环境</strong><p>明确状态空间、行动接口、外部工具、任务目标、约束、观测窗口和失败模式，让任务从静态问答变成可复现的交互系统。</p></div>
    </div>
    <div class="impact-step">
      <span>Actors</span>
      <div><strong>放入智能体和用户</strong><p>用户模拟器、角色扮演智能体、投资者、医生、病人或科学对象都可以成为环境中的行动者，暴露多轮行为和社会反馈。</p></div>
    </div>
    <div class="impact-step">
      <span>Dynamics</span>
      <div><strong>建模世界动力学</strong><p>从金融市场、经济制度到生物微世界，核心是状态如何因行动而变化，以及隐藏机制如何影响可观察结果。</p></div>
    </div>
    <div class="impact-step">
      <span>Align</span>
      <div><strong>评测与真实对齐</strong><p>环境要能记录轨迹、解释决策、比较真实数据、定位偏差，并支持后续的 agent tuning、policy testing 和 safety analysis。</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>论文脉络</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>World</span>
      <div><strong>MicroVerse: A Preliminary Exploration Toward a Micro-World Simulation</strong><p>把世界模型推进到器官、细胞和亚细胞过程，强调隐藏机制、状态演化和科学约束。</p><a href="https://arxiv.org/abs/2603.00585" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Market</span>
      <div><strong>TwinMarket: A Scalable Behavioral and Social Simulation for Financial Markets</strong><p>用 LLM 投资者构建金融市场环境，从个体信念、意图和信息流生成宏观市场行为。</p><a href="https://arxiv.org/abs/2502.01506" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Economy</span>
      <div><strong>From Economic Agents to Agentic Economies</strong><p>提出经济世界模型的系统蓝图，把智能体、环境、共演化和真实世界对齐组织成可实现架构。</p><a href="/assets/pdf/economic-world-models.pdf" target="_blank" rel="noopener">PDF</a></div>
    </div>
    <div class="impact-paper">
      <span>User</span>
      <div><strong>Large Language Model as a User Simulator</strong><p>用 LLM 构造可控用户环境，为多轮对话训练和评测提供可重复的交互对象。</p><a href="https://arxiv.org/abs/2308.11534" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Optimize</span>
      <div><strong>ORLM and CALM Before the STORM</strong><p>把自然语言工业问题转成优化模型、约束和可执行代码，形成可验证的工程建模环境。</p><a href="https://arxiv.org/abs/2405.17743" target="_blank" rel="noopener">ORLM</a> · <a href="https://arxiv.org/abs/2510.04204" target="_blank" rel="noopener">CALM/STORM</a></div>
    </div>
    <div class="impact-paper">
      <span>Execute</span>
      <div><strong>CoRT: Code-integrated Reasoning within Thinking</strong><p>把代码执行接入推理过程，让模型在可运行环境中检查中间计算，而不是只输出自然语言链路。</p><a href="https://arxiv.org/abs/2506.09820" target="_blank" rel="noopener">Paper</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>研究模块</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>交互环境</strong>
      <p>用户模拟、Socratic dialogue、角色扮演和 AI 标准化病人，让模型在可控人物和多轮反馈里学习。</p>
    </div>
    <div class="impact-card">
      <strong>社会与市场环境</strong>
      <p>TwinMarket 和 Economic World Models 让金融市场、政策沙盒和制度变化成为可观测的多智能体环境。</p>
    </div>
    <div class="impact-card">
      <strong>科学微世界</strong>
      <p>MicroVerse 面向生物和科学机制，要求模型理解看不见的状态、约束和动态，而不只是生成视觉表象。</p>
    </div>
    <div class="impact-card">
      <strong>可执行工程环境</strong>
      <p>ORLM、CALM/STORM 和 CoRT 把推理连接到优化建模、代码执行和检查器，让答案可以运行、验证和修正。</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>相关项目</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>Economic World Models</strong>
      <p>经济世界模型的总览页，覆盖 agentic economies、政策沙盒、能力阶梯和真实世界对齐。</p>
      <a href="/projects/economic-world-models/">Project page</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>TwinMarket</strong>
      <p>金融市场中的行为和社会多智能体仿真，是环境工程在市场世界中的具体原型。</p>
      <a href="/projects/twinmarket-financial-simulation/">Project page</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>MicroVerse</strong>
      <p>把世界模型拓展到生物微世界，强调科学机制、隐藏状态和动态演化。</p>
      <a href="/projects/microverse-world-simulation/">Project page</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>Human-Agent Interaction</strong>
      <p>把用户模拟、标准化病人、语音交互和社会仿真放进同一个交互研究框架。</p>
      <a href="/projects/human-agent-interaction/">Project page</a>
    </div>
  </div>
</section>

<div class="impact-actions">
  <a class="impact-action secondary" href="/projects/">Back to Projects</a>
</div>

</div>
