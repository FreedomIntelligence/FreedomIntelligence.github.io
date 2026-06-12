---
layout: page
title: Impact
title_zh: 影响力
permalink: /impact/
description: Industry collaborations, deployments, open-source reach, and award-winning work from FreedomAI Lab.
description_zh: FreedomAI Lab 的产业合作、真实落地、开源影响力与获奖成果。
nav: true
nav_order: 5
---

<style>
  .impact-section {
    margin-bottom: 2.2rem;
  }

  .impact-lead {
    line-height: 1.7;
    margin-bottom: 1rem;
  }

  .impact-list {
    line-height: 1.7;
  }

  .impact-metric-grid,
  .impact-gallery,
  .award-grid,
  .partner-grid {
    display: grid;
    gap: 14px;
    margin: 1rem 0 1.8rem;
  }

  .impact-metric-grid {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }

  .impact-metric {
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    padding: 14px;
    background: var(--global-bg-color);
  }

  .impact-metric strong {
    display: block;
    color: var(--global-theme-color);
    font-size: 1.35rem;
    line-height: 1.2;
  }

  .impact-metric span {
    display: block;
    margin-top: 6px;
    color: var(--global-text-color-light);
    line-height: 1.45;
  }

  .platform-grid,
  .deployment-grid {
    display: grid;
    gap: 14px;
    margin: 1rem 0 1.8rem;
  }

  .platform-grid {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }

  .deployment-grid {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }

  .platform-card,
  .deployment-card {
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    padding: 15px;
    background: var(--global-bg-color);
  }

  .platform-card h3,
  .deployment-card h3 {
    margin: 0 0 0.55rem;
    font-size: 1rem;
    line-height: 1.35;
  }

  .platform-card p,
  .deployment-card p {
    margin: 0;
    color: var(--global-text-color-light);
    line-height: 1.6;
  }

  .impact-gallery {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }

  .impact-gallery figure {
    margin: 0;
  }

  .impact-gallery img,
  .award-item img {
    width: 100%;
    border-radius: 8px;
    border: 1px solid var(--global-divider-color);
    background: #fff;
  }

  .impact-gallery img {
    aspect-ratio: 4 / 3;
    object-fit: contain;
  }

  .impact-gallery figcaption {
    margin-top: 7px;
    color: var(--global-text-color-light);
    font-size: 0.92rem;
  }

  .award-grid {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }

  .award-item {
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    padding: 14px;
    background: var(--global-bg-color);
  }

  .award-item img {
    aspect-ratio: 4 / 3;
    object-fit: contain;
    margin-bottom: 12px;
  }

  .award-year {
    color: var(--global-theme-color);
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  .award-item h3 {
    margin: 5px 0 8px;
    font-size: 1rem;
    line-height: 1.35;
  }

  .award-item p {
    margin: 0;
    color: var(--global-text-color-light);
    font-size: 0.93rem;
    line-height: 1.55;
  }

  .partner-group {
    margin-top: 1.35rem;
  }

  .partner-group h3 {
    margin: 0 0 0.85rem;
    font-size: 1.05rem;
    line-height: 1.35;
  }

  .partner-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  .partner-card {
    display: flex;
    min-height: 132px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 11px;
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    padding: 14px 12px;
    background: var(--global-bg-color);
    text-align: center;
  }

  .partner-logo-wrap {
    display: flex;
    width: 100%;
    height: 58px;
    align-items: center;
    justify-content: center;
  }

  .partner-logo {
    max-width: 118px;
    max-height: 54px;
    object-fit: contain;
  }

  .partner-name {
    color: var(--global-text-color);
    font-size: 0.94rem;
    font-weight: 600;
    line-height: 1.35;
  }
</style>

<section class="impact-section">
  <h2><span data-lang="en">Impact at a Glance</span><span data-lang="zh">影响力概览</span></h2>

  <p class="impact-lead">
    <span data-lang="en">FreedomAI turns research into deployed systems, open-source resources, industry collaborations, student startups, and recognized papers. The impact highlights below are abstracted from the Shenzhen Key Laboratory of Cross-Modal Cognitive Computing introduction, NSFC materials, and award certificates.</span>
    <span data-lang="zh">FreedomAI 将研究推进到真实系统、开源资源、产业合作、学生创业和获奖论文。下面的影响力信息来自深圳市跨模态认知计算重点实验室介绍、NSFC 材料和获奖证书的整理提炼。</span>
  </p>

  <div class="impact-metric-grid">
    <div class="impact-metric">
      <strong>11 + 186</strong>
      <span data-lang="en">public hospitals and community health centers in Longgang using HuatuoGPT triage and pre-consultation systems.</span>
      <span data-lang="zh">龙岗公立医院和社区健康中心应用 HuatuoGPT 智能分诊与预问诊系统。</span>
    </div>
    <div class="impact-metric">
      <strong>300K+</strong>
      <span data-lang="en">service visits supported by the Longgang HuatuoGPT deployment.</span>
      <span data-lang="zh">龙岗华佗 GPT 落地系统已支持的服务人次。</span>
    </div>
    <div class="impact-metric">
      <strong>520K+</strong>
      <span data-lang="en">clinical AI interactions in triage and pre-consultation workflows.</span>
      <span data-lang="zh">智能分诊与预问诊流程中的医疗 AI 交互次数。</span>
    </div>
    <div class="impact-metric">
      <strong>95.4%</strong>
      <span data-lang="en">reported triage accuracy in the Longgang public-hospital deployment.</span>
      <span data-lang="zh">龙岗公立医院部署中报告的分诊准确率。</span>
    </div>
    <div class="impact-metric">
      <strong>50</strong>
      <span data-lang="en">languages reached by Apollo multilingual medical AI.</span>
      <span data-lang="zh">Apollo 多语言医疗 AI 覆盖的语言数量。</span>
    </div>
    <div class="impact-metric">
      <strong>10K+</strong>
      <span data-lang="en">GitHub stars across FreedomIntelligence open-source projects.</span>
      <span data-lang="zh">FreedomIntelligence 开源项目累计 GitHub stars。</span>
    </div>
    <div class="impact-metric">
      <strong>1M+</strong>
      <span data-lang="en">Hugging Face model and dataset downloads across open resources.</span>
      <span data-lang="zh">开源模型与数据集在 Hugging Face 上的下载量。</span>
    </div>
    <div class="impact-metric">
      <strong>RMB 10M</strong>
      <span data-lang="en">approximate annual industry collaboration scale with partners such as Huawei and Tencent AI Lab.</span>
      <span data-lang="zh">与华为、腾讯 AI Lab 等伙伴开展的单年企业横向合作规模。</span>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2><span data-lang="en">Research Platforms</span><span data-lang="zh">科研与数据平台</span></h2>

  <p class="impact-lead">
    <span data-lang="en">The Shenzhen Key Laboratory of Cross-Modal Cognitive Computing was approved by the Shenzhen Science and Technology Innovation Bureau on January 30, 2024. Its platform layout connects compliant multimodal data sharing with perception, cognition, and generation systems.</span>
    <span data-lang="zh">深圳市跨模态认知计算重点实验室于 2024 年 1 月 30 日经深圳市科创局批准成立。实验室围绕合规多模态数据共享，以及感知、认知、生成三类智能系统平台展开建设。</span>
  </p>

  <div class="platform-grid">
    <div class="platform-card">
      <h3><span data-lang="en">Data sharing platform</span><span data-lang="zh">数据共享平台</span></h3>
      <p><span data-lang="en">A multimodal data platform for speech, language, medicine, EEG, images, and video, supporting compliant cross-border sharing and multilingual AI for Asia-Pacific languages.</span><span data-lang="zh">面向语音、语言、医学、脑电、图像和视频等多模态数据，支持跨境合规共享与亚太多语言智能系统建设。</span></p>
    </div>
    <div class="platform-card">
      <h3><span data-lang="en">Multimodal perception</span><span data-lang="zh">多模态感知平台</span></h3>
      <p><span data-lang="en">SoundWave, MELA, LongLLaVA, MotionLLM, and TCM-Omni connect audio, EEG, images, video, motion, and traditional Chinese medicine signals with language-level understanding.</span><span data-lang="zh">SoundWave、MELA、LongLLaVA、MotionLLM、TCM-Omni 等工作连接音频、脑电、图像、视频、动作和中医多模态信号。</span></p>
    </div>
    <div class="platform-card">
      <h3><span data-lang="en">Basic cognition</span><span data-lang="zh">基础认知平台</span></h3>
      <p><span data-lang="en">HuatuoGPT-o1, Video-R1, AI4Math, MMAPIS, TS-align, and FLR explore structured cognition, complex reasoning, efficient alignment, and reliable behavior.</span><span data-lang="zh">HuatuoGPT-o1、Video-R1、AI4Math、MMAPIS、TS-align、FLR 等工作面向结构化认知、复杂推理、高效对齐和可靠行为。</span></p>
    </div>
    <div class="platform-card">
      <h3><span data-lang="en">Cross-modal generation</span><span data-lang="zh">跨模态生成平台</span></h3>
      <p><span data-lang="en">MedGen, Apollo, AceGPT, BlenderLLM, Socratic user simulation, and USP support controllable generation, multilingual healthcare, CAD design, and personalized digital twins.</span><span data-lang="zh">MedGen、Apollo、AceGPT、BlenderLLM、Socratic 用户模拟和 USP 支撑可控生成、多语言医疗、CAD 设计和个性化数字孪生。</span></p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2><span data-lang="en">Worldwide Impact</span><span data-lang="zh">全球影响力</span></h2>

  <div class="impact-gallery">
    <figure>
      <img src="/assets/img/freedomai-2026/impact/huatuogpt-longgang.jpg" alt="HuatuoGPT deployment in Longgang">
      <figcaption><span data-lang="en">HuatuoGPT deployment in Longgang medical and community health settings.</span><span data-lang="zh">HuatuoGPT 已在龙岗医疗与社区健康场景中落地。</span></figcaption>
    </figure>

    <figure>
      <img src="/assets/img/freedomai-2026/impact/apollo-map.jpg" alt="Apollo multilingual medical AI map">
      <figcaption><span data-lang="en">Apollo expands multilingual medical AI to 50 languages.</span><span data-lang="zh">Apollo 将多语言医疗 AI 扩展到 50 种语言。</span></figcaption>
    </figure>

    <figure>
      <img src="/assets/img/freedomai-2026/impact/github-repos.png" alt="FreedomIntelligence GitHub repository list">
      <figcaption><span data-lang="en">FreedomIntelligence open-source repositories span medical AI, multilingual AI, multimodal AI, and agents.</span><span data-lang="zh">FreedomIntelligence 开源仓库覆盖医疗 AI、多语言 AI、多模态 AI 和智能体。</span></figcaption>
    </figure>

    <figure>
      <img src="/assets/img/freedomai-2026/impact/github-impact.jpg" alt="FreedomIntelligence model families and downloads">
      <figcaption><span data-lang="en">Open model families such as HuatuoGPT, Apollo, LongLLaVA, and AceGPT continue to serve downstream users.</span><span data-lang="zh">HuatuoGPT、Apollo、LongLLaVA、AceGPT 等开放模型系列持续服务下游用户。</span></figcaption>
    </figure>
  </div>

  <ul class="impact-list">
    <li><span data-lang="en">HuatuoGPT intelligent triage and pre-consultation systems have been applied in 11 public hospitals and 186 community health centers in Longgang, Shenzhen, serving about 5 million residents, supporting 300K+ service visits and 520K+ interactions, with reported triage accuracy of 95.4%.</span><span data-lang="zh">HuatuoGPT 智能分诊与预问诊系统已应用于深圳龙岗 11 家公立医院和 186 个社区健康中心，覆盖约 500 万居民，支持 30 万+服务人次和 52 万+交互次数，报告分诊准确率为 95.4%。</span></li>
    <li><span data-lang="en">Apollo expands medical LLMs to 50 languages, making medical AI more accessible globally.</span><span data-lang="zh">Apollo 将医学大模型扩展到 50 种语言，让医疗 AI 更容易服务全球用户。</span></li>
    <li><span data-lang="en">FreedomIntelligence has accumulated 10K+ GitHub stars and million-scale Hugging Face model/data downloads.</span><span data-lang="zh">FreedomIntelligence 已累计获得 10K+ GitHub stars，并在 Hugging Face 上达到百万级模型/数据下载量。</span></li>
    <li><span data-lang="en">The lab's medical AI and foundation-model work has been cited or covered by outlets including Nature, Financial Times, and CCTV.</span><span data-lang="zh">实验室的医疗 AI 与基础模型工作曾被 Nature、Financial Times、CCTV 等关注或报道。</span></li>
  </ul>
</section>

<section class="impact-section">
  <h2><span data-lang="en">Deployment and Incubation</span><span data-lang="zh">应用落地与产业孵化</span></h2>

  <p class="impact-lead">
    <span data-lang="en">The lab introduction highlights a deployment pipeline that moves from publishable models to hospital systems, campus services, industry projects, and student-led companies.</span>
    <span data-lang="zh">实验室介绍强调从可发表模型到医院系统、校园服务、产业项目和学生创业公司的完整落地链条。</span>
  </p>

  <div class="deployment-grid">
    <div class="deployment-card">
      <h3><span data-lang="en">Medical AI in public hospitals</span><span data-lang="zh">公立医院医疗 AI</span></h3>
      <p><span data-lang="en">HuatuoGPT completed public testing with the Shenzhen Municipal Health Commission in June 2023 and was later deployed with the National Institute of Health Data Science in Shenzhen across Longgang's public medical network.</span><span data-lang="zh">华佗 GPT 于 2023 年 6 月在深圳市卫健委完成公测，并与国家健康医疗大数据研究院（深圳）合作部署到龙岗区公立医疗网络。</span></p>
    </div>
    <div class="deployment-card">
      <h3><span data-lang="en">Education and campus AI</span><span data-lang="zh">教育与校园 AI</span></h3>
      <p><span data-lang="en">Phoenix supports campus consultation, AI customer service, and startup API usage at CUHK-Shenzhen, while virtual campus agents explore onboarding, navigation, counseling, and embodied student support.</span><span data-lang="zh">凤凰大模型支持校内咨询、AI 客服和创业团队 API 调用；虚拟校园智能体探索迎新、导航、心理辅导和具身化学生支持。</span></p>
    </div>
    <div class="deployment-card">
      <h3><span data-lang="en">Student startups</span><span data-lang="zh">学生创业</span></h3>
      <p><span data-lang="en">Incubated companies include Shuta AI, an intelligent learning platform that reached a large share of CUHK-Shenzhen undergraduates, and Freedom Artery, an open medical-agent company backed by seed funding.</span><span data-lang="zh">孵化项目包括覆盖港中深大量本科生的智能学习平台薯塔 AI，以及获得种子轮投资、面向开源医疗智能体的自由动脉科技。</span></p>
    </div>
    <div class="deployment-card">
      <h3><span data-lang="en">Industry projects</span><span data-lang="zh">产业项目</span></h3>
      <p><span data-lang="en">Collaborations with Huawei, Tencent AI Lab, and other partners span large language models, multilingual models, multimodal systems, model acceleration, inference, training, and speech AI.</span><span data-lang="zh">与华为、腾讯 AI Lab 等伙伴的合作覆盖大语言模型、多语言模型、多模态系统、模型加速、推理训练和语音大模型。</span></p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2><span data-lang="en">Awarded Papers and Recognized Work</span><span data-lang="zh">获奖论文与成果认可</span></h2>

  <p class="impact-lead">
    <span data-lang="en">Selected best-paper honors and industry recognition from the provided award certificates and NSFC materials.</span>
    <span data-lang="zh">以下为根据获奖证书和 NSFC 材料整理的代表性最佳论文与产业认可。</span>
  </p>

  <div class="award-grid">
    <article class="award-item">
      <img src="/assets/img/freedomai-2026/awards/sigir2017.jpg" alt="SIGIR 2017 Best Paper Award Honorable Mention certificate">
      <div class="award-year">SIGIR 2017</div>
      <h3><span data-lang="en">Best Paper Award Honorable Mention</span><span data-lang="zh">最佳论文荣誉提名</span></h3>
      <p><span data-lang="en">IRGAN: A Minimax Game for Unifying Generative and Discriminative Information Retrieval Models.</span><span data-lang="zh">IRGAN: A Minimax Game for Unifying Generative and Discriminative Information Retrieval Models。</span></p>
    </article>

    <article class="award-item">
      <img src="/assets/img/freedomai-2026/awards/naacl2019.jpg" alt="NAACL 2019 Best Explainable NLP Paper certificate">
      <div class="award-year">NAACL 2019</div>
      <h3><span data-lang="en">Best Explainable NLP Paper</span><span data-lang="zh">最佳可解释 NLP 论文</span></h3>
      <p><span data-lang="en">CNM: An Interpretable Complex-valued Network for Matching.</span><span data-lang="zh">CNM: An Interpretable Complex-valued Network for Matching。</span></p>
    </article>

    <article class="award-item">
      <img src="/assets/img/freedomai-2026/awards/nlpcc2022.jpg" alt="NLPCC 2022 Best Paper Award certificate">
      <div class="award-year">NLPCC 2022</div>
      <h3><span data-lang="en">Best Paper Award</span><span data-lang="zh">最佳论文奖</span></h3>
      <p><span data-lang="en">Doge Tickets: Uncovering Domain-general Language Models by Playing Lottery Tickets.</span><span data-lang="zh">Doge Tickets: Uncovering Domain-general Language Models by Playing Lottery Tickets。</span></p>
    </article>

    <article class="award-item">
      <img src="/assets/img/freedomai-2026/impact/iclr-financial-ai-award.jpg" alt="ICLR 2025 Financial AI Workshop Best Paper Award certificate">
      <div class="award-year">ICLR 2025</div>
      <h3><span data-lang="en">Financial AI Workshop Best Paper Award</span><span data-lang="zh">金融 AI Workshop 最佳论文奖</span></h3>
      <p><span data-lang="en">TwinMarket: A Scalable Behavioral and Social Simulation for Financial Markets.</span><span data-lang="zh">TwinMarket: A Scalable Behavioral and Social Simulation for Financial Markets。</span></p>
    </article>

    <article class="award-item">
      <img src="/assets/img/freedomai-2026/awards/huawei-spark.jpg" alt="Huawei Spark Award certificate">
      <div class="award-year">Huawei Spark Award</div>
      <h3><span data-lang="en">Industry Recognition for Knowledge Integration</span><span data-lang="zh">知识融合与推理方向产业认可</span></h3>
      <p><span data-lang="en">Huawei recognized a textual knowledge graph plus indexing-enhanced pretraining and inference solution for domain knowledge integration.</span><span data-lang="zh">华为火花奖认可“知识图谱文本化 + 检索增强的预训练及推理”方案在领域知识融合与推理中的价值。</span></p>
    </article>
  </div>

  <ul class="impact-list">
    <li><span data-lang="en">Additional NSFC-listed recognition includes the NeurIPS 2025 ResponsibleFM Workshop Outstanding Paper Award for work on sparse autoencoder interpretability and utility.</span><span data-lang="zh">NSFC 材料中还记录了稀疏自编码器可解释性与效用相关工作获得 NeurIPS 2025 ResponsibleFM Workshop Outstanding Paper Award。</span></li>
  </ul>
</section>

<section class="impact-section">
  <h2><span data-lang="en">Industry Collaborations</span><span data-lang="zh">产业合作</span></h2>

  <p class="impact-lead">
    <span data-lang="en">We work closely with industry partners across medical AI, multilingual AI, speech, operations research, and agentic systems.</span>
    <span data-lang="zh">我们与产业伙伴在医疗 AI、多语言 AI、语音、运筹优化和智能体系统等方向紧密合作。</span>
  </p>

  <div class="partner-group">
    <h3><span data-lang="en">Collaborative Projects</span><span data-lang="zh">合作项目</span></h3>

    <div class="partner-grid">
      <div class="partner-card">
        <div class="partner-logo-wrap"><img class="partner-logo" src="/assets/img/collaborators/nuoya.jpeg" alt="Noah's Ark Lab logo" loading="lazy"></div>
        <div class="partner-name">Noah's Ark Lab</div>
      </div>
      <div class="partner-card">
        <div class="partner-logo-wrap"><img class="partner-logo" src="/assets/img/collaborators/hauwei.jpeg" alt="Huawei logo" loading="lazy"></div>
        <div class="partner-name">Huawei</div>
      </div>
      <div class="partner-card">
        <div class="partner-logo-wrap"><img class="partner-logo" src="/assets/img/collaborators/tencent.jpeg" alt="Tencent AI Lab logo" loading="lazy"></div>
        <div class="partner-name">Tencent AI Lab</div>
      </div>
      <div class="partner-card">
        <div class="partner-logo-wrap"><img class="partner-logo" src="/assets/img/collaborators/shanshu.jpeg" alt="Cardinal Operations logo" loading="lazy"></div>
        <div class="partner-name">Cardinal Operations</div>
      </div>
      <div class="partner-card">
        <div class="partner-logo-wrap"><img class="partner-logo" src="/assets/img/collaborators/didi.jpeg" alt="Didi logo" loading="lazy"></div>
        <div class="partner-name">Didi</div>
      </div>
      <div class="partner-card">
        <div class="partner-logo-wrap"><img class="partner-logo" src="/assets/img/collaborators/minimax.jpeg" alt="MiniMax logo" loading="lazy"></div>
        <div class="partner-name">MiniMax</div>
      </div>
    </div>
  </div>

  <div class="partner-group">
    <h3><span data-lang="en">Student Internships</span><span data-lang="zh">学生实习</span></h3>

    <div class="partner-grid">
      <div class="partner-card">
        <div class="partner-logo-wrap"><img class="partner-logo" src="/assets/img/collaborators/nuoya.jpeg" alt="Noah's Ark Lab logo" loading="lazy"></div>
        <div class="partner-name">Noah's Ark Lab</div>
      </div>
      <div class="partner-card">
        <div class="partner-logo-wrap"><img class="partner-logo" src="/assets/img/collaborators/dji.svg" alt="DJI logo" loading="lazy"></div>
        <div class="partner-name">DJI</div>
      </div>
      <div class="partner-card">
        <div class="partner-logo-wrap"><img class="partner-logo" src="/assets/img/collaborators/tencent.jpeg" alt="Tencent Hunyuan logo" loading="lazy"></div>
        <div class="partner-name">Tencent Hunyuan / 腾讯混元</div>
      </div>
      <div class="partner-card">
        <div class="partner-logo-wrap"><img class="partner-logo" src="/assets/img/collaborators/microsoft.jpeg" alt="Microsoft Research Asia logo" loading="lazy"></div>
        <div class="partner-name">Microsoft Research Asia</div>
      </div>
      <div class="partner-card">
        <div class="partner-logo-wrap"><img class="partner-logo" src="/assets/img/collaborators/qwen.jpeg" alt="Qwen logo" loading="lazy"></div>
        <div class="partner-name">Qwen</div>
      </div>
      <div class="partner-card">
        <div class="partner-logo-wrap"><img class="partner-logo" src="/assets/img/collaborators/hauwei.jpeg" alt="Huawei logo" loading="lazy"></div>
        <div class="partner-name">Huawei</div>
      </div>
      <div class="partner-card">
        <div class="partner-logo-wrap"><img class="partner-logo" src="/assets/img/collaborators/tencent.jpeg" alt="Tencent AI Lab logo" loading="lazy"></div>
        <div class="partner-name">Tencent AI Lab</div>
      </div>
      <div class="partner-card">
        <div class="partner-logo-wrap"><img class="partner-logo" src="/assets/img/collaborators/didi.jpeg" alt="Didi logo" loading="lazy"></div>
        <div class="partner-name">Didi</div>
      </div>
      <div class="partner-card">
        <div class="partner-logo-wrap"><img class="partner-logo" src="/assets/img/collaborators/minimax.jpeg" alt="MiniMax logo" loading="lazy"></div>
        <div class="partner-name">MiniMax</div>
      </div>
      <div class="partner-card">
        <div class="partner-logo-wrap"><img class="partner-logo" src="/assets/img/collaborators/mayi.jpeg" alt="Ant Group logo" loading="lazy"></div>
        <div class="partner-name">Ant Group</div>
      </div>
      <div class="partner-card">
        <div class="partner-logo-wrap"><img class="partner-logo" src="/assets/img/collaborators/lixiang.jpeg" alt="Li Auto logo" loading="lazy"></div>
        <div class="partner-name">Li Auto</div>
      </div>
      <div class="partner-card">
        <div class="partner-logo-wrap"><img class="partner-logo" src="/assets/img/collaborators/oppo.jpeg" alt="OPPO logo" loading="lazy"></div>
        <div class="partner-name">OPPO</div>
      </div>
      <div class="partner-card">
        <div class="partner-logo-wrap"><img class="partner-logo" src="/assets/img/collaborators/kimi.svg" alt="Kimi logo" loading="lazy"></div>
        <div class="partner-name">Kimi</div>
      </div>
      <div class="partner-card">
        <div class="partner-logo-wrap"><img class="partner-logo" src="/assets/img/collaborators/ubiquant.svg" alt="Ubiquant logo" loading="lazy"></div>
        <div class="partner-name">Ubiquant / 九坤</div>
      </div>
    </div>
  </div>
</section>
