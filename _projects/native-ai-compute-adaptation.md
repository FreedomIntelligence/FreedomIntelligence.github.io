---
layout: page
title: "China-Developed AI Computing: Adaptation and Acceleration"
title_zh: "国产 AI 算力适配与加速"
direction: ai-for-infra
description: Ascend training, numerical repair with NumericBridge, accelerator and agent benchmarks, CANN kernel optimization, and Huawei collaboration.
description_zh: "昇腾训练、NumericBridge 数值修复、跨卡与智能体评测、CANN 算子优化及华为合作。"
img: assets/img/native-compute-stack.svg
importance: 2
category: work
github: https://github.com/FreedomIntelligence/AccelMark
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div data-lang="en">

<div class="impact-kicker">China-developed accelerators and AI systems</div>

<div class="impact-tags">
  <span class="impact-tag">Ascend</span><span class="impact-tag">Large-scale training</span><span class="impact-tag">Inference acceleration</span><span class="impact-tag">Kernel optimization</span><span class="impact-tag">AccelMark</span><span class="impact-tag">NumericBridge</span><span class="impact-tag">AscendAgent</span><span class="impact-tag">Open ecosystem</span>
</div>

<div class="impact-actions">
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/NumericBridge" target="_blank" rel="noopener">NumericBridge</a>
  <a class="impact-action" href="https://github.com/FreedomIntelligence/AccelMark" target="_blank" rel="noopener">AccelMark</a>
  <a class="impact-action secondary" href="https://huggingface.co/FreedomIntelligence/openPangu-Embedded-7B" target="_blank" rel="noopener">openPangu on Ascend</a>
  <a class="impact-action secondary" href="https://aclanthology.org/2025.acl-long.100/" target="_blank" rel="noopener">ACL 2025</a>
  <a class="impact-action secondary" href="/projects/llm-efficiency-ai-infra/">LLM Infrastructure</a>
</div>

<div class="impact-hero"><img src="/assets/img/native-compute-stack.svg" alt="China-developed AI compute adaptation stack from applications to heterogeneous accelerators"></div>

<p class="impact-lede"><strong>Our goal is not only to make large models run on China-developed AI accelerators, but to make them efficient, reliable, and scalable.</strong> The team has built an end-to-end technical chain connecting large-scale Ascend training, model and framework adaptation, inference acceleration, operator and kernel optimization, benchmark validation, real-world delivery, and open ecosystem development.</p>

<section class="impact-section">
  <h2>Large-Scale Training on Ascend</h2>
  <p><strong>The team has first-hand experience training large language models on thousands of China-developed AI processors.</strong> In collaboration with Peng Cheng Laboratory and other institutions, the AraLLaMA/AceGPT-v1.5 program trained 7B and 13B Arabic models using <strong>2,368 Huawei Ascend 910A processors</strong>, covering continual pre-training, progressive vocabulary expansion, and model alignment.</p>
  <div class="impact-paper-trail">
    <div class="impact-paper"><span>NAACL 2024</span><div><strong>AceGPT, Localizing Large Language Models in Arabic</strong><p>Huang Huang, Fei Yu, Jianqing Zhu, Xuening Sun, Hao Cheng, Dingjie Song, Zhihong Chen, Abdulmohsen Alharthi, Bang An, Juncai He, Ziche Liu, Zhiyi Zhang, Junying Chen, Jianquan Li, Benyou Wang, Lian Zhang, Ruoyu Sun, Xiang Wan, Haizhou Li, Jinchao Xu</p><p>Combines Arabic continual pre-training, supervised fine-tuning, and reinforcement learning from AI feedback to localize language models to Arabic language and cultural values.</p><a href="https://aclanthology.org/2024.naacl-long.450/" target="_blank" rel="noopener">Paper</a> · <a href="https://github.com/FreedomIntelligence/AceGPT" target="_blank" rel="noopener">GitHub</a></div></div>
    <div class="impact-paper"><span>ACL 2025</span><div><strong>Second Language (Arabic) Acquisition of LLMs via Progressive Vocabulary Expansion</strong><p>Jianqing Zhu, Huang Huang, Zhihang Lin, Juhao Liang, Zhengyang Tang, Khalid Almubarak, Abdulmohsen Alharthik, Bang An, Juncai He, Xiangbo Wu, Fei Yu, Junying Chen, Zhuoheng Ma, Yuhao Du, He Zhang, Saied Alshahrani, Emad A. Alghamdi, Lian Zhang, Ruoyu Sun, Haizhou Li, Benyou Wang, Jinchao Xu</p><p>Introduces progressive Arabic vocabulary expansion in AraLLaMA / AceGPT-v1.5. Section 4.2 reports training 7B and 13B models on 2,368 Ascend 910A processors, taking seven and eleven days respectively.</p><a href="https://aclanthology.org/2025.acl-long.100/" target="_blank" rel="noopener">Paper</a> · <a href="https://github.com/FreedomIntelligence/AraLLaMa" target="_blank" rel="noopener">GitHub</a></div></div>
    <div class="impact-paper"><span>NeurIPS 2024</span><div><strong>Alignment at Pre-training! Towards Native Alignment for Arabic LLMs</strong><p>Juhao Liang, Zhenyang Cai, Jianqing Zhu, Huang Huang, Kewei Zong, Bang An, Abdulmohsen Alharthi, Juncai He, Lian Zhang, Haizhou Li, Benyou Wang, Jinchao Xu</p><p>Studies native alignment during pre-training through aligned data processing and rewriting, with released Arabic language models and code.</p><a href="https://proceedings.neurips.cc/paper_files/paper/2024/hash/195c4e2910bedabd813f9fe4e70c642c-Abstract-Conference.html" target="_blank" rel="noopener">Paper</a> · <a href="https://github.com/FreedomIntelligence/AceGPT-v2" target="_blank" rel="noopener">GitHub</a></div></div>
  </div>
