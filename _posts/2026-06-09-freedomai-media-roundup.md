---
layout: distill
title: "FreedomAI Lab 媒体报道与研究脉络：从医疗大模型到多模态智能体"
date: 2026-06-09
description: 基于机器之心、量子位、PaperWeekly 等公开报道与项目链接，梳理 CUHKSZ FreedomAI Lab 在开放医疗智能、多模态长上下文、社会模拟与移动智能体方向的研究进展。
tags: FreedomAI media medical-llm multimodal-agents open-source

authors:
  - name: FreedomAI Lab
    url: "https://freedomintelligence.github.io/"
    affiliations:
      name: CUHKSZ

toc:
  - name: Open Medical Intelligence
  - name: Open Dialogue and Evaluation
  - name: Multimodal Long Context
  - name: Agents and Simulated Worlds
  - name: Community and Source Index

_styles: >
  .media-roundup-lead {
    background: #f7f8fa;
    border: 1px solid #e6e8eb;
    border-radius: 8px;
    padding: 1rem;
    margin: 1rem 0 1.5rem;
  }
  .media-roundup-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1rem;
    margin: 1rem 0 1.5rem;
  }
  .media-roundup-card {
    border: 1px solid #e6e8eb;
    border-radius: 8px;
    overflow: hidden;
    background: #fff;
  }
  .media-roundup-card img {
    width: 100%;
    height: auto;
    display: block;
    border-bottom: 1px solid #e6e8eb;
  }
  .media-roundup-card figcaption {
    padding: .7rem .8rem;
    margin: 0;
    color: #575f6a;
    font-size: .86rem;
    line-height: 1.45;
  }
  .source-pill {
    display: inline-block;
    border: 1px solid #d8dde4;
    border-radius: 999px;
    padding: .08rem .55rem;
    margin: .12rem .15rem .12rem 0;
    font-size: .8rem;
    color: #4f5b67;
    background: #fbfcfd;
  }
  .source-list li {
    margin-bottom: .35rem;
  }
---

{% comment %}
This roundup is a lab-authored synthesis. Media images are kept with attribution
and used only as contextual references to the linked public reports.
{% endcomment %}

<div class="media-roundup-lead">
过去几年，香港中文大学（深圳）FreedomAI Lab 围绕开放医疗智能、通用对话数据、多模态长上下文、社会模拟和移动智能体基础设施持续开源。机器之心、量子位、PaperWeekly 等媒体的报道，把这些工作放在更宽的技术语境中：从中文医疗大模型，到一次处理上千张图像的多模态模型，再到金融市场、微观世界与手机 Agent 的可执行环境。
<br><br>
本文以 FreedomAI Lab 的视角重新整理这些公开报道。文中媒体图示均保留来源署名；图片来自对应报道或镜像页，版权归原媒体与原作者所有。完整原文、镜像页和项目链接见文末来源索引。
</div>

## Open Medical Intelligence

FreedomAI Lab 最早被广泛关注的一条主线，是让医学大模型更开放、更可评测、更贴近中文真实场景。媒体对 HuatuoGPT 的报道集中在两个问题上：如何把中文医疗问答、医生反馈和语言模型能力结合起来；以及如何让模型评价不止停留在单一分数，而能接受更接近临床沟通的检验。

<div class="media-roundup-grid">
  <figure class="media-roundup-card">
    <img src="{{ '/assets/img/media-roundup-2026/huatuogpt-overview.png' | relative_url }}" alt="HuatuoGPT media diagram">
    <figcaption>图源：机器之心转载验证页，报道 HuatuoGPT 的中文医疗大模型路线。来源：<a href="https://www.sohu.com/a/680793310_129720">Sohu 镜像</a>；相关原文见 <a href="https://mp.weixin.qq.com/s/lwJb8N420xfMTvXJPM2gtg">机器之心公众号</a> 与 <a href="https://www.python88.com/topic/155876">PaperWeekly 镜像</a>。</figcaption>
  </figure>
  <figure class="media-roundup-card">
    <img src="{{ '/assets/img/media-roundup-2026/huatuogpt-auto-eval.jpeg' | relative_url }}" alt="HuatuoGPT evaluation figure">
    <figcaption>图源：机器之心转载验证页，展示 HuatuoGPT 报道中的评测材料。项目入口：<a href="https://github.com/FreedomIntelligence/HuatuoGPT">HuatuoGPT GitHub</a>、<a href="https://huggingface.co/FreedomIntelligence/HuatuoGPT-7B">HuatuoGPT-7B</a>。</figcaption>
  </figure>
