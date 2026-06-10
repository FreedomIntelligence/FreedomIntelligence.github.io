---
layout: page
title: Medical Evaluation Benchmarks
description: Benchmark infrastructure for Chinese medical QA, multimodal medical AI, live clinical testing, and doctor workflows.
img: assets/img/media-roundup-2026/cmb-overview.png
importance: 4
category: work
github: https://github.com/FreedomIntelligence/CMB
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div class="impact-kicker">Medical evaluation</div>

<div class="impact-tags">
  <span class="impact-tag">CMB</span>
  <span class="impact-tag">GMAI-MMBench</span>
  <span class="impact-tag">LiveClin</span>
  <span class="impact-tag">DxBench</span>
  <span class="impact-tag">Doctor workflow</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://github.com/FreedomIntelligence/CMB" target="_blank" rel="noopener">CMB</a>
  <a class="impact-action secondary" href="https://huggingface.co/datasets/FreedomIntelligence/CMB" target="_blank" rel="noopener">CMB data</a>
  <a class="impact-action secondary" href="https://arxiv.org/abs/2308.08833" target="_blank" rel="noopener">CMB paper</a>
  <a class="impact-action secondary" href="https://github.com/uni-medical/GMAI-MMBench" target="_blank" rel="noopener">GMAI-MMBench</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/media-roundup-2026/cmb-overview.png" alt="CMB benchmark overview">
</div>

<p class="impact-lede">
Medical AI cannot be judged only by generic chat quality. The lab's benchmark work builds domain-specific tests for Chinese medical knowledge, multimodal medical perception, live clinical leakage control, diagnostic reasoning, and doctor-centered workflows.
</p>

<section class="impact-section">
  <h2>Evaluation Storyline</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>Knowledge</span>
      <div><strong>CMB starts from Chinese medical exams and clinical QA</strong><p>It tests whether models know medicine in the language and assessment structure used by Chinese medical education and practice.</p></div>
    </div>
    <div class="impact-step">
      <span>Dialogue</span>
      <div><strong>CMB-Clin adds complex consultation cases</strong><p>Clinical question answering forces models to use patient histories and multi-turn information rather than isolated multiple-choice memory.</p></div>
    </div>
    <div class="impact-step">
      <span>Vision</span>
      <div><strong>GMAI-MMBench moves evaluation into multimodality</strong><p>Medical AI must combine images, reports, and clinical knowledge, so the benchmark stack expands beyond text-only questions.</p></div>
    </div>
    <div class="impact-step">
      <span>Reality</span>
      <div><strong>LiveClin, DxBench, and workflow tests reduce benchmark comfort</strong><p>Later evaluation directions stress leakage control, diagnostic reasoning, and doctor-centered tasks closer to deployed clinical workflows.</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Benchmark Layers</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>CMB</strong>
      <p>A comprehensive Chinese medical benchmark covering medical exams, clinical QA, and Chinese medical knowledge, with code and Hugging Face data.</p>
    </div>
    <div class="impact-card">
      <strong>GMAI-MMBench</strong>
      <p>A multimodal benchmark for general medical AI, testing whether models can combine medical vision, text, and domain reasoning.</p>
    </div>
    <div class="impact-card">
      <strong>LiveClin and DxBench</strong>
      <p>Clinical evaluation directions that reduce leakage risk and stress diagnostic reasoning under more realistic clinical settings.</p>
    </div>
    <div class="impact-card">
      <strong>Workflow-aligned tasks</strong>
      <p>Doctor-centric evaluation reframes medical AI around tasks clinicians actually perform, rather than only static QA accuracy.</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Display Figures</h2>
  <div class="impact-gallery">
    <figure>
      <img src="/assets/img/media-roundup-2026/cmb-overview.png" alt="CMB benchmark structure">
      <figcaption>CMB combines exam-style medical knowledge with clinical diagnostic questions and expert-aligned scoring.</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/media-roundup-2026/huatuogpt-auto-eval.jpeg" alt="Medical model evaluation loop">
      <figcaption>Model building and benchmark design stay connected: evaluation reveals where medical adaptation still fails.</figcaption>
    </figure>
  </div>
</section>

<section class="impact-section">
  <h2>Evaluation Philosophy</h2>
  <div class="impact-callout">
Benchmarks should not reward fluent medical-sounding text alone. Strong medical evaluation asks whether the model uses evidence, handles uncertainty, follows workflow constraints, avoids memorized leakage, and supports the clinician's actual decision process.
  </div>
</section>

<section class="impact-section">
  <h2>Paper Trail</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>CMB</span>
      <div><strong>CMB: A Comprehensive Medical Benchmark in Chinese</strong><p>Builds a Chinese medical benchmark with exam and clinical components, giving Chinese medical LLMs a domain-specific yardstick.</p><a href="https://github.com/FreedomIntelligence/CMB" target="_blank" rel="noopener">Repository</a></div>
    </div>
    <div class="impact-paper">
      <span>Vision</span>
      <div><strong>GMAI-MMBench: A Comprehensive Multimodal Evaluation Benchmark Towards General Medical AI</strong><p>Extends the evaluation stack to general medical AI scenarios that require multimodal perception and domain reasoning.</p><a href="https://uni-medical.github.io/GMAI-MMBench.github.io/" target="_blank" rel="noopener">Project site</a></div>
    </div>
    <div class="impact-paper">
      <span>Clinical</span>
      <div><strong>LiveClin and DxBench</strong><p>Push medical evaluation toward live, leakage-resistant, diagnostic, and workflow-aligned settings.</p><a href="https://github.com/AQ-MedAI/LiveClin" target="_blank" rel="noopener">LiveClin</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Resource Map</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>CMB code</strong>
      <p>Core Chinese medical benchmark repository and evaluation tooling.</p>
      <a href="https://github.com/FreedomIntelligence/CMB" target="_blank" rel="noopener">Repository</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>CMB dataset</strong>
      <p>Hugging Face release for reproducible Chinese medical benchmark experiments.</p>
      <a href="https://huggingface.co/datasets/FreedomIntelligence/CMB" target="_blank" rel="noopener">Dataset</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>GMAI-MMBench</strong>
      <p>Multimodal general medical AI benchmark and public project resources.</p>
      <a href="https://uni-medical.github.io/GMAI-MMBench.github.io/" target="_blank" rel="noopener">Project</a>
    </div>
  </div>
</section>

</div>
