---
layout: page
title: 多模态大模型
description: Multimodal foundation models for long visual context, image generation, video reasoning, medical vision, audio-language alignment, and efficient deployment.
img: assets/img/media-roundup-2026/longllava-architecture.webp
importance: 2
category: work
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

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
多模态大模型方向把视觉、语言、视频、音频和专业领域知识组织成一条统一能力线。它既关注模型能否看懂很多图像、长视频和复杂场景，也关注能否生成和编辑图像、在医学影像中结合专业知识、在音频中理解语义和韵律，并把这些能力做得足够高效、可评测、可复现。
</p>

<section class="impact-section">
  <h2>研究脉络</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>Context</span>
      <div><strong>扩展视觉上下文</strong><p>LongLLaVA 和 MileBench 关注多图像、长视频和长视觉上下文，让模型从单图问答走向跨帧、跨页、跨证据的推理。</p></div>
    </div>
    <div class="impact-step">
      <span>Efficiency</span>
      <div><strong>压缩无效视觉 token</strong><p>TRIM 把多模态能力放进实际部署约束中，减少视觉 token 冗余，让长上下文和多图像任务不被推理成本吞掉。</p></div>
    </div>
    <div class="impact-step">
      <span>Generation</span>
      <div><strong>开放图像生成与编辑</strong><p>ShareGPT-4o-Image 和 Janus-4o 把 GPT-4o 风格的图像生成、图像条件编辑和统一多模态生成模型开放出来。</p></div>
    </div>
    <div class="impact-step">
      <span>Reason</span>
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
      <p>从开放 instruction data 到统一生成模型，支持 text-to-image、image-to-image、图像条件修改和生成行为研究。</p>
    </div>
    <div class="impact-card">
      <strong>视频推理</strong>
      <p>Video-R1 把强化学习式推理训练带进视频理解，使模型在时间序列和事件链中形成可检查的推理路径。</p>
    </div>
    <div class="impact-card">
      <strong>医学视觉语言</strong>
      <p>HuatuoGPT-Vision、PubMedVision 和 GMAI-MMBench 把医学图像、报告、问答和临床知识连接起来。</p>
    </div>
    <div class="impact-card">
      <strong>音频语言融合</strong>
      <p>Soundwave、FusionAudio、EchoMind 和 S2S-Arena 将语音、韵律、音频 caption 和人类感评测纳入多模态地图。</p>
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
      <span>Model</span>
      <div><strong>LongLLaVA: Scaling Multi-modal LLMs to 1000 Images Efficiently</strong><p>用混合架构和训练策略扩展多图像长上下文能力。</p><a href="https://arxiv.org/abs/2409.02889" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Benchmark</span>
      <div><strong>MileBench: Benchmarking MLLMs in Long Context</strong><p>用多图像、视频和长上下文任务测试模型是否真的使用视觉证据。</p><a href="https://arxiv.org/abs/2404.18532" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Efficient</span>
      <div><strong>TRIM: Less is More for Efficient Multi-modal LLMs</strong><p>减少视觉 token 冗余，让多模态模型更便宜、更容易部署。</p><a href="https://arxiv.org/abs/2409.10994" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Generate</span>
      <div><strong>ShareGPT-4o-Image and Janus-4o</strong><p>开放图像生成与编辑 instruction data，并训练统一多模态生成模型。</p><a href="https://arxiv.org/abs/2506.18095" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Video</span>
      <div><strong>Video-R1: Reinforcing Video Reasoning in MLLMs</strong><p>把 R1-style 强化学习推理训练扩展到视频理解。</p><a href="https://arxiv.org/abs/2503.21776" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Medical</span>
      <div><strong>HuatuoGPT-Vision</strong><p>将医学视觉知识注入多模态 LLM，连接医学图像、报告和问答。</p><a href="https://arxiv.org/abs/2406.19280" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Audio</span>
      <div><strong>FusionAudio-1.2M</strong><p>细粒度音频 caption 与 multimodal contextual fusion 数据资源。</p><a href="https://arxiv.org/abs/2506.01111" target="_blank" rel="noopener">Paper</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>相关项目</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>LongLLaVA and MileBench</strong>
      <p>长上下文多模态模型和 benchmark，覆盖 many-image reasoning、video tasks 和视觉上下文扩展。</p>
      <a href="/projects/long-context-multimodal/">Project page</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>ShareGPT-4o-Image and Janus-4o</strong>
      <p>开放图像生成/编辑数据集、统一多模态模型和可复现发布资源。</p>
      <a href="/projects/sharegpt-4o-image-janus-4o/">Project page</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>HuatuoGPT-Vision</strong>
      <p>医学视觉语言模型和 PubMedVision 数据，属于 HuatuoGPT 医疗 AI 生态的一部分。</p>
      <a href="/projects/medical-ai-ecosystem/">Project page</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>Video-R1</strong>
      <p>视频理解中的强化学习式推理训练，把多模态能力和 reasoning 项目线连接起来。</p>
      <a href="https://github.com/tulerfeng/Video-R1" target="_blank" rel="noopener">Repository</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>TRIM</strong>
      <p>高效多模态 token reduction，让多模态模型在部署侧更可承受。</p>
      <a href="https://github.com/FreedomIntelligence/TRIM" target="_blank" rel="noopener">Repository</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>Speech and Audio AI</strong>
      <p>语音、音频 caption、paralinguistic benchmark 和 audio-driven video generation。</p>
      <a href="/projects/speech-audio-talking-head-ai/">Project page</a>
    </div>
  </div>
</section>

<div class="impact-actions">
  <a class="impact-action secondary" href="/projects/">Back to Projects</a>
</div>

</div>
