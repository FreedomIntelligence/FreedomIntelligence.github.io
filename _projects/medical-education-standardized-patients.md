---
layout: page
title: Medical Education and AI Standardized Patients
description: AI standardized patients, learner-centered simulation, and benchmarked practice environments for medical education.
img: assets/img/media-roundup-2026/huatuogpt-auto-eval.jpeg
importance: 12
category: work
github: https://github.com/FreedomIntelligence/EasyMED
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div class="impact-kicker">Medical education and human-agent interaction</div>

<div class="impact-tags">
  <span class="impact-tag">AI standardized patients</span>
  <span class="impact-tag">EasyMED</span>
  <span class="impact-tag">SPBench</span>
  <span class="impact-tag">Medical learning</span>
  <span class="impact-tag">Co-design</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://github.com/FreedomIntelligence/EasyMED" target="_blank" rel="noopener">EasyMED</a>
  <a class="impact-action secondary" href="https://arxiv.org/abs/2511.14783" target="_blank" rel="noopener">AI-SP Paper</a>
  <a class="impact-action secondary" href="https://arxiv.org/abs/2602.05856" target="_blank" rel="noopener">Co-design Paper</a>
  <a class="impact-action secondary" href="/projects/">All Projects</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/media-roundup-2026/huatuogpt-auto-eval.jpeg" alt="Medical education and automated patient evaluation">
</div>

<p class="impact-lede">
This project asks how AI can become a reliable practice partner for medical learners. The goal is not only to make a model talk like a patient, but to make standardized-patient training scalable, controllable, repeatable, and evaluable.
</p>

<section class="impact-section">
  <h2>Background and Motivation</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>Standardized patient training is expensive to scale</strong>
      <p>Human standardized patients are valuable, but scheduling, case coverage, training consistency, and feedback quality are hard to maintain across many learners.</p>
    </div>
    <div class="impact-card">
      <strong>LLMs can simulate conversation, but education needs more</strong>
      <p>A useful AI patient must preserve clinical persona, reveal information gradually, respond to learner behavior, and support structured feedback.</p>
    </div>
    <div class="impact-card">
      <strong>Medical learners need safe repetition</strong>
      <p>Students need repeated practice in history taking, communication, empathy, and clinical reasoning before facing high-stakes clinical settings.</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Core Ideas</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>Case</span>
      <div><strong>Build controllable patient cases</strong><p>Define patient background, symptoms, hidden findings, emotional stance, and disclosure rules so the AI patient behaves consistently across sessions.</p></div>
    </div>
    <div class="impact-step">
      <span>Dialogue</span>
      <div><strong>Make the patient interactive, not scripted</strong><p>The simulated patient should respond to learner questions, resist over-disclosure, and expose missing history-taking skills.</p></div>
    </div>
    <div class="impact-step">
      <span>Rubric</span>
      <div><strong>Connect interaction to evaluation</strong><p>Practice conversations are paired with rubrics and benchmarks so the system can measure information coverage, reasoning quality, communication, and safety.</p></div>
    </div>
    <div class="impact-step">
      <span>Design</span>
      <div><strong>Co-design with medical learners</strong><p>The CHI-facing work studies how students experience AI patients, what feels different from human SPs, and how interfaces should support learning.</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Typical Work</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>EasyMED</span>
      <div><strong>Human or LLM as Standardized Patients?</strong><p>Introduces EasyMED and SPBench, comparing AI standardized patients with human standardized patients in medical education scenarios.</p><a href="https://arxiv.org/abs/2511.14783" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>CHI</span>
      <div><strong>It Talks Like a Patient, But Feels Different</strong><p>Co-designs AI standardized patients with medical learners and surfaces design requirements around realism, agency, feedback, and trust.</p><a href="https://arxiv.org/abs/2602.05856" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Workflow</span>
      <div><strong>Doctor-centric workflow-aligned tasks and benchmarks</strong><p>Connects medical education and AI evaluation to the real workflows doctors use for documentation, reasoning, and decision support.</p><a href="https://arxiv.org/abs/2510.11040" target="_blank" rel="noopener">Paper</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Display Figures</h2>
  <div class="impact-gallery">
    <figure>
      <img src="/assets/img/media-roundup-2026/huatuogpt-auto-eval.jpeg" alt="Automated medical evaluation signal">
      <figcaption>Medical education scenarios need both realistic conversations and structured evaluation signals.</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/media-roundup-2026/cmb-overview.png" alt="Medical benchmark overview">
      <figcaption>The AI-SP line connects to the broader medical benchmark stack, including knowledge, multimodal, and workflow-aligned evaluation.</figcaption>
    </figure>
  </div>
</section>

<section class="impact-section">
  <h2>Resource Map</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>EasyMED</strong>
      <p>Repository for AI standardized patient simulation and related medical education resources.</p>
      <a href="https://github.com/FreedomIntelligence/EasyMED" target="_blank" rel="noopener">Repository</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>Medical Evaluation Benchmarks</strong>
      <p>Companion project for medical QA, multimodal medical AI, diagnosis, live clinical benchmarks, and doctor workflows.</p>
      <a href="/projects/medical-evaluation-benchmarks/">Project page</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>HuatuoGPT Ecosystem</strong>
      <p>The medical model family that supplies the language, vision, reasoning, and deployment backbone for medical AI scenarios.</p>
      <a href="/projects/medical-ai-ecosystem/">Project page</a>
    </div>
  </div>
</section>

<div class="impact-actions">
  <a class="impact-action secondary" href="/projects/">Back to Projects</a>
</div>

</div>
