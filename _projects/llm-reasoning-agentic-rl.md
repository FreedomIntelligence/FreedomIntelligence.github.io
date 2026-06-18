---
layout: page
title: LLM Reasoning & Agentic RL
description: Verifiable reasoning, agentic reinforcement learning, policy optimization, path pruning, code-integrated thinking, and multimodal R1-style training.
img: assets/img/freedomai-2026/impact/iclr-financial-ai-award.jpg
importance: 8
category: work
github: https://github.com/FreedomIntelligence/ReasoningNLP
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div class="impact-kicker">Reasoning and agentic RL</div>

<div class="impact-tags">
  <span class="impact-tag">Policy optimization</span>
  <span class="impact-tag">Agentic RL</span>
  <span class="impact-tag">Path pruning</span>
  <span class="impact-tag">Code reasoning</span>
  <span class="impact-tag">Video reasoning</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://wabyking.github.io/" target="_blank" rel="noopener">Benyou Wang papers</a>
  <a class="impact-action secondary" href="/projects/reasoning-math-optimization/">Math and Optimization</a>
  <a class="impact-action secondary" href="/projects/llm-efficiency-ai-infra/">LLM Infra</a>
  <a class="impact-action secondary" href="/projects/">All Projects</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/freedomai-2026/impact/iclr-financial-ai-award.jpg" alt="LLM reasoning and agentic reinforcement learning project signal">
</div>

<p class="impact-lede">
This project organizes papers where reasoning is trained, optimized, pruned, or grounded in executable feedback. The scope covers policy optimization, role-aware agent RL, adaptive compute, code-integrated thinking, and multimodal R1-style learning.
</p>

<section class="impact-section">
  <h2>Research Storyline</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>Optimize</span>
      <div><strong>Move from SFT to policy optimization</strong><p>OnePO and QFFT study how to adapt models more directly, reducing dependence on heavy multi-stage pipelines while preserving exploration.</p></div>
    </div>
    <div class="impact-step">
      <span>Act</span>
      <div><strong>Make RL objectives agent-aware</strong><p>CRPO turns GRPO-style optimization toward role-playing agents, balancing task utility with persona fidelity and style consistency.</p></div>
    </div>
    <div class="impact-step">
      <span>Spend</span>
      <div><strong>Allocate reasoning compute where it matters</strong><p>STOP learns to prune doomed reasoning paths early, making parallel reasoning more accurate under a fixed compute budget.</p></div>
    </div>
    <div class="impact-step">
      <span>Ground</span>
      <div><strong>Ground reasoning in code and perception</strong><p>CoRT and Video-R1 extend reasoning feedback to executable computation and temporal multimodal understanding.</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Paper Trail</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>RL</span>
      <div><strong>OnePO: Direct One-stage Policy Optimization for SFT-free Domain Adaptation</strong><p>Directly optimizes policies for domain adaptation without a separate SFT stage.</p><a href="https://wabyking.github.io/" target="_blank" rel="noopener">Publication list</a></div>
    </div>
    <div class="impact-paper">
      <span>Role</span>
      <div><strong>CRPO: Character-centric Group Relative Policy Optimization</strong><p>Adapts group-relative policy optimization to role-aware reasoning agents.</p><a href="https://arxiv.org/abs/2605.25511" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Adapt</span>
      <div><strong>Question-Free Fine-Tuning</strong><p>Studies efficient and adaptive reasoning fine-tuning for large language models.</p><a href="https://arxiv.org/abs/2506.12860" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Prune</span>
      <div><strong>Cut Your Losses!</strong><p>Learns internal signals that prune low-value reasoning paths early during parallel reasoning.</p><a href="https://arxiv.org/abs/2604.16029" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Code</span>
      <div><strong>CoRT: Code-integrated Reasoning within Thinking</strong><p>Lets models use executable computation as part of the reasoning process.</p><a href="https://arxiv.org/abs/2506.09820" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Video</span>
      <div><strong>Video-R1: Reinforcing Video Reasoning in MLLMs</strong><p>Applies R1-style reinforcement learning to temporal video reasoning in multimodal LLMs.</p><a href="https://arxiv.org/abs/2503.21776" target="_blank" rel="noopener">Paper</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Project Clusters</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>Policy optimization</strong>
      <p>OnePO, CRPO, and QFFT organize RL-style post-training around direct optimization, role fidelity, and efficient adaptation.</p>
    </div>
    <div class="impact-card">
      <strong>Adaptive compute</strong>
      <p>STOP and UPFT focus on spending less compute without losing reasoning quality, especially for long or parallel reasoning traces.</p>
    </div>
    <div class="impact-card">
      <strong>Tool and code grounding</strong>
      <p>CoRT connects reasoning to code execution, making intermediate calculations easier to verify and debug.</p>
    </div>
    <div class="impact-card">
      <strong>Multimodal reasoning RL</strong>
      <p>Video-R1 extends reinforcement learning for reasoning beyond text-only math into temporal video understanding.</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Resource Map</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>STOP / Cut Your Losses</strong>
      <p>Project page for early pruning in efficient parallel reasoning.</p>
      <a href="https://bijiaxihh.github.io/STOP/" target="_blank" rel="noopener">Project page</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>Video-R1</strong>
      <p>Code and datasets for R1-style video reasoning.</p>
      <a href="https://github.com/tulerfeng/Video-R1" target="_blank" rel="noopener">Repository</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>CoRT</strong>
      <p>Code-integrated reasoning resources.</p>
      <a href="https://github.com/ChengpengLi1003/CoRT" target="_blank" rel="noopener">Repository</a>
    </div>
  </div>
</section>

<div class="impact-actions">
  <a class="impact-action secondary" href="/projects/">Back to Projects</a>
</div>

</div>
