---
layout: post
title: "多模态媒体报道与 FreedomAI 社区链接"
date: 2026-06-10
description: 按时间顺序整理与 FreedomAI、港中深、王本友相关的多模态媒体报道、论文、项目和社区链接。
tags: multimodal media-coverage
categories: research
author: FreedomAI
_styles: >
  .coverage-note {
    color: var(--global-text-color-light);
    font-size: 0.95rem;
  }
  .coverage-item {
    border-top: 1px solid var(--global-divider-color);
    padding-top: 1.25rem;
    margin-top: 1.5rem;
  }
  .coverage-date {
    color: var(--global-theme-color);
    font-weight: 600;
  }
  .coverage-links {
    margin-bottom: 0.85rem;
  }
---

本页按时间顺序整理与 FreedomAI、香港中文大学（深圳）和王本友相关的多模态媒体报道、论文、项目和社区链接。每条尽量保留原始出处，以及对应的论文、代码、模型或数据集入口。

<p class="coverage-note">下列条目按发布时间或发布日从早到晚排列。此次一起收集到但不属于多模态方向的链接，没有放入这篇时间线。</p>

<div class="coverage-item">
<p class="coverage-date">2024-05-11</p>

### 多模态大模型算法实习

PaperWeekly 旗下 AI 求职发布了南方科技大学与香港中文大学（深圳）联合招收算法实习生的信息。其中“多模态大模型算法实习生”方向明确涉及文本、图像、视频等多模态大模型研发，多模态数据处理，以及多模态学习的前沿技术与应用落地。

<p class="coverage-links">
出处：PaperWeekly / AI 求职<br>
原文：<a href="https://mp.weixin.qq.com/s?__biz=MzIwMTc4ODE0Mw==&mid=2247664430&idx=3&sn=4e0447f25c8772a1f1831dc1d249a6a1&chksm=974fe78d9ff31d0f51d00f33b4a837b8d623b22243bf15bded95dbc012fc9f7a5fbc22a765dd&scene=126&sessionid=0">微信公众号</a><br>
</p>
</div>

<div class="coverage-item">
<p class="coverage-date">2024-06-27</p>

### HuatuoGPT-Vision：医疗多模态大模型

HuatuoGPT-Vision 面向医疗场景，将医学视觉知识大规模注入多模态大模型。项目同时开放 PubMedVision 医疗 VQA 数据集，以及 HuatuoGPT-Vision 模型权重。

<p class="coverage-links">
出处：FreedomAI 社区 / arXiv<br>
论文：<a href="https://arxiv.org/abs/2406.19280">HuatuoGPT-Vision, Towards Injecting Medical Visual Knowledge into Multimodal LLMs at Scale</a><br>
项目：<a href="https://github.com/FreedomIntelligence/HuatuoGPT-Vision">FreedomIntelligence/HuatuoGPT-Vision</a><br>
模型：<a href="https://huggingface.co/FreedomIntelligence/HuatuoGPT-Vision-7B">HuatuoGPT-Vision-7B</a>、<a href="https://huggingface.co/FreedomIntelligence/HuatuoGPT-Vision-34B">HuatuoGPT-Vision-34B</a><br>
数据集：<a href="https://huggingface.co/datasets/FreedomIntelligence/PubMedVision">PubMedVision</a>
</p>
</div>

<div class="coverage-item">
<p class="coverage-date">2024-09-21</p>

### 机器之心：LongLLaVA 混合架构多模态大模型

机器之心报道 LongLLaVA，这是一个 Mamba + Transformer 混合架构的多模态大语言模型，面向高效长上下文图像和视频理解。报道重点包括跨图像时空依赖的数据构建、三阶段多模态适配训练，以及在单张 A100 80GB GPU 上处理近千张图像的推理能力。

{% include figure.html path="assets/img/media-roundup-2026/longllava-architecture.webp" alt="LongLLaVA architecture overview" caption="LongLLaVA 架构图，图源：机器之心报道。" %}

{% include figure.html path="assets/img/media-roundup-2026/longllava-training.png" alt="LongLLaVA training strategy" caption="LongLLaVA 多模态训练策略，图源：机器之心报道。" %}

<p class="coverage-links">
出处：机器之心<br>
原文：<a href="http://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2650935336&idx=4&sn=1d0f7c1abd46f072741e563050151045">微信公众号</a><br>
论文：<a href="https://arxiv.org/abs/2409.02889">LongLLaVA: Scaling Multi-modal LLMs to 1000 Images Efficiently via Hybrid Architecture</a><br>
项目：<a href="https://github.com/FreedomIntelligence/LongLLaVA">FreedomIntelligence/LongLLaVA</a>
</p>
</div>

