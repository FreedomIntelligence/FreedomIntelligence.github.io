---
layout: post
title: "从大模型到具身智能：三个值得投入的机会"
date: 2026-11-14
author: 王本友
description: "从 Fable 5.2 操作机械臂，到场景生成、端侧部署与软硬件共同演进：大模型从业者如何建立自己的机器人能力。"
permalink: /blog/2026/foundation-models-to-embodied-ai/
tags: embodied-ai multimodal agents simulation robotics
_styles: |
  .embodied-video { margin: 1.8rem 0; scroll-margin-top: 5rem; }
  .embodied-video video { display: block; width: 100%; height: auto; aspect-ratio: 16 / 9; object-fit: contain; border-radius: 10px; background: #111; }
  .embodied-video figcaption { margin-top: .6rem; font-size: .9rem; line-height: 1.65; color: var(--global-text-color-light); }
  .embodied-video-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.2rem; margin: 1.8rem 0; }
  .embodied-video-grid .embodied-video { margin: 0; min-width: 0; }
  .embodied-video a { overflow-wrap: anywhere; }
  @media (max-width: 640px) { .embodied-video-grid { grid-template-columns: 1fr; } }
  .post-content { line-height: 1.85; }
  .post-content h2, .post-content h3 { scroll-margin-top: 5rem; }
  .embodied-nav { padding: 1rem 1.2rem; margin: 1.5rem 0 2rem; border-left: 3px solid var(--global-theme-color); }
  .embodied-nav p { margin: 0; }
---

最近，OpenAI 的一次组织调整，让我更加看好大模型从业者进入具身智能的机会。

