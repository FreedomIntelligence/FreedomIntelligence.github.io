---
layout: post
title: "从大模型到具身智能：三个值得投入的机会"
date: 2026-11-14
author: 王本友
description: "通用大模型如何走向物理世界：从能力迁移、场景闭环与本地部署，到模型、控制与硬件的共同演进。"
permalink: /blog/2026/foundation-models-to-embodied-ai/
tags: embodied-ai multimodal agents simulation robotics
_styles: |
  .embodied-video { margin: 1.8rem 0; scroll-margin-top: 5rem; }
  .embodied-video video { display: block; width: 100%; height: auto; aspect-ratio: 16 / 9; object-fit: contain; border-radius: 10px; background: #111; }
  .embodied-video figcaption { margin-top: .6rem; font-size: .9rem; line-height: 1.65; color: var(--global-text-color-light); }
  .embodied-video-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.2rem; margin: 1.8rem 0; }
  .embodied-video-grid .embodied-video { margin: 0; min-width: 0; }
  .post-content a { overflow-wrap: anywhere; }
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

### 具身成为通用能力继续生长的地方

我看好这条路线，首先是因为机器人需要的许多能力，已经与通用大模型的研究方向交汇：理解指令、辨认物体及其关系、拆解任务、调用工具，以及根据执行结果修正计划。模型在这些方面的进步，有机会成为不同机器人、不同任务共同受益的能力基础。

**如果具身成为通用模型的重要应用域，机器人研发就有机会建立在持续增长的通用能力之上。**团队可以把更多精力投入动作接口、场景经验和执行反馈，让模型已有的知识在特定机体上发挥作用。对大模型从业者而言，熟悉的多模态训练、后训练、推理和评估方法，由此获得了新的用武之地。

不过，理解物理世界与可靠地作用于物理世界之间，还有很长的距离。模型可以正确描述“拿起杯子”，却未必能处理遮挡、接触、滑动与抓取失败。语言中的合理答案，只有经过动作执行和环境反馈，才能变成可信的机器人能力。

### 把行动与反馈接进模型的学习过程

因此，我认为关键在于建立**观察—决策—行动—再观察**的连续过程。模型需要知道自己刚才做了什么、环境发生了什么变化，以及下一步是否需要调整。任务执行中的失败、恢复和重新规划，也应该成为训练数据与评估的一部分。

这里有两类相互促进的工作：一类是把空间、时间、接触和动作纳入模型的表示与学习；另一类是设计合适的系统接口，让高层任务推理与更高频的运动控制协作。模型究竟直接输出动作，还是通过技能和控制器执行，可以由任务需要和机体条件决定。语音交流与动作协调，也可以放在这个统一的交互过程中研究。

