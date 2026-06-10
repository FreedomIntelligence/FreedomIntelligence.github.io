---
layout: distill
title: "媒体解读｜Phoenix / Chimera：从 GPT-4 评测到开放多语言模型"
date: 2026-06-10
description: 机器之心报道港中文（深圳）王本友教授团队开源 Phoenix、Chimera 等大模型；本文以 FreedomAI Lab 口吻整理其中的核心内容、图示和出处。
tags: media machine-heart Phoenix Chimera LLMZoo open-source

authors:
  - name: FreedomAI Lab
    url: "https://freedomintelligence.github.io/"
    affiliations:
      name: CUHKSZ

toc:
  - name: Why This Report Matters
  - name: Main Takeaways
  - name: Multimodal Materials
  - name: Sources
---

{% comment %}Lab-authored summary of a public media report. Figures are attributed to the original report/mirror page.{% endcomment %}

## Why This Report Matters

机器之心在《GPT-4 充当评测老师，效果惊艳，港中文（深圳）开源凤凰、Chimera 等大模型》中关注了我们早期开源模型体系的一个关键问题：当大模型能力快速发展时，开放社区如何用更可复现的方式训练、比较和评测多语言对话模型。

从 FreedomAI Lab 的角度看，Phoenix / Chimera 的意义不只是“又一个模型”。它们代表了我们对开放基础设施的基本判断：模型、数据、评测方法和社区入口需要同时开放，研究才可能被真正复用和推进。

## Main Takeaways

1. **以开放模型服务多语言社区。** Phoenix 面向跨语言对话能力，试图降低不同语言用户进入大模型时代的门槛。
2. **用 GPT-4 辅助评测模型行为。** 报道关注了 GPT-4 作为评测者时对模型回答质量的判别能力，这也是后来 LLM-as-a-judge 研究中的重要议题。
3. **从单点发布走向 LLMZoo。** LLMZoo 更像一个实验场：不同模型、数据和评测方式可以在统一开源入口中被持续积累。

## Multimodal Materials

{% include figure.html path="assets/img/media-roundup-2026/phoenix-llmzoo.png" alt="Phoenix and Chimera media figure" caption="Phoenix / Chimera 与 LLMZoo 相关图示。图源：机器之心报道转载页，版权归原作者与原媒体所有。" %}

{% include figure.html path="assets/img/media-roundup-2026/phoenix-chinese-eval.png" alt="Phoenix Chinese evaluation chart" caption="报道中展示的中文评测材料。图源：机器之心报道转载页。" %}

## Sources

- 机器之心原文：[GPT-4 充当评测老师，效果惊艳，港中文（深圳）开源凤凰、Chimera 等大模型](https://mp.weixin.qq.com/s/WLYmwT1LJ9YGFdW3GRZ55A)
- 转载验证页：[腾讯云开发者社区镜像](https://cloud.tencent.com/developer/article/2270060)
- 项目入口：[FreedomIntelligence/LLMZoo](https://github.com/FreedomIntelligence/LLMZoo)
- 数据入口：[Phoenix SFT data](https://huggingface.co/datasets/FreedomIntelligence/phoenix-sft-data-v1)

