---
layout: distill
title: "媒体原文转载｜HuatuoGPT：开源中文医疗大模型与医生盲测"
date: 2026-06-10
description: 授权转载机器之心与 PaperWeekly 关于 HuatuoGPT 的原文内容，并补充 FreedomAI Lab 参与贡献说明与资源引用。
tags: media machine-heart PaperWeekly HuatuoGPT medical-llm

authors:
  - name: FreedomAI Lab
    url: "https://freedomintelligence.github.io/"
    affiliations:
      name: CUHKSZ

toc:
  - name: 授权转载说明
  - name: FreedomAI Lab 参与贡献说明
  - name: 原文全文（授权转载）
  - name: Resources
---

## 授权转载说明

本文已按用户确认的转载授权整理发布，保留所列媒体来源的原文正文与多模态内容，并在文首补充 FreedomAI Lab / CUHKSZ 相关参与贡献说明。原文版权归原作者与原媒体所有；转载内容仅用于 FreedomAI Lab 官方博客归档与学术传播。

## FreedomAI Lab 参与贡献说明

HuatuoGPT 由香港中文大学（深圳）、深圳市大数据研究院、王本友教授团队等共同推动。FreedomAI Lab 的参与贡献主要体现在中文医疗问答数据、医疗大模型训练、医生盲测评估与开源资源发布，后续也延展到 HuatuoGPT-II、HuatuoGPT-o1、HuatuoGPT-3 等系列工作。

## 原文全文（授权转载）


### PaperWeekly 镜像页（Python88）

{% raw %}
<div class="authorized-repost">
<p>香港中文大学（深圳）和深圳市大数据研究院所在的王本友教授团队训练并开源了一个<strong>新的医疗大模型 ——HuatuoGPT（华佗GPT）</strong>，以使语言模型具备像医生一样的诊断能力和提供有用信息的能力。</p><p>基于医生回复和 ChatGPT 回复，让语言模型成为医生提供丰富且准确的问诊。<br/></p><img alt="Reposted article figure" loading="lazy" src="/assets/img/media-reposts/media-huatuogpt/img-001-7a254f9f4c.png"/><p>


在医疗领域，大规模语言模型（LLM）具有广阔的应用潜力。尽管像 ChatGPT 这样的语言模型能够生成内容详实、表述流畅、逻辑清晰的回复，但其在回应患者描述症状时，缺乏专业性和对患者输入的精确解读。其回复常常包含多种可能性，并以较高层次的建议形式呈现，但往往缺少深入的上下文理解能力，使得其帮助患者的具体情况有限。</p><p>相比之下，现实世界中医生与患者的互动数据能够更准确地反映医疗情景的复杂性，并提供准确无误的诊断建议，具有极高的专业性。然而，由于时间的限制，医生的回应常常简洁至不能充分传达信息，甚至有时会显得不连贯。若仅依靠这些数据来训练模型，得到的模型难以流畅地应对多样的指令或对话，其生成的回应也会显得短小、表述不佳，有时信息含糊，这对患者并不友好。</p><p>香港中文大学（深圳）和深圳市大数据研究院所在的王本友教授团队利用指令微调和强化学习在 ChatGPT 和医生的回复中找到结合点，训练并开源了一个新的医疗大模型 ——HuatuoGPT。HuatuoGPT 致力于通过融合 ChatGPT 生成的 “蒸馏数据” 和真实世界医生回复的数据，以使语言模型具备像医生一样的诊断能力和提供有用信息的能力，同时保持对用户流畅的交互和内容的丰富性，对话更加丝滑。</p><img alt="Reposted article figure" loading="lazy" src="/assets/img/media-reposts/media-huatuogpt/img-002-c250d433d5.png"/><p><strong>论文地址：</strong></p><p>https://arxiv.org/pdf/2305.15075.pdf</p><p><strong>Github 地址：</strong></p><p>https://github.com/FreedomIntelligence/HuatuoGPT</p><p><strong>Demo 地址：</strong></p><p>https://www.huatuogpt.cn/</p><p>该论文提出的语言模型训练方法可以结合医生和 ChatGPT 的数据，充分发挥它们的互补作用，既保留真实医疗数据的专业性和准确性，又借助 ChatGPT 的多样性和内容丰富性的特点。</p><img alt="Reposted article figure" loading="lazy" src="/assets/img/media-reposts/media-huatuogpt/img-003-7296c19341.png"/><p><strong>HuatuoGPT介绍</strong></p><img alt="Reposted article figure" loading="lazy" src="/assets/img/media-reposts/media-huatuogpt/img-004-ff37567430.png"/><p><strong>1. 混合数据集微调</strong></p><p>HuatuoGPT 使用了四种不同的数据集，分别如下：</p><ul><li><p>蒸馏 ChatGPT 指令数据集（Distilled Instructions from ChatGPT）：这个数据集受到 Alpaca 模型创建指令集的方法启发，从 ChatGPT 中提炼出医疗相关的指令。与之前工作不同的是，本方法还加入了科室和角色信息，根据采样的科室或角色生成符合条件的指令数据集。</p></li><li><p>真实医生指令数据集（Real-world Instructions from Doctors）：这个数据集来源于真实医生和患者之间的问答。医生的回复通常简洁且口语化，因此本方法通过润色以提高其可读性。</p></li><li><p>蒸馏 ChatGPT 对话数据集（Distilled Conversations from ChatGPT）：这个数据集通过为两个 ChatGPT 模型提供共享的对话背景，让它们分别模仿医生和患者进行对话。</p></li><li>

