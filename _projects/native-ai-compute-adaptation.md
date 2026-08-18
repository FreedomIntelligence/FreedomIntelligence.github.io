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
  <span class="impact-tag">Ascend</span><span class="impact-tag">Large-scale training</span><span class="impact-tag">Inference acceleration</span><span class="impact-tag">Kernel optimization</span><span class="impact-tag">AccelMark</span><span class="impact-tag">Open ecosystem</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://github.com/FreedomIntelligence/AccelMark" target="_blank" rel="noopener">AccelMark</a>
  <a class="impact-action secondary" href="https://huggingface.co/FreedomIntelligence/openPangu-Embedded-7B" target="_blank" rel="noopener">openPangu on Ascend</a>
  <a class="impact-action secondary" href="https://aclanthology.org/2025.acl-long.100/" target="_blank" rel="noopener">ACL 2025</a>
  <a class="impact-action secondary" href="/projects/llm-efficiency-ai-infra/">LLM Infrastructure</a>
</div>

<div class="impact-hero"><img src="/assets/img/native-compute-stack.svg" alt="China-developed AI compute adaptation stack from applications to heterogeneous accelerators"></div>

<p class="impact-lede"><strong>Our goal is not only to make large models run on China-developed AI accelerators, but to make them efficient, reliable, and scalable.</strong> The team has built an end-to-end technical chain connecting large-scale Ascend training, model and framework adaptation, inference acceleration, operator and kernel optimization, benchmark validation, real-world delivery, and open ecosystem development.</p>

<section class="impact-section">
  <h2>1. Large-Scale Training on Ascend</h2>
  <p><strong>The team has first-hand experience training large language models on thousands of China-developed AI processors.</strong> In collaboration with Peng Cheng Laboratory and other institutions, the AraLLaMA/AceGPT-v1.5 program trained 7B and 13B Arabic models using <strong>2,368 Huawei Ascend 910A processors</strong>, covering continual pre-training, progressive vocabulary expansion, and model alignment.</p>
  <div class="impact-paper-trail">
    <div class="impact-paper"><span>NAACL</span><div><strong>AceGPT: Localizing Large Language Models in Arabic</strong><p>Arabic continual pre-training, supervised fine-tuning, and culturally grounded RLAIF established the localized LLM program.</p><a href="https://aclanthology.org/2024.naacl-long.450/" target="_blank" rel="noopener">NAACL 2024</a></div></div>
    <div class="impact-paper"><span>ACL</span><div><strong>Progressive Vocabulary Expansion</strong><p>The 7B and 13B models were trained with 2,368 Ascend 910A processors, demonstrating large-scale training on China-developed AI compute.</p><a href="https://aclanthology.org/2025.acl-long.100/" target="_blank" rel="noopener">ACL 2025</a></div></div>
    <div class="impact-paper"><span>NeurIPS</span><div><strong>Native Alignment for Arabic LLMs</strong><p>Moves value alignment directly into pre-training rather than treating it only as a post-training step.</p><a href="https://proceedings.neurips.cc/paper_files/paper/2024/hash/8141ef7543866a09f127e5e2b9c9dc13-Abstract-Conference.html" target="_blank" rel="noopener">NeurIPS 2024</a></div></div>
  </div>
</section>

<section class="impact-section">
  <h2>2. Full-Stack Compute Optimization</h2>
  <p><strong>The capability has evolved from using China-developed compute to systematically optimizing it.</strong> Optimization spans the model, serving system, inference framework, operator, and kernel layers.</p>
  <div class="impact-storyline">
    <div class="impact-step"><span>Model</span><div><strong>Reduce model-side serving cost</strong><p>Compress system prompts and manage or compress KV Cache to reduce memory pressure and repeated computation.</p></div></div>
    <div class="impact-step"><span>Runtime</span><div><strong>Tune the inference path</strong><p>Adapt and optimize vLLM, SGLang, FlashAttention, and FlashInfer-style components for target workloads and hardware stacks.</p></div></div>
    <div class="impact-step"><span>Kernel</span><div><strong>Optimize below the framework layer</strong><p>Profile bottlenecks and improve CANN operators, kernels, memory movement, graph execution, and hardware utilization.</p></div></div>
    <div class="impact-step"><span>Service</span><div><strong>Validate production behavior</strong><p>Measure latency, throughput, concurrency, utilization, reliability, security, and deployment cost—not compatibility alone.</p></div></div>
  </div>
