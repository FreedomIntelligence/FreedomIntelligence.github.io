---
layout: page
title: Economic World Models
title_zh: 经济世界模型
direction: ai-applications
description: Building AI-system blueprints for agentic economies, policy sandboxes, and self-correcting economic twins.
description_zh: 面向智能体经济、政策沙盒与可自我校正的经济孪生体，构建 AI 系统蓝图。
img: assets/img/economic-world-models/ewm-hero.png
importance: 0
category: work
github: https://github.com/FreedomIntelligence/Awesome-Econ-World-Models/
---

<style>
  .ewm-project {
    /* Monochrome like the rest of the site; tokens from assets/css/site.css. */
    --ewm-ink: var(--rx-ink);
    --ewm-muted: var(--rx-muted);
    --ewm-line: var(--rx-line);
    --ewm-soft: var(--rx-soft);
    --ewm-teal: var(--rx-ink);
    --ewm-blue: var(--rx-line-strong);
    --ewm-amber: var(--rx-line-strong);
    color: var(--ewm-ink);
  }

  .ewm-project a {
    color: var(--ewm-ink);
    text-decoration: underline;
    text-decoration-color: var(--rx-line-strong);
    text-underline-offset: 3px;
  }

  .ewm-project a:hover {
    color: var(--ewm-ink);
    text-decoration-color: var(--ewm-ink);
  }

  .ewm-kicker {
    color: var(--rx-faint);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0;
    margin-bottom: 0.45rem;
    text-transform: uppercase;
  }

  .ewm-tags,
  .ewm-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0.9rem 0 1.35rem;
  }

  .ewm-tag {
    border: 1px solid var(--global-divider-color, var(--ewm-line));
    border-radius: 999px;
    color: var(--global-text-color-light, var(--ewm-muted));
    display: inline-flex;
    font-size: 0.74rem;
    line-height: 1.2;
    padding: 0.18rem 0.5rem;
  }

  .ewm-action {
    border: 1px solid var(--ewm-line);
    border-radius: 999px;
    color: var(--ewm-ink);
    display: inline-flex;
    font-size: 0.82rem;
    font-weight: 600;
    line-height: 1;
    padding: 0.48rem 0.72rem;
  }

  .ewm-project a.ewm-action {
    background: var(--ewm-ink);
    border-color: var(--ewm-ink);
    color: var(--global-bg-color);
    text-decoration: none;
  }

  .ewm-project a.ewm-action.secondary {
    background: transparent;
    border-color: var(--rx-line-strong);
    color: var(--ewm-ink);
  }

  .ewm-team-strip {
    border-bottom: 1px solid var(--ewm-line);
    border-top: 1px solid var(--ewm-line);
    display: grid;
    gap: 0.45rem;
    margin: 1rem 0 1.5rem;
    padding: 1rem 0;
  }

  .ewm-label {
    color: var(--ewm-muted);
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .ewm-team-names {
    font-size: 0.98rem;
    line-height: 1.65;
  }

  .ewm-hero-image,
  .ewm-figure {
    background: #fff;
    border: 1px solid var(--ewm-line);
    border-radius: 8px;
    margin: 1.5rem 0;
    overflow: hidden;
  }

  .ewm-hero-image img,
  .ewm-figure img {
    display: block;
    height: auto;
    width: 100%;
  }

  .ewm-lede {
    color: var(--rx-ink);
    font-size: 1.04rem;
    line-height: 1.72;
    margin: 1.4rem 0;
  }

  .ewm-section {
    margin-top: 2.2rem;
  }

  .ewm-section h2 {
    font-size: 1.35rem;
    font-weight: 700;
    margin-bottom: 0.85rem;
  }

  .ewm-grid {
    display: grid;
    gap: 0.9rem;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    margin-top: 1rem;
  }

  .ewm-card {
    border: 1px solid var(--ewm-line);
    border-radius: 8px;
    padding: 1rem;
  }

  .ewm-card strong {
    display: block;
    margin-bottom: 0.45rem;
  }

  .ewm-card p {
    color: var(--ewm-muted);
    font-size: 0.9rem;
    line-height: 1.55;
    margin: 0;
  }

  .ewm-author-grid {
    display: grid;
    gap: 0.85rem;
    grid-template-columns: repeat(auto-fit, minmax(132px, 1fr));
    margin-top: 1rem;
  }

  .ewm-author {
    border: 1px solid var(--ewm-line);
    border-radius: 8px;
    overflow: hidden;
    background: #fff;
  }

  .ewm-author img {
    aspect-ratio: 1 / 1;
    display: block;
    object-fit: cover;
    width: 100%;
  }

  .ewm-author-body {
    display: block;
    padding: 0.75rem;
  }

  .ewm-author-name {
    color: var(--ewm-ink);
    display: block;
    font-size: 0.92rem;
    font-weight: 700;
    line-height: 1.25;
  }

  .ewm-author-role {
    color: var(--ewm-muted);
    display: block;
    font-size: 0.76rem;
    line-height: 1.35;
    margin-top: 0.28rem;
  }

  .ewm-callout {
    background: var(--ewm-soft);
    border-left: 4px solid var(--ewm-teal);
    border-radius: 8px;
    color: var(--rx-ink);
    font-size: 0.98rem;
    line-height: 1.65;
    margin: 1.6rem 0;
    padding: 1rem 1.1rem;
  }

  .ewm-featured {
    display: grid;
    gap: 0.9rem;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  }

  .ewm-resource {
    border-top: 3px solid var(--ewm-blue);
  }

  .ewm-resource:nth-child(2) {
    border-top-color: var(--ewm-teal);
  }

  .ewm-resource:nth-child(3) {
    border-top-color: var(--ewm-amber);
  }

  .ewm-publications {
    display: grid;
    gap: 0.9rem;
  }

  .ewm-publication {
    border-left: 3px solid var(--ewm-teal);
  }

  .ewm-publication p {
    margin-bottom: 0.55rem;
  }

  .ewm-publication a {
    font-size: 0.82rem;
    font-weight: 700;
  }
</style>

<div class="ewm-project">

<div data-lang="en">

<div class="ewm-kicker">Project</div>

<div class="ewm-tags">
  <span class="ewm-tag">AI agents</span>
  <span class="ewm-tag">Economic world models</span>
  <span class="ewm-tag">Agentic economies</span>
  <span class="ewm-tag">Policy simulation</span>
  <span class="ewm-tag">Sim-to-real twins</span>
</div>

<div class="ewm-team-strip">
  <div class="ewm-label">Research team</div>
  <div class="ewm-team-names">
    <a href="https://hanjiale.github.io/" target="_blank" rel="noopener">Jiale Han</a>,
    Xiang Li,
    Jing Qian,
    Wenyuan Gu,
    <a href="https://myweb.cuhk.edu.cn/gaopin" target="_blank" rel="noopener">Pin Gao</a>,
    <a href="https://www.hkubs.hku.hk/people/ye-luo/" target="_blank" rel="noopener">Ye Luo</a>,
    <a href="https://polysz.cuhk.edu.cn/en/content/10883" target="_blank" rel="noopener">Hongyuan Zha</a>,
    <a href="https://www.ntu.edu.sg/computing/research/institutes-centres/grail/our-people" target="_blank" rel="noopener">Dacheng Tao</a>,
    <a href="https://wabyking.github.io/old.html" target="_blank" rel="noopener">Benyou Wang</a>,
    <a href="https://www.linwilliamcong.com/about" target="_blank" rel="noopener">Lin William Cong</a>
  </div>
</div>

<div class="ewm-actions">
  <a class="ewm-action" href="https://github.com/FreedomIntelligence/Awesome-Econ-World-Models/" target="_blank" rel="noopener">Resources</a>
  <a class="ewm-action secondary" href="{{ '/assets/pdf/economic-world-models.pdf' | relative_url }}" target="_blank" rel="noopener">Paper</a>
  <a class="ewm-action secondary" href="{{ '/projects/' | relative_url }}">All Projects</a>
</div>

<div class="ewm-hero-image">
  <img src="{{ '/assets/img/economic-world-models/ewm-hero.png' | relative_url }}" alt="Economic World Models compare physical-world transitions with agent-generated economic-world transitions">
</div>

<p class="ewm-lede">
Economic decisions are usually made in the real world first and evaluated afterward. Economic World Models invert that workflow: they ask how we can build computable economies where heterogeneous agents observe, reason, act, interact, adapt, and co-evolve with markets and institutions before policies, strategies, or AI agents are deployed at scale.
</p>

<p>
The project develops an implementation-oriented systems blueprint for EconWM systems. It connects economic discipline with AI-system design, treating an economy as a generative engine whose state transitions are produced from inside the modeled world. Agents form beliefs, choose actions, alter the aggregate state, and then respond to the world they helped create.
</p>

<div class="ewm-callout">
  The central goal is to make economic worlds buildable, testable, and alignable: useful as policy sandboxes for human decision-makers, training environments for economic agents, planning engines for interventions, and safety testbeds for emergent risks such as manipulation, collusion, instability, and cascading failure.
</div>

<section class="ewm-section">
  <h2>What The Project Builds</h2>
  <div class="ewm-grid">
    <div class="ewm-card">
      <strong>Agentic economic sandboxes</strong>
      <p>Simulation environments where households, firms, banks, investors, regulators, and AI agents can interact under explicit objectives, constraints, information, and rules.</p>
    </div>
    <div class="ewm-card">
      <strong>A six-level capability ladder</strong>
      <p>A taxonomy from fixed rule-based agent worlds to adaptive agents, LLM-based autonomous agents, self-evolving agents, evolving institutions, and sim-to-real economic twins.</p>
    </div>
    <div class="ewm-card">
      <strong>Alignment and evaluation loops</strong>
      <p>Mechanisms for comparing simulated outcomes with real economic evidence, diagnosing deviations, and correcting agents, mechanisms, and transition dynamics over time.</p>
    </div>
  </div>
  <div class="ewm-figure">
    <img src="{{ '/assets/img/economic-world-models/econwm-capability-ladder.png' | relative_url }}" alt="Six capability levels of Economic World Model systems">
  </div>
</section>

<section class="ewm-section">
  <h2>Systems Blueprint</h2>
  <p>
The proposed EconWM architecture has four connected layers: economic agents, economic environments, agent-environment co-evolution, and real-world alignment. This makes the project more than a survey of AI agents in economics: it is a build plan for economic digital twins that can reason, simulate, learn, and stay empirically grounded.
  </p>
  <div class="ewm-figure">
    <img src="{{ '/assets/img/economic-world-models/econwm-architecture.png' | relative_url }}" alt="Core components of an Economic World Model">
  </div>
</section>

<section class="ewm-section">
  <h2>Research Team</h2>
  <p>
The work brings together researchers across Shenzhen Loop Area Institute, CUHK-Shenzhen School of Data Science, the University of Hong Kong, and Nanyang Technological University.
  </p>
  <div class="ewm-author-grid">
    <a class="ewm-author" href="https://hanjiale.github.io/" target="_blank" rel="noopener">
      <img src="{{ '/assets/img/economic-world-models/jiale-han.jpg' | relative_url }}" alt="Jiale Han">
      <span class="ewm-author-body"><span class="ewm-author-name">Jiale Han</span><span class="ewm-author-role">Shenzhen Loop Area Institute</span></span>
    </a>
    <div class="ewm-author">
      <img src="{{ '/assets/img/economic-world-models/xiang-li.jpg' | relative_url }}" alt="Xiang Li">
      <span class="ewm-author-body"><span class="ewm-author-name">Xiang Li</span><span class="ewm-author-role">CUHK-Shenzhen School of Data Science</span></span>
    </div>
    <div class="ewm-author">
      <img src="{{ '/assets/img/economic-world-models/jing-qian.jpg' | relative_url }}" alt="Jing Qian">
      <span class="ewm-author-body"><span class="ewm-author-name">Jing Qian</span><span class="ewm-author-role">CUHK-Shenzhen School of Data Science</span></span>
    </div>
    <div class="ewm-author">
      <img src="{{ '/assets/img/economic-world-models/wenyuan-gu.jpg' | relative_url }}" alt="Wenyuan Gu">
      <span class="ewm-author-body"><span class="ewm-author-name">Wenyuan Gu</span><span class="ewm-author-role">CUHK-Shenzhen School of Data Science</span></span>
    </div>
    <a class="ewm-author" href="https://myweb.cuhk.edu.cn/gaopin" target="_blank" rel="noopener">
      <img src="{{ '/assets/img/economic-world-models/pin-gao.jpg' | relative_url }}" alt="Pin Gao">
      <span class="ewm-author-body"><span class="ewm-author-name">Pin Gao</span><span class="ewm-author-role">CUHK-Shenzhen School of Data Science</span></span>
    </a>
    <a class="ewm-author" href="https://www.hkubs.hku.hk/people/ye-luo/" target="_blank" rel="noopener">
      <img src="{{ '/assets/img/economic-world-models/ye-luo.jpg' | relative_url }}" alt="Ye Luo">
      <span class="ewm-author-body"><span class="ewm-author-name">Ye Luo</span><span class="ewm-author-role">Shenzhen Loop Area Institute / HKU</span></span>
    </a>
    <a class="ewm-author" href="https://polysz.cuhk.edu.cn/en/content/10883" target="_blank" rel="noopener">
      <img src="{{ '/assets/img/economic-world-models/hongyuan-zha.jpg' | relative_url }}" alt="Hongyuan Zha">
      <span class="ewm-author-body"><span class="ewm-author-name">Hongyuan Zha</span><span class="ewm-author-role">CUHK-Shenzhen School of Data Science</span></span>
    </a>
    <a class="ewm-author" href="https://www.ntu.edu.sg/computing/research/institutes-centres/grail/our-people" target="_blank" rel="noopener">
      <img src="{{ '/assets/img/economic-world-models/dacheng-tao.jpg' | relative_url }}" alt="Dacheng Tao">
      <span class="ewm-author-body"><span class="ewm-author-name">Dacheng Tao</span><span class="ewm-author-role">Nanyang Technological University</span></span>
    </a>
    <a class="ewm-author" href="https://wabyking.github.io/old.html" target="_blank" rel="noopener">
      <img src="{{ '/assets/img/economic-world-models/benyou-wang.jpg' | relative_url }}" alt="Benyou Wang">
      <span class="ewm-author-body"><span class="ewm-author-name">Benyou Wang</span><span class="ewm-author-role">SLAI / CUHK-Shenzhen SDS</span></span>
    </a>
    <a class="ewm-author" href="https://www.linwilliamcong.com/about" target="_blank" rel="noopener">
      <img src="{{ '/assets/img/economic-world-models/lin-william-cong.jpg' | relative_url }}" alt="Lin William Cong">
      <span class="ewm-author-body"><span class="ewm-author-name">Lin William Cong</span><span class="ewm-author-role">SLAI / Nanyang Technological University</span></span>
    </a>
  </div>
</section>

<section class="ewm-section">
  <h2>Selected Publications</h2>
  <div class="ewm-publications">
    <article class="ewm-card ewm-publication">
      <strong>From Economic Agents to Agentic Economies: A Systems Blueprint for Economic World Models</strong>
      <p>Jiale Han, Xiang Li, Jing Qian, Wenyuan Gu, Pin Gao, Ye Luo, Hongyuan Zha, Dacheng Tao, Benyou Wang, and Lin William Cong. Working Paper.</p>
      <a href="{{ '/assets/pdf/economic-world-models.pdf' | relative_url }}" target="_blank" rel="noopener">Paper</a>
    </article>
    <article class="ewm-card ewm-publication">
      <strong>TwinMarket: A Scalable Behavioral and Social Simulation for Financial Markets</strong>
      <p>Yuzhe Yang, Yifei Zhang, Minghao Wu, Kaidi Zhang, Yunmiao Zhang, Honghai Yu, Yan Hu, and Benyou Wang. NeurIPS 2025; Best Paper, ICLR 2025 Financial AI Workshop.</p>
      <a href="https://proceedings.neurips.cc/paper_files/paper/2025/hash/5bf234ecf83cd77bc5b77a24ba9338b0-Abstract-Conference.html" target="_blank" rel="noopener">Paper</a>
    </article>
    <article class="ewm-card ewm-publication">
      <strong>UCFE: A User-Centric Financial Expertise Benchmark for Large Language Models</strong>
      <p>Yuzhe Yang, Yifei Zhang, Yan Hu, Yilin Guo, Ruoli Gan, Yueru He, Mingcong Lei, Xiao Zhang, Haining Wang, Qianqian Xie, Jimin Huang, Honghai Yu, and Benyou Wang. Findings of NAACL 2025.</p>
      <a href="https://aclanthology.org/2025.findings-naacl.300/" target="_blank" rel="noopener">Paper</a>
    </article>
    <article class="ewm-card ewm-publication">
      <strong>FinBen: A Holistic Financial Benchmark for Large Language Models</strong>
      <p>Qianqian Xie, Weiguang Han, Zhengyu Chen, Ruoyu Xiang, Xiao Zhang, Yueru He, Mengxi Xiao, Dong Li, Yongfu Dai, Duanyu Feng, Yijing Xu, Haoqiang Kang, Ziyan Kuang, Chenhan Yuan, Kailai Yang, Zheheng Luo, Tianlin Zhang, Zhiwei Liu, Guojun Xiong, Zhiyang Deng, Yuechen Jiang, Zhiyuan Yao, Haohang Li, Yangyang Yu, Gang Hu, Huang Jiajia, Xiaoyang Liu, Alejandro Lopez-Lira, Benyou Wang, Yanzhao Lai, Hao Wang, Min Peng, Sophia Ananiadou, and Jimin Huang.</p>
      <a href="https://arxiv.org/abs/2402.12659" target="_blank" rel="noopener">Paper</a>
    </article>
    <article class="ewm-card ewm-publication">
      <strong>Open-FinLLMs: Open Multimodal Large Language Models for Financial Applications</strong>
      <p>Jimin Huang, Mengxi Xiao, Dong Li, Zihao Jiang, Yuzhe Yang, Yifei Zhang, Lingfei Qian, Yan Wang, Xueqing Peng, Yang Ren, Ruoyu Xiang, Zhengyu Chen, Xiao Zhang, Yueru He, Weiguang Han, Shunian Chen, Lihang Shen, Daniel Kim, Yangyang Yu, Yupeng Cao, Zhiyang Deng, Haohang Li, Duanyu Feng, Yongfu Dai, VijayaSai Somasundaram, Peng Lu, Guojun Xiong, Zhiwei Liu, Zheheng Luo, Zhiyuan Yao, Ruey-Ling Weng, Meikang Qiu, Kaleb E Smith, Honghai Yu, Yanzhao Lai, Min Peng, Jian-Yun Nie, Jordan W Suchow, Xiao-Yang Liu, Benyou Wang, Alejandro Lopez-Lira, Qianqian Xie, Sophia Ananiadou, and Junichi Tsujii.</p>
      <a href="https://arxiv.org/abs/2408.11878" target="_blank" rel="noopener">Paper</a>
    </article>
    <article class="ewm-card ewm-publication">
      <strong>No Language Is an Island: Unifying Chinese and English in Financial Large Language Models, Instruction Data, and Benchmarks</strong>
      <p>Gang Hu, Ke Qin, Chenhan Yuan, Min Peng, Alejandro Lopez-Lira, Benyou Wang, Sophia Ananiadou, Jimin Huang, and Qianqian Xie.</p>
      <a href="https://arxiv.org/abs/2403.06249" target="_blank" rel="noopener">Paper</a>
    </article>
  </div>
</section>

<section class="ewm-section">
  <h2>From Papers to Systems</h2>
  <p>
The Economic World Models page is the umbrella. Under it, TwinMarket provides a concrete financial market sandbox, MicroVerse explores scientific micro-world simulation, and the curated Awesome Econ World Models repository keeps the paper trail organized. Together they turn the idea of "agents in an environment" into a program about evolving worlds: social worlds, market worlds, biological worlds, and eventually policy-facing digital twins.
  </p>
  <div class="ewm-featured">
    <a class="ewm-card ewm-resource" href="/projects/twinmarket-financial-simulation/">
      <strong>TwinMarket</strong>
      <p>Financial agent society where LLM investors create market-level behavior from individual beliefs, desires, intentions, and information flow.</p>
    </a>
    <a class="ewm-card ewm-resource" href="/projects/microverse-world-simulation/">
      <strong>MicroVerse</strong>
      <p>Scientific micro-world simulation for biological processes where hidden mechanisms and state transitions matter as much as visual appearance.</p>
    </a>
    <a class="ewm-card ewm-resource" href="https://github.com/FreedomIntelligence/Awesome-Econ-World-Models/" target="_blank" rel="noopener">
      <strong>Awesome Econ World Models</strong>
      <p>Living bibliography and implementation map for economic agents, agentic economies, institutional evolution, and sim-to-real alignment.</p>
    </a>
  </div>
</section>

<div class="ewm-actions">
  <a class="ewm-action secondary" href="{{ '/projects/' | relative_url }}">Back to Projects</a>
</div>

</div>

<div data-lang="zh">

<div class="ewm-kicker">项目</div>

<div class="ewm-tags">
  <span class="ewm-tag">AI 智能体</span>
  <span class="ewm-tag">经济世界模型</span>
  <span class="ewm-tag">智能体经济</span>
  <span class="ewm-tag">政策模拟</span>
  <span class="ewm-tag">Sim-to-real 孪生体</span>
</div>

<div class="ewm-team-strip">
  <div class="ewm-label">研究团队</div>
  <div class="ewm-team-names">
    <a href="https://hanjiale.github.io/" target="_blank" rel="noopener">Jiale Han</a>、Xiang Li、Jing Qian、Wenyuan Gu、<a href="https://myweb.cuhk.edu.cn/gaopin" target="_blank" rel="noopener">Pin Gao</a>、<a href="https://www.hkubs.hku.hk/people/ye-luo/" target="_blank" rel="noopener">Ye Luo</a>、<a href="https://polysz.cuhk.edu.cn/en/content/10883" target="_blank" rel="noopener">Hongyuan Zha</a>、<a href="https://www.ntu.edu.sg/computing/research/institutes-centres/grail/our-people" target="_blank" rel="noopener">Dacheng Tao</a>、<a href="https://wabyking.github.io/old.html" target="_blank" rel="noopener">Benyou Wang</a>、<a href="https://www.linwilliamcong.com/about" target="_blank" rel="noopener">Lin William Cong</a>
  </div>
</div>

<div class="ewm-actions">
  <a class="ewm-action" href="https://github.com/FreedomIntelligence/Awesome-Econ-World-Models/" target="_blank" rel="noopener">资源</a>
  <a class="ewm-action secondary" href="{{ '/assets/pdf/economic-world-models.pdf' | relative_url }}" target="_blank" rel="noopener">论文</a>
  <a class="ewm-action secondary" href="{{ '/projects/' | relative_url }}">全部项目</a>
</div>

<div class="ewm-hero-image">
  <img src="{{ '/assets/img/economic-world-models/ewm-hero.png' | relative_url }}" alt="经济世界模型：对比物理世界的状态转移与智能体生成的经济世界状态转移">
</div>

<p class="ewm-lede">
经济决策通常先在现实世界中做出，事后才评估效果。经济世界模型把这一流程倒过来：它追问的是，如何在政策、策略或 AI 智能体大规模部署之前，先构建出可计算的经济体。在这样的经济体中，异质智能体观察、推理、行动、交互、适应，并与市场和制度共同演化。
</p>

<p>
本项目为 EconWM 系统提出了一份面向落地的系统蓝图。它把经济学与 AI 系统设计结合起来，把经济体看作一台生成引擎，其状态转移由被建模世界的内部产生。智能体形成信念、选择行动、改变总体状态，再对自己参与塑造的世界做出回应。
</p>

<div class="ewm-callout">
  核心目标是让经济世界可构建、可测试、可对齐。这样的经济世界可以用作人类决策者的政策沙盒、经济智能体的训练环境、干预措施的规划引擎，也可以用作检验操纵、合谋、不稳定性和级联失效等涌现风险的安全测试平台。
</div>

<section class="ewm-section">
  <h2>主要构成</h2>
  <div class="ewm-grid">
    <div class="ewm-card">
      <strong>智能体经济沙盒</strong>
      <p>模拟环境，让家庭、企业、银行、投资者、监管者和 AI 智能体在明确的目标、约束、信息和规则下相互作用。</p>
    </div>
    <div class="ewm-card">
      <strong>六级能力阶梯</strong>
      <p>一套分类体系：从固定规则的智能体世界出发，经过自适应智能体、基于大模型的自主智能体、自进化智能体和演化的制度，直至 Sim-to-real 经济孪生体。</p>
    </div>
    <div class="ewm-card">
      <strong>对齐与评测闭环</strong>
      <p>对照模拟结果与真实经济证据，诊断偏差，并随时间持续修正智能体、机制和状态转移动态。</p>
    </div>
  </div>
  <div class="ewm-figure">
    <img src="{{ '/assets/img/economic-world-models/econwm-capability-ladder.png' | relative_url }}" alt="经济世界模型系统的六个能力层级">
  </div>
</section>

<section class="ewm-section">
  <h2>系统蓝图</h2>
  <p>
本项目提出的 EconWM 架构包含四个相互衔接的层次：经济智能体、经济环境、智能体与环境的共演化，以及真实世界对齐。因此，这个项目不只是对经济学中 AI 智能体的综述，更是一份构建经济数字孪生的方案：这样的孪生体能够推理、模拟、学习，并始终以实证为依据。
  </p>
  <div class="ewm-figure">
    <img src="{{ '/assets/img/economic-world-models/econwm-architecture.png' | relative_url }}" alt="经济世界模型的核心组成部分">
  </div>
</section>

<section class="ewm-section">
  <h2>研究团队</h2>
  <p>
这项工作汇聚了深圳河套学院、香港中文大学（深圳）数据科学学院、香港大学和南洋理工大学的研究者。
  </p>
  <div class="ewm-author-grid">
    <a class="ewm-author" href="https://hanjiale.github.io/" target="_blank" rel="noopener">
      <img src="{{ '/assets/img/economic-world-models/jiale-han.jpg' | relative_url }}" alt="Jiale Han">
      <span class="ewm-author-body"><span class="ewm-author-name">Jiale Han</span><span class="ewm-author-role">深圳河套学院</span></span>
    </a>
    <div class="ewm-author">
      <img src="{{ '/assets/img/economic-world-models/xiang-li.jpg' | relative_url }}" alt="Xiang Li">
      <span class="ewm-author-body"><span class="ewm-author-name">Xiang Li</span><span class="ewm-author-role">香港中文大学（深圳）数据科学学院</span></span>
    </div>
    <div class="ewm-author">
      <img src="{{ '/assets/img/economic-world-models/jing-qian.jpg' | relative_url }}" alt="Jing Qian">
      <span class="ewm-author-body"><span class="ewm-author-name">Jing Qian</span><span class="ewm-author-role">香港中文大学（深圳）数据科学学院</span></span>
    </div>
    <div class="ewm-author">
      <img src="{{ '/assets/img/economic-world-models/wenyuan-gu.jpg' | relative_url }}" alt="Wenyuan Gu">
      <span class="ewm-author-body"><span class="ewm-author-name">Wenyuan Gu</span><span class="ewm-author-role">香港中文大学（深圳）数据科学学院</span></span>
    </div>
    <a class="ewm-author" href="https://myweb.cuhk.edu.cn/gaopin" target="_blank" rel="noopener">
      <img src="{{ '/assets/img/economic-world-models/pin-gao.jpg' | relative_url }}" alt="Pin Gao">
      <span class="ewm-author-body"><span class="ewm-author-name">Pin Gao</span><span class="ewm-author-role">香港中文大学（深圳）数据科学学院</span></span>
    </a>
    <a class="ewm-author" href="https://www.hkubs.hku.hk/people/ye-luo/" target="_blank" rel="noopener">
      <img src="{{ '/assets/img/economic-world-models/ye-luo.jpg' | relative_url }}" alt="Ye Luo">
      <span class="ewm-author-body"><span class="ewm-author-name">Ye Luo</span><span class="ewm-author-role">深圳河套学院 / 香港大学</span></span>
    </a>
    <a class="ewm-author" href="https://polysz.cuhk.edu.cn/en/content/10883" target="_blank" rel="noopener">
      <img src="{{ '/assets/img/economic-world-models/hongyuan-zha.jpg' | relative_url }}" alt="Hongyuan Zha">
      <span class="ewm-author-body"><span class="ewm-author-name">Hongyuan Zha</span><span class="ewm-author-role">香港中文大学（深圳）数据科学学院</span></span>
    </a>
    <a class="ewm-author" href="https://www.ntu.edu.sg/computing/research/institutes-centres/grail/our-people" target="_blank" rel="noopener">
      <img src="{{ '/assets/img/economic-world-models/dacheng-tao.jpg' | relative_url }}" alt="Dacheng Tao">
      <span class="ewm-author-body"><span class="ewm-author-name">Dacheng Tao</span><span class="ewm-author-role">南洋理工大学</span></span>
    </a>
    <a class="ewm-author" href="https://wabyking.github.io/old.html" target="_blank" rel="noopener">
      <img src="{{ '/assets/img/economic-world-models/benyou-wang.jpg' | relative_url }}" alt="Benyou Wang">
      <span class="ewm-author-body"><span class="ewm-author-name">Benyou Wang</span><span class="ewm-author-role">深圳河套学院 / 香港中文大学（深圳）数据科学学院</span></span>
    </a>
    <a class="ewm-author" href="https://www.linwilliamcong.com/about" target="_blank" rel="noopener">
      <img src="{{ '/assets/img/economic-world-models/lin-william-cong.jpg' | relative_url }}" alt="Lin William Cong">
      <span class="ewm-author-body"><span class="ewm-author-name">Lin William Cong</span><span class="ewm-author-role">深圳河套学院 / 南洋理工大学</span></span>
    </a>
  </div>
</section>

<section class="ewm-section">
  <h2>代表性论文</h2>
  <div class="ewm-publications">
    <article class="ewm-card ewm-publication">
      <strong>From Economic Agents to Agentic Economies: A Systems Blueprint for Economic World Models</strong>
      <p>Jiale Han、Xiang Li、Jing Qian、Wenyuan Gu、Pin Gao、Ye Luo、Hongyuan Zha、Dacheng Tao、Benyou Wang 和 Lin William Cong。工作论文。</p>
      <a href="{{ '/assets/pdf/economic-world-models.pdf' | relative_url }}" target="_blank" rel="noopener">论文</a>
    </article>
    <article class="ewm-card ewm-publication">
      <strong>TwinMarket: A Scalable Behavioral and Social Simulation for Financial Markets</strong>
      <p>Yuzhe Yang、Yifei Zhang、Minghao Wu、Kaidi Zhang、Yunmiao Zhang、Honghai Yu、Yan Hu 和 Benyou Wang。NeurIPS 2025；获 ICLR 2025 Financial AI Workshop 最佳论文奖。</p>
      <a href="https://proceedings.neurips.cc/paper_files/paper/2025/hash/5bf234ecf83cd77bc5b77a24ba9338b0-Abstract-Conference.html" target="_blank" rel="noopener">论文</a>
    </article>
    <article class="ewm-card ewm-publication">
      <strong>UCFE: A User-Centric Financial Expertise Benchmark for Large Language Models</strong>
      <p>Yuzhe Yang、Yifei Zhang、Yan Hu、Yilin Guo、Ruoli Gan、Yueru He、Mingcong Lei、Xiao Zhang、Haining Wang、Qianqian Xie、Jimin Huang、Honghai Yu 和 Benyou Wang。Findings of NAACL 2025。</p>
      <a href="https://aclanthology.org/2025.findings-naacl.300/" target="_blank" rel="noopener">论文</a>
    </article>
    <article class="ewm-card ewm-publication">
      <strong>FinBen: A Holistic Financial Benchmark for Large Language Models</strong>
      <p>Qianqian Xie、Weiguang Han、Zhengyu Chen、Ruoyu Xiang、Xiao Zhang、Yueru He、Mengxi Xiao、Dong Li、Yongfu Dai、Duanyu Feng、Yijing Xu、Haoqiang Kang、Ziyan Kuang、Chenhan Yuan、Kailai Yang、Zheheng Luo、Tianlin Zhang、Zhiwei Liu、Guojun Xiong、Zhiyang Deng、Yuechen Jiang、Zhiyuan Yao、Haohang Li、Yangyang Yu、Gang Hu、Huang Jiajia、Xiaoyang Liu、Alejandro Lopez-Lira、Benyou Wang、Yanzhao Lai、Hao Wang、Min Peng、Sophia Ananiadou 和 Jimin Huang。</p>
      <a href="https://arxiv.org/abs/2402.12659" target="_blank" rel="noopener">论文</a>
    </article>
    <article class="ewm-card ewm-publication">
      <strong>Open-FinLLMs: Open Multimodal Large Language Models for Financial Applications</strong>
      <p>Jimin Huang、Mengxi Xiao、Dong Li、Zihao Jiang、Yuzhe Yang、Yifei Zhang、Lingfei Qian、Yan Wang、Xueqing Peng、Yang Ren、Ruoyu Xiang、Zhengyu Chen、Xiao Zhang、Yueru He、Weiguang Han、Shunian Chen、Lihang Shen、Daniel Kim、Yangyang Yu、Yupeng Cao、Zhiyang Deng、Haohang Li、Duanyu Feng、Yongfu Dai、VijayaSai Somasundaram、Peng Lu、Guojun Xiong、Zhiwei Liu、Zheheng Luo、Zhiyuan Yao、Ruey-Ling Weng、Meikang Qiu、Kaleb E Smith、Honghai Yu、Yanzhao Lai、Min Peng、Jian-Yun Nie、Jordan W Suchow、Xiao-Yang Liu、Benyou Wang、Alejandro Lopez-Lira、Qianqian Xie、Sophia Ananiadou 和 Junichi Tsujii。</p>
      <a href="https://arxiv.org/abs/2408.11878" target="_blank" rel="noopener">论文</a>
    </article>
    <article class="ewm-card ewm-publication">
      <strong>No Language Is an Island: Unifying Chinese and English in Financial Large Language Models, Instruction Data, and Benchmarks</strong>
      <p>Gang Hu、Ke Qin、Chenhan Yuan、Min Peng、Alejandro Lopez-Lira、Benyou Wang、Sophia Ananiadou、Jimin Huang 和 Qianqian Xie。</p>
      <a href="https://arxiv.org/abs/2403.06249" target="_blank" rel="noopener">论文</a>
    </article>
  </div>
</section>

<section class="ewm-section">
  <h2>从论文到系统</h2>
  <p>
经济世界模型是总览页。在它之下，TwinMarket 提供具体的金融市场沙盒，MicroVerse 探索科学微观世界模拟，精心整理的 Awesome Econ World Models 仓库则负责梳理论文脉络。三者合在一起，把“环境中的智能体”这一想法扩展为一条关于演化世界的研究主线：社会世界、市场世界、生物世界，以及最终面向政策的数字孪生。
  </p>
  <div class="ewm-featured">
    <a class="ewm-card ewm-resource" href="/projects/twinmarket-financial-simulation/">
      <strong>TwinMarket</strong>
      <p>金融智能体社会：大模型投资者从个体的信念、愿望、意图和信息流出发，产生市场层面的行为。</p>
    </a>
    <a class="ewm-card ewm-resource" href="/projects/microverse-world-simulation/">
      <strong>MicroVerse</strong>
      <p>面向生物过程的科学微观世界模拟：隐藏机制和状态转移，与视觉外观同样重要。</p>
    </a>
    <a class="ewm-card ewm-resource" href="https://github.com/FreedomIntelligence/Awesome-Econ-World-Models/" target="_blank" rel="noopener">
      <strong>Awesome Econ World Models</strong>
      <p>持续更新的文献清单与实现地图，涵盖经济智能体、智能体经济、制度演化和 Sim-to-real 对齐。</p>
    </a>
  </div>
</section>

<div class="ewm-actions">
  <a class="ewm-action secondary" href="{{ '/projects/' | relative_url }}">返回项目页</a>
</div>

</div>

</div>
