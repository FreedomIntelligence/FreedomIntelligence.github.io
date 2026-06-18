---
layout: page
permalink: /projects/
title: Projects
title_zh: 项目
description:
project_tags:
  - LLM Reasoning & Agentic RL
  - LLM Agents and Applications
  - Human-Agent Interaction
  - Environment Engineering & World Models
  - Economic World Models
  - AI for Healthcare
  - Multi-modal LLMs
  - Multilingual LLMs
  - Speech LLMs
  - LLM efficiency and AI Infra
  - LLM Interpretability
nav: true
nav_order: 2
---

<link rel="stylesheet" href="{{ '/assets/css/project-hub.css' | relative_url }}?v={{ site.time | date: '%s' }}">

<div class="project-hub project-focused">
  <div class="project-filter project-filter-toolbar" aria-label="Project filters">
    <button type="button" class="is-active" data-project-filter="all">All</button>
    {% for tag in page.project_tags %}
      <button type="button" data-project-filter="{{ tag | escape }}">{{ tag }}</button>
    {% endfor %}
  </div>

  <p class="project-empty" hidden>No projects found for this tag.</p>

  <section class="project-program-section project-theme-optimization" id="llm-reasoning-agentic-rl" data-project-tags="LLM Reasoning & Agentic RL;LLM efficiency and AI Infra;Multi-modal LLMs" data-project-url="/projects/llm-reasoning-agentic-rl/">
    <div class="project-program-heading">
      <div class="project-eyebrow">Reasoning, RL, and adaptive test-time compute</div>
      <h2>LLM Reasoning & Agentic RL</h2>
      <p>
        This project organizes the lab's recent work on verifiable reasoning, policy optimization, path pruning, code-integrated thinking, and multimodal R1-style training. The through-line is simple: make LLMs reason with feedback signals that are inspectable, efficient, and useful for downstream agents.
      </p>
      <div class="project-actions">
        <a class="project-action primary" href="/projects/llm-reasoning-agentic-rl/">Open LLM Reasoning & Agentic RL</a>
        <a class="project-action" href="/projects/reasoning-math-optimization/">Open Math and Optimization</a>
        <a class="project-action" href="https://wabyking.github.io/" target="_blank" rel="noopener">Papers from Benyou Wang</a>
      </div>
    </div>
    <div class="project-program-layout">
      <div class="project-program-media">
        <img src="/assets/img/freedomai-2026/impact/iclr-financial-ai-award.jpg" alt="LLM reasoning and agentic reinforcement learning project signal">
      </div>
      <div>
        <h3>Paper organization</h3>
        <ol class="project-paper-list">
          <li><a href="https://wabyking.github.io/" target="_blank" rel="noopener">OnePO: Direct One-stage Policy Optimization for SFT-free Domain Adaptation</a> - direct policy optimization without a separate SFT stage.</li>
          <li><a href="https://arxiv.org/abs/2605.25511" target="_blank" rel="noopener">CRPO: Character-centric Group Relative Policy Optimization for Role-aware Reasoning in Role-playing Agents</a> - RL objectives for role-aware reasoning agents.</li>
          <li><a href="https://arxiv.org/abs/2506.12860" target="_blank" rel="noopener">Question-Free Fine-Tuning</a> - efficient and adaptive reasoning fine-tuning.</li>
          <li><a href="https://arxiv.org/abs/2604.16029" target="_blank" rel="noopener">Cut Your Losses! Learning to Prune Paths Early for Efficient Parallel Reasoning</a> - learnable path pruning for large reasoning models.</li>
          <li><a href="https://arxiv.org/abs/2503.21776" target="_blank" rel="noopener">Video-R1: Reinforcing Video Reasoning in MLLMs</a> - R1-style reinforcement learning for multimodal video reasoning.</li>
          <li><a href="https://arxiv.org/abs/2506.09820" target="_blank" rel="noopener">CoRT: Code-integrated Reasoning within Thinking</a> - executable computation inside the reasoning process.</li>
        </ol>
      </div>
    </div>
    <details class="project-resources-panel">
      <summary><span>Project stack</span><strong>Reasoning papers, code, and datasets</strong></summary>
      <div class="project-stack project-resource-stack">
        <a class="project-stack-row" href="https://bijiaxihh.github.io/STOP/" target="_blank" rel="noopener"><span class="project-stack-type">Project</span><span class="project-stack-main"><strong>STOP / Cut Your Losses</strong><span>Early path pruning for efficient parallel reasoning.</span></span></a>
        <a class="project-stack-row" href="https://github.com/tulerfeng/Video-R1" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>Video-R1</strong><span>Video-R1-CoT and RL training resources for video reasoning.</span></span></a>
        <a class="project-stack-row" href="https://github.com/ChengpengLi1003/CoRT" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>CoRT</strong><span>Code-integrated reasoning resources.</span></span></a>
        <a class="project-stack-row" href="https://github.com/1KE-JI/UPFT" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>UPFT</strong><span>Unsupervised prefix fine-tuning for efficient reasoning models.</span></span></a>
      </div>
    </details>
  </section>

  <section class="project-program-section project-theme-human" id="llm-agents-applications" data-project-tags="LLM Agents and Applications;Human-Agent Interaction;Economic World Models" data-project-url="/projects/llm-agents-applications/">
    <div class="project-program-heading">
      <div class="project-eyebrow">Agents, simulators, tools, and applied environments</div>
      <h2>LLM Agents and Applications</h2>
      <p>
        This project groups papers where LLMs become agents: tool planners, user simulators, standardized patients, role-playing agents, market participants, and micro-world actors. The goal is to organize agent papers by what the agent does, what environment it acts in, and how the interaction is evaluated.
      </p>
      <div class="project-actions">
        <a class="project-action primary" href="/projects/llm-agents-applications/">Open LLM Agents and Applications</a>
        <a class="project-action" href="/projects/human-agent-interaction/">Open Human-Agent Interaction</a>
        <a class="project-action" href="https://wabyking.github.io/" target="_blank" rel="noopener">Papers from Benyou Wang</a>
      </div>
    </div>
    <div class="project-program-layout">
      <div class="project-program-media">
        <img src="/assets/img/media-roundup-2026/twinmarket-bdi.png" alt="LLM agents and applications project map">
      </div>
      <div>
        <h3>Paper organization</h3>
        <ol class="project-paper-list">
          <li><a href="https://aclanthology.org/2025.naacl-long.169/" target="_blank" rel="noopener">Smurfs: Multi-Agent System using Context-Efficient DFSDT for Tool Planning</a> - multi-agent tool planning with context-efficient search.</li>
          <li><a href="https://arxiv.org/abs/2308.11534" target="_blank" rel="noopener">Large Language Model as a User Simulator</a> - LLM users for dialogue training and evaluation.</li>
          <li><a href="https://openreview.net/forum?id=9nddtu94uX" target="_blank" rel="noopener">PlatoLM: Teaching LLMs via a Socratic Questioning User Simulator</a> - Socratic interaction as a training signal.</li>
          <li><a href="https://arxiv.org/abs/2511.14783" target="_blank" rel="noopener">Human or LLM as Standardized Patients?</a> - AI patients for medical education and evaluation.</li>
          <li><a href="https://arxiv.org/abs/2502.01506" target="_blank" rel="noopener">TwinMarket: A Scalable Behavioral and Social Simulation for Financial Markets</a> - LLM investor agents in market simulation.</li>
          <li><a href="https://arxiv.org/abs/2603.00585" target="_blank" rel="noopener">MicroVerse</a> - agentic micro-world simulation for scientific processes.</li>
        </ol>
      </div>
    </div>
    <details class="project-resources-panel">
      <summary><span>Project stack</span><strong>Agent applications and environments</strong></summary>
      <div class="project-stack project-resource-stack">
        <a class="project-stack-row" href="https://arxiv.org/abs/2405.05955" target="_blank" rel="noopener"><span class="project-stack-type">Paper</span><span class="project-stack-main"><strong>Smurfs</strong><span>Multi-agent tool planning through context-efficient DFSDT.</span></span></a>
        <a class="project-stack-row" href="https://github.com/FreedomIntelligence/EasyMED" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>EasyMED</strong><span>AI standardized patient framework and evaluation resources.</span></span></a>
        <a class="project-stack-row" href="/projects/twinmarket-financial-simulation/"><span class="project-stack-type">Project</span><span class="project-stack-main"><strong>TwinMarket</strong><span>Financial market simulation with LLM agents.</span></span></a>
        <a class="project-stack-row" href="/projects/microverse-world-simulation/"><span class="project-stack-type">Project</span><span class="project-stack-main"><strong>MicroVerse</strong><span>Micro-world simulation with hidden mechanisms and evolving states.</span></span></a>
      </div>
    </details>
  </section>

  <section class="project-program-section project-theme-human" id="human-agent-interaction" data-project-tags="Human-Agent Interaction;LLM Agents and Applications;Speech LLMs" data-project-url="/projects/human-agent-interaction/">
    <div class="project-program-heading">
      <div class="project-eyebrow">Human-agent interaction and simulation</div>
      <h2>Human-Agent Interaction</h2>
      <p>
        这条线关注智能体如何和真实用户、学习者、患者、市场参与者以及模拟世界互动。它覆盖 LLM user simulator、AI standardized patients、speech-to-speech human-likeness evaluation、MicroVerse 交互式科学仿真，以及 TwinMarket 这类多智能体社会/金融模拟。
      </p>
      <div class="project-actions">
        <a class="project-action primary" href="/projects/human-agent-interaction/">Open Human-Agent Interaction</a>
        <a class="project-action" href="/projects/economic-world-models/">Open Economic World Models</a>
        <a class="project-action" href="/projects/microverse-world-simulation/">Open MicroVerse</a>
      </div>
    </div>
    <div class="project-program-layout">
      <div class="project-program-media">
        <img src="/assets/img/media-roundup-2026/twinmarket-bdi.png" alt="Human-agent and multi-agent simulation">
      </div>
      <div>
        <h3>相关论文整理</h3>
        <ol class="project-paper-list">
          <li><a href="https://arxiv.org/abs/2308.11534" target="_blank" rel="noopener">Large Language Model as a User Simulator</a>：用 LLM 模拟用户，生成对话训练和评测数据。</li>
          <li><a href="https://openreview.net/forum?id=9nddtu94uX" target="_blank" rel="noopener">PlatoLM: Teaching LLMs via a Socratic Questioning User Simulator</a>：通过苏格拉底式用户模拟训练多轮对话。</li>
          <li><a href="https://arxiv.org/abs/2511.14783" target="_blank" rel="noopener">Human or LLM as Standardized Patients?</a>：医学教育中的 AI 标准化病人。</li>
          <li><a href="https://arxiv.org/abs/2602.24080" target="_blank" rel="noopener">Human or Machine? A Preliminary Turing Test for Speech-to-Speech Interaction</a>：语音交互中的人类感评测。</li>
          <li><a href="https://arxiv.org/abs/2603.00585" target="_blank" rel="noopener">MicroVerse: A Preliminary Exploration Toward a Micro-World Simulation</a>：面向生物过程和教育可视化的微观世界仿真。</li>
          <li><a href="https://arxiv.org/abs/2502.01506" target="_blank" rel="noopener">TwinMarket</a>：金融市场中的行为与社会多智能体仿真。</li>
        </ol>
      </div>
    </div>
    <details class="project-resources-panel">
      <summary><span>项目入口</span><strong>Simulation and interaction resources</strong></summary>
      <div class="project-stack project-resource-stack">
        <a class="project-stack-row" href="/projects/twinmarket-financial-simulation/"><span class="project-stack-type">Project</span><span class="project-stack-main"><strong>TwinMarket</strong><span>金融市场行为和社会仿真。</span></span></a>
        <a class="project-stack-row" href="/projects/microverse-world-simulation/"><span class="project-stack-type">Project</span><span class="project-stack-main"><strong>MicroVerse</strong><span>面向生物机制的 micro-world simulation。</span></span></a>
        <a class="project-stack-row" href="https://github.com/FreedomIntelligence/EasyMED" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>EasyMED</strong><span>AI 标准化病人训练与评测。</span></span></a>
      </div>
    </details>
  </section>

  <section class="project-program-section project-theme-environment" id="environment-engineering-world-models" data-project-tags="Environment Engineering & World Models;Economic World Models;Human-Agent Interaction;LLM Agents and Applications;LLM Reasoning & Agentic RL" data-project-url="/projects/environment-engineering-world-models/">
    <div class="project-program-heading">
      <div class="project-eyebrow">Environment engineering and world models</div>
      <h2>环境工程和世界模型</h2>
      <p>
        这条线把“模型能力”放进可运行环境中：定义状态、行动、工具、用户、规则、世界动力学和评测对齐，让智能体能在用户模拟、金融市场、科学微世界和可执行优化环境中训练、评测和迭代。
      </p>
      <div class="project-actions">
        <a class="project-action primary" href="/projects/environment-engineering-world-models/">Open Environment Engineering</a>
        <a class="project-action" href="https://wabyking.github.io/" target="_blank" rel="noopener">Benyou Wang Papers</a>
      </div>
    </div>
    <div class="project-program-layout">
      <div class="project-program-media">
        <img src="/assets/img/economic-world-models/ewm-hero.png" alt="Environment engineering connects agents, environments, co-evolution, and real-world alignment">
      </div>
      <div>
        <h3>相关论文整理</h3>
        <ol class="project-paper-list">
          <li><a href="https://arxiv.org/abs/2603.00585" target="_blank" rel="noopener">MicroVerse: A Preliminary Exploration Toward a Micro-World Simulation</a>：把 world model 扩展到器官、细胞和亚细胞过程，强调隐藏机制、状态演化和科学约束。</li>
          <li><a href="https://arxiv.org/abs/2502.01506" target="_blank" rel="noopener">TwinMarket: A Scalable Behavioral and Social Simulation for Financial Markets</a>：用 LLM 投资者构造金融市场环境，从个体信念和信息流生成宏观行为。</li>
          <li><a href="/assets/pdf/economic-world-models.pdf" target="_blank" rel="noopener">From Economic Agents to Agentic Economies</a>：把智能体、环境、共演化和真实世界对齐组织成经济世界模型的系统蓝图。</li>
          <li><a href="https://arxiv.org/abs/2308.11534" target="_blank" rel="noopener">Large Language Model as a User Simulator</a>：用 LLM 构造可控用户环境，为多轮对话训练和评测提供可重复交互对象。</li>
          <li><a href="https://arxiv.org/abs/2405.17743" target="_blank" rel="noopener">ORLM: A Customizable Framework in Training Large Models for Automated Optimization Modeling</a>：把自然语言问题转成优化模型、约束、目标函数和可执行代码。</li>
          <li><a href="https://arxiv.org/abs/2510.04204" target="_blank" rel="noopener">CALM Before the STORM</a>：研究优化建模中的原生推理能力，把工程问题组织成可验证建模环境。</li>
        </ol>
      </div>
    </div>
    <details class="project-resources-panel">
      <summary><span>项目 / 论文 / 代码资源</span><strong>Environment stack</strong></summary>
      <div class="project-stack project-resource-stack">
        <a class="project-stack-row" href="/projects/environment-engineering-world-models/"><span class="project-stack-type">Project</span><span class="project-stack-main"><strong>环境工程和世界模型</strong><span>组织环境定义、智能体接口、世界动力学和评测对齐的总览页。</span></span></a>
        <a class="project-stack-row" href="/projects/economic-world-models/"><span class="project-stack-type">Project</span><span class="project-stack-main"><strong>Economic World Models</strong><span>经济世界模型架构、能力阶梯和 agentic economies。</span></span></a>
        <a class="project-stack-row" href="/projects/twinmarket-financial-simulation/"><span class="project-stack-type">Project</span><span class="project-stack-main"><strong>TwinMarket</strong><span>金融市场中的多智能体社会仿真环境。</span></span></a>
        <a class="project-stack-row" href="/projects/microverse-world-simulation/"><span class="project-stack-type">Project</span><span class="project-stack-main"><strong>MicroVerse</strong><span>面向生物和科学机制的微世界模拟。</span></span></a>
        <a class="project-stack-row" href="https://github.com/Cardinal-Operations/ORLM" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>Cardinal-Operations/ORLM</strong><span>自动化优化建模训练框架和 benchmark。</span></span></a>
        <a class="project-stack-row" href="https://github.com/tangzhy/STORM" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>tangzhy/STORM</strong><span>CALM/STORM 优化建模推理资源。</span></span></a>
      </div>
    </details>
  </section>

  <section class="project-program-section project-theme-economics" id="economic-world-models" data-project-tags="Economic World Models;Environment Engineering & World Models;LLM Agents and Applications;LLM Reasoning & Agentic RL" data-project-url="/projects/economic-world-models/">
    <div class="project-program-heading">
      <div class="project-eyebrow">Economic world models and agentic economies</div>
      <h2>经济世界模型</h2>
      <p>
        经济世界模型把市场、机构、政策和多智能体行为建成可计算、可演化、可对齐的世界。它连接 Economic World Models 的系统蓝图、TwinMarket 的金融市场沙盒、MicroVerse 的科学微世界模拟，以及 Awesome Econ World Models 的文献与资源地图。
      </p>
      <div class="project-actions">
        <a class="project-action primary" href="/projects/economic-world-models/">Open Economic World Models</a>
        <a class="project-action" href="https://github.com/FreedomIntelligence/Awesome-Econ-World-Models/" target="_blank" rel="noopener">Awesome EconWM</a>
      </div>
    </div>
    <div class="project-program-layout">
      <div class="project-program-media">
        <img src="/assets/img/economic-world-models/ewm-hero.png" alt="Economic World Models compare physical-world transitions with agent-generated economic-world transitions">
      </div>
      <div>
        <h3>相关论文整理</h3>
        <ol class="project-paper-list">
          <li><a href="/assets/pdf/economic-world-models.pdf" target="_blank" rel="noopener">From Economic Agents to Agentic Economies</a>：提出经济世界模型的系统蓝图，用可计算经济体支持智能体训练、政策沙盒、规划和安全分析。</li>
          <li><a href="https://arxiv.org/abs/2502.01506" target="_blank" rel="noopener">TwinMarket: A Scalable Behavioral and Social Simulation for Financial Markets</a>：用 LLM 投资者模拟金融市场中的信念、意图、信息流和交易行为。</li>
          <li><a href="https://github.com/FreedomIntelligence/MicroVerse" target="_blank" rel="noopener">MicroVerse: A Preliminary Exploration Toward a Micro-World Simulation</a>：把 world model 思路扩展到生物与科学微世界，强调隐藏机制和状态演化。</li>
          <li><a href="https://github.com/FreedomIntelligence/Awesome-Econ-World-Models/" target="_blank" rel="noopener">Awesome Econ World Models</a>：持续整理经济智能体、agentic economies、制度演化、sim-to-real alignment 等方向的论文和资源。</li>
        </ol>
      </div>
    </div>
    <details class="project-resources-panel">
      <summary><span>GitHub / Project 资源</span><strong>Paper, repositories, project pages</strong></summary>
      <div class="project-stack project-resource-stack">
      <a class="project-stack-row" href="/projects/economic-world-models/"><span class="project-stack-type">Project</span><span class="project-stack-main"><strong>Economic World Models</strong><span>总览经济世界模型架构、能力阶梯、代表团队和系统路线图。</span></span></a>
      <a class="project-stack-row" href="/assets/pdf/economic-world-models.pdf" target="_blank" rel="noopener"><span class="project-stack-type">Paper</span><span class="project-stack-main"><strong>From Economic Agents to Agentic Economies</strong><span>经济世界模型论文 PDF。</span></span></a>
      <a class="project-stack-row" href="https://github.com/FreedomIntelligence/Awesome-Econ-World-Models/" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/Awesome-Econ-World-Models</strong><span>经济世界模型论文、系统和资源集合。</span></span></a>
      <a class="project-stack-row" href="/projects/twinmarket-financial-simulation/"><span class="project-stack-type">Project</span><span class="project-stack-main"><strong>TwinMarket Financial AI Simulation</strong><span>经济世界模型中的金融市场原型沙盒。</span></span></a>
      <a class="project-stack-row" href="https://github.com/FreedomIntelligence/TwinMarket" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/TwinMarket</strong><span>金融行为与社会模拟代码资源。</span></span></a>
      <a class="project-stack-row" href="/projects/microverse-world-simulation/"><span class="project-stack-type">Project</span><span class="project-stack-main"><strong>MicroVerse Micro-World Simulation</strong><span>把世界模型扩展到科学微世界与生物过程。</span></span></a>
      <a class="project-stack-row" href="https://github.com/FreedomIntelligence/MicroVerse" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/MicroVerse</strong><span>MicroVerse 项目资源。</span></span></a>
      </div>
    </details>
  </section>

  <section class="project-program-section project-theme-optimization" id="optimization-llms" data-project-tags="LLM Reasoning & Agentic RL;LLM efficiency and AI Infra" data-project-url="/projects/reasoning-math-optimization/">
    <div class="project-program-heading">
      <div class="project-eyebrow">Optimization modeling LLMs</div>
      <h2>运筹优化大模型系列</h2>
      <p>
        运筹优化主线把自然语言问题转成数学优化模型、约束、目标函数和可执行代码。ORLM 提供开放模型与 IndustryOR benchmark，CALM/STORM 进一步研究优化建模中的原生推理能力。
      </p>
      <div class="project-actions">
        <a class="project-action primary" href="/projects/reasoning-math-optimization/">Open Reasoning and Optimization</a>
      </div>
    </div>
    <div class="project-program-layout">
      <div class="project-program-media">
        <img src="/assets/img/freedomai-2026/impact/iclr-financial-ai-award.jpg" alt="Reasoning and optimization project signal">
      </div>
      <div>
        <h3>相关论文整理</h3>
        <ol class="project-paper-list">
          <li><a href="https://arxiv.org/abs/2405.17743" target="_blank" rel="noopener">ORLM: A Customizable Framework in Training Large Models for Automated Optimization Modeling</a>：OR-Instruct、ORLM 和 IndustryOR。</li>
          <li><a href="https://arxiv.org/abs/2510.04204" target="_blank" rel="noopener">CALM Before the STORM: Unlocking Native Reasoning for Optimization Modeling</a>：优化建模中的原生推理。</li>
          <li><a href="https://arxiv.org/abs/2403.02884" target="_blank" rel="noopener">MathScale: Scaling Instruction Tuning for Mathematical Reasoning</a>：数学推理 scaling 与 verifier 相关基础。</li>
          <li><a href="https://arxiv.org/abs/2506.09820" target="_blank" rel="noopener">CoRT: Code-integrated Reasoning within Thinking</a>：将代码执行接入思维链，也服务于形式化建模和计算。</li>
        </ol>
      </div>
    </div>
    <details class="project-resources-panel">
      <summary><span>GitHub / Hugging Face 资源</span><strong>Code, models, datasets</strong></summary>
      <div class="project-stack project-resource-stack">
        <a class="project-stack-row" href="https://github.com/Cardinal-Operations/ORLM" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>Cardinal-Operations/ORLM</strong><span>自动化优化建模训练框架、数据合成和 benchmark 入口。</span></span></a>
        <a class="project-stack-row" href="https://huggingface.co/datasets/CardinalOperations/IndustryOR" target="_blank" rel="noopener"><span class="project-stack-type">HF Dataset</span><span class="project-stack-main"><strong>CardinalOperations/IndustryOR</strong><span>100 个真实工业运筹问题 benchmark。</span></span></a>
        <a class="project-stack-row" href="https://github.com/tangzhy/STORM" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>tangzhy/STORM</strong><span>CALM/STORM 优化建模推理资源。</span></span></a>
        <a class="project-stack-row" href="https://github.com/ChengpengLi1003/CoRT" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>ChengpengLi1003/CoRT</strong><span>代码集成推理资源。</span></span></a>
      </div>
    </details>
  </section>

  <section class="project-program-section project-theme-medical" id="huatuogpt" data-project-tags="AI for Healthcare;Multi-modal LLMs" data-project-url="/projects/medical-ai-ecosystem/">
    <div class="project-program-heading">
      <div class="project-eyebrow">HuatuoGPT medical model family</div>
      <h2>AI for Healthcare：华佗GPT系列大模型</h2>
      <p>
        华佗GPT 是 AI for Healthcare 主线：从 Huatuo-26M 中文医学问答数据，到 HuatuoGPT / HuatuoGPT-II 医学适配，再到 HuatuoGPT-o1 的复杂医学推理和 HuatuoGPT-Vision 的医学视觉语言理解。
      </p>
      <div class="project-actions">
        <a class="project-action primary" href="/projects/medical-ai-ecosystem/">Open HuatuoGPT Ecosystem</a>
        <a class="project-action" href="/projects/huatuogpt-ii/">Open HuatuoGPT-II</a>
      </div>
    </div>
    <div class="project-program-layout">
      <div class="project-program-media">
        <img src="/assets/img/media-roundup-2026/huatuogpt-overview.png" alt="HuatuoGPT medical model ecosystem">
      </div>
      <div>
        <h3>相关论文整理</h3>
        <ol class="project-paper-list">
          <li><a href="https://arxiv.org/abs/2305.01526" target="_blank" rel="noopener">Huatuo-26M, a Large-scale Chinese Medical QA Dataset</a>：中文医学 QA 数据基础。</li>
          <li><a href="https://arxiv.org/abs/2305.15075" target="_blank" rel="noopener">HuatuoGPT, towards Taming Language Model to Be a Doctor</a>：早期开放医学对话模型。</li>
          <li><a href="https://arxiv.org/abs/2311.09774" target="_blank" rel="noopener">HuatuoGPT-II, One-stage Training for Medical Adaption of LLMs</a>：统一一阶段医学适配训练。</li>
          <li><a href="https://arxiv.org/abs/2412.18925" target="_blank" rel="noopener">Towards Medical Complex Reasoning with LLMs through Medical Verifiable Problems</a>：HuatuoGPT-o1 复杂医学推理。</li>
          <li><a href="https://arxiv.org/abs/2406.19280" target="_blank" rel="noopener">HuatuoGPT-Vision, Towards Injecting Medical Visual Knowledge into Multimodal LLMs at Scale</a>：医学多模态视觉知识注入。</li>
        </ol>
      </div>
    </div>
    <details class="project-resources-panel">
      <summary><span>GitHub / Hugging Face 资源</span><strong>Code, models, datasets</strong></summary>
      <div class="project-stack project-resource-stack">
        <a class="project-stack-row" href="https://github.com/FreedomIntelligence/Huatuo-26M" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/Huatuo-26M</strong><span>中文医学 QA 数据集与构建资源。</span></span></a>
        <a class="project-stack-row" href="https://github.com/FreedomIntelligence/HuatuoGPT" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/HuatuoGPT</strong><span>华佗GPT 基础医学对话模型代码。</span></span></a>
        <a class="project-stack-row" href="https://github.com/FreedomIntelligence/HuatuoGPT-II" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/HuatuoGPT-II</strong><span>HuatuoGPT-II 训练和评测材料。</span></span></a>
        <a class="project-stack-row" href="https://github.com/FreedomIntelligence/HuatuoGPT-o1" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/HuatuoGPT-o1</strong><span>医学复杂推理模型和数据。</span></span></a>
        <a class="project-stack-row" href="https://github.com/FreedomIntelligence/HuatuoGPT-Vision" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/HuatuoGPT-Vision</strong><span>医学视觉语言模型训练代码。</span></span></a>
        <a class="project-stack-row" href="https://huggingface.co/datasets/FreedomIntelligence/PubMedVision" target="_blank" rel="noopener"><span class="project-stack-type">HF Dataset</span><span class="project-stack-main"><strong>FreedomIntelligence/PubMedVision</strong><span>医学图文视觉指令数据。</span></span></a>
      </div>
    </details>
  </section>

  <section class="project-program-section project-theme-eval" id="medical-evaluation" data-project-tags="AI for Healthcare;Multi-modal LLMs" data-project-url="/projects/medical-evaluation-benchmarks/">
    <div class="project-program-heading">
      <div class="project-eyebrow">Healthcare AI evaluation</div>
      <h2>医疗 AI 评测系列</h2>
      <p>
        医疗 AI 不能只看聊天流畅度。这条线把评测拆成中文医学知识、多模态医学理解、可解释诊断、实时临床、医生工作流和医学教育几层，让模型在更接近临床的任务上暴露短板。
      </p>
      <div class="project-actions">
        <a class="project-action primary" href="/projects/medical-evaluation-benchmarks/">Open Medical Evaluation Benchmarks</a>
      </div>
    </div>
    <div class="project-program-layout">
      <div class="project-program-media">
        <img src="/assets/img/media-roundup-2026/cmb-overview.png" alt="CMB medical benchmark overview">
      </div>
      <div>
        <h3>相关论文整理</h3>
        <ol class="project-paper-list">
          <li><a href="https://arxiv.org/abs/2308.08833" target="_blank" rel="noopener">CMB: A Comprehensive Medical Benchmark in Chinese</a>：中文医学综合 benchmark。</li>
          <li><a href="https://arxiv.org/abs/2408.03361" target="_blank" rel="noopener">GMAI-MMBench</a>：面向通用医疗 AI 的多模态评测。</li>
          <li><a href="https://arxiv.org/abs/2407.13301" target="_blank" rel="noopener">Chain-of-Diagnosis / DxBench</a>：可解释诊断模型和真实医患对话诊断评测。</li>
          <li><a href="https://arxiv.org/abs/2602.16747" target="_blank" rel="noopener">LiveClin: A Live Clinical Benchmark without Leakage</a>：持续更新、抗泄漏的真实临床 benchmark。</li>
          <li><a href="https://arxiv.org/abs/2510.11040" target="_blank" rel="noopener">Enabling Doctor-Centric Medical AI with LLMs through Workflow-Aligned Tasks and Benchmarks</a>：DoctorFLAN / DotaBench，面向医生工作流。</li>
        </ol>
      </div>
    </div>
    <details class="project-resources-panel">
      <summary><span>GitHub / Hugging Face 资源</span><strong>Code, models, datasets</strong></summary>
      <div class="project-stack project-resource-stack">
        <a class="project-stack-row" href="https://github.com/FreedomIntelligence/CMB" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/CMB</strong><span>中文医学 benchmark 代码。</span></span></a>
        <a class="project-stack-row" href="https://github.com/uni-medical/GMAI-MMBench" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>uni-medical/GMAI-MMBench</strong><span>GMAI-MMBench 多模态评测代码。</span></span></a>
        <a class="project-stack-row" href="https://github.com/FreedomIntelligence/Chain-of-Diagnosis" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/Chain-of-Diagnosis</strong><span>CoD、DxBench、DiagnosisGPT 统一入口。</span></span></a>
        <a class="project-stack-row" href="https://github.com/AQ-MedAI/LiveClin" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>AQ-MedAI/LiveClin</strong><span>LiveClin 代码和数据入口。</span></span></a>
        <a class="project-stack-row" href="https://github.com/FreedomIntelligence/DotaGPT" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/DotaGPT</strong><span>DoctorFLAN / DotaBench 训练与评测代码。</span></span></a>
      </div>
    </details>
  </section>

  <section class="project-program-section project-theme-education" id="medical-education-sp" data-project-tags="AI for Healthcare;Human-Agent Interaction" data-project-url="/projects/medical-education-standardized-patients/">
    <div class="project-program-heading">
      <div class="project-eyebrow">Medical education and AI standardized patients</div>
      <h2>医学教育与 AI 标准化病人</h2>
      <p>
        这条线面向医学教育中的 SP（standardized patients）训练，把 AI 病人做成可控、可复用、可评测的练习对象。它同时连接 ACL 医学教育评测与 CHI/人机交互里的共创设计问题：AI 病人不只要“像病人说话”，还要真正帮助学生练习病史采集、沟通和临床推理。
      </p>
      <div class="project-actions">
        <a class="project-action primary" href="/projects/medical-education-standardized-patients/">Open AI Standardized Patients</a>
        <a class="project-action" href="https://github.com/FreedomIntelligence/EasyMED" target="_blank" rel="noopener">Open EasyMED</a>
      </div>
    </div>
    <div class="project-program-layout">
      <div class="project-program-media">
        <img src="/assets/img/media-roundup-2026/huatuogpt-auto-eval.jpeg" alt="Medical education and standardized patient evaluation">
      </div>
      <div>
        <h3>相关论文整理</h3>
        <ol class="project-paper-list">
          <li><a href="https://arxiv.org/abs/2511.14783" target="_blank" rel="noopener">Human or LLM as Standardized Patients? A Comparative Study in Medical Education</a>：提出 EasyMED 与 SPBench，对比 AI SP 与人类 SP 的教学效果。</li>
          <li><a href="https://arxiv.org/abs/2602.05856" target="_blank" rel="noopener">"It Talks Like a Patient, But Feels Different": Co-Designing AI Standardized Patients with Medical Learners</a>：从 CHI 视角总结医学学习者对 AI SP 的体验和设计需求。</li>
          <li><a href="https://arxiv.org/abs/2510.11040" target="_blank" rel="noopener">Doctor-centric workflow-aligned tasks and benchmarks</a>：把医学 AI 评测放进医生真实工作流。</li>
        </ol>
      </div>
    </div>
    <details class="project-resources-panel">
      <summary><span>GitHub / 论文资源</span><strong>Code and papers</strong></summary>
      <div class="project-stack project-resource-stack">
        <a class="project-stack-row" href="https://github.com/FreedomIntelligence/EasyMED" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/EasyMED</strong><span>AI 标准化病人框架和医学教育评测入口。</span></span></a>
        <a class="project-stack-row" href="https://arxiv.org/abs/2511.14783" target="_blank" rel="noopener"><span class="project-stack-type">Paper</span><span class="project-stack-main"><strong>Human or LLM as Standardized Patients?</strong><span>EasyMED、SPBench 和医学教育对比实验。</span></span></a>
        <a class="project-stack-row" href="https://dl.acm.org/doi/10.1145/3772363.3798336" target="_blank" rel="noopener"><span class="project-stack-type">CHI</span><span class="project-stack-main"><strong>Co-designing AI standardized patients</strong><span>医学学习者共创设计与交互需求。</span></span></a>
      </div>
    </details>
  </section>

  <section class="project-program-section project-theme-multilingual" id="multilingual-llms" data-project-tags="Multilingual LLMs;AI for Healthcare" data-project-url="/projects/multilingual-localized-llms/">
    <div class="project-program-heading">
      <div class="project-eyebrow">Multilingual and localized LLMs</div>
      <h2>多语言大语言模型</h2>
      <p>
        多语言主线从 Phoenix / LLMZoo 的开放多语言聊天开始，到 AceGPT 的阿拉伯语本地化，再到 Apollo / ApolloMoE 的多语言医学模型、语料和评测。核心目标是让医学和通用 AI 不只服务少数高资源语言。
      </p>
      <div class="project-actions">
        <a class="project-action primary" href="/projects/multilingual-localized-llms/">Open Multilingual Project</a>
        <a class="project-action" href="/projects/rag-instruction-data/">Open Data Infrastructure</a>
      </div>
    </div>
    <div class="project-program-layout">
      <div class="project-program-media">
        <img src="/assets/img/freedomai-2026/impact/apollo-map.jpg" alt="Apollo multilingual medical model map">
      </div>
      <div>
        <h3>相关论文整理</h3>
        <ol class="project-paper-list">
          <li><a href="https://arxiv.org/abs/2304.10453" target="_blank" rel="noopener">Phoenix: Democratizing ChatGPT across Languages</a>：早期开放多语言聊天模型。</li>
          <li><a href="https://aclanthology.org/2024.naacl-long.450/" target="_blank" rel="noopener">AceGPT, Localizing Large Language Models in Arabic</a>：阿拉伯语大模型本地化与对齐。</li>
          <li><a href="https://arxiv.org/abs/2403.03640" target="_blank" rel="noopener">Apollo: Lightweight Multilingual Medical LLMs towards Democratizing Medical AI to 6B People</a>：多语言医学模型、数据和评测。</li>
          <li><a href="https://arxiv.org/abs/2409.02615" target="_blank" rel="noopener">ApolloMoE</a>：面向 50 种语言的医学 MoE 模型。</li>
        </ol>
      </div>
    </div>
    <details class="project-resources-panel">
      <summary><span>GitHub / Hugging Face 资源</span><strong>Code, models, datasets</strong></summary>
      <div class="project-stack project-resource-stack">
        <a class="project-stack-row" href="https://github.com/FreedomIntelligence/LLMZoo" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/LLMZoo</strong><span>Phoenix / LLMZoo 多语言模型资源。</span></span></a>
        <a class="project-stack-row" href="https://github.com/FreedomIntelligence/AceGPT" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/AceGPT</strong><span>阿拉伯语 LLM 本地化代码和资源。</span></span></a>
        <a class="project-stack-row" href="https://github.com/FreedomIntelligence/Apollo" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/Apollo</strong><span>Apollo 多语言医学模型、数据、评测代码。</span></span></a>
        <a class="project-stack-row" href="https://github.com/FreedomIntelligence/ApolloMoE" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/ApolloMoE</strong><span>面向 50 种语言的医学 MoE 模型代码。</span></span></a>
      </div>
    </details>
  </section>

  <section class="project-program-section project-theme-speech" id="speech-llms" data-project-tags="Speech LLMs;Human-Agent Interaction" data-project-url="/projects/speech-audio-talking-head-ai/">
    <div class="project-program-heading">
      <div class="project-eyebrow">Speech LLMs and speech-to-speech agents</div>
      <h2>Speech LLMs</h2>
      <p>
        Speech LLMs 方向把大模型从文本扩展到语音输入、语音输出、语气、情绪和副语言信息。相关项目包括 Soundwave、S2S-Arena、EchoMind、FusionAudio、UNSPOKEN，以及 speech-to-speech Turing Test。
      </p>
      <div class="project-actions">
        <a class="project-action primary" href="/projects/speech-audio-talking-head-ai/">Open Speech and Audio Project</a>
        <a class="project-action" href="https://github.com/FreedomIntelligence/Soundwave" target="_blank" rel="noopener">Open Soundwave</a>
      </div>
    </div>
    <div class="project-program-layout">
      <div class="project-program-media">
        <img src="/assets/img/media-roundup-2026/socratic-pipeline.png" alt="Speech LLM and interactive AI pipeline">
      </div>
      <div>
        <h3>相关论文整理</h3>
        <ol class="project-paper-list">
          <li><a href="https://arxiv.org/abs/2502.12900" target="_blank" rel="noopener">Soundwave: Less is More for Speech-Text Alignment in LLMs</a>：用更少数据完成 speech-text alignment。</li>
          <li><a href="https://arxiv.org/abs/2503.05085" target="_blank" rel="noopener">S2S-Arena</a>：评测 speech-to-speech 模型的语义理解和副语言指令跟随。</li>
          <li><a href="https://arxiv.org/abs/2510.22758" target="_blank" rel="noopener">EchoMind</a>：面向 empathetic Speech Language Models 的多层级 benchmark。</li>
          <li><a href="https://arxiv.org/abs/2602.24080" target="_blank" rel="noopener">Human or Machine? A Preliminary Turing Test for Speech-to-Speech Interaction</a>：评测 S2S 系统是否真正像人类对话。</li>
          <li><a href="https://arxiv.org/abs/2506.01111" target="_blank" rel="noopener">FusionAudio-1.2M</a>：细粒度音频 caption 与 multimodal contextual fusion。</li>
          <li><a href="https://github.com/Hongru0306/UNSPOKEN" target="_blank" rel="noopener">UNSPOKEN</a>：用未说出口的声学线索评测 audio language models 的隐喻推理。</li>
        </ol>
      </div>
    </div>
    <details class="project-resources-panel">
      <summary><span>GitHub / Hugging Face 资源</span><strong>Code, models, datasets</strong></summary>
      <div class="project-stack project-resource-stack">
        <a class="project-stack-row" href="https://github.com/FreedomIntelligence/Soundwave" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/Soundwave</strong><span>Speech-text alignment for LLMs。</span></span></a>
        <a class="project-stack-row" href="https://huggingface.co/FreedomIntelligence/Soundwave" target="_blank" rel="noopener"><span class="project-stack-type">HF Model</span><span class="project-stack-main"><strong>FreedomIntelligence/Soundwave</strong><span>Soundwave 模型卡。</span></span></a>
        <a class="project-stack-row" href="https://github.com/FreedomIntelligence/S2S-Arena" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/S2S-Arena</strong><span>Speech-to-speech paralinguistic benchmark。</span></span></a>
        <a class="project-stack-row" href="https://hlt-cuhksz.github.io/EchoMind/" target="_blank" rel="noopener"><span class="project-stack-type">Project</span><span class="project-stack-main"><strong>EchoMind</strong><span>Empathetic speech language model benchmark。</span></span></a>
        <a class="project-stack-row" href="https://github.com/FreedomIntelligence/FusionAudio" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/FusionAudio</strong><span>Fine-grained audio captioning data and models。</span></span></a>
      </div>
    </details>
  </section>

  <section class="project-program-section project-theme-infra" id="llm-efficiency-ai-infra" data-project-tags="LLM efficiency and AI Infra;LLM Reasoning & Agentic RL;Multi-modal LLMs" data-project-url="/projects/llm-efficiency-ai-infra/">
    <div class="project-program-heading">
      <div class="project-eyebrow">Efficient training, inference, retrieval, and multimodal context</div>
      <h2>LLM efficiency and AI Infra</h2>
      <p>
        这条线把“能不能跑得起、训得动、改得快”作为项目主题，覆盖推理路径剪枝、question-free fine-tuning、prefix fine-tuning、editable efficient RAG、长上下文多模态和 token reduction。
      </p>
      <div class="project-actions">
        <a class="project-action primary" href="/projects/llm-efficiency-ai-infra/">Open LLM Infra</a>
        <a class="project-action" href="/projects/long-context-multimodal/">Open LongLLaVA and MileBench</a>
        <a class="project-action" href="/projects/rag-instruction-data/">Open Data Infrastructure</a>
      </div>
    </div>
    <div class="project-program-layout">
      <div class="project-program-media">
        <img src="/assets/img/media-roundup-2026/longllava-architecture.webp" alt="LLM efficiency and AI infrastructure">
      </div>
      <div>
        <h3>相关论文整理</h3>
        <ol class="project-paper-list">
          <li><a href="https://arxiv.org/abs/2604.16029" target="_blank" rel="noopener">Cut Your Losses! Learning to Prune Paths Early for Efficient Parallel Reasoning</a>：提前剪枝低价值推理路径。</li>
          <li><a href="https://arxiv.org/abs/2506.12860" target="_blank" rel="noopener">Question-Free Fine-Tuning: Towards Efficient and Adaptive Reasoning in Large Language Models</a>：面向高效自适应推理的 QFFT。</li>
          <li><a href="https://arxiv.org/abs/2503.02875" target="_blank" rel="noopener">The First Few Tokens Are All You Need</a>：UPFT，用极少前缀 token 进行高效无监督推理微调。</li>
          <li><a href="https://papers.cool/venue/COLM.2025" target="_blank" rel="noopener">E2-RAG: Towards Editable Efficient RAG by Editing Compressed KV Caches</a>：编辑压缩 KV cache，面向快速更新场景。</li>
          <li><a href="https://arxiv.org/abs/2409.02889" target="_blank" rel="noopener">LongLLaVA: Scaling Multi-modal LLMs to 1000 Images Efficiently</a>：长上下文多图像多模态推理。</li>
          <li><a href="https://arxiv.org/abs/2409.10994" target="_blank" rel="noopener">TRIM: Less is More for Efficient Multi-modal LLMs</a>：减少视觉 token，降低多模态推理成本。</li>
        </ol>
      </div>
    </div>
    <details class="project-resources-panel">
      <summary><span>GitHub / 资源入口</span><strong>Infrastructure stack</strong></summary>
      <div class="project-stack project-resource-stack">
        <a class="project-stack-row" href="https://github.com/FreedomIntelligence/LongLLaVA" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/LongLLaVA</strong><span>长上下文多模态模型。</span></span></a>
        <a class="project-stack-row" href="https://github.com/FreedomIntelligence/TRIM" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/TRIM</strong><span>高效多模态 token reduction。</span></span></a>
        <a class="project-stack-row" href="https://github.com/1KE-JI/UPFT" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>1KE-JI/UPFT</strong><span>Unsupervised prefix fine-tuning resources。</span></span></a>
        <a class="project-stack-row" href="https://github.com/FreedomIntelligence/RAG-Instruct" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/RAG-Instruct</strong><span>Retrieval-augmented instruction data。</span></span></a>
        <a class="project-stack-row" href="https://github.com/FreedomIntelligence/LLMZoo" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/LLMZoo</strong><span>开放模型和训练资源集合。</span></span></a>
      </div>
    </details>
  </section>

  <section class="project-program-section project-theme-explain" id="interpretable-llms" data-project-tags="LLM Interpretability;AI for Healthcare;LLM Reasoning & Agentic RL" data-project-url="/projects/llm-interpretability/">
    <div class="project-program-heading">
      <div class="project-eyebrow">Explainable and verifiable LLMs</div>
      <h2>LLM Interpretability</h2>
      <p>
        可解释性是横向能力：它关心模型为什么这样回答、哪些内部特征真正有用、以及如何把机制理解转成可控编辑。这个方向现在以 sparse autoencoder、model unlearning 和 circuit analysis 为主线，同时连接医学诊断链、verifier 和代码集成推理。
      </p>
      <div class="project-actions">
        <a class="project-action primary" href="/projects/llm-interpretability/">Open LLM Interpretability</a>
        <a class="project-action" href="https://arxiv.org/abs/2510.03659" target="_blank" rel="noopener">Open ICLR 2026 paper</a>
      </div>
    </div>
    <div class="project-program-layout">
      <div class="project-program-media">
        <img src="/assets/img/freedomai-2026/impact/llm-interpretability.svg" alt="LLM interpretability and sparse autoencoder analysis">
      </div>
      <div>
        <h3>相关论文整理</h3>
        <ol class="project-paper-list">
          <li><a href="https://arxiv.org/abs/2510.03659" target="_blank" rel="noopener">Does Higher Interpretability Imply Better Utility? A Pairwise Analysis on Sparse Autoencoders</a>：ICLR 2026，系统比较 SAE 的可解释性指标和实际 steering utility；获 NeurIPS 2025 ResponsibleFM Workshop Outstanding Paper Award。</li>
          <li><a href="https://arxiv.org/abs/2505.24428" target="_blank" rel="noopener">Model Unlearning via Sparse Autoencoder Subspace Guided Projections</a>：EMNLP 2025，用 SAE subspace guided projections 做更可控的模型遗忘。</li>
          <li><a href="https://arxiv.org/abs/2502.11812" target="_blank" rel="noopener">Towards Understanding Fine-Tuning Mechanisms of LLMs via Circuit Analysis</a>：ICML 2025，用 circuit analysis 理解微调如何改变模型内部计算。</li>
          <li><a href="https://arxiv.org/abs/2407.13301" target="_blank" rel="noopener">CoD, Towards an Interpretable Medical Agent using Chain of Diagnosis</a>：用五步诊断链和置信度分布提升医学诊断可解释性。</li>
          <li><a href="https://arxiv.org/abs/2311.09724" target="_blank" rel="noopener">Outcome-supervised Verifiers for Planning in Mathematical Reasoning</a>：用结果监督 verifier 辅助数学规划推理。</li>
          <li><a href="https://arxiv.org/abs/2506.09820" target="_blank" rel="noopener">CoRT: Code-integrated Reasoning within Thinking</a>：把代码执行放入思维过程，让中间计算更透明。</li>
        </ol>
      </div>
    </div>
    <details class="project-resources-panel">
      <summary><span>论文 / GitHub / Hugging Face 资源</span><strong>Papers, code, models, datasets</strong></summary>
      <div class="project-stack project-resource-stack">
        <a class="project-stack-row" href="/projects/llm-interpretability/"><span class="project-stack-type">Project</span><span class="project-stack-main"><strong>LLM Interpretability and Sparse Autoencoders</strong><span>SAE utility、SAE-guided unlearning 和 circuit analysis 的详情页。</span></span></a>
        <a class="project-stack-row" href="https://arxiv.org/abs/2510.03659" target="_blank" rel="noopener"><span class="project-stack-type">ICLR 2026</span><span class="project-stack-main"><strong>Does Higher Interpretability Imply Better Utility?</strong><span>Pairwise analysis on sparse autoencoders。</span></span></a>
        <a class="project-stack-row" href="https://arxiv.org/abs/2505.24428" target="_blank" rel="noopener"><span class="project-stack-type">EMNLP 2025</span><span class="project-stack-main"><strong>Model Unlearning via SAE Subspace Guided Projections</strong><span>可解释子空间引导的模型遗忘。</span></span></a>
        <a class="project-stack-row" href="https://arxiv.org/abs/2502.11812" target="_blank" rel="noopener"><span class="project-stack-type">ICML 2025</span><span class="project-stack-main"><strong>Fine-Tuning Mechanisms via Circuit Analysis</strong><span>用 circuit analysis 理解 LLM 微调机制。</span></span></a>
        <a class="project-stack-row" href="https://github.com/FreedomIntelligence/Chain-of-Diagnosis" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/Chain-of-Diagnosis</strong><span>CoD 代码、诊断链数据、疾病库、DxBench 和 DiagnosisGPT 入口。</span></span></a>
        <a class="project-stack-row" href="https://huggingface.co/FreedomIntelligence/DiagnosisGPT-6B" target="_blank" rel="noopener"><span class="project-stack-type">HF Model</span><span class="project-stack-main"><strong>FreedomIntelligence/DiagnosisGPT-6B</strong><span>基于 CoD 的可解释诊断模型。</span></span></a>
        <a class="project-stack-row" href="https://huggingface.co/datasets/FreedomIntelligence/DxBench" target="_blank" rel="noopener"><span class="project-stack-type">HF Dataset</span><span class="project-stack-main"><strong>FreedomIntelligence/DxBench</strong><span>真实医患对话构建的疾病诊断 benchmark。</span></span></a>
        <a class="project-stack-row" href="https://github.com/FreedomIntelligence/OVM" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/OVM</strong><span>Outcome-supervised verifier 相关代码。</span></span></a>
        <a class="project-stack-row" href="https://github.com/ChengpengLi1003/CoRT" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>ChengpengLi1003/CoRT</strong><span>代码集成推理项目。</span></span></a>
        <a class="project-stack-row" href="https://github.com/tulerfeng/Video-R1" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>tulerfeng/Video-R1</strong><span>视频推理强化学习代码。</span></span></a>
      </div>
    </details>
  </section>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const buttons = Array.from(document.querySelectorAll('[data-project-filter]'));
    const sections = Array.from(document.querySelectorAll('.project-program-section'));
    const empty = document.querySelector('.project-empty');

    function tagsFor(section) {
      return (section.dataset.projectTags || '')
        .split(';')
        .map(function (tag) { return tag.trim(); })
        .filter(Boolean);
    }

    function setFilter(activeTag, updateUrl) {
      let visibleCount = 0;

      sections.forEach(function (section) {
        const shouldShow = activeTag === 'all' || tagsFor(section).includes(activeTag);
        section.classList.toggle('is-hidden', !shouldShow);
        if (shouldShow) visibleCount += 1;
      });

      buttons.forEach(function (button) {
        const isActive = button.dataset.projectFilter === activeTag;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
      });

      if (empty) empty.hidden = visibleCount > 0;

      if (updateUrl) {
        const url = new URL(window.location.href);
        if (activeTag === 'all') {
          url.searchParams.delete('tag');
        } else {
          url.searchParams.set('tag', activeTag);
        }
        window.history.replaceState({}, '', url);
      }
    }

    sections.forEach(function (section) {
      const projectUrl = section.dataset.projectUrl;
      if (!projectUrl) return;

      const title = section.querySelector('h2');
      section.classList.add('is-clickable');
      section.setAttribute('role', 'link');
      section.setAttribute('tabindex', '0');
      if (title) {
        section.setAttribute('aria-label', 'Open project: ' + title.textContent.trim());
      }

      section.addEventListener('click', function (event) {
        const target = event.target;
        if (!(target instanceof Element)) return;
        if (target.closest('a, button, summary, details, input, select, textarea, [role="button"], .project-resources-panel')) return;
        window.location.href = projectUrl;
      });

      section.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
          window.location.href = projectUrl;
        }
      });
    });

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        setFilter(button.dataset.projectFilter, true);
      });
    });

    const initialTag = new URLSearchParams(window.location.search).get('tag');
    const hasInitialTag = buttons.some(function (button) {
      return button.dataset.projectFilter === initialTag;
    });
    setFilter(hasInitialTag ? initialTag : 'all', false);
  });
</script>
