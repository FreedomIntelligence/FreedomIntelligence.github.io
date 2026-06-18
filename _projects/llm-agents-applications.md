---
layout: page
title: LLM Agents and Applications
description: LLM agents for tool use, user simulation, education, medicine, finance, speech interaction, and micro-world environments.
img: assets/img/media-roundup-2026/twinmarket-bdi.png
importance: 9
category: work
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

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
