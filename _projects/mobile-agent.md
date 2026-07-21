---
layout: page
title: Mobile Agent
description: Benchmarks, environments, safety tests, and training recipes for phone-use agents operating real mobile workflows.
img: assets/img/media-roundup-2026/phoneharness-overview.png
importance: 0
category: work
github: https://github.com/PhoneHarness/PhoneHarness
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div class="impact-kicker">Phone-use agents and mobile workflow execution</div>

<div class="impact-tags">
  <span class="impact-tag">Mobile Agent</span>
  <span class="impact-tag">Phone-use agents</span>
  <span class="impact-tag">GUI agents</span>
  <span class="impact-tag">Privacy and safety</span>
  <span class="impact-tag">Agent training</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://phoneharness.github.io/" target="_blank" rel="noopener">PhoneHarness</a>
  <a class="impact-action secondary" href="https://github.com/PhoneHarness/PhoneHarness" target="_blank" rel="noopener">GitHub</a>
  <a class="impact-action secondary" href="https://huggingface.co/datasets/PhoneHarness/phoneharness-bench" target="_blank" rel="noopener">Dataset</a>
  <a class="impact-action secondary" href="/projects/long-context-multimodal/">Long-context MLLMs</a>
  <a class="impact-action secondary" href="/projects/">All Projects</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/media-roundup-2026/phoneharness-overview.png" alt="PhoneHarness mobile agent overview">
</div>

<p class="impact-lede">
Mobile Agent builds the infrastructure, benchmarks, and training recipes for phone-use agents that can operate mobile workflows reliably, privately, and safely. The research line moves beyond screenshot QA toward executable tasks, auditable traces, mixed action spaces, simulated phone environments, and real-app reinforcement learning.
</p>

<section class="impact-section">
  <h2>Background and Motivation</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>Phones are a natural agent arena</strong>
      <p>Daily work already happens across mobile apps, permissions, notifications, files, accounts, and dynamic screens, making phones a realistic testbed for general-purpose agents.</p>
    </div>
    <div class="impact-card">
      <strong>GUI-only evaluation is too narrow</strong>
      <p>Real workflows often require a mixture of GUI interaction, command-line execution, tool calls, state inspection, and verification beyond simple click trajectories.</p>
    </div>
    <div class="impact-card">
      <strong>Success must be safe and private</strong>
      <p>An agent that completes a task while leaking data, overusing permissions, or taking unsafe actions is not deployment-ready.</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Research Storyline</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>Privacy</span>
      <div><strong>Measure whether phone agents respect user data</strong><p>MyPhoneBench reframes phone-agent readiness around permissioned access, minimal disclosure, and user-controlled memory.</p></div>
    </div>
    <div class="impact-step">
      <span>Safety</span>
      <div><strong>Separate safe behavior from incapability</strong><p>PhoneSafety evaluates safety-critical moments and distinguishes safe actions, unsafe actions, and failures to do anything useful.</p></div>
    </div>
    <div class="impact-step">
      <span>World</span>
      <div><strong>Scale controllable phone environments</strong><p>PhoneWorld turns real GUI trajectories and screenshots into reusable environments with executable tasks, state transitions, and verifiers.</p></div>
    </div>
    <div class="impact-step">
      <span>Harness</span>
      <div><strong>Combine GUI, CLI, and tool actions</strong><p>PhoneHarness gives phone agents a mixed-action execution framework with auditable traces and task-level verification.</p></div>
    </div>
    <div class="impact-step">
      <span>Train</span>
      <div><strong>Train open models for real phone use</strong><p>PhoneBuddy combines real-app environments and mock environments so open models can learn robust agentic phone-use behavior.</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Representative Work</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>Privacy</span>
      <div><strong>Do Phone-Use Agents Respect Your Privacy?</strong><p>Introduces MyPhoneBench for evaluating privacy risks in phone-use agents across realistic mobile tasks.</p><a href="https://arxiv.org/abs/2604.00986" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Safety</span>
      <div><strong>Safe, or Simply Incapable?</strong><p>Rethinks safety evaluation by separating genuinely safe choices from unhelpful or failed actions.</p><a href="https://arxiv.org/abs/2605.07630" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Env</span>
      <div><strong>PhoneWorld: Scaling Phone-Use Agent Environments</strong><p>Builds scalable phone-use environments from real GUI traces, controllable screens, executable tasks, and verifiers.</p><a href="https://arxiv.org/abs/2605.29486" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Harness</span>
      <div><strong>PhoneHarness: Harnessing Phone-Use Agents through Mixed GUI, CLI, and Tool Actions</strong><p>Expands agent execution beyond GUI-only actions and evaluates whether mobile workflows are truly completed.</p><a href="https://arxiv.org/abs/2606.14832" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Training</span>
      <div><strong>PhoneBuddy: Training Open Models for Agentic Phone Use</strong><p>Uses real-app and mock phone environments to train open models for stronger agentic phone-use performance.</p><a href="https://arxiv.org/abs/2606.23049" target="_blank" rel="noopener">Paper</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Technical Layers</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>Environment construction</strong>
      <p>Reusable mobile environments make real app workflows controllable, replayable, and measurable.</p>
    </div>
    <div class="impact-card">
      <strong>Mixed action execution</strong>
      <p>Agents can combine GUI operations, CLI commands, and tool calls while leaving traces that humans and verifiers can audit.</p>
    </div>
    <div class="impact-card">
      <strong>Task-level verification</strong>
      <p>Benchmarks judge whether the external phone state changed correctly, not just whether the model produced plausible intermediate actions.</p>
    </div>
    <div class="impact-card">
      <strong>Safety and privacy constraints</strong>
      <p>Evaluation tracks permission use, data disclosure, memory control, unsafe operations, and refusal behavior in mobile settings.</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Display Figures</h2>
  <div class="impact-gallery">
    <figure>
      <img src="/assets/img/media-roundup-2026/phoneharness-overview.png" alt="PhoneHarness overview">
      <figcaption>PhoneHarness evaluates whether mobile agents complete real workflows, not only whether their GUI traces look plausible.</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/media-roundup-2026/phoneharness-architecture.png" alt="PhoneHarness architecture">
      <figcaption>The harness combines GUI, CLI, tool actions, system state, task traces, and verifier signals.</figcaption>
    </figure>
  </div>
</section>

<section class="impact-section">
  <h2>Resource Map</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>PhoneHarness</strong>
      <p>Project site for mixed-action phone-use agent harnessing and benchmark resources.</p>
      <a href="https://phoneharness.github.io/" target="_blank" rel="noopener">Project site</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>PhoneHarness code</strong>
      <p>Open-source implementation for the phone-use harness and evaluation workflow.</p>
      <a href="https://github.com/PhoneHarness/PhoneHarness" target="_blank" rel="noopener">Repository</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>PhoneHarness Bench</strong>
      <p>Dataset release for evaluating phone agents through mixed GUI, CLI, and tool-action traces.</p>
      <a href="https://huggingface.co/datasets/PhoneHarness/phoneharness-bench" target="_blank" rel="noopener">Dataset</a>
    </div>
  </div>
</section>

<div class="impact-actions">
  <a class="impact-action secondary" href="/projects/">Back to Projects</a>
</div>

</div>