</div>

在 HuatuoGPT 之后，我们继续推动中文医疗大模型的系统化评估。CMB 的出发点是把医学考试、医学知识与模型能力评测纳入更完整的中文医疗基准框架。PaperWeekly 将其放在“SuperAlignment in Medical Science”的语境下讨论：医疗智能不只需要生成答案，也需要可追踪、可比较、可复现的评价基准。

<div class="media-roundup-grid">
  <figure class="media-roundup-card">
    <img src="{{ '/assets/img/media-roundup-2026/cmb-overview.png' | relative_url }}" alt="CMB benchmark overview">
    <figcaption>图源：PaperWeekly CMB 报道镜像。来源：<a href="https://blog.csdn.net/c9Yv2cf9I06K2A9E/article/details/132632499">CSDN 镜像</a>、<a href="https://www.sohu.com/a/717301678_121119001">Sohu 转载验证页</a>；项目入口：<a href="https://github.com/FreedomIntelligence/CMB">CMB GitHub</a>、<a href="https://cmedbenchmark.llmzoo.com/">CMB 官网</a>。</figcaption>
  </figure>
</div>

这条路线后来延展到 HuatuoGPT-II、HuatuoGPT-o1、HuatuoGPT-3 和更多医学视觉模型。对我们而言，“开放医疗智能”不是单个模型的发布，而是一套连续的基础设施：数据、评测、模型、推理与社区反馈共同迭代。

<p>
  <span class="source-pill"><a href="https://github.com/FreedomIntelligence/HuatuoGPT-II">HuatuoGPT-II</a></span>
  <span class="source-pill"><a href="https://github.com/FreedomIntelligence/HuatuoGPT-o1">HuatuoGPT-o1</a></span>
  <span class="source-pill"><a href="https://github.com/FreedomIntelligence/HuatuoGPT-3">HuatuoGPT-3</a></span>
  <span class="source-pill"><a href="https://huggingface.co/datasets/FreedomIntelligence/medical-o1-reasoning-SFT">medical-o1 reasoning SFT</a></span>
</p>

## Open Dialogue and Evaluation

另一条媒体持续关注的线索，是开源对话能力和评测方法。机器之心报道 Phoenix / Chimera 时，强调了用 GPT-4 参与模型评测的实验范式，也介绍了港中深团队在 LLMZoo 方向的开放工作。我们希望把“会说多语言、能接受评价、可供社区复现”的模型基础能力，做成公共资源。

<div class="media-roundup-grid">
  <figure class="media-roundup-card">
    <img src="{{ '/assets/img/media-roundup-2026/phoenix-llmzoo.png' | relative_url }}" alt="Phoenix and Chimera media figure">
    <figcaption>图源：机器之心关于 Phoenix / Chimera 的报道转载页。来源：<a href="https://cloud.tencent.com/developer/article/2270060">腾讯云镜像</a>；原文：<a href="https://mp.weixin.qq.com/s/WLYmwT1LJ9YGFdW3GRZ55A">机器之心公众号</a>；项目入口：<a href="https://github.com/FreedomIntelligence/LLMZoo">LLMZoo</a>。</figcaption>
  </figure>
  <figure class="media-roundup-card">
    <img src="{{ '/assets/img/media-roundup-2026/phoenix-chinese-eval.png' | relative_url }}" alt="Phoenix Chinese evaluation chart">
    <figcaption>图源：机器之心转载页，展示 Phoenix / Chimera 报道中的中文评测图示。相关数据：<a href="https://huggingface.co/datasets/FreedomIntelligence/phoenix-sft-data-v1">Phoenix SFT data</a>。</figcaption>
  </figure>
