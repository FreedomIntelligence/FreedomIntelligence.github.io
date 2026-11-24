---
layout: page
title: LLM Efficiency and AI Infrastructure
title_zh: "大模型效率与 AI 基础设施"
direction: ai-for-infra
description: Efficient training, inference, retrieval, data, and multimodal context infrastructure for open LLM builders.
description_zh: "面向开源大模型开发者的高效训练、推理、检索、数据与多模态上下文基础设施。"
img: assets/img/research/llm-efficiency.svg
importance: 14
category: work
github: https://github.com/FreedomIntelligence/LongLLaVA
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div data-lang="en">

<div class="impact-kicker">Efficiency and infrastructure</div>

<div class="impact-tags">
  <span class="impact-tag">Long context</span>
  <span class="impact-tag">Efficient reasoning</span>
  <span class="impact-tag">RAG data</span>
  <span class="impact-tag">Token reduction</span>
  <span class="impact-tag">Open infrastructure</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="/projects/long-context-multimodal/">LongLLaVA and MileBench</a>
  <a class="impact-action secondary" href="/projects/rag-instruction-data/">RAG and Data</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/TRIM" target="_blank" rel="noopener">TRIM</a>
  <a class="impact-action secondary" href="/projects/">All Projects</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/research/llm-efficiency.svg" alt="Diagram of four efficiency levers: prune reasoning paths, tune with less supervision, edit compressed KV caches, and use fewer visual tokens" width="1200" height="675">
</div>

<p class="impact-lede">
This project gathers the infrastructure work that makes open models more usable: longer multimodal context, cheaper visual tokens, stronger retrieval data, editable memory, efficient fine-tuning, and reasoning systems that spend computation where it matters.
</p>

<section class="impact-section">
  <h2>Background and Motivation</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>Capability is constrained by infrastructure</strong>
      <p>Better models are not enough if training data, retrieval pipelines, memory, long context, and inference cost do not scale with real tasks.</p>
    </div>
    <div class="impact-card">
      <strong>Multimodal inputs are expensive</strong>
      <p>Images, videos, and long documents quickly overload context windows, making token selection and long-context design central to deployment.</p>
    </div>
    <div class="impact-card">
      <strong>Reasoning needs adaptive compute</strong>
      <p>Efficient reasoning systems should prune weak paths, tune with minimal supervision, and update knowledge without expensive retraining.</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Core Ideas</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>Context</span>
      <div><strong>Scale multimodal context length</strong><p>LongLLaVA and MileBench study how models reason over many images and long multimodal inputs without losing global structure.</p></div>
    </div>
    <div class="impact-step">
      <span>Tokens</span>
      <div><strong>Spend visual tokens only where they help</strong><p>TRIM studies token reduction for multimodal LLMs, reducing cost while preserving reasoning-critical visual information.</p></div>
    </div>
    <div class="impact-step">
      <span>Data</span>
      <div><strong>Build instruction and retrieval infrastructure</strong><p>RAG-Instruct, LLMZoo, and related resources package data, models, and tasks so downstream builders can reproduce and extend systems.</p></div>
    </div>
    <div class="impact-step">
      <span>Update</span>
      <div><strong>Make memory and reasoning editable</strong><p>E2-RAG, prefix tuning, question-free fine-tuning, and early path pruning all aim to update or accelerate systems without rebuilding everything.</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Typical Work</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>Long</span>
      <div><strong>LongLLaVA and MileBench</strong><p>Long-context multimodal model and benchmark work for reasoning over many images, videos, and long visual contexts.</p><a href="/projects/long-context-multimodal/">Project page</a></div>
    </div>
    <div class="impact-paper">
      <span>Efficient</span>
      <div><strong>TRIM: Less is More for Efficient Multi-modal LLMs</strong><p>Reduces visual tokens so multimodal inference is cheaper while retaining task-relevant evidence.</p><a href="https://arxiv.org/abs/2409.10994" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>RAG</span>
      <div><strong>E2-RAG and RAG-Instruct</strong><p>Studies editable efficient retrieval and data infrastructure for retrieval-augmented instruction following.</p><a href="/projects/rag-instruction-data/">Project page</a></div>
    </div>
    <div class="impact-paper">
      <span>Reason</span>
      <div><strong>Question-Free Fine-Tuning and path pruning</strong><p>Improves adaptive reasoning with less supervision and by pruning low-value reasoning branches early.</p><a href="https://arxiv.org/abs/2506.12860" target="_blank" rel="noopener">QFFT</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Display Figures</h2>
  <div class="impact-gallery">
    <figure>
      <img src="/assets/img/media-roundup-2026/longllava-architecture.webp" alt="LongLLaVA architecture">
      <figcaption>Long-context multimodal infrastructure lets models reason across many images rather than isolated visual snippets.</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/media-roundup-2026/longllava-training.png" alt="LongLLaVA training data and pipeline">
      <figcaption>Efficient training pipelines connect data design, context scaling, and downstream evaluation.</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/freedomai-2026/impact/github-repos.png" alt="Open-source repositories and model resources">
      <figcaption>Open repositories, datasets, and model cards turn infrastructure work into reusable building blocks.</figcaption>
    </figure>
  </div>