</section>

<section class="impact-section">
  <h2>Full-Stack Compute Optimization</h2>
  <p><strong>The capability has evolved from using China-developed compute to systematically optimizing it.</strong> Optimization spans the model, serving system, inference framework, operator, and kernel layers.</p>
  <div class="impact-storyline">
    <div class="impact-step"><span>Model</span><div><strong>Reduce model-side serving cost</strong><p>Compress system prompts and manage or compress KV Cache to reduce memory pressure and repeated computation.</p></div></div>
    <div class="impact-step"><span>Runtime</span><div><strong>Tune the inference path</strong><p>Adapt and optimize vLLM, SGLang, FlashAttention, and FlashInfer-style components for target workloads and hardware stacks.</p></div></div>
    <div class="impact-step"><span>Kernel</span><div><strong>Optimize below the framework layer</strong><p>Profile bottlenecks and improve CANN operators, kernels, memory movement, graph execution, and hardware utilization.</p></div></div>
    <div class="impact-step"><span>Service</span><div><strong>Validate production behavior</strong><p>Measure latency, throughput, concurrency, utilization, reliability, security, and deployment cost—not compatibility alone.</p></div></div>
  </div>
</section>


<section class="impact-section">
  <h2>NumericBridge and Software Library Repair at Scale</h2>
  <p>Through NumericBridge, we diagnose and repair numerical and compatibility issues in existing AI software libraries at scale, across inference, supervised fine-tuning, and reinforcement learning. The workflow connects native setup, precision comparison, diagnosis, repair, and verification on the original workload, preserving evidence as reusable community cases.</p>
  <p>Repairs retain model, hardware, and framework versions and are checked for precision and performance on the original workload. <a href="https://github.com/FreedomIntelligence/NumericBridge" target="_blank" rel="noopener">GitHub</a> · <a href="https://freedomintelligence.github.io/NumericBridge/" target="_blank" rel="noopener">Project and cases</a></p>

</section>

<section class="impact-section">
  <h2>Benchmark Validation and Open Evaluation</h2>
  <p>AccelMark connects cross-accelerator results with shared workloads, runner versions, environment fingerprints, and accuracy records. AccelMark-Agent further evaluates whether agents deliver valid serving improvements across A100, RTX 4090, V100, and Ascend 910C, including 2,000 search rounds in the fully crossed A100 matrix. Ascend is included in portability evaluation, but the supplied manuscript reports no valid final delivery on that track.</p>

  <div class="impact-grid">
    <div class="impact-card impact-resource"><strong>CANNBench</strong><p>Team solutions have taken <strong>top positions in multiple Ascend operator-optimization tasks</strong>. Because the leaderboard changes over time, each external claim should include a query date or archived screenshot.</p><a href="https://gitcode.com/cann/cann-bench/blob/master/README.md" target="_blank" rel="noopener">Benchmark</a></div>
    <div class="impact-card impact-resource"><strong>AccelMark</strong><p>An open, community-driven benchmark for LLM inference across NVIDIA, AMD, Ascend, Apple Silicon, TPU, and emerging accelerators.</p><a href="https://github.com/FreedomIntelligence/AccelMark" target="_blank" rel="noopener">Open benchmark</a></div>
    <div class="impact-card"><strong>Reproducibility by design</strong><p>Results connect performance with environment metadata, runner versions, execution outputs, and reproduction instructions.</p></div>
    <div class="impact-card"><strong>One evaluation surface</strong><p>AccelMark aims to compare hardware together with vLLM/SGLang, KV Cache methods, FlashAttention/FlashInfer, operators, and kernels under a shared experimental framework.</p></div>
  </div>
