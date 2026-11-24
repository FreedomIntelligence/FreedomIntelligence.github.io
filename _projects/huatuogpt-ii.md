---
layout: page
title: HuatuoGPT-II
title_zh: HuatuoGPT-II
direction: ai-applications
description: One-stage medical adaptation for open medical language models.
description_zh: 面向开源医疗大模型的单阶段医学适配。
img: assets/img/media-roundup-2026/huatuogpt-auto-eval.jpeg
importance: 2
category: work
github: https://github.com/FreedomIntelligence/HuatuoGPT-II
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div data-lang="en">

<div class="impact-kicker">Medical LLM adaptation</div>

<div class="impact-tags">
  <span class="impact-tag">HuatuoGPT-II</span>
  <span class="impact-tag">One-stage training</span>
  <span class="impact-tag">Medical adaptation</span>
  <span class="impact-tag">Chinese medical QA</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://github.com/FreedomIntelligence/HuatuoGPT-II" target="_blank" rel="noopener">GitHub</a>
  <a class="impact-action secondary" href="https://huggingface.co/FreedomIntelligence/HuatuoGPT2-34B" target="_blank" rel="noopener">34B model</a>
  <a class="impact-action secondary" href="https://huggingface.co/FreedomIntelligence/HuatuoGPT2-7B" target="_blank" rel="noopener">7B model</a>
  <a class="impact-action secondary" href="https://arxiv.org/abs/2311.09774" target="_blank" rel="noopener">Paper</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/media-roundup-2026/huatuogpt-auto-eval.jpeg" alt="HuatuoGPT-II medical evaluation figure">
</div>

<p class="impact-lede">
HuatuoGPT-II studies how to adapt large language models to medicine with a cleaner one-stage training recipe, reducing pipeline complexity while preserving strong medical instruction-following and exam-style performance.
</p>

<section class="impact-section">
  <h2>Storyline</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>Before</span>
      <div><strong>Medical adaptation was often multi-stage</strong><p>Early medical LLM pipelines mixed domain corpora, instruction tuning, and dialogue alignment in separate steps, which made reproduction and ablation harder.</p></div>
    </div>
    <div class="impact-step">
      <span>Recipe</span>
      <div><strong>Unify the training format</strong><p>HuatuoGPT-II asks whether medical ability can be learned through a cleaner one-stage format that combines medical instructions and general dialogue behavior.</p></div>
    </div>
    <div class="impact-step">
      <span>Reuse</span>
      <div><strong>Release checkpoints and SFT data</strong><p>The 7B/34B checkpoints and HuatuoGPT2-SFT-GPT4-140K data turn the idea into a reusable baseline for later medical reasoning and vision work.</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Core Idea</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>One unified format</strong>
      <p>Training examples are organized so general instruction following and medical domain adaptation can be learned together rather than through brittle multi-stage handoffs.</p>
    </div>
    <div class="impact-card">
      <strong>Domain-specific supervision</strong>
      <p>The system uses curated medical QA and GPT-assisted medical SFT data to teach medical language, clinical question answering, and medical dialogue behavior.</p>
    </div>
    <div class="impact-card">
      <strong>Open checkpoints</strong>
      <p>HuatuoGPT2-7B and HuatuoGPT2-34B provide reusable model checkpoints for downstream research and comparison.</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Display Figures</h2>
  <div class="impact-gallery">
    <figure>
      <img src="/assets/img/media-roundup-2026/huatuogpt-auto-eval.jpeg" alt="HuatuoGPT-II evaluation flow">
      <figcaption>Automatic evaluation and medical QA testing make the adaptation recipe measurable.</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/media-roundup-2026/huatuogpt-overview.png" alt="HuatuoGPT ecosystem context">
      <figcaption>HuatuoGPT-II sits between the original HuatuoGPT dialogue model and later reasoning/vision extensions.</figcaption>
    </figure>
  </div>
</section>

