---
layout: page
title: Life
permalink: /life/
description: Work hard and play harder at Freedom AI.
nav: true
nav_order: 4
---

<style>
  .life-page {
    margin-top: 0.4rem;
  }

  .life-hero {
    position: relative;
    min-height: 390px;
    overflow: hidden;
    border-radius: 8px;
    background: #101820;
  }

  .life-hero img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    max-width: none;
    object-fit: cover;
  }

  .life-hero::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(9, 14, 20, 0.42);
  }

  .life-hero__content {
    position: relative;
    z-index: 1;
    max-width: 660px;
    padding: 64px 42px;
  }

  .life-eyebrow {
    margin-bottom: 0.8rem;
    color: rgba(255, 255, 255, 0.78);
    font-size: 0.86rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .life-hero h2 {
    margin: 0 0 1rem;
    color: #fff;
    font-size: 2.75rem;
    line-height: 1.08;
  }

  .life-hero p {
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.05rem;
    line-height: 1.7;
  }

  .life-hero strong {
    color: #fff;
  }

  .life-section {
    margin: 2.4rem 0;
  }

  .life-section h2 {
    margin-bottom: 0.85rem;
    font-size: 1.65rem;
  }

  .life-section__intro {
    max-width: 760px;
    color: var(--global-text-color-light);
    line-height: 1.75;
  }

  .life-values {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 14px;
    margin-top: 1.2rem;
  }

  .life-value {
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    padding: 16px;
    background: var(--global-bg-color);
  }

  .life-value h3 {
    margin: 0 0 0.55rem;
    font-size: 1rem;
  }

  .life-value p {
    margin: 0;
    color: var(--global-text-color-light);
    line-height: 1.58;
  }

  .life-gallery {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 14px;
    margin-top: 1.2rem;
  }

  .life-gallery > .life-photo {
    grid-column: span 4;
  }

  .life-photo {
    margin: 0;
  }

  .life-gallery > .life-photo--wide {
    grid-column: span 8;
  }

  .life-photo img {
    display: block;
    width: 100%;
    height: 260px;
    max-width: none;
    object-fit: cover;
    border-radius: 8px;
  }

  .life-photo--wide img {
    height: 360px;
  }

  .life-photo--contain img {
    object-fit: contain;
    border: 1px solid var(--global-divider-color);
    background: #fff;
    padding: 10px;
  }

  .life-photo figcaption {
    margin-top: 8px;
    color: var(--global-text-color-light);
    font-size: 0.92rem;
    line-height: 1.5;
  }

  .life-milestone {
    display: grid;
    grid-template-columns: minmax(0, 1.25fr) minmax(260px, 0.75fr);
    gap: 18px;
    align-items: stretch;
    margin-top: 1.2rem;
  }

  .life-milestone__image img {
    width: 100%;
    height: 100%;
    max-width: none;
    min-height: 360px;
    object-fit: cover;
    border-radius: 8px;
  }

  .life-milestone__copy {
    border-left: 3px solid var(--global-theme-color);
    padding-left: 18px;
    align-self: center;
  }

  .life-milestone__copy h3 {
    margin-top: 0;
    font-size: 1.25rem;
  }

  .life-milestone__copy p {
    color: var(--global-text-color-light);
    line-height: 1.7;
  }

  .life-awards {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
    margin-top: 1.2rem;
  }

  .life-program {
    display: grid;
    grid-template-columns: minmax(240px, 380px) 1fr;
    gap: 22px;
    align-items: center;
    margin-top: 1.2rem;
  }

  .life-program img {
    width: 100%;
    max-height: 520px;
    object-fit: contain;
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    background: #fff;
  }

  .life-program h3 {
    margin-top: 0;
    font-size: 1.25rem;
  }

  .life-program p,
  .life-list li {
    line-height: 1.7;
  }

  .life-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px 26px;
    margin: 1.2rem 0 0;
    padding-left: 1.1rem;
  }

  @media (max-width: 900px) {
    .life-values,
    .life-awards,
    .life-list {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .life-gallery > .life-photo,
    .life-gallery > .life-photo--wide {
      grid-column: span 6;
    }

    .life-milestone,
    .life-program {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .life-hero {
      min-height: 430px;
    }

    .life-hero__content {
      padding: 44px 22px;
    }

    .life-hero h2 {
      font-size: 2.1rem;
    }

    .life-values,
    .life-awards,
    .life-list {
      grid-template-columns: 1fr;
    }

    .life-gallery > .life-photo,
    .life-gallery > .life-photo--wide {
      grid-column: span 12;
    }

    .life-photo img,
    .life-photo--wide img {
      height: 250px;
    }
  }
</style>

<div class="life-page">
  <section class="life-hero">
    <img src="/assets/img/freedomai-2026/life/camp.jpg" alt="Freedom AI group outdoor gathering">
    <div class="life-hero__content">
      <div class="life-eyebrow">Work hard. Play harder.</div>
      <h2>Freedom begins with people who still love life.</h2>
      <p>Freedom AI 秉承“每个人争取自己的自由，就是争取整个社会的自由”。我们鼓励成员为自己信仰的 AI 真理而战，为热爱和自由而做研究。</p>
      <p><strong>Free humanity from the boundaries of life through AI.</strong></p>
    </div>
  </section>

  <section class="life-section">
    <h2>Group Culture</h2>
    <p class="life-section__intro">顶级科研不是苦大仇深的孤军奋战。我们希望实验室既有高强度的探索，也有运动、讨论、互助和真实生活里的松弛感。</p>
    <div class="life-values">
      <div class="life-value">
        <h3>自由探索</h3>
        <p>鼓励成员选择真正相信的问题，做有长期价值的 AI 研究。</p>
      </div>
      <div class="life-value">
        <h3>以老带新</h3>
        <p>高年级同学和年轻研究者紧密协作，帮助新人快速建立研究品味。</p>
      </div>
      <div class="life-value">
        <h3>真实落地</h3>
        <p>论文之外，也重视开源系统、医疗部署、创业和产业合作。</p>
      </div>
      <div class="life-value">
        <h3>热爱生活</h3>
        <p>篮球、足球、羽毛球、团建和夜谈，让团队保持能量和默契。</p>
      </div>
    </div>
  </section>

  <section class="life-section">
    <h2>Social Life</h2>
    <div class="life-gallery">
      <figure class="life-photo life-photo--wide">
        <img src="/assets/img/freedomai-2026/life/dialogue.jpg" alt="Freedom AI academic dialogue">
        <figcaption>与大师对话：面对面交流，打开新的研究视野。</figcaption>
      </figure>
      <figure class="life-photo">
        <img src="/assets/img/freedomai-2026/life/bonfire.jpg" alt="Freedom AI bonfire gathering">
        <figcaption>篝火晚会：在星空下聊科研，也聊人生。</figcaption>
      </figure>
      <figure class="life-photo">
        <img src="/assets/img/freedomai-2026/life/night-gathering.jpg" alt="Freedom AI night gathering">
        <figcaption>促膝夜谈：分享科研心得，也交换生活感悟。</figcaption>
      </figure>
      <figure class="life-photo">
        <img src="/assets/img/freedomai-2026/life/basketball.jpg" alt="Freedom AI basketball activity">
        <figcaption>篮球活动：和年轻研究者一起 play harder。</figcaption>
      </figure>
      <figure class="life-photo">
        <img src="/assets/img/freedomai-2026/life/football.png" alt="Freedom AI football activity">
        <figcaption>足球活动：在运动里建立默契和团队感。</figcaption>
      </figure>
    </div>
  </section>

  <section class="life-section">
    <h2>Milestones Together</h2>
    <div class="life-milestone">
      <div class="life-milestone__image">
        <img src="/assets/img/freedomai-2026/impact/huatuogpt-longgang.jpg" alt="HuatuoGPT launch ceremony in Longgang">
      </div>
      <div class="life-milestone__copy">
        <h3>从实验室走向真实世界</h3>
        <p>域华佗 GPT 智能导诊和预问诊系统在深圳龙岗上线，把医疗大模型带到真实医院和社区健康场景。</p>
        <p>我们鼓励成员把 research taste、工程能力和社会问题连接起来，让 AI 真正服务更多人。</p>
      </div>
    </div>

    <div class="life-awards">
      <figure class="life-photo life-photo--contain">
        <img src="/assets/img/freedomai-2026/impact/iclr-financial-ai-award.jpg" alt="ICLR Advances in Financial AI Workshop best paper award">
        <figcaption>ICLR Advances in Financial AI Workshop Best Paper Award。</figcaption>
      </figure>
      <figure class="life-photo life-photo--contain">
        <img src="/assets/img/freedomai-2026/life/naacl-2019-best-explainable-nlp-paper.jpg" alt="NAACL 2019 Best Explainable NLP Paper certificate">
        <figcaption>NAACL 2019 Best Explainable NLP Paper。</figcaption>
      </figure>
      <figure class="life-photo life-photo--contain">
        <img src="/assets/img/freedomai-2026/life/nlpcc-2022-best-paper-award.jpg" alt="NLPCC 2022 best paper award certificate">
        <figcaption>NLPCC 2022 Best Paper Award。</figcaption>
      </figure>
    </div>
  </section>

  <section class="life-section">
    <h2>Research Programs</h2>
    <div class="life-program">
      <img src="/assets/img/freedomai-2026/deep-eye-program.png" alt="Shenzhen Loop Area Institute 2026 Deep Eye summer research program">
      <div>
        <h3>Deep Eye Research Program</h3>
        <p>Freedom AI welcomes outstanding undergraduate and master students to join intensive research programs with the Shenzhen Loop Area Institute. The 2026 summer program focuses on project-based research training, joint mentorship, and early exposure to frontier AI research.</p>
        <p>优秀同学可以提前锁定深圳河套学院联培博士计划机会；项目期间提供住宿、校内餐券和深圳以外学生交通补贴。</p>
      </div>
    </div>
  </section>

  <section class="life-section">
    <h2>Friendly Working Atmosphere</h2>
    <ul class="life-list">
      <li>香港中文大学博士学位，学位通行全球。</li>
      <li>河套联培学生享受足量 GPU、毗邻香港的住宿条件和丰厚补助。</li>
      <li>与华为、千问、腾讯、MiniMax、Kimi、蚂蚁、九坤等产业伙伴保持紧密合作。</li>
      <li>鼓励独立的高年级博士生实习、创业、把 AI 部署到真实世界。</li>
      <li>深圳河套学院聚焦项目负责人，资源丰厚，欢迎优秀本科生和硕士生参与 Deep Eye Research Program。</li>
      <li>我们相信研究的底色是热爱：热爱问题，热爱创造，也热爱生活。</li>
    </ul>
  </section>
</div>