</section>

<section class="impact-section">
  <h2>Hospital and Industry Delivery</h2>
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
  <h2>Open Models, Data, and Community Infrastructure</h2>
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
  <h2>Joint Courses and Research Projects with Huawei</h2>
  <p>Through Natural Language Processing (CSC5051 / CSC6052 / MDS5110), we collaborate with Huawei on Ascend and large-model teaching and have received support for related projects. The collaboration also includes the openPangu university outreach event on October 23, connecting course teaching with practical engagement in the China-developed AI compute ecosystem.</p>
  <p><a href="https://nlp-course-cuhksz.github.io/?lang=en" target="_blank" rel="noopener">Course website</a></p>
  <p>The team is also collaborating on an OP technical cooperation project for large-scale, high-quality corpus construction and model optimization for trustworthy medical LLMs. The planned work covers MedWard medical corpus construction, medical-text filtering, multidimensional annotation, physician review, and data-quality experiments using openPangu-7B and Ascend 910B.</p>

</section>

<section class="impact-section">
  <h2>Mobile Agents and HarmonyOS Collaboration</h2>
  <p>We collaborate with Huawei on mobile agents and are working on compatibility and adaptation for HarmonyOS, focusing on cross-application tasks, native system capabilities, and user authorization in changing environments.</p>
  <p>OS-Native Agents connects system events, task state, and permission checks for persistent task management. The paper reports an Android implementation and evaluation; HarmonyOS adaptation is a collaboration direction, and the Android metrics do not establish performance on HarmonyOS.</p>
  <p><a href="/projects/mobile-agent/" target="_blank" rel="noopener">Mobile-agent research</a></p>

</section>

<section class="impact-section">
  <h2>New Research Papers and Full Author Lists</h2>
  <p>Titles and results follow the manuscripts supplied by the team; full author lists follow the supplied author order. These works are listed as manuscripts; consult the linked paper pages for current review status.</p>
  <div class="impact-paper-trail">
    <div class="impact-paper"><span>Research manuscript</span><div><strong>AscendAgent: Evolving Context to Fit the Harness in CANN Kernel Optimization</strong><p>Ruijie Zhang, Juhao Liang, Youxin Jiang, Zhihang Lin, Tian Ding, Benyou Wang</p><p>Evolves reusable optimization knowledge while keeping model weights, the harness, and the evaluator fixed. With Kimi K3 and 40 candidate compilations per task, mean best speedups are 1.40× on CANN-Bench and 1.75× on TritonBench-G, versus 1.21× and 1.36× for the same harness with frozen initial knowledge.</p><a href="https://openreview.net/forum?id=gtuspdBfQo" target="_blank" rel="noopener">Paper</a> · <a href="https://github.com/FreedomIntelligence/KernelBridge" target="_blank" rel="noopener">GitHub (KernelBridge)</a></div></div>
    <div class="impact-paper"><span>Research manuscript</span><div><strong>AccelMark-Agent: Benchmarking Inference-Optimization Agents Across Accelerators and Workloads</strong><p>Juhao Liang, Youxin Jiang, Zhiyuan Zhang, Ruijie Zhang, Zhihang Lin, Yuxin Fu, Shiqi Zhang, Siyu Li, Xiaolong Liu, Prayag Tiwari, Minchen Yu, Li Zeng, Zizhong Chen, Benyou Wang</p><p>Evaluates agents optimizing complete LLM serving deployments across five workloads, five backbone models, and two harnesses. A fully crossed A100 matrix contains 2,000 search rounds, with additional RTX 4090, V100, and Ascend 910C tracks. Of 50 A100 cells, 26 delivered a changed artifact over 2% faster than baseline; no Ascend condition produced a valid final delivery.</p><a href="https://openreview.net/forum?id=Qq15UzoppM" target="_blank" rel="noopener">Paper</a> · <a href="https://github.com/FreedomIntelligence/AccelMark" target="_blank" rel="noopener">GitHub (related platform)</a></div></div>
    <div class="impact-paper"><span>Research manuscript</span><div><strong>OS-Native Agents: Autonomous Task Management in the Dynamic Mobile World</strong><p>Qiming Zhu, Shunian Chen, Wentao Ge, Zhengyang Tang, Xiaoguang Li, Pinjia He, Benyou Wang</p><p>Integrates persistent task management with native OS state, capabilities, events, and permission checks. On Android, DynamicWorld contains 88 tasks across 16 scenarios. The supplied manuscript reports 78.4% task success with GPT-5.4 over three runs, versus 47.0% for MobileClaw, with 51.1% fewer model calls.</p><a href="https://openreview.net/forum?id=ZwOoQcLotV" target="_blank" rel="noopener">Paper</a> · <a href="https://github.com/FreedomIntelligence/OSNativeAgent" target="_blank" rel="noopener">GitHub (private repository)</a></div></div>
  </div>

