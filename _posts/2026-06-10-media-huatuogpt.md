---
layout: distill
title: "机器之心｜开源中文医疗大模型华佗GPT来了，真人医生盲测效果优于ChatGPT"
date: 2026-06-10
description: "基于机器之心关于 HuatuoGPT 的报道整理的简要摘要，补充 FreedomAI Lab 参与贡献与资源链接。"
tags: media machine-heart PaperWeekly HuatuoGPT medical-llm

authors:
  - name: FreedomAI Lab
    url: "https://freedomintelligence.github.io/"
    affiliations:
      name: CUHKSZ

toc:
  - name: Resources

---

<p style="color: var(--global-text-color-light); font-size: 0.95rem; line-height: 1.7; margin-bottom: 1.2rem;">本文为媒体报道摘要，不保留完整转载内容；原文版权归原媒体与原作者所有。HuatuoGPT 由香港中文大学（深圳）、深圳市大数据研究院、王本友教授团队等共同推动。FreedomAI Lab 的参与贡献主要体现在中文医疗问答数据、医疗大模型训练、医生盲测评估与开源资源发布，后续也延展到 HuatuoGPT-II、HuatuoGPT-o1、HuatuoGPT-3 等系列工作。 完整原文、论文、代码和项目入口见文末 Resources。</p>

HuatuoGPT 面向中文医疗问答和多轮问诊场景，通过融合医生回复与 ChatGPT 生成数据，让语言模型在专业性、可读性和患者友好度之间取得更好的平衡。报道围绕数据构建、RLAIF 训练、自动评测与人工医生评测展开，也连接到后续 HuatuoGPT-II、HuatuoGPT-o1、HuatuoGPT-3 等系列工作。

## Resources

- 机器之心原文：<https://mp.weixin.qq.com/s/lwJb8N420xfMTvXJPM2gtg>
- PaperWeekly 原文：<https://mp.weixin.qq.com/s?__biz=MzIwMTc4ODE0Mw==&mid=2247624585&idx=3&sn=2738a85994cec0f8b20e2500c5d563e1&chksm=96e43809a193b11f327428cd38e626272a1499af6824cf4eb953b040f3167882d5258a3d5ae3&scene=126&sessionid=0>
- 项目：<https://github.com/FreedomIntelligence/HuatuoGPT>
- 模型：<https://huggingface.co/FreedomIntelligence/HuatuoGPT-7B>
