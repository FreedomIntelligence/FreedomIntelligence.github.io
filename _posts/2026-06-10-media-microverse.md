---
layout: distill
title: "媒体原文转载｜MicroVerse：AI 模拟看不见的微观世界"
date: 2026-06-10
description: 授权转载机器之心关于 MicroVerse 的原文内容，并补充 FreedomAI Lab 参与贡献说明与资源引用。
tags: media machine-heart MicroVerse world-model biomedical-ai

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

MicroVerse 由香港中文大学（深圳）等团队推动，原文中提到王本友教授指导。FreedomAI Lab 的参与贡献主要体现在微观世界建模、多模态科学模拟、MicroWorldBench 评测设置与开源项目资源维护。

## 原文全文（授权转载）

### 机器之心镜像页（Xinfinite）

{% raw %}
<div class="authorized-repost">
<p><img alt="图片" loading="lazy" src="/assets/img/media-reposts/media-microverse/img-001-3f5491d875.webp"/></p><p>过去两年，世界模型（World Model）正在成为大模型演进的重要方向。</p><p>从具身智能到自动驾驶，研究者希望 AI 不再只是理解数据，而是能够在内部构建一个可预测、可推演的 “世界”。模型学会物体如何运动、环境如何变化，甚至能够在行动发生之前完成模拟。</p><p>但一个关键盲区始终存在：今天几乎所有世界模型，理解的都是 “人类肉眼可见的世界”。</p><p>街道、人物、机械运动可以被成功建模，而一旦尺度缩小到细胞、组织乃至分子层级，现有模型往往只是在生成视觉纹理，而非真实过程本身。</p><ul>
<li>
<p>细胞分裂为何发生？</p></li>
<li>
<p>蛋白结构如何变化？</p></li>
<li>
<p>微观系统中的动态规律如何长期演化？</p></li>
<li>
<p>这些问题背后需要的，不只是生成能力，而是机制级模拟能力。</p></li>
</ul><p>然而，微观世界建模面临着截然不同的挑战：尺度跨度巨大、动态过程高度复杂、真实数据稀缺，同时还必须满足物理与生物约束。</p><p>在这样的背景下，本文提出 MicroVerse — 一个面向微观世界（Micro-World）的模拟框架，尝试让生成模型首次从 “宏观场景建模” 走向微尺度科学过程模拟。</p><p>与传统视频生成不同，MicroVerse 的目标并非生成更逼真的画面，而是回答一个更根本的问题：AI 能否像科学模拟系统一样，理解并重建微观世界的运行机制？</p><p>这一工作将世界模型的研究边界，从可见世界进一步推进到了不可见尺度。</p><p><img alt="图片" loading="lazy" src="/assets/img/media-reposts/media-microverse/img-002-5d8f692875.png"/></p><ul>
<li>
<p>论文标题：MicroVerse: A Preliminary Exploration Toward a Micro-World Simulation</p></li>
</ul><ul>
<li>
<p>论文链接：https://arxiv.org/abs/2603.00585</p></li>
</ul><ul>
<li>
<p>Github：https://github.com/FreedomIntelligence/MicroVerse<br/></p></li>
</ul><p>现状：为何我们需要微观世界的 “模拟器”？</p><p>在宏观世界，我们可以通过摄像头记录一切。但在微观尺度，生命活动的本质 — 从血液流动的物质交换到 DNA 的精密复制 — 都发生在肉眼不可见的方寸之间。</p><p><img alt="图片" loading="lazy" src="/assets/img/media-reposts/media-microverse/img-003-e40b595794.png"/></p><p>微观模拟的意义远非 “视觉奇观”，它是理解生命运作的钥匙：</p><ul>
<li>
<p>加速科学洞察：如果能精准模拟免疫细胞如何识别并攻击癌细胞的过程，研究人员就能更直观地观察复杂的细胞交互，辅助验证生物学假设。</p></li>
<li>
<p>降低实验成本：传统的显微实验成本高昂且变量难以控制，通过 AI 生成具有物理保真度的视频，可以预先筛选出有研究价值的动态场景。</p></li>
<li>
<p>教育与科普：手工动画高度依赖艺术表达，难以做到科学动态的实时交互。AI 模拟器能让学生在虚拟实验室里 “亲眼” 看见生命过程的每一个细节。</p></li>
</ul><p>尽管学术界近期涌现出诸如 MedOS [1]（聚焦手术机器人的临床感知与动作决策）、CLARITY [2]（侧重肿瘤演化轨迹的抽象潜空间建模）以及 MeWM [3]（致力于术后 CT 影像的视觉预测）等优秀的医学世界模型，但其核心大多锚定于宏观层面的临床决策支持或医疗影像模拟，本质上是服务于诊疗逻辑的 “预言机”。与之不同的是，我们关注的是分子与细胞层面的微观世界模型，而这一领域目前的视频生成范式正面临严重的效能危机。研究团队对比发现，当要求生成 “细胞分裂” 或 “DNA 复制” 时，SOTA 模型虽然画面精美，却存在三大致命硬伤：</p><p>1. 违反物理结构：血管纹理反自然，细胞器排布杂乱。</p><p>2. 生物形态错误：模拟 RNA 时产生错误的形变，DNA 链条随意断裂。</p><p>3. 时间动态不一致：例如在模拟细胞有丝分裂时，细胞核会凭空消失，过程完全不符合生物学逻辑。</p><p>一句话总结：AI 生成的微观视频 “像真的”，但机制全错了。 它们只学习了宏观视觉统计，未学习微观物理规律。</p><p>MicroWorldBench：给微观视频立下 “科学规矩”</p><p>为了纠正视频生成模型在微观世界的 “信口开河”，研究团队提出了 MicroWorldBench — 这是全球首个针对微观生物模拟的量表化评测基准。</p><p><img alt="图片" loading="lazy" src="/assets/img/media-reposts/media-microverse/img-004-93f2686a5c.png"/></p><p>如果说以前的视频评测是看 “电影感”，那么 MicroWorldBench 就是一场严苛的 “生物奥林匹克竞赛”。它不再满足于画面是否高清，而是要给每一帧画面进行 “切片检查”。</p><p>层次分明的 “考题” 设计</p><p>研究团队从数万个候选任务中，精选出 459 项 核心模拟任务，构建了一个跨越尺度的三层模拟体系：</p><ul>
<li>
<p>器官级（Organ-level）：生理功能的 “动力学”</p></li>
</ul><ul>
<ul>
<li>
<p>考题示例：模拟心脏瓣膜在不同压力下的启闭，或者肺泡内壁红细胞的氧气交换。</p></li>
</ul>
</ul><ul>
<ul>
<li>
<p>核心难度：要求 AI 理解流体力学与组织形变的配合，不能只是 “乱颤”，必须有规律。</p></li>
</ul>
</ul><ul>
<li>
<p>细胞级（Cell-level）：生命律动的 “社交学”</p></li>
</ul><ul>
<ul>
<li>
<p>考题示例：模拟白细胞如何在复杂的趋化因子引导下，穿过血管壁抵达炎症现场（跨内皮迁移）。</p></li>
</ul>
<ul>
<li>
<p>核心难度：AI 需要模拟出细胞伪足的延伸、细胞体的挤压形变，这考验的是模型对生物柔性体动力学的理解。</p></li>
</ul>
</ul><ul>
<li>
<p>亚细胞级（Subcellular-level）：生命底层的 “精密机械”</p></li>
</ul><ul>
<ul>
<li>
<p>考题示例：DNA 复制叉的推进、线粒体的融合与分裂、细胞凋亡时的膜泡化（Blebbing）。</p></li>
</ul>
<ul>
<li>
<p>核心难度：这是最精微的视角，要求极高的保真度。AI 必须准确还原分子层面的信号级联，稍有差错，在生物学上就是 “物种变异”。</p>
</li>
</ul>
</ul><p>专家级 “监考官”：拒绝视觉欺骗</p><p>为了确保评分的权威性，MicroWorldBench 引入了 LLM + 领域专家 的联合评审机制：</p><p>1. 科学真实性（Scientific Fidelity）：这是 “一票否决权”。专家制定了极细的加权规则，比如：模拟有丝分裂时，如果中期染色体没有在赤道板对齐，画质再好也要打低分。</p><p>2. 视觉质量（Visual Quality）：评估视频是否存在闪烁、噪点，是否达到了实验室级的显微成像质感。</p><p>3. 指令一致性（Instruction Following）：测试 AI 能否精准响应复杂指令，如 “生成一段受损肝细胞自我修复的微观过程”。</p><p>扎心的真相：视觉巨人，科学矮子</p><p><img alt="图片" loading="lazy" src="/assets/img/media-reposts/media-microverse/img-005-fd30384446.png"/></p><p>在 MicroWorldBench 的严苛审视下，一个残酷的现状浮出水面：当前最顶尖的视频生成模型，正陷入一种 “像素级真实，机制级崩塌” 的尴尬境地。</p><p>视觉高分，科学低分：它们能生成令人惊叹的景深效果、细腻的细胞质感和真实的显微光影。在涉及因果律和生物逻辑的环节，这些模型表现得像个 “只会临摹的画家，却不懂解剖学的医生”；</p><p>宏观统计规律无法推导微观物理约束：当前模型本质上是在学习像素流的统计关联。在宏观世界，人类活动的数据量极其庞大，AI 能够通过 “暴力学习” 摸清重力和惯性的规律。但在微观世界，由于缺乏庞大的数据，AI 只能用宏观的 “视觉经验” 去强行解释微观的 “生物逻辑”，导致了严重的科学偏差。</p><p>MicroVerse：从 “像素画师” 向 “微观世界模型” 的进化</p><p>MicroWorldBench 的意义在于确立了一个科学的秩序：视频生成的下一场革命，不再是分辨率的竞赛，而是世界知识嵌入的竞赛。 研究者指出，如果不能在模型底层引入物理约束与领域知识监督，AI 将永远停留在 “特效模拟” 阶段，而无法成为真正的 “科学模拟器”。</p><p>如果说此前的视频模型只是在 “画出” 生命的形状，那么 MicroVerse 则是试图在比特世界里 “重建” 生命的算法。</p><p>MicroSim-10K：为 AI 补齐缺失的 “微观常识”</p><p>任何世界模型的预测能力都受限于其 “认知边际”。MicroVerse 的核心基石是 MicroSim-10K — 这是全球首个专注于微观机制的大规模专家级数据集。</p><ul>
<li>
<p>从像素统计转向机制对齐：9,601 段视频均经专家验证。它强制 AI 过滤掉宏观世界的重力、惯性等常识，转而学习微观尺度的流体动力学、细胞膜张力以及分子扩散规律。</p></li>
<li>
<p>高密度的语义监督：每段视频配备了 “机制级标注” 的描述并非简单的视觉标签。例如，它不再简单标注 “一些颗粒在移动”，而是会明确告诉模型：“当侦测到病原体入侵，免疫细胞会迅速极化并延伸出伪足，像‘猎人’一样追踪并精准包裹住游走的细菌。” 这种精准的语义引导，让模型在生成的瞬间，就完成了从视觉信号到生物逻辑的映射。</p></li>
</ul><p>架构演进：从 “视觉模仿” 到 “动力学推演”</p><p>在模型层面，MicroVerse 通过引入初级的物理约束与领域知识监督，实现了生成表现的跨越：</p><p><img alt="图片" loading="lazy" src="/assets/img/media-reposts/media-microverse/img-006-0f48412921.png"/></p><ul>
<li>
<p>科学保真度的定向演化：在最复杂的细胞级模拟中，MicroVerse 取得了 53.3 的高分。这意味着模型不再是胡乱拼凑像素块，而是开始呈现出具有生物学意义的动态机制，如细胞在迁移过程中的自适应形变逻辑。</p></li>
</ul><p><img alt="图片" loading="lazy" src="/assets/img/media-reposts/media-microverse/img-007-b148a70a07.png"/></p><ul>
<li>
<p>Scaling Law 验证：实验证明，随着模型参数扩展至 14B，模型对信号级联反应等极高复杂过程的理解出现了明显的 “性能涌现”。这种扩展性意味着 MicroVerse 有潜力成为一个可无限加载科学知识的数字生命底座。</p>
</li>
</ul><p>突破：从 “特效” 到 “科学模拟” 的 POC</p><p>通过对比可以直白地看到 MicroVerse 带来的改变，它将视频生成从 “视觉游戏” 变成了真正的概念验证（POC）：</p><ul>
<li>
<p>DNA 复制：通用模型生成的往往只是无规则旋转的丝带，而 MicroVerse 能够精准还原解旋酶推进、引物结合以及新链合成的动态秩序。</p></li>
<li>
<p>细胞凋亡：在模拟这一程序化死亡过程时，它不再是模糊的淡出，而是能细腻呈现出细胞膜起泡（Blebbing）、染色质固缩等一系列具有病理学意义的特征。</p></li>
</ul><p>这些突破证明：生成模型可以被引导去学习生命过程的底层物理与生物规律。</p><p>结论：从可见的 “物理世界” 迈向不可见的 “生命引擎”</p><p>视频生成技术已经能够逼真地重现人类社会的街景与繁华，但生命最核心的奥秘，始终隐藏在那些肉眼不可见、规律极其复杂的微尺度动态之中。</p><p>MicroVerse 的意义，绝不仅仅在于它生成了几段高清的生物视频，而在于它在生成式 AI 与严谨科学模拟之间，强行破开了一道通往未来的裂缝：</p><ul>
<li>
<p>确立了科学模拟的新秩序：通过 MicroWorldBench，研究团队第一次为 AI 定义了何为 “微观世界的科学正确”；</p></li>
<li>
<p>构建了生命知识的数字基底：MicroSim-10K 证明了，只要喂给模型正确的 “真理”，AI 就能从像素的泥淖中挣脱，建立起对底层机制的直觉；</p></li>
<li>
<p>完成了范式转移的 POC：MicroVerse 的成功，标志着生成大模型正在从 “宏观视觉统计” 向 “微观机制模拟” 完成惊险的一跳。</p></li>
</ul><p>这本质上是一条从 “世界模型” 通往 “生命模型” 的必经之路。当 AI 能够精准模拟细胞的律动与分子的呼吸，它就不再仅仅是作画的工具，而是一个运行在硅基芯片上的虚拟生命实验场。</p><p>从观察生命，到模拟生命，再到最终理解生命。微观世界的生成时代，才刚刚开始。</p><p>作者介绍</p><p>本文的共同第一作者为王荣胜与吴铭昊，均来自香港中文大学（深圳）。两位作者均在王本友教授的指导下进行研究，王教授及其团队长期致力于语音与医疗大模型、自然语言处理和多模态学习等前沿领域的探索。</p><p>王荣胜，香港中文大学（深圳）一年级博士生，研究方向为可信医疗大模型与多模态生成。</p><p>吴铭昊，香港中文大学（深圳）数据科学学院一年级博士，研究方向为 LLM Agent 与视频生成。曾在 NeurIPS, ICLR 发表论文。</p><p>相关工作</p><p>[1] Yang Y, Wang Z Y, Liu Q, et al. Medical world model: Generative simulation of tumor evolution for treatment planning [J]. arXiv preprint arXiv:2506.02327, 2025.</p><p>[2] Ding T, Zou Y, Chen C, et al. CLARITY: Medical World Model for Guiding Treatment Decisions by Modeling Context-Aware Disease Trajectories in Latent Space [J]. arXiv preprint arXiv:2512.08029, 2025.</p><p>[3] Wu Y C, Yin M, Shi B, et al. MedOS: AI-XR-Cobot World Model for Clinical Perception and Action [J]. medRxiv, 2026: 2026.02. 18.26345936.</p>
</div>
{% endraw %}

## Resources

- 机器之心原文：<http://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2651022151&idx=3&sn=89303fe37f598d0481ba1effbe953e68>
- 镜像页：<https://www.xinfinite.net/t/topic/18385>
- 论文：<https://arxiv.org/abs/2603.00585>
- 项目：<https://github.com/FreedomIntelligence/MicroVerse>
