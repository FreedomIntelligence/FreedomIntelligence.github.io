---
layout: page
title: HuatuoGPT Medical AI Ecosystem
title_zh: 华佗GPT 医疗 AI 生态
direction: ai-applications
description: Open medical language, vision, reasoning, data, and deployment infrastructure for clinical AI.
description_zh: 面向临床 AI 的开放基础设施，涵盖医疗语言、视觉与推理模型，以及数据和部署。
img: assets/img/media-roundup-2026/huatuogpt-overview.png
importance: 1
category: work
github: https://github.com/FreedomIntelligence/HuatuoGPT
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div data-lang="en">

<div class="impact-kicker">Medical AI ecosystem</div>

<div class="impact-tags">
  <span class="impact-tag">AI for Healthcare</span>
  <span class="impact-tag">Clinical reasoning</span>
  <span class="impact-tag">Medical vision-language</span>
  <span class="impact-tag">Open data</span>
  <span class="impact-tag">Deployment</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://github.com/FreedomIntelligence/HuatuoGPT" target="_blank" rel="noopener">HuatuoGPT</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/HuatuoGPT-o1" target="_blank" rel="noopener">HuatuoGPT-o1</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/HuatuoGPT-Vision" target="_blank" rel="noopener">HuatuoGPT-Vision</a>
  <a class="impact-action secondary" href="https://huggingface.co/datasets/FreedomIntelligence/medical-o1-reasoning-SFT" target="_blank" rel="noopener">Reasoning data</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/media-roundup-2026/huatuogpt-overview.png" alt="HuatuoGPT medical AI overview">
</div>

<p class="impact-lede">
HuatuoGPT is the lab's flagship medical AI program: an open ecosystem that moves from Chinese medical QA data to doctor-facing chat models, medical complex reasoning, multimodal medical vision, and real-world triage and pre-consultation systems.
</p>

<div class="impact-callout">
The project is not a single model release. It is a stack: medical data construction, supervised medical adaptation, verifier-style reasoning problems, visual medical knowledge injection, evaluation, and deployment loops that expose what medical AI can and cannot safely do.
</div>

<section class="impact-section">
  <h2>Research Storyline</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>Data</span>
      <div><strong>Start with Chinese medical QA</strong><p>Huatuo-26M and the early HuatuoGPT work created a reusable Chinese medical question-answering substrate for medical instruction tuning.</p></div>
    </div>
    <div class="impact-step">
      <span>Adapt</span>
      <div><strong>Turn general LLMs into medical assistants</strong><p>HuatuoGPT-II simplifies medical adaptation with a one-stage recipe and public checkpoints, making the training pipeline easier to reproduce.</p></div>
    </div>
    <div class="impact-step">
      <span>Reason</span>
      <div><strong>Move from chat to complex diagnosis</strong><p>HuatuoGPT-o1 introduces medical complex reasoning data and models, pushing beyond fluent consultation toward step-by-step clinical reasoning.</p></div>
    </div>
    <div class="impact-step">
      <span>See</span>
      <div><strong>Add visual medical knowledge</strong><p>HuatuoGPT-Vision and PubMedVision connect medical images, reports, and dialogue so the ecosystem can handle multimodal clinical questions.</p></div>
    </div>
    <div class="impact-step">
      <span>Deploy</span>
      <div><strong>Close the loop with real workflows</strong><p>Longgang triage and pre-consultation deployment turns evaluation pressure back into product and research questions.</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>What It Builds</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>Open medical LLMs</strong>
      <p>HuatuoGPT and HuatuoGPT-II adapt general LLMs to medical consultation, QA, and instruction-following with domain-specific supervision and evaluation.</p>
    </div>
    <div class="impact-card">
      <strong>Complex medical reasoning</strong>
      <p>HuatuoGPT-o1 introduces verifiable medical problems and reasoning SFT data, targeting multi-step diagnosis, treatment reasoning, and medical decision support.</p>
    </div>
    <div class="impact-card">
      <strong>Medical multimodality</strong>
      <p>HuatuoGPT-Vision and PubMedVision inject medical visual knowledge into multimodal LLMs for image-grounded medical dialogue and visual QA.</p>
    </div>
    <div class="impact-card">
      <strong>Deployment path</strong>
      <p>HuatuoGPT-powered intelligent triage and pre-consultation systems have been used in Longgang, Shenzhen public hospital and community health settings.</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Project Gallery</h2>
  <div class="impact-gallery">
    <figure>
      <img src="/assets/img/media-roundup-2026/huatuogpt-overview.png" alt="HuatuoGPT ecosystem overview">
      <figcaption>The ecosystem view: data, medical LLMs, reasoning, multimodality, and deployment form one pipeline.</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/media-roundup-2026/huatuogpt-auto-eval.jpeg" alt="HuatuoGPT-II automatic evaluation">
      <figcaption>HuatuoGPT-II focuses on a simpler medical adaptation recipe and reproducible evaluation.</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/freedomai-2026/impact/huatuogpt-longgang.jpg" alt="HuatuoGPT Longgang deployment">
      <figcaption>Deployment in Longgang turns model research into triage and pre-consultation workflow feedback.</figcaption>
    </figure>
  </div>
