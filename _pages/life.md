---
layout: page
title: Life
permalink: /life/
description: "<span class=\"life-tagline-highlight\">Work hard and play harder</span> at Freedom AI."
nav: true
nav_order: 4
---

<style>
  .life-page {
    margin-top: 0.4rem;
  }

  .post-header .post-title {
    display: none;
  }

  .post-header .post-description {
    font-size: 1.1rem;
  }

  .life-tagline-highlight {
    color: #d63b2f;
    font-weight: 700;
    background: linear-gradient(180deg, transparent 58%, rgba(214, 59, 47, 0.18) 0);
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

  .life-gallery > .life-photo--portrait {
    grid-column: span 4;
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

  .life-photo--portrait img {
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

  @media (max-width: 900px) {
    .life-values {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .life-gallery > .life-photo,
    .life-gallery > .life-photo--wide,
    .life-gallery > .life-photo--portrait {
      grid-column: span 6;
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

    .life-values {
      grid-template-columns: 1fr;
    }

    .life-gallery > .life-photo,
    .life-gallery > .life-photo--wide,
    .life-gallery > .life-photo--portrait {
      grid-column: span 12;
    }

    .life-photo img,
    .life-photo--wide img,
    .life-photo--portrait img {
      height: 250px;
    }
  }
</style>

<div class="life-page">
  <section class="life-hero">
    <img src="/assets/img/freedomai-2026/life/basketball-night-court.jpg" alt="Freedom AI night basketball activity">
    <div class="life-hero__content">
      <div class="life-eyebrow"><span class="life-tagline-highlight">Work hard and play harder</span> at Freedom AI.</div>
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
    <h2>Recent Life Moments</h2>
    <p class="life-section__intro">科研之外的 Freedom AI，是球场、Open Day、项目展示、访谈和面对面交流共同组成的日常。下面这些照片更适合组成 Life 页面相册，其中横图也会挑选进入首页轮播。</p>
    <div class="life-gallery">
      <figure class="life-photo life-photo--wide">
        <img src="/assets/img/freedomai-2026/life/slai-ccf-campus-night.jpg" alt="CCF community event at Shenzhen Loop Area Institute">
        <figcaption>CCF 走进深圳河套学院：开放的校园交流与社区连接。</figcaption>
      </figure>
      <figure class="life-photo life-photo--wide">
        <img src="/assets/img/freedomai-2026/life/football.png" alt="Freedom AI football on a rainy court">
        <figcaption>雨中足球：湿润的球场、继续奔跑的人和很真实的团队能量。</figcaption>
      </figure>
      <figure class="life-photo">
        <img src="/assets/img/freedomai-2026/life/open-day-registration.jpg" alt="Open Day registration and consultation area">
        <figcaption>Open Day 现场：报名、咨询和交流自然发生。</figcaption>
      </figure>
      <figure class="life-photo">
        <img src="/assets/img/freedomai-2026/life/open-day-talk.jpg" alt="Freedom AI Open Day talk">
        <figcaption>Open Day 分享：把项目、想法和新同学带到同一个空间。</figcaption>
      </figure>
      <figure class="life-photo life-photo--portrait">
        <img src="/assets/img/freedomai-2026/life/project-demo-discussion.jpg" alt="Project demo discussion with students">
        <figcaption>项目交流：面向同学讲解系统设计和研究思路。</figcaption>
      </figure>
      <figure class="life-photo">
        <img src="/assets/img/freedomai-2026/life/livestream-setup.jpg" alt="Livestream interview setup">
        <figcaption>直播与访谈：把实验室故事讲给更大的社区。</figcaption>
      </figure>
      <figure class="life-photo life-photo--wide">
        <img src="/assets/img/freedomai-2026/life/basketball-day-layup.jpg" alt="Freedom AI daytime basketball activity">
        <figcaption>白天的篮球活动：运动把新老成员自然地拉到一起。</figcaption>
      </figure>
      <figure class="life-photo">
        <img src="/assets/img/freedomai-2026/life/basketball-night-court.jpg" alt="Freedom AI night basketball activity">
        <figcaption>晚间球场：高强度研究之外，也要保持身体的节奏。</figcaption>
      </figure>
      <figure class="life-photo">
        <img src="/assets/img/freedomai-2026/life/rooftop-night-gathering.jpg" alt="Freedom AI rooftop night gathering">
        <figcaption>露台夜谈：山风、饮料和认真聊天的晚上。</figcaption>
      </figure>
      <figure class="life-photo">
        <img src="/assets/img/freedomai-2026/life/city-night-gathering.jpg" alt="Freedom AI city night gathering">
        <figcaption>城市夜晚的小聚：继续聊项目，也继续聊生活。</figcaption>
      </figure>
      <figure class="life-photo">
        <img src="/assets/img/freedomai-2026/life/seaside-outing.jpg" alt="Freedom AI seaside outing">
        <figcaption>海边出行：把实验室之外的生活也过得明亮。</figcaption>
      </figure>
      <figure class="life-photo life-photo--portrait">
        <img src="/assets/img/freedomai-2026/life/partner-visit-office.jpg" alt="Partner visit and office group photo">
        <figcaption>访问交流：与合作伙伴和前辈面对面沟通。</figcaption>
      </figure>
    </div>
  </section>

  <section class="life-section">
    <h2>Cards, Mahjong and Nights Out</h2>
    <p class="life-section__intro">有些照片不一定是正式活动，却最能说明团队为什么能长期一起做事：坐下来打一局德州扑克，围着麻将桌休息一会儿，或者在篝火旁把科研之外的话也聊开。</p>
    <div class="life-gallery">
      <figure class="life-photo life-photo--wide">
        <img src="/assets/img/freedomai-2026/life/table-games-mahjong-room.jpg" alt="Texas Hold'em and table games with Freedom AI members">
        <figcaption>德州扑克和桌游时间：策略、判断和聊天都在同一张桌子上。</figcaption>
      </figure>
      <figure class="life-photo">
        <img src="/assets/img/freedomai-2026/life/mahjong-table.jpg" alt="Mahjong table during a Freedom AI gathering">
        <figcaption>麻将桌上的短暂休息：轻松一点，想法也会流动起来。</figcaption>
      </figure>
      <figure class="life-photo">
        <img src="/assets/img/freedomai-2026/life/outdoor-retreat-meal-prep.jpg" alt="Outdoor retreat meal preparation">
        <figcaption>户外团建：一起准备晚餐的过程也是团队合作。</figcaption>
      </figure>
      <figure class="life-photo life-photo--wide">
        <img src="/assets/img/freedomai-2026/life/bonfire.jpg" alt="Freedom AI bonfire gathering">
        <figcaption>篝火晚会：围坐下来以后，科研和人生都可以慢慢聊。</figcaption>
      </figure>
    </div>
  </section>

  <section class="life-section">
    <h2>Classic Moments</h2>
    <div class="life-gallery">
      <figure class="life-photo life-photo--wide">
        <img src="/assets/img/freedomai-2026/life/dialogue.jpg" alt="Freedom AI academic dialogue">
        <figcaption>与大师对话：面对面交流，打开新的研究视野。</figcaption>
      </figure>
      <figure class="life-photo">
        <img src="/assets/img/freedomai-2026/life/night-gathering.jpg" alt="Freedom AI night gathering">
        <figcaption>促膝夜谈：分享科研心得，也交换生活感悟。</figcaption>
      </figure>
      <figure class="life-photo">
        <img src="/assets/img/freedomai-2026/life/basketball.jpg" alt="Freedom AI basketball activity">
        <figcaption>篮球活动：和年轻研究者一起 play harder。</figcaption>
      </figure>
    </div>
  </section>

</div>
