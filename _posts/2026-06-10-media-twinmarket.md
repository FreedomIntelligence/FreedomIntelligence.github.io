---
layout: distill
title: "机器之心｜TwinMarket：千个虚拟投资者与金融市场涌现"
date: 2026-06-10
description: "基于机器之心关于 TwinMarket 的报道整理的图文导读，补充完整多模态图示、研究脉络与 FreedomAI Lab 资源入口。"
tags: media machine-heart TwinMarket social-simulation financial-ai

authors:
  - name: FreedomAI Lab
    url: "https://freedomintelligence.github.io/"
    affiliations:
      name: CUHKSZ

toc:
  - name: Quick Read
  - name: Framework
  - name: Data and Experiments
  - name: Emergent Market Behavior
  - name: Resources

_styles: >
  d-article > p:not(.tm-note) {
    color: var(--global-text-color);
    font-size: 1.02rem;
    line-height: 1.86;
    margin: 1rem auto 1.15rem;
    max-width: 760px;
  }

  d-article > h2 {
    border-top: 1px solid var(--global-divider-color);
    font-size: 1.42rem;
    line-height: 1.3;
    margin: 2.45rem 0 1rem;
    padding-top: 1.25rem;
  }

  d-article > h2:first-of-type {
    margin-top: 1.6rem;
  }

  .tm-note {
    background: rgba(18, 161, 80, 0.055);
    border: 1px solid var(--global-divider-color);
    border-left: 4px solid var(--global-theme-color);
    border-radius: 8px;
    color: var(--global-text-color-light);
    font-size: 0.95rem;
    line-height: 1.7;
    margin: 0 auto 1.45rem;
    max-width: 820px;
    padding: 0.85rem 1rem;
  }

  .tm-hero {
    background: rgba(18, 161, 80, 0.06);
    background: color-mix(in srgb, var(--global-theme-color) 7%, transparent);
    border: 1px solid var(--global-divider-color);
    border-color: color-mix(in srgb, var(--global-theme-color) 22%, var(--global-divider-color));
    border-radius: 8px;
    margin: 1.45rem auto 2rem;
    max-width: 900px;
    overflow: hidden;
  }

  .tm-hero img,
  .tm-figure img,
  .tm-card img {
    display: block;
    height: auto;
    width: 100%;
  }

  .tm-hero figcaption,
  .tm-figure figcaption,
  .tm-card figcaption {
    background: #fbfcfd;
    border-top: 1px solid var(--global-divider-color);
    color: var(--global-text-color-light);
    font-size: 0.88rem;
    line-height: 1.62;
    margin: 0;
    padding: 0.8rem 0.95rem 0.9rem;
  }

  .tm-kicker {
    color: var(--global-theme-color);
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0;
    margin: 2rem 0 -0.15rem;
    text-transform: uppercase;
  }

  .tm-grid {
    display: grid;
    align-items: start;
    gap: 1.15rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin: 1.35rem 0 1.75rem;
  }

  .tm-card,
  .tm-figure,
  .tm-resource {
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    overflow: hidden;
  }

  .tm-card {
    background: var(--global-card-bg-color, var(--global-bg-color));
    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.035);
  }

  .tm-card img {
    background: #f8fafc;
    max-height: 430px;
    object-fit: contain;
  }

  .tm-callout {
    background: rgba(18, 161, 80, 0.07);
    background: color-mix(in srgb, var(--global-theme-color) 8%, transparent);
    border: 1px solid var(--global-divider-color);
    border-color: color-mix(in srgb, var(--global-theme-color) 20%, var(--global-divider-color));
    border-radius: 8px;
    color: var(--global-text-color);
    font-size: 1rem;
    line-height: 1.76;
    margin: 1.35rem auto 1.65rem;
    max-width: 820px;
    padding: 1rem 1.15rem;
  }

  .tm-points {
    display: grid;
    gap: 0.95rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin: 1.3rem 0 1.55rem;
  }

  .tm-point {
    background: #fbfcfd;
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    padding: 1rem;
  }

  .tm-point strong {
    color: var(--global-text-color);
    display: block;
    font-size: 0.98rem;
    margin-bottom: 0.4rem;
  }

  .tm-point span {
    color: var(--global-text-color-light);
    display: block;
    font-size: 0.91rem;
    line-height: 1.6;
  }

  .tm-figure {
    margin: 1.35rem auto 1.75rem;
    max-width: 880px;
  }

  .tm-resource-grid {
    display: grid;
    gap: 0.9rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 1.1rem;
  }

  .tm-resource {
    background: #fbfcfd;
    color: inherit;
    display: block;
    padding: 0.95rem 1rem;
    text-decoration: none;
    transition: border-color 0.15s ease, transform 0.15s ease;
  }

  .tm-resource:hover {
    border-color: var(--global-theme-color);
    text-decoration: none;
    transform: translateY(-1px);
  }

  .tm-resource strong {
    display: block;
    font-size: 0.98rem;
    margin-bottom: 0.28rem;
  }

  .tm-resource span {
    color: var(--global-text-color-light);
    display: block;
    font-size: 0.9rem;
    line-height: 1.55;
  }

  @media (max-width: 760px) {
    d-article > p:not(.tm-note) {
      font-size: 0.98rem;
      line-height: 1.78;
      margin: 0.85rem 0 1rem;
    }

    d-article > h2 {
      font-size: 1.24rem;
      margin-top: 2rem;
      padding-top: 1rem;
    }

    .tm-grid,
    .tm-points,
    .tm-resource-grid {
      grid-template-columns: 1fr;
    }

    .tm-note,
    .tm-callout {
      padding: 0.85rem 0.9rem;
    }

    .tm-hero,
    .tm-figure,
    .tm-grid {
      margin-left: 0;
      margin-right: 0;
    }
  }
