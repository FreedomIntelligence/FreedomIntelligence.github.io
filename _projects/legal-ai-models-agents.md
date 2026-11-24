---
layout: page
title: Legal AI Models, Retrieval, and Agents
title_zh: "法律大模型、检索与智能体"
direction: ai-applications
description: From Chinese legal foundation models and user-centric evaluation to generative retrieval, agentic reasoning, and continuously improving legal AI systems.
description_zh: "从中文法律基础模型、以用户为中心的评测，到生成式检索、智能体推理和持续改进的法律 AI 系统。"
img: assets/img/legal-ai/joint-lab-signing.png
importance: 9
category: work
github: https://github.com/siat-nlp/HanFei
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div data-lang="en">

<div class="impact-kicker">Legal foundation models to Legal AI within a Loop</div>

<div class="impact-tags">
  <span class="impact-tag">HanFei-1.0</span><span class="impact-tag">UCL-Bench</span><span class="impact-tag">Legal-R1</span><span class="impact-tag">GenArtID</span><span class="impact-tag">Legal Agents</span><span class="impact-tag">Loop Engineering</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://github.com/siat-nlp/HanFei" target="_blank" rel="noopener">HanFei</a>
  <a class="impact-action secondary" href="https://aclanthology.org/2025.findings-naacl.444/" target="_blank" rel="noopener">UCL-Bench</a>
  <a class="impact-action secondary" href="https://openreview.net/forum?id=2Oe3FRRcVQ" target="_blank" rel="noopener">Legal-R1</a>
  <a class="impact-action secondary" href="https://openreview.net/forum?id=SJcpGTx0Ag" target="_blank" rel="noopener">GenArtID</a>
</div>

<div class="impact-hero"><img src="/assets/img/legal-ai/joint-lab-signing.png" alt="CUHK-Shenzhen and FaDaFu Legal AI Joint Laboratory signing ceremony"></div>

<p class="impact-lede"><strong>The team has built a systematic Legal AI foundation spanning domain-model training, real-user evaluation, legal knowledge retrieval, and agentic evidence-based reasoning.</strong> The research has evolved from training a Chinese legal model to connecting models, legal databases, tools, benchmarks, and lawyer workflows in a continuously improving closed loop.</p>

<section class="impact-section">
  <h2>Research Evolution</h2>
  <div class="impact-storyline">
    <div class="impact-step"><span>Model</span><div><strong>HanFei-1.0: build legal domain capability</strong><p>A 7B Chinese legal model trained on approximately 60 GB of cases, statutes, complaints, and legal news, supporting legal question answering, dialogue, and document generation.</p></div></div>
    <div class="impact-step"><span>User</span><div><strong>UCL-Bench: evaluate what legal professionals need</strong><p>Moves from knowledge-centric legal exams to user-centric evaluation with five legal scenarios and 22 tasks grounded in surveys and validation by legal professionals.</p></div></div>
    <div class="impact-step"><span>Retrieve</span><div><strong>GenArtID: generate statutory identifiers</strong><p>Reframes legal retrieval as direct prediction of relevant article identifiers, connecting a legal question to structured statutory memory instead of relying only on embedding similarity.</p></div></div>
    <div class="impact-step"><span>Agent</span><div><strong>Legal-R1: retrieve evidence while reasoning</strong><p>Extends one-shot RAG into a Think → Retrieve → Rethink → Retrieve → Answer process that actively identifies missing evidence and revises reasoning.</p></div></div>
    <div class="impact-step"><span>Loop</span><div><strong>Legal AI within a Loop</strong><p>Connect real lawyer use, expert edits, data accumulation, benchmark updates, and model training into a sustainable improvement cycle.</p></div></div>
  </div>
</section>

