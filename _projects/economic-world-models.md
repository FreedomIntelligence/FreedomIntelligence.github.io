---
layout: page
title: Economic World Models
description: Building AI-system blueprints for agentic economies, policy sandboxes, and self-correcting economic twins.
img: assets/img/economic-world-models/ewm-hero.png
importance: 0
category: work
github: https://github.com/FreedomIntelligence/Awesome-Econ-World-Models/
---

<style>
  .ewm-project {
    --ewm-ink: #101827;
    --ewm-muted: #526071;
    --ewm-line: #d9e1ea;
    --ewm-soft: #f6f8fb;
    --ewm-teal: #007f8f;
    --ewm-blue: #1f6693;
    --ewm-amber: #a36b00;
    color: var(--ewm-ink);
  }

  .ewm-kicker {
    color: var(--ewm-teal);
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

  .ewm-action {
    background: var(--ewm-ink);
    border-color: var(--ewm-ink);
    color: #fff;
  }

  .ewm-action.secondary {
    background: #fff;
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
    color: #263242;
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
    color: #263242;
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
</style>

<div class="ewm-project">

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
  <h2>Featured Work</h2>
  <div class="ewm-featured">
    <div class="ewm-card ewm-resource">
      <strong>From Economic Agents to Agentic Economies</strong>
      <p>A systems blueprint for implementing Economic World Models as generative AI environments for agent training, planning, policy simulation, and safety analysis.</p>
    </div>
    <div class="ewm-card ewm-resource">
      <strong>Awesome Econ World Models</strong>
      <p>A curated paper list and resource hub mapping the emerging EconWM literature across agent capability, institutional evolution, and sim-to-real alignment.</p>
    </div>
    <div class="ewm-card ewm-resource">
      <strong>EWM / DDGE foundation</strong>
      <p>The project builds on the Economic World Models and Data-Driven Generative Equilibria agenda, translating the economic framework into an AI-systems roadmap.</p>
    </div>
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