</section>

<section class="impact-section">
  <h2>Representative Work</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>Huatuo-26M</strong>
      <p>A large Chinese medical QA dataset that seeded the early HuatuoGPT training pipeline and made Chinese medical instruction data reusable.</p>
      <a href="https://github.com/FreedomIntelligence/Huatuo-26M" target="_blank" rel="noopener">Code and data</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>HuatuoGPT-o1</strong>
      <p>Medical complex reasoning models trained with medical-o1-reasoning-SFT and verifiable medical problem data.</p>
      <a href="https://huggingface.co/FreedomIntelligence/HuatuoGPT-o1-8B" target="_blank" rel="noopener">Model</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>HuatuoGPT-Vision</strong>
      <p>A multimodal medical model line connected to PubMedVision, a large image-text medical visual instruction dataset.</p>
      <a href="https://huggingface.co/FreedomIntelligence/HuatuoGPT-Vision-7B" target="_blank" rel="noopener">Model</a>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Paper Trail</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>Dataset</span>
      <div><strong>Huatuo-26M, a Large-scale Chinese Medical QA Dataset</strong><p>Builds the data foundation for Chinese medical instruction tuning and evaluation.</p><a href="https://github.com/FreedomIntelligence/Huatuo-26M" target="_blank" rel="noopener">Code and data</a></div>
    </div>
    <div class="impact-paper">
      <span>Model</span>
      <div><strong>HuatuoGPT, towards Taming Language Model to Be a Doctor</strong><p>Turns the data foundation into an open medical dialogue model and establishes the first HuatuoGPT model family.</p><a href="https://github.com/FreedomIntelligence/HuatuoGPT" target="_blank" rel="noopener">Repository</a></div>
    </div>
    <div class="impact-paper">
      <span>Adapt</span>
      <div><strong>HuatuoGPT-II, One-stage Training for Medical Adaption of LLMs</strong><p>Simplifies the adaptation pipeline and releases public checkpoints for downstream medical LLM research.</p><a href="https://github.com/FreedomIntelligence/HuatuoGPT-II" target="_blank" rel="noopener">Repository</a></div>
    </div>
    <div class="impact-paper">
      <span>Reasoning</span>
      <div><strong>HuatuoGPT-o1: Towards Medical Complex Reasoning with LLMs</strong><p>Adds verifier-style medical reasoning data and models to make medical outputs more structured and testable.</p><a href="https://github.com/FreedomIntelligence/HuatuoGPT-o1" target="_blank" rel="noopener">Repository</a></div>
    </div>
    <div class="impact-paper">
      <span>Vision</span>
      <div><strong>HuatuoGPT-Vision, Towards Injecting Medical Visual Knowledge into Multimodal LLMs at Scale</strong><p>Extends the ecosystem from text-only medical QA to image-grounded medical dialogue and multimodal knowledge.</p><a href="https://github.com/FreedomIntelligence/HuatuoGPT-Vision" target="_blank" rel="noopener">Repository</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Why It Matters</h2>
  <ul class="impact-list">
    <li>It turns medical AI from a demo into a reproducible stack of datasets, models, benchmarks, and deployment artifacts.</li>
    <li>It connects text-only consultation, visual medical understanding, and explicit reasoning rather than treating them as isolated model families.</li>
    <li>It provides open entry points for the community: GitHub repositories, Hugging Face checkpoints, and medical reasoning datasets.</li>
  </ul>
