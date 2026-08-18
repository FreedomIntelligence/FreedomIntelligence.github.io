---
layout: page
title: "China-Developed AI Computing: Adaptation and Acceleration"
description: Large-scale Ascend training, full-stack acceleration, benchmark validation, real-world delivery, and open ecosystem building.
img: assets/img/native-compute-stack.svg
importance: 2
category: work
github: https://github.com/FreedomIntelligence/AccelMark
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div class="impact-kicker">China-developed accelerators and AI systems</div>

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
  <img src="/assets/img/native-compute-stack.svg" alt="China-developed AI compute adaptation stack from applications to heterogeneous accelerators">
</div>

<p class="impact-lede">
We build the systems layer that moves large models from merely running on China-developed AI accelerators to efficient, stable, and scalable service. The work connects large-scale Ascend training, hardware adaptation, model migration and compression, inference-engine tuning, KV Cache management, operator and kernel optimization, benchmark validation, and deployment in real production environments.
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
    <div class="impact-card impact-resource"><strong>Medical agents and HuatuoGPT</strong><p>The team supported localized OpenClaw and HuatuoGPT deployment at The Chinese University of Hong Kong, Shenzhen Hospital. Read-only access to hospital information systems helps preserve medical-data and system integrity.</p><a href="https://med.cuhk.edu.cn/article/1746" target="_blank" rel="noopener">Hospital report</a></div>
    <div class="impact-card"><strong>Health screening and management</strong><p>The deployment supports customized screening-package recommendations and uses idle nighttime compute to process examination records in batches, generating reports and personalized follow-up guidance.</p></div>
    <div class="impact-card impact-resource"><strong>Industry collaboration</strong><p>We collaborate with AI for Computing companies, including KernelCAT developer Zhizi Xinyuan, on model migration, framework tuning, inference acceleration, and operator optimization across CUDA and CANN stacks.</p><a href="https://kernelcat.cn/" target="_blank" rel="noopener">KernelCAT</a></div>
  </div>
  <div class="impact-storyline">
    <div class="impact-step"><span>Demand</span><div><strong>Applications define the real constraints</strong><p>Hospital workflows expose concrete requirements for privacy, latency, concurrency, reliability, and deployment cost.</p></div></div>
    <div class="impact-step"><span>System</span><div><strong>System optimization answers those constraints</strong><p>Model compression, inference-engine tuning, cache management, operators, and kernels are optimized against production workloads.</p></div></div>
    <div class="impact-step"><span>Compute</span><div><strong>Hardware adaptation closes the loop</strong><p>The resulting methods are ported, measured, and validated across China-developed and heterogeneous accelerator stacks.</p></div></div>
  </div>
</section>

<section class="impact-section">
  <h2>Open Evaluation and Reproducibility</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource"><strong>AccelMark</strong><p>An open, community-driven benchmark for LLM inference across NVIDIA, AMD, Ascend, Apple Silicon, TPU, and emerging accelerators. Submissions connect results with environment metadata, runner versions, and reproduction instructions.</p><a href="https://github.com/FreedomIntelligence/AccelMark" target="_blank" rel="noopener">Open benchmark</a></div>
    <div class="impact-card impact-resource"><strong>CANNBench</strong><p>Our solutions have taken top positions in multiple Ascend operator-optimization tasks. Because the leaderboard changes over time, claims should always be paired with a query date or archived screenshot.</p><a href="https://gitcode.com/cann/cann-bench/blob/master/README.md" target="_blank" rel="noopener">Benchmark</a></div>
    <div class="impact-card"><strong>Community stack</strong><p>AccelMark provides a shared verification surface for contributions spanning vLLM, SGLang, KV Cache techniques, FlashAttention/FlashInfer, and low-level operators and kernels.</p></div>
  </div>
</section>

<section class="impact-section">
  <h2>Large-Scale Training on Ascend</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper"><span>NAACL</span><div><strong>AceGPT: Localizing Large Language Models in Arabic</strong><p>Arabic continual pre-training, supervised fine-tuning, and culturally grounded RLAIF established the team's localized LLM program.</p><a href="https://aclanthology.org/2024.naacl-long.450/" target="_blank" rel="noopener">NAACL 2024</a></div></div>
    <div class="impact-paper"><span>ACL</span><div><strong>Second Language (Arabic) Acquisition via Progressive Vocabulary Expansion</strong><p>The 7B and 13B models were trained using 2,368 Ascend 910A processors, demonstrating large-scale training on China-developed AI compute.</p><a href="https://aclanthology.org/2025.acl-long.100/" target="_blank" rel="noopener">ACL 2025</a></div></div>
    <div class="impact-paper"><span>NeurIPS</span><div><strong>Alignment at Pre-training: Native Alignment for Arabic LLMs</strong><p>Native Alignment moves value alignment directly into pre-training rather than treating it only as a post-training step.</p><a href="https://proceedings.neurips.cc/paper_files/paper/2024/hash/8141ef7543866a09f127e5e2b9c9dc13-Abstract-Conference.html" target="_blank" rel="noopener">NeurIPS 2024</a></div></div>
  </div>
