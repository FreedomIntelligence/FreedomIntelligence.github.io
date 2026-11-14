---
layout: post
title: "从大模型到具身智能：让通用能力在物理世界中生长"
date: 2026-11-14
author: 王本友
description: "为什么现在可能是大模型从业者进入具身智能最好的时候：让通用能力降低进入门槛，再通过真实场景的反馈持续成长。"
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
---

**我越来越相信，现在可能是迄今为止大模型与 AI 从业者进入具身智能最好的时候。**通用模型开始展现将理解、推理与行动连接起来的潜力，让我们看到了直接以大模型为能力基础构建机器人的曙光。

## 为什么这个窗口正在打开

最近，OpenAI 的一次组织调整，又强化了我的这个判断。据[《财富》报道](https://fortune.com/2026/11/13/openai-disbands-robotics-team-as-its-general-models-start-running-robots/)，机器人研究人员被并入核心研究团队，应用机器人与硬件团队转入应用部门。

我的理解是，**具身正在成为通用大模型的重要应用域，一个新的 subdomain。**如果这条路线持续发展，机器人就有机会像编程等领域一样，持续受益于通用模型在理解、推理和学习上的进步。模型每一次能力增长，都可能抬高机器人研发的起点。

这正是窗口期的意义。过去，进入一个机器人任务，往往需要围绕感知、规划和控制积累大量专门知识，再把各个模块连接起来。通用模型让其中一部分知识与能力有机会被复用，减少为每个任务从头设计专用流程的负担。对熟悉模型训练、多模态、智能体和推理系统的团队而言，已有积累因此更容易转化为进入具身的起点。

我所说的“最好的时候”，指的是通用能力的增长正在打开新的入口。机器人的接触、动力学和实时控制仍需要专业知识，但这些知识可以逐步沉淀到模型、技能与系统接口中，让更多 AI 团队能够在已有基础上开展工作。接下来真正值得投入的，就是把模型带到现场，让行动产生的经验持续回到研发过程。

<h2 id="capability">通用能力怎样变成行动能力</h2>

### 从通用知识出发，降低每个新任务的起点成本

我看好通用模型走向具身，是因为机器人面临的任务中，有大量可以共享的能力：理解人的意图、辨认环境中的关系、拆解目标、选择工具，以及根据结果调整计划。如果这些能力能够随通用模型一起进步，每进入一个新场景，研发就能在更高的起点上展开。

这也改变了我对机器人模型研发的理解。**值得追求的是一种能够继续学习、适应新任务的能力基础。**模型对世界的理解越充分，特定场景需要补充的经验就越有可能集中在真正困难的地方：这个机体能做什么，动作会怎样改变环境，遇到偏差时如何恢复。

### 让行动后果进入模型的学习过程

能力可以共享，行动的后果却必须在具体环境里学习。物理世界因此给通用模型提出了更严格的要求：一次动作会改变下一次观察，前面累积的误差会影响后面的计划，执行时机本身也决定结果。模型需要在持续变化的环境中判断自己做到了哪一步，并决定继续、调整还是重新尝试。

我认为，具身化的核心就在于让这种行动后果进入学习过程。空间、时间、接触与动作需要形成更连贯的表示，高层推理需要与运动控制建立稳定的接口。直接预测动作、调用已有技能，或通过控制器执行，都可以成为这条路径上的实现方式；语音与动作的协调，也可以自然地融入其中。

相应地，我们应当关心模型在新环境中还需要多少额外经验，能否完成更长的任务，以及出错后能否恢复。**通用能力能迁移多少，行动经验还要补多少，决定了这条路线能走多远。**[下面的演示](#video-fable)可以帮助直观理解这种迁移。

<figure class="embodied-video" id="video-fable">
  <video controls playsinline preload="metadata" poster="{{ '/assets/video/embodied-ai/fable-robot-control.jpg' | relative_url }}" aria-label="Fable 5.2 操作真实机械臂">
    <source src="{{ '/assets/video/embodied-ai/fable-robot-control.mp4' | relative_url }}" type="video/mp4">
    您的浏览器不支持视频播放，请<a href="{{ '/assets/video/embodied-ai/fable-robot-control.mp4' | relative_url }}">下载视频</a>观看。
  </video>
  <figcaption><strong>值得一看：Fable 5.2 如何把通用能力带到机械臂上</strong><br>约 23 秒的演示包含拼块解谜、拧瓶盖、装配齿轮与画画。Anthropic 表示，能力提升也覆盖未被明确针对性训练的机器人任务；值得关注的是同一模型面对不同任务的迁移能力。片段经过加速和剪辑，不代表实际执行速度。<br>作为另一类证据，官方报告 Fable 5.2 在模拟双臂基准 RoboDojo Sim 的内部运行中取得 64.9%（同表 GPT-6 Astra 为 29.8%），超过同一 harness 下比较的其他前沿模型及多数机器人专用系统。这是仿真评估，不能直接当作真实机器人的成功率。<br><a href="https://www.anthropic.com/claude-fable-and-mythos-5-2">发布说明与演示</a> · <a href="https://robodojo-benchmark.com/">RoboDojo 基准</a> · 延伸阅读：<a href="https://deepmind.google/blog/gemini-robotics-brings-ai-into-the-physical-world/">Gemini Robotics 将动作纳入模型输出</a></figcaption>
</figure>

<h2 id="scene-loop">让真实场景成为持续学习的来源</h2>

### 从一个能反复验证的任务开始

要回答迁移究竟发生了多少，就需要一个能够反复验证的现场。对大多数团队而言，从持续接触得到的本地场景出发更有价值：任务能够被清楚定义，失败可以被记录，同样的条件可以用来比较不同版本。

这里的积累，既包括数据，也包括对任务的理解。哪些偏差可以接受，什么情况下需要重新规划，怎样判断一次执行真正完成，都需要在实践中逐渐明确。头部模型可以帮助整理数据和构建评价，但这些评价仍要与现场结果对照。**只有反馈可信，训练才知道该往哪里改。**

### 用生成环境扩展可以学习的经验

随着任务逐渐清晰，另一个限制会出现：真实试错的成本高，能够采集的环境变化有限。3D 生成和重建由此有了明确用途。我们可以围绕现场问题构建环境，改变布局、物体位置与交互条件，让机器人在回到现场之前经历更多变化。[图像生成空间](#video-image-to-3d)和[平面图生成漫游](#video-floorplan)，提供了构建这些环境的直观入口。

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
  <figcaption><strong>2D 平面图 → 室内 3D 漫游</strong><br>从房间布局生成可以进入的三维空间，适合思考如何复用楼宇和室内场景已有的平面资料。建议结合 <a href="https://worldlabs.ai/blog/real-to-sim-to-real">World Labs 的 real-to-sim-to-real 工作</a>一起看：空间展示之后，如何继续构建用于机器人训练和评估的环境？<br>评价环节还可参考 <a href="https://arxiv.org/abs/2601.00675">RoboReward 对视觉语言奖励模型的探索</a>，理解如何把任务结果变成训练反馈。<br>to3D · 约 10 秒<br>来源：<a href="https://x.com/wanerfu/status/2121144338017292602">https://x.com/wanerfu/status/2121144338017292602</a></figcaption>
</figure>
</div>

生成的空间要服务于学习，还需要物理属性、可交互对象、任务接口和评价标准。我的判断是，环境构建应当由真实失败来牵引：现场暴露了什么问题，就补充相应的训练条件，再通过实测检查改进是否有效。这样，仿真与真实数据才能围绕同一个目标积累。

### 通过本地部署与算力适配，把能力留在现场

这套过程要持续发生，还依赖稳定的部署。响应太慢、网络波动或计算资源不足，都会改变模型实际能够完成的任务。因此，本地部署应当与模型训练一起考虑：哪些决策需要在机载设备上完成，哪些计算可以交给现场服务器，断网时系统能保留怎样的能力。[本地任务编排](#video-halo)与[动作模型板载执行](#video-groot)对应的部署范围，也需要明确。

**在国内场景里，国产算力卡适配和推理加速值得成为团队自己的工程积累。**适配需要结合目标模型、算子支持、推理框架、显存与功耗条件，在实际任务负载下比较。随着部署规模扩大，维护方式、资源调度和长期成本也会影响方案选择。

加速的目标应当落在任务上。量化、蒸馏、缓存复用和算子优化，都可以纳入评估，但最终要检查从感知到动作的总延迟、响应的稳定性，以及模型压缩后任务成功率是否下降。对于机器人，能够及时完成一次可靠的决策，比孤立地追求某个推理速度指标更有意义。

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

当数据、环境、评价与部署相互衔接，本地场景就能持续产出有价值的经验。团队逐渐能够分清，哪些问题需要更多训练，哪些来自系统延迟，哪些已经触及控制方式和机体本身的限制。这也把改进的范围从模型进一步推向整个机器人。

<h2 id="coevolution">从改进模型，走向改进整个机器人</h2>

### 把执行反馈带入控制研发

如果失败来自控制，AI 就可以参与算法编写、奖励设计、调参与测试。大模型已有的编程和推理能力，可以沿着执行记录进入研发流程：提出修改，在一致的条件下比较效果，把有效改进带回真实系统。这里最重要的积累，是让每轮改动都能得到可追溯的反馈。

我的判断是，这会让机器人开发越来越依赖一套能够反复运行的实验流程。问题被记录下来，候选改动有一致的评价条件，仿真结果能够与实测对照，AI 才能在连续迭代中发挥作用。团队在数据组织、自动评估和开发工具上的积累，也就能够进一步延伸到运控研发。

### 当控制遇到边界，让身体也参与优化

但控制算法的空间也受到身体约束。关节配置、连杆尺寸、执行器与传感器布局，会影响机器人能够观察和完成怎样的动作。如果机械设计与控制研发长期分离，很多问题只能在机体定型后由算法反复补偿。

**进一步的可能，是让任务表现同时影响控制策略与身体设计。**当模型能够在不同机体之间学习动作规律，本体就有机会成为可以一起调整的变量。对某类任务更合适的结构，可能降低控制难度；更好的控制能力，也可能使新的结构方案变得可行。[下面两段视频](#video-transformer-transformer)提供了观察这种关系的视角。

<div class="embodied-video-grid">
<figure class="embodied-video" id="video-transformer-transformer">
  <video controls playsinline preload="metadata" poster="{{ '/assets/video/embodied-ai/transformer-transformer.jpg' | relative_url }}" aria-label="Transformer Transformer 机器人本体与控制协同设计演示">
    <source src="{{ '/assets/video/embodied-ai/transformer-transformer.mp4' | relative_url }}" type="video/mp4">
    您的浏览器不支持视频播放，请<a href="{{ '/assets/video/embodied-ai/transformer-transformer.mp4' | relative_url }}">下载视频</a>观看。
  </video>
  <figcaption><strong>Transformer Transformer：让身体也成为设计变量</strong><br>这段约 28 秒的演示适合结合目标运动观察机器人结构的变化。斯坦福与哥伦比亚大学团队将本体生成和跨本体控制放入统一模型架构，根据目标轨迹与奖励，在设定的设计空间内探索机体方案。值得关注的是，任务表现开始反过来影响身体设计。<br>项目已开源；团队还制造并测试了优化版 ALOHA，报告跟踪误差较原设计降低超过 70%。这些结果体现了协同设计的潜力，尚不意味着可以对任意任务自动找到最优机体。<br><a href="https://transformer-transformer.github.io/">项目</a> · <a href="https://arxiv.org/abs/2607.25798">论文</a> · <a href="https://github.com/real-stanford/transformer-transformer">开源代码</a><br>视频来源：<a href="https://x.com/VedaAI00/status/2119216936483766316">https://x.com/VedaAI00/status/2119216936483766316</a></figcaption>
</figure>

<figure class="embodied-video" id="video-hardware-design">
  <video controls playsinline preload="metadata" poster="{{ '/assets/video/embodied-ai/ai-hardware-design.jpg' | relative_url }}" aria-label="机器人本体结构与运动演示">
    <source src="{{ '/assets/video/embodied-ai/ai-hardware-design.mp4' | relative_url }}" type="video/mp4">
    您的浏览器不支持视频播放，请<a href="{{ '/assets/video/embodied-ai/ai-hardware-design.mp4' | relative_url }}">下载视频</a>观看。
  </video>
  <figcaption><strong>从结构与运动看本体设计</strong><br>约 6 秒的短片，适合观察连杆、关节与运动方式的关系。与旁边的协同设计演示放在一起，可以进一步思考：哪些动作困难来自控制，哪些来自身体结构？具体方法以原帖为准。<br>视频来源：<a href="https://x.com/VedaAI00/status/2119251349951119857">https://x.com/VedaAI00/status/2119251349951119857</a><br>延伸阅读：<a href="https://eureka-research.github.io/">Eureka：用大模型迭代奖励函数，辅助控制技能学习</a> · <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10576117/">自动机器人设计的早期研究</a></figcaption>
</figure>
</div>

### 从一次协同设计，走向持续共同演进

沿着这个方向，我期待的是软硬件共同演进（co-evolution）：现场执行暴露问题，模型提出控制或本体的修改，仿真帮助筛选方案，制造与实测再提供下一轮反馈。评价还需要纳入能耗、耐用性、成本与维护，让改进逐渐贴近长期使用的要求。

这也是物理世界递归自我改进（RSI）的一条可能路径。要让它持续运转，设计、制造、测量和评估都必须能够接入同一个研发过程。它的长期吸引力在于，AI 获得的经验最终可以反过来改善承载自身能力的系统。

## 把能力增长接到自己的实践中

这也是我认为现在值得进入具身的原因：通用模型正在提供越来越高的能力起点，而具体场景中的数据、评价和部署体系仍需要亲手建立。越早把模型接入真实任务，就越早有机会积累自己的经验，并在下一轮模型进步时验证、吸收和放大这些能力。

对于大模型与 AI 从业者，这个窗口值得认真把握。从一个可以持续接触的场景开始，把熟悉的模型能力接到行动上，再用真实反馈推动模型、控制与硬件一起改进。**通用模型打开了进入具身的大门，持续实践则让这份通用能力逐渐成为自己的机器人能力。**

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