---

<p class="tm-note">本文基于机器之心原报道与公开项目资料整理。为尊重原媒体版权，页面不逐字镜像全文，而是把 TwinMarket 的研究故事、关键图示和资源入口重新整理为更适合本站阅读的图文导读。图片来自机器之心报道及相关转载页面，版权归原媒体与原作者所有。</p>

<figure class="tm-hero">
  <img src="{{ '/assets/img/media-reposts/media-twinmarket/img-002-1e52040077.png' | relative_url }}" alt="TwinMarket framework overview">
  <figcaption>图源：机器之心 TwinMarket 报道。TwinMarket 把世界知识、金融市场环境、社交信息和虚拟投资者连接在同一个可模拟系统中。</figcaption>
</figure>

<div class="tm-kicker">Quick Read</div>

## Quick Read

TwinMarket 是一个面向金融市场的多智能体社会模拟框架。它不把市场直接写成一个宏观公式，而是从大量虚拟投资者出发，让每个 agent 带着自己的信息、信念、偏好、社交关系和交易意图，在同一个股票市场环境里互动。价格波动、羊群效应、泡沫和回撤等现象，随后从这些微观行为中涌现出来。

这篇报道的核心价值在于：它把大模型 agent 从“会聊天”推进到“能作为社会系统中的行动者”。对 FreedomAI Lab 的研究脉络来说，TwinMarket 也是 Economic World Models 的一个具体金融样板：让 AI 进入一个可执行、可反馈、可评测的经济世界。

<div class="tm-points">
  <div class="tm-point">
    <strong>微观个体</strong>
    <span>用 BDI 思路刻画投资者的信念、欲望、意图、信息接收和交易决策。</span>
  </div>
  <div class="tm-point">
    <strong>市场环境</strong>
    <span>把订单撮合、价格反馈、新闻公告和社交媒体信号放进统一模拟循环。</span>
  </div>
  <div class="tm-point">
    <strong>宏观涌现</strong>
    <span>观察许多虚拟投资者交互后出现的泡沫、衰退、趋势跟随和成交量变化。</span>
  </div>
</div>

<div class="tm-callout">
报道中的重点不是“AI 会不会炒股”，而是更基础的问题：当一个社会经济系统由许多具备认知、情绪和社交影响的 agent 组成时，我们能否用可控的数字沙盘研究市场行为如何形成。
</div>

<div class="tm-kicker">Framework</div>

## Framework

