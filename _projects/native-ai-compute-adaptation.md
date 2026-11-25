---
layout: page
title: "AI Compute Research and Huawei Collaboration"
title_zh: "国产算力研究与华为合作"
direction: ai-for-infra
description: "FreedomIntelligence · Benyou Wang’s team"
description_zh: "FreedomIntelligence 王本友团队"
img: assets/img/native-compute-stack.svg
importance: 2
category: work
github: https://github.com/FreedomIntelligence/AccelMark
---

<style>
.post-header, .post > article, .post > .rx-more { max-width: 48rem; margin-left: auto; margin-right: auto; }
.post-header .post-title { font-size: clamp(1.65rem, 3.2vw, 2.15rem); line-height: 1.4; font-weight: 600; }
.post-header .post-description { font-size: 1rem; }
.native-compute-story { color: var(--global-text-color); font-size: 1.0625rem; line-height: 1.85; }
.native-compute-story p { margin: 0 0 1.15rem; }
.native-compute-story a { color: inherit; text-decoration: underline; text-underline-offset: 3px; overflow-wrap: anywhere; }
.native-compute-story h2 { margin: 2.4rem 0 1.25rem; font-size: 1.3rem; font-weight: 600; }
.native-compute-story .paper-reference { margin: 0 0 1.5rem; font-size: 1rem; line-height: 1.65; scroll-margin-top: 5rem; }
.native-compute-story .paper-reference p { margin: 0 0 .3rem; }
.native-compute-story .paper-reference strong { font-weight: 600; }
@media (max-width: 600px) { .native-compute-story { font-size: 1rem; line-height: 1.85; } }
</style>

<div class="native-compute-story">

<div data-lang="en">

<p>We study how to train and deploy large language models on China-developed AI hardware. Our collaboration with Huawei includes model research, mobile agents, and teaching. This work draws on our experience training Arabic language models.</p>

<p>In AceGPT, we used continued pre-training, instruction tuning, and reinforcement learning from AI feedback to adapt models to Arabic and local cultural values. <a href="#paper-1-en" aria-label="Reference 1">[1]</a> Native Alignment brought alignment into pre-training through data cleaning and rewriting. <a href="#paper-2-en" aria-label="Reference 2">[2]</a> In AraLLaMA / AceGPT-v1.5, we studied progressive vocabulary expansion and worked with partner institutions to train 7B and 13B models on 2,368 Huawei Ascend 910A processors. The two training runs took 7 and 11 days, respectively. <a href="#paper-3-en" aria-label="Reference 3">[3]</a></p>

<p>Training and deployment also require work on the software around a model. Through <a href="https://github.com/FreedomIntelligence/NumericBridge" target="_blank" rel="noopener">NumericBridge</a>, we investigate and repair numerical accuracy and compatibility problems across existing AI libraries used for inference, supervised fine-tuning, and reinforcement learning. Each repair records the model, hardware, and framework versions, traces the source of a discrepancy, and checks accuracy and performance on the original workload. The project publishes <a href="https://freedomintelligence.github.io/NumericBridge/" target="_blank" rel="noopener">cases and validation records</a> for other developers to consult and reuse.</p>

<p>After a repair, we need to understand how the same workload performs on different accelerators. <a href="https://github.com/FreedomIntelligence/AccelMark" target="_blank" rel="noopener">AccelMark</a> standardizes workloads, runners, and environment records to compare throughput, latency, and accuracy across hardware including NVIDIA, AMD, and Ascend. AccelMark-Agent extends this work to agents that optimize inference services and deliver independently testable results. <a href="#paper-4-en" aria-label="Reference 4">[4]</a> Its A100 experiments contain 2,000 search rounds, with additional RTX 4090, V100, and Ascend 910C tracks. Of 50 A100 configurations, 26 produced validated modified artifacts more than 2% faster than the baseline. The Ascend track did not produce a valid final delivery in the reported experiments.</p>

<p>When the bottleneck lies in a kernel, we work further down the software stack. AscendAgent searches candidate programs within a fixed optimization harness and retains knowledge for later tasks. <a href="#paper-5-en" aria-label="Reference 5">[5]</a> With Kimi K3 and a budget of 40 candidate compilations per task, its mean best speedup on CANN-Bench was 1.40×, compared with 1.21× for the same harness with frozen initial knowledge. The code is in <a href="https://github.com/FreedomIntelligence/KernelBridge" target="_blank" rel="noopener">KernelBridge</a>, which also provides CANN/NPU kernel evaluation and diagnostic tools. We collaborate with industry partners including the developers of <a href="https://kernelcat.cn/" target="_blank" rel="noopener">KernelCAT</a> on model migration, framework tuning, and kernel optimization.</p>

