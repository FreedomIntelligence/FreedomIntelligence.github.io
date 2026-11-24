---
layout: page
title: ShareGPT-4o-Image and Janus-4o
title_zh: "ShareGPT-4o-Image 与 Janus-4o"
direction: multimodal-interaction
description: GPT-4o-level image generation data and a unified multimodal image generation model.
description_zh: "GPT-4o 级图像生成数据，以及统一的多模态图像生成模型。"
img: assets/img/freedomai-2026/impact/github-impact.jpg
importance: 11
category: work
github: https://github.com/FreedomIntelligence/ShareGPT-4o-Image
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div data-lang="en">

<div class="impact-kicker">Image generation alignment</div>

<div class="impact-tags">
  <span class="impact-tag">ShareGPT-4o-Image</span>
  <span class="impact-tag">Janus-4o</span>
  <span class="impact-tag">Text-to-image</span>
  <span class="impact-tag">Image editing</span>
  <span class="impact-tag">Multimodal alignment</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://github.com/FreedomIntelligence/ShareGPT-4o-Image" target="_blank" rel="noopener">GitHub</a>
  <a class="impact-action secondary" href="https://huggingface.co/datasets/FreedomIntelligence/ShareGPT-4o-Image" target="_blank" rel="noopener">Dataset</a>
  <a class="impact-action secondary" href="https://huggingface.co/FreedomIntelligence/Janus-4o-7B" target="_blank" rel="noopener">Model</a>
  <a class="impact-action secondary" href="https://arxiv.org/abs/2506.18095" target="_blank" rel="noopener">Paper</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/freedomai-2026/impact/github-impact.jpg" alt="FreedomIntelligence open source impact">
</div>

<p class="impact-lede">
ShareGPT-4o-Image distills GPT-4o-style image generation interactions into an open dataset, and Janus-4o turns that data into a practical multimodal model for text-to-image and text-plus-image-to-image generation.
</p>

<section class="impact-section">
  <h2>Research Storyline</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>Data</span>
      <div><strong>Open the interaction format</strong><p>ShareGPT-4o-Image captures text-to-image and image-conditioned editing instructions so researchers can study generation behavior with open data.</p></div>
    </div>
    <div class="impact-step">
      <span>Model</span>
      <div><strong>Train a unified multimodal generator</strong><p>Janus-4o uses the data to support image understanding and generation in one compact model family.</p></div>
    </div>
    <div class="impact-step">
      <span>Edit</span>
      <div><strong>Move beyond one-shot generation</strong><p>Image-conditioned generation and editing matter because real users usually refine, transform, and localize existing visual content.</p></div>
    </div>
    <div class="impact-step">
      <span>Reuse</span>
      <div><strong>Make visual alignment reproducible</strong><p>The dataset, model, and paper give the community an open reference point for GPT-4o-like image generation interactions.</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>What The Project Contributes</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>Open generation data</strong>
      <p>The dataset includes text-to-image and image-conditioned generation examples, making GPT-4o-like generation behavior easier to study and reproduce.</p>
    </div>
    <div class="impact-card">
      <strong>Unified multimodal model</strong>
      <p>Janus-4o adapts a unified multimodal architecture so image understanding and image generation can live in one model family.</p>
    </div>
    <div class="impact-card">
      <strong>Practical image editing</strong>
      <p>The data and model support not only generation from text but also edits and transformations conditioned on existing images.</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Display Figures</h2>
  <div class="impact-gallery">
    <figure>
      <img src="/assets/img/freedomai-2026/impact/github-impact.jpg" alt="Open multimodal generation resources">
      <figcaption>The project follows the lab's open-release pattern: dataset, model, repository, and paper linked as one reproducible package.</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/media-roundup-2026/longllava-architecture.webp" alt="Multimodal model architecture context">
      <figcaption>ShareGPT-4o-Image and Janus-4o sit alongside the lab's broader multimodal line, from understanding to generation.</figcaption>
    </figure>
  </div>
</section>

