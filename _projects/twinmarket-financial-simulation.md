---
layout: page
title: TwinMarket Financial AI Simulation
description: A multi-agent financial market simulator for behavioral finance, emergent risk, and policy stress testing.
img: assets/img/media-roundup-2026/twinmarket-bdi.png
importance: 5
category: work
github: https://github.com/FreedomIntelligence/TwinMarket
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div class="impact-kicker">Financial and social simulation</div>

<div class="impact-tags">
  <span class="impact-tag">TwinMarket</span>
  <span class="impact-tag">Multi-agent simulation</span>
  <span class="impact-tag">Financial AI</span>
  <span class="impact-tag">Behavioral finance</span>
  <span class="impact-tag">Policy sandbox</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://github.com/FreedomIntelligence/TwinMarket" target="_blank" rel="noopener">GitHub</a>
  <a class="impact-action secondary" href="https://freedomintelligence.github.io/TwinMarket" target="_blank" rel="noopener">Project site</a>
  <a class="impact-action secondary" href="https://arxiv.org/abs/2502.01506" target="_blank" rel="noopener">Paper</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/media-roundup-2026/twinmarket-bdi.png" alt="TwinMarket BDI architecture">
</div>

<p class="impact-lede">
TwinMarket uses LLM-powered virtual investors to simulate financial markets from the bottom up. Instead of treating the market as an equation, it models agents with beliefs, desires, intentions, information, social signals, and trading behavior.
</p>

<div class="impact-callout">
The project received Best Paper recognition at the ICLR 2025 Financial AI Workshop and is connected to the lab's broader agenda on agentic economies and economic world models.
</div>

<section class="impact-section">
  <h2>Research Storyline</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>Agents</span>
      <div><strong>Start from investor cognition</strong><p>Each virtual investor carries beliefs, desires, intentions, information access, and social influence rather than acting as a fixed equation.</p></div>
    </div>
    <div class="impact-step">
      <span>Market</span>
      <div><strong>Let aggregate patterns emerge</strong><p>Prices, volatility, herding, and bubbles become outcomes of many interacting agents rather than manually scripted market curves.</p></div>
    </div>
    <div class="impact-step">
      <span>Policy</span>
      <div><strong>Turn the market into a sandbox</strong><p>Researchers can perturb information flow, agent populations, or regulation and observe counterfactual market behavior.</p></div>
    </div>
    <div class="impact-step">
      <span>EconWM</span>
      <div><strong>Connect to agentic economies</strong><p>TwinMarket is a concrete financial prototype for the broader Economic World Models agenda: agents, environments, co-evolution, and real-world alignment.</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>What The Simulator Studies</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>Micro-to-macro emergence</strong>
      <p>Individual investor choices, overconfidence, herding, information delay, and social influence can aggregate into market-wide patterns and instability.</p>
    </div>
    <div class="impact-card">
      <strong>Stylized market facts</strong>
      <p>The simulator tests whether agent societies can reproduce empirical regularities that appear in real markets but are hard to capture with simple rules.</p>
    </div>
    <div class="impact-card">
      <strong>Risk and policy stress tests</strong>
      <p>Because the simulated world is controllable, researchers can perturb information flow, regulation, and agent composition to study counterfactual outcomes.</p>
    </div>
  </div>
</section>

<div class="impact-figure">
  <img src="/assets/img/media-roundup-2026/twinmarket-bubble.png" alt="TwinMarket market simulation output">
</div>

<section class="impact-section">
  <h2>Display Figures</h2>
  <div class="impact-gallery">
    <figure>
      <img src="/assets/img/media-roundup-2026/twinmarket-bdi.png" alt="TwinMarket BDI design">
      <figcaption>The BDI architecture makes each trading decision traceable to agent beliefs, desires, intentions, and market signals.</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/media-roundup-2026/twinmarket-bubble.png" alt="TwinMarket bubble behavior">
      <figcaption>Market-level phenomena emerge from interacting virtual investors rather than fixed aggregate equations.</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/economic-world-models/econwm-architecture.png" alt="Economic World Model architecture">
      <figcaption>TwinMarket is one concrete sandbox inside the larger Economic World Models architecture.</figcaption>
    </figure>
  </div>
</section>

<section class="impact-section">
  <h2>Paper Trail</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>System</span>
      <div><strong>TwinMarket: A Scalable Behavioral and Social Simulation for Financial Markets</strong><p>Builds the market simulator, investor agents, and experimental setting for financial social simulation.</p><a href="https://github.com/FreedomIntelligence/TwinMarket" target="_blank" rel="noopener">Repository</a></div>
    </div>
    <div class="impact-paper">
      <span>Blueprint</span>
      <div><strong>From Economic Agents to Agentic Economies</strong><p>Generalizes the TwinMarket-style sandbox into a wider architecture for economic digital twins and agentic economies.</p><a href="/projects/economic-world-models/">Economic World Models</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Why It Matters</h2>
  <ul class="impact-list">
    <li>Financial systems are social systems; agentic simulation makes individual behavior visible instead of hiding it inside aggregate curves.</li>
    <li>It offers a practical bridge from LLM agents to social science experiments, financial risk analysis, and economic digital twins.</li>
    <li>It gives the Economic World Models agenda a concrete, high-impact market sandbox.</li>
  </ul>
</section>

</div>