<p>Medical applications give this work specific requirements. Our OP technical cooperation project with Huawei, focused on large-scale high-quality corpus construction and model optimization for trustworthy medical LLMs, plans to build the MedWard corpus through medical-text filtering, multidimensional annotation, and physician review. It will study how data quality affects models, with experiments planned on openPangu-7B and Ascend 910B. Our public model resources also include <a href="https://huggingface.co/FreedomIntelligence/openPangu-Embedded-7B" target="_blank" rel="noopener">openPangu-Embedded-7B</a>.</p>

<p>For deployment, we supported the local use of OpenClaw with HuatuoGPT at The Chinese University of Hong Kong, Shenzhen Hospital. The system accesses hospital information systems in read-only mode and supports tasks such as recommending health-check packages and processing examination records. The <a href="https://med.cuhk.edu.cn/article/1746" target="_blank" rel="noopener">School of Medicine report</a> describes this work. Data access, response times, and operating costs in a hospital provide concrete conditions under which to assess model adaptation and inference optimization.</p>

<p>Mobile devices introduce a changing operating-system environment. We collaborate with Huawei on mobile agents and their compatibility with HarmonyOS. OS-Native Agents combines task state, system events, native interfaces, and permission checks so that an agent can manage tasks as its environment changes. <a href="#paper-6-en" aria-label="Reference 6">[6]</a> The paper evaluates an Android implementation on DynamicWorld, with 88 tasks across 16 scenarios. With GPT-5.4, average task success over three runs was 78.4%, compared with 47.0% for MobileClaw. These are Android results; HarmonyOS compatibility is a separate part of the collaboration.</p>

<p>This research also informs our teaching. Through <a href="https://nlp-course-cuhksz.github.io/?lang=en" target="_blank" rel="noopener">Natural Language Processing</a> (CSC5051 / CSC6052 / MDS5110), we collaborate with Huawei on Ascend and large-model teaching and have received support for related projects. The openPangu university outreach event on October 23 is part of this collaboration. The course and activities introduce students to model training and work on China-developed AI hardware, with public code they can use to explore software repair, accelerator evaluation, and kernel optimization.</p>

<h2>Papers</h2>

<div class="paper-reference" id="paper-1-en">

<p><strong>[1] AceGPT, Localizing Large Language Models in Arabic</strong></p>

<p>Huang Huang, Fei Yu, Jianqing Zhu, Xuening Sun, Hao Cheng, Dingjie Song, Zhihong Chen, Abdulmohsen Alharthi, Bang An, Juncai He, Ziche Liu, Zhiyi Zhang, Junying Chen, Jianquan Li, Benyou Wang, Lian Zhang, Ruoyu Sun, Xiang Wan, Haizhou Li, Jinchao Xu.</p>

<p>NAACL 2024 · <a href="https://aclanthology.org/2024.naacl-long.450/" target="_blank" rel="noopener">Paper</a></p>

<p>GitHub: <a href="https://github.com/FreedomIntelligence/AceGPT" target="_blank" rel="noopener">https://github.com/FreedomIntelligence/AceGPT</a></p>

</div>

<div class="paper-reference" id="paper-2-en">

<p><strong>[2] Alignment at Pre-training! Towards Native Alignment for Arabic LLMs</strong></p>

<p>Juhao Liang, Zhenyang Cai, Jianqing Zhu, Huang Huang, Kewei Zong, Bang An, Abdulmohsen Alharthi, Juncai He, Lian Zhang, Haizhou Li, Benyou Wang, Jinchao Xu.</p>

<p>NeurIPS 2024 · <a href="https://proceedings.neurips.cc/paper_files/paper/2024/hash/195c4e2910bedabd813f9fe4e70c642c-Abstract-Conference.html" target="_blank" rel="noopener">Paper</a></p>

<p>GitHub: <a href="https://github.com/FreedomIntelligence/AceGPT-v2" target="_blank" rel="noopener">https://github.com/FreedomIntelligence/AceGPT-v2</a></p>

</div>

<div class="paper-reference" id="paper-3-en">

<p><strong>[3] Second Language (Arabic) Acquisition of LLMs via Progressive Vocabulary Expansion</strong></p>

<p>Jianqing Zhu, Huang Huang, Zhihang Lin, Juhao Liang, Zhengyang Tang, Khalid Almubarak, Abdulmohsen Alharthik, Bang An, Juncai He, Xiangbo Wu, Fei Yu, Junying Chen, Zhuoheng Ma, Yuhao Du, He Zhang, Saied Alshahrani, Emad A. Alghamdi, Lian Zhang, Ruoyu Sun, Haizhou Li, Benyou Wang, Jinchao Xu.</p>

