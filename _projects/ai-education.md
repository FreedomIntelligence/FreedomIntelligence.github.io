---
layout: page
title: AI Education
title_zh: AI 教育
direction: ai-applications
description: LLM agents as tutors, learners, user simulators, and standardized patients for scalable, feedback-rich education.
description_zh: 让大模型智能体扮演导师、学习者、用户模拟器和标准化病人，实现可规模化、反馈丰富的教育。
img: assets/img/media-roundup-2026/socratic-pipeline.png
importance: 10
category: work
github: https://github.com/FreedomIntelligence/PlatoLM
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div data-lang="en">

<div class="impact-kicker">Education agents and learning simulation</div>

<div class="impact-tags">
  <span class="impact-tag">AI Education</span>
  <span class="impact-tag">Socratic learning</span>
  <span class="impact-tag">User simulation</span>
  <span class="impact-tag">Self-regulated learning</span>
  <span class="impact-tag">AI standardized patients</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://github.com/FreedomIntelligence/PlatoLM" target="_blank" rel="noopener">PlatoLM</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/EasyMED" target="_blank" rel="noopener">EasyMED</a>
  <a class="impact-action secondary" href="/projects/medical-education-standardized-patients/">AI Patients</a>
  <a class="impact-action secondary" href="/projects/human-agent-interaction/">Human-Agent Interaction</a>
  <a class="impact-action secondary" href="/projects/">All Projects</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/media-roundup-2026/socratic-pipeline.png" alt="Socratic dialogue and education agent pipeline">
</div>

<p class="impact-lede">
AI Education studies how LLM agents can become scalable tutors, learners, simulators, and standardized patients. The focus is educational interaction: models should ask useful questions, provide learner-aware feedback, support repeated practice, and make learning outcomes easier to evaluate.
</p>

<section class="impact-section">
  <h2>Background and Motivation</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>Education needs interaction, not just answers</strong>
      <p>A strong educational model should probe understanding, adapt to learners, guide reflection, and create practice loops rather than only deliver final responses.</p>
    </div>
    <div class="impact-card">
      <strong>Scalable practice is still scarce</strong>
      <p>Teachers, tutors, and standardized patients are difficult to scale across repeated sessions, diverse cases, and individualized feedback needs.</p>
    </div>
    <div class="impact-card">
      <strong>Evaluation should follow learning behavior</strong>
      <p>Educational AI should be judged by whether it improves question asking, self-regulation, communication, reasoning, and confidence under realistic interaction.</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Research Storyline</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>Simulate</span>
      <div><strong>Use LLMs as interactive users and learners</strong><p>User simulators create controllable multi-turn partners that can teach dialogue models, stress-test systems, and generate richer learning signals.</p></div>
    </div>
    <div class="impact-step">
      <span>Question</span>
      <div><strong>Teach through Socratic dialogue</strong><p>PlatoLM and Socratic-style data construction turn questioning, clarification, and guided reasoning into a training signal for multi-round dialogue.</p></div>
    </div>
    <div class="impact-step">
      <span>Coach</span>
      <div><strong>Support self-regulated learning</strong><p>SRLAgent explores how LLM assistance and gamified feedback can help learners plan, monitor, and reflect on their own study process.</p></div>
    </div>
    <div class="impact-step">
      <span>Practice</span>
      <div><strong>Build AI standardized patients</strong><p>EasyMED and SPBench make clinical communication training repeatable, controllable, and measurable for medical learners.</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Representative Work</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>SRL</span>
      <div><strong>SRLAgent: Enhancing Self-Regulated Learning Skills through Gamification and LLM Assistance</strong><p>Builds an LLM-assisted learning system around planning, monitoring, reflection, feedback, and engagement.</p><a href="https://arxiv.org/abs/2506.09968" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>User</span>
      <div><strong>Large Language Model as a User Simulator</strong><p>Frames LLMs as simulated users for interactive dialogue training and evaluation.</p><a href="https://arxiv.org/abs/2308.11534" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>PlatoLM</span>
      <div><strong>PlatoLM: Teaching LLMs in Multi-Round Dialogue via a User Simulator</strong><p>Uses Socratic-style questioning to improve multi-turn dialogue learning.</p><a href="https://openreview.net/forum?id=9nddtu94uX" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>AI-SP</span>
      <div><strong>Human or LLM as Standardized Patients?</strong><p>Introduces EasyMED and SPBench for comparing AI standardized patients with human standardized patients in medical education.</p><a href="https://arxiv.org/abs/2511.14783" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Co-design</span>
      <div><strong>It Talks Like a Patient, But Feels Different</strong><p>Studies how medical learners experience AI standardized patients and what design requirements emerge from real use.</p><a href="https://arxiv.org/abs/2602.05856" target="_blank" rel="noopener">Paper</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Project Clusters</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>Learning companion agents</strong>
      <p>LLM systems that scaffold planning, reflection, formative feedback, and learner engagement.</p>
    </div>
    <div class="impact-card">
      <strong>Socratic dialogue training</strong>
      <p>Question-driven user simulation and data construction for teaching models to handle multi-round educational dialogue.</p>
    </div>
    <div class="impact-card">
      <strong>Medical education simulation</strong>
      <p>AI standardized patients for history taking, communication, empathy, diagnostic reasoning, and structured feedback.</p>
    </div>
    <div class="impact-card">
      <strong>Evaluation-centered education AI</strong>
      <p>Benchmarks and rubrics that connect interaction quality to measurable learning behavior and outcomes.</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Display Figures</h2>
  <div class="impact-gallery">
    <figure>
      <img src="/assets/img/media-roundup-2026/socratic-pipeline.png" alt="Socratic dialogue pipeline">
      <figcaption>Socratic and user-simulation work turns educational interaction into trainable data and evaluation loops.</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/media-roundup-2026/huatuogpt-auto-eval.jpeg" alt="AI standardized patient and medical evaluation">
      <figcaption>Medical education extends the same idea into standardized patient practice and structured learner assessment.</figcaption>
    </figure>
  </div>
