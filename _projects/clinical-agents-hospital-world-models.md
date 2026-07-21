---
layout: page
title: Clinical Agents & Hospital World Models
description: Clinical agents, patient-dynamics world models, hospital information-system environments, multi-role simulations, and medical skills.
img: assets/img/media-roundup-2026/huatuogpt-auto-eval.jpeg
importance: 3
category: work
github: https://github.com/FreedomIntelligence/SepsisAgent
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

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
  <img src="/assets/img/media-roundup-2026/huatuogpt-auto-eval.jpeg" alt="Clinical AI evaluation and agent workflow">
</div>

<p class="impact-lede">
Clinical Agents & Hospital World Models moves medical AI from isolated QA to environments where agents act, observe, call tools, interact with clinical roles, and reason over changing patient or hospital states. This page intentionally excludes DentalGPT and GlobalDentBench, which are now organized under the dedicated dental foundation model direction.
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