</section>

<section class="impact-section">
  <h2>Evidence and Resources</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper"><span>1–3</span><div><strong>Arabic LLM research</strong><p>AceGPT at NAACL 2024, Progressive Vocabulary Expansion at ACL 2025, and Native Alignment at NeurIPS 2024.</p><a href="https://aclanthology.org/2024.naacl-long.450/" target="_blank" rel="noopener">AceGPT</a> · <a href="https://aclanthology.org/2025.acl-long.100/" target="_blank" rel="noopener">ACL 2025</a> · <a href="https://proceedings.neurips.cc/paper_files/paper/2024/hash/195c4e2910bedabd813f9fe4e70c642c-Abstract-Conference.html" target="_blank" rel="noopener">NeurIPS 2024</a></div></div>
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

<div data-lang="zh">

<div class="impact-kicker">国产加速器与 AI 系统</div>

<div class="impact-tags">
  <span class="impact-tag">昇腾</span><span class="impact-tag">大规模训练</span><span class="impact-tag">推理加速</span><span class="impact-tag">Kernel 优化</span><span class="impact-tag">AccelMark</span><span class="impact-tag">NumericBridge</span><span class="impact-tag">AscendAgent</span><span class="impact-tag">开放生态</span>
</div>

<div class="impact-actions">
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/NumericBridge" target="_blank" rel="noopener">NumericBridge</a>
  <a class="impact-action" href="https://github.com/FreedomIntelligence/AccelMark" target="_blank" rel="noopener">AccelMark</a>
  <a class="impact-action secondary" href="https://huggingface.co/FreedomIntelligence/openPangu-Embedded-7B" target="_blank" rel="noopener">昇腾上的 openPangu</a>
  <a class="impact-action secondary" href="https://aclanthology.org/2025.acl-long.100/" target="_blank" rel="noopener">ACL 2025</a>
  <a class="impact-action secondary" href="/projects/llm-efficiency-ai-infra/">大模型基础设施</a>
</div>

<div class="impact-hero"><img src="/assets/img/native-compute-stack.svg" alt="国产 AI 算力适配技术栈：从上层应用到异构加速器"></div>

<p class="impact-lede"><strong>我们的目标不只是让大模型在国产 AI 加速器上跑起来，更要让它们跑得高效、可靠、可扩展。</strong>团队已打通一条端到端的技术链条，涵盖昇腾大规模训练、模型与框架适配、推理加速、算子与 Kernel 优化、基准验证、真实场景交付和开放生态建设。</p>

