---
layout: distill
title: "媒体原文整理｜SocraticChat / PlatoLM：用苏格拉底提问蒸馏对话能力"
date: 2026-06-10
description: 保留 PaperWeekly 关于 SocraticChat / PlatoLM 的主要报道内容、流程图、出处和资源入口，并补充 FreedomAI Lab 参与贡献说明。
tags: media PaperWeekly SocraticChat PlatoLM dialogue-data

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

原文标题：**ShareGPT平替！利用苏格拉底提问模拟器更好地蒸馏ChatGPT对话能力**。

原文来源为 PaperWeekly 镜像及转载验证页。本文保留原文标题、主要内容、流程图、数据/模型入口和出处，并补充 FreedomAI Lab 参与贡献说明。为尊重原媒体版权，正文不整篇复制原文；完整原文请访问文末出处链接。

## FreedomAI Lab 参与贡献说明

SocraticChat / PlatoLM 与深圳市大数据研究院、香港中文大学（深圳）和王本友教授团队相关。FreedomAI Lab 的参与贡献主要体现在苏格拉底式提问数据构造、对话能力蒸馏、开源数据集与 PlatoLM 模型资源发布。

## 原文主要内容整理

原文介绍了如何通过“苏格拉底提问模拟器”构造更高质量的对话数据，以替代简单收集 ShareGPT 式问答。报道重点包括：用提问推动模型澄清问题；用模拟器构造多轮对话过程；发布 SocraticChat 数据和 PlatoLM 模型，使社区可以复现和继续训练。

原文要点保留：

- 报道用 “ShareGPT 平替” 引出 SocraticChat / PlatoLM 的数据构造动机。
- 原文强调苏格拉底式提问模拟器，用多轮追问提升对话数据质量。
- 文章介绍了 SocraticChat 数据集与 PlatoLM 模型资源。
- 原文相关点包括 PaperWeekly、深圳市大数据研究院、香港中文大学（深圳）和王本友教授团队。

下方保留原文中的流程图。

## 原文多模态材料

{% include figure.html path="assets/img/media-roundup-2026/socratic-pipeline.png" alt="SocraticChat pipeline figure" caption="SocraticChat / PlatoLM 报道中的流程图。图源：PaperWeekly 转载验证页。" %}

## 原文出处

- PaperWeekly 镜像：[ShareGPT平替！利用苏格拉底提问模拟器更好地蒸馏ChatGPT对话能力](https://www.python88.com/topic/163925)
- 转载验证页：[搜狐镜像](https://www.sohu.com/a/733642675_121119001)
- 项目入口：[FreedomIntelligence/PlatoLM](https://github.com/FreedomIntelligence/PlatoLM)
- 数据入口：[SocraticChat](https://huggingface.co/datasets/FreedomIntelligence/SocraticChat)
- 模型入口：[PlatoLM-7B](https://huggingface.co/FreedomIntelligence/PlatoLM-7B)
