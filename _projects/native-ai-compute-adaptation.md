---
layout: page
title: Native AI Compute Adaptation
description: Model migration, inference acceleration, kernel optimization, and open benchmarking across Ascend and heterogeneous AI accelerators.
img: assets/img/native-compute-stack.svg
importance: 2
category: work
github: https://github.com/FreedomIntelligence/AccelMark
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div class="impact-kicker">Native accelerators and AI systems</div>

<div class="impact-tags">
  <span class="impact-tag">Ascend</span>
  <span class="impact-tag">Inference acceleration</span>
  <span class="impact-tag">Kernel optimization</span>
  <span class="impact-tag">AccelMark</span>
  <span class="impact-tag">Open ecosystem</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://github.com/FreedomIntelligence/AccelMark" target="_blank" rel="noopener">AccelMark</a>
  <a class="impact-action secondary" href="https://huggingface.co/FreedomIntelligence/openPangu-Embedded-7B" target="_blank" rel="noopener">openPangu on Ascend</a>
  <a class="impact-action secondary" href="https://aclanthology.org/2025.acl-long.100/" target="_blank" rel="noopener">ACL 2025</a>
  <a class="impact-action secondary" href="/projects/llm-efficiency-ai-infra/">LLM Infrastructure</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/native-compute-stack.svg" alt="Native AI compute adaptation stack from applications to heterogeneous accelerators">
</div>

<p class="impact-lede">
We build the systems layer that moves large models from “running” to efficient, stable, and reproducible service on native and heterogeneous AI accelerators. The work spans hardware adaptation, model migration and compression, inference-engine tuning, KV Cache management, operator and kernel optimization, and deployment in real production environments.
</p>

<section class="impact-section">
  <h2>End-to-End Capability</h2>
  <div class="impact-storyline">
    <div class="impact-step"><span>Adapt</span><div><strong>Move models across accelerator stacks</strong><p>Port model architectures, operators, runtime dependencies, and service interfaces to Ascend and other accelerator environments.</p></div></div>
    <div class="impact-step"><span>Accelerate</span><div><strong>Optimize the inference path</strong><p>Tune vLLM and SGLang, compress system prompts, manage and compress KV Cache, and integrate FlashAttention or FlashInfer-style acceleration where the stack permits.</p></div></div>
    <div class="impact-step"><span>Kernel</span><div><strong>Work below the framework layer</strong><p>Profile bottlenecks and optimize operators, kernels, memory movement, and graph execution for the target hardware and workload.</p></div></div>
    <div class="impact-step"><span>Deliver</span><div><strong>Validate in real systems</strong><p>Connect optimized models to production services while preserving latency, throughput, data-security, and system-integrity requirements.</p></div></div>
  </div>
</section>

<section class="impact-section">
  <h2>Production Deployment</h2>
  <div class="impact-grid">
    <div class="impact-card"><strong>Hospital deployment</strong><p>The team supported model deployment, service integration, and application adaptation in the native-compute environment of The Chinese University of Hong Kong, Shenzhen Hospital.</p></div>
    <div class="impact-card"><strong>Medical agents and HuatuoGPT</strong><p>OpenClaw medical agents and HuatuoGPT were localized for in-hospital operation, with read-only access to hospital information systems designed to protect data and system integrity.</p></div>
    <div class="impact-card"><strong>Industry collaboration</strong><p>We collaborate with AI for Computing companies, including KernelCAT developer Zhizi Xinyuan, on model migration, framework tuning, inference acceleration, and operator optimization.</p></div>
  </div>
</section>

<section class="impact-section">
  <h2>Open Evaluation and Reproducibility</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource"><strong>AccelMark</strong><p>An open, community-driven benchmark for LLM inference across NVIDIA, AMD, Ascend, Apple Silicon, TPU, and emerging accelerators. Submissions connect results with environment metadata, runner versions, and reproduction instructions.</p><a href="https://github.com/FreedomIntelligence/AccelMark" target="_blank" rel="noopener">Open benchmark</a></div>
    <div class="impact-card"><strong>CANNBench</strong><p>Our solutions have taken top positions in multiple Ascend operator-optimization tasks. Because the leaderboard changes over time, claims should always be paired with a query date or archived screenshot.</p></div>
    <div class="impact-card"><strong>Community stack</strong><p>AccelMark provides a shared verification surface for contributions spanning vLLM, SGLang, KV Cache techniques, FlashAttention/FlashInfer, and low-level operators and kernels.</p></div>
  </div>
</section>

<section class="impact-section">
  <h2>Large-Scale Training on Ascend</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper"><span>NAACL</span><div><strong>AceGPT: Localizing Large Language Models in Arabic</strong><p>Arabic continual pre-training, supervised fine-tuning, and culturally grounded RLAIF established the team's localized LLM program.</p><a href="https://aclanthology.org/2024.naacl-long.450/" target="_blank" rel="noopener">NAACL 2024</a></div></div>
    <div class="impact-paper"><span>ACL</span><div><strong>Second Language (Arabic) Acquisition via Progressive Vocabulary Expansion</strong><p>The 7B and 13B models were trained using 2,368 Ascend 910A processors, demonstrating large-scale native-compute training.</p><a href="https://aclanthology.org/2025.acl-long.100/" target="_blank" rel="noopener">ACL 2025</a></div></div>
    <div class="impact-paper"><span>NeurIPS</span><div><strong>Alignment at Pre-training: Native Alignment for Arabic LLMs</strong><p>Native Alignment moves value alignment directly into pre-training rather than treating it only as a post-training step.</p><a href="https://proceedings.neurips.cc/paper_files/paper/2024/hash/8141ef7543866a09f127e5e2b9c9dc13-Abstract-Conference.html" target="_blank" rel="noopener">NeurIPS 2024</a></div></div>
  </div>
</section>

<section class="impact-section">
  <h2>Open Native-Compute Ecosystem</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource"><strong>openPangu-Embedded-7B</strong><p>Hosted by FreedomIntelligence on Hugging Face, the model was trained from scratch on Ascend NPUs with approximately 19 trillion tokens.</p><a href="https://huggingface.co/FreedomIntelligence/openPangu-Embedded-7B" target="_blank" rel="noopener">Model card</a></div>
    <div class="impact-card impact-resource"><strong>Open models and data</strong><p>FreedomIntelligence maintains more than one hundred public model repositories spanning HuatuoGPT, AceGPT, ShizhenGPT, openPangu, and related releases.</p><a href="https://huggingface.co/FreedomIntelligence/models" target="_blank" rel="noopener">Hugging Face</a></div>
    <div class="impact-card"><strong>Reusable systems knowledge</strong><p>Benchmarks, model cards, datasets, runtime recipes, and kernel work together reduce repeated adaptation effort across a fragmented accelerator ecosystem.</p></div>
  </div>
</section>

<section class="impact-section">
  <h2>Why It Matters</h2>
  <ul class="impact-list">
    <li>Accelerator sovereignty depends on a complete software path from models and frameworks to operators and kernels.</li>
    <li>Production success requires measurable latency, throughput, utilization, reliability, and security—not compatibility alone.</li>
    <li>Open, reproducible benchmarks make optimization results comparable and turn one-off adaptation into shared infrastructure.</li>
  </ul>
</section>

<div class="impact-actions"><a class="impact-action secondary" href="/projects/">Back to Projects</a></div>

</div>
