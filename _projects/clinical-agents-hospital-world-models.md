---
layout: page
title: Clinical & Hospital World Models
title_zh: 临床与医院世界模型
direction: ai-applications
description: Clinical agents, patient-dynamics world models, hospital information-system environments, multi-role simulations, and medical skills.
description_zh: 临床智能体、患者动态世界模型、医院信息系统环境、多角色仿真与医疗技能。
img: assets/img/research/hospital-world-models.svg
importance: 3
category: work
github: https://github.com/FreedomIntelligence/SepsisAgent
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div data-lang="en">

<div class="impact-kicker">Clinical agents and hospital-scale environments</div>

<div class="impact-tags">
  <span class="impact-tag">Clinical Agents</span>
  <span class="impact-tag">Hospital World Models</span>
  <span class="impact-tag">Patient dynamics</span>
  <span class="impact-tag">HIS/EMR environments</span>
  <span class="impact-tag">Medical skills</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://github.com/FreedomIntelligence/SepsisAgent" target="_blank" rel="noopener">SepsisAgent</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/Agentic-Hospital" target="_blank" rel="noopener">Agentic-Hospital</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/TwinHospital" target="_blank" rel="noopener">TwinHospital</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills" target="_blank" rel="noopener">Medical Skills</a>
  <a class="impact-action secondary" href="/projects/">All Projects</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/research/hospital-world-models.svg" alt="Diagram: a clinical agent proposes, simulates in a clinical world model, and refines, inside ICU, HIS/EMR, and hospital-twin environments" width="1200" height="675">
</div>

<p class="impact-lede">
Clinical & Hospital World Models moves medical AI from isolated QA to environments where agents act, observe, call tools, interact with clinical roles, and reason over changing patient or hospital states. This page intentionally excludes DentalGPT and GlobalDentBench, which are now organized under the dedicated dental foundation model direction.
</p>

<section class="impact-section">
  <h2>Research Storyline</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>Patient</span>
      <div><strong>Model action-conditioned patient dynamics</strong><p>SepsisAgent uses a Clinical World Model to simulate patient responses under candidate ICU interventions.</p></div>
    </div>
    <div class="impact-step">
      <span>Hospital</span>
      <div><strong>Make the hospital directly actionable</strong><p>Agentic-Hospital connects role simulation, mocked HIS/EMR, structured data views, APIs, CLI interfaces, governance, and rubric-based evaluation.</p></div>
    </div>
    <div class="impact-step">
      <span>Twin</span>
      <div><strong>Simulate real hospital processes</strong><p>TwinHospital combines HIS data flow with multi-role agent simulation across registration, consultation, treatment, follow-up, and operations.</p></div>
    </div>
    <div class="impact-step">
      <span>Skill</span>
      <div><strong>Give agents clinical tools</strong><p>OpenClaw-Medical-Skills turns medical capabilities into callable skills for agentic workflows.</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Representative Work</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>World</span>
      <div><strong>SepsisAgent: Agentifying Patient Dynamics within LLMs</strong><p>Combines propose-simulate-refine inference with world-model-based agentic RL for ICU sepsis treatment recommendation.</p><a href="https://arxiv.org/abs/2605.14723" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Hospital</span>
      <div><strong>Agentic-Hospital</strong><p>Defines hospital intelligence as autonomous agents operating across human and digital hospital environments through standardized interfaces.</p><a href="https://github.com/FreedomIntelligence/Agentic-Hospital" target="_blank" rel="noopener">Repository</a></div>
    </div>
    <div class="impact-paper">
      <span>Twin</span>
      <div><strong>TwinHospital</strong><p>Builds an HIS data-flow-aware hospital simulation with patients, nurses, physicians, administrators, and management workflows.</p><a href="https://github.com/FreedomIntelligence/TwinHospital" target="_blank" rel="noopener">Repository</a></div>
    </div>
    <div class="impact-paper">
      <span>Workflow</span>
      <div><strong>Doctor-Centric Medical AI</strong><p>Defines workflow-aligned tasks and benchmarks that better match how clinicians actually work.</p><a href="https://arxiv.org/abs/2510.11040" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Skills</span>
      <div><strong>OpenClaw-Medical-Skills</strong><p>A large open-source medical AI skills library for building tool-using clinical agents.</p><a href="https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills" target="_blank" rel="noopener">Repository</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Technical Layers</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>Action-conditioned world models</strong>
      <p>Clinical states change after interventions, so agents need simulators that predict patient evolution under candidate actions.</p>
    </div>
    <div class="impact-card">
      <strong>Hospital information environments</strong>
      <p>HIS, EMR, labs, imaging, pharmacy, scheduling, billing, and governance systems become part of the agent environment.</p>
    </div>
    <div class="impact-card">
      <strong>Multi-role simulation</strong>
      <p>Doctors, nurses, administrators, patients, pharmacists, and managers make hospital workflows more realistic than single-turn diagnosis tasks.</p>
    </div>
    <div class="impact-card">
      <strong>Safety and auditing</strong>
      <p>Clinical agents need permissions, logs, rubric-based scoring, guideline adherence, and unsafe-action analysis.</p>
    </div>
  </div>
