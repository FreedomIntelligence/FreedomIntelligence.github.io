---
layout: distill
title: "机器之心 / PaperWeekly｜LongLLaVA：Mamba+Transformer 混合架构与单卡千图推理"
date: 2026-06-10
description: "基于机器之心与 PaperWeekly 关于 LongLLaVA 的报道整理的简要摘要，补充 FreedomAI Lab 参与贡献与资源链接。"
tags: media machine-heart PaperWeekly LongLLaVA multimodal long-context
source_links:
  - label: "机器之心原文"
    url: "http://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2650935336&idx=4&sn=1d0f7c1abd46f072741e563050151045"
  - label: "PaperWeekly 原文"
    url: "https://mp.weixin.qq.com/s?__biz=MzIwMTc4ODE0Mw==&mid=2247685068&idx=3&sn=cfa3e74011d850908de5543ec5abe715&chksm=9705cd04e675960fdccc62a83cc02948beab26b4b70ede86ec30bac99b60ed860a3607966ad4&scene=126&sessionid=0"

authors:
  - name: FreedomAI Lab
    url: "https://freedomintelligence.github.io/"
    affiliations:
      name: CUHKSZ

toc:
  - name: Resources

---

<p style="color: var(--global-text-color-light); font-size: 0.95rem; line-height: 1.7; margin-bottom: 1.2rem;">本文为媒体报道摘要，不保留完整转载内容；原文版权归原媒体与原作者所有。LongLLaVA 由香港中文大学（深圳）、深圳大数据研究院等团队共同提出，报道中提到通讯作者王本友教授，相关开源资源由 FreedomIntelligence 社区维护。FreedomAI Lab 的参与贡献主要体现在多模态长上下文建模、混合架构设计、训练数据构建与开源项目发布。 完整原文、论文、代码和项目入口见文末 Resources。</p>

LongLLaVA 面向多图像、长视频和高分辨率理解场景，把 Mamba 与 Transformer 混合架构引入多模态大模型，并结合图像 token 压缩、多阶段训练和长上下文数据构建，提升多模态长上下文推理效率。报道强调其在 VNBench、MileBench 等任务中的表现，以及单卡处理近千张图像的系统能力。

## Resources

- 机器之心原文：<http://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2650935336&idx=4&sn=1d0f7c1abd46f072741e563050151045>
- PaperWeekly 原文：<https://mp.weixin.qq.com/s?__biz=MzIwMTc4ODE0Mw==&mid=2247685068&idx=3&sn=cfa3e74011d850908de5543ec5abe715&chksm=9705cd04e675960fdccc62a83cc02948beab26b4b70ede86ec30bac99b60ed860a3607966ad4&scene=126&sessionid=0>
- 论文：<https://arxiv.org/abs/2409.02889>
- 项目：<https://github.com/FreedomIntelligence/LongLLaVA>