</div>

围绕对话数据，我们也探索了 SocraticChat / PlatoLM：用苏格拉底式提问构造更高质量的对话训练信号，让开源模型从 ChatGPT 风格的对话中学习更稳健的表达与追问能力。PaperWeekly 的报道把这个工作放在“如何更好蒸馏对话能力”的问题上，这也是我们持续关心的方向：模型不只是回答，还要学会澄清、追问和组织复杂信息。

<div class="media-roundup-grid">
  <figure class="media-roundup-card">
    <img src="{{ '/assets/img/media-roundup-2026/socratic-pipeline.png' | relative_url }}" alt="SocraticChat pipeline figure">
    <figcaption>图源：PaperWeekly SocraticChat / PlatoLM 报道转载页。来源：<a href="https://www.sohu.com/a/733642675_121119001">Sohu 转载验证页</a>、<a href="https://www.python88.com/topic/163925">Python88 镜像</a>；项目入口：<a href="https://github.com/FreedomIntelligence/PlatoLM">PlatoLM GitHub</a>。</figcaption>
  </figure>
</div>

量子位关于大模型红队攻击与对比界面的报道，则从另一个角度提醒我们：模型能力越强，越需要可交互、可复核的对比工具。该报道文末注明，模型对比界面由香港中文大学（深圳）王本友教授团队和魔搭社区共同开发。这样的工具型工作常常不像模型发布那样显眼，却是安全评测、对齐研究和社区协作不可缺少的一环。

## Multimodal Long Context

LongLLaVA 是我们在多模态方向的重要尝试之一。机器之心和 PaperWeekly 都把它的关键词概括为“混合架构”和“单卡千图推理”：它把 Mamba 与 Transformer 的长序列优势结合起来，面向需要大量图像输入的多模态场景做效率扩展。

<div class="media-roundup-grid">
  <figure class="media-roundup-card">
    <img src="{{ '/assets/img/media-roundup-2026/longllava-architecture.webp' | relative_url }}" alt="LongLLaVA architecture figure">
    <figcaption>图源：机器之心 LongLLaVA 报道镜像。来源：<a href="https://www.xinfinite.net/t/topic/5744">Xinfinite 镜像</a>；相关原文见 <a href="http://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2650935336&idx=4&sn=1d0f7c1abd46f072741e563050151045">机器之心公众号</a>。</figcaption>
  </figure>
  <figure class="media-roundup-card">
    <img src="{{ '/assets/img/media-roundup-2026/longllava-training.png' | relative_url }}" alt="LongLLaVA training figure">
    <figcaption>图源：机器之心 LongLLaVA 报道镜像。PaperWeekly 镜像：<a href="https://blog.csdn.net/c9Yv2cf9I06K2A9E/article/details/142544603">CSDN</a>；项目入口：<a href="https://github.com/FreedomIntelligence/LongLLaVA">LongLLaVA GitHub</a>。</figcaption>
  </figure>
</div>

从医疗视觉问答到多图推理，长上下文多模态模型的难点并不只是“能放下更多图片”。真正的问题在于：如何在有限显存和推理时间内，把跨图关系、视觉细节和语言推理连接起来。LongLLaVA 是这个问题的一块拼图，也为后续多模态 Agent、医学视觉和长程交互场景提供了基础。

## Agents and Simulated Worlds

当模型进入更开放的真实任务，我们开始关注“环境”。TwinMarket 和 MicroVerse 都是这个问题的不同侧面：前者用大量虚拟投资者重现金融市场中的行为与涌现现象，后者探索微观世界模型，让 AI 能模拟肉眼不可见、但规律复杂的环境。