</section>

<section class="impact-section">
  <h2>Resource Map</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>PlatoLM</strong>
      <p>Open resources for Socratic-style dialogue training and user-simulator-driven model improvement.</p>
      <a href="https://github.com/FreedomIntelligence/PlatoLM" target="_blank" rel="noopener">Repository</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>SocraticChat</strong>
      <p>Dataset resource behind Socratic dialogue construction and educational multi-turn training.</p>
      <a href="https://huggingface.co/datasets/FreedomIntelligence/SocraticChat" target="_blank" rel="noopener">Dataset</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>EasyMED</strong>
      <p>AI standardized patient framework and medical education evaluation resources.</p>
      <a href="https://github.com/FreedomIntelligence/EasyMED" target="_blank" rel="noopener">Repository</a>
    </div>
  </div>
</section>

<div class="impact-actions">
  <a class="impact-action secondary" href="/projects/">Back to Projects</a>
</div>

</div>

<div data-lang="zh">

<div class="impact-kicker">教育智能体与学习模拟</div>

<div class="impact-tags">
  <span class="impact-tag">AI 教育</span>
  <span class="impact-tag">苏格拉底式学习</span>
  <span class="impact-tag">用户模拟</span>
  <span class="impact-tag">自我调节学习</span>
  <span class="impact-tag">AI 标准化病人</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://github.com/FreedomIntelligence/PlatoLM" target="_blank" rel="noopener">PlatoLM</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/EasyMED" target="_blank" rel="noopener">EasyMED</a>
  <a class="impact-action secondary" href="/projects/medical-education-standardized-patients/">AI 病人</a>
  <a class="impact-action secondary" href="/projects/human-agent-interaction/">人机交互</a>
  <a class="impact-action secondary" href="/projects/">全部项目</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/media-roundup-2026/socratic-pipeline.png" alt="苏格拉底式对话与教育智能体流程">
</div>

<p class="impact-lede">
AI 教育研究如何让大模型智能体成为可规模化的导师、学习者、模拟器和标准化病人。研究重点是教育中的互动：模型要能提出有价值的问题，给出贴合学习者情况的反馈，支持反复练习，并让学习效果更容易评测。
</p>