<section class="impact-section">
  <h2>Four Research Foundations</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper"><span>2023</span><div><strong>HanFei-1.0</strong><p>Early full-parameter Chinese legal LLM work covering corpus construction, continual pre-training, instruction tuning, and deployment.</p><a href="https://github.com/siat-nlp/HanFei" target="_blank" rel="noopener">Repository</a></div></div>
    <div class="impact-paper"><span>NAACL</span><div><strong>UCL-Bench: A Chinese User-Centric Legal Benchmark</strong><p>Findings of NAACL 2025, pp. 7960–8003. It asks whether a model can complete the work legal professionals actually need.</p><a href="https://aclanthology.org/2025.findings-naacl.444/" target="_blank" rel="noopener">Paper</a></div></div>
    <div class="impact-paper"><span>ARR</span><div><strong>Legal-R1: Agentic Retrieval for Evidence-Based Legal Reasoning</strong><p>Combines legal agents, databases, iterative retrieval, and traceable evidence in a multi-step reasoning process.</p><a href="https://openreview.net/forum?id=2Oe3FRRcVQ" target="_blank" rel="noopener">OpenReview</a></div></div>
    <div class="impact-paper"><span>ARR</span><div><strong>GenArtID: Generative Article Identifier Prediction</strong><p>Uses the structure of statutory knowledge to retrieve law through article identifiers rather than only vector matching.</p><a href="https://openreview.net/forum?id=SJcpGTx0Ag" target="_blank" rel="noopener">OpenReview</a></div></div>
  </div>
</section>

<section class="impact-section">
  <h2>Harness → Benchmark → Training → Loop</h2>
  <div class="impact-grid">
    <div class="impact-card"><strong>Harness</strong><p>Connect legal databases, case repositories, contracts, knowledge graphs, retrieval interfaces, and reusable Legal Skills so agents can act in real workflows.</p></div>
    <div class="impact-card"><strong>Benchmark</strong><p>Derive tasks from lawyer practice and involve legal professionals in rubric design, expert evaluation, and authoritative validation.</p></div>
    <div class="impact-card"><strong>Training</strong><p>Use expert edits and evaluation data for supervised fine-tuning, rubric-based reinforcement learning, and legal retrieval training.</p></div>
    <div class="impact-card"><strong>Data Flywheel</strong><p>Turn adoption, modification, scoring, and business outcomes into new training data and benchmark updates.</p></div>
  </div>
  <p class="impact-lede"><strong>Model building → evaluation → workflow automation → real-user pilots → data feedback and iteration.</strong> This is the core Loop Engineering path for reliable, explainable, and trustworthy Legal AI.</p>
</section>

<section class="impact-section">
  <h2>Joint Laboratory and Real-World Agenda</h2>
  <div class="impact-gallery">
    <figure><img src="/assets/img/legal-ai/research-roadmap.webp" alt="Professor Benyou Wang presenting the Legal AI research roadmap"><figcaption>Presenting the Legal AI research plan and Loop Engineering roadmap at the joint laboratory launch.</figcaption></figure>
    <figure><img src="/assets/img/legal-ai/joint-lab-unveiling.webp" alt="Unveiling of the CUHK-Shenzhen and FaDaFu Legal AI Joint Laboratory"><figcaption>The CUHK-Shenzhen–FaDaFu Legal AI Joint Laboratory connects frontier research with industry validation and productization.</figcaption></figure>
    <figure><img src="/assets/img/legal-ai/joint-lab-signing.png" alt="Signing ceremony for the Legal AI Joint Laboratory"><figcaption>The joint laboratory will focus on legal model optimization, intelligent retrieval, contract review, compliance risk, litigation prediction, and decision support.</figcaption></figure>
  </div>
  <ul class="impact-list">
    <li><strong>Core research:</strong> legal reasoning, hallucination reduction, factual evidence chains, privacy, and security.</li>
    <li><strong>Priority scenarios:</strong> intelligent contract review, enterprise compliance and risk control, and public legal services.</li>
    <li><strong>Operating model:</strong> university-led frontier research plus enterprise-led scenario validation and productization.</li>
  </ul>
</section>

