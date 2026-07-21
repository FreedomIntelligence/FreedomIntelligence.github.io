---
layout: page
title: AI Education
description: LLM agents as tutors, learners, user simulators, and standardized patients for scalable, feedback-rich education.
img: assets/img/media-roundup-2026/socratic-pipeline.png
importance: 10
category: work
github: https://github.com/FreedomIntelligence/PlatoLM
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div class="impact-kicker">Education agents and learning simulation</div>

<div class="impact-tags">
  <span class="impact-tag">AI Education</span>
  <span class="impact-tag">Socratic learning</span>
  <span class="impact-tag">User simulation</span>
  <span class="impact-tag">Self-regulated learning</span>
  <span class="impact-tag">AI standardized patients</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://github.com/FreedomIntelligence/PlatoLM" target="_blank" rel="noopener">PlatoLM</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/EasyMED" target="_blank" rel="noopener">EasyMED</a>
  <a class="impact-action secondary" href="/projects/medical-education-standardized-patients/">AI Patients</a>
  <a class="impact-action secondary" href="/projects/human-agent-interaction/">Human-Agent Interaction</a>
  <a class="impact-action secondary" href="/projects/">All Projects</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/media-roundup-2026/socratic-pipeline.png" alt="Socratic dialogue and education agent pipeline">
</div>

<p class="impact-lede">
AI Education studies how LLM agents can become scalable tutors, learners, simulators, and standardized patients. The focus is educational interaction: models should ask useful questions, provide learner-aware feedback, support repeated practice, and make learning outcomes easier to evaluate.
</p>

<section class="impact-section">
  <h2>Background and Motivation</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>Education needs interaction, not just answers</strong>
      <p>A strong educational model should probe understanding, adapt to learners, guide reflection, and create practice loops rather than only deliver final responses.</p>
    </div>
    <div class="impact-card">
      <strong>Scalable practice is still scarce</strong>
      <p>Teachers, tutors, and standardized patients are difficult to scale across repeated sessions, diverse cases, and individualized feedback needs.</p>
    </div>
    <div class="impact-card">
      <strong>Evaluation should follow learning behavior</strong>
      <p>Educational AI should be judged by whether it improves question asking, self-regulation, communication, reasoning, and confidence under realistic interaction.</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Research Storyline</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>Simulate</span>
      <div><strong>Use LLMs as interactive users and learners</strong><p>User simulators create controllable multi-turn partners that can teach dialogue models, stress-test systems, and generate richer learning signals.</p></div>
    </div>
    <div class="impact-step">
      <span>Question</span>
      <div><strong>Teach through Socratic dialogue</strong><p>PlatoLM and Socratic-style data construction turn questioning, clarification, and guided reasoning into a training signal for multi-round dialogue.</p></div>
    </div>
    <div class="impact-step">
      <span>Coach</span>
      <div><strong>Support self-regulated learning</strong><p>SRLAgent explores how LLM assistance and gamified feedback can help learners plan, monitor, and reflect on their own study process.</p></div>
    </div>
    <div class="impact-step">
      <span>Practice</span>
      <div><strong>Build AI standardized patients</strong><p>EasyMED and SPBench make clinical communication training repeatable, controllable, and measurable for medical learners.</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Representative Work</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>SRL</span>
      <div><strong>SRLAgent: Enhancing Self-Regulated Learning Skills through Gamification and LLM Assistance</strong><p>Builds an LLM-assisted learning system around planning, monitoring, reflection, feedback, and engagement.</p><a href="https://arxiv.org/abs/2506.09968" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>User</span>
      <div><strong>Large Language Model as a User Simulator</strong><p>Frames LLMs as simulated users for interactive dialogue training and evaluation.</p><a href="https://arxiv.org/abs/2308.11534" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>PlatoLM</span>
      <div><strong>PlatoLM: Teaching LLMs in Multi-Round Dialogue via a User Simulator</strong><p>Uses Socratic-style questioning to improve multi-turn dialogue learning.</p><a href="https://openreview.net/forum?id=9nddtu94uX" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>AI-SP</span>
      <div><strong>Human or LLM as Standardized Patients?</strong><p>Introduces EasyMED and SPBench for comparing AI standardized patients with human standardized patients in medical education.</p><a href="https://arxiv.org/abs/2511.14783" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Co-design</span>
      <div><strong>It Talks Like a Patient, But Feels Different</strong><p>Studies how medical learners experience AI standardized patients and what design requirements emerge from real use.</p><a href="https://arxiv.org/abs/2602.05856" target="_blank" rel="noopener">Paper</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Project Clusters</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>Learning companion agents</strong>
      <p>LLM systems that scaffold planning, reflection, formative feedback, and learner engagement.</p>
    </div>
    <div class="impact-card">
      <strong>Socratic dialogue training</strong>
      <p>Question-driven user simulation and data construction for teaching models to handle multi-round educational dialogue.</p>
    </div>
    <div class="impact-card">
      <strong>Medical education simulation</strong>
      <p>AI standardized patients for history taking, communication, empathy, diagnostic reasoning, and structured feedback.</p>
    </div>
    <div class="impact-card">
      <strong>Evaluation-centered education AI</strong>
      <p>Benchmarks and rubrics that connect interaction quality to measurable learning behavior and outcomes.</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Display Figures</h2>
  <div class="impact-gallery">
    <figure>
      <img src="/assets/img/media-roundup-2026/socratic-pipeline.png" alt="Socratic dialogue pipeline">
      <figcaption>Socratic and user-simulation work turns educational interaction into trainable data and evaluation loops.</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/media-roundup-2026/huatuogpt-auto-eval.jpeg" alt="AI standardized patient and medical evaluation">
      <figcaption>Medical education extends the same idea into standardized patient practice and structured learner assessment.</figcaption>
    </figure>
  </div>
</section>

<section class="impact-section">
  <h2>Resource Map</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>PlatoLM</strong>
      <p>Open resources for Socratic-style dialogue training and user-simulator-driven model improvement.</p>
      <a href="https://github.com/FreedomIntelligence/PlatoLM" target="_blank" rel="noopener">Repository</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>SocraticChat</strong>
      <p>Dataset resource behind Socratic dialogue construction and educational multi-turn training.</p>
      <a href="https://huggingface.co/datasets/FreedomIntelligence/SocraticChat" target="_blank" rel="noopener">Dataset</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>EasyMED</strong>
      <p>AI standardized patient framework and medical education evaluation resources.</p>
      <a href="https://github.com/FreedomIntelligence/EasyMED" target="_blank" rel="noopener">Repository</a>
    </div>
  </div>
</section>

<div class="impact-actions">
  <a class="impact-action secondary" href="/projects/">Back to Projects</a>
</div>

</div>
