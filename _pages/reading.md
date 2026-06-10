---
layout: page
permalink: /projects/
title: Projects
description:
nav: true
nav_order: 2
---

<link rel="stylesheet" href="{{ '/assets/css/project-hub.css' | relative_url }}">

<div class="project-hub">
  <p class="project-hub-intro">
    FreedomAI projects are organized as research programs rather than isolated releases. Each program below bundles together the papers, GitHub repositories, Hugging Face models or datasets, benchmarks, and deployment artifacts that make the direction reproducible.
  </p>

  <div class="project-filter" aria-label="Project filters">
    <button type="button" class="is-active" data-project-filter="all">All</button>
    <button type="button" data-project-filter="Medical LLMs">Medical LLMs</button>
    <button type="button" data-project-filter="Multi-modal LLMs">Multi-modal LLMs</button>
    <button type="button" data-project-filter="Multilingual LLMs">Multilingual LLMs</button>
    <button type="button" data-project-filter="Agent">Agent</button>
    <button type="button" data-project-filter="AI for Social Science">AI for Social Science</button>
    <button type="button" data-project-filter="Speech LLMs">Speech LLMs</button>
    <button type="button" data-project-filter="AI for Reasoning and Agentic RL">Reasoning</button>
    <button type="button" data-project-filter="AI for Healthcare">AI for Healthcare</button>
    <button type="button" data-project-filter="World Models and Embodied AI">World Models</button>
    <button type="button" data-project-filter="Open Data">Open Data</button>
  </div>

  <p class="project-empty" hidden>No projects found for this tag.</p>

  <section class="project-grid" id="project-list">
    <article class="project-card project-card-featured" data-project-tags="AI for Social Science;Agent;World Models and Embodied AI">
      <a class="project-visual" href="/projects/economic-world-models/" aria-label="Economic World Models">
        <img src="/assets/img/economic-world-models/ewm-hero.png" alt="Economic World Models systems blueprint">
      </a>
      <div class="project-card-body">
        <div class="project-eyebrow">Flagship social simulation program</div>
        <h2 class="project-title"><a href="/projects/economic-world-models/">Economic World Models</a></h2>
        <div class="project-tags">
          <span class="project-tag">AI for Social Science</span>
          <span class="project-tag">Agent</span>
          <span class="project-tag">World Models and Embodied AI</span>
        </div>
        <p class="project-summary">
          A systems agenda for computable economies: economic agents, evolving institutions, policy sandboxes, sim-to-real alignment, and economic digital twins. It ties the EconWM paper, curated resource hub, and concrete market simulators into one research direction.
        </p>
        <div class="project-stack">
          <a class="project-stack-row" href="/assets/pdf/economic-world-models.pdf" target="_blank">
            <span class="project-stack-type">Paper</span>
            <span class="project-stack-main"><strong>From Economic Agents to Agentic Economies</strong><span>Blueprint for agentic economies, capability levels, and sim-to-real economic twins.</span></span>
          </a>
          <a class="project-stack-row" href="https://github.com/FreedomIntelligence/Awesome-Econ-World-Models/" target="_blank" rel="noopener">
            <span class="project-stack-type">GitHub</span>
            <span class="project-stack-main"><strong>Awesome Econ World Models</strong><span>Curated papers and resources for agentic economy research.</span></span>
          </a>
          <a class="project-stack-row" href="/projects/twinmarket-financial-simulation/">
            <span class="project-stack-type">System</span>
            <span class="project-stack-main"><strong>TwinMarket</strong><span>Financial multi-agent simulator as a concrete market sandbox.</span></span>
          </a>
        </div>
        <div class="project-actions">
          <a class="project-action primary" href="/projects/economic-world-models/">Open Project</a>
          <a class="project-action" href="https://github.com/FreedomIntelligence/Awesome-Econ-World-Models/" target="_blank" rel="noopener">Resources</a>
        </div>
      </div>
    </article>

    <article class="project-card project-card-featured" data-project-tags="Medical LLMs;AI for Healthcare;Multi-modal LLMs;Open Data">
      <a class="project-visual" href="/projects/medical-ai-ecosystem/" aria-label="HuatuoGPT Medical AI Ecosystem">
        <img src="/assets/img/media-roundup-2026/huatuogpt-overview.png" alt="HuatuoGPT medical AI ecosystem">
      </a>
      <div class="project-card-body">
        <div class="project-eyebrow">Medical model ecosystem</div>
        <h2 class="project-title"><a href="/projects/medical-ai-ecosystem/">HuatuoGPT Medical AI Ecosystem</a></h2>
        <div class="project-tags">
          <span class="project-tag">Medical LLMs</span>
          <span class="project-tag">AI for Healthcare</span>
          <span class="project-tag">Multi-modal LLMs</span>
          <span class="project-tag">Open Data</span>
        </div>
        <p class="project-summary">
          The HuatuoGPT line is a full-stack medical AI program: medical QA data, Chinese medical chat models, one-stage adaptation, complex reasoning, vision-language medical models, and real-world triage/pre-consultation deployment.
        </p>
        <div class="project-stack">
          <a class="project-stack-row" href="https://github.com/FreedomIntelligence/HuatuoGPT" target="_blank" rel="noopener">
            <span class="project-stack-type">GitHub</span>
            <span class="project-stack-main"><strong>HuatuoGPT</strong><span>Flagship open Chinese medical dialogue model line.</span></span>
          </a>
          <a class="project-stack-row" href="/projects/huatuogpt-ii/">
            <span class="project-stack-type">Model</span>
            <span class="project-stack-main"><strong>HuatuoGPT-II</strong><span>One-stage medical adaptation with 7B/34B checkpoints and SFT data.</span></span>
          </a>
          <a class="project-stack-row" href="https://github.com/FreedomIntelligence/HuatuoGPT-o1" target="_blank" rel="noopener">
            <span class="project-stack-type">Reasoning</span>
            <span class="project-stack-main"><strong>HuatuoGPT-o1</strong><span>Medical complex reasoning models and verifiable reasoning SFT data.</span></span>
          </a>
          <a class="project-stack-row" href="https://github.com/FreedomIntelligence/HuatuoGPT-Vision" target="_blank" rel="noopener">
            <span class="project-stack-type">Vision</span>
            <span class="project-stack-main"><strong>HuatuoGPT-Vision</strong><span>Medical visual knowledge and multimodal medical dialogue.</span></span>
          </a>
        </div>
        <div class="project-actions">
          <a class="project-action primary" href="/projects/medical-ai-ecosystem/">Open Project</a>
          <a class="project-action" href="https://huggingface.co/datasets/FreedomIntelligence/medical-o1-reasoning-SFT" target="_blank" rel="noopener">Reasoning Data</a>
        </div>
      </div>
    </article>

    <article class="project-card project-card-horizontal" data-project-tags="Medical LLMs;AI for Healthcare;Open Data">
      <a class="project-visual" href="/projects/huatuogpt-ii/" aria-label="HuatuoGPT-II">
        <img src="/assets/img/media-roundup-2026/huatuogpt-auto-eval.jpeg" alt="HuatuoGPT-II medical LLM evaluation">
      </a>
      <div class="project-card-body">
        <div class="project-eyebrow">Medical adaptation</div>
        <h2 class="project-title"><a href="/projects/huatuogpt-ii/">HuatuoGPT-II</a></h2>
        <div class="project-tags">
          <span class="project-tag">Medical LLMs</span>
          <span class="project-tag">AI for Healthcare</span>
          <span class="project-tag">Open Data</span>
        </div>
        <p class="project-summary">A focused project on simplifying medical LLM adaptation through a unified one-stage training format, with public checkpoints and medical SFT data.</p>
        <div class="project-stack">
          <a class="project-stack-row" href="https://github.com/FreedomIntelligence/HuatuoGPT-II" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>HuatuoGPT-II</strong><span>Training and evaluation materials.</span></span></a>
          <a class="project-stack-row" href="https://huggingface.co/FreedomIntelligence/HuatuoGPT2-34B" target="_blank" rel="noopener"><span class="project-stack-type">Model</span><span class="project-stack-main"><strong>HuatuoGPT2-34B</strong><span>Open medical model checkpoint.</span></span></a>
          <a class="project-stack-row" href="https://huggingface.co/datasets/FreedomIntelligence/HuatuoGPT2-SFT-GPT4-140K" target="_blank" rel="noopener"><span class="project-stack-type">Dataset</span><span class="project-stack-main"><strong>HuatuoGPT2-SFT-GPT4-140K</strong><span>Medical SFT data for adaptation.</span></span></a>
        </div>
        <div class="project-actions"><a class="project-action primary" href="/projects/huatuogpt-ii/">Open Project</a></div>
      </div>
    </article>

    <article class="project-card project-card-horizontal" data-project-tags="Multi-modal LLMs;World Models and Embodied AI;Open Data">
      <a class="project-visual" href="/projects/long-context-multimodal/" aria-label="LongLLaVA and MileBench">
        <img src="/assets/img/media-roundup-2026/longllava-architecture.webp" alt="LongLLaVA architecture">
      </a>
      <div class="project-card-body">
        <div class="project-eyebrow">Long-context multimodal AI</div>
        <h2 class="project-title"><a href="/projects/long-context-multimodal/">LongLLaVA and MileBench</a></h2>
        <div class="project-tags">
          <span class="project-tag">Multi-modal LLMs</span>
          <span class="project-tag">World Models and Embodied AI</span>
          <span class="project-tag">Open Data</span>
        </div>
        <p class="project-summary">A model-and-benchmark pair for many-image and video reasoning, connecting long-context architecture, multimodal data construction, and efficient evaluation.</p>
        <div class="project-stack">
          <a class="project-stack-row" href="https://github.com/FreedomIntelligence/LongLLaVA" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>LongLLaVA</strong><span>Long-context multimodal model release.</span></span></a>
          <a class="project-stack-row" href="https://huggingface.co/datasets/FreedomIntelligence/MileBench" target="_blank" rel="noopener"><span class="project-stack-type">Dataset</span><span class="project-stack-main"><strong>MileBench</strong><span>Long-context multimodal benchmark.</span></span></a>
          <a class="project-stack-row" href="https://github.com/FreedomIntelligence/TRIM" target="_blank" rel="noopener"><span class="project-stack-type">Efficiency</span><span class="project-stack-main"><strong>TRIM</strong><span>Token reduction for efficient multimodal context.</span></span></a>
        </div>
        <div class="project-actions"><a class="project-action primary" href="/projects/long-context-multimodal/">Open Project</a></div>
      </div>
    </article>

    <article class="project-card" data-project-tags="Medical LLMs;AI for Healthcare;Multi-modal LLMs;Open Data">
      <a class="project-visual" href="/projects/medical-evaluation-benchmarks/" aria-label="Medical Evaluation Benchmarks">
        <img src="/assets/img/media-roundup-2026/cmb-overview.png" alt="CMB benchmark overview">
      </a>
      <div class="project-card-body">
        <div class="project-eyebrow">Benchmark infrastructure</div>
        <h2 class="project-title"><a href="/projects/medical-evaluation-benchmarks/">Medical Evaluation Benchmarks</a></h2>
        <div class="project-tags">
          <span class="project-tag">Medical LLMs</span>
          <span class="project-tag">AI for Healthcare</span>
          <span class="project-tag">Multi-modal LLMs</span>
        </div>
        <p class="project-summary">A benchmark stack for medical knowledge, multimodal medical AI, live clinical testing, diagnostic reasoning, and doctor workflow alignment.</p>
        <div class="project-stack">
          <a class="project-stack-row" href="https://github.com/FreedomIntelligence/CMB" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>CMB</strong><span>Chinese medical benchmark code.</span></span></a>
          <a class="project-stack-row" href="https://huggingface.co/datasets/FreedomIntelligence/CMB" target="_blank" rel="noopener"><span class="project-stack-type">Dataset</span><span class="project-stack-main"><strong>CMB data</strong><span>Reusable Chinese medical benchmark data.</span></span></a>
          <a class="project-stack-row" href="https://github.com/uni-medical/GMAI-MMBench" target="_blank" rel="noopener"><span class="project-stack-type">Benchmark</span><span class="project-stack-main"><strong>GMAI-MMBench</strong><span>General medical AI multimodal evaluation.</span></span></a>
        </div>
        <div class="project-actions"><a class="project-action primary" href="/projects/medical-evaluation-benchmarks/">Open Project</a></div>
      </div>
    </article>

    <article class="project-card" data-project-tags="AI for Social Science;Agent;World Models and Embodied AI">
      <a class="project-visual" href="/projects/twinmarket-financial-simulation/" aria-label="TwinMarket Financial AI Simulation">
        <img src="/assets/img/media-roundup-2026/twinmarket-bdi.png" alt="TwinMarket behavioral finance simulation">
      </a>
      <div class="project-card-body">
        <div class="project-eyebrow">Financial agent society</div>
        <h2 class="project-title"><a href="/projects/twinmarket-financial-simulation/">TwinMarket Financial AI Simulation</a></h2>
        <div class="project-tags">
          <span class="project-tag">AI for Social Science</span>
          <span class="project-tag">Agent</span>
          <span class="project-tag">World Models and Embodied AI</span>
        </div>
        <p class="project-summary">LLM-powered virtual investors with beliefs, desires, intentions, information flow, and trading behavior for studying stylized facts and policy stress tests.</p>
        <div class="project-stack">
          <a class="project-stack-row" href="https://github.com/FreedomIntelligence/TwinMarket" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>TwinMarket</strong><span>Market simulator implementation.</span></span></a>
          <a class="project-stack-row" href="https://freedomintelligence.github.io/TwinMarket" target="_blank" rel="noopener"><span class="project-stack-type">Project</span><span class="project-stack-main"><strong>Project site</strong><span>Figures, examples, and release context.</span></span></a>
          <a class="project-stack-row" href="https://arxiv.org/abs/2502.01506" target="_blank" rel="noopener"><span class="project-stack-type">Paper</span><span class="project-stack-main"><strong>TwinMarket paper</strong><span>Behavioral finance simulation with LLM agents.</span></span></a>
        </div>
        <div class="project-actions"><a class="project-action primary" href="/projects/twinmarket-financial-simulation/">Open Project</a></div>
      </div>
    </article>

    <article class="project-card" data-project-tags="World Models and Embodied AI;AI for Healthcare;Multi-modal LLMs">
      <a class="project-visual" href="/projects/microverse-world-simulation/" aria-label="MicroVerse Micro-World Simulation">
        <img src="/assets/img/media-roundup-2026/microverse-overview.png" alt="MicroVerse overview">
      </a>
      <div class="project-card-body">
        <div class="project-eyebrow">Scientific world models</div>
        <h2 class="project-title"><a href="/projects/microverse-world-simulation/">MicroVerse Micro-World Simulation</a></h2>
        <div class="project-tags">
          <span class="project-tag">World Models and Embodied AI</span>
          <span class="project-tag">AI for Healthcare</span>
          <span class="project-tag">Multi-modal LLMs</span>
        </div>
        <p class="project-summary">Mechanism-aware world modeling for organs, cells, and subcellular processes, extending simulation beyond visible scenes into scientific micro-worlds.</p>
        <div class="project-stack">
          <a class="project-stack-row" href="https://github.com/FreedomIntelligence/MicroVerse" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>MicroVerse</strong><span>Code and project materials.</span></span></a>
          <a class="project-stack-row" href="https://arxiv.org/abs/2603.00585" target="_blank" rel="noopener"><span class="project-stack-type">Paper</span><span class="project-stack-main"><strong>Micro-world simulation</strong><span>Mechanism-aware biological world modeling.</span></span></a>
        </div>
        <div class="project-actions"><a class="project-action primary" href="/projects/microverse-world-simulation/">Open Project</a></div>
      </div>
    </article>

    <article class="project-card" data-project-tags="Multilingual LLMs;Medical LLMs;Open Data">
      <a class="project-visual" href="/projects/multilingual-localized-llms/" aria-label="Multilingual and Localized LLMs">
        <img src="/assets/img/freedomai-2026/impact/apollo-map.jpg" alt="Apollo multilingual medical model map">
      </a>
      <div class="project-card-body">
        <div class="project-eyebrow">Localized language models</div>
        <h2 class="project-title"><a href="/projects/multilingual-localized-llms/">Multilingual and Localized LLMs</a></h2>
        <div class="project-tags">
          <span class="project-tag">Multilingual LLMs</span>
          <span class="project-tag">Medical LLMs</span>
          <span class="project-tag">Open Data</span>
        </div>
        <p class="project-summary">Phoenix, AceGPT, Apollo, and ApolloMoE connect multilingual chat, Arabic localization, multilingual medical corpora, and global medical evaluation.</p>
        <div class="project-stack">
          <a class="project-stack-row" href="https://github.com/FreedomIntelligence/Apollo" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>Apollo</strong><span>Multilingual medical LLM stack.</span></span></a>
          <a class="project-stack-row" href="https://github.com/FreedomIntelligence/AceGPT" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>AceGPT</strong><span>Arabic LLM localization and alignment.</span></span></a>
          <a class="project-stack-row" href="https://huggingface.co/FreedomIntelligence/phoenix-inst-chat-7b" target="_blank" rel="noopener"><span class="project-stack-type">Model</span><span class="project-stack-main"><strong>Phoenix</strong><span>Open multilingual instruction chat model.</span></span></a>
        </div>
        <div class="project-actions"><a class="project-action primary" href="/projects/multilingual-localized-llms/">Open Project</a></div>
      </div>
    </article>

    <article class="project-card" data-project-tags="Open Data;Medical LLMs;Multilingual LLMs">
      <a class="project-visual" href="/projects/rag-instruction-data/" aria-label="RAG and Instruction Data Infrastructure">
        <img src="/assets/img/freedomai-2026/impact/github-repos.png" alt="FreedomIntelligence open-source repositories">
      </a>
      <div class="project-card-body">
        <div class="project-eyebrow">Reusable data substrate</div>
        <h2 class="project-title"><a href="/projects/rag-instruction-data/">RAG and Instruction Data Infrastructure</a></h2>
        <div class="project-tags">
          <span class="project-tag">Open Data</span>
          <span class="project-tag">Medical LLMs</span>
          <span class="project-tag">Multilingual LLMs</span>
        </div>
        <p class="project-summary">A data-and-checkpoint layer for builders: RAG-Instruct, LLMZoo, InstructionZoo, Huatuo-26M, ApolloCorpus, and domain instruction resources.</p>
        <div class="project-stack">
          <a class="project-stack-row" href="https://github.com/FreedomIntelligence/RAG-Instruct" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>RAG-Instruct</strong><span>Retrieval-augmented instruction data and training.</span></span></a>
          <a class="project-stack-row" href="https://github.com/FreedomIntelligence/InstructionZoo" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>InstructionZoo</strong><span>Instruction tuning resources.</span></span></a>
          <a class="project-stack-row" href="https://huggingface.co/datasets/FreedomIntelligence/ApolloCorpus" target="_blank" rel="noopener"><span class="project-stack-type">Dataset</span><span class="project-stack-main"><strong>ApolloCorpus</strong><span>Multilingual medical corpus.</span></span></a>
        </div>
        <div class="project-actions"><a class="project-action primary" href="/projects/rag-instruction-data/">Open Project</a></div>
      </div>
    </article>

    <article class="project-card" data-project-tags="Speech LLMs;Multi-modal LLMs;Human-agent Interaction;Open Data">
      <a class="project-visual" href="/projects/speech-audio-talking-head-ai/" aria-label="Speech, Audio, and Talking-Head AI">
        <img src="/assets/img/media-roundup-2026/socratic-pipeline.png" alt="Speech and interactive AI pipeline">
      </a>
      <div class="project-card-body">
        <div class="project-eyebrow">Speech and embodied interaction</div>
        <h2 class="project-title"><a href="/projects/speech-audio-talking-head-ai/">Speech, Audio, and Talking-Head AI</a></h2>
        <div class="project-tags">
          <span class="project-tag">Speech LLMs</span>
          <span class="project-tag">Multi-modal LLMs</span>
          <span class="project-tag">Human-agent Interaction</span>
        </div>
        <p class="project-summary">Soundwave, S2S-Arena, EchoMind, and TalkVid move beyond text into speech alignment, paralinguistic evaluation, empathetic speech, and talking-head generation.</p>
        <div class="project-stack">
          <a class="project-stack-row" href="https://github.com/FreedomIntelligence/Soundwave" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>Soundwave</strong><span>Speech-text alignment for LLMs.</span></span></a>
          <a class="project-stack-row" href="https://github.com/FreedomIntelligence/S2S-Arena" target="_blank" rel="noopener"><span class="project-stack-type">Benchmark</span><span class="project-stack-main"><strong>S2S-Arena</strong><span>Paralinguistic speech-to-speech evaluation.</span></span></a>
          <a class="project-stack-row" href="https://huggingface.co/datasets/FreedomIntelligence/TalkVid" target="_blank" rel="noopener"><span class="project-stack-type">Dataset</span><span class="project-stack-main"><strong>TalkVid</strong><span>Audio-driven talking-head synthesis data.</span></span></a>
        </div>
        <div class="project-actions"><a class="project-action primary" href="/projects/speech-audio-talking-head-ai/">Open Project</a></div>
      </div>
    </article>

    <article class="project-card" data-project-tags="AI for Reasoning and Agentic RL;Agent;Multi-modal LLMs">
      <a class="project-visual" href="/projects/reasoning-math-optimization/" aria-label="Reasoning for Math and Optimization">
        <img src="/assets/img/freedomai-2026/impact/iclr-financial-ai-award.jpg" alt="FreedomAI reasoning and optimization award signal">
      </a>
      <div class="project-card-body">
        <div class="project-eyebrow">Verifiable reasoning systems</div>
        <h2 class="project-title"><a href="/projects/reasoning-math-optimization/">Reasoning for Math and Optimization</a></h2>
        <div class="project-tags">
          <span class="project-tag">AI for Reasoning and Agentic RL</span>
          <span class="project-tag">Agent</span>
          <span class="project-tag">Multi-modal LLMs</span>
        </div>
        <p class="project-summary">A reasoning cluster around math, verifiers, optimization modeling, code-integrated thinking, critique, and video reasoning under checkable constraints.</p>
        <div class="project-stack">
          <a class="project-stack-row" href="https://github.com/FreedomIntelligence/ReasoningNLP" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>ReasoningNLP</strong><span>Reasoning resources and project hub.</span></span></a>
          <a class="project-stack-row" href="https://github.com/Cardinal-Operations/ORLM" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>ORLM</strong><span>Automated optimization modeling.</span></span></a>
          <a class="project-stack-row" href="https://github.com/tulerfeng/Video-R1" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>Video-R1</strong><span>Reinforced video reasoning in MLLMs.</span></span></a>
        </div>
        <div class="project-actions"><a class="project-action primary" href="/projects/reasoning-math-optimization/">Open Project</a></div>
      </div>
    </article>

    <article class="project-card project-card-horizontal" data-project-tags="Multi-modal LLMs;Open Data">
      <a class="project-visual" href="/projects/sharegpt-4o-image-janus-4o/" aria-label="ShareGPT-4o-Image and Janus-4o">
        <img src="/assets/img/freedomai-2026/impact/github-impact.jpg" alt="ShareGPT-4o-Image and Janus-4o">
      </a>
      <div class="project-card-body">
        <div class="project-eyebrow">Image generation alignment</div>
        <h2 class="project-title"><a href="/projects/sharegpt-4o-image-janus-4o/">ShareGPT-4o-Image and Janus-4o</a></h2>
        <div class="project-tags">
          <span class="project-tag">Multi-modal LLMs</span>
          <span class="project-tag">Open Data</span>
        </div>
        <p class="project-summary">Open GPT-4o-style image generation data and a compact unified multimodal model for text-to-image and image-conditioned generation.</p>
        <div class="project-stack">
          <a class="project-stack-row" href="https://github.com/FreedomIntelligence/ShareGPT-4o-Image" target="_blank" rel="noopener"><span class="project-stack-type">GitHub</span><span class="project-stack-main"><strong>ShareGPT-4o-Image</strong><span>Project repository and release notes.</span></span></a>
          <a class="project-stack-row" href="https://huggingface.co/datasets/FreedomIntelligence/ShareGPT-4o-Image" target="_blank" rel="noopener"><span class="project-stack-type">Dataset</span><span class="project-stack-main"><strong>ShareGPT-4o-Image</strong><span>Image generation and editing instruction data.</span></span></a>
          <a class="project-stack-row" href="https://huggingface.co/FreedomIntelligence/Janus-4o-7B" target="_blank" rel="noopener"><span class="project-stack-type">Model</span><span class="project-stack-main"><strong>Janus-4o-7B</strong><span>Unified multimodal image generation model.</span></span></a>
        </div>
        <div class="project-actions"><a class="project-action primary" href="/projects/sharegpt-4o-image-janus-4o/">Open Project</a></div>
      </div>
    </article>
  </section>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const buttons = Array.from(document.querySelectorAll('[data-project-filter]'));
    const cards = Array.from(document.querySelectorAll('[data-project-tags]'));
    const empty = document.querySelector('.project-empty');

    function tagsFor(card) {
      return (card.dataset.projectTags || '')
        .split(';')
        .map(function (tag) { return tag.trim(); })
        .filter(Boolean);
    }

    function setFilter(activeTag, updateUrl) {
      let visibleCount = 0;

      cards.forEach(function (card) {
        const shouldShow = activeTag === 'all' || tagsFor(card).includes(activeTag);
        card.classList.toggle('is-hidden', !shouldShow);
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