<div class="media-roundup-grid">
  <figure class="media-roundup-card">
    <img src="{{ '/assets/img/media-roundup-2026/twinmarket-bdi.png' | relative_url }}" alt="TwinMarket BDI architecture figure">
    <figcaption>图源：机器之心 TwinMarket 报道镜像。来源：<a href="https://www.xinfinite.net/t/topic/16071">Xinfinite 镜像</a>；原文：<a href="http://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2651001895&idx=4&sn=383c986589bd3d7dfc3623ae08b848f9">机器之心公众号</a>；项目入口：<a href="https://github.com/FreedomIntelligence/TwinMarket">TwinMarket GitHub</a>。</figcaption>
  </figure>
  <figure class="media-roundup-card">
    <img src="{{ '/assets/img/media-roundup-2026/twinmarket-bubble.png' | relative_url }}" alt="TwinMarket market simulation figure">
    <figcaption>图源：机器之心 TwinMarket 报道镜像，展示多智能体金融市场模拟中的行为涌现。</figcaption>
  </figure>
</div>

<div class="media-roundup-grid">
  <figure class="media-roundup-card">
    <img src="{{ '/assets/img/media-roundup-2026/microverse-overview.png' | relative_url }}" alt="MicroVerse overview figure">
    <figcaption>图源：机器之心 MicroVerse 报道镜像。来源：<a href="https://www.xinfinite.net/t/topic/18385">Xinfinite 镜像</a>；原文：<a href="http://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2651022151&idx=3&sn=89303fe37f598d0481ba1effbe953e68">机器之心公众号</a>。</figcaption>
  </figure>
  <figure class="media-roundup-card">
    <img src="{{ '/assets/img/media-roundup-2026/microverse-bench.png' | relative_url }}" alt="MicroVerse benchmark figure">
    <figcaption>图源：机器之心 MicroVerse 报道镜像，展示微观世界模拟与评测设置。</figcaption>
  </figure>
</div>

手机 Agent 是更贴近现实交互的一类环境。机器之心关于 PhoneHarness 的报道，把问题放在 OpenAI AI Phone、Gemini on Android 等行业变化之中：如果智能体要真正操作手机，它需要的不只是“看懂屏幕”，还要有混合动作编排、状态追踪与任务执行的 harness。

<div class="media-roundup-grid">
  <figure class="media-roundup-card">
    <img src="{{ '/assets/img/media-roundup-2026/phoneharness-overview.png' | relative_url }}" alt="PhoneHarness overview figure">
    <figcaption>图源：机器之心 PhoneHarness 报道转载页。来源：<a href="https://finance.sina.com.cn/tech/roll/2026-05-26/doc-inhzfshk8947849.shtml">新浪科技转载页</a>；原文：<a href="https://mp.weixin.qq.com/s/I2ztL6sFiHGxAiCfh_FTqg">机器之心公众号</a>。</figcaption>
  </figure>
  <figure class="media-roundup-card">
    <img src="{{ '/assets/img/media-roundup-2026/phoneharness-architecture.png' | relative_url }}" alt="PhoneHarness architecture figure">
    <figcaption>图源：机器之心 PhoneHarness 报道转载页，展示手机 Agent harness 的执行与编排框架。</figcaption>
  </figure>
</div>

从 TwinMarket 到 MicroVerse，再到 PhoneHarness，我们看到同一个研究问题逐渐清晰：大模型需要可执行、可反馈、可评测的环境，才能从“会生成”走向“会行动”。

## Community and Source Index

FreedomAI Lab 的研究会继续围绕开放基础设施展开。我们在 GitHub、Hugging Face 和实验室主页持续发布模型、数据、代码与项目更新，也欢迎对开放医疗智能、多模态模型、Agent 环境和社会模拟感兴趣的同学加入。