<p>真实医生对话数据集（Real-world Conversations with Doctors）：这个数据集来源于真实医生的对话，但对医生的回复使用模型进行了润色。</p></li></ul><p>这些数据集共同为模型提供了一个统一的语言模式、医生的诊断能力以及指令跟随能力。</p><p><strong>2. 基于AI反馈的强化学习</strong></p><p>为了进一步提升模型生成的质量，HuatuoGPT 还应用了基于 AI 反馈的强化学习技术（RLAIF）。使用 ChatGPT 对模型生成的内容进行评分，考虑内容的用户友好程度，并结合医生的回答作为参考，将医生回复的质量纳入考量。利用 PPO 算法将模型的生成偏好调整到医生和用户之间的一致性，从而增强模型生成丰富、详尽且正确的诊断。</p><img alt="Reposted article figure" loading="lazy" src="/assets/img/media-reposts/media-huatuogpt/img-005-f8bb11b390.png"/><p><strong>实验结果</strong></p><p>在评估 HuatuoGPT 的性能表现上，团队成员采用了自动评估和人工评估两种方式相互验证，在单轮问答场景和多轮交互式诊断场景中分别进行了评估。</p><p><img alt="Reposted article figure" loading="lazy" src="/assets/img/media-reposts/media-huatuogpt/img-006-1090d172d5.png"/></p><p>▲ 图：单轮问答场景的自动评测结果</p><p>针对单轮问答场景，团队成员精心收集了涵盖 10 个医疗领域意图的 100 个问题，并利用 GPT-4 进行自动评估。具体来说，团队提供了两个模型对同一问题生成回复，并使用 GPT-4 对每个模型的回复进行分析和打分。</p><p>最终的测试结果显示，相较于基于 LLaMa 和 ChatGLM 的开源中文医疗模型，HuatuoGPT 表现显著优秀（以 HuatuoGPT 为基准）。这一优势得益于 HuatuoGPT 同时使用了从 ChatGPT 蒸馏的数据和真实世界数据进行训练，并借助来自 ChatGPT 和专业医生的混合反馈进行了优化。此外，HuatuoGPT 在总体性能上甚至超过了 GPT-3.5-turbo。</p><p><img alt="Reposted article figure" loading="lazy" src="/assets/img/media-reposts/media-huatuogpt/img-007-653aa6b1b8.png"/></p><p>▲ 图：多轮诊断场景的自动评测结果</p><p>对于多轮问诊场景，团队成员收集了涵盖 20 个科室的 100 个多轮对话进行了评估。评估结果显示，HuatuoGPT 不仅全面优于目前的开源中文医疗模型，而且在大部分科室的表现上均优于 GPT-3.5-turbo，这为 HuatuoGPT 在处理更加复杂的多轮问诊场景中的优异性能提供了有力的证据。</p><p>在人工评估方面，团队成员使用了自动评估中的样本进行评估验证。团队成员邀请专业医生为模型的输出结果进行人工评估。下表是单轮问答场景和多轮诊断场景的评估结果。评估结果表明，无论是单轮的人工评测还是多轮的人工评测结果都与自动评估的结果保持了一致，这充分验证了模型性能评估的一致性和可靠性。</p><img alt="Reposted article figure" loading="lazy" src="/assets/img/media-reposts/media-huatuogpt/img-008-a2f6bbbeed.png"/><p>▲ 表：单轮问答场景人工评估结果</p><img alt="Reposted article figure" loading="lazy" src="/assets/img/media-reposts/media-huatuogpt/img-009-5483b2492e.png"/><p>▲ 表：多轮问诊场景人工评估结果</p><img alt="Reposted article figure" loading="lazy" src="/assets/img/media-reposts/media-huatuogpt/img-010-263334cd05.png"/><p><strong>访问方式</strong></p><p>可以通过识别此二维码来访问最新版的华佗 GPT。 </p><img alt="Reposted article figure" loading="lazy" src="/assets/img/media-reposts/media-huatuogpt/img-011-f7d137ea9f.png"/><p><strong>彩蛋：</strong>团队还开放了 HuatuoGPT 的前置工作 Huatuo-26M 医疗问答数据集（并不是 HuatuoGPT 的训练数据）https://github.com/freedomintelligence/huatuo-26m ，总共 2600W 的医疗问答数据全部开源到到了 HuggingFace，如果需要清理好的干净数据请发邮件至 changmiaowang@cuhk.edu.cn ，请注明单位和承诺只用于科研目的。包括 Huatuo-26M 在内的三个公开的医疗问答数据集，HuatuoGPT 的 zero-shot 性能超过 GPT 3.5 turbo（ChatGPT）、ChatGLM 和已有的医疗 GPT，甚至远好于全微调的中等大小的 T5 和 GPT。</p><p><strong>澄清：</strong>HuaTuo 也是哈工大 SCIR 实验室的医疗 GPT 的名字，非常感谢哈工大 SCIR 的开源模型对开源社区的贡献。非常遗憾出现重名，其已经更名为本草（BenTsao）。</p>
</div>
{% endraw %}

## Resources

- 机器之心原文：<https://mp.weixin.qq.com/s/lwJb8N420xfMTvXJPM2gtg>
- 机器之心转载验证页：<https://www.sohu.com/a/680793310_129720>
- PaperWeekly 原文：<https://mp.weixin.qq.com/s?__biz=MzIwMTc4ODE0Mw==&mid=2247624585&idx=3&sn=2738a85994cec0f8b20e2500c5d563e1&chksm=96e43809a193b11f327428cd38e626272a1499af6824cf4eb953b040f3167882d5258a3d5ae3&scene=126&sessionid=0>
- PaperWeekly 镜像：<https://www.python88.com/topic/155876>
- 项目入口：<https://github.com/FreedomIntelligence/HuatuoGPT>
- 模型入口：<https://huggingface.co/FreedomIntelligence/HuatuoGPT-7B>