<section class="impact-section">
  <h2>Project Outputs</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>HuatuoGPT-II code</strong>
      <p>Training, evaluation, and release notes for the one-stage medical adaptation approach.</p>
      <a href="https://github.com/FreedomIntelligence/HuatuoGPT-II" target="_blank" rel="noopener">Repository</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>HuatuoGPT2-SFT-GPT4-140K</strong>
      <p>A medical SFT dataset connected to the HuatuoGPT-II training pipeline.</p>
      <a href="https://huggingface.co/datasets/FreedomIntelligence/HuatuoGPT2-SFT-GPT4-140K" target="_blank" rel="noopener">Dataset</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>HuatuoGPT2 models</strong>
      <p>Open Hugging Face checkpoints for Chinese medical language modeling and medical QA experiments.</p>
      <a href="https://huggingface.co/FreedomIntelligence/HuatuoGPT2-34B" target="_blank" rel="noopener">Model</a>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Paper Trail</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>Origin</span>
      <div><strong>HuatuoGPT, towards Taming Language Model to Be a Doctor</strong><p>Defines the medical dialogue direction and shows why domain data matters for Chinese medical QA.</p><a href="https://github.com/FreedomIntelligence/HuatuoGPT" target="_blank" rel="noopener">HuatuoGPT</a></div>
    </div>
    <div class="impact-paper">
      <span>Adapt</span>
      <div><strong>HuatuoGPT-II, One-stage Training for Medical Adaption of LLMs</strong><p>The focused contribution: simpler one-stage medical adaptation with released checkpoints and SFT data.</p><a href="https://arxiv.org/abs/2311.09774" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Next</span>
      <div><strong>HuatuoGPT-o1 and HuatuoGPT-Vision</strong><p>Later projects reuse the medical model stack for complex reasoning and medical multimodal understanding.</p><a href="/projects/medical-ai-ecosystem/">Full ecosystem</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Where It Fits</h2>
  <p>
HuatuoGPT-II is the practical adaptation layer inside the broader HuatuoGPT ecosystem. HuatuoGPT starts the open medical dialogue agenda, HuatuoGPT-II simplifies medical adaptation, HuatuoGPT-o1 pushes complex reasoning, and HuatuoGPT-Vision expands the stack to multimodal medical knowledge.
  </p>
</section>

</div>

<div data-lang="zh">

<div class="impact-kicker">医疗大模型适配</div>

<div class="impact-tags">
  <span class="impact-tag">HuatuoGPT-II</span>
  <span class="impact-tag">单阶段训练</span>
  <span class="impact-tag">医学适配</span>
  <span class="impact-tag">中文医学问答</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://github.com/FreedomIntelligence/HuatuoGPT-II" target="_blank" rel="noopener">GitHub</a>
  <a class="impact-action secondary" href="https://huggingface.co/FreedomIntelligence/HuatuoGPT2-34B" target="_blank" rel="noopener">34B 模型</a>
  <a class="impact-action secondary" href="https://huggingface.co/FreedomIntelligence/HuatuoGPT2-7B" target="_blank" rel="noopener">7B 模型</a>
  <a class="impact-action secondary" href="https://arxiv.org/abs/2311.09774" target="_blank" rel="noopener">论文</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/media-roundup-2026/huatuogpt-auto-eval.jpeg" alt="HuatuoGPT-II 医学评测图">
</div>

<p class="impact-lede">
HuatuoGPT-II 研究如何用更简洁的单阶段训练方案让大模型适配医学领域，在降低流程复杂度的同时，保持较强的医学指令遵循能力和考试类评测表现。
</p>