</section>

</div>

<div data-lang="zh">

<div class="impact-kicker">医疗 AI 生态</div>

<div class="impact-tags">
  <span class="impact-tag">AI for Healthcare</span>
  <span class="impact-tag">临床推理</span>
  <span class="impact-tag">医疗视觉-语言</span>
  <span class="impact-tag">开放数据</span>
  <span class="impact-tag">部署</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://github.com/FreedomIntelligence/HuatuoGPT" target="_blank" rel="noopener">HuatuoGPT</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/HuatuoGPT-o1" target="_blank" rel="noopener">HuatuoGPT-o1</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/HuatuoGPT-Vision" target="_blank" rel="noopener">HuatuoGPT-Vision</a>
  <a class="impact-action secondary" href="https://huggingface.co/datasets/FreedomIntelligence/medical-o1-reasoning-SFT" target="_blank" rel="noopener">推理数据</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/media-roundup-2026/huatuogpt-overview.png" alt="华佗GPT 医疗 AI 概览">
</div>

<p class="impact-lede">
华佗GPT 是实验室的旗舰医疗 AI 项目，也是一个开放生态。它从中文医学问答数据起步，逐步扩展到面向医生的对话模型、复杂医学推理、多模态医学视觉，以及真实场景中的分诊与预问诊系统。
</p>

<div class="impact-callout">
该项目不是单次的模型发布，而是一整套技术栈：医学数据构建、监督式医学适配、可验证的推理问题、医学视觉知识注入、评测，以及部署闭环。评测与部署让我们看清，医疗 AI 哪些事能安全地做，哪些不能。
</div>

<section class="impact-section">
  <h2>研究脉络</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>数据</span>
      <div><strong>从中文医学问答起步</strong><p>Huatuo-26M 与早期的 HuatuoGPT 工作，为医学指令微调提供了可复用的中文医学问答数据基础。</p></div>
    </div>
    <div class="impact-step">
      <span>适配</span>
      <div><strong>把通用大模型变成医疗助手</strong><p>HuatuoGPT-II 用一阶段训练方案和公开的模型权重简化医学适配，让训练流程更容易复现。</p></div>
    </div>
    <div class="impact-step">
      <span>推理</span>
      <div><strong>从对话走向复杂诊断</strong><p>HuatuoGPT-o1 引入医学复杂推理数据和模型，推动模型从流畅的问诊走向逐步的临床推理。</p></div>
    </div>
    <div class="impact-step">
      <span>视觉</span>
      <div><strong>加入医学视觉知识</strong><p>HuatuoGPT-Vision 与 PubMedVision 把医学图像、报告和对话连接起来，使整个生态能够处理多模态临床问题。</p></div>
    </div>
    <div class="impact-step">
      <span>部署</span>
      <div><strong>用真实工作流形成闭环</strong><p>龙岗的分诊与预问诊部署，把真实场景带来的评测压力转化为新的产品和研究问题。</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>主要构成</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>开源医疗大模型</strong>
      <p>HuatuoGPT 和 HuatuoGPT-II 借助领域监督数据和评测，把通用大模型适配到医疗问诊、问答和指令遵循。</p>
    </div>
    <div class="impact-card">
      <strong>复杂医学推理</strong>
      <p>HuatuoGPT-o1 提出可验证的医学问题和推理 SFT 数据，面向多步诊断、治疗推理和医疗决策支持。</p>
    </div>
    <div class="impact-card">
      <strong>医学多模态</strong>
      <p>HuatuoGPT-Vision 和 PubMedVision 把医学视觉知识注入多模态大模型，用于基于图像的医疗对话和视觉问答。</p>
    </div>
    <div class="impact-card">
      <strong>部署路径</strong>
      <p>由华佗GPT 驱动的智能分诊和预问诊系统，已在深圳龙岗的公立医院和社康中心投入使用。</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>项目图集</h2>
  <div class="impact-gallery">
    <figure>
      <img src="/assets/img/media-roundup-2026/huatuogpt-overview.png" alt="华佗GPT 生态概览">
      <figcaption>生态全景：数据、医疗大模型、推理、多模态与部署，构成同一条流水线。</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/media-roundup-2026/huatuogpt-auto-eval.jpeg" alt="HuatuoGPT-II 自动评测">
      <figcaption>HuatuoGPT-II 追求更简洁的医学适配方案和可复现的评测。</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/freedomai-2026/impact/huatuogpt-longgang.jpg" alt="华佗GPT 龙岗部署">
      <figcaption>龙岗的部署让模型研究接入分诊和预问诊流程，并从中获得反馈。</figcaption>
    </figure>
  </div>