</section>

<section class="impact-section">
  <h2>3. Benchmark Validation and Open Evaluation</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource"><strong>CANNBench</strong><p>Team solutions have taken <strong>top positions in multiple Ascend operator-optimization tasks</strong>. Because the leaderboard changes over time, each external claim should include a query date or archived screenshot.</p><a href="https://gitcode.com/cann/cann-bench/blob/master/README.md" target="_blank" rel="noopener">Benchmark</a></div>
    <div class="impact-card impact-resource"><strong>AccelMark</strong><p>An open, community-driven benchmark for LLM inference across NVIDIA, AMD, Ascend, Apple Silicon, TPU, and emerging accelerators.</p><a href="https://github.com/FreedomIntelligence/AccelMark" target="_blank" rel="noopener">Open benchmark</a></div>
    <div class="impact-card"><strong>Reproducibility by design</strong><p>Results connect performance with environment metadata, runner versions, execution outputs, and reproduction instructions.</p></div>
    <div class="impact-card"><strong>One evaluation surface</strong><p>AccelMark aims to compare hardware together with vLLM/SGLang, KV Cache methods, FlashAttention/FlashInfer, operators, and kernels under a shared experimental framework.</p></div>
  </div>
</section>

<section class="impact-section">
  <h2>4. Hospital and Industry Delivery</h2>
  <p><strong>Real applications turn optimization into measurable engineering requirements.</strong> Hospital workflows expose concrete constraints for privacy, latency, concurrency, reliability, and deployment cost; these requirements feed back into system optimization and hardware adaptation.</p>
  <div class="impact-grid">
    <div class="impact-card impact-resource"><strong>OpenClaw and HuatuoGPT</strong><p>The team supported localized deployment at The Chinese University of Hong Kong, Shenzhen Hospital. Read-only access to hospital information systems helps preserve medical-data and system integrity.</p><a href="https://med.cuhk.edu.cn/article/1746" target="_blank" rel="noopener">Hospital report</a></div>
    <div class="impact-card"><strong>Health screening and management</strong><p>The system supports customized screening-package recommendations and uses idle nighttime compute to process examination records in batches, generating reports and personalized follow-up guidance.</p></div>
    <div class="impact-card impact-resource"><strong>AI for Computing collaboration</strong><p>The team collaborates with companies including KernelCAT developer Zhizi Xinyuan on model migration, framework tuning, inference acceleration, and operator optimization across CUDA and CANN stacks.</p><a href="https://kernelcat.cn/" target="_blank" rel="noopener">KernelCAT</a></div>
  </div>
  <div class="impact-storyline">
    <div class="impact-step"><span>Demand</span><div><strong>Applications define constraints</strong><p>Security, latency, throughput, concurrency, reliability, and cost become concrete targets.</p></div></div>
    <div class="impact-step"><span>System</span><div><strong>Optimization answers demand</strong><p>Models, runtimes, caches, operators, and kernels are tuned against production workloads.</p></div></div>
    <div class="impact-step"><span>Compute</span><div><strong>Adaptation closes the loop</strong><p>Methods are ported, measured, and validated across China-developed and heterogeneous accelerator stacks.</p></div></div>
  </div>
</section>