TwinMarket 的结构可以分成两层：微观层是虚拟投资者，宏观层是市场基础设施。微观层负责观察、理解、计划和交易；宏观层负责提供新闻、股票数据、社交传播、订单撮合和价格反馈。系统每天推进一轮，agent 根据新信息更新内部状态并提交交易行为，市场再把交易结果反向反馈给 agent。

<figure class="tm-figure">
  <img src="{{ '/assets/img/media-roundup-2026/twinmarket-bdi.png' | relative_url }}" alt="TwinMarket BDI architecture">
  <figcaption>图源：机器之心报道。BDI 框架把投资者的 Belief、Desire 和 Intention 显式拆开，使交易决策可以追溯到信息、偏好、社交信号和当前市场状态。</figcaption>
</figure>

<div class="tm-grid">
  <figure class="tm-card">
    <img src="{{ '/assets/img/media-reposts/media-twinmarket/img-003-a69ff1c708.png' | relative_url }}" alt="TwinMarket micro and macro simulation diagram">
    <figcaption>微观用户模拟与宏观市场模拟之间循环：用户画像、新闻、帖子、观察、意图和交易动作共同影响市场。</figcaption>
  </figure>
  <figure class="tm-card">
    <img src="{{ '/assets/img/media-reposts/media-twinmarket/img-004-ab8fbac7c4.png' | relative_url }}" alt="TwinMarket daily simulation loop">
    <figcaption>每日模拟流程。agent 先更新认知状态，再形成决策和交易订单，最后接收市场反馈并进入下一轮。</figcaption>
  </figure>
</div>

这个设计比传统规则型 Agent-Based Model 更灵活。传统模型通常需要手工指定每类投资者的规则，而 LLM agent 可以把更丰富的语言信息、新闻冲击、社交观点和非理性因素纳入推理过程。研究者也可以通过改变 agent 人群、信息环境或市场规则，做反事实实验。

<div class="tm-kicker">Data and Experiments</div>

## Data and Experiments

为了让模拟不是孤立的玩具世界，TwinMarket 引入真实世界数据作为外部 grounding。报道中的数据表覆盖用户画像初始化、股票推荐、基本面股票数据和世界知识库等来源。这样做的目的，是让虚拟投资者面对更接近真实金融市场的信息条件。

<div class="tm-grid">
  <figure class="tm-card">
    <img src="{{ '/assets/img/media-reposts/media-twinmarket/img-005-eff4f12ff9.png' | relative_url }}" alt="TwinMarket data sources table">
    <figcaption>数据来源与用途。系统同时使用用户画像、交易行为、股票基本面数据和公告新闻，支撑 agent 初始化与每日决策。</figcaption>
  </figure>
  <figure class="tm-card">
    <img src="{{ '/assets/img/media-reposts/media-twinmarket/img-006-b00815c24e.png' | relative_url }}" alt="TwinMarket stylized facts and trading performance">
    <figcaption>实验结果的一部分展示了 stylized facts 与交易表现。重点在于检验模拟市场是否复现真实市场常见统计现象。</figcaption>
  </figure>
</div>

从实验角度看，TwinMarket 关注两类问题。第一类是“像不像”：模拟的价格、成交量、波动、相关性等是否接近真实市场。第二类是“为什么”：当 agent 的信念、信息和社交互动改变时，市场会如何演化。

<div class="tm-grid">
  <figure class="tm-card">
    <img src="{{ '/assets/img/media-reposts/media-twinmarket/img-007-24429f6518.png' | relative_url }}" alt="TwinMarket belief and observation analysis">
    <figcaption>信念分布、观察效应和市场反应之间的关系。图示把个体认知变量和市场行为放在同一实验框架中观察。</figcaption>
  </figure>
  <figure class="tm-card">
    <img src="{{ '/assets/img/media-reposts/media-twinmarket/img-010-7f761844de.png' | relative_url }}" alt="TwinMarket user scale ablation">
    <figcaption>不同活跃用户比例下的成交量与误差变化。规模和参与度会影响模拟市场的稳定性与拟合效果。</figcaption>
  </figure>
</div>

<div class="tm-kicker">Emergent Market Behavior</div>