</section>

<div class="impact-actions">
  <a class="impact-action secondary" href="/projects/">Back to Projects</a>
</div>

</div>

<div data-lang="zh">

<div class="impact-kicker">临床智能体与医院级环境</div>

<div class="impact-tags">
  <span class="impact-tag">临床智能体</span>
  <span class="impact-tag">医院世界模型</span>
  <span class="impact-tag">患者动态</span>
  <span class="impact-tag">HIS/EMR 环境</span>
  <span class="impact-tag">医疗技能</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://github.com/FreedomIntelligence/SepsisAgent" target="_blank" rel="noopener">SepsisAgent</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/Agentic-Hospital" target="_blank" rel="noopener">Agentic-Hospital</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/TwinHospital" target="_blank" rel="noopener">TwinHospital</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills" target="_blank" rel="noopener">医疗技能</a>
  <a class="impact-action secondary" href="/projects/">全部项目</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/research/hospital-world-models-zh.svg" alt="示意图：临床智能体在临床世界模型中提出、仿真、修正，环境包括 ICU、HIS/EMR 与数字孪生医院" width="1200" height="675">
</div>

<p class="impact-lede">
临床与医院世界模型让医疗 AI 走出孤立的问答，进入一类新的环境：智能体在其中行动、观察、调用工具、与各类临床角色互动，并对不断变化的患者或医院状态做推理。本页有意不收录 DentalGPT 和 GlobalDentBench，它们现在归入专门的牙科大模型方向。
</p>

<section class="impact-section">
  <h2>研究脉络</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>患者</span>
      <div><strong>为动作条件下的患者动态建模</strong><p>SepsisAgent 用临床世界模型仿真患者在候选 ICU 干预下的反应。</p></div>
    </div>
    <div class="impact-step">
      <span>医院</span>
      <div><strong>让医院成为可直接操作的环境</strong><p>Agentic-Hospital 把角色仿真、模拟的 HIS/EMR、结构化数据视图、API、CLI 接口、治理机制和基于 rubric 的评测连接起来。</p></div>
    </div>
    <div class="impact-step">
      <span>孪生</span>
      <div><strong>仿真医院的实际流程</strong><p>TwinHospital 把 HIS 数据流与多角色智能体仿真结合起来，覆盖挂号、问诊、治疗、随访和运营。</p></div>
    </div>
    <div class="impact-step">
      <span>技能</span>
      <div><strong>为智能体提供临床工具</strong><p>OpenClaw-Medical-Skills 把医疗能力封装为可调用的技能，供智能体工作流使用。</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>代表性工作</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>世界模型</span>
      <div><strong>SepsisAgent: Agentifying Patient Dynamics within LLMs</strong><p>把“提出—仿真—修正”推理与基于世界模型的智能体强化学习结合，用于 ICU 脓毒症治疗推荐。</p><a href="https://arxiv.org/abs/2605.14723" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>医院</span>
      <div><strong>Agentic-Hospital</strong><p>把医院智能定义为：自主智能体通过标准化接口，在人类与数字化的医院环境中运作。</p><a href="https://github.com/FreedomIntelligence/Agentic-Hospital" target="_blank" rel="noopener">代码仓库</a></div>
    </div>
    <div class="impact-paper">
      <span>孪生</span>
      <div><strong>TwinHospital</strong><p>构建了能感知 HIS 数据流的医院仿真，涵盖患者、护士、医生、行政人员和管理流程。</p><a href="https://github.com/FreedomIntelligence/TwinHospital" target="_blank" rel="noopener">代码仓库</a></div>
    </div>
    <div class="impact-paper">
      <span>工作流</span>
      <div><strong>Doctor-Centric Medical AI</strong><p>定义与工作流对齐的任务和评测基准，更贴近临床医生的实际工作方式。</p><a href="https://arxiv.org/abs/2510.11040" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>技能</span>
      <div><strong>OpenClaw-Medical-Skills</strong><p>大型开源医疗 AI 技能库，用于构建会使用工具的临床智能体。</p><a href="https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills" target="_blank" rel="noopener">代码仓库</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>技术层次</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>动作条件世界模型</strong>
      <p>临床状态会随干预而改变，所以智能体需要能在候选动作下预测患者演变的仿真器。</p>
    </div>
    <div class="impact-card">
      <strong>医院信息环境</strong>
      <p>HIS、EMR、检验、影像、药房、排程、收费和治理系统，都成为智能体环境的一部分。</p>
    </div>
    <div class="impact-card">
      <strong>多角色仿真</strong>
      <p>医生、护士、行政人员、患者、药师和管理者共同参与，使医院工作流比单轮诊断任务更贴近现实。</p>
    </div>
    <div class="impact-card">
      <strong>安全与审计</strong>
      <p>临床智能体需要权限控制、日志、基于 rubric 的评分、诊疗指南依从性，以及不安全行为分析。</p>
    </div>
  </div>
</section>

<div class="impact-actions">
  <a class="impact-action secondary" href="/projects/">返回项目页</a>
</div>

</div>

</div>