<p>
  <span class="source-pill"><a href="https://github.com/FreedomIntelligence">GitHub</a></span>
  <span class="source-pill"><a href="https://huggingface.co/FreedomIntelligence">Hugging Face</a></span>
  <span class="source-pill"><a href="https://freedomintelligence.github.io/projects/">Projects</a></span>
  <span class="source-pill"><a href="https://freedomintelligence.github.io/">FreedomAI Lab</a></span>
</p>

### Media sources

<ul class="source-list">
  <li>机器之心：<a href="https://mp.weixin.qq.com/s/WLYmwT1LJ9YGFdW3GRZ55A">Phoenix / Chimera 原文</a>；<a href="https://cloud.tencent.com/developer/article/2270060">转载验证页</a>。</li>
  <li>机器之心：<a href="https://mp.weixin.qq.com/s/lwJb8N420xfMTvXJPM2gtg">HuatuoGPT 原文</a>；<a href="https://www.sohu.com/a/680793310_129720">转载验证页</a>。</li>
  <li>机器之心：<a href="http://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2650935336&idx=4&sn=1d0f7c1abd46f072741e563050151045">LongLLaVA 原文</a>；<a href="https://www.xinfinite.net/t/topic/5744">镜像页</a>。</li>
  <li>机器之心：<a href="http://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2651001895&idx=4&sn=383c986589bd3d7dfc3623ae08b848f9">TwinMarket 原文</a>；<a href="https://www.xinfinite.net/t/topic/16071">镜像页</a>。</li>
  <li>机器之心：<a href="http://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2651022151&idx=3&sn=89303fe37f598d0481ba1effbe953e68">MicroVerse 原文</a>；<a href="https://www.xinfinite.net/t/topic/18385">镜像页</a>。</li>
  <li>机器之心：<a href="https://mp.weixin.qq.com/s/I2ztL6sFiHGxAiCfh_FTqg">PhoneHarness 原文</a>；<a href="https://finance.sina.com.cn/tech/roll/2026-05-26/doc-inhzfshk8947849.shtml">新浪科技转载页</a>；<a href="https://x.com/jiqizhixin/status/2063472517533335806">X 转发记录</a>。</li>
  <li>量子位：<a href="https://www.qbitai.com/2023/07/69117.html">大模型红队攻击与模型对比界面报道</a>；<a href="https://mp.weixin.qq.com/s/l3zwXBBoQPaLCoynGGnevA">公众号原文</a>。</li>
  <li>PaperWeekly：<a href="https://mp.weixin.qq.com/s?__biz=MzIwMTc4ODE0Mw==&mid=2247624585&idx=3&sn=2738a85994cec0f8b20e2500c5d563e1&chksm=96e43809a193b11f327428cd38e626272a1499af6824cf4eb953b040f3167882d5258a3d5ae3&scene=126&sessionid=0">HuatuoGPT 原文</a>；<a href="https://www.python88.com/topic/155876">镜像页</a>。</li>
  <li>PaperWeekly：<a href="https://mp.weixin.qq.com/s?__biz=MzIwMTc4ODE0Mw==&mid=2247685068&idx=3&sn=cfa3e74011d850908de5543ec5abe715&chksm=9705cd04e675960fdccc62a83cc02948beab26b4b70ede86ec30bac99b60ed860a3607966ad4&scene=126&sessionid=0">LongLLaVA 原文</a>；<a href="https://blog.csdn.net/c9Yv2cf9I06K2A9E/article/details/142544603">镜像页</a>。</li>
  <li>PaperWeekly：<a href="https://blog.csdn.net/c9Yv2cf9I06K2A9E/article/details/132632499">CMB 镜像页</a>；<a href="https://www.sohu.com/a/717301678_121119001">转载验证页</a>。</li>
  <li>PaperWeekly：<a href="https://www.python88.com/topic/163925">SocraticChat / PlatoLM 镜像页</a>；<a href="https://www.sohu.com/a/733642675_121119001">转载验证页</a>。</li>
  <li>PaperWeekly / AI 求职：<a href="https://mp.weixin.qq.com/s?__biz=MzIwMTc4ODE0Mw==&mid=2247612887&idx=3&sn=e504e7c804d472b420adf6ad2ea68cb2&chksm=96ebe657a19c6f41e87a403bb1ea835133eaad38328e31b96d0eea4c292dbcb6620da0ea7c49&scene=126&sessionid=0">李海洲教授 NLP 等方向招生原文</a>；<a href="https://blog.csdn.net/c9Yv2cf9I06K2A9E/article/details/129483552">镜像页</a>。</li>
  <li>PaperWeekly / AI 求职：<a href="https://mp.weixin.qq.com/s?__biz=MzIwMTc4ODE0Mw==&mid=2247664430&idx=3&sn=4e0447f25c8772a1f1831dc1d249a6a1&chksm=974fe78d9ff31d0f51d00f33b4a837b8d623b22243bf15bded95dbc012fc9f7a5fbc22a765dd&scene=126&sessionid=0">大语言模型算法实习原文</a>；<a href="https://www.sohu.com/a/778110237_121119001">转载验证页</a>。</li>
  <li>PaperWeekly / AI 求职：<a href="https://www.zhuanzhiai.com/document/adb239d17fc109c6fc77367315ef2efb">王本友 / 李海洲教授 NLP/ML 方向招生镜像页</a>；<a href="https://www.sohu.com/a/586239364_121119001">语音与语言实验室招生转载验证页</a>。</li>
  <li>PaperWeekly：<a href="https://developer.aliyun.com/article/415559">2017 年度 NLP 论文 TOP10，IRGAN 入选记录</a>。</li>
