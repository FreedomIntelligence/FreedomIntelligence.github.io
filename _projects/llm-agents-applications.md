---
layout: page
title: LLM Agents and Applications
title_zh: "大模型智能体与应用"
direction: agentic-ai
description: LLM agents for tool use, user simulation, education, medicine, finance, speech interaction, and micro-world environments.
description_zh: "面向工具使用、用户模拟、教育、医疗、金融、语音交互和微观世界环境的大模型智能体。"
img: assets/img/media-roundup-2026/twinmarket-bdi.png
importance: 9
category: work
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div data-lang="en">

<div class="impact-kicker">Agents and applications</div>

<div class="impact-tags">
  <span class="impact-tag">Tool agents</span>
  <span class="impact-tag">User simulators</span>
  <span class="impact-tag">AI patients</span>
  <span class="impact-tag">Role-playing agents</span>
  <span class="impact-tag">Market agents</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://wabyking.github.io/" target="_blank" rel="noopener">Benyou Wang papers</a>
  <a class="impact-action secondary" href="/projects/human-agent-interaction/">Human-Agent Interaction</a>
  <a class="impact-action secondary" href="/projects/economic-world-models/">Economic World Models</a>
  <a class="impact-action secondary" href="/projects/">All Projects</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/media-roundup-2026/twinmarket-bdi.png" alt="LLM agents and applications project map">
</div>

<p class="impact-lede">
This project organizes papers where LLMs do more than answer: they plan with tools, simulate users, play roles, teach learners, act as standardized patients, participate in markets, or operate inside evolving environments.
</p>

<section class="impact-section">
  <h2>Research Storyline</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>Plan</span>
      <div><strong>Use tools through multi-agent search</strong><p>Smurfs studies how multiple agents can coordinate tool planning while keeping search context efficient.</p></div>
    </div>
    <div class="impact-step">
      <span>Simulate</span>
      <div><strong>Generate interactive users and learners</strong><p>UserGPT and PlatoLM turn LLMs into simulated users, giving dialogue systems richer multi-turn practice.</p></div>
    </div>
    <div class="impact-step">
      <span>Practice</span>
      <div><strong>Deploy agents in education and medicine</strong><p>EasyMED and AI standardized patients make clinical communication and reasoning practice repeatable and measurable.</p></div>
    </div>
    <div class="impact-step">
      <span>World</span>
      <div><strong>Put agents into markets and micro-worlds</strong><p>TwinMarket and MicroVerse move from isolated prompts to environments where agent actions change future states.</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Paper Trail</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>Tools</span>
      <div><strong>Smurfs: Multi-Agent System using Context-Efficient DFSDT for Tool Planning</strong><p>Uses multi-agent search for tool planning with better context efficiency.</p><a href="https://aclanthology.org/2025.naacl-long.169/" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>User</span>
      <div><strong>Large Language Model as a User Simulator</strong><p>Builds LLM user simulators for dialogue data generation, training, and evaluation.</p><a href="https://arxiv.org/abs/2308.11534" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Tutor</span>
      <div><strong>PlatoLM: Teaching LLMs via a Socratic Questioning User Simulator</strong><p>Uses Socratic user simulation to improve multi-turn dialogue learning.</p><a href="https://openreview.net/forum?id=9nddtu94uX" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Patient</span>
      <div><strong>Human or LLM as Standardized Patients?</strong><p>Compares AI standardized patients and human standardized patients for medical education.</p><a href="https://arxiv.org/abs/2511.14783" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Role</span>
      <div><strong>CRPO: Character-centric Group Relative Policy Optimization</strong><p>Optimizes role-playing agents while preserving character fidelity and reasoning quality.</p><a href="https://arxiv.org/abs/2605.25511" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Market</span>
      <div><strong>TwinMarket</strong><p>Simulates financial markets with LLM investor agents that carry beliefs, desires, intentions, and actions.</p><a href="/projects/twinmarket-financial-simulation/">Project page</a></div>
    </div>
    <div class="impact-paper">
      <span>World</span>
      <div><strong>MicroVerse</strong><p>Explores scientific micro-world simulation with hidden mechanisms and evolving states.</p><a href="/projects/microverse-world-simulation/">Project page</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Application Clusters</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>Tool-use agents</strong>
      <p>Smurfs organizes tool planning as a multi-agent search problem rather than a single fragile ReAct trajectory.</p>
    </div>
    <div class="impact-card">
      <strong>Dialogue and education agents</strong>
      <p>User simulators, PlatoLM, and AI standardized patients use interaction to create practice, feedback, and evaluation loops.</p>
    </div>
    <div class="impact-card">
      <strong>Role-aware agents</strong>
      <p>CRPO studies how RL objectives should change when the agent must preserve persona, style, and character consistency.</p>
    </div>
    <div class="impact-card">
      <strong>World and market agents</strong>
      <p>TwinMarket, Economic World Models, and MicroVerse treat agents as actors inside environments that respond to their decisions.</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Resource Map</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>Smurfs</strong>
      <p>Paper and ACL Anthology page for multi-agent tool planning.</p>
      <a href="https://aclanthology.org/2025.naacl-long.169/" target="_blank" rel="noopener">Paper</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>EasyMED</strong>
      <p>AI standardized patient framework and medical education evaluation resources.</p>
      <a href="https://github.com/FreedomIntelligence/EasyMED" target="_blank" rel="noopener">Repository</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>TwinMarket</strong>
      <p>Financial market simulation with LLM investor agents.</p>
      <a href="/projects/twinmarket-financial-simulation/">Project page</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>MicroVerse</strong>
      <p>Micro-world simulation for scientific environments.</p>
      <a href="/projects/microverse-world-simulation/">Project page</a>
    </div>
  </div>