<section class="impact-section">
  <h2>昇腾大规模训练</h2>
  <p><strong>团队有在数千块国产 AI 处理器上训练大模型的一手经验。</strong>AraLLaMA/AceGPT-v1.5 项目与鹏城实验室等机构合作，使用 <strong>2,368 块华为昇腾 910A 处理器</strong>训练了 7B 和 13B 阿拉伯语模型，涵盖持续预训练、渐进式词表扩展和模型对齐。</p>
  <div class="impact-paper-trail">
    <div class="impact-paper"><span>NAACL 2024 主会长文</span><div><strong>AceGPT, Localizing Large Language Models in Arabic</strong><p>Huang Huang, Fei Yu, Jianqing Zhu, Xuening Sun, Hao Cheng, Dingjie Song, Zhihong Chen, Abdulmohsen Alharthi, Bang An, Juncai He, Ziche Liu, Zhiyi Zhang, Junying Chen, Jianquan Li, Benyou Wang, Lian Zhang, Ruoyu Sun, Xiang Wan, Haizhou Li, Jinchao Xu</p><p>围绕阿拉伯语和本地文化价值观开展模型本地化，结合持续预训练、监督微调及基于 AI 反馈的强化学习，发布模型、数据与代码，为后续词表扩展和预训练对齐研究奠定基础。</p><a href="https://aclanthology.org/2024.naacl-long.450/" target="_blank" rel="noopener">论文</a> · <a href="https://github.com/FreedomIntelligence/AceGPT" target="_blank" rel="noopener">GitHub</a></div></div>
    <div class="impact-paper"><span>ACL 2025 主会长文</span><div><strong>Second Language (Arabic) Acquisition of LLMs via Progressive Vocabulary Expansion</strong><p>Jianqing Zhu, Huang Huang, Zhihang Lin, Juhao Liang, Zhengyang Tang, Khalid Almubarak, Abdulmohsen Alharthik, Bang An, Juncai He, Xiangbo Wu, Fei Yu, Junying Chen, Zhuoheng Ma, Yuhao Du, He Zhang, Saied Alshahrani, Emad A. Alghamdi, Lian Zhang, Ruoyu Sun, Haizhou Li, Benyou Wang, Jinchao Xu</p><p>提出渐进式阿拉伯语词表扩展方法，形成 AraLLaMA／AceGPT-v1.5 系列。正式论文第 4.2 节记录：7B 和 13B 模型使用 2,368 块 Ascend 910A 处理器训练，训练时长分别为 7 天和 11 天，为团队的大规模昇腾训练能力提供直接依据。</p><a href="https://aclanthology.org/2025.acl-long.100/" target="_blank" rel="noopener">论文</a> · <a href="https://github.com/FreedomIntelligence/AraLLaMa" target="_blank" rel="noopener">GitHub</a></div></div>
    <div class="impact-paper"><span>NeurIPS 2024 主会</span><div><strong>Alignment at Pre-training! Towards Native Alignment for Arabic LLMs</strong><p>Juhao Liang, Zhenyang Cai, Jianqing Zhu, Huang Huang, Kewei Zong, Bang An, Abdulmohsen Alharthi, Juncai He, Lian Zhang, Haizhou Li, Benyou Wang, Jinchao Xu</p><p>研究在预训练阶段通过数据清洗与对齐改写引入价值观对齐，并发布阿拉伯语模型。该研究补充了团队在数据质量、模型训练和对齐方法上的积累。</p><a href="https://proceedings.neurips.cc/paper_files/paper/2024/hash/195c4e2910bedabd813f9fe4e70c642c-Abstract-Conference.html" target="_blank" rel="noopener">论文</a> · <a href="https://github.com/FreedomIntelligence/AceGPT-v2" target="_blank" rel="noopener">GitHub</a></div></div>
  </div>
</section>

<section class="impact-section">
  <h2>全栈算力优化</h2>
  <p><strong>团队的能力已从使用国产算力，发展为系统性地优化国产算力。</strong>优化覆盖模型、推理服务系统、推理框架、算子和 Kernel 各个层次。</p>
  <div class="impact-storyline">
    <div class="impact-step"><span>模型</span><div><strong>降低模型侧的推理成本</strong><p>压缩系统提示词，管理或压缩 KV 缓存，减轻显存压力，减少重复计算。</p></div></div>
    <div class="impact-step"><span>运行时</span><div><strong>调优推理链路</strong><p>针对目标负载和硬件栈，适配并优化 vLLM、SGLang、FlashAttention、FlashInfer 等组件。</p></div></div>
    <div class="impact-step"><span>Kernel</span><div><strong>深入框架之下优化</strong><p>分析性能瓶颈，改进 CANN 算子、Kernel、数据搬运、图执行和硬件利用率。</p></div></div>
    <div class="impact-step"><span>服务</span><div><strong>验证生产环境表现</strong><p>测量延迟、吞吐量、并发、利用率、可靠性、安全性和部署成本，而不只是检查能否兼容。</p></div></div>
  </div>
</section>


<section class="impact-section">
  <h2>NumericBridge 规模化软件库修复</h2>
  <p>我们通过 NumericBridge 围绕现有 AI 软件库中的数值精度差异与兼容性问题开展规模化排查、诊断和修复，覆盖推理、监督微调和强化学习技术栈。项目把环境适配、精度比对、问题定位、修复和原始工作负载验证连接起来，并将验证结果沉淀为可复用的社区案例。</p>
  <p>每次修复关联模型、硬件及框架版本，并在原始负载上检查精度与性能。<a href="https://github.com/FreedomIntelligence/NumericBridge" target="_blank" rel="noopener">GitHub</a> · <a href="https://freedomintelligence.github.io/NumericBridge/" target="_blank" rel="noopener">项目与案例</a></p>

</section>