评估标准也需要随之变化。除了单次成功率，还要观察新物体、新布局和新机体上的迁移，长任务中的稳定性，以及出错后能否恢复。**通用能力能迁移多少，现场经验还要补多少，是最值得持续测量的问题。**下面的[机械臂演示](#video-fable)提供了一个直观入口，具体任务与评估背景放在视频下方。

<figure class="embodied-video" id="video-fable">
  <video controls playsinline preload="metadata" poster="{{ '/assets/video/embodied-ai/fable-robot-control.jpg' | relative_url }}" aria-label="Fable 5.2 操作真实机械臂">
    <source src="{{ '/assets/video/embodied-ai/fable-robot-control.mp4' | relative_url }}" type="video/mp4">
    您的浏览器不支持视频播放，请<a href="{{ '/assets/video/embodied-ai/fable-robot-control.mp4' | relative_url }}">下载视频</a>观看。
  </video>
  <figcaption><strong>值得一看：Fable 5.2 如何把通用能力带到机械臂上</strong><br>约 23 秒的演示包含拼块解谜、拧瓶盖、装配齿轮与画画。Anthropic 表示，能力提升也覆盖未被明确针对性训练的机器人任务；值得关注的是同一模型面对不同任务的迁移能力。片段经过加速和剪辑，不代表实际执行速度。<br>作为另一类证据，官方报告 Fable 5.2 在模拟双臂基准 RoboDojo Sim 的内部运行中取得 64.9%，超过同一 harness 下比较的其他前沿模型及多数机器人专用系统。这是仿真评估，不能直接当作真实机器人的成功率。<br><a href="https://www.anthropic.com/claude-fable-and-mythos-5-2">发布说明与演示</a> · <a href="https://robodojo-benchmark.com/">RoboDojo 基准</a> · 延伸阅读：<a href="https://deepmind.google/blog/gemini-robotics-brings-ai-into-the-physical-world/">Gemini Robotics 将动作纳入模型输出</a></figcaption>
</figure>

<h2 id="scene-loop">二、落地的起点：用本地场景建立训练与评估闭环</h2>

### 用真实任务积累自己的经验

通用模型提供能力起点，本地场景决定这些能力怎样变得有用。厂房巡检、楼宇服务、室内操作，都可以成为起点。能够持续进入同一个现场，意味着我们可以明确任务标准、记录失败、比较版本，并确认改进是否真的有效。

对于大模型团队，最有价值的积累可能是这套持续产生反馈的机制：哪些任务值得做，怎样定义完成，哪些失败反复出现，新增数据究竟解决了什么问题。头部模型可以辅助标注、整理任务和评价结果，但评价本身也要用现场数据校准；奖励模型的研究可以参考 [RoboReward](https://arxiv.org/abs/2601.00675)。

### 让生成环境服务于训练

**3D 生成的价值，在于降低构建和改变训练环境的成本。**围绕真实任务，我们可以改变空间布局、物体位置与障碍条件，让机器人经历更多变化，再把值得验证的策略带回现场。[图像生成空间](#video-image-to-3d)和[平面图生成漫游](#video-floorplan)是两种直观入口。

<div class="embodied-video-grid">
<figure class="embodied-video" id="video-image-to-3d">
  <video controls playsinline preload="metadata" poster="{{ '/assets/video/embodied-ai/imageTo3D.jpg' | relative_url }}" aria-label="3D 场景演示一：imageTo3D">
    <source src="{{ '/assets/video/embodied-ai/imageTo3D.mp4' | relative_url }}" type="video/mp4">
    您的浏览器不支持视频播放，请<a href="{{ '/assets/video/embodied-ai/imageTo3D.mp4' | relative_url }}">下载视频</a>观看。
  </video>
  <figcaption><strong>4 张概念图 → 可漫步的 3D 世界</strong><br>值得关注少量图像如何变成空间：据原帖，Astra + Blender 5.3 的工作流是生成 4 张概念图，将图像排列到三维空间，通过挤压、融合构建场景，再导出到 Blender。它展示了环境构建的便捷入口，距离物理仿真还需要进一步加工。<br>imageTo3D · 约 25 秒<br>来源：<a href="https://x.com/sonic0828/status/2121114865079406608">https://x.com/sonic0828/status/2121114865079406608</a></figcaption>
</figure>

<figure class="embodied-video" id="video-floorplan">
  <video controls playsinline preload="metadata" poster="{{ '/assets/video/embodied-ai/to3D.jpg' | relative_url }}" aria-label="3D 场景演示二：to3D">
    <source src="{{ '/assets/video/embodied-ai/to3D.mp4' | relative_url }}" type="video/mp4">
    您的浏览器不支持视频播放，请<a href="{{ '/assets/video/embodied-ai/to3D.mp4' | relative_url }}">下载视频</a>观看。
  </video>
  <figcaption><strong>2D 平面图 → 室内 3D 漫游</strong><br>从房间布局生成可以进入的三维空间，适合思考如何复用楼宇和室内场景已有的平面资料。建议结合 <a href="https://worldlabs.ai/blog/real-to-sim-to-real">World Labs 的 real-to-sim-to-real 工作</a>一起看：空间展示之后，如何继续构建用于机器人训练和评估的环境？<br>to3D · 约 10 秒<br>来源：<a href="https://x.com/wanerfu/status/2121144338017292602">https://x.com/wanerfu/status/2121144338017292602</a></figcaption>
</figure>
</div>

从可看的三维场景走向可用的训练环境，还需要碰撞几何、物理属性、可交互对象、任务接口和评估标准。生成环境应该围绕真实失败来补充：现场哪里容易出问题，就在仿真中构造相关变化，再通过实测检查改进能否迁移。

### 国产卡、本地部署与推理加速，也是场景能力的一部分

本地化还包括计算系统。对于需要持续运行的机器人，模型在哪里推理、一次响应需要多久、断网后还能完成什么，都应该在定义任务时一起考虑。可以按任务层级分配计算：机载设备承担对响应时间敏感的动作与控制，现场服务器承接更大的感知或规划模型，训练和离线分析则使用更充足的算力。[本地编排](#video-halo)与[动作模型板载执行](#video-groot)的区别，也值得在系统设计时讲清楚。

**面向国内场景，国产算力卡的适配值得成为一项持续投入的工程能力。**选型和适配应从目标模型、算子支持、推理框架、显存容量和实际负载出发，在候选设备上测量整条执行链路。能否稳定运行、部署维护是否方便，以及多台机器人接入后的成本，都会影响一个方案能否长期使用。

推理加速则要围绕任务的响应预算展开。可以评估量化、蒸馏、缓存复用和算子优化，也可以通过技能复用减少重复规划。每种优化都要回到任务上验证：从摄像头输入到动作输出的总延迟是否下降，较慢的一次响应能否接受，功耗与温度是否稳定，精度变化是否影响操作成功率。单看模型的 token 生成速度，无法回答这些问题。

<div class="embodied-video-grid">
<figure class="embodied-video" id="video-halo">
  <video controls playsinline preload="metadata" poster="{{ '/assets/video/embodied-ai/on-device-hardware.jpg' | relative_url }}" aria-label="HALO：宇树 G1 背载 Mac mini，本地千问指挥行动">
    <source src="{{ '/assets/video/embodied-ai/on-device-hardware.mp4' | relative_url }}" type="video/mp4">
    您的浏览器不支持视频播放，请<a href="{{ '/assets/video/embodied-ai/on-device-hardware.mp4' | relative_url }}">下载视频</a>观看。
  </video>
  <figcaption><strong>HALO：宇树 G1 + Mac mini + 本地千问</strong><br>苹果研究团队让 G1 背着 Mac mini 钻桌底、侧身过窄门、找椅子坐下。根据论文，Mac mini M4 Pro 默认以 4-bit MLX 运行 Qwen3.6-35B-A3B 做本地任务编排，无需联网；运动生成也在 Mac mini 上完成，底层动作跟踪由 G1 自带的 Jetson Orin NX 执行。值得看的是不同层级的模型与控制如何分工。<br>约 46 秒 · <a href="https://apple-aiml-research.github.io/ml-halo/">项目演示</a> · <a href="https://arxiv.org/abs/2611.06908">论文</a><br>来源：<a href="https://x.com/QwenAIFans/status/2119282685898359288">https://x.com/QwenAIFans/status/2119282685898359288</a></figcaption>
</figure>

<figure class="embodied-video" id="video-groot">
  <video controls playsinline preload="metadata" poster="{{ '/assets/video/embodied-ai/groot-onboard.jpg' | relative_url }}" aria-label="GR00T 2 机器人任务执行演示">
    <source src="{{ '/assets/video/embodied-ai/groot-onboard.mp4' | relative_url }}" type="video/mp4">
    您的浏览器不支持视频播放，请<a href="{{ '/assets/video/embodied-ai/groot-onboard.mp4' | relative_url }}">下载视频</a>观看。
  </video>
  <figcaption><strong>GR00T 2：世界动作模型与板载执行</strong><br>可以留意室内操作中身体与手部的协调。官方介绍，GR00T 2 基于 Cosmos 联合预测视频与动作；Turbo 的 2B 联合视频—动作 Transformer 可在 G1 的 Jetson Thor 上运行，配合 SONIC 全身控制器执行。演示中的高层推理仍在板外，因此板载执行不等于整个系统完全离线。官方目前标注代码将于 2026 年 12 月发布。<br>约 91 秒 · <a href="https://research.nvidia.com/labs/gear/gr00t-2/">项目与技术报告</a> · <a href="https://developer.nvidia.com/blog/introducing-nvidia-jetson-thor-the-ultimate-platform-for-physical-ai/">Jetson Thor 平台介绍</a><br>来源：<a href="https://x.com/VedaAI00/status/2120311947858268219">https://x.com/VedaAI00/status/2120311947858268219</a></figcaption>
</figure>
</div>

这样，数据、仿真、模型和部署就能形成完整的场景闭环：**在现场发现问题，在训练与系统优化中改进，再回到现场验证。**本地部署和加速也由此成为机器人能力的一部分，直接影响模型能否及时、稳定地完成任务。

<h2 id="coevolution">三、长期的演进：让模型、运控与硬件一起改进</h2>

### 让 AI 参与控制研发

当执行反馈被系统地记录下来，AI 也可以参与运控算法的编写、奖励设计、调参和测试。已有的[自动奖励设计研究](https://eureka-research.github.io/)提供了一个入口。更值得投入的，是让开发过程持续利用失败轨迹与实测结果：提出修改、验证效果、保留有效改进，再进入下一轮。

这要求把评价条件建立好。同一个控制方案要在不同负载、初始状态与环境变化下比较；仿真中的收益，也要通过真实机体检验。大模型的代码与推理能力，可以在这样的研发流程中逐步转化为控制能力的提升。

### 从协同设计走向共同演进

机器人一个关键的工程瓶颈，是机械硬件与控制算法的割裂。机体一旦固定，关节配置、连杆尺寸、执行器和传感器布局就会限定动作空间。**如果把本体也纳入优化，任务就能同时影响“怎样控制”和“需要怎样的身体”。**

我期待的软硬件共同演进（co-evolution），是围绕任务表现反复调整模型、控制策略和本体：执行暴露瓶颈，仿真比较候选方案，制造与实测提供反馈，再决定下一轮改进。这样的过程也需要考虑成本、能耗、耐用性与维护，让优化目标逐步接近真实使用。

这可以成为物理世界 RSI（递归自我改进）的一条长期路径。[自动机器人设计](https://pmc.ncbi.nlm.nih.gov/articles/PMC10576117/)和[软硬件协同设计](#video-hardware-design)已经提供了研究起点；要走向持续自主改进，还需要把设计、制造、测量与版本评估接成可靠的闭环。

<figure class="embodied-video" id="video-hardware-design">
  <video controls playsinline preload="metadata" poster="{{ '/assets/video/embodied-ai/ai-hardware-design.jpg' | relative_url }}" aria-label="机器人本体结构与运动演示">
    <source src="{{ '/assets/video/embodied-ai/ai-hardware-design.mp4' | relative_url }}" type="video/mp4">
    您的浏览器不支持视频播放，请<a href="{{ '/assets/video/embodied-ai/ai-hardware-design.mp4' | relative_url }}">下载视频</a>观看。
  </video>
  <figcaption><strong>硬件本体设计：从结构与运动看协同设计</strong><br>约 6 秒的短片，适合观察连杆、关节与运动方式的关系；具体方法以原帖为准。<br>视频来源：<a href="https://x.com/VedaAI00/status/2119251349951119857">https://x.com/VedaAI00/status/2119251349951119857</a><br><br><strong>延伸推荐：Transformer Transformer</strong>（独立阅读材料，并非将上述短片认定为该项目成果）。斯坦福与哥伦比亚大学团队根据目标运动轨迹和奖励，在设定的设计空间内生成本体，同一模型架构支持本体生成与跨本体控制。团队制造的优化版 ALOHA 跟踪误差较原设计降低超过 70%，是理解软硬件 co-design 的具体参考。<br><a href="https://transformer-transformer.github.io/">项目</a> · <a href="https://arxiv.org/abs/2607.25798">论文</a> · <a href="https://github.com/real-stanford/transformer-transformer">开源代码</a><br>相关分享：<a href="https://x.com/VedaAI00/status/2119216936483766316">https://x.com/VedaAI00/status/2119216936483766316</a></figcaption>
</figure>

## 从一个具体场景开始

这三组机会有着连续的关系：**通用模型提供能力起点，本地场景积累经验与反馈，软硬件共同演进扩大可优化的空间。**

对于大模型从业者，现在值得做的是选定一个能持续接触的场景，把任务标准、数据采集、模型接口与本地部署做扎实。随着现场反馈不断进入训练和开发过程，通用模型每一次能力增长，才更有机会转化成自己的机器人能力。

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