<div class="coverage-item">
<p class="coverage-date">2024-09-25</p>

### PaperWeekly：LongLLaVA 单卡千图推理

PaperWeekly 也报道了 LongLLaVA，强调其在视频理解、高分辨率图像理解和多模态智能体中的长上下文能力。

<p class="coverage-links">
出处：PaperWeekly<br>
原文：<a href="https://mp.weixin.qq.com/s?__biz=MzIwMTc4ODE0Mw==&mid=2247685068&idx=3&sn=cfa3e74011d850908de5543ec5abe715&chksm=9705cd04e675960fdccc62a83cc02948beab26b4b70ede86ec30bac99b60ed860a3607966ad4&scene=126&sessionid=0">微信公众号</a><br>
项目：<a href="https://github.com/FreedomIntelligence/LongLLaVA">FreedomIntelligence/LongLLaVA</a>
</p>
</div>

<div class="coverage-item">
<p class="coverage-date">2025-06-22</p>

### ShareGPT-4o-Image 与 Janus-4o

ShareGPT-4o-Image 是从 GPT-4o 图像生成能力蒸馏得到的数据集，包含文本生成图像与图文生成图像样本。项目同时推出 Janus-4o，在 Janus-Pro 基础上微调，使模型支持图像生成和图像编辑。

<p class="coverage-links">
出处：FreedomAI 社区 / arXiv<br>
论文：<a href="https://arxiv.org/abs/2506.18095">ShareGPT-4o-Image: Aligning Multimodal Models with GPT-4o-Level Image Generation</a><br>
项目：<a href="https://github.com/FreedomIntelligence/ShareGPT-4o-Image">FreedomIntelligence/ShareGPT-4o-Image</a><br>
数据集：<a href="https://huggingface.co/datasets/FreedomIntelligence/ShareGPT-4o-Image">Hugging Face 数据集</a><br>
模型：<a href="https://huggingface.co/FreedomIntelligence/Janus-4o-7B">FreedomIntelligence/Janus-4o-7B</a>
</p>
</div>

<div class="coverage-item">
<p class="coverage-date">2026-03-18</p>

### 机器之心：MicroVerse 微观世界模型

机器之心报道 MicroVerse，这是一个面向微观世界模拟的框架，覆盖器官、细胞和亚细胞层级的生物过程建模。该工作把世界模型从宏观视觉模仿推进到机制感知的微观模拟。

{% include figure.html path="assets/img/media-roundup-2026/microverse-overview.png" alt="MicroVerse overview" caption="MicroVerse 总览，图源：机器之心报道。" %}

{% include figure.html path="assets/img/media-roundup-2026/microverse-bench.png" alt="MicroWorldBench overview" caption="MicroWorldBench 评测设置，图源：机器之心报道。" %}

<p class="coverage-links">
出处：机器之心<br>
原文：<a href="http://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2651022151&idx=3&sn=89303fe37f598d0481ba1effbe953e68">微信公众号</a><br>
论文：<a href="https://arxiv.org/abs/2603.00585">MicroVerse: A Preliminary Exploration Toward a Micro-World Simulation</a><br>
项目：<a href="https://github.com/FreedomIntelligence/MicroVerse">FreedomIntelligence/MicroVerse</a>
</p>
</div>

<div class="coverage-item">
<p class="coverage-date">2026-06-07</p>

### 机器之心：PhoneHarness 与 AI 手机 Agent

机器之心这篇文章讨论 AI 手机时代的 Agent Harness，包括屏幕观察、动作执行、记忆、权限和评测。由于手机 Agent 依赖视觉界面理解与具身操作，这里作为多模态 Agent / 移动 GUI 相关条目保留。

{% include figure.html path="assets/img/media-roundup-2026/phoneharness-overview.png" alt="PhoneHarness overview" caption="PhoneHarness 总览，图源：机器之心报道。" %}

{% include figure.html path="assets/img/media-roundup-2026/phoneharness-architecture.png" alt="PhoneHarness architecture" caption="PhoneHarness 架构图，图源：机器之心报道。" %}

<p class="coverage-links">
出处：机器之心<br>
原文：<a href="https://mp.weixin.qq.com/s/I2ztL6sFiHGxAiCfh_FTqg">微信公众号</a><br>
验证：<a href="https://x.com/jiqizhixin/status/2063472517533335806">机器之心 X 转发记录</a>
</p>
</div>