</section>

<section class="impact-section">
  <h2>Open Compute Ecosystem</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource"><strong>openPangu-Embedded-7B</strong><p>Hosted by FreedomIntelligence on Hugging Face, the model was trained from scratch on Ascend NPUs with approximately 19 trillion tokens.</p><a href="https://huggingface.co/FreedomIntelligence/openPangu-Embedded-7B" target="_blank" rel="noopener">Model card</a></div>
    <div class="impact-card impact-resource"><strong>100+ open models</strong><p>FreedomIntelligence maintains more than one hundred public model repositories spanning HuatuoGPT, AceGPT, ShizhenGPT, openPangu, and related releases.</p><a href="https://huggingface.co/FreedomIntelligence/models" target="_blank" rel="noopener">Hugging Face</a></div>
    <div class="impact-card impact-resource"><strong>Million-scale community use</strong><p>According to periodic team statistics, related models and datasets have exceeded one million cumulative downloads, with a peak above 200,000 downloads for a single model in one month. These rolling figures should be reported with a date and archived evidence.</p><a href="https://huggingface.co/FreedomIntelligence" target="_blank" rel="noopener">Organization</a></div>
    <div class="impact-card impact-resource"><strong>TRL documentation example</strong><p>Hugging Face TRL's SFTTrainer documentation uses FreedomIntelligence/medical-o1-reasoning-SFT as an example for preprocessing a non-standard dataset format.</p><a href="https://huggingface.co/docs/trl/sft_trainer" target="_blank" rel="noopener">SFTTrainer documentation</a></div>
    <div class="impact-card impact-resource"><strong>10,000+ GitHub Stars</strong><p>Representative FreedomIntelligence repositories have collectively received more than ten thousand publicly visible GitHub Stars, reflecting sustained adoption of the team's models, datasets, systems, and tools.</p><a href="https://github.com/FreedomIntelligence" target="_blank" rel="noopener">GitHub organization</a></div>
    <div class="impact-card"><strong>Reusable systems knowledge</strong><p>Benchmarks, model cards, datasets, runtime recipes, and kernel work together reduce repeated adaptation effort across a fragmented accelerator ecosystem.</p></div>
  </div>
</section>

<section class="impact-section">
  <h2>Evidence and Resources</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper"><span>1</span><div><strong>AceGPT</strong><p>Huang et al., NAACL 2024.</p><a href="https://aclanthology.org/2024.naacl-long.450/" target="_blank" rel="noopener">ACL Anthology</a></div></div>
    <div class="impact-paper"><span>2</span><div><strong>Progressive Vocabulary Expansion</strong><p>Zhu et al., ACL 2025, including the disclosed 2,368 Ascend 910A training configuration.</p><a href="https://aclanthology.org/2025.acl-long.100/" target="_blank" rel="noopener">ACL Anthology</a></div></div>
    <div class="impact-paper"><span>3</span><div><strong>Native Alignment</strong><p>Liang et al., NeurIPS 2024. Here “native” names the paper's pre-training alignment method; it is not used as a translation of “国产算力”.</p><a href="https://proceedings.neurips.cc/paper_files/paper/2024/hash/8141ef7543866a09f127e5e2b9c9dc13-Abstract-Conference.html" target="_blank" rel="noopener">NeurIPS Proceedings</a></div></div>
    <div class="impact-paper"><span>4–5</span><div><strong>CANNBench and AccelMark</strong><p>Operator-level Ascend evaluation and open heterogeneous-accelerator inference benchmarking.</p><a href="https://gitcode.com/cann/cann-bench/blob/master/README.md" target="_blank" rel="noopener">CANNBench</a> · <a href="https://github.com/FreedomIntelligence/AccelMark" target="_blank" rel="noopener">AccelMark</a></div></div>
    <div class="impact-paper"><span>6</span><div><strong>Hospital deployment</strong><p>CUHK-Shenzhen School of Medicine report on localized OpenClaw, HuatuoGPT, read-only access, and health-screening workflows.</p><a href="https://med.cuhk.edu.cn/article/1746" target="_blank" rel="noopener">Official report</a></div></div>
    <div class="impact-paper"><span>7–10</span><div><strong>Open-source ecosystem</strong><p>FreedomIntelligence on Hugging Face and GitHub, openPangu-Embedded-7B, and the TRL SFTTrainer documentation.</p><a href="https://huggingface.co/FreedomIntelligence" target="_blank" rel="noopener">Hugging Face</a> · <a href="https://huggingface.co/FreedomIntelligence/openPangu-Embedded-7B" target="_blank" rel="noopener">openPangu</a> · <a href="https://huggingface.co/docs/trl/sft_trainer" target="_blank" rel="noopener">TRL</a> · <a href="https://github.com/FreedomIntelligence" target="_blank" rel="noopener">GitHub</a></div></div>
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
