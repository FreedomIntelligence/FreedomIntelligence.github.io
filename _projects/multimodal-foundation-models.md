---
layout: page
title: "Multimodal LLMs"
title_zh: "多模态大模型"
direction: multimodal-interaction
description: Multimodal foundation models for long visual context, image generation, video reasoning, medical vision, audio-language alignment, and efficient deployment.
description_zh: 面向长视觉上下文、图像生成、视频推理、医学视觉、音频-语言对齐和高效部署的多模态基础模型。
img: assets/img/media-roundup-2026/longllava-architecture.webp
importance: 2
category: work
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div data-lang="en">

<div class="impact-kicker">Multimodal foundation models</div>

<div class="impact-tags">
  <span class="impact-tag">Multimodal LLMs</span>
  <span class="impact-tag">Long visual context</span>
  <span class="impact-tag">Image generation</span>
  <span class="impact-tag">Video reasoning</span>
  <span class="impact-tag">Medical vision</span>
  <span class="impact-tag">Audio-language</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="/projects/">Projects Map</a>
  <a class="impact-action secondary" href="/projects/long-context-multimodal/">LongLLaVA and MileBench</a>
  <a class="impact-action secondary" href="/projects/sharegpt-4o-image-janus-4o/">ShareGPT-4o and Janus-4o</a>
  <a class="impact-action secondary" href="/projects/medical-ai-ecosystem/">Medical Multimodality</a>
  <a class="impact-action secondary" href="/projects/speech-audio-talking-head-ai/">Speech and Audio</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/media-roundup-2026/longllava-architecture.webp" alt="Long-context multimodal LLM architecture">
</div>

<p class="impact-lede">
The multimodal LLM line organizes vision, language, video, audio, and domain knowledge into a single capability thread. It asks whether models can understand many images, long videos, and complex scenes; generate and edit images; combine expert knowledge with medical imaging; and grasp both meaning and prosody in audio. It also works to make these abilities efficient, evaluable, and reproducible.
</p>

<section class="impact-section">
  <h2>Research Storyline</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>Context</span>
      <div><strong>Extend visual context</strong><p>LongLLaVA and MileBench target multi-image, long-video, and long visual contexts, moving models from single-image QA toward reasoning across frames, pages, and pieces of evidence.</p></div>
    </div>
    <div class="impact-step">
      <span>Efficiency</span>
      <div><strong>Compress redundant visual tokens</strong><p>TRIM puts multimodal capability under real deployment constraints, cutting visual-token redundancy so that long-context and multi-image tasks are not overwhelmed by inference cost.</p></div>
    </div>
    <div class="impact-step">
      <span>Generation</span>
      <div><strong>Open image generation and editing</strong><p>ShareGPT-4o-Image and Janus-4o make GPT-4o-style image generation and image-conditioned editing openly available, along with a unified multimodal generation model.</p></div>
    </div>
    <div class="impact-step">
      <span>Reason</span>
      <div><strong>Carry reasoning into video and specialist vision</strong><p>Video-R1, HuatuoGPT-Vision, GMAI-MMBench, and related work confront multimodal models with time, medical knowledge, and verifiable tasks rather than image description alone.</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Capability Modules</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>Long-context visual understanding</strong>
      <p>Handles hundreds to thousands of images, long videos, and complex visual material, requiring models to retrieve, count, order, summarize, and reason across contexts.</p>
    </div>
    <div class="impact-card">
      <strong>Visual generation and editing</strong>
      <p>From open instruction data to unified generation models, supporting text-to-image, image-to-image, image-conditioned modification, and the study of generation behavior.</p>
    </div>
    <div class="impact-card">
      <strong>Video reasoning</strong>
      <p>Video-R1 brings reinforcement-learning-style reasoning training into video understanding, so models form inspectable reasoning paths over temporal sequences and event chains.</p>
    </div>
    <div class="impact-card">
      <strong>Medical vision-language</strong>
      <p>HuatuoGPT-Vision, PubMedVision, and GMAI-MMBench connect medical images, reports, QA, and clinical knowledge.</p>
    </div>
    <div class="impact-card">
      <strong>Audio-language fusion</strong>
      <p>Soundwave, FusionAudio, EchoMind, and S2S-Arena bring speech, prosody, audio captions, and human-likeness evaluation into the multimodal map.</p>
    </div>
    <div class="impact-card">
      <strong>Efficient deployment</strong>
      <p>TRIM, LongLLaVA, and long-context training strategies together answer one engineering question: how can multimodal capability run at realistic cost?</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Paper Trail</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>Model</span>
      <div><strong>LongLLaVA: Scaling Multi-modal LLMs to 1000 Images Efficiently</strong><p>Extends multi-image long-context ability with a hybrid architecture and training strategy.</p><a href="https://arxiv.org/abs/2409.02889" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Benchmark</span>
      <div><strong>MileBench: Benchmarking MLLMs in Long Context</strong><p>Tests whether models truly use visual evidence, with multi-image, video, and long-context tasks.</p><a href="https://arxiv.org/abs/2404.18532" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Efficient</span>
      <div><strong>TRIM: Less is More for Efficient Multi-modal LLMs</strong><p>Reduces visual-token redundancy so multimodal models are cheaper and easier to deploy.</p><a href="https://arxiv.org/abs/2409.10994" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Generate</span>
      <div><strong>ShareGPT-4o-Image and Janus-4o</strong><p>Releases open instruction data for image generation and editing, and trains a unified multimodal generation model.</p><a href="https://arxiv.org/abs/2506.18095" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Video</span>
      <div><strong>Video-R1: Reinforcing Video Reasoning in MLLMs</strong><p>Extends R1-style reinforcement-learning reasoning training to video understanding.</p><a href="https://arxiv.org/abs/2503.21776" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Medical</span>
      <div><strong>HuatuoGPT-Vision</strong><p>Injects medical visual knowledge into multimodal LLMs, connecting medical images, reports, and QA.</p><a href="https://arxiv.org/abs/2406.19280" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Audio</span>
      <div><strong>FusionAudio-1.2M</strong><p>A data resource for fine-grained audio captioning with multimodal contextual fusion.</p><a href="https://arxiv.org/abs/2506.01111" target="_blank" rel="noopener">Paper</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Related Projects</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>LongLLaVA and MileBench</strong>
      <p>A long-context multimodal model and benchmark covering many-image reasoning, video tasks, and visual-context scaling.</p>
      <a href="/projects/long-context-multimodal/">Project page</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>ShareGPT-4o-Image and Janus-4o</strong>
      <p>Open image generation and editing datasets, a unified multimodal model, and reproducible release resources.</p>
      <a href="/projects/sharegpt-4o-image-janus-4o/">Project page</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>HuatuoGPT-Vision</strong>
      <p>A medical vision-language model and the PubMedVision data, part of the HuatuoGPT medical AI ecosystem.</p>
      <a href="/projects/medical-ai-ecosystem/">Project page</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>Video-R1</strong>
      <p>Reinforcement-learning-style reasoning training for video understanding, linking multimodal capability to the lab's reasoning projects.</p>
      <a href="https://github.com/tulerfeng/Video-R1" target="_blank" rel="noopener">Repository</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>TRIM</strong>
      <p>Efficient multimodal token reduction, making multimodal models more affordable to deploy.</p>
      <a href="https://github.com/FreedomIntelligence/TRIM" target="_blank" rel="noopener">Repository</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>Speech and Audio AI</strong>
      <p>Speech, audio captioning, a paralinguistic benchmark, and audio-driven video generation.</p>
      <a href="/projects/speech-audio-talking-head-ai/">Project page</a>
    </div>
  </div>