</ul>

### Project links

<ul class="source-list">
  <li><a href="https://github.com/FreedomIntelligence/HuatuoGPT">HuatuoGPT</a>；<a href="https://huggingface.co/FreedomIntelligence/HuatuoGPT-7B">HuatuoGPT-7B</a>。</li>
  <li><a href="https://github.com/FreedomIntelligence/HuatuoGPT-II">HuatuoGPT-II</a>；<a href="https://huggingface.co/FreedomIntelligence/HuatuoGPT2-7B">HuatuoGPT2-7B</a>。</li>
  <li><a href="https://github.com/FreedomIntelligence/HuatuoGPT-o1">HuatuoGPT-o1</a>；<a href="https://huggingface.co/FreedomIntelligence/HuatuoGPT-o1-70B">HuatuoGPT-o1-70B</a>；<a href="https://huggingface.co/datasets/FreedomIntelligence/medical-o1-reasoning-SFT">medical-o1-reasoning-SFT</a>。</li>
  <li><a href="https://github.com/FreedomIntelligence/HuatuoGPT-3">HuatuoGPT-3</a>；<a href="https://huggingface.co/FreedomIntelligence/HuatuoGPT-3-8B">HuatuoGPT-3-8B</a>；<a href="https://huggingface.co/FreedomIntelligence/HuatuoGPT-3-32B">HuatuoGPT-3-32B</a>。</li>
  <li><a href="https://github.com/FreedomIntelligence/LLMZoo">LLMZoo / Phoenix</a>；<a href="https://huggingface.co/datasets/FreedomIntelligence/phoenix-sft-data-v1">Phoenix SFT data</a>。</li>
  <li><a href="https://github.com/FreedomIntelligence/LongLLaVA">LongLLaVA</a>。</li>
  <li><a href="https://github.com/FreedomIntelligence/CMB">CMB</a>；<a href="https://cmedbenchmark.llmzoo.com/">CMB 官网</a>。</li>
  <li><a href="https://github.com/FreedomIntelligence/PlatoLM">PlatoLM</a>；<a href="https://huggingface.co/datasets/FreedomIntelligence/SocraticChat">SocraticChat dataset</a>；<a href="https://huggingface.co/FreedomIntelligence/PlatoLM-7B">PlatoLM-7B</a>。</li>
  <li><a href="https://github.com/FreedomIntelligence/TwinMarket">TwinMarket</a>。</li>
</ul>