</section>

<section class="impact-section">
  <h2>Resource Map</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>LongLLaVA and MileBench</strong>
      <p>Long-context multimodal project page covering models, benchmarks, and visual context scaling.</p>
      <a href="/projects/long-context-multimodal/">Project page</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>RAG and Instruction Data</strong>
      <p>Data and retrieval infrastructure for instruction tuning and knowledge-grounded model building.</p>
      <a href="/projects/rag-instruction-data/">Project page</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>LLMZoo</strong>
      <p>Open model and training resource collection that supports the lab's broader multilingual and infrastructure stack.</p>
      <a href="https://github.com/FreedomIntelligence/LLMZoo" target="_blank" rel="noopener">Repository</a>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Why It Matters</h2>
  <ul class="impact-list">
    <li>Open AI progress depends on infrastructure that smaller teams can run, inspect, and extend.</li>
    <li>Long-context and multimodal tasks need cost-aware model design, not only larger context windows.</li>
    <li>Editable retrieval and efficient adaptation make models more practical in domains where knowledge changes quickly.</li>
  </ul>
</section>

<div class="impact-actions">
  <a class="impact-action secondary" href="/projects/">Back to Projects</a>
</div>

</div>

<div data-lang="zh">

<div class="impact-kicker">效率与基础设施</div>

<div class="impact-tags">
  <span class="impact-tag">长上下文</span>
  <span class="impact-tag">高效推理</span>
  <span class="impact-tag">RAG 数据</span>
  <span class="impact-tag">token 压缩</span>
  <span class="impact-tag">开源基础设施</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="/projects/long-context-multimodal/">LongLLaVA 与 MileBench</a>
  <a class="impact-action secondary" href="/projects/rag-instruction-data/">RAG 与数据</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/TRIM" target="_blank" rel="noopener">TRIM</a>
  <a class="impact-action secondary" href="/projects/">全部项目</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/research/llm-efficiency-zh.svg" alt="示意图：四种效率手段——剪枝推理路径、在更少监督下微调、编辑压缩后的 KV 缓存、减少视觉 token" width="1200" height="675">
</div>

<p class="impact-lede">
本项目汇集了让开源模型更好用的基础设施工作：更长的多模态上下文、更低成本的视觉 token、更优质的检索数据、可编辑的记忆、高效微调，以及把算力用在刀刃上的推理系统。
</p>