<section class="impact-section">
  <h2>Paper Trail</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>Dataset</span>
      <div><strong>ShareGPT-4o-Image</strong><p>Open image generation and editing instruction data for studying GPT-4o-style multimodal generation behavior.</p><a href="https://huggingface.co/datasets/FreedomIntelligence/ShareGPT-4o-Image" target="_blank" rel="noopener">Dataset</a></div>
    </div>
    <div class="impact-paper">
      <span>Model</span>
      <div><strong>Janus-4o-7B</strong><p>A unified multimodal model checkpoint for text-to-image and image-conditioned generation.</p><a href="https://huggingface.co/FreedomIntelligence/Janus-4o-7B" target="_blank" rel="noopener">Model</a></div>
    </div>
    <div class="impact-paper">
      <span>Context</span>
      <div><strong>LongLLaVA and multimodal infrastructure</strong><p>Connects the generation project to the lab's larger multimodal program on visual context, data quality, and open model behavior.</p><a href="/projects/long-context-multimodal/">Long-context multimodal AI</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Why It Matters</h2>
  <ul class="impact-list">
    <li>Open image generation research needs high-quality instruction data, not just model weights.</li>
    <li>Image editing is an important multimodal interaction pattern because users often refine existing visual content rather than generate from scratch.</li>
    <li>The project gives the community a compact way to study GPT-4o-level image generation behavior in open models.</li>
  </ul>
</section>

<section class="impact-section">
  <h2>Resource Map</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>ShareGPT-4o-Image dataset</strong>
      <p>Open image generation and editing instruction data.</p>
      <a href="https://huggingface.co/datasets/FreedomIntelligence/ShareGPT-4o-Image" target="_blank" rel="noopener">Dataset</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>Janus-4o-7B</strong>
      <p>Unified multimodal model checkpoint for text-to-image and image-conditioned generation.</p>
      <a href="https://huggingface.co/FreedomIntelligence/Janus-4o-7B" target="_blank" rel="noopener">Model</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>Project repository</strong>
      <p>Code, examples, and release documentation for the ShareGPT-4o-Image project.</p>
      <a href="https://github.com/FreedomIntelligence/ShareGPT-4o-Image" target="_blank" rel="noopener">Repository</a>
    </div>
  </div>
</section>

</div>

<div data-lang="zh">

<div class="impact-kicker">图像生成对齐</div>

<div class="impact-tags">
  <span class="impact-tag">ShareGPT-4o-Image</span>
  <span class="impact-tag">Janus-4o</span>
  <span class="impact-tag">文生图</span>
  <span class="impact-tag">图像编辑</span>
  <span class="impact-tag">多模态对齐</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://github.com/FreedomIntelligence/ShareGPT-4o-Image" target="_blank" rel="noopener">GitHub</a>
  <a class="impact-action secondary" href="https://huggingface.co/datasets/FreedomIntelligence/ShareGPT-4o-Image" target="_blank" rel="noopener">数据集</a>
  <a class="impact-action secondary" href="https://huggingface.co/FreedomIntelligence/Janus-4o-7B" target="_blank" rel="noopener">模型</a>
  <a class="impact-action secondary" href="https://arxiv.org/abs/2506.18095" target="_blank" rel="noopener">论文</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/freedomai-2026/impact/github-impact.jpg" alt="FreedomIntelligence 开源影响力">
</div>

<p class="impact-lede">
ShareGPT-4o-Image 把 GPT-4o 风格的图像生成交互蒸馏为开放数据集。Janus-4o 用这些数据训练出实用的多模态模型，既支持文生图，也支持以文本和图像为输入的图像生成。
</p>