<section class="impact-section">
  <h2>5. Open Models, Data, and Community Infrastructure</h2>
  <p><strong>The long-term objective is to turn project experience into reusable community infrastructure.</strong> Open benchmarks, models, datasets, serving recipes, and kernel knowledge reduce repeated adaptation work across a fragmented accelerator ecosystem.</p>
  <div class="impact-grid">
    <div class="impact-card impact-resource"><strong>100+ open models</strong><p>FreedomIntelligence hosts more than one hundred public model repositories spanning HuatuoGPT, AceGPT, ShizhenGPT, openPangu, and related releases.</p><a href="https://huggingface.co/FreedomIntelligence/models" target="_blank" rel="noopener">Hugging Face</a></div>
    <div class="impact-card impact-resource"><strong>openPangu on Ascend</strong><p>openPangu-Embedded-7B was trained from scratch on Ascend NPUs with approximately <strong>19 trillion tokens</strong>.</p><a href="https://huggingface.co/FreedomIntelligence/openPangu-Embedded-7B" target="_blank" rel="noopener">Model card</a></div>
    <div class="impact-card impact-resource"><strong>Million-scale community use</strong><p>Periodic team statistics report more than <strong>one million cumulative downloads</strong> and a peak above <strong>200,000 downloads for one model in one month</strong>. Rolling figures should be published with dates and archived evidence.</p><a href="https://huggingface.co/FreedomIntelligence" target="_blank" rel="noopener">Organization</a></div>
    <div class="impact-card impact-resource"><strong>TRL documentation example</strong><p>Hugging Face TRL uses FreedomIntelligence/medical-o1-reasoning-SFT as an example for preprocessing a non-standard dataset format.</p><a href="https://huggingface.co/docs/trl/sft_trainer" target="_blank" rel="noopener">SFTTrainer documentation</a></div>
    <div class="impact-card impact-resource"><strong>10,000+ GitHub Stars</strong><p>Representative FreedomIntelligence repositories have collectively received more than <strong>ten thousand publicly visible Stars</strong>.</p><a href="https://github.com/FreedomIntelligence" target="_blank" rel="noopener">GitHub organization</a></div>
  </div>
</section>

<section class="impact-section">
  <h2>Evidence and Resources</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper"><span>1–3</span><div><strong>Arabic LLM research</strong><p>AceGPT at NAACL 2024, Progressive Vocabulary Expansion at ACL 2025, and Native Alignment at NeurIPS 2024.</p><a href="https://aclanthology.org/2024.naacl-long.450/" target="_blank" rel="noopener">AceGPT</a> · <a href="https://aclanthology.org/2025.acl-long.100/" target="_blank" rel="noopener">ACL 2025</a> · <a href="https://proceedings.neurips.cc/paper_files/paper/2024/hash/8141ef7543866a09f127e5e2b9c9dc13-Abstract-Conference.html" target="_blank" rel="noopener">NeurIPS 2024</a></div></div>
    <div class="impact-paper"><span>4–5</span><div><strong>CANNBench and AccelMark</strong><p>Operator-level Ascend evaluation and open heterogeneous-accelerator inference benchmarking.</p><a href="https://gitcode.com/cann/cann-bench/blob/master/README.md" target="_blank" rel="noopener">CANNBench</a> · <a href="https://github.com/FreedomIntelligence/AccelMark" target="_blank" rel="noopener">AccelMark</a></div></div>
    <div class="impact-paper"><span>6</span><div><strong>Hospital deployment</strong><p>Official report on localized OpenClaw, HuatuoGPT, read-only access, and health-screening workflows.</p><a href="https://med.cuhk.edu.cn/article/1746" target="_blank" rel="noopener">CUHK-Shenzhen Medicine</a></div></div>
    <div class="impact-paper"><span>7–10</span><div><strong>Open-source ecosystem</strong><p>FreedomIntelligence on Hugging Face and GitHub, openPangu-Embedded-7B, and TRL documentation.</p><a href="https://huggingface.co/FreedomIntelligence" target="_blank" rel="noopener">Hugging Face</a> · <a href="https://huggingface.co/FreedomIntelligence/openPangu-Embedded-7B" target="_blank" rel="noopener">openPangu</a> · <a href="https://huggingface.co/docs/trl/sft_trainer" target="_blank" rel="noopener">TRL</a> · <a href="https://github.com/FreedomIntelligence" target="_blank" rel="noopener">GitHub</a></div></div>
  </div>
</section>

<section class="impact-section">
  <h2>From Available to Efficient and Scalable</h2>
  <p class="impact-lede"><strong>The capability path is clear:</strong> train models on thousands of China-developed processors; optimize the full software stack; validate performance through benchmarks; solve real hospital and industry problems; and convert the resulting knowledge into open benchmarks, models, and community infrastructure.</p>
</section>

<div class="impact-actions"><a class="impact-action secondary" href="/projects/">Back to Projects</a></div>

</div>