<p>ACL 2025 · <a href="https://aclanthology.org/2025.acl-long.100/" target="_blank" rel="noopener">Paper</a></p>

<p>GitHub: <a href="https://github.com/FreedomIntelligence/AraLLaMa" target="_blank" rel="noopener">https://github.com/FreedomIntelligence/AraLLaMa</a></p>

</div>

<div class="paper-reference" id="paper-4-en">

<p><strong>[4] AccelMark-Agent: Benchmarking Inference-Optimization Agents Across Accelerators and Workloads</strong></p>

<p>Juhao Liang, Youxin Jiang, Zhiyuan Zhang, Ruijie Zhang, Zhihang Lin, Yuxin Fu, Shiqi Zhang, Siyu Li, Xiaolong Liu, Prayag Tiwari, Minchen Yu, Li Zeng, Zizhong Chen, Benyou Wang.</p>

<p>Research manuscript · <a href="https://openreview.net/forum?id=Qq15UzoppM" target="_blank" rel="noopener">Paper</a></p>

<p>GitHub (related benchmark platform): <a href="https://github.com/FreedomIntelligence/AccelMark" target="_blank" rel="noopener">https://github.com/FreedomIntelligence/AccelMark</a></p>

</div>

<div class="paper-reference" id="paper-5-en">

<p><strong>[5] AscendAgent: Evolving Context to Fit the Harness in CANN Kernel Optimization</strong></p>

<p>Ruijie Zhang, Juhao Liang, Youxin Jiang, Zhihang Lin, Tian Ding, Benyou Wang.</p>

<p>Research manuscript · <a href="https://openreview.net/forum?id=gtuspdBfQo" target="_blank" rel="noopener">Paper</a></p>

<p>GitHub: <a href="https://github.com/FreedomIntelligence/KernelBridge" target="_blank" rel="noopener">https://github.com/FreedomIntelligence/KernelBridge</a></p>

</div>

<div class="paper-reference" id="paper-6-en">

<p><strong>[6] OS-Native Agents: Autonomous Task Management in the Dynamic Mobile World</strong></p>

<p>Qiming Zhu, Shunian Chen, Wentao Ge, Zhengyang Tang, Xiaoguang Li, Pinjia He, Benyou Wang.</p>

<p>Research manuscript · <a href="https://openreview.net/forum?id=ZwOoQcLotV" target="_blank" rel="noopener">Paper</a></p>

<p>GitHub (private repository): <a href="https://github.com/FreedomIntelligence/OSNativeAgent" target="_blank" rel="noopener">https://github.com/FreedomIntelligence/OSNativeAgent</a></p>

</div>

</div>

<div data-lang="zh">

<p>我们围绕大模型在国产算力上的训练和应用开展研究，并与华为在模型研发、移动智能体和课程教学方面合作。这些工作的基础，是我们在阿拉伯语大模型训练中积累的经验。</p>

<p>在 AceGPT 中，我们通过持续预训练、指令微调和基于 AI 反馈的强化学习，让模型适应阿拉伯语及当地文化。<a href="#paper-1-zh" aria-label="论文 1">[1]</a> Native Alignment 则把对齐工作提前到预训练阶段，研究如何通过数据清洗和改写改善模型的价值观对齐。<a href="#paper-2-zh" aria-label="论文 2">[2]</a> 在 AraLLaMA／AceGPT-v1.5 中，我们进一步研究渐进式词表扩展，并与合作机构使用 2,368 块华为昇腾 910A 处理器训练了 7B 和 13B 模型，训练时长分别为 7 天和 11 天。<a href="#paper-3-zh" aria-label="论文 3">[3]</a></p>

<p>训练和部署大模型，需要处理模型之外的软件问题。我们通过 <a href="https://github.com/FreedomIntelligence/NumericBridge" target="_blank" rel="noopener">NumericBridge</a> 大规模排查和修复现有 AI 软件库中的数值精度与兼容性问题，涉及推理、监督微调和强化学习。一次修复需要记录模型、硬件和框架版本，定位差异来源，再回到原始任务中检查修复后的精度和性能。项目公开了相关<a href="https://freedomintelligence.github.io/NumericBridge/" target="_blank" rel="noopener">案例与验证记录</a>，便于其他开发者查找和复用。</p>