</section>

<div class="impact-actions">
  <a class="impact-action secondary" href="/projects/">Back to Projects</a>
</div>

</div>

<div data-lang="zh">

<div class="impact-kicker">智能体与应用</div>

<div class="impact-tags">
  <span class="impact-tag">工具智能体</span>
  <span class="impact-tag">用户模拟器</span>
  <span class="impact-tag">AI 病人</span>
  <span class="impact-tag">角色扮演智能体</span>
  <span class="impact-tag">市场智能体</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://wabyking.github.io/" target="_blank" rel="noopener">王本友论文列表</a>
  <a class="impact-action secondary" href="/projects/human-agent-interaction/">人机交互</a>
  <a class="impact-action secondary" href="/projects/economic-world-models/">经济世界模型</a>
  <a class="impact-action secondary" href="/projects/">全部项目</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/media-roundup-2026/twinmarket-bdi.png" alt="大模型智能体与应用项目总览图">
</div>

<p class="impact-lede">
本项目梳理这样一类论文：大模型不只是回答问题，还会借助工具做规划、模拟用户、扮演角色、辅导学习者、充当标准化病人、参与市场，或在不断演化的环境中行动。
</p>

<section class="impact-section">
  <h2>研究脉络</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>规划</span>
      <div><strong>借助多智能体搜索调用工具</strong><p>Smurfs 研究多个智能体如何协同规划工具调用，同时控制搜索的上下文开销。</p></div>
    </div>
    <div class="impact-step">
      <span>模拟</span>
      <div><strong>生成可交互的用户与学习者</strong><p>UserGPT 和 PlatoLM 把大模型变成模拟用户，为对话系统提供更丰富的多轮练习。</p></div>
    </div>
    <div class="impact-step">
      <span>练习</span>
      <div><strong>把智能体用于教育与医疗</strong><p>EasyMED 和 AI 标准化病人让临床沟通与推理练习可重复、可度量。</p></div>
    </div>
    <div class="impact-step">
      <span>世界</span>
      <div><strong>让智能体进入市场与微观世界</strong><p>TwinMarket 和 MicroVerse 不再停留在孤立的提示词上，而是转向交互环境：智能体的行动会改变后续状态。</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>论文脉络</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>工具</span>
      <div><strong>Smurfs: Multi-Agent System using Context-Efficient DFSDT for Tool Planning</strong><p>用多智能体搜索做工具规划，并提升上下文使用效率。</p><a href="https://aclanthology.org/2025.naacl-long.169/" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>用户</span>
      <div><strong>Large Language Model as a User Simulator</strong><p>构建大模型用户模拟器，用于对话数据生成、训练和评测。</p><a href="https://arxiv.org/abs/2308.11534" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>辅导</span>
      <div><strong>PlatoLM: Teaching LLMs via a Socratic Questioning User Simulator</strong><p>用苏格拉底式的用户模拟改进多轮对话学习。</p><a href="https://openreview.net/forum?id=9nddtu94uX" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>病人</span>
      <div><strong>Human or LLM as Standardized Patients?</strong><p>在医学教育中对比 AI 标准化病人与真人标准化病人。</p><a href="https://arxiv.org/abs/2511.14783" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>角色</span>
      <div><strong>CRPO: Character-centric Group Relative Policy Optimization</strong><p>优化角色扮演智能体，同时保持角色忠实度和推理质量。</p><a href="https://arxiv.org/abs/2605.25511" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>市场</span>
      <div><strong>TwinMarket</strong><p>用大模型投资者智能体模拟金融市场，每个智能体都有自己的信念、愿望、意图和行动。</p><a href="/projects/twinmarket-financial-simulation/">项目主页</a></div>
    </div>
    <div class="impact-paper">
      <span>世界</span>
      <div><strong>MicroVerse</strong><p>探索带有隐藏机制和演化状态的科学微观世界模拟。</p><a href="/projects/microverse-world-simulation/">项目主页</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>应用类别</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>工具使用智能体</strong>
      <p>Smurfs 把工具规划看作多智能体搜索问题，而不是单条脆弱的 ReAct 轨迹。</p>
    </div>
    <div class="impact-card">
      <strong>对话与教育智能体</strong>
      <p>用户模拟器、PlatoLM 和 AI 标准化病人通过交互形成练习、反馈与评测的闭环。</p>
    </div>
    <div class="impact-card">
      <strong>角色感知智能体</strong>
      <p>CRPO 研究：当智能体需要始终保持角色设定与说话风格时，强化学习目标该怎样调整。</p>
    </div>
    <div class="impact-card">
      <strong>世界与市场智能体</strong>
      <p>TwinMarket、经济世界模型和 MicroVerse 把智能体当作环境中的行动者，环境会对它们的决策作出响应。</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>资源导航</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>Smurfs</strong>
      <p>多智能体工具规划的论文，收录于 ACL Anthology。</p>
      <a href="https://aclanthology.org/2025.naacl-long.169/" target="_blank" rel="noopener">论文</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>EasyMED</strong>
      <p>AI 标准化病人框架与医学教育评测资源。</p>
      <a href="https://github.com/FreedomIntelligence/EasyMED" target="_blank" rel="noopener">代码仓库</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>TwinMarket</strong>
      <p>用大模型投资者智能体模拟金融市场。</p>
      <a href="/projects/twinmarket-financial-simulation/">项目主页</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>MicroVerse</strong>
      <p>面向科学环境的微观世界模拟。</p>
      <a href="/projects/microverse-world-simulation/">项目主页</a>
    </div>
  </div>
</section>

<div class="impact-actions">
  <a class="impact-action secondary" href="/projects/">返回项目页</a>
</div>

</div>

</div>