据[《财富》报道](https://fortune.com/2026/11/13/openai-disbands-robotics-team-as-its-general-models-start-running-robots/)，OpenAI 将机器人研究人员并入核心研究团队，将应用机器人与硬件团队转入应用部门。我的理解是：**具身正在成为通用大模型的重要应用域，一个新的 subdomain。**

语言、视觉、推理和编程能力的增长，有机会持续转化为机器人能力的增长。对于原本不做机器人的大模型从业者，入口也变得更清晰：把熟悉的模型能力接到真实任务上，再围绕数据、评估、部署和硬件建立自己的体系。

我把这条路径分成三步：**先让模型能够行动，再让它在具体场景中学会，最后让模型、控制与机体一起改进。**

<nav class="embodied-nav" aria-label="文章目录">
  <p><strong>阅读路线</strong><br><a href="#capability">一、通用模型如何走向行动</a> · <a href="#scene-loop">二、本地场景如何形成训练闭环</a> · <a href="#coevolution">三、软硬件如何共同演进</a></p>
</nav>

<h2 id="capability">一、能力的延伸：让通用大模型走向行动</h2>

### 从理解世界，到控制机械臂

先看一个具体例子：[Fable 5.2 操作真实机械臂的演示](#video-fable)。视频里，机械臂完成了拼块解谜、拧开瓶盖、装配并检查齿轮啮合，以及画出机器人等任务。根据 [Anthropic 的发布说明](https://www.anthropic.com/claude-fable-and-mythos-5-2)，Fable 5.2 的机器人控制能力较此前模型明显提升，其中包括未被明确针对性训练的机器人任务。

这段演示让我关注的是**通用能力的迁移**：一个面向广泛任务的模型，开始把视觉理解、推理与工具使用能力带进物理操作。对大模型团队来说，这是一条可以接续已有积累的研究路径。

<figure class="embodied-video" id="video-fable">
  <video controls playsinline preload="metadata" poster="{{ '/assets/video/embodied-ai/fable-robot-control.jpg' | relative_url }}" aria-label="Fable 5.2 操作真实机械臂">
    <source src="{{ '/assets/video/embodied-ai/fable-robot-control.mp4' | relative_url }}" type="video/mp4">
    您的浏览器不支持视频播放，请<a href="{{ '/assets/video/embodied-ai/fable-robot-control.mp4' | relative_url }}">下载视频</a>观看。
  </video>
  <figcaption><strong>Fable 5.2：通用模型操作真实机械臂</strong><br>解谜、拧瓶盖、装配齿轮与画画，展示同一模型参与不同物理任务。片段经过加速和剪辑，不代表实际执行速度。<br>约 23 秒 · <a href="https://www.anthropic.com/claude-fable-and-mythos-5-2">Anthropic 发布说明与机器人演示</a></figcaption>
</figure>

演示之外，还需要可比较的评估。**RoboDojo Sim 测的是模型根据摄像头图像控制模拟双臂机器人的能力。**Anthropic 报告 Fable 5.2 在其内部运行中取得 64.9% 的成绩，优于同一 harness 下比较的其他前沿模型，也超过多数专门用于机器人控制的系统。这是模拟环境中的比较结果；上面的真实机械臂片段则提供了另一类直观证据。[发布说明](https://www.anthropic.com/claude-fable-and-mythos-5-2) · [RoboDojo 基准](https://robodojo-benchmark.com/)

### 将动作纳入模型能力

另一条路径，是直接把动作纳入模型输出。[Gemini Robotics](https://deepmind.google/blog/gemini-robotics-brings-ai-into-the-physical-world/) 基于 Gemini 2.0，将物理动作加入输出模态，用于机器人控制。两类探索共同指向一个问题：如何让模型对世界的理解，成为可执行、可反馈的行动？

我尤其期待**语音与 action 双通道的具身模型**：机器人理解人的语音，在生成语言回应的同时协调身体动作，让交流与行动成为一个连续过程。这是值得继续推进的研究方向。

因此，第一个机会很明确：把已有的多模态能力扩展到动作，并让理解、表达和执行形成整体。下一步的问题是，如何让这种能力在自己的场景中稳定成长。

<h2 id="scene-loop">二、落地的起点：用本地场景建立训练与评估闭环</h2>

### 先找到能持续接触的任务

厂房巡检、楼宇服务、室内操作，都可以成为起点。一个能反复进入的现场，让我们有机会把任务定义清楚、收集失败案例，并判断改进是否有效。例如，巡检不仅要“走到设备旁边”，还要看清指定仪表、记录异常，并在路线被占用时完成恢复。

围绕这些任务，可以先利用头部大模型辅助标注数据、整理任务和建立评估，再把这些能力适配到自己的垂直场景。[RoboReward](https://arxiv.org/abs/2601.00675) 等研究，已经探索了用视觉语言模型评价机器人任务完成情况、提供训练奖励的方式。其结果也提示我们，通用模型并非在所有任务上都能给出可靠的奖励，场景内的校准和验证仍然重要。

### 用 3D 生成降低环境构建成本

与此同时，**3D 生成能力正在为训练环境的构建提供新工具**。我们可以生成或重建巡检、室内等三维场景，进一步把它们建设成能够交互、执行任务和评价结果的环境，用于机器人模型的训练与评估。

有了任务，还需要让机器人经历足够多的环境变化。下面两段视频展示了不同的环境构建方式：

- [从 4 张概念图构建三维世界](#video-image-to-3d)：据 [@sonic0828 的分享](https://x.com/sonic0828/status/2121114865079406608)，工作流使用 Astra + Blender 5.3，先生成概念图，再把图像排列到三维空间，通过挤压、融合构建场景，最后导出到 Blender。
- [从 2D 平面图生成室内漫游](#video-floorplan)：[@wanerfu 分享的演示](https://x.com/wanerfu/status/2121144338017292602)呈现了从房间布局到可漫游空间的转换，为楼宇和室内场景提供了直观的环境构建思路。

<div class="embodied-video-grid">
<figure class="embodied-video" id="video-image-to-3d">
  <video controls playsinline preload="metadata" poster="{{ '/assets/video/embodied-ai/imageTo3D.jpg' | relative_url }}" aria-label="3D 场景演示一：imageTo3D">
    <source src="{{ '/assets/video/embodied-ai/imageTo3D.mp4' | relative_url }}" type="video/mp4">
    您的浏览器不支持视频播放，请<a href="{{ '/assets/video/embodied-ai/imageTo3D.mp4' | relative_url }}">下载视频</a>观看。
  </video>
  <figcaption><strong>4 张概念图 → 可漫步的 3D 世界</strong><br>从少量视觉输入构建空间，展示三维环境生成的起点。<br>imageTo3D · 约 25 秒 · Astra + Blender 5.3（据原帖介绍）<br>来源：<a href="https://x.com/sonic0828/status/2121114865079406608">https://x.com/sonic0828/status/2121114865079406608</a></figcaption>
</figure>

<figure class="embodied-video" id="video-floorplan">
  <video controls playsinline preload="metadata" poster="{{ '/assets/video/embodied-ai/to3D.jpg' | relative_url }}" aria-label="3D 场景演示二：to3D">
    <source src="{{ '/assets/video/embodied-ai/to3D.mp4' | relative_url }}" type="video/mp4">
    您的浏览器不支持视频播放，请<a href="{{ '/assets/video/embodied-ai/to3D.mp4' | relative_url }}">下载视频</a>观看。
  </video>
  <figcaption><strong>2D 平面图 → 室内 3D 漫游</strong><br>从房间布局走向空间展示，为已有建筑的环境构建提供直观参考。<br>to3D · 约 10 秒<br>来源：<a href="https://x.com/wanerfu/status/2121144338017292602">https://x.com/wanerfu/status/2121144338017292602</a></figcaption>
</figure>
</div>

从三维展示走向机器人训练，还需要补齐碰撞几何、物理属性、可交互对象、任务接口和评估标准，并验证仿真与真实环境之间的差距。这些工作决定了生成的场景能否成为真正有用的训练环境。

[World Labs 的 real-to-sim-to-real 工作](https://worldlabs.ai/blog/real-to-sim-to-real)，已经在探索把真实任务转化为可扩展的仿真世界，用于策略训练与评估。

这样，本地场景、真实数据、生成环境和模型训练就能连接起来：**在现场发现问题，在数据与仿真中改进，再回到现场验证。**持续围绕这一过程打磨，才能逐步形成真正适合自己场景的机器人。

<h2 id="coevolution">三、长期的演进：让模型、运控与硬件一起改进</h2>

当机器人开始在现场执行任务，问题会变得更具体：计算在哪里完成？动作能否及时响应？现有机体是否适合这个任务？这些问题把模型研发进一步带向系统与硬件。

### 端侧部署：让能力跟着机器人走

模型走进物理世界之后，实时交互会成为重要要求。机器人需要及时、稳定地响应环境，这为专用硬件、端侧推理以及模型与硬件的协同优化提供了空间。[Jetson Thor](https://developer.nvidia.com/blog/introducing-nvidia-jetson-thor-the-ultimate-platform-for-physical-ai/) 等平台已经围绕这些需求展开设计。

如果关键动作依赖云端 API，网络中断就可能打断执行。把动作规划和控制能力部署到机器人本地，是提高现场可用性的一个重要方向。下面的 [HALO 演示](#video-halo)与 [GR00T 2 演示](#video-groot)，展示了不同的部署范围。

**苹果研究团队给一台宇树 G1 后背驮了台 Mac mini。**在 [HALO 项目](https://apple-aiml-research.github.io/ml-halo/)中，机器人能够钻桌底、侧身过窄门、找到椅子并坐下。根据[论文](https://arxiv.org/html/2611.06908v1)，背载的 Mac mini M4 Pro 默认运行本地 Qwen3.6-35B-A3B（4-bit，MLX）进行任务编排，无需连接互联网；运动生成也在 Mac mini 上完成，底层动作跟踪则由 G1 自带的 Jetson Orin NX 执行。

**苹果研究团队的方案，背包里用的是苹果电脑，跑的却是千问。**这个组合让端侧部署的机会变得具体：通用模型、消费级计算设备和机器人本体，可以一起构成在现场独立运行的系统。

根据 [NVIDIA 官方项目页](https://research.nvidia.com/labs/gear/gr00t-2/)与[技术报告](https://research.nvidia.com/labs/gear/gr00t-2/assets/gr00t2_whitepaper.pdf)，GR00T 2 基于 Cosmos 构建世界动作模型（WAM），联合预测未来视频与机器人动作，学习动作与物理世界变化之间的关系。GR00T 2 Turbo 使用 2B 参数的联合视频—动作 Transformer，可在 Unitree G1 的 Jetson Thor 上运行，并由 SONIC 全身控制器执行动作。

GR00T 2 这里的板载能力有明确范围：官方演示中，动作模型与控制器在机器人本地运行，高层任务选择的推理模型仍在板外。因此，更准确的表述是**动作规划与控制的板载部署**，而不是整个系统已经完全离线。官方页面目前标注代码将于 2026 年 12 月发布。

<div class="embodied-video-grid">
<figure class="embodied-video" id="video-halo">
  <video controls playsinline preload="metadata" poster="{{ '/assets/video/embodied-ai/on-device-hardware.jpg' | relative_url }}" aria-label="HALO：宇树 G1 背载 Mac mini，本地千问指挥行动">
    <source src="{{ '/assets/video/embodied-ai/on-device-hardware.mp4' | relative_url }}" type="video/mp4">
    您的浏览器不支持视频播放，请<a href="{{ '/assets/video/embodied-ai/on-device-hardware.mp4' | relative_url }}">下载视频</a>观看。
  </video>
  <figcaption><strong>HALO：宇树 G1 + Mac mini + 本地千问</strong><br>观察全身姿态如何适应桌底、窄门和座椅；本地任务编排展示离线运行的可能。<br>约 46 秒<br>@QwenAIFans 分享 · 来源：<a href="https://x.com/QwenAIFans/status/2119282685898359288">https://x.com/QwenAIFans/status/2119282685898359288</a></figcaption>
</figure>
<figure class="embodied-video" id="video-groot">
  <video controls playsinline preload="metadata" poster="{{ '/assets/video/embodied-ai/groot-onboard.jpg' | relative_url }}" aria-label="GR00T 2 机器人任务执行演示">
    <source src="{{ '/assets/video/embodied-ai/groot-onboard.mp4' | relative_url }}" type="video/mp4">
    您的浏览器不支持视频播放，请<a href="{{ '/assets/video/embodied-ai/groot-onboard.mp4' | relative_url }}">下载视频</a>观看。
  </video>
  <figcaption><strong>GR00T 2：世界动作模型与板载执行</strong><br>观察室内清理等操作中的身体与手部协调。动作模型和控制器在板载运行，高层推理仍在板外。<br>约 91 秒 · @VedaAI00 分享<br>来源：<a href="https://x.com/VedaAI00/status/2120311947858268219">https://x.com/VedaAI00/status/2120311947858268219</a></figcaption>
</figure>
</div>

对大模型团队而言，这些案例把机会落到了具体工程问题上：怎样分配高层推理与低层控制，怎样降低推理延迟，以及怎样让模型、算力、传感器与执行器协同工作。

### AI 参与运控研发：把反馈带进开发过程

进一步，还可以探索 **AI 原生的运控开发**：让 AI 参与运控算法的编写、调参、测试和改进。[Eureka](https://eureka-research.github.io/) 通过大模型生成并迭代奖励函数，帮助强化学习获得控制技能，为 AI 参与控制研发提供了一个参考。

### 软硬件共同演进：从 co-design 走向 co-evolution

**机器人一个关键的工程瓶颈，是机械硬件与控制算法的割裂。**如果先把机体定死，再让算法适应它，模型的改进空间就会受到结构、连杆和关节配置的约束。另一条路径，是围绕目标运动同时考虑“怎样的身体”和“怎样的控制”。

斯坦福与哥伦比亚大学研究团队开源的 [Transformer Transformer](https://transformer-transformer.github.io/) 提供了一个具体例子：给定操作示范中的目标运动轨迹和用户定义的奖励，在设定的设计空间内生成适合该运动的机器人本体。它通过 RoboTokens 统一表示机体、状态与动作，同一模型架构支持本体生成和跨本体控制，将连杆、关节、电机与惯性属性的设计，与运动表现联系起来。[代码已开源](https://github.com/real-stanford/transformer-transformer)。

**硬件也成为可以优化的变量，围绕特定运动与控制能力共同调整。**团队实际制造并验证了一个优化后的 ALOHA 设计，跟踪误差相较原设计降低超过 70%。这让软硬件协同设计（co-design）从仿真中的构想，走向了真实机体的验证。[论文](https://arxiv.org/abs/2607.25798)

相关分享：[https://x.com/VedaAI00/status/2119216936483766316](https://x.com/VedaAI00/status/2119216936483766316)。

沿着这个方向继续推进，我期待的是软硬件共同演进（**co-evolution**）：任务提出需求，模型生成或调整本体与控制方案，再通过仿真、制造和实测获得反馈，改进下一版。这也是物理世界 RSI（递归自我改进）的一条可能路径。[自动机器人设计](https://pmc.ncbi.nlm.nih.gov/articles/PMC10576117/)已有早期研究基础；把这样的协同设计扩展为持续迭代的自主闭环，仍是值得探索的长期目标。

再看[下面的机器人结构与运动短片](#video-hardware-design)：它提供了一个观察本体设计的直观视角——连杆如何布置、关节如何运动、结构如何支撑动作。将这些设计变量与任务表现联系起来，正是软硬件协同设计需要回答的问题。

<figure class="embodied-video" id="video-hardware-design">
  <video controls playsinline preload="metadata" poster="{{ '/assets/video/embodied-ai/ai-hardware-design.jpg' | relative_url }}" aria-label="机器人本体结构与运动演示">
    <source src="{{ '/assets/video/embodied-ai/ai-hardware-design.mp4' | relative_url }}" type="video/mp4">
    您的浏览器不支持视频播放，请<a href="{{ '/assets/video/embodied-ai/ai-hardware-design.mp4' | relative_url }}">下载视频</a>观看。
  </video>
  <figcaption><strong>硬件本体设计：机器人结构与运动演示</strong><br>观察连杆、关节与运动方式的关系。短片作为设计视角的补充，具体方法以原帖为准。<br>约 6 秒 · @VedaAI00 分享<br>来源：<a href="https://x.com/VedaAI00/status/2119251349951119857">https://x.com/VedaAI00/status/2119251349951119857</a></figcaption>
</figure>

## 从一个具体场景开始

从 Fable 5.2 的机械臂操作，到三维环境生成，再到 HALO 的本地部署与 Transformer Transformer 的协同设计，这些案例分别回答了同一条路径上的不同问题：**能力从哪里来，经验在哪里积累，系统如何持续改进。**

对于大模型从业者，现在值得做的是选定一个能持续接触的场景：明确任务和成功标准，接入模型，记录失败，在数据、仿真与真实硬件之间反复验证。当这条闭环真正转起来，通用模型每一次能力增长，才更有机会转化成自己的机器人能力。

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

11. Anthropic：[Introducing Claude Fable 5.2 and Claude Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2)，2026；[RoboDojo 基准](https://robodojo-benchmark.com/)。