<p>修复之后，还需要知道同一项任务在不同加速卡上表现如何。<a href="https://github.com/FreedomIntelligence/AccelMark" target="_blank" rel="noopener">AccelMark</a> 为此统一工作负载、运行程序和环境记录，比较吞吐量、延迟及准确性，覆盖 NVIDIA、AMD、昇腾等硬件。AccelMark-Agent 在此基础上研究智能体能否完成推理服务优化，并交付可复测的结果。<a href="#paper-4-zh" aria-label="论文 4">[4]</a> 论文的 A100 实验包含 2,000 轮搜索，同时开展了 RTX 4090、V100 和 Ascend 910C 评测。A100 的 50 个配置单元中，26 个交付了经验证且比基线快 2% 以上的修改产物；Ascend 轨道在该版本实验中尚未产生有效的最终交付。</p>

<p>当性能瓶颈落在算子上，我们把研究进一步推进到 CANN 等底层软件。AscendAgent 在固定的优化框架中搜索候选程序，并保留可供后续任务使用的优化经验。<a href="#paper-5-zh" aria-label="论文 5">[5]</a> 采用 Kimi K3、每项任务最多编译 40 个候选程序时，CANN-Bench 上的平均最佳加速比为 1.40 倍，同框架固定初始知识的基线为 1.21 倍。对应代码位于 <a href="https://github.com/FreedomIntelligence/KernelBridge" target="_blank" rel="noopener">KernelBridge</a>，其中还提供了 CANN／NPU 算子的评测和诊断工具。我们也与 <a href="https://kernelcat.cn/" target="_blank" rel="noopener">KernelCAT</a> 的研发方智子芯元等企业合作，开展模型迁移、框架调优和算子优化。</p>

<p>医疗应用为这些工作提出了具体需求。我们与华为的 OP 专项技术合作项目“面向可信医疗大模型的大规模高质量语料构建与模型优化”，计划建设 MedWard 医疗语料库，结合医疗文本筛选、多维度标注和医生审核，研究数据质量对模型的影响；模型实验拟采用 openPangu-7B 和昇腾 910B。团队公开的模型资源中也包括 <a href="https://huggingface.co/FreedomIntelligence/openPangu-Embedded-7B" target="_blank" rel="noopener">openPangu-Embedded-7B</a>。</p>

<p>在应用端，我们支持了香港中文大学（深圳）医院的 OpenClaw 与华佗GPT 本地部署。系统以只读方式访问医院信息系统，并用于体检套餐推荐、体检记录处理等工作。<a href="https://med.cuhk.edu.cn/article/1746" target="_blank" rel="noopener">医学院的公开报道</a>介绍了这一实践。医院环境下的数据访问、响应速度和运行成本，也使模型适配和推理优化有了具体的检验场景。</p>

<p>移动端则把问题带到了不断变化的操作系统环境中。我们与华为在 Mobile Agent 方向合作，推进移动智能体与鸿蒙 OS 的兼容和适配。相关论文 OS-Native Agents 将任务状态、系统事件、原生接口和权限检查结合起来，使智能体能够根据环境变化持续管理任务。<a href="#paper-6-zh" aria-label="论文 6">[6]</a> 论文在 Android 上构建了包含 16 个场景、88 项任务的 DynamicWorld；采用 GPT-5.4 时，三次运行的平均任务成功率为 78.4%，MobileClaw 为 47.0%。这些结果来自 Android 实验，鸿蒙兼容适配是另行推进的合作工作。</p>

<p>这些研究也进入了教学。我们依托 <a href="https://nlp-course-cuhksz.github.io/?lang=en" target="_blank" rel="noopener">Natural Language Processing 课程</a>（CSC5051／CSC6052／MDS5110），与华为联合开展昇腾和大模型相关教学，并获得相关项目支持。10 月 23 日的 openPangu 高校行活动也是合作的一部分。课程和活动把模型训练与国产算力实践带给学生，学生可以结合公开代码，进一步了解软件修复、跨卡评测和算子优化中的实际问题。</p>

<h2>相关论文</h2>

<div class="paper-reference" id="paper-1-zh">

<p><strong>[1] AceGPT, Localizing Large Language Models in Arabic</strong></p>

<p>Huang Huang, Fei Yu, Jianqing Zhu, Xuening Sun, Hao Cheng, Dingjie Song, Zhihong Chen, Abdulmohsen Alharthi, Bang An, Juncai He, Ziche Liu, Zhiyi Zhang, Junying Chen, Jianquan Li, Benyou Wang, Lian Zhang, Ruoyu Sun, Xiang Wan, Haizhou Li, Jinchao Xu.</p>