<section class="impact-section">
  <h2>基准验证与开放评测</h2>
  <p>AccelMark 为不同加速卡提供统一负载、runner 版本、环境指纹与准确性记录；AccelMark-Agent 进一步评测智能体能否交付有效的推理优化。后者覆盖 A100、RTX 4090、V100 和 Ascend 910C，其中 A100 完整交叉实验包含 2,000 轮搜索。Ascend 已进入迁移评测，但所附稿件该轨道尚无有效最终交付。</p>

  <div class="impact-grid">
    <div class="impact-card impact-resource"><strong>CANNBench</strong><p>团队方案已在<strong>多个昇腾算子优化任务中位居前列</strong>。榜单会随时间变化，对外引用时应注明查询日期，或附上存档截图。</p><a href="https://gitcode.com/cann/cann-bench/blob/master/README.md" target="_blank" rel="noopener">评测基准</a></div>
    <div class="impact-card impact-resource"><strong>AccelMark</strong><p>面向大模型推理的开放、社区驱动评测基准，覆盖 NVIDIA、AMD、昇腾、Apple Silicon、TPU 和新兴加速器。</p><a href="https://github.com/FreedomIntelligence/AccelMark" target="_blank" rel="noopener">开放评测基准</a></div>
    <div class="impact-card"><strong>从设计上保证可复现</strong><p>每条结果都把性能数据与环境元数据、runner 版本、执行输出和复现说明关联起来。</p></div>
    <div class="impact-card"><strong>软硬件同台评测</strong><p>AccelMark 希望在统一的实验框架下，让硬件与 vLLM/SGLang、KV 缓存方法、FlashAttention/FlashInfer、算子和 Kernel 同台对比。</p></div>
  </div>
</section>

<section class="impact-section">
  <h2>医院与产业交付</h2>
  <p><strong>真实应用把优化变成可衡量的工程需求。</strong>医院工作流对隐私、延迟、并发、可靠性和部署成本提出了具体约束，这些要求又反过来推动系统优化和硬件适配。</p>
  <div class="impact-grid">
    <div class="impact-card impact-resource"><strong>OpenClaw 与华佗GPT</strong><p>团队支持了香港中文大学（深圳）医院的本地化部署。系统以只读方式访问医院信息系统，有助于保障医疗数据和系统的完整性。</p><a href="https://med.cuhk.edu.cn/article/1746" target="_blank" rel="noopener">医院部署报道</a></div>
    <div class="impact-card"><strong>健康体检与管理</strong><p>系统可推荐定制化的体检套餐，并利用夜间闲置算力批量处理体检记录，生成报告和个性化的后续健康指导。</p></div>
    <div class="impact-card impact-resource"><strong>AI for Computing 合作</strong><p>团队与 KernelCAT 的研发方智子芯元等企业合作，在 CUDA 和 CANN 软件栈上开展模型迁移、框架调优、推理加速和算子优化。</p><a href="https://kernelcat.cn/" target="_blank" rel="noopener">KernelCAT</a></div>
  </div>
  <div class="impact-storyline">
    <div class="impact-step"><span>需求</span><div><strong>应用定义约束</strong><p>安全、延迟、吞吐量、并发、可靠性和成本，都成为具体的目标。</p></div></div>
    <div class="impact-step"><span>系统</span><div><strong>优化回应需求</strong><p>模型、运行时、缓存、算子和 Kernel，都针对真实生产负载调优。</p></div></div>
    <div class="impact-step"><span>算力</span><div><strong>适配形成闭环</strong><p>这些方法被移植到国产和其他异构加速器软件栈上，并经过测量与验证。</p></div></div>
  </div>
</section>