</section>

<div class="impact-actions">
  <a class="impact-action secondary" href="/projects/">Back to Projects</a>
</div>

</div>

<div data-lang="zh">

<div class="impact-kicker">多模态基础模型</div>

<div class="impact-tags">
  <span class="impact-tag">多模态大模型</span>
  <span class="impact-tag">长视觉上下文</span>
  <span class="impact-tag">图像生成</span>
  <span class="impact-tag">视频推理</span>
  <span class="impact-tag">医学视觉</span>
  <span class="impact-tag">音频-语言</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="/projects/">项目总览</a>
  <a class="impact-action secondary" href="/projects/long-context-multimodal/">LongLLaVA 与 MileBench</a>
  <a class="impact-action secondary" href="/projects/sharegpt-4o-image-janus-4o/">ShareGPT-4o 与 Janus-4o</a>
  <a class="impact-action secondary" href="/projects/medical-ai-ecosystem/">医学多模态</a>
  <a class="impact-action secondary" href="/projects/speech-audio-talking-head-ai/">语音与音频</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/media-roundup-2026/longllava-architecture.webp" alt="长上下文多模态大模型架构">
</div>

<p class="impact-lede">
多模态大模型方向把视觉、语言、视频、音频和专业领域知识组织成一条统一的能力线。它既关注模型能否看懂大量图像、长视频和复杂场景，也关注能否生成和编辑图像、在医学影像中结合专业知识、在音频中理解语义和韵律，并让这些能力足够高效、可评测、可复现。
</p>