</section>

<section class="impact-section">
  <h2>代表性工作</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>Huatuo-26M</strong>
      <p>大规模中文医学问答数据集，为早期 HuatuoGPT 的训练流程提供了数据起点，也让中文医学指令数据得以复用。</p>
      <a href="https://github.com/FreedomIntelligence/Huatuo-26M" target="_blank" rel="noopener">代码与数据</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>HuatuoGPT-o1</strong>
      <p>用 medical-o1-reasoning-SFT 和可验证的医学问题数据训练的医学复杂推理模型。</p>
      <a href="https://huggingface.co/FreedomIntelligence/HuatuoGPT-o1-8B" target="_blank" rel="noopener">模型</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>HuatuoGPT-Vision</strong>
      <p>多模态医学模型系列，配套大规模医学图文视觉指令数据集 PubMedVision。</p>
      <a href="https://huggingface.co/FreedomIntelligence/HuatuoGPT-Vision-7B" target="_blank" rel="noopener">模型</a>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>论文脉络</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>数据集</span>
      <div><strong>Huatuo-26M, a Large-scale Chinese Medical QA Dataset</strong><p>为中文医学指令微调和评测打下数据基础。</p><a href="https://github.com/FreedomIntelligence/Huatuo-26M" target="_blank" rel="noopener">代码与数据</a></div>
    </div>
    <div class="impact-paper">
      <span>模型</span>
      <div><strong>HuatuoGPT, towards Taming Language Model to Be a Doctor</strong><p>把数据基础转化为开放的医学对话模型，并确立了最初的 HuatuoGPT 模型系列。</p><a href="https://github.com/FreedomIntelligence/HuatuoGPT" target="_blank" rel="noopener">代码仓库</a></div>
    </div>
    <div class="impact-paper">
      <span>适配</span>
      <div><strong>HuatuoGPT-II, One-stage Training for Medical Adaption of LLMs</strong><p>简化了适配流程，并发布公开的模型权重，供下游医疗大模型研究使用。</p><a href="https://github.com/FreedomIntelligence/HuatuoGPT-II" target="_blank" rel="noopener">代码仓库</a></div>
    </div>
    <div class="impact-paper">
      <span>推理</span>
      <div><strong>HuatuoGPT-o1: Towards Medical Complex Reasoning with LLMs</strong><p>加入可验证的医学推理数据和模型，让医疗输出更有条理，也更容易检验。</p><a href="https://github.com/FreedomIntelligence/HuatuoGPT-o1" target="_blank" rel="noopener">代码仓库</a></div>
    </div>
    <div class="impact-paper">
      <span>视觉</span>
      <div><strong>HuatuoGPT-Vision, Towards Injecting Medical Visual Knowledge into Multimodal LLMs at Scale</strong><p>把生态从纯文本的医学问答，扩展到基于图像的医疗对话和多模态知识。</p><a href="https://github.com/FreedomIntelligence/HuatuoGPT-Vision" target="_blank" rel="noopener">代码仓库</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>研究意义</h2>
  <ul class="impact-list">
    <li>它让医疗 AI 不再只是演示，而是一套可复现的体系，涵盖数据集、模型、评测基准和部署成果。</li>
    <li>它把纯文本问诊、医学视觉理解和显式推理连成一体，而不是当作彼此孤立的模型系列。</li>
    <li>它为社区提供开放的入口：GitHub 代码仓库、Hugging Face 上的模型权重，以及医学推理数据集。</li>
  </ul>
</section>

</div>

</div>