<section class="impact-section">
  <h2>背景与动机</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>能力受限于基础设施</strong>
      <p>光有更好的模型还不够：训练数据、检索流程、记忆、长上下文和推理成本，都要能跟上真实任务的规模。</p>
    </div>
    <div class="impact-card">
      <strong>多模态输入开销大</strong>
      <p>图像、视频和长文档很容易占满上下文窗口，因此 token 选择和长上下文设计成为部署的关键。</p>
    </div>
    <div class="impact-card">
      <strong>推理需要按需分配算力</strong>
      <p>高效的推理系统应当剪掉低价值路径，用最少的监督完成微调，并且无需昂贵的重新训练就能更新知识。</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>核心思路</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>上下文</span>
      <div><strong>扩展多模态上下文长度</strong><p>LongLLaVA 和 MileBench 研究模型如何在大量图像和长多模态输入上推理，同时不丢失全局结构。</p></div>
    </div>
    <div class="impact-step">
      <span>Token</span>
      <div><strong>视觉 token 只用在有帮助的地方</strong><p>TRIM 研究多模态大模型的 token 压缩，在降低成本的同时保留对推理至关重要的视觉信息。</p></div>
    </div>
    <div class="impact-step">
      <span>数据</span>
      <div><strong>搭建指令数据与检索基础设施</strong><p>RAG-Instruct、LLMZoo 等资源把数据、模型和任务打包开放，方便下游开发者复现并扩展系统。</p></div>
    </div>
    <div class="impact-step">
      <span>更新</span>
      <div><strong>让记忆和推理可编辑</strong><p>E2-RAG、前缀微调、Question-Free Fine-Tuning 和早期路径剪枝，目标都是在不推倒重来的前提下更新或加速系统。</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>代表性工作</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>长上下文</span>
      <div><strong>LongLLaVA 与 MileBench</strong><p>围绕多图像、视频和长视觉上下文推理，提出长上下文多模态模型与评测基准。</p><a href="/projects/long-context-multimodal/">项目主页</a></div>
    </div>
    <div class="impact-paper">
      <span>高效</span>
      <div><strong>TRIM: Less is More for Efficient Multi-modal LLMs</strong><p>减少视觉 token，在保留任务相关证据的同时降低多模态推理成本。</p><a href="https://arxiv.org/abs/2409.10994" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>RAG</span>
      <div><strong>E2-RAG 与 RAG-Instruct</strong><p>研究可编辑的高效检索，以及面向检索增强指令遵循的数据基础设施。</p><a href="/projects/rag-instruction-data/">项目主页</a></div>
    </div>
    <div class="impact-paper">
      <span>推理</span>
      <div><strong>Question-Free Fine-Tuning 与路径剪枝</strong><p>用更少的监督提升自适应推理能力，并尽早剪掉低价值的推理分支。</p><a href="https://arxiv.org/abs/2506.12860" target="_blank" rel="noopener">QFFT</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>图示</h2>
  <div class="impact-gallery">
    <figure>
      <img src="/assets/img/media-roundup-2026/longllava-architecture.webp" alt="LongLLaVA 架构图">
      <figcaption>长上下文多模态基础设施让模型能够跨多张图像推理，而不是只看孤立的视觉片段。</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/media-roundup-2026/longllava-training.png" alt="LongLLaVA 训练数据与流程">
      <figcaption>高效的训练流程把数据设计、上下文扩展和下游评测衔接起来。</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/freedomai-2026/impact/github-repos.png" alt="开源代码仓库与模型资源">
      <figcaption>开放的代码仓库、数据集和模型卡，把基础设施工作变成可复用的基础组件。</figcaption>
    </figure>
  </div>
</section>

<section class="impact-section">
  <h2>资源导航</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>LongLLaVA 与 MileBench</strong>
      <p>长上下文多模态项目页面，涵盖模型、评测基准和视觉上下文扩展。</p>
      <a href="/projects/long-context-multimodal/">项目主页</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>RAG 与指令数据</strong>
      <p>为指令微调和知识增强的模型构建提供数据与检索基础设施。</p>
      <a href="/projects/rag-instruction-data/">项目主页</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>LLMZoo</strong>
      <p>开放的模型与训练资源合集，支撑实验室更广泛的多语言与基础设施技术栈。</p>
      <a href="https://github.com/FreedomIntelligence/LLMZoo" target="_blank" rel="noopener">代码仓库</a>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>研究意义</h2>
  <ul class="impact-list">
    <li>开源 AI 的进步，离不开小团队也能运行、检查和扩展的基础设施。</li>
    <li>长上下文和多模态任务需要兼顾成本的模型设计，而不只是更大的上下文窗口。</li>
    <li>可编辑的检索和高效适配，让模型在知识更新很快的领域更加实用。</li>
  </ul>
</section>

<div class="impact-actions">
  <a class="impact-action secondary" href="/projects/">返回项目页</a>
</div>

</div>

</div>
