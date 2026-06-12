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
    background: linear-gradient(90deg, rgba(7, 12, 16, 0.72), rgba(7, 12, 16, 0.36) 52%, rgba(7, 12, 16, 0.18));
  }

  .home-hero__tag {
    position: absolute;
    right: 18px;
    bottom: 16px;
    z-index: 1;
    border: 1px solid rgba(255, 255, 255, 0.34);
    border-radius: 6px;
    padding: 6px 10px;
    background: rgba(255, 255, 255, 0.13);
    color: rgba(255, 255, 255, 0.86);
    font-size: 0.86rem;
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
    max-width: 760px;
    padding: 46px 44px 40px;
  }

  .home-hero__copy {
    max-width: 720px;
  }

  .home-hero h1 {
    margin: 0 0 1rem;
    color: #fff;
    font-size: 3.35rem;
    line-height: 1.04;
  }

  .home-hero p {
    max-width: 700px;
    margin-bottom: 0;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.08rem;
    line-height: 1.7;
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
    border-color: rgba(255, 255, 255, 0.78);
    color: #fff;
  }

  .home-hero .home-button:hover {
    color: #fff;
    border-color: #fff;
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
    border: 0;
    background: transparent;
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

  .home-social .contact-note {
    margin-top: 0.75rem;
    color: var(--global-text-color-light);
  }

  @media (prefers-reduced-motion: reduce) {
    .home-hero__slide {
      animation: none;
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

    .home-partners a {
      width: 100%;
    }

    .home-showcase img {
      height: 230px;
    }
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
      <img src="/assets/img/freedomai-2026/life/openclaw-booth.jpg" alt="OpenClaw Open Day booth">
      <span class="home-hero__tag">OpenClaw Open Day</span>
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
      <img src="/assets/img/freedomai-2026/life/outdoor-retreat-meal-prep.jpg" alt="Freedom AI outdoor retreat meal preparation">
      <span class="home-hero__tag">Outdoor retreat</span>
    </span>
    <div class="home-hero__content">
      <div class="home-hero__copy">
        <h1>Freedom AI</h1>
        <p>FreedomAI's idea is simple: free humanity from the boundaries of life through AI.</p>
      </div>
      <div class="home-actions">
        <a class="home-button" href="/life/">Life</a>
        <a class="home-button" href="/blog/">Blog</a>
      </div>
    </div>
  </section>

  <section class="home-section">
    <h2>Research Directions</h2>
    <p class="home-section__intro">Our work focuses on open, capable, and deployable AI systems, with a strong emphasis on reasoning, medicine, multimodality, agents, and evaluation.</p>
    <div class="home-grid">
      <div class="home-card">
        <h3>Large Language Models</h3>
        <p>Open-source LLM infrastructure, multilingual adaptation, reasoning, optimization, and alignment.</p>
      </div>
      <div class="home-card">
        <h3>Medical AI</h3>
        <p>HuatuoGPT, Apollo, medical benchmarks, multimodal medical models, and clinical deployment.</p>
      </div>
      <div class="home-card">
        <h3>Multimodal Intelligence</h3>
        <p>Vision-language, audio-language, long-context multimodal models, and large-scale evaluation.</p>
      </div>
      <div class="home-card">
        <h3>Agents and Tools</h3>
        <p>Tool-use systems, HCI workflows, MCP applications, RAG systems, and privacy-aware agents.</p>
      </div>
      <div class="home-card">
        <h3>Evaluation and Safety</h3>
        <p>Benchmarks and analysis for LLM capabilities, robustness, responsibility, and real-world readiness.</p>
      </div>
      <div class="home-card">
        <h3>AI for Society</h3>
        <p>Financial AI, socio-economic simulations, education, healthcare access, and public-good applications.</p>
      </div>
    </div>
  </section>

  <section class="home-section">
    <h2>Impact</h2>
    <p class="home-section__intro">Freedom AI grows inside a larger Shenzhen ecosystem for cross-modal cognitive computing. The Shenzhen Key Laboratory of Cross-Modal Cognitive Computing, built at CUHK-Shenzhen and approved by the Shenzhen Science and Technology Innovation Bureau on January 30, 2024, connects frontier research, student training, open-source systems, and deployments in healthcare, education, industry, and public-service settings.</p>

    <div class="home-impact-summary" aria-label="Impact highlights">
      <div class="home-impact-metric">
        <strong>300K+</strong>
        <span>HuatuoGPT service visits in Longgang public hospitals.</span>
      </div>
      <div class="home-impact-metric">
        <strong>520K+</strong>
        <span>Clinical AI interactions across triage and pre-consultation workflows.</span>
      </div>
      <div class="home-impact-metric">
        <strong>95.4%</strong>
        <span>Reported triage accuracy in the Longgang deployment.</span>
      </div>
    </div>

    <div class="home-impact">
      <div class="home-impact__visual">
        <img src="/assets/img/freedomai-2026/impact/huatuogpt-longgang.jpg" alt="HuatuoGPT launch ceremony in Longgang">
      </div>
      <div class="home-impact__list">
        <div class="home-impact-item">
          <h3>Healthcare at city scale</h3>
          <p>HuatuoGPT has been deployed across 11 Longgang public hospitals and 186 community health centers, supporting the first district-wide multi-hospital LLM deployment and joint operation in China.</p>
        </div>
        <div class="home-impact-item">
          <h3>Open-source ecosystem</h3>
          <p>FreedomIntelligence models, datasets, benchmarks, and toolkits have received 10K+ GitHub stars and 1M+ Hugging Face downloads, giving researchers practical starting points for medical AI, multilingual AI, and multimodal reasoning.</p>
        </div>
        <div class="home-impact-item">
          <h3>Global access</h3>
          <p>Apollo and AceGPT push medical and multilingual AI toward broader global access, including under-served languages and culturally aligned language systems.</p>
        </div>
        <div class="home-impact-item">
          <h3>Award-winning research</h3>
          <p>Our work has received recognitions at SIGIR, NAACL, NLPCC, ICLR Financial AI, and NeurIPS ResponsibleFM, and has been covered by Nature, Financial Times, Global Times, and major Shenzhen media outlets.</p>
        </div>
      </div>
    </div>

    <div class="home-impact-platforms" aria-label="Research and data platforms">
      <div class="home-impact-platform">
        <h3>Data sharing platform</h3>
        <p>A multimodal data platform for speech, language, medicine, EEG, images, and video, supporting compliant cross-border data sharing and multilingual intelligent systems for the Asia-Pacific region.</p>
      </div>
      <div class="home-impact-platform">
        <h3>Multimodal perception</h3>
        <p>Models such as SoundWave, MELA, LongLLaVA, MotionLLM, and TCM-Omni connect audio, EEG, vision, motion, and traditional Chinese medicine signals with language-level reasoning.</p>
      </div>
      <div class="home-impact-platform">
        <h3>Basic cognition</h3>
        <p>HuatuoGPT-o1, Video-R1, AI4Math, MMAPIS, TS-align, and FLR explore structured cognition, complex reasoning, efficient alignment, and reliable model behavior.</p>
      </div>
      <div class="home-impact-platform">
        <h3>Cross-modal generation</h3>
        <p>MedGen, Apollo, AceGPT, BlenderLLM, Socratic user simulation, and USP extend AI systems toward controllable generation, multilingual healthcare, CAD design, and personalized digital twins.</p>
      </div>
    </div>

    <div class="home-impact-deployments" aria-label="Deployment examples">
      <div class="home-impact-deployment">
        <h3>Medical AI deployment</h3>
        <p>HuatuoGPT was publicly tested by the Shenzhen Municipal Health Commission in June 2023 and later deployed with the National Institute of Health Data Science in Shenzhen to serve Longgang's 5 million residents.</p>
      </div>
      <div class="home-impact-deployment">
        <h3>Education and campus AI</h3>
        <p>Phoenix supports campus consultation, AI customer service, and student entrepreneurship at CUHK-Shenzhen, while virtual campus agents explore embodied guidance, counseling, and onboarding.</p>
      </div>
      <div class="home-impact-deployment">
        <h3>Student entrepreneurship</h3>
        <p>Incubated projects include Shuta AI, an intelligent learning platform used by a large share of CUHK-Shenzhen undergraduates, and Freedom Artery, an open medical-agent company backed by seed funding.</p>
      </div>
    </div>

    <div class="home-showcase">
      <figure>
        <img src="/assets/img/freedomai-2026/impact/github-repos.png" alt="FreedomIntelligence GitHub repositories">
        <figcaption>Open-source models, datasets, and benchmarks used by the community.</figcaption>
      </figure>
      <figure>
        <img src="/assets/img/freedomai-2026/impact/apollo-map.jpg" alt="Apollo multilingual medical AI map">
        <figcaption>Apollo brings multilingual medical AI to under-served languages.</figcaption>
      </figure>
      <figure>
        <img src="/assets/img/freedomai-2026/impact/iclr-financial-ai-award.jpg" alt="ICLR Financial AI best paper award">
        <figcaption>Recognition for financial AI and socio-economic system research.</figcaption>
      </figure>
    </div>
  </section>

  <section class="home-section">
    <h2>Where We Work</h2>
    <p class="home-section__intro">Freedom AI is based at the School of Data Science, The Chinese University of Hong Kong, Shenzhen, SRIBD, and Shenzhen Loop Area Institute. We work with students, engineers, clinicians, and industry partners to turn frontier AI into usable systems.</p>
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
      <h2>Join Us</h2>
      <p>We are recruiting research assistant professors, postdocs, PhD students, MPhil students, research assistants, visiting students, and engineers. We especially welcome students interested in the Shenzhen Loop Area Institute joint-training pathway and the Deep Eye research program.</p>
      <div class="home-actions">
        <a class="home-button home-button--primary" href="mailto:wangbenyou@cuhk.edu.cn">Contact Us</a>
        <a class="home-button" href="/alumni/">People and Alumni</a>
      </div>
    </div>
    <ul>
      <li>Project-based frontier AI training.</li>
      <li>Strong GPU and engineering resources.</li>
      <li>Close collaboration with industry and hospitals.</li>
      <li>Freedom to pursue ambitious research ideas.</li>
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
