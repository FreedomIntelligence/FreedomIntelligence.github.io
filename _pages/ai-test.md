---
layout: page
title: One-Week AI Build
title_zh: 一周 AI 项目测试
permalink: /ai-test/
description: Build something useful. Show how AI amplifies your productivity.
description_zh: 做一个有用的项目，展示 AI 如何提升你的生产力。
nav: false
---

<link rel="stylesheet" href="{{ '/assets/css/join-us.css' | relative_url }}">

<div class="join-page">
  <p class="join-lede"><span data-lang="en">Before joining us, you can take an optional, roughly one-week challenge: use AI to build something interesting and genuinely useful. Choose your own problem and tools, and deliver a working project. Show what one person with AI can accomplish.</span><span data-lang="zh">加入我们之前，可以做一个约一周的小测试：用 AI 做一个好玩、真正有用的项目。题目和工具自选，交付可运行的成果，展示一个人借助 AI 能完成多大的工作量。</span></p>

  <section class="join-section">
    <h2><span data-lang="en">What to show</span><span data-lang="zh">我们想看什么</span></h2>
    <ul class="join-list">
      <li><span data-lang="en">A useful result: a working core workflow, with a demo and evidence that it works.</span><span data-lang="zh">有用的成果：完成一个核心流程，提供演示和可核验的结果。</span></li>
      <li><span data-lang="en">Effective use of AI: record tools, model versions, costs, and total human time, including collaborators and outsourced work.</span><span data-lang="zh">使用 AI 的能力：记录工具、模型版本、费用，以及包含合作与外包在内的总人工时间。</span></li>
      <li><span data-lang="en">A credible productivity estimate: how many person-months would the same deliverable take without generative AI? Break it into tasks and state what you reused.</span><span data-lang="zh">可信的生产力提升：不用生成式 AI，同等成果需要多少人月？按任务拆解，并说明复用了什么、你新增了什么。</span></li>
    </ul>
  </section>

  <section class="join-section">
    <h2><span data-lang="en">Four directions to explore</span><span data-lang="zh">四个参考方向</span></h2>
    <div class="join-grid">
      <div class="join-card">
        <h3><a href="https://github.com/FareedKhan-dev/kimi-k3-in-c"><span data-lang="en">Low-memory model inference</span><span data-lang="zh">小内存运行大模型</span></a></h3>
        <p><span data-lang="en">Build a C inference engine with disk streaming; measure memory, speed, and output consistency. Estimated non-AI effort: <strong>3–8 person-months</strong>, excluding model training.</span><span data-lang="zh">用 C 实现推理和磁盘流式加载，验证内存、速度与输出一致性。无 AI 估算：<strong>3–8 人月</strong>，不含模型训练。</span></p>
      </div>
      <div class="join-card">
        <h3><a href="https://dentalvista.github.io/"><span data-lang="en">Interactive 3D dental teaching</span><span data-lang="zh">交互式 3D 口腔教学</span></a></h3>
        <p><span data-lang="en">Explore jaws, teeth, and tissues in a browser, with rotation, layers, and annotations. Estimated effort: <strong>2–5 person-months</strong>, assuming suitable base models already exist.</span><span data-lang="zh">在浏览器中探索颌骨、牙齿和组织，支持旋转、分层与教学标注。无 AI 估算：<strong>2–5 人月</strong>，前提是已有可用的基础模型素材。</span></p>
      </div>
      <div class="join-card">
        <h3><a href="https://nlp-course-cuhksz.github.io/lecture10.html#p1-s1"><span data-lang="en">Slides into an interactive course</span><span data-lang="zh">课件变成交互课程</span></a></h3>
        <p><span data-lang="en">Turn existing slides into narration, synchronized playback, and exercises. Estimated effort: <strong>0.5–1.5 person-months per lecture</strong>; roughly 5–15 for 10–12 lectures sharing a player.</span><span data-lang="zh">基于已有 slides 制作讲解、同步翻页和互动练习。无 AI 估算：<strong>每讲 0.5–1.5 人月</strong>；10–12 讲共用播放器，整门约 5–15 人月。</span></p>
      </div>
      <div class="join-card">
        <h3><a href="https://arxiv.org/abs/2605.29486"><span data-lang="en">Verifiable mock apps</span><span data-lang="zh">可验证的模拟 App</span></a></h3>
        <p><span data-lang="en">Recreate task-relevant app interactions with resettable states and automated checks, as in PhoneWorld. Estimated effort: <strong>20–50 person-months for 34 apps</strong>, excluding full commercial backends and model training.</span><span data-lang="zh">参考 PhoneWorld，复现任务所需的 App 交互，支持状态重置和自动验收。无 AI 估算：<strong>34 个 App 约 20–50 人月</strong>，不含完整商业后台和模型训练。</span></p>
      </div>
    </div>
    <p class="join-lede"><span data-lang="en">These are rough engineering estimates, not the authors' recorded effort or claims that the projects took one week. Assume experienced developers and the same available frameworks and assets. One person-month = 20 working days. Choose a manageable scope; usefulness and reliability matter more than a large estimate.</span><span data-lang="zh">以上是工程粗估，并非作者实际工时，也不代表这些项目均在一周内完成。基线为熟练开发者使用同样可用的框架与素材，1 人月按 20 个工作日计。请选择一周内可完成的范围；实用性与可靠性比数字大更重要。</span></p>
  </section>

  <section class="join-section join-contact">
    <h2><span data-lang="en">How to submit</span><span data-lang="zh">如何提交</span></h2>
    <p><span data-lang="en">Email <a href="mailto:wangbenyou@cuhk.edu.cn">wangbenyou@cuhk.edu.cn</a> with the subject <strong>AI Test | Name | Position | Project</strong>. Include:</span><span data-lang="zh">发送至 <a href="mailto:wangbenyou@cuhk.edu.cn">wangbenyou@cuhk.edu.cn</a>，主题：<strong>AI Test｜姓名｜申请岗位｜项目名</strong>。附上：</span></p>
    <ul class="join-list">
      <li><span data-lang="en">Demo or reproducible repository, plus a 2–3 minute walkthrough.</span><span data-lang="zh">在线 Demo 或可复现代码仓库，加一段 2–3 分钟演示。</span></li>
      <li><span data-lang="en">One page covering results, your contribution, AI tools and costs, actual human time, the non-AI effort breakdown, and limitations.</span><span data-lang="zh">一页说明：成果、个人贡献、AI 工具与费用、实际人工时间、无 AI 所需人月的拆解，以及当前局限。</span></li>
      <li><span data-lang="en">Your CV and the position you are applying for.</span><span data-lang="zh">简历及申请方向。</span></li>
    </ul>
    <a class="join-button" href="{{ '/join-us/' | relative_url }}"><span data-lang="en">View open positions</span><span data-lang="zh">查看招募信息</span></a>
  </section>
</div>