<p>NAACL 2024 · <a href="https://aclanthology.org/2024.naacl-long.450/" target="_blank" rel="noopener">论文</a></p>

<p>GitHub：<a href="https://github.com/FreedomIntelligence/AceGPT" target="_blank" rel="noopener">https://github.com/FreedomIntelligence/AceGPT</a></p>

</div>

<div class="paper-reference" id="paper-2-zh">

<p><strong>[2] Alignment at Pre-training! Towards Native Alignment for Arabic LLMs</strong></p>

<p>Juhao Liang, Zhenyang Cai, Jianqing Zhu, Huang Huang, Kewei Zong, Bang An, Abdulmohsen Alharthi, Juncai He, Lian Zhang, Haizhou Li, Benyou Wang, Jinchao Xu.</p>

<p>NeurIPS 2024 · <a href="https://proceedings.neurips.cc/paper_files/paper/2024/hash/195c4e2910bedabd813f9fe4e70c642c-Abstract-Conference.html" target="_blank" rel="noopener">论文</a></p>

<p>GitHub：<a href="https://github.com/FreedomIntelligence/AceGPT-v2" target="_blank" rel="noopener">https://github.com/FreedomIntelligence/AceGPT-v2</a></p>

</div>

<div class="paper-reference" id="paper-3-zh">

<p><strong>[3] Second Language (Arabic) Acquisition of LLMs via Progressive Vocabulary Expansion</strong></p>

<p>Jianqing Zhu, Huang Huang, Zhihang Lin, Juhao Liang, Zhengyang Tang, Khalid Almubarak, Abdulmohsen Alharthik, Bang An, Juncai He, Xiangbo Wu, Fei Yu, Junying Chen, Zhuoheng Ma, Yuhao Du, He Zhang, Saied Alshahrani, Emad A. Alghamdi, Lian Zhang, Ruoyu Sun, Haizhou Li, Benyou Wang, Jinchao Xu.</p>

<p>ACL 2025 · <a href="https://aclanthology.org/2025.acl-long.100/" target="_blank" rel="noopener">论文</a></p>

<p>GitHub：<a href="https://github.com/FreedomIntelligence/AraLLaMa" target="_blank" rel="noopener">https://github.com/FreedomIntelligence/AraLLaMa</a></p>

</div>

<div class="paper-reference" id="paper-4-zh">

<p><strong>[4] AccelMark-Agent: Benchmarking Inference-Optimization Agents Across Accelerators and Workloads</strong></p>

<p>Juhao Liang, Youxin Jiang, Zhiyuan Zhang, Ruijie Zhang, Zhihang Lin, Yuxin Fu, Shiqi Zhang, Siyu Li, Xiaolong Liu, Prayag Tiwari, Minchen Yu, Li Zeng, Zizhong Chen, Benyou Wang.</p>

<p>论文稿 · <a href="https://openreview.net/forum?id=Qq15UzoppM" target="_blank" rel="noopener">论文</a></p>

<p>GitHub（相关评测平台）：<a href="https://github.com/FreedomIntelligence/AccelMark" target="_blank" rel="noopener">https://github.com/FreedomIntelligence/AccelMark</a></p>

</div>

<div class="paper-reference" id="paper-5-zh">

<p><strong>[5] AscendAgent: Evolving Context to Fit the Harness in CANN Kernel Optimization</strong></p>

<p>Ruijie Zhang, Juhao Liang, Youxin Jiang, Zhihang Lin, Tian Ding, Benyou Wang.</p>

<p>论文稿 · <a href="https://openreview.net/forum?id=gtuspdBfQo" target="_blank" rel="noopener">论文</a></p>

<p>GitHub：<a href="https://github.com/FreedomIntelligence/KernelBridge" target="_blank" rel="noopener">https://github.com/FreedomIntelligence/KernelBridge</a></p>

</div>

<div class="paper-reference" id="paper-6-zh">

<p><strong>[6] OS-Native Agents: Autonomous Task Management in the Dynamic Mobile World</strong></p>

<p>Qiming Zhu, Shunian Chen, Wentao Ge, Zhengyang Tang, Xiaoguang Li, Pinjia He, Benyou Wang.</p>

<p>论文稿 · <a href="https://openreview.net/forum?id=ZwOoQcLotV" target="_blank" rel="noopener">论文</a></p>

<p>GitHub（私有仓库）：<a href="https://github.com/FreedomIntelligence/OSNativeAgent" target="_blank" rel="noopener">https://github.com/FreedomIntelligence/OSNativeAgent</a></p>

</div>

</div>

</div>
