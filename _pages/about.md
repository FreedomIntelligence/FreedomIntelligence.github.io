---
layout: default
title: About
permalink: /
description: Freedom AI research group at CUHK-Shenzhen, SRIBD, and Shenzhen Loop Area Institute.
---

<style>
  .home-page {
    margin-top: 0.25rem;
  }

  .home-hero {
    position: relative;
    min-height: 430px;
    overflow: hidden;
    border-radius: 8px;
    background: #121a20;
  }

  .home-hero__slide {
    position: absolute;
    inset: 0;
    opacity: 0;
    animation: home-hero-fade 48s infinite;
    transition: opacity 0.45s ease;
  }

  .home-hero--interactive .home-hero__slide {
    animation: none;
  }

  .home-hero--interactive .home-hero__slide.is-active {
    opacity: 1;
  }

  .home-hero__slide:nth-child(2) {
    animation-delay: 8s;
  }

  .home-hero__slide:nth-child(3) {
    animation-delay: 16s;
  }

  .home-hero__slide:nth-child(4) {
    animation-delay: 24s;
  }

  .home-hero__slide:nth-child(5) {
    animation-delay: 32s;
  }

  .home-hero__slide:nth-child(6) {
    animation-delay: 40s;
  }

  .home-hero__slide img {
    display: block;
    width: 100%;
    height: 100%;
    max-width: none;
    object-fit: cover;
  }

  .home-hero__slide--focus-right img {
    object-position: center right;
  }

  .home-hero__slide::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, rgba(7, 12, 16, 0.62), rgba(7, 12, 16, 0.34) 34%, rgba(7, 12, 16, 0.12) 68%, rgba(7, 12, 16, 0.04));
  }

  .home-hero__tag {
    position: absolute;
    right: 18px;
    bottom: 16px;
    z-index: 1;
    border: 1px solid rgba(255, 255, 255, 0.24);
    border-radius: 6px;
    padding: 5px 9px;
    background: rgba(7, 12, 16, 0.24);
    color: rgba(255, 255, 255, 0.76);
    font-size: 0.8rem;
    font-weight: 600;
    backdrop-filter: blur(8px);
  }

  .home-hero__content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    box-sizing: border-box;
    min-height: 430px;
    max-width: 650px;
    padding: 46px 44px 40px;
  }

  .home-hero__copy {
    max-width: 600px;
    text-shadow: 0 2px 16px rgba(0, 0, 0, 0.36);
  }

  .home-hero h1 {
    margin: 0 0 1rem;
    color: #fff;
    font-size: 3.35rem;
    line-height: 1.04;
  }

  .home-hero p {
    max-width: 560px;
    margin-bottom: 0;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.05rem;
    line-height: 1.62;
  }

  .home-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .home-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 42px;
    border: 1px solid var(--global-theme-color);
    border-radius: 6px;
    padding: 0 16px;
    color: var(--global-theme-color);
    font-weight: 600;
  }

  .home-button:hover {
    color: var(--global-hover-color);
    text-decoration: none;
    border-color: var(--global-hover-color);
  }

  .home-hero .home-button {
    border-color: rgba(255, 255, 255, 0.46);
    background: rgba(7, 12, 16, 0.18);
    color: rgba(255, 255, 255, 0.86);
    min-height: 38px;
    padding: 0 14px;
  }

  .home-hero .home-button:hover {
    color: #fff;
    border-color: #fff;
  }

  .home-hero__controls {
    position: absolute;
    top: 50%;
    right: 18px;
    left: 18px;
    z-index: 4;
    display: flex;
    justify-content: space-between;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-50%);
    transition: opacity 0.2s ease;
    visibility: hidden;
  }

  .home-hero--interactive .home-hero__controls {
    opacity: 0.36;
    visibility: visible;
  }

  .home-hero--interactive:hover .home-hero__controls,
  .home-hero--interactive:focus-within .home-hero__controls {
    opacity: 1;
  }

  .home-hero__control {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border: 1px solid rgba(255, 255, 255, 0.46);
    border-radius: 50%;
    background: rgba(7, 12, 16, 0.22);
    color: #fff;
    cursor: pointer;
    pointer-events: auto;
    transition: background 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
  }

  .home-hero__control:hover,
  .home-hero__control:focus {
    border-color: #fff;
    background: rgba(7, 12, 16, 0.58);
    color: #fff;
    outline: none;
    transform: scale(1.04);
  }

  .home-button--primary {
    border-color: var(--global-theme-color);
    background: var(--global-theme-color);
    color: #fff;
  }

  .home-button--primary:hover {
    color: #fff;
    border-color: var(--global-theme-color);
  }

  .home-section {
    margin: 2.65rem 0;
  }

  .home-section h2 {
    margin-bottom: 0.75rem;
    font-size: 1.68rem;
  }

  .home-section__intro {
    max-width: 790px;
    color: var(--global-text-color-light);
    line-height: 1.72;
  }

  @keyframes home-hero-fade {
    0%,
    14% {
      opacity: 1;
    }

    18%,
    100% {
      opacity: 0;
    }
  }

  .home-partners {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 14px;
    margin-top: 1.1rem;
  }

  .home-partners a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 62px;
    padding: 12px 16px;
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    background: var(--global-bg-color);
  }

  .home-partners img {
    max-height: 42px;
    max-width: 230px;
    object-fit: contain;
  }

  .home-partners a.home-partner--slai {
    min-height: 78px;
    padding: 4px 8px;
  }

  .home-partners a.home-partner--slai img {
    max-height: 72px;
    max-width: 250px;
  }

  .home-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
    margin-top: 1.15rem;
  }

  .home-card {
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    padding: 17px;
    background: var(--global-bg-color);
  }

  .home-card h3 {
    margin: 0 0 0.55rem;
    font-size: 1.05rem;
  }

  .home-card p {
    margin: 0;
    color: var(--global-text-color-light);
    line-height: 1.62;
  }

  .home-impact {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
    gap: 18px;
    align-items: start;
    margin-top: 1.2rem;
  }

  .home-impact__visual {
    overflow: hidden;
    border-radius: 8px;
    background: #fff;
  }

  .home-impact__visual img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 1280 / 837;
    max-width: none;
    object-fit: contain;
  }

  .home-impact__list {
    display: grid;
    gap: 12px;
  }

  .home-impact-item {
    border-left: 3px solid var(--global-theme-color);
    padding-left: 15px;
  }

  .home-impact-item h3 {
    margin: 0 0 0.35rem;
    font-size: 1.05rem;
  }

  .home-impact-item p {
    margin: 0;
    color: var(--global-text-color-light);
    line-height: 1.62;
  }

  .home-impact-summary {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
    margin-top: 1.15rem;
  }

  .home-impact-metric {
    border-top: 3px solid var(--global-theme-color);
    padding: 13px 14px 14px;
    background: var(--global-bg-color);
  }

  .home-impact-metric strong {
    display: block;
    margin-bottom: 0.25rem;
    font-size: 1.32rem;
    line-height: 1.15;
  }

  .home-impact-metric span {
    color: var(--global-text-color-light);
    font-size: 0.91rem;
    line-height: 1.45;
  }

  .home-impact-platforms,
  .home-impact-deployments {
    display: grid;
    gap: 14px;
    margin-top: 1.2rem;
  }

  .home-impact-platforms {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .home-impact-deployments {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .home-impact-platform,
  .home-impact-deployment {
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    padding: 16px;
    background: var(--global-bg-color);
  }

  .home-impact-platform h3,
  .home-impact-deployment h3 {
    margin: 0 0 0.55rem;
    font-size: 1rem;
  }

  .home-impact-platform p,
  .home-impact-deployment p {
    margin: 0;
    color: var(--global-text-color-light);
    line-height: 1.62;
  }

  .home-showcase {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
    margin-top: 1.2rem;
  }

  .home-showcase figure {
    margin: 0;
  }

  .home-showcase img {
    display: block;
    width: 100%;
    height: 210px;
    max-width: none;
    object-fit: cover;
    border-radius: 8px;
  }

  .home-showcase figcaption {
    margin-top: 8px;
    color: var(--global-text-color-light);
    font-size: 0.92rem;
    line-height: 1.45;
  }

  .home-join {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(260px, 0.8fr);
    gap: 20px;
    align-items: center;
    border-top: 1px solid var(--global-divider-color);
    padding-top: 2rem;
  }

  .home-join p,
  .home-join li {
    line-height: 1.68;
  }

  .home-join ul {
    margin: 0;
    padding-left: 1.1rem;
  }

  .home-social {
    margin: 2.35rem 0 0;
    border-top: 1px solid var(--global-divider-color);
    padding-top: 1.45rem;
  }

  .home-social .contact-icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 12px;
    font-size: 1.8rem;
  }

  .home-social .contact-icons a,
  .home-social .contact-icons button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border: 1px solid var(--global-divider-color) !important;
    border-radius: 8px;
    padding: 0;
    background: var(--global-bg-color);
  }

  .home-social .contact-icons img {
    width: 30px !important;
    height: 30px !important;
    object-fit: contain;
  }

  .home-social .contact-icons .wechat-qr img {
    width: 100% !important;
    height: auto !important;
    object-fit: contain;
  }

  .home-social .contact-note {
    margin-top: 0.75rem;
    color: var(--global-text-color-light);
  }

  @media (prefers-reduced-motion: reduce) {
    .home-hero__slide {
      animation: none;
      transition: none;
    }

    .home-hero__slide:first-child {
      opacity: 1;
    }
  }

  @media (max-width: 900px) {
    .home-grid,
    .home-impact-summary,
    .home-impact-platforms,
    .home-impact-deployments,
    .home-showcase {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .home-impact,
    .home-join {
      grid-template-columns: 1fr;
    }

  }

  @media (max-width: 640px) {
    .home-hero {
      min-height: 500px;
    }

    .home-hero__content {
      min-height: 500px;
      padding: 44px 22px;
    }

    .home-hero h1 {
      font-size: 2.45rem;
    }

    .home-grid,
    .home-impact-summary,
    .home-impact-platforms,
    .home-impact-deployments,
    .home-showcase {
      grid-template-columns: 1fr;
    }

    .home-hero__tag {
      right: 14px;
      bottom: 12px;
      font-size: 0.8rem;
    }

    .home-hero__controls {
      right: 10px;
      left: 10px;
    }

    .home-hero__control {
      width: 36px;
      height: 36px;
    }

    .home-partners a {
      width: 100%;
    }

    .home-showcase img {
      height: 230px;
    }
  }

  .home-hero [data-lang] {
    color: inherit;
  }
</style>

<div class="home-page">
  <section class="home-hero">
    <span class="home-hero__slide">
      <img src="/assets/img/freedomai-2026/life/slai-ccf-campus-night.jpg" alt="CCF community event at Shenzhen Loop Area Institute">
      <span class="home-hero__tag">CCF at SLAI</span>
    </span>
    <span class="home-hero__slide home-hero__slide--focus-right">
      <img src="/assets/img/freedomai-2026/life/basketball-day-layup.jpg" alt="Freedom AI daytime basketball activity">
      <span class="home-hero__tag">Basketball together</span>
    </span>
    <span class="home-hero__slide">
      <img src="/assets/img/freedomai-2026/life/football.png" alt="Freedom AI football on a rainy court">
      <span class="home-hero__tag">Football in the rain</span>
    </span>
    <span class="home-hero__slide">
      <img src="/assets/img/freedomai-2026/life/rooftop-night-gathering.jpg" alt="Freedom AI rooftop night gathering">
      <span class="home-hero__tag">Rooftop talks</span>
    </span>
    <span class="home-hero__slide">
      <img src="/assets/img/freedomai-2026/life/table-games-mahjong-room.jpg" alt="Freedom AI table games gathering">
      <span class="home-hero__tag">Table games</span>
    </span>
    <span class="home-hero__slide">
      <img src="/assets/img/freedomai-2026/life/bonfire.jpg" alt="Freedom AI bonfire gathering">
      <span class="home-hero__tag">Bonfire night</span>
    </span>
    <div class="home-hero__controls" aria-label="Hero carousel controls">
      <button class="home-hero__control" type="button" aria-label="Previous slide" title="Previous slide" data-home-hero-prev>
        <i class="fas fa-chevron-left" aria-hidden="true"></i>
      </button>
      <button class="home-hero__control" type="button" aria-label="Next slide" title="Next slide" data-home-hero-next>
        <i class="fas fa-chevron-right" aria-hidden="true"></i>
      </button>
    </div>
    <div class="home-hero__content">
      <div class="home-hero__copy">
        <h1>Freedom AI</h1>
        <p><span data-lang="en">free humanity from the boundaries of life through AI.</span><span data-lang="zh">用 AI 让人类突破生命的边界。</span></p>
      </div>
      <div class="home-actions">
        <a class="home-button" href="/life/"><span data-lang="en">Life</span><span data-lang="zh">生活</span></a>
        <a class="home-button" href="/blog/"><span data-lang="en">Blog</span><span data-lang="zh">博客</span></a>
      </div>
    </div>
  </section>

  <section class="home-section">
    <h2><span data-lang="en">Research Directions</span><span data-lang="zh">研究方向</span></h2>
    <p class="home-section__intro"><span data-lang="en">Our work focuses on open, capable, and deployable AI systems, with a strong emphasis on reasoning, medicine, multimodality, agents, and evaluation.</span><span data-lang="zh">我们的工作聚焦于开放、有能力、可部署的 AI 系统，重点涵盖推理、医学、多模态、智能体与评测。</span></p>
    <div class="home-grid">
      <div class="home-card">
        <h3><span data-lang="en">Large Language Models</span><span data-lang="zh">大语言模型</span></h3>
        <p><span data-lang="en">Open-source LLM infrastructure, multilingual adaptation, reasoning, optimization, and alignment.</span><span data-lang="zh">开源大模型基础设施、多语言适配、推理、优化与对齐。</span></p>
      </div>
      <div class="home-card">
        <h3><span data-lang="en">Medical AI</span><span data-lang="zh">医疗 AI</span></h3>
        <p><span data-lang="en">HuatuoGPT, Apollo, medical benchmarks, multimodal medical models, and clinical deployment.</span><span data-lang="zh">HuatuoGPT、Apollo、医学评测基准、多模态医学模型和临床部署。</span></p>
      </div>
      <div class="home-card">
        <h3><span data-lang="en">Multimodal Intelligence</span><span data-lang="zh">多模态智能</span></h3>
        <p><span data-lang="en">Vision-language, audio-language, long-context multimodal models, and large-scale evaluation.</span><span data-lang="zh">视觉语言、音频语言、长上下文多模态模型及大规模评测。</span></p>
      </div>
      <div class="home-card">
        <h3><span data-lang="en">Agents and Tools</span><span data-lang="zh">智能体与工具</span></h3>
        <p><span data-lang="en">Tool-use systems, HCI workflows, MCP applications, RAG systems, and privacy-aware agents.</span><span data-lang="zh">工具使用系统、人机交互工作流、MCP 应用、RAG 系统和隐私感知智能体。</span></p>
      </div>
      <div class="home-card">
        <h3><span data-lang="en">Evaluation and Safety</span><span data-lang="zh">评测与安全</span></h3>
        <p><span data-lang="en">Benchmarks and analysis for LLM capabilities, robustness, responsibility, and real-world readiness.</span><span data-lang="zh">大模型能力、鲁棒性、责任性与真实场景适用性的基准与分析。</span></p>
      </div>
      <div class="home-card">
        <h3><span data-lang="en">AI for Society</span><span data-lang="zh">AI 赋能社会</span></h3>
        <p><span data-lang="en">Financial AI, socio-economic simulations, education, healthcare access, and public-good applications.</span><span data-lang="zh">金融 AI、社会经济模拟、教育、医疗普及与公益应用。</span></p>
      </div>
    </div>
  </section>

  <section class="home-section">
    <h2><span data-lang="en">Impact</span><span data-lang="zh">影响力</span></h2>
    <p class="home-section__intro"><span data-lang="en">Freedom AI grows inside a larger Shenzhen ecosystem for cross-modal cognitive computing. The Shenzhen Key Laboratory of Cross-Modal Cognitive Computing, built at CUHK-Shenzhen and approved by the Shenzhen Science and Technology Innovation Bureau on January 30, 2024, connects frontier research, student training, open-source systems, and deployments in healthcare, education, industry, and public-service settings.</span><span data-lang="zh">Freedom AI 成长于深圳更大的跨模态认知计算生态系统中。深圳市跨模态认知计算重点实验室依托香港中文大学（深圳）建设，于 2024 年 1 月 30 日获深圳市科技创新局批准，连接前沿研究、学生培养、开源系统以及医疗、教育、产业和公共服务领域的落地应用。</span></p>

    <div class="home-impact-summary" aria-label="Impact highlights">
      <div class="home-impact-metric">
        <strong>300K+</strong>
        <span><span data-lang="en">HuatuoGPT service visits in Longgang public hospitals.</span><span data-lang="zh">龙岗公立医院 HuatuoGPT 服务人次。</span></span>
      </div>
      <div class="home-impact-metric">
        <strong>520K+</strong>
        <span><span data-lang="en">Clinical AI interactions across triage and pre-consultation workflows.</span><span data-lang="zh">分诊与预问诊流程中的医疗 AI 交互次数。</span></span>
      </div>
      <div class="home-impact-metric">
        <strong>95.4%</strong>
        <span><span data-lang="en">Reported triage accuracy in the Longgang deployment.</span><span data-lang="zh">龙岗部署中报告的分诊准确率。</span></span>
      </div>
    </div>

    <div class="home-impact">
      <div class="home-impact__visual">
        <img src="/assets/img/freedomai-2026/impact/huatuogpt-longgang.jpg" alt="HuatuoGPT launch ceremony in Longgang">
      </div>
      <div class="home-impact__list">
        <div class="home-impact-item">
          <h3><span data-lang="en">Healthcare at city scale</span><span data-lang="zh">城市规模的医疗服务</span></h3>
          <p><span data-lang="en">HuatuoGPT serves Longgang hospitals and community health centers, supporting city-scale triage and pre-consultation workflows.</span><span data-lang="zh">HuatuoGPT 服务龙岗医院和社区健康中心，支持城市级分诊与预问诊工作流。</span></p>
        </div>
        <div class="home-impact-item">
          <h3><span data-lang="en">Open-source ecosystem</span><span data-lang="zh">开源生态</span></h3>
          <p><span data-lang="en">FreedomIntelligence models, datasets, and benchmarks have 10K+ GitHub stars and 1M+ Hugging Face downloads.</span><span data-lang="zh">FreedomIntelligence 模型、数据集和基准已获 10K+ GitHub stars 和 100 万+次 Hugging Face 下载。</span></p>
        </div>
        <div class="home-impact-item">
          <h3><span data-lang="en">Global access</span><span data-lang="zh">全球覆盖</span></h3>
          <p><span data-lang="en">Apollo and AceGPT expand multilingual medical AI for under-served languages and local healthcare contexts.</span><span data-lang="zh">Apollo 和 AceGPT 将多语言医疗 AI 扩展到服务不足的语言和本地医疗场景。</span></p>
        </div>
        <div class="home-impact-item">
          <h3><span data-lang="en">Award-winning research</span><span data-lang="zh">获奖研究</span></h3>
          <p><span data-lang="en">Recognized at SIGIR, NAACL, NLPCC, ICLR Financial AI, and NeurIPS ResponsibleFM, with coverage from Nature and major media.</span><span data-lang="zh">在 SIGIR、NAACL、NLPCC、ICLR 金融 AI 和 NeurIPS ResponsibleFM 获奖，并获 Nature 及主流媒体报道。</span></p>
        </div>
      </div>
    </div>

    <div class="home-showcase">
      <figure>
        <img src="/assets/img/freedomai-2026/impact/github-repos.png" alt="FreedomIntelligence GitHub repositories">
        <figcaption><span data-lang="en">Open-source models, datasets, and benchmarks used by the community.</span><span data-lang="zh">社区广泛使用的开源模型、数据集和基准。</span></figcaption>
      </figure>
      <figure>
        <img src="/assets/img/freedomai-2026/impact/apollo-map.jpg" alt="Apollo multilingual medical AI map">
        <figcaption><span data-lang="en">Apollo brings multilingual medical AI to under-served languages.</span><span data-lang="zh">Apollo 将多语言医疗 AI 带到服务不足的语言。</span></figcaption>
      </figure>
      <figure>
        <img src="/assets/img/freedomai-2026/impact/iclr-financial-ai-award.jpg" alt="ICLR Financial AI best paper award">
        <figcaption><span data-lang="en">Recognition for financial AI and socio-economic system research.</span><span data-lang="zh">金融 AI 与社会经济系统研究获得认可。</span></figcaption>
      </figure>
    </div>
  </section>

  <section class="home-section">
    <h2><span data-lang="en">Where We Work</span><span data-lang="zh">我们在哪里</span></h2>
    <p class="home-section__intro"><span data-lang="en">Freedom AI is based at the School of Data Science, The Chinese University of Hong Kong, Shenzhen, SRIBD, and Shenzhen Loop Area Institute. We work with students, engineers, clinicians, and industry partners to turn frontier AI into usable systems.</span><span data-lang="zh">Freedom AI 依托香港中文大学（深圳）数据科学学院、深圳市大数据研究院和深圳河套学院。我们与学生、工程师、临床医生及产业伙伴合作，将前沿 AI 转化为可用的系统。</span></p>
    <div class="home-partners" aria-label="Partner institutions">
      <a href="https://cuhk.edu.cn/zh-hans">
        <img src="/assets/img/freedomai-2026/cuhksz-logo.png" alt="The Chinese University of Hong Kong, Shenzhen">
      </a>
      <a class="home-partner--slai" href="https://www.slai.edu.cn/en">
        <img src="/assets/img/freedomai-2026/slai-logo.png" alt="Shenzhen Loop Area Institute">
      </a>
      <a href="https://www.sribd.cn/">
        <img src="/assets/img/freedomai-2026/sribd-logo.png" alt="Shenzhen Research Institute of Big Data">
      </a>
    </div>
  </section>

  <section class="home-section home-join">
    <div>
      <h2><span data-lang="en">Join Us</span><span data-lang="zh">加入我们</span></h2>
      <p><span data-lang="en">We are recruiting research assistant professors, postdocs, PhD students, MPhil students, research assistants, visiting students, and engineers. We especially welcome students interested in the Shenzhen Loop Area Institute joint-training pathway and the Deep Eye research program.</span><span data-lang="zh">我们正在招募研究助理教授、博士后、博士生、硕士生、研究助理、访问学生和工程师。尤其欢迎有意申请深圳河套学院联培项目和深眼科研项目的同学。</span></p>
      <div class="home-actions">
        <a class="home-button home-button--primary" href="mailto:wangbenyou@cuhk.edu.cn"><span data-lang="en">Contact Us</span><span data-lang="zh">联系我们</span></a>
        <a class="home-button" href="/alumni/"><span data-lang="en">People and Alumni</span><span data-lang="zh">团队与校友</span></a>
      </div>
    </div>
    <ul>
      <li><span data-lang="en">Project-based frontier AI training.</span><span data-lang="zh">项目制前沿 AI 训练。</span></li>
      <li><span data-lang="en">Strong GPU and engineering resources.</span><span data-lang="zh">充足 GPU 与工程资源。</span></li>
      <li><span data-lang="en">Close collaboration with industry and hospitals.</span><span data-lang="zh">与产业和医院紧密合作。</span></li>
      <li><span data-lang="en">Freedom to pursue ambitious research ideas.</span><span data-lang="zh">自由追求有雄心的研究想法。</span></li>
    </ul>
  </section>

  <div class="home-social" aria-label="Freedom AI online channels">
    <div class="social">
      <div class="contact-icons">
        {% include social.html %}
      </div>
      <div class="contact-note">
        {{ site.contact_note }}
      </div>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const hero = document.querySelector('.home-hero');
    if (!hero) return;

    const slides = Array.from(hero.querySelectorAll('.home-hero__slide'));
    const previousButton = hero.querySelector('[data-home-hero-prev]');
    const nextButton = hero.querySelector('[data-home-hero-next]');
    if (slides.length < 2 || !previousButton || !nextButton) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let activeIndex = 0;
    let rotationTimer = null;

    function showSlide(index) {
      activeIndex = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        const isActive = slideIndex === activeIndex;
        slide.classList.toggle('is-active', isActive);
        slide.setAttribute('aria-hidden', String(!isActive));
      });
    }

    function startRotation() {
      window.clearInterval(rotationTimer);
      if (motionQuery.matches) return;
      rotationTimer = window.setInterval(function () {
        showSlide(activeIndex + 1);
      }, 8000);
    }

    function moveSlide(offset) {
      showSlide(activeIndex + offset);
      startRotation();
    }

    hero.classList.add('home-hero--interactive');
    showSlide(activeIndex);
    startRotation();

    previousButton.addEventListener('click', function () {
      moveSlide(-1);
    });

    nextButton.addEventListener('click', function () {
      moveSlide(1);
    });

    hero.addEventListener('mouseenter', function () {
      window.clearInterval(rotationTimer);
    });

    hero.addEventListener('mouseleave', startRotation);

    if (typeof motionQuery.addEventListener === 'function') {
      motionQuery.addEventListener('change', startRotation);
    }
  });
</script>