<section class="impact-section">
  <h2>研究脉络</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>此前</span>
      <div><strong>医学适配往往分多个阶段</strong><p>早期医疗大模型的训练流程把领域语料、指令微调和对话对齐分成几个独立步骤，不易复现，也不便做消融实验。</p></div>
    </div>
    <div class="impact-step">
      <span>方案</span>
      <div><strong>统一训练格式</strong><p>HuatuoGPT-II 探讨能否用更简洁的单阶段格式学会医学能力，把医学指令与通用对话行为放在一起训练。</p></div>
    </div>
    <div class="impact-step">
      <span>复用</span>
      <div><strong>发布模型权重和 SFT 数据</strong><p>7B/34B 模型权重和 HuatuoGPT2-SFT-GPT4-140K 数据把这一思路变成可复用的基线，供后续的医学推理和视觉工作使用。</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>核心思路</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>统一格式</strong>
      <p>训练样本经过统一组织，使通用指令遵循和医学领域适配可以一起学习，而不必依赖脆弱的多阶段衔接。</p>
    </div>
    <div class="impact-card">
      <strong>医学领域监督</strong>
      <p>系统使用精选的医学问答数据和借助 GPT 构建的医学 SFT 数据，教模型医学语言、临床问答和医学对话行为。</p>
    </div>
    <div class="impact-card">
      <strong>开放模型权重</strong>
      <p>HuatuoGPT2-7B 和 HuatuoGPT2-34B 提供可复用的模型权重，供下游研究和对比使用。</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>图示</h2>
  <div class="impact-gallery">
    <figure>
      <img src="/assets/img/media-roundup-2026/huatuogpt-auto-eval.jpeg" alt="HuatuoGPT-II 评测流程">
      <figcaption>自动评测和医学问答测试，让这套适配方案的效果可以衡量。</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/media-roundup-2026/huatuogpt-overview.png" alt="华佗GPT 生态背景">
      <figcaption>HuatuoGPT-II 位于最初的 HuatuoGPT 对话模型与后续推理、视觉扩展之间。</figcaption>
    </figure>
  </div>
</section>

<section class="impact-section">
  <h2>项目成果</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>HuatuoGPT-II 代码</strong>
      <p>单阶段医学适配方法的训练、评测和发布说明。</p>
      <a href="https://github.com/FreedomIntelligence/HuatuoGPT-II" target="_blank" rel="noopener">代码仓库</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>HuatuoGPT2-SFT-GPT4-140K</strong>
      <p>与 HuatuoGPT-II 训练流程配套的医学 SFT 数据集。</p>
      <a href="https://huggingface.co/datasets/FreedomIntelligence/HuatuoGPT2-SFT-GPT4-140K" target="_blank" rel="noopener">数据集</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>HuatuoGPT2 模型</strong>
      <p>Hugging Face 上开放的模型权重，可用于中文医学语言建模和医学问答实验。</p>
      <a href="https://huggingface.co/FreedomIntelligence/HuatuoGPT2-34B" target="_blank" rel="noopener">模型</a>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>论文脉络</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>起点</span>
      <div><strong>HuatuoGPT, towards Taming Language Model to Be a Doctor</strong><p>确立医疗对话方向，并说明领域数据为何对中文医学问答至关重要。</p><a href="https://github.com/FreedomIntelligence/HuatuoGPT" target="_blank" rel="noopener">HuatuoGPT</a></div>
    </div>
    <div class="impact-paper">
      <span>适配</span>
      <div><strong>HuatuoGPT-II, One-stage Training for Medical Adaption of LLMs</strong><p>本项目的核心贡献：更简洁的单阶段医学适配，并发布模型权重和 SFT 数据。</p><a href="https://arxiv.org/abs/2311.09774" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>后续</span>
      <div><strong>HuatuoGPT-o1 与 HuatuoGPT-Vision</strong><p>后续项目沿用这套医疗模型技术栈，用于复杂推理和医学多模态理解。</p><a href="/projects/medical-ai-ecosystem/">完整生态</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>在生态中的位置</h2>
  <p>
HuatuoGPT-II 是整个华佗GPT 生态中偏实用的适配层。HuatuoGPT 开启了开放的医疗对话研究，HuatuoGPT-II 简化了医学适配，HuatuoGPT-o1 推进复杂推理，HuatuoGPT-Vision 则把技术栈扩展到多模态医学知识。
  </p>
</section>

</div>

</div>
