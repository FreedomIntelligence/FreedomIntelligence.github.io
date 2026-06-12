---
layout: distill
title: "机器之心｜PhoneHarness：AI 手机时代需要怎样的 Agent Harness"
date: 2026-06-10
description: "基于机器之心关于 PhoneHarness 的报道整理的简要摘要，补充 FreedomAI Lab 参与贡献与资源链接。"
tags: media machine-heart PhoneHarness mobile-agent GUI-agent

authors:
  - name: FreedomAI Lab
    url: "https://freedomintelligence.github.io/"
    affiliations:
      name: CUHKSZ

toc:
  - name: Resources

---

<p style="color: var(--global-text-color-light); font-size: 0.95rem; line-height: 1.7; margin-bottom: 1.2rem;">本文为媒体报道摘要，不保留完整转载内容；原文版权归原媒体与原作者所有。原文相关点标注 The Chinese University of Hong Kong, Shenzhen、Benyou Wang、PhoneHarness。FreedomAI Lab 的参与贡献主要体现在手机 Agent harness 设计、屏幕理解与动作执行编排、混合动作空间和评测环境构建。 完整原文、论文、代码和项目入口见文末 Resources。</p>

PhoneHarness 关注手机 Agent 如何在真实手机环境中完成可验证任务，而不是只生成看似正确的 GUI 点击轨迹。它将 CLI、GUI 与 MCP-style tools 放入 mixed-action harness，并通过 PhoneHarness Bench 记录 trace、系统状态、App 结果和 verifier 信号，用于评估手机工作流是否真正完成。

## Resources

- 机器之心原文：<https://mp.weixin.qq.com/s/I2ztL6sFiHGxAiCfh_FTqg>
- 论文：<https://phoneharness.github.io/assets/paper.pdf>
- 项目主页：<https://phoneharness.github.io/>
- GitHub：<https://github.com/PhoneHarness/PhoneHarness>
- 数据集：<https://huggingface.co/datasets/PhoneHarness/phoneharness-bench>