<section class="impact-section">
  <h2>研究脉络</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>数据</span>
      <div><strong>开放图像生成的交互数据</strong><p>ShareGPT-4o-Image 收录文生图指令和以图像为条件的编辑指令，让研究者能用开放数据研究图像生成行为。</p></div>
    </div>
    <div class="impact-step">
      <span>模型</span>
      <div><strong>训练统一的多模态生成模型</strong><p>Janus-4o 借助这些数据，在一个紧凑的模型系列中同时支持图像理解和图像生成。</p></div>
    </div>
    <div class="impact-step">
      <span>编辑</span>
      <div><strong>不止于一次性生成</strong><p>图像条件生成与编辑很重要，因为真实用户通常会在已有图像上反复修改、转换和做局部调整。</p></div>
    </div>
    <div class="impact-step">
      <span>复用</span>
      <div><strong>让视觉对齐可复现</strong><p>数据集、模型和论文共同为社区提供了一个开放的参照，用来研究类似 GPT-4o 的图像生成交互。</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>项目贡献</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>开放的生成数据</strong>
      <p>数据集包含文生图和图像条件生成的样例，让类似 GPT-4o 的生成行为更容易研究和复现。</p>
    </div>
    <div class="impact-card">
      <strong>统一的多模态模型</strong>
      <p>Janus-4o 适配了统一的多模态架构，让图像理解和图像生成共存于同一个模型系列。</p>
    </div>
    <div class="impact-card">
      <strong>实用的图像编辑</strong>
      <p>数据和模型不仅支持从文本生成图像，也支持以已有图像为条件的编辑与转换。</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>图示</h2>
  <div class="impact-gallery">
    <figure>
      <img src="/assets/img/freedomai-2026/impact/github-impact.jpg" alt="开放的多模态生成资源">
      <figcaption>项目沿用实验室的开放发布方式：数据集、模型、代码仓库和论文串成一套可复现的资源。</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/media-roundup-2026/longllava-architecture.webp" alt="相关的多模态模型架构">
      <figcaption>ShareGPT-4o-Image 与 Janus-4o 属于实验室更广泛的多模态研究线，从理解延伸到生成。</figcaption>
    </figure>
  </div>
</section>

<section class="impact-section">
  <h2>论文脉络</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>数据集</span>
      <div><strong>ShareGPT-4o-Image</strong><p>开放的图像生成与编辑指令数据，用于研究 GPT-4o 风格的多模态生成行为。</p><a href="https://huggingface.co/datasets/FreedomIntelligence/ShareGPT-4o-Image" target="_blank" rel="noopener">数据集</a></div>
    </div>
    <div class="impact-paper">
      <span>模型</span>
      <div><strong>Janus-4o-7B</strong><p>统一的多模态模型权重，支持文生图和图像条件生成。</p><a href="https://huggingface.co/FreedomIntelligence/Janus-4o-7B" target="_blank" rel="noopener">模型</a></div>
    </div>
    <div class="impact-paper">
      <span>关联</span>
      <div><strong>LongLLaVA 与多模态基础设施</strong><p>把图像生成项目与实验室更大的多模态研究衔接起来，涵盖视觉上下文、数据质量和开源模型的行为。</p><a href="/projects/long-context-multimodal/">长上下文多模态 AI</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>研究意义</h2>
  <ul class="impact-list">
    <li>开源图像生成研究不能只靠模型权重，还需要高质量的指令数据。</li>
    <li>图像编辑是重要的多模态交互方式，因为用户往往是在已有图像上修改，而不是从零生成。</li>
    <li>项目为社区提供了一种轻量的途径，可以在开源模型上研究 GPT-4o 级别的图像生成行为。</li>
  </ul>
</section>

<section class="impact-section">
  <h2>资源导航</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>ShareGPT-4o-Image 数据集</strong>
      <p>开放的图像生成与编辑指令数据。</p>
      <a href="https://huggingface.co/datasets/FreedomIntelligence/ShareGPT-4o-Image" target="_blank" rel="noopener">数据集</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>Janus-4o-7B</strong>
      <p>支持文生图和图像条件生成的统一多模态模型权重。</p>
      <a href="https://huggingface.co/FreedomIntelligence/Janus-4o-7B" target="_blank" rel="noopener">模型</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>项目代码仓库</strong>
      <p>ShareGPT-4o-Image 项目的代码、示例和发布文档。</p>
      <a href="https://github.com/FreedomIntelligence/ShareGPT-4o-Image" target="_blank" rel="noopener">代码仓库</a>
    </div>
  </div>
</section>

</div>

</div>
