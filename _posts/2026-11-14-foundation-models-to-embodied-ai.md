---
layout: post
title: "从大模型到具身智能：三个值得投入的机会"
date: 2026-11-14
author: 王本友
description: "通用模型的具身化、本地场景中的训练与评估闭环，以及模型、运控与硬件的共同演进。"
permalink: /blog/2026/foundation-models-to-embodied-ai/
tags: embodied-ai multimodal agents simulation robotics
_styles: |
  .embodied-video { margin: 1.8rem 0; }
  .embodied-video video { display: block; width: 100%; height: auto; border-radius: 10px; background: #111; }
  .embodied-video figcaption { margin-top: .6rem; font-size: .9rem; line-height: 1.65; color: var(--global-text-color-light); }
  .embodied-video-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.2rem; margin: 1.8rem 0; }
  .embodied-video-grid .embodied-video { margin: 0; min-width: 0; }
  .embodied-video a { overflow-wrap: anywhere; }
  @media (max-width: 640px) { .embodied-video-grid { grid-template-columns: 1fr; } }
  .post-content { line-height: 1.85; }
---

最近，OpenAI 的一次组织调整，让我更加看好大模型从业者进入具身智能的机会。

据[《财富》报道](https://fortune.com/2026/11/13/openai-disbands-robotics-team-as-its-general-models-start-running-robots/)，OpenAI 将机器人研究人员并入核心研究团队，将应用机器人与硬件团队转入应用部门。我的理解是：**具身正在成为通用大模型的重要应用域，一个新的 subdomain。**

如果这条路线持续发展，具身就有机会像编程等领域一样，受益于通用模型的能力增长，再围绕具体场景建立训练和应用体系。这也为原本不做机器人的大模型从业者，打开了新的入口。

沿着这个判断，我把值得做的事情分成三组：**通用模型的具身化、依托本地场景建立闭环，以及软硬件的共同演进。**

## 一、能力的延伸：让通用大模型走向具身

第一个机会，是把通用模型对世界的理解，进一步转化为在物理世界中行动的能力。[Gemini Robotics](https://deepmind.google/blog/gemini-robotics-brings-ai-into-the-physical-world/) 已经展示了一条路径：基于 Gemini 2.0，将物理动作加入模型的输出模态，用于机器人控制。

在这个方向上，我尤其期待**语音与 action 双通道的具身模型**。机器人可以直接理解人的语音，同时生成语言回应和身体动作，让交流与行动彼此协调。这是我期待进一步探索的方向，而非上述系统已经完整实现的能力。

这给大模型团队提供了清晰的研究入口：如何把已有的多模态能力扩展到动作，如何让模型的理解、表达和执行形成一个整体。

## 二、落地的起点：依托本地场景，建立训练与评估闭环

进入具身，可以从我们能够持续接触的本地场景开始，例如厂房巡检、楼宇和室内服务。明确的场景，能够帮助我们定义任务、积累数据，并判断机器人究竟做得怎么样。

围绕这些任务，可以先利用头部大模型辅助标注数据、整理任务和建立评估，再把这些能力适配到自己的垂直场景。[RoboReward](https://arxiv.org/abs/2601.00675) 等研究，已经探索了用视觉语言模型评价机器人任务完成情况、提供训练奖励的方式。其结果也提示我们，通用模型并非在所有任务上都能给出可靠的奖励，场景内的校准和验证仍然重要。

### 3D 场景生成：从真实现场走向可训练的环境

与此同时，**3D 生成能力正在为训练环境的构建提供新工具**。我们可以生成或重建巡检、室内等三维场景，进一步把它们建设成能够交互、执行任务和评价结果的环境，用于机器人模型的训练与评估。

下面两个视频分别展示从图像和二维平面图构建三维场景的思路。根据 [@sonic0828 的分享](https://x.com/sonic0828/status/2121114865079406608)，第一个演示使用 Astra + Blender 5.3：先生成 4 张概念图，再将图像排列到三维空间，通过挤压、融合构建场景，最后导出到 Blender 5.3，形成可以漫步的 3D 世界。第二个演示来自 [@wanerfu 的分享](https://x.com/wanerfu/status/2121144338017292602)，展示把 2D 平面图转化为可漫游的室内三维空间。

<div class="embodied-video-grid">
<figure class="embodied-video">
  <video controls playsinline preload="metadata" poster="{{ '/assets/video/embodied-ai/imageTo3D.jpg' | relative_url }}" aria-label="3D 场景演示一：imageTo3D">
    <source src="{{ '/assets/video/embodied-ai/imageTo3D.mp4' | relative_url }}" type="video/mp4">
    您的浏览器不支持视频播放，请<a href="{{ '/assets/video/embodied-ai/imageTo3D.mp4' | relative_url }}">下载视频</a>观看。
  </video>
  <figcaption><strong>4 张概念图 → 可漫步的 3D 世界</strong><br>imageTo3D · 约 25 秒 · Astra + Blender 5.3（据原帖介绍）<br>来源：<a href="https://x.com/sonic0828/status/2121114865079406608">https://x.com/sonic0828/status/2121114865079406608</a></figcaption>
</figure>

<figure class="embodied-video">
  <video controls playsinline preload="metadata" poster="{{ '/assets/video/embodied-ai/to3D.jpg' | relative_url }}" aria-label="3D 场景演示二：to3D">
    <source src="{{ '/assets/video/embodied-ai/to3D.mp4' | relative_url }}" type="video/mp4">
    您的浏览器不支持视频播放，请<a href="{{ '/assets/video/embodied-ai/to3D.mp4' | relative_url }}">下载视频</a>观看。
  </video>
  <figcaption><strong>2D 平面图 → 室内 3D 漫游</strong><br>to3D · 约 10 秒<br>来源：<a href="https://x.com/wanerfu/status/2121144338017292602">https://x.com/wanerfu/status/2121144338017292602</a></figcaption>
</figure>
</div>

从三维展示走向机器人训练，还需要补齐碰撞几何、物理属性、可交互对象、任务接口和评估标准，并验证仿真与真实环境之间的差距。这些工作决定了生成的场景能否成为真正有用的训练环境。

[World Labs 的 real-to-sim-to-real 工作](https://worldlabs.ai/blog/real-to-sim-to-real)，已经在探索把真实任务转化为可扩展的仿真世界，用于策略训练与评估。

这样，本地场景、真实数据、生成环境和模型训练就能连接起来：**在现场发现问题，在数据与仿真中改进，再回到现场验证。**持续围绕这一过程打磨，才能逐步形成真正适合自己场景的机器人。

## 三、长期的演进：让模型、运控与硬件共同发展

### 硬件与本地化：让动作能力运行在机器人上

模型走进物理世界之后，实时交互会成为重要要求。机器人需要及时、稳定地响应环境，这为专用硬件、端侧推理以及模型与硬件的协同优化提供了空间。[Jetson Thor](https://developer.nvidia.com/blog/introducing-nvidia-jetson-thor-the-ultimate-platform-for-physical-ai/) 等平台已经围绕这些需求展开设计。

如果关键动作依赖云端 API，网络中断就可能打断执行。把动作规划和控制能力部署到机器人本地，是提高现场可用性的一个重要方向。下面两段演示放在一起，分别呈现苹果研究团队的 HALO，以及 GR00T 2 的任务执行。

**苹果研究团队给一台宇树 G1 后背驮了台 Mac mini。**在 [HALO 项目](https://apple-aiml-research.github.io/ml-halo/)中，机器人能够钻桌底、侧身过窄门、找到椅子并坐下。根据[论文](https://arxiv.org/html/2611.06908v1)，背载的 Mac mini M4 Pro 默认运行本地 Qwen3.6-35B-A3B（4-bit，MLX）进行任务编排，无需连接互联网；运动生成也在 Mac mini 上完成，底层动作跟踪则由 G1 自带的 Jetson Orin NX 执行。

**苹果研究团队的方案，背包里用的是苹果电脑，跑的却是千问。**这个组合让端侧部署的机会变得具体：通用模型、消费级计算设备和机器人本体，可以一起构成在现场独立运行的系统。

根据 [NVIDIA 官方项目页](https://research.nvidia.com/labs/gear/gr00t-2/)与[技术报告](https://research.nvidia.com/labs/gear/gr00t-2/assets/gr00t2_whitepaper.pdf)，GR00T 2 基于 Cosmos 构建世界动作模型（WAM），联合预测未来视频与机器人动作，学习动作与物理世界变化之间的关系。GR00T 2 Turbo 使用 2B 参数的联合视频—动作 Transformer，可在 Unitree G1 的 Jetson Thor 上运行，并由 SONIC 全身控制器执行动作。

GR00T 2 这里的板载能力有明确范围：官方演示中，动作模型与控制器在机器人本地运行，高层任务选择的推理模型仍在板外。因此，更准确的表述是**动作规划与控制的板载部署**，而不是整个系统已经完全离线。官方页面目前标注代码将于 2026 年 12 月发布。

<div class="embodied-video-grid">
<figure class="embodied-video">
  <video controls playsinline preload="metadata" poster="{{ '/assets/video/embodied-ai/on-device-hardware.jpg' | relative_url }}" aria-label="HALO：宇树 G1 背载 Mac mini，本地千问指挥行动">
    <source src="{{ '/assets/video/embodied-ai/on-device-hardware.mp4' | relative_url }}" type="video/mp4">
    您的浏览器不支持视频播放，请<a href="{{ '/assets/video/embodied-ai/on-device-hardware.mp4' | relative_url }}">下载视频</a>观看。
  </video>
  <figcaption><strong>HALO：宇树 G1 + Mac mini + 本地千问</strong><br>钻桌底、侧身过窄门、找椅子坐下 · 约 46 秒<br>@QwenAIFans 分享 · 来源：<a href="https://x.com/QwenAIFans/status/2119282685898359288">https://x.com/QwenAIFans/status/2119282685898359288</a></figcaption>
</figure>
<figure class="embodied-video">
  <video controls playsinline preload="metadata" poster="{{ '/assets/video/embodied-ai/groot-onboard.jpg' | relative_url }}" aria-label="GR00T 2 机器人任务执行演示">
    <source src="{{ '/assets/video/embodied-ai/groot-onboard.mp4' | relative_url }}" type="video/mp4">
    您的浏览器不支持视频播放，请<a href="{{ '/assets/video/embodied-ai/groot-onboard.mp4' | relative_url }}">下载视频</a>观看。
  </video>
  <figcaption><strong>GR00T 2：世界动作模型与板载执行</strong><br>约 91 秒 · @VedaAI00 分享<br>来源：<a href="https://x.com/VedaAI00/status/2120311947858268219">https://x.com/VedaAI00/status/2120311947858268219</a></figcaption>
</figure>
</div>

### AI 参与运控开发与硬件本体设计

进一步，还可以探索 **AI 原生的运控开发**：让 AI 参与运控算法的编写、调参、测试和改进。[Eureka](https://eureka-research.github.io/) 通过大模型生成并迭代奖励函数，帮助强化学习获得控制技能，为 AI 参与控制研发提供了一个参考。

### 软硬件共同演进：从 co-design 走向 co-evolution

**机器人一个关键的工程瓶颈，是机械硬件与控制算法的割裂。**如果先把机体定死，再让算法适应它，模型的改进空间就会受到结构、连杆和关节配置的约束。另一条路径，是围绕目标运动同时考虑“怎样的身体”和“怎样的控制”。

斯坦福与哥伦比亚大学研究团队开源的 [Transformer Transformer](https://transformer-transformer.github.io/) 提供了一个具体例子：给定操作示范中的目标运动轨迹和用户定义的奖励，在设定的设计空间内生成适合该运动的机器人本体。它通过 RoboTokens 统一表示机体、状态与动作，同一模型架构支持本体生成和跨本体控制，将连杆、关节、电机与惯性属性的设计，与运动表现联系起来。[代码已开源](https://github.com/real-stanford/transformer-transformer)。

**硬件也成为可以优化的变量，围绕特定运动与控制能力共同调整。**团队实际制造并验证了一个优化后的 ALOHA 设计，跟踪误差相较原设计降低超过 70%。这让软硬件协同设计（co-design）从仿真中的构想，走向了真实机体的验证。[论文](https://arxiv.org/abs/2607.25798)

相关分享：[https://x.com/VedaAI00/status/2119216936483766316](https://x.com/VedaAI00/status/2119216936483766316)。

沿着这个方向继续推进，我期待的是软硬件共同演进（**co-evolution**）：任务提出需求，模型生成或调整本体与控制方案，再通过仿真、制造和实测获得反馈，改进下一版。这也是物理世界 RSI（递归自我改进）的一条可能路径。[自动机器人设计](https://pmc.ncbi.nlm.nih.gov/articles/PMC10576117/)已有早期研究基础；把这样的协同设计扩展为持续迭代的自主闭环，仍是值得探索的长期目标。

下面这段机器人结构与运动演示，为讨论硬件本体设计提供了一个直观例子。值得继续探索的是：如何将结构生成、运动验证和真实制造连接起来，让每一轮设计都得到可衡量的反馈。

<figure class="embodied-video">
  <video controls playsinline preload="metadata" poster="{{ '/assets/video/embodied-ai/ai-hardware-design.jpg' | relative_url }}" aria-label="机器人本体结构与运动演示">
    <source src="{{ '/assets/video/embodied-ai/ai-hardware-design.mp4' | relative_url }}" type="video/mp4">
    您的浏览器不支持视频播放，请<a href="{{ '/assets/video/embodied-ai/ai-hardware-design.mp4' | relative_url }}">下载视频</a>观看。
  </video>
  <figcaption><strong>硬件本体设计：机器人结构与运动演示</strong><br>约 6 秒 · @VedaAI00 分享<br>来源：<a href="https://x.com/VedaAI00/status/2119251349951119857">https://x.com/VedaAI00/status/2119251349951119857</a></figcaption>
</figure>

这三组机会有着连续的关系：**通用模型提供能力起点，本地场景提供训练与验证的闭环，软硬件共同演进则打开更长期的空间。**

对于大模型从业者，现在值得做的，就是从一个具体场景出发，把熟悉的模型能力带进物理世界，在持续实践中建立自己的机器人能力。

## 参考资料

1. Fortune：[OpenAI 机器人团队调整报道](https://fortune.com/2026/11/13/openai-disbands-robotics-team-as-its-general-models-start-running-robots/)，2026。
2. Google DeepMind：[Gemini Robotics brings AI into the physical world](https://deepmind.google/blog/gemini-robotics-brings-ai-into-the-physical-world/)，2025。
3. Lee et al.：[RoboReward: General-Purpose Vision-Language Reward Models for Robotics](https://arxiv.org/abs/2601.00675)，2026。
4. World Labs：[Building Worlds That Train Robots](https://worldlabs.ai/blog/real-to-sim-to-real)，2026。
5. NVIDIA：[Introducing NVIDIA Jetson Thor, the Ultimate Platform for Physical AI](https://developer.nvidia.com/blog/introducing-nvidia-jetson-thor-the-ultimate-platform-for-physical-ai/)，2025。
6. Ma et al.：[Eureka: Human-Level Reward Design via Coding Large Language Models](https://eureka-research.github.io/)，2023。
7. Matthews et al.：[Efficient automatic design of robots](https://pmc.ncbi.nlm.nih.gov/articles/PMC10576117/)，PNAS，2023。
8. NVIDIA：[GR00T 2: Scaling Robot Foundation Models for Generalization, Dexterity, and Adaptation](https://research.nvidia.com/labs/gear/gr00t-2/)，2026。
9. Hu et al.：[Perceptive Humanoid Motion from Simulation（HALO）](https://arxiv.org/abs/2611.06908)，Apple，2026；[项目与演示](https://apple-aiml-research.github.io/ml-halo/)。
10. Ha, Liu & Song：[Transformer Transformer: A Unified Model for Motion-Conditioned Robot Co-design](https://arxiv.org/abs/2607.25798)，2026；[项目](https://transformer-transformer.github.io/) · [开源代码](https://github.com/real-stanford/transformer-transformer)。
