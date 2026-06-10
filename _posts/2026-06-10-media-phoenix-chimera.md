---
layout: distill
title: "媒体原文整理｜Phoenix / Chimera：GPT-4 评测与开放多语言模型"
date: 2026-06-10
description: 保留机器之心关于 Phoenix、Chimera 与 GPT-4 评测报道的主要内容、图示和出处，并补充 FreedomAI Lab 参与贡献说明。
tags: media machine-heart Phoenix Chimera LLMZoo open-source

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

{% comment %}Lab-authored summary of a public media report. Figures are attributed to the original report/mirror page.{% endcomment %}

## 原文信息

原文标题：**GPT-4 充当评测老师，效果惊艳，港中文（深圳）开源凤凰、Chimera 等大模型**。

原文来源：机器之心公众号。本文保留原文标题、主要内容脉络、媒体图示和出处信息，并补充 FreedomAI Lab 参与贡献说明。为尊重原媒体版权，正文不整篇复制原文；完整原文请访问文末出处链接。

## FreedomAI Lab 参与贡献说明

该报道涉及港中文（深圳）王本友教授团队开源的 Phoenix / Chimera 及 LLMZoo 相关工作。FreedomAI Lab 的主要参与贡献在于推动多语言对话模型、训练数据、评测方式和开源社区入口的建设，让研究者能够复现、比较并继续改进这些模型。

## 原文主要内容整理

原文围绕“GPT-4 能否充当评测老师”展开，介绍港中文（深圳）团队开源 Phoenix、Chimera 等大模型的背景、训练资源与评测方式。文章重点保留了三条信息：第一，Phoenix / Chimera 面向多语言对话和开放模型生态；第二，报道展示了利用 GPT-4 对模型回答进行辅助评价的结果；第三，这些模型和数据被放入 LLMZoo 体系中，形成更便于社区访问的开源入口。

原文要点保留：

- 报道以 GPT-4 作为模型评价者的实验效果切入，讨论其在模型质量比较中的潜力。
- 文章介绍 Phoenix / Chimera 等模型，并将其与港中文（深圳）团队的开源工作联系起来。
- 原文保留了多语言模型、中文评测表现、开源数据和 LLMZoo 入口等信息。
- 报道强调开放模型和开放评测对中文及多语言大模型社区的重要性。

原文还通过图示展示 LLMZoo、Phoenix / Chimera 与中文评测表现。我们在下方保留这些图示，并在图注中标明来源。

## 原文多模态材料

{% include figure.html path="assets/img/media-roundup-2026/phoenix-llmzoo.png" alt="Phoenix and Chimera media figure" caption="Phoenix / Chimera 与 LLMZoo 相关图示。图源：机器之心报道转载页，版权归原作者与原媒体所有。" %}

{% include figure.html path="assets/img/media-roundup-2026/phoenix-chinese-eval.png" alt="Phoenix Chinese evaluation chart" caption="报道中展示的中文评测材料。图源：机器之心报道转载页。" %}

## 原文出处

- 机器之心原文：[GPT-4 充当评测老师，效果惊艳，港中文（深圳）开源凤凰、Chimera 等大模型](https://mp.weixin.qq.com/s/WLYmwT1LJ9YGFdW3GRZ55A)
- 转载验证页：[腾讯云开发者社区镜像](https://cloud.tencent.com/developer/article/2270060)
- 项目入口：[FreedomIntelligence/LLMZoo](https://github.com/FreedomIntelligence/LLMZoo)
- 数据入口：[Phoenix SFT data](https://huggingface.co/datasets/FreedomIntelligence/phoenix-sft-data-v1)