<section class="impact-section">
  <h2>开放模型、数据与社区基础设施</h2>
  <p><strong>长期目标是把项目经验沉淀为可复用的社区基础设施。</strong>开放的评测基准、模型、数据集、推理部署方案和 Kernel 知识，可以减少加速器生态碎片化带来的重复适配工作。</p>
  <div class="impact-grid">
    <div class="impact-card impact-resource"><strong>100+ 个开源模型</strong><p>FreedomIntelligence 公开了 100 多个模型仓库，涵盖华佗GPT、AceGPT、ShizhenGPT、openPangu 等系列及相关发布。</p><a href="https://huggingface.co/FreedomIntelligence/models" target="_blank" rel="noopener">Hugging Face</a></div>
    <div class="impact-card impact-resource"><strong>昇腾上的 openPangu</strong><p>openPangu-Embedded-7B 在昇腾 NPU 上从零开始训练，使用约 <strong>19 万亿 token</strong>。</p><a href="https://huggingface.co/FreedomIntelligence/openPangu-Embedded-7B" target="_blank" rel="noopener">模型卡</a></div>
    <div class="impact-card impact-resource"><strong>百万级社区使用量</strong><p>团队的定期统计显示，累计下载量超过 <strong>100 万次</strong>，单个模型单月下载量峰值超过 <strong>20 万次</strong>。这类滚动更新的数字，发布时应注明日期并附存档证据。</p><a href="https://huggingface.co/FreedomIntelligence" target="_blank" rel="noopener">组织主页</a></div>
    <div class="impact-card impact-resource"><strong>TRL 文档示例</strong><p>Hugging Face TRL 在文档中以 FreedomIntelligence/medical-o1-reasoning-SFT 为例，演示如何预处理非标准格式的数据集。</p><a href="https://huggingface.co/docs/trl/sft_trainer" target="_blank" rel="noopener">SFTTrainer 文档</a></div>
    <div class="impact-card impact-resource"><strong>10,000+ GitHub Stars</strong><p>FreedomIntelligence 的代表性仓库累计获得超过 <strong>1 万个公开可见的 Star</strong>。</p><a href="https://github.com/FreedomIntelligence" target="_blank" rel="noopener">GitHub 组织主页</a></div>
  </div>
</section>


<section class="impact-section">
  <h2>华为联合课程与研发项目</h2>
  <p>我们依托自然语言处理课程 Natural Language Processing（CSC5051 / CSC6052 / MDS5110），与华为联合开展 Ascend（昇腾）与大模型相关教学，并获得相关项目支持。合作内容还包括 10 月 23 日的 openPangu 高校行活动，将课程教学与国产算力生态实践相结合。</p>
  <p><a href="https://nlp-course-cuhksz.github.io/?lang=en" target="_blank" rel="noopener">课程官网</a></p>
  <p>团队还围绕 OP 专项技术合作项目“面向可信医疗大模型的大规模高质量语料构建与模型优化”开展合作，研究 MedWard 医疗语料建设及基于 openPangu-7B、昇腾 910B 的模型优化。项目规划包括医疗文本筛选、多维度标注、医生审核和数据质量实验；这些内容属于研发计划。</p>

</section>

<section class="impact-section">
  <h2>移动智能体与鸿蒙 OS 合作</h2>
  <p>我们与华为在 Mobile Agent 方向开展合作，推进移动智能体与鸿蒙 OS 的兼容和适配，关注动态环境下的跨应用任务执行、原生系统能力调用和用户授权。</p>
  <p>相关研究 OS-Native Agents 将系统事件、任务状态和权限检查结合起来，让智能体持续管理任务。论文报告的实现与评测平台为 Android；鸿蒙适配是合作方向，论文中的 Android 指标不代表鸿蒙实测结果。</p>
  <p><a href="/projects/mobile-agent/" target="_blank" rel="noopener">移动智能体研究</a></p>

</section>