<section class="impact-section">
  <h2>研究脉络</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>上下文</span>
      <div><strong>扩展视觉上下文</strong><p>LongLLaVA 和 MileBench 关注多图像、长视频和长视觉上下文，让模型从单图问答走向跨帧、跨页、跨证据的推理。</p></div>
    </div>
    <div class="impact-step">
      <span>效率</span>
      <div><strong>压缩无效视觉 token</strong><p>TRIM 把多模态能力放进实际部署约束中，减少视觉 token 冗余，让长上下文和多图像任务不被推理成本压垮。</p></div>
    </div>
    <div class="impact-step">
      <span>生成</span>
      <div><strong>开放图像生成与编辑</strong><p>ShareGPT-4o-Image 和 Janus-4o 把 GPT-4o 风格的图像生成、图像条件编辑和统一多模态生成模型开放出来。</p></div>
    </div>
    <div class="impact-step">
      <span>推理</span>
      <div><strong>把推理迁移到视频和专业视觉</strong><p>Video-R1、HuatuoGPT-Vision、GMAI-MMBench 等工作让多模态模型面对时间、医学知识和可验证任务，而不只是描述图像。</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>能力模块</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>长上下文视觉理解</strong>
      <p>处理上百到上千张图像、长视频和复杂视觉材料，要求模型能检索、计数、排序、归纳和跨上下文推理。</p>
    </div>
    <div class="impact-card">
      <strong>视觉生成与编辑</strong>
      <p>从开放指令数据到统一生成模型，支持文生图、图生图、图像条件修改和生成行为研究。</p>
    </div>
    <div class="impact-card">
      <strong>视频推理</strong>
      <p>Video-R1 把强化学习式推理训练带进视频理解，使模型在时间序列和事件链中形成可检查的推理路径。</p>
    </div>
    <div class="impact-card">
      <strong>医学视觉-语言</strong>
      <p>HuatuoGPT-Vision、PubMedVision 和 GMAI-MMBench 把医学图像、报告、问答和临床知识连接起来。</p>
    </div>
    <div class="impact-card">
      <strong>音频-语言融合</strong>
      <p>Soundwave、FusionAudio、EchoMind 和 S2S-Arena 将语音、韵律、音频描述和类人表现评测纳入多模态地图。</p>
    </div>
    <div class="impact-card">
      <strong>高效部署</strong>
      <p>TRIM、LongLLaVA 和长上下文训练策略共同回答一个工程问题：多模态能力如何在真实成本下运行。</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>论文脉络</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>模型</span>
      <div><strong>LongLLaVA: Scaling Multi-modal LLMs to 1000 Images Efficiently</strong><p>用混合架构和训练策略扩展多图像长上下文能力。</p><a href="https://arxiv.org/abs/2409.02889" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>评测基准</span>
      <div><strong>MileBench: Benchmarking MLLMs in Long Context</strong><p>用多图像、视频和长上下文任务测试模型是否真的使用视觉证据。</p><a href="https://arxiv.org/abs/2404.18532" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>高效</span>
      <div><strong>TRIM: Less is More for Efficient Multi-modal LLMs</strong><p>减少视觉 token 冗余，让多模态模型更便宜、更容易部署。</p><a href="https://arxiv.org/abs/2409.10994" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>生成</span>
      <div><strong>ShareGPT-4o-Image 与 Janus-4o</strong><p>开放图像生成与编辑指令数据，并训练统一多模态生成模型。</p><a href="https://arxiv.org/abs/2506.18095" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>视频</span>
      <div><strong>Video-R1: Reinforcing Video Reasoning in MLLMs</strong><p>把 R1 式强化学习推理训练扩展到视频理解。</p><a href="https://arxiv.org/abs/2503.21776" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>医学</span>
      <div><strong>HuatuoGPT-Vision</strong><p>将医学视觉知识注入多模态大模型，连接医学图像、报告和问答。</p><a href="https://arxiv.org/abs/2406.19280" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>音频</span>
      <div><strong>FusionAudio-1.2M</strong><p>细粒度音频描述与多模态上下文融合的数据资源。</p><a href="https://arxiv.org/abs/2506.01111" target="_blank" rel="noopener">论文</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>相关项目</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>LongLLaVA 与 MileBench</strong>
      <p>长上下文多模态模型与评测基准，覆盖多图像推理、视频任务和视觉上下文扩展。</p>
      <a href="/projects/long-context-multimodal/">项目页面</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>ShareGPT-4o-Image 与 Janus-4o</strong>
      <p>开放的图像生成与编辑数据集、统一多模态模型和可复现的发布资源。</p>
      <a href="/projects/sharegpt-4o-image-janus-4o/">项目页面</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>HuatuoGPT-Vision</strong>
      <p>医学视觉-语言模型和 PubMedVision 数据，是华佗GPT 医疗 AI 生态的一部分。</p>
      <a href="/projects/medical-ai-ecosystem/">项目页面</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>Video-R1</strong>
      <p>视频理解中的强化学习式推理训练，把多模态能力与推理项目线连接起来。</p>
      <a href="https://github.com/tulerfeng/Video-R1" target="_blank" rel="noopener">代码仓库</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>TRIM</strong>
      <p>高效的多模态 token 压缩，让多模态模型在部署时更经济。</p>
      <a href="https://github.com/FreedomIntelligence/TRIM" target="_blank" rel="noopener">代码仓库</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>语音与音频 AI</strong>
      <p>语音、音频描述、副语言评测基准和音频驱动的视频生成。</p>
      <a href="/projects/speech-audio-talking-head-ai/">项目页面</a>
    </div>
  </div>
</section>

<div class="impact-actions">
  <a class="impact-action secondary" href="/projects/">返回项目页</a>
</div>

</div>

</div>
