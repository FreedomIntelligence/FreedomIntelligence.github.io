---
layout: page
title: Legal AI Models, Retrieval, and Agents
description: From Chinese legal foundation models and user-centric evaluation to generative retrieval, agentic reasoning, and continuously improving legal AI systems.
img: assets/img/legal-ai/joint-lab-signing.png
importance: 9
category: work
github: https://github.com/siat-nlp/HanFei
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

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
