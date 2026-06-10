---
layout: distill
title: "媒体原文整理｜PhoneHarness：AI 手机时代需要怎样的 Agent Harness"
date: 2026-06-10
description: 保留机器之心关于 PhoneHarness 的主要报道内容、总览图、架构图、出处和验证链接，并补充 FreedomAI Lab 参与贡献说明。
tags: media machine-heart PhoneHarness mobile-agent GUI-agent

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

原文标题：**从OpenAI AI Phone到Gemini on Android：AI手机时代需要怎样的Agent Harness？**

原文来源为机器之心公众号，另有新浪科技转载页和机器之心 X 转发记录。本文保留原文标题、主要内容、图示和出处，并补充 FreedomAI Lab 参与贡献说明。为尊重原媒体版权，正文不整篇复制原文；完整原文请访问文末出处链接。

## FreedomAI Lab 参与贡献说明

原文相关点标注 The Chinese University of Hong Kong, Shenzhen、Benyou Wang、PhoneHarness。FreedomAI Lab 的参与贡献主要体现在手机 Agent harness 设计、屏幕理解与动作执行编排、混合动作空间和评测环境构建。

## 原文主要内容整理

原文从 OpenAI AI Phone 与 Gemini on Android 等行业背景切入，讨论手机 Agent 为什么需要专门的 Agent Harness。报道重点包括：手机任务不是纯文本任务，而是屏幕观察、点击/输入/滑动等动作、权限和任务状态的组合；Harness 负责连接模型和手机环境；评测需要走向真实执行，而不是只看静态截图问答。

原文要点保留：

- 报道以 OpenAI AI Phone、Gemini on Android 等行业事件引出手机 Agent 基础设施问题。
- 原文讨论屏幕理解、动作执行、权限、记忆和任务状态等手机 Agent 关键环节。
- 文章保留了 PhoneHarness 总览图和架构图。
- 原文相关点包括 The Chinese University of Hong Kong, Shenzhen、Benyou Wang 和 PhoneHarness。

下方保留原文中的 PhoneHarness 总览图和架构图。

## 原文多模态材料

{% include figure.html path="assets/img/media-roundup-2026/phoneharness-overview.png" alt="PhoneHarness overview figure" caption="PhoneHarness 总览图。图源：机器之心报道转载页。" %}

{% include figure.html path="assets/img/media-roundup-2026/phoneharness-architecture.png" alt="PhoneHarness architecture figure" caption="PhoneHarness 架构图。图源：机器之心报道转载页。" %}

## 原文出处

- 机器之心原文：[从OpenAI AI Phone到Gemini on Android：AI手机时代需要怎样的Agent Harness？](https://mp.weixin.qq.com/s/I2ztL6sFiHGxAiCfh_FTqg)
- 转载页：[新浪科技转载](https://finance.sina.com.cn/tech/roll/2026-05-26/doc-inhzfshk8947849.shtml)
- 验证记录：[机器之心 X 转发](https://x.com/jiqizhixin/status/2063472517533335806)
