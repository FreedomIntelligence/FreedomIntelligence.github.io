---
layout: page
permalink: /projects/
title: Projects
title_zh: 项目
description:
project_tags:
  - LLM Interpretability
  - Medical LLMs
  - AI for Healthcare
  - Multi-modal LLMs
  - Multilingual LLMs
  - AI for Reasoning and Agentic RL
nav: true
nav_order: 2
---

<link rel="stylesheet" href="{{ '/assets/css/project-hub.css' | relative_url }}">

<div class="project-hub project-focused">
  <div class="project-toolbar">
    <div>
      <span>Filter</span>
      <strong>Show programs by research tag</strong>
    </div>
    <div class="project-filter" aria-label="Project filters">
      <button type="button" class="is-active" data-project-filter="all">All</button>
      {% for tag in page.project_tags %}
        <button type="button" data-project-filter="{{ tag | escape }}">{{ tag }}</button>
      {% endfor %}
    </div>
  </div>

  <p class="project-empty" hidden>No projects found for this tag.</p>

  <section class="project-program-section project-theme-explain" id="interpretable-llms" data-project-tags="LLM Interpretability;Medical LLMs;AI for Reasoning and Agentic RL">
    <div class="project-program-heading">
      <div class="project-eyebrow">Explainable and verifiable LLMs</div>
      <h2>可解释大模型相关 Project</h2>
      <p>
        这条线关心模型“为什么这样回答”。在医学诊断里，Chain-of-Diagnosis 把诊断过程拆成医生式链条和置信度分布；在通用推理里，verifier、代码执行、路径剪枝和多模态强化学习让推理过程更可检查、更可复现。
      </p>
    </div>
    <div class="project-program-layout">
      <div class="project-program-media">
        <img src="/assets/img/media-roundup-2026/huatuogpt-auto-eval.jpeg" alt="Explainable and verifiable reasoning workflow">
      </div>
      <div>
        <h3>相关论文整理</h3>
        <ol class="project-paper-list">
          <li><a href="https://arxiv.org/abs/2407.13301" target="_blank" rel="noopener">CoD, Towards an Interpretable Medical Agent using Chain of Diagnosis</a>：用五步诊断链和置信度分布提升医学诊断可解释性。</li>
          <li><a href="https://arxiv.org/abs/2303.14725" target="_blank" rel="noopener">Natural Language Reasoning, a Survey</a>：梳理自然语言推理任务、方法和评价。</li>
          <li><a href="https://arxiv.org/abs/2311.09724" target="_blank" rel="noopener">Outcome-supervised Verifiers for Planning in Mathematical Reasoning</a>：用结果监督 verifier 辅助数学规划推理。</li>
          <li><a href="https://arxiv.org/abs/2506.09820" target="_blank" rel="noopener">CoRT: Code-integrated Reasoning within Thinking</a>：把代码执行放入思维过程，让中间计算更透明。</li>
          <li><a href="https://arxiv.org/abs/2503.21776" target="_blank" rel="noopener">Video-R1: Reinforcing Video Reasoning in MLLMs</a>：把可验证推理训练扩展到视频多模态模型。</li>
          <li><a href="https://arxiv.org/abs/2604.16029" target="_blank" rel="noopener">Cut Your Losses! Learning to Prune Paths Early for Efficient Parallel Reasoning</a>：学习提前剪枝低价值推理路径，提升并行推理效率。</li>
        </ol>
      </div>
    </div>
    <details class="project-resources-panel">
      <summary><span>GitHub / Hugging Face 资源</span><strong>Code, models, datasets</strong></summary>
      <div class="project-stack project-resource-stack">
      <a class="project-stack-row" href="https://github.com/FreedomIntelligence/Chain-of-Diagnosis" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/Chain-of-Diagnosis</strong><span>CoD 代码、诊断链数据、疾病库、DxBench 和 DiagnosisGPT 入口。</span></span></a>
      <a class="project-stack-row" href="https://huggingface.co/FreedomIntelligence/DiagnosisGPT-6B" target="_blank" rel="noopener"><span class="project-stack-type">HF Model</span><span class="project-stack-main"><strong>FreedomIntelligence/DiagnosisGPT-6B</strong><span>基于 CoD 的可解释诊断模型。</span></span></a>
      <a class="project-stack-row" href="https://huggingface.co/FreedomIntelligence/DiagnosisGPT-34B" target="_blank" rel="noopener"><span class="project-stack-type">HF Model</span><span class="project-stack-main"><strong>FreedomIntelligence/DiagnosisGPT-34B</strong><span>更大规模的 DiagnosisGPT 诊断模型。</span></span></a>
      <a class="project-stack-row" href="https://huggingface.co/datasets/FreedomIntelligence/DxBench" target="_blank" rel="noopener"><span class="project-stack-type">HF Dataset</span><span class="project-stack-main"><strong>FreedomIntelligence/DxBench</strong><span>真实医患对话构建的疾病诊断 benchmark。</span></span></a>
      <a class="project-stack-row" href="https://github.com/FreedomIntelligence/OVM" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/OVM</strong><span>Outcome-supervised verifier 相关代码。</span></span></a>
      <a class="project-stack-row" href="https://github.com/ChengpengLi1003/CoRT" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>ChengpengLi1003/CoRT</strong><span>代码集成推理项目。</span></span></a>
      <a class="project-stack-row" href="https://github.com/tulerfeng/Video-R1" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>tulerfeng/Video-R1</strong><span>视频推理强化学习代码。</span></span></a>
      <a class="project-stack-row" href="https://github.com/LWL-cpu/Question-Free-Fine-Tuning" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>LWL-cpu/Question-Free-Fine-Tuning</strong><span>面向高效自适应推理的 fine-tuning 资源。</span></span></a>
      </div>
    </details>
  </section>

  <section class="project-program-section project-theme-medical" id="huatuogpt" data-project-tags="Medical LLMs;AI for Healthcare;Multi-modal LLMs">
    <div class="project-program-heading">
      <div class="project-eyebrow">HuatuoGPT medical model family</div>
      <h2>华佗GPT系列大模型</h2>
      <p>
        华佗GPT 是医学大模型主线：先用 Huatuo-26M 建立中文医学问答底座，再训练 HuatuoGPT / HuatuoGPT-II，随后进入 HuatuoGPT-o1 的复杂医学推理和 HuatuoGPT-Vision 的医学视觉语言理解。
      </p>
      <div class="project-actions">
        <a class="project-action primary" href="/projects/medical-ai-ecosystem/">Open HuatuoGPT Ecosystem</a>
        <a class="project-action" href="/projects/huatuogpt-ii/">Open HuatuoGPT-II</a>
      </div>
    </div>
    <div class="project-program-layout">
      <div class="project-program-media">
        <img src="/assets/img/media-roundup-2026/huatuogpt-overview.png" alt="HuatuoGPT medical model ecosystem">
      </div>
      <div>
        <h3>相关论文整理</h3>
        <ol class="project-paper-list">
          <li><a href="https://arxiv.org/abs/2305.01526" target="_blank" rel="noopener">Huatuo-26M, a Large-scale Chinese Medical QA Dataset</a>：中文医学 QA 数据基础。</li>
          <li><a href="https://arxiv.org/abs/2305.15075" target="_blank" rel="noopener">HuatuoGPT, towards Taming Language Model to Be a Doctor</a>：早期开放医学对话模型。</li>
          <li><a href="https://arxiv.org/abs/2311.09774" target="_blank" rel="noopener">HuatuoGPT-II, One-stage Training for Medical Adaption of LLMs</a>：统一一阶段医学适配训练。</li>
          <li><a href="https://arxiv.org/abs/2412.18925" target="_blank" rel="noopener">Towards Medical Complex Reasoning with LLMs through Medical Verifiable Problems</a>：HuatuoGPT-o1 复杂医学推理。</li>
          <li><a href="https://arxiv.org/abs/2406.19280" target="_blank" rel="noopener">HuatuoGPT-Vision, Towards Injecting Medical Visual Knowledge into Multimodal LLMs at Scale</a>：医学多模态视觉知识注入。</li>
        </ol>
      </div>
    </div>
    <details class="project-resources-panel">
      <summary><span>GitHub / Hugging Face 资源</span><strong>Code, models, datasets</strong></summary>
      <div class="project-stack project-resource-stack">
      <a class="project-stack-row" href="https://github.com/FreedomIntelligence/Huatuo-26M" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/Huatuo-26M</strong><span>中文医学 QA 数据集与构建资源。</span></span></a>
      <a class="project-stack-row" href="https://github.com/FreedomIntelligence/HuatuoGPT" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/HuatuoGPT</strong><span>华佗GPT 基础医学对话模型代码。</span></span></a>
      <a class="project-stack-row" href="https://github.com/FreedomIntelligence/HuatuoGPT-II" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/HuatuoGPT-II</strong><span>HuatuoGPT-II 训练和评测材料。</span></span></a>
      <a class="project-stack-row" href="https://huggingface.co/FreedomIntelligence/HuatuoGPT2-34B" target="_blank" rel="noopener"><span class="project-stack-type">HF Model</span><span class="project-stack-main"><strong>FreedomIntelligence/HuatuoGPT2-34B</strong><span>HuatuoGPT-II 34B 医学模型权重。</span></span></a>
      <a class="project-stack-row" href="https://huggingface.co/datasets/FreedomIntelligence/HuatuoGPT2-SFT-GPT4-140K" target="_blank" rel="noopener"><span class="project-stack-type">HF Dataset</span><span class="project-stack-main"><strong>HuatuoGPT2-SFT-GPT4-140K</strong><span>14 万条 GPT-4 生成医学 SFT 数据。</span></span></a>
      <a class="project-stack-row" href="https://github.com/FreedomIntelligence/HuatuoGPT-o1" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/HuatuoGPT-o1</strong><span>医学复杂推理模型和数据。</span></span></a>
      <a class="project-stack-row" href="https://huggingface.co/datasets/FreedomIntelligence/medical-o1-reasoning-SFT" target="_blank" rel="noopener"><span class="project-stack-type">HF Dataset</span><span class="project-stack-main"><strong>medical-o1-reasoning-SFT</strong><span>医学 o1 推理 SFT 数据。</span></span></a>
      <a class="project-stack-row" href="https://huggingface.co/FreedomIntelligence/HuatuoGPT-o1-8B" target="_blank" rel="noopener"><span class="project-stack-type">HF Model</span><span class="project-stack-main"><strong>FreedomIntelligence/HuatuoGPT-o1-8B</strong><span>HuatuoGPT-o1 8B 推理模型。</span></span></a>
      <a class="project-stack-row" href="https://github.com/FreedomIntelligence/HuatuoGPT-Vision" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/HuatuoGPT-Vision</strong><span>医学视觉语言模型训练代码。</span></span></a>
      <a class="project-stack-row" href="https://huggingface.co/datasets/FreedomIntelligence/PubMedVision" target="_blank" rel="noopener"><span class="project-stack-type">HF Dataset</span><span class="project-stack-main"><strong>FreedomIntelligence/PubMedVision</strong><span>医学图文视觉指令数据。</span></span></a>
      <a class="project-stack-row" href="https://huggingface.co/FreedomIntelligence/HuatuoGPT-Vision-7B" target="_blank" rel="noopener"><span class="project-stack-type">HF Model</span><span class="project-stack-main"><strong>HuatuoGPT-Vision-7B</strong><span>Qwen2-7B / LLaVA-v1.5 架构医学多模态模型。</span></span></a>
      <a class="project-stack-row" href="https://huggingface.co/FreedomIntelligence/HuatuoGPT-Vision-7B-Qwen2.5VL" target="_blank" rel="noopener"><span class="project-stack-type">HF Model</span><span class="project-stack-main"><strong>HuatuoGPT-Vision-7B-Qwen2.5VL</strong><span>基于 Qwen2.5-VL 的 HuatuoGPT-Vision 新版本。</span></span></a>
      </div>
    </details>
  </section>

  <section class="project-program-section project-theme-eval" id="medical-evaluation" data-project-tags="Medical LLMs;AI for Healthcare;Multi-modal LLMs">
    <div class="project-program-heading">
      <div class="project-eyebrow">Medical LLM evaluation</div>
      <h2>医疗大模型评测系列</h2>
      <p>
        医疗大模型不能只看聊天流畅度。这条线把评测拆成中文医学知识、多模态医学理解、可解释诊断、实时临床、医生工作流和医学教育几层，让模型在更接近临床的任务上暴露短板。
      </p>
      <div class="project-actions">
        <a class="project-action primary" href="/projects/medical-evaluation-benchmarks/">Open Medical Evaluation Benchmarks</a>
      </div>
    </div>
    <div class="project-program-layout">
      <div class="project-program-media">
        <img src="/assets/img/media-roundup-2026/cmb-overview.png" alt="CMB medical benchmark overview">
      </div>
      <div>
        <h3>相关论文整理</h3>
        <ol class="project-paper-list">
          <li><a href="https://arxiv.org/abs/2308.08833" target="_blank" rel="noopener">CMB: A Comprehensive Medical Benchmark in Chinese</a>：中文医学综合 benchmark。</li>
          <li><a href="https://arxiv.org/abs/2408.03361" target="_blank" rel="noopener">GMAI-MMBench</a>：面向通用医疗 AI 的多模态评测。</li>
          <li><a href="https://arxiv.org/abs/2407.13301" target="_blank" rel="noopener">Chain-of-Diagnosis / DxBench</a>：可解释诊断模型和真实医患对话诊断评测。</li>
          <li><a href="https://arxiv.org/abs/2602.16747" target="_blank" rel="noopener">LiveClin: A Live Clinical Benchmark without Leakage</a>：持续更新、抗泄漏的真实临床 benchmark。</li>
          <li><a href="https://arxiv.org/abs/2510.11040" target="_blank" rel="noopener">Enabling Doctor-Centric Medical AI with LLMs through Workflow-Aligned Tasks and Benchmarks</a>：DoctorFLAN / DotaBench，面向医生工作流。</li>
          <li><a href="https://arxiv.org/abs/2511.14783" target="_blank" rel="noopener">Human or LLM as Standardized Patients?</a>：EasyMED 和 SPBench，评测医学教育中的标准化病人模拟。</li>
        </ol>
      </div>
    </div>
    <details class="project-resources-panel">
      <summary><span>GitHub / Hugging Face 资源</span><strong>Code, models, datasets</strong></summary>
      <div class="project-stack project-resource-stack">
      <a class="project-stack-row" href="https://github.com/FreedomIntelligence/CMB" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/CMB</strong><span>中文医学 benchmark 代码。</span></span></a>
      <a class="project-stack-row" href="https://huggingface.co/datasets/FreedomIntelligence/CMB" target="_blank" rel="noopener"><span class="project-stack-type">HF Dataset</span><span class="project-stack-main"><strong>FreedomIntelligence/CMB</strong><span>CMB 数据集。</span></span></a>
      <a class="project-stack-row" href="https://github.com/uni-medical/GMAI-MMBench" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>uni-medical/GMAI-MMBench</strong><span>GMAI-MMBench 多模态评测代码。</span></span></a>
      <a class="project-stack-row" href="https://uni-medical.github.io/GMAI-MMBench.github.io/" target="_blank" rel="noopener"><span class="project-stack-type">Project</span><span class="project-stack-main"><strong>GMAI-MMBench project site</strong><span>榜单、任务说明和资源入口。</span></span></a>
      <a class="project-stack-row" href="https://github.com/FreedomIntelligence/Chain-of-Diagnosis" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/Chain-of-Diagnosis</strong><span>CoD、DxBench、DiagnosisGPT 统一入口。</span></span></a>
      <a class="project-stack-row" href="https://huggingface.co/datasets/FreedomIntelligence/DxBench" target="_blank" rel="noopener"><span class="project-stack-type">HF Dataset</span><span class="project-stack-main"><strong>FreedomIntelligence/DxBench</strong><span>诊断推理 benchmark 数据。</span></span></a>
      <a class="project-stack-row" href="https://github.com/AQ-MedAI/LiveClin" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>AQ-MedAI/LiveClin</strong><span>LiveClin 代码和数据入口。</span></span></a>
      <a class="project-stack-row" href="https://github.com/FreedomIntelligence/DotaGPT" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/DotaGPT</strong><span>DoctorFLAN / DotaBench 训练与评测代码。</span></span></a>
      <a class="project-stack-row" href="https://huggingface.co/datasets/FreedomIntelligence/DoctorFLAN" target="_blank" rel="noopener"><span class="project-stack-type">HF Dataset</span><span class="project-stack-main"><strong>FreedomIntelligence/DoctorFLAN</strong><span>医生工作流任务数据。</span></span></a>
      <a class="project-stack-row" href="https://huggingface.co/datasets/FreedomIntelligence/DotaBench" target="_blank" rel="noopener"><span class="project-stack-type">HF Dataset</span><span class="project-stack-main"><strong>FreedomIntelligence/DotaBench</strong><span>医生工作流多轮评测数据。</span></span></a>
      </div>
    </details>
  </section>

  <section class="project-program-section project-theme-multilingual" id="multilingual-llms" data-project-tags="Multilingual LLMs;Medical LLMs">
    <div class="project-program-heading">
      <div class="project-eyebrow">Multilingual and localized LLMs</div>
      <h2>多语言大语言模型</h2>
      <p>
        多语言主线从 Phoenix / LLMZoo 的开放多语言聊天开始，到 AceGPT 的阿拉伯语本地化，再到 Apollo / ApolloMoE 的多语言医学模型、语料和评测。核心目标是让医学和通用 AI 不只服务少数高资源语言。
      </p>
      <div class="project-actions">
        <a class="project-action primary" href="/projects/multilingual-localized-llms/">Open Multilingual Project</a>
        <a class="project-action" href="/projects/rag-instruction-data/">Open Data Infrastructure</a>
      </div>
    </div>
    <div class="project-program-layout">
      <div class="project-program-media">
        <img src="/assets/img/freedomai-2026/impact/apollo-map.jpg" alt="Apollo multilingual medical model map">
      </div>
      <div>
        <h3>相关论文整理</h3>
        <ol class="project-paper-list">
          <li><a href="https://arxiv.org/abs/2304.10453" target="_blank" rel="noopener">Phoenix: Democratizing ChatGPT across Languages</a>：早期开放多语言聊天模型。</li>
          <li><a href="https://aclanthology.org/2024.naacl-long.450/" target="_blank" rel="noopener">AceGPT, Localizing Large Language Models in Arabic</a>：阿拉伯语大模型本地化与对齐。</li>
          <li><a href="https://arxiv.org/abs/2403.03640" target="_blank" rel="noopener">Apollo: Lightweight Multilingual Medical LLMs towards Democratizing Medical AI to 6B People</a>：多语言医学模型、数据和评测。</li>
          <li><a href="https://arxiv.org/abs/2409.02615" target="_blank" rel="noopener">ApolloMoE: Efficiently Democratizing Medical LLMs for 50 Languages via a Mixture of Language Family Experts</a>：面向 50 种语言的医学 MoE 模型。</li>
        </ol>
      </div>
    </div>
    <details class="project-resources-panel">
      <summary><span>GitHub / Hugging Face 资源</span><strong>Code, models, datasets</strong></summary>
      <div class="project-stack project-resource-stack">
      <a class="project-stack-row" href="https://github.com/FreedomIntelligence/LLMZoo" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/LLMZoo</strong><span>Phoenix / LLMZoo 多语言模型资源。</span></span></a>
      <a class="project-stack-row" href="https://huggingface.co/FreedomIntelligence/phoenix-inst-chat-7b" target="_blank" rel="noopener"><span class="project-stack-type">HF Model</span><span class="project-stack-main"><strong>FreedomIntelligence/phoenix-inst-chat-7b</strong><span>Phoenix 多语言聊天模型。</span></span></a>
      <a class="project-stack-row" href="https://github.com/FreedomIntelligence/AceGPT" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/AceGPT</strong><span>阿拉伯语 LLM 本地化代码和资源。</span></span></a>
      <a class="project-stack-row" href="https://huggingface.co/FreedomIntelligence/AceGPT-7B" target="_blank" rel="noopener"><span class="project-stack-type">HF Model</span><span class="project-stack-main"><strong>FreedomIntelligence/AceGPT-7B</strong><span>AceGPT 7B 基础/对齐模型资源。</span></span></a>
      <a class="project-stack-row" href="https://huggingface.co/FreedomIntelligence/AceGPT-13B-chat" target="_blank" rel="noopener"><span class="project-stack-type">HF Model</span><span class="project-stack-main"><strong>FreedomIntelligence/AceGPT-13B-chat</strong><span>AceGPT 13B chat 模型。</span></span></a>
      <a class="project-stack-row" href="https://github.com/FreedomIntelligence/Apollo" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/Apollo</strong><span>Apollo 多语言医学模型、数据、评测代码。</span></span></a>
      <a class="project-stack-row" href="https://huggingface.co/datasets/FreedomIntelligence/ApolloCorpus" target="_blank" rel="noopener"><span class="project-stack-type">HF Dataset</span><span class="project-stack-main"><strong>FreedomIntelligence/ApolloCorpus</strong><span>多语言医学语料。</span></span></a>
      <a class="project-stack-row" href="https://huggingface.co/datasets/FreedomIntelligence/XMedBench" target="_blank" rel="noopener"><span class="project-stack-type">HF Dataset</span><span class="project-stack-main"><strong>FreedomIntelligence/XMedBench</strong><span>多语言医学评测数据。</span></span></a>
      <a class="project-stack-row" href="https://huggingface.co/FreedomIntelligence/Apollo-7B" target="_blank" rel="noopener"><span class="project-stack-type">HF Model</span><span class="project-stack-main"><strong>FreedomIntelligence/Apollo-7B</strong><span>Apollo 7B 多语言医学模型。</span></span></a>
      <a class="project-stack-row" href="https://huggingface.co/FreedomIntelligence/Apollo-72B" target="_blank" rel="noopener"><span class="project-stack-type">HF Model</span><span class="project-stack-main"><strong>FreedomIntelligence/Apollo-72B</strong><span>Apollo 72B 多语言医学模型。</span></span></a>
      <a class="project-stack-row" href="https://github.com/FreedomIntelligence/ApolloMoE" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/ApolloMoE</strong><span>面向 50 种语言的医学 MoE 模型代码。</span></span></a>
      </div>
    </details>
  </section>

  <section class="project-program-section project-theme-optimization" id="optimization-llms" data-project-tags="AI for Reasoning and Agentic RL">
    <div class="project-program-heading">
      <div class="project-eyebrow">Optimization modeling LLMs</div>
      <h2>运筹优化大模型系列</h2>
      <p>
        运筹优化主线把自然语言问题转成数学优化模型、约束、目标函数和可执行代码。ORLM 提供开放模型与 IndustryOR benchmark，CALM/STORM 进一步研究优化建模中的原生推理能力。
      </p>
      <div class="project-actions">
        <a class="project-action primary" href="/projects/reasoning-math-optimization/">Open Reasoning and Optimization</a>
      </div>
    </div>
    <div class="project-program-layout">
      <div class="project-program-media">
        <img src="/assets/img/freedomai-2026/impact/iclr-financial-ai-award.jpg" alt="Reasoning and optimization project signal">
      </div>
      <div>
        <h3>相关论文整理</h3>
        <ol class="project-paper-list">
          <li><a href="https://arxiv.org/abs/2405.17743" target="_blank" rel="noopener">ORLM: A Customizable Framework in Training Large Models for Automated Optimization Modeling</a>：OR-Instruct、ORLM 和 IndustryOR。</li>
          <li><a href="https://arxiv.org/abs/2510.04204" target="_blank" rel="noopener">CALM Before the STORM: Unlocking Native Reasoning for Optimization Modeling</a>：优化建模中的原生推理。</li>
          <li><a href="https://arxiv.org/abs/2403.02884" target="_blank" rel="noopener">MathScale: Scaling Instruction Tuning for Mathematical Reasoning</a>：数学推理 scaling 与 verifier 相关基础。</li>
          <li><a href="https://arxiv.org/abs/2506.09820" target="_blank" rel="noopener">CoRT: Code-integrated Reasoning within Thinking</a>：将代码执行接入思维链，也服务于形式化建模和计算。</li>
        </ol>
      </div>
    </div>
    <details class="project-resources-panel">
      <summary><span>GitHub / Hugging Face 资源</span><strong>Code, models, datasets</strong></summary>
      <div class="project-stack project-resource-stack">
      <a class="project-stack-row" href="https://github.com/Cardinal-Operations/ORLM" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>Cardinal-Operations/ORLM</strong><span>自动化优化建模训练框架、数据合成和 benchmark 入口。</span></span></a>
      <a class="project-stack-row" href="https://huggingface.co/CardinalOperations/ORLM-LLaMA-3-8B" target="_blank" rel="noopener"><span class="project-stack-type">HF Model</span><span class="project-stack-main"><strong>CardinalOperations/ORLM-LLaMA-3-8B</strong><span>ORLM 8B 优化建模模型。</span></span></a>
      <a class="project-stack-row" href="https://huggingface.co/datasets/CardinalOperations/OR-Instruct-Data-3K" target="_blank" rel="noopener"><span class="project-stack-type">HF Dataset</span><span class="project-stack-main"><strong>CardinalOperations/OR-Instruct-Data-3K</strong><span>优化建模指令数据。</span></span></a>
      <a class="project-stack-row" href="https://huggingface.co/datasets/CardinalOperations/IndustryOR" target="_blank" rel="noopener"><span class="project-stack-type">HF Dataset</span><span class="project-stack-main"><strong>CardinalOperations/IndustryOR</strong><span>100 个真实工业运筹问题 benchmark。</span></span></a>
      <a class="project-stack-row" href="https://github.com/tangzhy/STORM" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>tangzhy/STORM</strong><span>CALM/STORM 优化建模推理资源。</span></span></a>
      <a class="project-stack-row" href="https://github.com/FreedomIntelligence/ReasoningNLP" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>FreedomIntelligence/ReasoningNLP</strong><span>推理相关论文与资源集合。</span></span></a>
      <a class="project-stack-row" href="https://github.com/ChengpengLi1003/CoRT" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>ChengpengLi1003/CoRT</strong><span>代码集成推理资源。</span></span></a>
      </div>
    </details>
  </section>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const buttons = Array.from(document.querySelectorAll('[data-project-filter]'));
    const sections = Array.from(document.querySelectorAll('.project-program-section'));
    const empty = document.querySelector('.project-empty');

    function tagsFor(section) {
      return (section.dataset.projectTags || '')
        .split(';')
        .map(function (tag) { return tag.trim(); })
        .filter(Boolean);
    }

    function setFilter(activeTag, updateUrl) {
      let visibleCount = 0;

      sections.forEach(function (section) {
        const shouldShow = activeTag === 'all' || tagsFor(section).includes(activeTag);
        section.classList.toggle('is-hidden', !shouldShow);
        if (shouldShow) visibleCount += 1;
      });

      buttons.forEach(function (button) {
        const isActive = button.dataset.projectFilter === activeTag;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
      });

      if (empty) empty.hidden = visibleCount > 0;

      if (updateUrl) {
        const url = new URL(window.location.href);
        if (activeTag === 'all') {
          url.searchParams.delete('tag');
        } else {
          url.searchParams.set('tag', activeTag);
        }
        window.history.replaceState({}, '', url);
      }
    }

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        setFilter(button.dataset.projectFilter, true);
      });
    });

    const initialTag = new URLSearchParams(window.location.search).get('tag');
    const hasInitialTag = buttons.some(function (button) {
      return button.dataset.projectFilter === initialTag;
    });
    setFilter(hasInitialTag ? initialTag : 'all', false);
  });
</script>