<section class="impact-section">
  <h2>背景与动机</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>教育需要互动，而不只是答案</strong>
      <p>好的教育模型应当能探查学生的理解程度、适应不同的学习者、引导反思、形成练习闭环，而不是只给出最终答案。</p>
    </div>
    <div class="impact-card">
      <strong>可规模化的练习依然稀缺</strong>
      <p>教师、导师和标准化病人难以规模化，无法满足反复练习、多样案例和个性化反馈的需求。</p>
    </div>
    <div class="impact-card">
      <strong>评测应当关注学习行为</strong>
      <p>评价教育 AI，要看它在真实互动中能否提升学习者的提问、自我调节、沟通、推理和信心。</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>研究脉络</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>模拟</span>
      <div><strong>让大模型扮演交互式的用户和学习者</strong><p>用户模拟器是可控的多轮对话对象，既能用来训练对话模型、对系统做压力测试，也能产生更丰富的学习信号。</p></div>
    </div>
    <div class="impact-step">
      <span>提问</span>
      <div><strong>通过苏格拉底式对话教学</strong><p>PlatoLM 和苏格拉底式数据构建，把提问、澄清和引导式推理变成多轮对话的训练信号。</p></div>
    </div>
    <div class="impact-step">
      <span>辅导</span>
      <div><strong>支持自我调节学习</strong><p>SRLAgent 探索大模型辅助和游戏化反馈如何帮助学习者规划、监控并反思自己的学习过程。</p></div>
    </div>
    <div class="impact-step">
      <span>练习</span>
      <div><strong>构建 AI 标准化病人</strong><p>EasyMED 和 SPBench 让医学生的临床沟通训练可重复、可控制、可度量。</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>代表性工作</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>自我调节</span>
      <div><strong>SRLAgent: Enhancing Self-Regulated Learning Skills through Gamification and LLM Assistance</strong><p>围绕规划、监控、反思、反馈和参与度，构建大模型辅助的学习系统。</p><a href="https://arxiv.org/abs/2506.09968" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>用户</span>
      <div><strong>Large Language Model as a User Simulator</strong><p>把大模型作为模拟用户，用于交互式对话的训练和评测。</p><a href="https://arxiv.org/abs/2308.11534" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>PlatoLM</span>
      <div><strong>PlatoLM: Teaching LLMs in Multi-Round Dialogue via a User Simulator</strong><p>用苏格拉底式提问，提升模型学习多轮对话的效果。</p><a href="https://openreview.net/forum?id=9nddtu94uX" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>AI 病人</span>
      <div><strong>Human or LLM as Standardized Patients?</strong><p>提出 EasyMED 和 SPBench，用于在医学教育中对比 AI 标准化病人与真人标准化病人。</p><a href="https://arxiv.org/abs/2511.14783" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>共创设计</span>
      <div><strong>It Talks Like a Patient, But Feels Different</strong><p>研究医学学习者如何体验 AI 标准化病人，以及真实使用中提出了哪些设计需求。</p><a href="https://arxiv.org/abs/2602.05856" target="_blank" rel="noopener">论文</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>项目分组</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>学习伙伴智能体</strong>
      <p>支持学习者规划、反思、获得形成性反馈并保持参与的大模型系统。</p>
    </div>
    <div class="impact-card">
      <strong>苏格拉底式对话训练</strong>
      <p>以提问驱动的用户模拟和数据构建，教模型应对多轮教学对话。</p>
    </div>
    <div class="impact-card">
      <strong>医学教育模拟</strong>
      <p>AI 标准化病人，用于病史采集、沟通、共情、诊断推理和结构化反馈。</p>
    </div>
    <div class="impact-card">
      <strong>以评测为中心的教育 AI</strong>
      <p>把互动质量与可度量的学习行为及成果联系起来的评测基准和 rubric。</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>图示</h2>
  <div class="impact-gallery">
    <figure>
      <img src="/assets/img/media-roundup-2026/socratic-pipeline.png" alt="苏格拉底式对话流程">
      <figcaption>苏格拉底式对话和用户模拟的工作，把教育互动转化为可训练的数据和评测闭环。</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/media-roundup-2026/huatuogpt-auto-eval.jpeg" alt="AI 标准化病人与医学评测">
      <figcaption>医学教育把同样的思路延伸到标准化病人练习和结构化的学习者评估。</figcaption>
    </figure>
  </div>
</section>

<section class="impact-section">
  <h2>资源导航</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>PlatoLM</strong>
      <p>用于苏格拉底式对话训练、由用户模拟器驱动模型改进的开放资源。</p>
      <a href="https://github.com/FreedomIntelligence/PlatoLM" target="_blank" rel="noopener">代码仓库</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>SocraticChat</strong>
      <p>支撑苏格拉底式对话构建与教育类多轮训练的数据集。</p>
      <a href="https://huggingface.co/datasets/FreedomIntelligence/SocraticChat" target="_blank" rel="noopener">数据集</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>EasyMED</strong>
      <p>AI 标准化病人框架与医学教育评测资源。</p>
      <a href="https://github.com/FreedomIntelligence/EasyMED" target="_blank" rel="noopener">代码仓库</a>
    </div>
  </div>
</section>

<div class="impact-actions">
  <a class="impact-action secondary" href="/projects/">返回项目页</a>
</div>

</div>

</div>