<section class="impact-section">
  <h2>Why It Matters</h2>
  <p class="impact-lede"><strong>The next step is not another isolated legal LLM.</strong> It is a Legal AI system in which models, structured legal knowledge, tools, benchmarks, expert feedback, and real lawyer workflows improve together.</p>
</section>

<div class="impact-actions"><a class="impact-action secondary" href="/projects/">Back to Projects</a></div>

</div>

<div data-lang="zh">

<div class="impact-kicker">从法律基础模型到闭环中的法律 AI</div>

<div class="impact-tags">
  <span class="impact-tag">HanFei-1.0</span><span class="impact-tag">UCL-Bench</span><span class="impact-tag">Legal-R1</span><span class="impact-tag">GenArtID</span><span class="impact-tag">法律智能体</span><span class="impact-tag">闭环工程</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://github.com/siat-nlp/HanFei" target="_blank" rel="noopener">HanFei</a>
  <a class="impact-action secondary" href="https://aclanthology.org/2025.findings-naacl.444/" target="_blank" rel="noopener">UCL-Bench</a>
  <a class="impact-action secondary" href="https://openreview.net/forum?id=2Oe3FRRcVQ" target="_blank" rel="noopener">Legal-R1</a>
  <a class="impact-action secondary" href="https://openreview.net/forum?id=SJcpGTx0Ag" target="_blank" rel="noopener">GenArtID</a>
</div>

<div class="impact-hero"><img src="/assets/img/legal-ai/joint-lab-signing.png" alt="港中大（深圳）—法大大法律 AI 联合实验室签约仪式"></div>

<p class="impact-lede"><strong>团队已构建起系统的法律 AI 基础，覆盖领域模型训练、真实用户评测、法律知识检索和智能体循证推理。</strong>研究从训练一个中文法律模型起步，逐步发展为把模型、法律数据库、工具、评测基准和律师工作流连成一个持续改进的闭环。</p>

<section class="impact-section">
  <h2>研究演进</h2>
  <div class="impact-storyline">
    <div class="impact-step"><span>模型</span><div><strong>HanFei-1.0：构建法律领域能力</strong><p>7B 中文法律模型，使用约 60 GB 的案例、法规、起诉状和法律新闻训练，支持法律问答、对话和文书生成。</p></div></div>
    <div class="impact-step"><span>用户</span><div><strong>UCL-Bench：评测法律从业者真正需要的能力</strong><p>评测从以知识为中心的法律考试，转向以用户为中心：包含 5 类法律场景、22 项任务，任务设计依据问卷调查，并经法律从业者验证。</p></div></div>
    <div class="impact-step"><span>检索</span><div><strong>GenArtID：生成法条编号</strong><p>把法律检索重新定义为直接预测相关法条编号：让法律问题对接结构化的法条记忆，而不再只依赖向量相似度。</p></div></div>
    <div class="impact-step"><span>智能体</span><div><strong>Legal-R1：边推理边检索证据</strong><p>把一次性的 RAG 扩展为“思考 → 检索 → 再思考 → 再检索 → 作答”的过程，主动发现缺失的证据并修正推理。</p></div></div>
    <div class="impact-step"><span>闭环</span><div><strong>闭环中的法律 AI</strong><p>把律师的真实使用、专家修改、数据积累、评测基准更新和模型训练连成可持续的改进循环。</p></div></div>
  </div>
</section>

