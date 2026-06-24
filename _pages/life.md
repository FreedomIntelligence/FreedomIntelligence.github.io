---
layout: page
title: Life
title_zh: 生活
permalink: /life/
description: "Work hard and play harder at Freedom AI."
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
      <div class=”life-eyebrow”><span class=”life-tagline-highlight”>Work hard and play harder</span> at Freedom AI.</div>
      <h2><span data-lang=”en”>Freedom begins with people who still love life.</span><span data-lang=”zh”>自由，从热爱生活的人开始。</span></h2>
      <p><span data-lang=”en”>Freedom AI believes that “when everyone fights for their own freedom, they are fighting for the freedom of all society.” We encourage members to fight for the AI truths they believe in, and to do research driven by passion and freedom.</span><span data-lang=”zh”>Freedom AI 秉承”每个人争取自己的自由，就是争取整个社会的自由”。我们鼓励成员为自己信仰的 AI 真理而战，为热爱和自由而做研究。</span></p>
      <p><strong>Free humanity from the boundaries of life through AI.</strong></p>
    </div>
  </section>

  <section class="life-section">
    <h2><span data-lang="en">Group Culture</span><span data-lang="zh">团队文化</span></h2>
    <p class="life-section__intro"><span data-lang="en">Top research is not a solitary grind. We want a lab with both high-intensity exploration and sports, discussion, mutual support, and real relaxation.</span><span data-lang="zh">顶级科研不是苦大仇深的孤军奋战。我们希望实验室既有高强度的探索，也有运动、讨论、互助和真实生活里的松弛感。</span></p>
    <div class="life-values">
      <div class="life-value">
        <h3><span data-lang="en">Free Exploration</span><span data-lang="zh">自由探索</span></h3>
        <p><span data-lang="en">We encourage members to choose problems they truly believe in and pursue AI research with long-term value.</span><span data-lang="zh">鼓励成员选择真正相信的问题，做有长期价值的 AI 研究。</span></p>
      </div>
      <div class="life-value">
        <h3><span data-lang="en">Senior Mentoring</span><span data-lang="zh">以老带新</span></h3>
        <p><span data-lang="en">Senior students and junior researchers collaborate closely, helping newcomers develop research taste quickly.</span><span data-lang="zh">高年级同学和年轻研究者紧密协作，帮助新人快速建立研究品味。</span></p>
      </div>
      <div class="life-value">
        <h3><span data-lang="en">Real Deployment</span><span data-lang="zh">真实落地</span></h3>
        <p><span data-lang="en">Beyond papers, we value open-source systems, medical deployment, startups, and industry collaboration.</span><span data-lang="zh">论文之外，也重视开源系统、医疗部署、创业和产业合作。</span></p>
      </div>
      <div class="life-value">
        <h3><span data-lang="en">Love Life</span><span data-lang="zh">热爱生活</span></h3>
        <p><span data-lang="en">Basketball, football, badminton, team outings, and night talks keep the team energized and in sync.</span><span data-lang="zh">篮球、足球、羽毛球、团建和夜谈，让团队保持能量和默契。</span></p>
      </div>
    </div>
  </section>

  <section class="life-section">
    <h2><span data-lang="en">Recent Life Moments</span><span data-lang="zh">近期生活记录</span></h2>
    <p class="life-section__intro"><span data-lang="en">Freedom AI beyond research — courts, Open Days, project showcases, interviews, and face-to-face exchanges make up our daily life. These photos are best suited for the Life page gallery, and the wider shots are also selected for the home page carousel.</span><span data-lang="zh">科研之外的 Freedom AI，是球场、Open Day、项目展示、访谈和面对面交流共同组成的日常。下面这些照片更适合组成 Life 页面相册，其中横图也会挑选进入首页轮播。</span></p>
    <div class="life-gallery">
      <figure class="life-photo life-photo--wide">
        <img src="/assets/img/freedomai-2026/life/slai-ccf-campus-night.jpg" alt="CCF community event at Shenzhen Loop Area Institute">
        <figcaption><span data-lang="en">CCF at Shenzhen Loop Area Institute: open campus exchange and community connection.</span><span data-lang="zh">CCF 走进深圳河套学院：开放的校园交流与社区连接。</span></figcaption>
      </figure>
      <figure class="life-photo life-photo--wide">
        <img src="/assets/img/freedomai-2026/life/football.png" alt="Freedom AI football on a rainy court">
        <figcaption><span data-lang="en">Football in the rain: a wet court, people who keep running, and very real team energy.</span><span data-lang="zh">雨中足球：湿润的球场、继续奔跑的人和很真实的团队能量。</span></figcaption>
      </figure>
      <figure class="life-photo">
        <img src="/assets/img/freedomai-2026/life/open-day-registration.jpg" alt="Open Day registration and consultation area">
        <figcaption><span data-lang="en">Open Day on-site: registration, consultation, and exchanges happen naturally.</span><span data-lang="zh">Open Day 现场：报名、咨询和交流自然发生。</span></figcaption>
      </figure>
      <figure class="life-photo">
        <img src="/assets/img/freedomai-2026/life/open-day-talk.jpg" alt="Freedom AI Open Day talk">
        <figcaption><span data-lang="en">Open Day talk: bringing projects, ideas, and new students into the same space.</span><span data-lang="zh">Open Day 分享：把项目、想法和新同学带到同一个空间。</span></figcaption>
      </figure>
      <figure class="life-photo life-photo--portrait">
        <img src="/assets/img/freedomai-2026/life/project-demo-discussion.jpg" alt="Project demo discussion with students">
        <figcaption><span data-lang="en">Project exchange: explaining system design and research ideas to students.</span><span data-lang="zh">项目交流：面向同学讲解系统设计和研究思路。</span></figcaption>
      </figure>
      <figure class="life-photo">
        <img src="/assets/img/freedomai-2026/life/livestream-setup.jpg" alt="Livestream interview setup">
        <figcaption><span data-lang="en">Livestream and interviews: telling the lab's story to a broader community.</span><span data-lang="zh">直播与访谈：把实验室故事讲给更大的社区。</span></figcaption>
      </figure>
      <figure class="life-photo life-photo--wide">
        <img src="/assets/img/freedomai-2026/life/basketball-day-layup.jpg" alt="Freedom AI daytime basketball activity">
        <figcaption><span data-lang="en">Daytime basketball: sports naturally bring old and new members together.</span><span data-lang="zh">白天的篮球活动：运动把新老成员自然地拉到一起。</span></figcaption>
      </figure>
      <figure class="life-photo">
        <img src="/assets/img/freedomai-2026/life/basketball-night-court.jpg" alt="Freedom AI night basketball activity">
        <figcaption><span data-lang="en">Night court: keeping a physical rhythm alongside high-intensity research.</span><span data-lang="zh">晚间球场：高强度研究之外，也要保持身体的节奏。</span></figcaption>
      </figure>
      <figure class="life-photo">
        <img src="/assets/img/freedomai-2026/life/rooftop-night-gathering.jpg" alt="Freedom AI rooftop night gathering">
        <figcaption><span data-lang="en">Rooftop night talks: mountain breeze, drinks, and evenings of serious conversation.</span><span data-lang="zh">露台夜谈：山风、饮料和认真聊天的晚上。</span></figcaption>
      </figure>
      <figure class="life-photo">
        <img src="/assets/img/freedomai-2026/life/city-night-gathering.jpg" alt="Freedom AI city night gathering">
        <figcaption><span data-lang="en">City night gathering: continuing to talk about projects and life.</span><span data-lang="zh">城市夜晚的小聚：继续聊项目，也继续聊生活。</span></figcaption>
      </figure>
      <figure class="life-photo">
        <img src="/assets/img/freedomai-2026/life/seaside-outing.jpg" alt="Freedom AI seaside outing">
        <figcaption><span data-lang="en">Seaside outing: keeping life bright beyond the lab.</span><span data-lang="zh">海边出行：把实验室之外的生活也过得明亮。</span></figcaption>
      </figure>
      <figure class="life-photo life-photo--portrait">
        <img src="/assets/img/freedomai-2026/life/partner-visit-office.jpg" alt="Partner visit and office group photo">
        <figcaption><span data-lang="en">Partner visit: face-to-face communication with collaborators and seniors.</span><span data-lang="zh">访问交流：与合作伙伴和前辈面对面沟通。</span></figcaption>
      </figure>
    </div>
  </section>

  <section class="life-section">
    <h2><span data-lang="en">Cards, Mahjong and Nights Out</span><span data-lang="zh">桌游、麻将与夜聚</span></h2>
    <p class="life-section__intro"><span data-lang="en">Some photos are not from formal events, yet best explain why the team can work together long-term: sitting down for a round of Texas Hold'em, resting around the mahjong table, or opening up around a bonfire about things beyond research.</span><span data-lang="zh">有些照片不一定是正式活动，却最能说明团队为什么能长期一起做事：坐下来打一局德州扑克，围着麻将桌休息一会儿，或者在篝火旁把科研之外的话也聊开。</span></p>
    <div class="life-gallery">
      <figure class="life-photo life-photo--wide">
        <img src="/assets/img/freedomai-2026/life/table-games-mahjong-room.jpg" alt="Texas Hold'em and table games with Freedom AI members">
        <figcaption><span data-lang="en">Texas Hold'em and table games: strategy, judgment, and conversation all at the same table.</span><span data-lang="zh">德州扑克和桌游时间：策略、判断和聊天都在同一张桌子上。</span></figcaption>
      </figure>
      <figure class="life-photo">
        <img src="/assets/img/freedomai-2026/life/mahjong-table.jpg" alt="Mahjong table during a Freedom AI gathering">
        <figcaption><span data-lang="en">A short break at the mahjong table: relax a little, and ideas start flowing.</span><span data-lang="zh">麻将桌上的短暂休息：轻松一点，想法也会流动起来。</span></figcaption>
      </figure>
      <figure class="life-photo">
        <img src="/assets/img/freedomai-2026/life/outdoor-retreat-meal-prep.jpg" alt="Outdoor retreat meal preparation">
        <figcaption><span data-lang="en">Outdoor retreat: preparing dinner together is also teamwork.</span><span data-lang="zh">户外团建：一起准备晚餐的过程也是团队合作。</span></figcaption>
      </figure>
      <figure class="life-photo life-photo--wide">
        <img src="/assets/img/freedomai-2026/life/bonfire.jpg" alt="Freedom AI bonfire gathering">
        <figcaption><span data-lang="en">Bonfire gathering: once seated, research and life can both be talked through slowly.</span><span data-lang="zh">篝火晚会：围坐下来以后，科研和人生都可以慢慢聊。</span></figcaption>
      </figure>
    </div>
  </section>

  <section class="life-section">
    <h2><span data-lang="en">Classic Moments</span><span data-lang="zh">经典时刻</span></h2>
    <div class="life-gallery">
      <figure class="life-photo life-photo--wide">
        <img src="/assets/img/freedomai-2026/life/dialogue.jpg" alt="Freedom AI academic dialogue">
        <figcaption><span data-lang="en">Dialogue with masters: face-to-face exchange that opens new research horizons.</span><span data-lang="zh">与大师对话：面对面交流，打开新的研究视野。</span></figcaption>
      </figure>
      <figure class="life-photo">
        <img src="/assets/img/freedomai-2026/life/night-gathering.jpg" alt="Freedom AI night gathering">
        <figcaption><span data-lang="en">Late-night talks: sharing research insights and exchanging life reflections.</span><span data-lang="zh">促膝夜谈：分享科研心得，也交换生活感悟。</span></figcaption>
      </figure>
      <figure class="life-photo">
        <img src="/assets/img/freedomai-2026/life/basketball.jpg" alt="Freedom AI basketball activity">
        <figcaption><span data-lang="en">Basketball activity: play harder with young researchers.</span><span data-lang="zh">篮球活动：和年轻研究者一起 play harder。</span></figcaption>
      </figure>
    </div>
  </section>

</div>