## Emergent Market Behavior

真正有意思的地方，是微观 agent 行为如何变成宏观市场状态。一个 agent 的判断可能只改变一笔订单；成百上千个 agent 在新闻、社交传播和价格反馈中连续互动，就可能形成趋势、过度反应或集体转向。

<figure class="tm-figure">
  <img src="{{ '/assets/img/media-roundup-2026/twinmarket-bubble.png' | relative_url }}" alt="TwinMarket market bubble simulation">
  <figcaption>图源：机器之心报道。TwinMarket 用多智能体交互展示金融市场中的泡沫、回调和社会影响等涌现现象。</figcaption>
</figure>

<div class="tm-grid">
  <figure class="tm-card">
    <img src="{{ '/assets/img/media-reposts/media-twinmarket/img-008-9f00abb4ba.png' | relative_url }}" alt="TwinMarket price and belief trend">
    <figcaption>价格指数与信念状态随时间变化。agent 对市场的集体判断会与价格路径相互影响。</figcaption>
  </figure>
  <figure class="tm-card">
    <img src="{{ '/assets/img/media-reposts/media-twinmarket/img-009-c7182701d3.png' | relative_url }}" alt="TwinMarket belief and stock price trends">
    <figcaption>不同市场变量的趋势对比。图中展示了信念、社交/新闻影响和价格走势之间的联动。</figcaption>
  </figure>
</div>

<div class="tm-grid">
  <figure class="tm-card">
    <img src="{{ '/assets/img/media-reposts/media-twinmarket/img-011-46206c359f.png' | relative_url }}" alt="TwinMarket simulated and real index price comparison">
    <figcaption>模拟指数与真实指数走势对比。模型目标不是预测单点价格，而是研究市场动态是否能在总体趋势上被复现。</figcaption>
  </figure>
  <figure class="tm-card">
    <img src="{{ '/assets/img/media-reposts/media-twinmarket/img-012-5851fe373f.png' | relative_url }}" alt="TwinMarket NeurIPS workshop poster">
    <figcaption>相关会议和展示信息。TwinMarket 作为金融社会模拟方向的研究样例，连接多智能体系统、行为金融和经济世界模型。</figcaption>
  </figure>
</div>

如果把金融市场看作一个复杂社会系统，TwinMarket 提供了一个很清晰的研究入口：先构造足够多样的个体，再把个体放进可执行环境，让市场状态从互动中长出来。它适合用来做机制分析、风险压力测试、政策模拟和 agentic economy 方向的基础实验。

## Resources

<div class="tm-resource-grid">
  <a class="tm-resource" href="http://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2651001895&idx=4&sn=383c986589bd3d7dfc3623ae08b848f9" target="_blank" rel="noopener">
    <strong>机器之心原文</strong>
    <span>原报道入口，包含媒体完整叙述与来源说明。</span>
  </a>
  <a class="tm-resource" href="https://www.xinfinite.net/t/topic/16071" target="_blank" rel="noopener">
    <strong>冷月清谈转载页</strong>
    <span>转载页面入口，本站图文导读参考其公开转载内容。</span>
  </a>
  <a class="tm-resource" href="https://arxiv.org/abs/2502.01506" target="_blank" rel="noopener">
    <strong>Paper</strong>
    <span>TwinMarket: A Scalable Behavioral and Social Simulation for Financial Markets。</span>
  </a>
  <a class="tm-resource" href="https://github.com/FreedomIntelligence/TwinMarket" target="_blank" rel="noopener">
    <strong>GitHub</strong>
    <span>代码、README、实验入口与开源项目更新。</span>
  </a>
  <a class="tm-resource" href="https://freedomintelligence.github.io/TwinMarket/" target="_blank" rel="noopener">
    <strong>Project Site</strong>
    <span>TwinMarket 项目主页，展示框架、图示和核心结果。</span>
  </a>
  <a class="tm-resource" href="{{ '/projects/twinmarket-financial-simulation/' | relative_url }}">
    <strong>FreedomAI Project Page</strong>
    <span>本站项目页，关联 Economic World Models 与金融模拟研究路线。</span>
  </a>
</div>