<section class="impact-section">
  <h2>四项研究基础</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper"><span>2023</span><div><strong>HanFei-1.0</strong><p>早期的全参数中文法律大模型工作，涵盖语料构建、持续预训练、指令微调和部署。</p><a href="https://github.com/siat-nlp/HanFei" target="_blank" rel="noopener">代码仓库</a></div></div>
    <div class="impact-paper"><span>NAACL</span><div><strong>UCL-Bench: A Chinese User-Centric Legal Benchmark</strong><p>发表于 Findings of NAACL 2025，第 7960–8003 页。它考察模型能否完成法律从业者真正需要的工作。</p><a href="https://aclanthology.org/2025.findings-naacl.444/" target="_blank" rel="noopener">论文</a></div></div>
    <div class="impact-paper"><span>ARR</span><div><strong>Legal-R1: Agentic Retrieval for Evidence-Based Legal Reasoning</strong><p>在多步推理过程中，结合法律智能体、数据库、迭代检索和可追溯的证据。</p><a href="https://openreview.net/forum?id=2Oe3FRRcVQ" target="_blank" rel="noopener">OpenReview</a></div></div>
    <div class="impact-paper"><span>ARR</span><div><strong>GenArtID: Generative Article Identifier Prediction</strong><p>利用法条知识的结构，通过法条编号检索法律，而不只是做向量匹配。</p><a href="https://openreview.net/forum?id=SJcpGTx0Ag" target="_blank" rel="noopener">OpenReview</a></div></div>
  </div>
</section>

<section class="impact-section">
  <h2>Harness → 评测基准 → 训练 → 闭环</h2>
  <div class="impact-grid">
    <div class="impact-card"><strong>Harness</strong><p>接入法律数据库、案例库、合同、知识图谱、检索接口和可复用的 Legal Skills，让智能体能在真实工作流中行动。</p></div>
    <div class="impact-card"><strong>评测基准</strong><p>任务取自律师的实际工作，并邀请法律从业者参与 rubric 设计、专家评测和权威验证。</p></div>
    <div class="impact-card"><strong>训练</strong><p>把专家修改和评测数据用于监督微调、基于 rubric 的强化学习和法律检索训练。</p></div>
    <div class="impact-card"><strong>数据飞轮</strong><p>把采纳、修改、打分和业务结果转化为新的训练数据和评测基准更新。</p></div>
  </div>
  <p class="impact-lede"><strong>模型构建 → 评测 → 工作流自动化 → 真实用户试点 → 数据反馈与迭代。</strong>这是打造可靠、可解释、可信的法律 AI 的核心路径，即闭环工程（Loop Engineering）。</p>
</section>

<section class="impact-section">
  <h2>联合实验室与落地规划</h2>
  <div class="impact-gallery">
    <figure><img src="/assets/img/legal-ai/research-roadmap.webp" alt="王本友教授介绍法律 AI 研究路线图"><figcaption>在联合实验室启动仪式上介绍法律 AI 研究规划和闭环工程路线图。</figcaption></figure>
    <figure><img src="/assets/img/legal-ai/joint-lab-unveiling.webp" alt="港中大（深圳）—法大大法律 AI 联合实验室揭牌"><figcaption>港中大（深圳）—法大大法律 AI 联合实验室，把前沿研究与产业验证、产品化连接起来。</figcaption></figure>
    <figure><img src="/assets/img/legal-ai/joint-lab-signing.png" alt="法律 AI 联合实验室签约仪式"><figcaption>联合实验室将聚焦法律模型优化、智能检索、合同审查、合规风险、诉讼预测和决策支持。</figcaption></figure>
  </div>
  <ul class="impact-list">
    <li><strong>核心研究：</strong>法律推理、幻觉抑制、事实证据链、隐私与安全。</li>
    <li><strong>重点场景：</strong>智能合同审查、企业合规与风控、公共法律服务。</li>
    <li><strong>运作模式：</strong>高校主导前沿研究，企业主导场景验证与产品化。</li>
  </ul>
</section>

<section class="impact-section">
  <h2>研究意义</h2>
  <p class="impact-lede"><strong>下一步不是再做一个孤立的法律大模型。</strong>我们要建设的是这样一个法律 AI 系统：模型、结构化法律知识、工具、评测基准、专家反馈和真实的律师工作流，相互促进，共同提升。</p>
</section>

<div class="impact-actions"><a class="impact-action secondary" href="/projects/">返回项目页</a></div>

</div>

</div>
