---
layout: distill
title: "媒体原文整理｜LongLLaVA：Mamba+Transformer 混合架构与单卡千图推理"
date: 2026-06-10
description: 保留机器之心与 PaperWeekly 对 LongLLaVA 的主要报道内容、架构图、训练图、出处和项目入口，并补充 FreedomAI Lab 参与贡献说明。
tags: media machine-heart PaperWeekly LongLLaVA multimodal long-context

authors:
  - name: FreedomAI Lab
    url: "https://freedomintelligence.github.io/"
    affiliations:
      name: CUHKSZ

toc:
  - name: 原文信息
  - name: FreedomAI Lab 参与贡献说明
  - name: 原文主要内容整理
  - name: 原文多模态材料
  - name: 原文出处
---

## 原文信息

原文标题包括：**首个Mamba+Transformer混合架构多模态大模型来了，实现单卡千图推理**、**单卡千图推理！港中深等提出全新混合架构多模态大模型LongLLaVA**。

原文来源包括机器之心与 PaperWeekly。本文保留原文标题、核心内容、架构/训练图示、镜像页和项目链接，并补充 FreedomAI Lab 参与贡献说明。为尊重原媒体版权，正文不整篇复制原文；完整原文请访问文末出处链接。

## FreedomAI Lab 参与贡献说明

LongLLaVA 由香港中文大学（深圳）、深圳大数据研究院等团队共同提出，报道中提到通讯作者王本友教授，相关开源资源由 FreedomIntelligence 社区维护。FreedomAI Lab 的参与贡献主要体现在多模态长上下文建模、混合架构设计、训练数据构建与开源项目发布。

## 原文主要内容整理

原文围绕 LongLLaVA 的“单卡千图推理”能力展开，介绍其 Mamba + Transformer 混合架构如何面向长序列多模态输入降低计算成本。报道保留了模型架构、训练策略与长上下文图像/视频理解能力三个重点：第一，LongLLaVA 能处理大量图像输入；第二，混合架构兼顾效率与表达能力；第三，该能力可用于视频理解、高分辨率图像理解、多图关系推理和多模态 Agent。

原文要点保留：

- 报道标题突出“首个 Mamba+Transformer 混合架构多模态大模型”和“单卡千图推理”。
- 原文介绍 LongLLaVA 如何通过混合架构提升长上下文多模态建模效率。
- 报道保留了模型架构、数据构造、训练流程和推理能力相关图示。
- 原文将 LongLLaVA 的应用场景指向视频理解、高分辨率图像、多图关系理解和多模态智能体。
- PaperWeekly 版本进一步强调港中深、王熙栋、LongLLaVA 和 FreedomIntelligence 的关联。

下方保留原文中的架构图与训练图示。

## 原文多模态材料

{% include figure.html path="assets/img/media-roundup-2026/longllava-architecture.webp" alt="LongLLaVA architecture overview" caption="LongLLaVA 架构图。图源：机器之心报道镜像页。" %}

{% include figure.html path="assets/img/media-roundup-2026/longllava-training.png" alt="LongLLaVA training strategy" caption="LongLLaVA 多阶段训练与数据构建示意。图源：机器之心报道镜像页。" %}

## 原文出处

- 机器之心原文：[首个 Mamba+Transformer 混合架构多模态大模型来了，实现单卡千图推理](http://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2650935336&idx=4&sn=1d0f7c1abd46f072741e563050151045)
- 机器之心镜像：[Xinfinite 镜像页](https://www.xinfinite.net/t/topic/5744)
- PaperWeekly 原文：[单卡千图推理！港中深等提出全新混合架构多模态大模型LongLLaVA](https://mp.weixin.qq.com/s?__biz=MzIwMTc4ODE0Mw==&mid=2247685068&idx=3&sn=cfa3e74011d850908de5543ec5abe715&chksm=9705cd04e675960fdccc62a83cc02948beab26b4b70ede86ec30bac99b60ed860a3607966ad4&scene=126&sessionid=0)
- PaperWeekly 镜像：[CSDN 镜像](https://blog.csdn.net/c9Yv2cf9I06K2A9E/article/details/142544603)
- 论文：[LongLLaVA: Scaling Multi-modal LLMs to 1000 Images Efficiently via Hybrid Architecture](https://arxiv.org/abs/2409.02889)
- 项目入口：[FreedomIntelligence/LongLLaVA](https://github.com/FreedomIntelligence/LongLLaVA)