<section class="impact-section">
  <h2>新增论文与完整作者</h2>
  <p>以下题名、结果依据团队提供的论文版本，作者按团队提供的顺序完整列示。三项工作列为论文稿，当前审稿状态请以论文页面为准。</p>
  <div class="impact-paper-trail">
    <div class="impact-paper"><span>2026 年论文稿</span><div><strong>AscendAgent: Evolving Context to Fit the Harness in CANN Kernel Optimization</strong><p>Ruijie Zhang, Juhao Liang, Youxin Jiang, Zhihang Lin, Tian Ding, Benyou Wang</p><p>在固定优化执行框架下演化可复用知识，通过任务内程序图搜索和任务间工作流回放积累算子优化经验。实验涵盖昇腾 NPU 与 NVIDIA GPU、4 个算子基准和 5 个语言模型，每项任务预算为 40 次候选编译。采用 Kimi K3 时，CANN-Bench 和 TritonBench-G 的平均最佳加速比分别为 1.40 倍和 1.75 倍，固定初始知识的同框架基线分别为 1.21 倍和 1.36 倍。</p><a href="https://openreview.net/forum?id=gtuspdBfQo" target="_blank" rel="noopener">论文</a> · <a href="https://github.com/FreedomIntelligence/KernelBridge" target="_blank" rel="noopener">GitHub（KernelBridge）</a></div></div>
    <div class="impact-paper"><span>2026 年论文稿</span><div><strong>AccelMark-Agent: Benchmarking Inference-Optimization Agents Across Accelerators and Workloads</strong><p>Juhao Liang, Youxin Jiang, Zhiyuan Zhang, Ruijie Zhang, Zhihang Lin, Yuxin Fu, Shiqi Zhang, Siyu Li, Xiaolong Liu, Prayag Tiwari, Minchen Yu, Li Zeng, Zizhong Chen, Benyou Wang</p><p>评测智能体对完整大模型推理服务的优化能力，覆盖 5 类负载、5 个主干模型和 2 种智能体执行框架。A100 完整交叉矩阵包含 2,000 轮搜索，并扩展至 RTX 4090、V100 和 Ascend 910C。A100 的 50 个配置单元中，26 个交付了经验证且比基线快 2% 以上的修改产物；Ascend 迁移评测尚无有效最终交付。</p><a href="https://openreview.net/forum?id=Qq15UzoppM" target="_blank" rel="noopener">论文</a> · <a href="https://github.com/FreedomIntelligence/AccelMark" target="_blank" rel="noopener">GitHub（相关平台）</a></div></div>
    <div class="impact-paper"><span>2026 年论文稿</span><div><strong>OS-Native Agents: Autonomous Task Management in the Dynamic Mobile World</strong><p>Qiming Zhu, Shunian Chen, Wentao Ge, Zhengyang Tang, Xiaoguang Li, Pinjia He, Benyou Wang</p><p>提出与操作系统原生状态、能力和权限机制集成的智能体，使其根据环境变化持续管理任务。DynamicWorld 包含 16 个场景、88 项任务。所附论文在 Android 上报告：GPT-5.4 的三次运行平均任务成功率为 78.4%，MobileClaw 为 47.0%，模型调用次数减少 51.1%。</p><a href="https://openreview.net/forum?id=ZwOoQcLotV" target="_blank" rel="noopener">论文</a> · <a href="https://github.com/FreedomIntelligence/OSNativeAgent" target="_blank" rel="noopener">GitHub（私有仓库）</a></div></div>
  </div>

</section>

<section class="impact-section">
  <h2>佐证与资源</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper"><span>1–3</span><div><strong>阿拉伯语大模型研究</strong><p>NAACL 2024 的 AceGPT、ACL 2025 的 Progressive Vocabulary Expansion，以及 NeurIPS 2024 的 Native Alignment。</p><a href="https://aclanthology.org/2024.naacl-long.450/" target="_blank" rel="noopener">AceGPT</a> · <a href="https://aclanthology.org/2025.acl-long.100/" target="_blank" rel="noopener">ACL 2025</a> · <a href="https://proceedings.neurips.cc/paper_files/paper/2024/hash/195c4e2910bedabd813f9fe4e70c642c-Abstract-Conference.html" target="_blank" rel="noopener">NeurIPS 2024</a></div></div>
    <div class="impact-paper"><span>4–5</span><div><strong>CANNBench 与 AccelMark</strong><p>昇腾算子级评测，以及面向异构加速器的开放推理基准评测。</p><a href="https://gitcode.com/cann/cann-bench/blob/master/README.md" target="_blank" rel="noopener">CANNBench</a> · <a href="https://github.com/FreedomIntelligence/AccelMark" target="_blank" rel="noopener">AccelMark</a></div></div>
    <div class="impact-paper"><span>6</span><div><strong>医院部署</strong><p>关于 OpenClaw 与华佗GPT 本地化部署、只读访问和健康体检工作流的官方报道。</p><a href="https://med.cuhk.edu.cn/article/1746" target="_blank" rel="noopener">港中大（深圳）医学院</a></div></div>
    <div class="impact-paper"><span>7–10</span><div><strong>开源生态</strong><p>Hugging Face 和 GitHub 上的 FreedomIntelligence、openPangu-Embedded-7B，以及 TRL 文档。</p><a href="https://huggingface.co/FreedomIntelligence" target="_blank" rel="noopener">Hugging Face</a> · <a href="https://huggingface.co/FreedomIntelligence/openPangu-Embedded-7B" target="_blank" rel="noopener">openPangu</a> · <a href="https://huggingface.co/docs/trl/sft_trainer" target="_blank" rel="noopener">TRL</a> · <a href="https://github.com/FreedomIntelligence" target="_blank" rel="noopener">GitHub</a></div></div>
  </div>
</section>

<section class="impact-section">
  <h2>从“能用”到高效、可扩展</h2>
  <p class="impact-lede"><strong>这条能力路径很清晰：</strong>在数千块国产处理器上训练模型；优化整个软件栈；用评测基准验证性能；解决医院和产业中的真实问题；再把由此积累的知识转化为开放的评测基准、模型和社区基础设施。</p>
</section>

<div class="impact-actions"><a class="impact-action secondary" href="/projects/">返回项目页</a></div>

</div>

</div>
