---
layout: page
title: LLM Reasoning & Agentic RL
title_zh: "大模型推理与智能体强化学习"
direction: agentic-ai
description: Verifiable reasoning, agentic reinforcement learning, policy optimization, path pruning, code-integrated thinking, and multimodal R1-style training.
description_zh: "可验证推理、智能体强化学习、策略优化、路径剪枝、代码集成思考，以及多模态 R1 式训练。"
img: assets/img/research/reasoning-agentic-rl.svg
importance: 8
category: work
github: https://github.com/FreedomIntelligence/ReasoningNLP
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div data-lang="en">

<div class="impact-kicker">Reasoning and agentic RL</div>

<div class="impact-tags">
  <span class="impact-tag">Policy optimization</span>
  <span class="impact-tag">Agentic RL</span>
  <span class="impact-tag">Path pruning</span>
  <span class="impact-tag">Code reasoning</span>
  <span class="impact-tag">Video reasoning</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://wabyking.github.io/" target="_blank" rel="noopener">Benyou Wang papers</a>
  <a class="impact-action secondary" href="/projects/reasoning-math-optimization/">Math and Optimization</a>
  <a class="impact-action secondary" href="/projects/llm-efficiency-ai-infra/">LLM Infra</a>
  <a class="impact-action secondary" href="/projects/">All Projects</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/research/reasoning-agentic-rl.svg" alt="Diagram of the reasoning and agentic RL program: policy optimization, efficient reasoning, code-integrated thinking, and multimodal R1 training around verifiable feedback" width="1200" height="675">
</div>

<p class="impact-lede">
This project organizes papers where reasoning is trained, optimized, pruned, or grounded in executable feedback. The scope covers policy optimization, role-aware agent RL, adaptive compute, code-integrated thinking, and multimodal R1-style learning.
</p>

<section class="impact-section">
  <h2>Research Storyline</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>Optimize</span>
      <div><strong>Move from SFT to policy optimization</strong><p>OnePO and QFFT study how to adapt models more directly, reducing dependence on heavy multi-stage pipelines while preserving exploration.</p></div>
    </div>
    <div class="impact-step">
      <span>Act</span>
      <div><strong>Make RL objectives agent-aware</strong><p>CRPO turns GRPO-style optimization toward role-playing agents, balancing task utility with persona fidelity and style consistency.</p></div>
    </div>
    <div class="impact-step">
      <span>Spend</span>
      <div><strong>Allocate reasoning compute where it matters</strong><p>STOP learns to prune doomed reasoning paths early, making parallel reasoning more accurate under a fixed compute budget.</p></div>
    </div>
    <div class="impact-step">
      <span>Ground</span>
      <div><strong>Ground reasoning in code and perception</strong><p>CoRT and Video-R1 extend reasoning feedback to executable computation and temporal multimodal understanding.</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Paper Trail</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>RL</span>
      <div><strong>OnePO: Direct One-stage Policy Optimization for SFT-free Domain Adaptation</strong><p>Directly optimizes policies for domain adaptation without a separate SFT stage.</p><a href="https://wabyking.github.io/" target="_blank" rel="noopener">Publication list</a></div>
    </div>
    <div class="impact-paper">
      <span>Role</span>
      <div><strong>CRPO: Character-centric Group Relative Policy Optimization</strong><p>Adapts group-relative policy optimization to role-aware reasoning agents.</p><a href="https://arxiv.org/abs/2605.25511" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Adapt</span>
      <div><strong>Question-Free Fine-Tuning</strong><p>Studies efficient and adaptive reasoning fine-tuning for large language models.</p><a href="https://arxiv.org/abs/2506.12860" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Prune</span>
      <div><strong>Cut Your Losses!</strong><p>Learns internal signals that prune low-value reasoning paths early during parallel reasoning.</p><a href="https://arxiv.org/abs/2604.16029" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Code</span>
      <div><strong>CoRT: Code-integrated Reasoning within Thinking</strong><p>Lets models use executable computation as part of the reasoning process.</p><a href="https://arxiv.org/abs/2506.09820" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Video</span>
      <div><strong>Video-R1: Reinforcing Video Reasoning in MLLMs</strong><p>Applies R1-style reinforcement learning to temporal video reasoning in multimodal LLMs.</p><a href="https://arxiv.org/abs/2503.21776" target="_blank" rel="noopener">Paper</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Project Clusters</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>Policy optimization</strong>
      <p>OnePO, CRPO, and QFFT organize RL-style post-training around direct optimization, role fidelity, and efficient adaptation.</p>
    </div>
    <div class="impact-card">
      <strong>Adaptive compute</strong>
      <p>STOP and UPFT focus on spending less compute without losing reasoning quality, especially for long or parallel reasoning traces.</p>
    </div>
    <div class="impact-card">
      <strong>Tool and code grounding</strong>
      <p>CoRT connects reasoning to code execution, making intermediate calculations easier to verify and debug.</p>
    </div>
    <div class="impact-card">
      <strong>Multimodal reasoning RL</strong>
      <p>Video-R1 extends reinforcement learning for reasoning beyond text-only math into temporal video understanding.</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Resource Map</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>STOP / Cut Your Losses</strong>
      <p>Project page for early pruning in efficient parallel reasoning.</p>
      <a href="https://bijiaxihh.github.io/STOP/" target="_blank" rel="noopener">Project page</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>Video-R1</strong>
      <p>Code and datasets for R1-style video reasoning.</p>
      <a href="https://github.com/tulerfeng/Video-R1" target="_blank" rel="noopener">Repository</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>CoRT</strong>
      <p>Code-integrated reasoning resources.</p>
      <a href="https://github.com/ChengpengLi1003/CoRT" target="_blank" rel="noopener">Repository</a>
    </div>
  </div>
</section>

<div class="impact-actions">
  <a class="impact-action secondary" href="/projects/">Back to Projects</a>
</div>

</div>

<div data-lang="zh">

<div class="impact-kicker">推理与智能体强化学习</div>

<div class="impact-tags">
  <span class="impact-tag">策略优化</span>
  <span class="impact-tag">智能体强化学习</span>
  <span class="impact-tag">路径剪枝</span>
  <span class="impact-tag">代码推理</span>
  <span class="impact-tag">视频推理</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://wabyking.github.io/" target="_blank" rel="noopener">王本友论文列表</a>
  <a class="impact-action secondary" href="/projects/reasoning-math-optimization/">数学与运筹优化</a>
  <a class="impact-action secondary" href="/projects/llm-efficiency-ai-infra/">大模型基础设施</a>
  <a class="impact-action secondary" href="/projects/">全部项目</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/research/reasoning-agentic-rl-zh.svg" alt="推理与智能体强化学习路线示意：围绕可验证反馈的策略优化、高效推理、代码集成思考与多模态 R1 训练" width="1200" height="675">
</div>

<p class="impact-lede">
本项目梳理围绕推理能力的一组论文：如何训练和优化推理，如何剪掉低价值的推理路径，以及如何让推理建立在可执行的反馈之上。内容涵盖策略优化、角色感知的智能体强化学习、自适应算力分配、代码集成思考和多模态 R1 式学习。
</p>

<section class="impact-section">
  <h2>研究脉络</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>优化</span>
      <div><strong>从 SFT 走向策略优化</strong><p>OnePO 和 QFFT 探索更直接的模型适配方式，减少对复杂多阶段流程的依赖，同时保留探索能力。</p></div>
    </div>
    <div class="impact-step">
      <span>行动</span>
      <div><strong>让强化学习目标面向智能体</strong><p>CRPO 把 GRPO 式优化引向角色扮演智能体，兼顾任务效用、角色设定的忠实度和风格一致性。</p></div>
    </div>
    <div class="impact-step">
      <span>分配</span>
      <div><strong>把推理算力用在关键处</strong><p>STOP 学会尽早剪掉注定失败的推理路径，让并行推理在固定算力预算下更准确。</p></div>
    </div>
    <div class="impact-step">
      <span>扎根</span>
      <div><strong>让推理扎根于代码与感知</strong><p>CoRT 和 Video-R1 把推理反馈延伸到可执行的计算和时序多模态理解上。</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>论文脉络</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>强化学习</span>
      <div><strong>OnePO: Direct One-stage Policy Optimization for SFT-free Domain Adaptation</strong><p>不经过单独的 SFT 阶段，直接优化策略来完成领域适配。</p><a href="https://wabyking.github.io/" target="_blank" rel="noopener">论文列表</a></div>
    </div>
    <div class="impact-paper">
      <span>角色</span>
      <div><strong>CRPO: Character-centric Group Relative Policy Optimization</strong><p>把组相对策略优化用于角色感知的推理智能体。</p><a href="https://arxiv.org/abs/2605.25511" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>适配</span>
      <div><strong>Question-Free Fine-Tuning</strong><p>研究面向大模型的高效、自适应推理微调。</p><a href="https://arxiv.org/abs/2506.12860" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>剪枝</span>
      <div><strong>Cut Your Losses!</strong><p>学习模型内部信号，在并行推理中尽早剪掉低价值的推理路径。</p><a href="https://arxiv.org/abs/2604.16029" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>代码</span>
      <div><strong>CoRT: Code-integrated Reasoning within Thinking</strong><p>让模型把可执行的计算作为推理过程的一部分。</p><a href="https://arxiv.org/abs/2506.09820" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>视频</span>
      <div><strong>Video-R1: Reinforcing Video Reasoning in MLLMs</strong><p>把 R1 式强化学习用于多模态大模型的时序视频推理。</p><a href="https://arxiv.org/abs/2503.21776" target="_blank" rel="noopener">论文</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>项目分组</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>策略优化</strong>
      <p>OnePO、CRPO 和 QFFT 的强化学习式后训练，分别围绕直接优化、角色忠实度和高效适配展开。</p>
    </div>
    <div class="impact-card">
      <strong>自适应算力分配</strong>
      <p>STOP 和 UPFT 关注如何在不损失推理质量的前提下少花算力，尤其针对长推理轨迹和并行推理轨迹。</p>
    </div>
    <div class="impact-card">
      <strong>工具与代码支撑</strong>
      <p>CoRT 把推理与代码执行连接起来，让中间计算更容易验证和调试。</p>
    </div>
    <div class="impact-card">
      <strong>多模态推理强化学习</strong>
      <p>Video-R1 把推理强化学习从纯文本数学扩展到时序视频理解。</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>资源导航</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>STOP / Cut Your Losses</strong>
      <p>高效并行推理中提前剪枝的项目主页。</p>
      <a href="https://bijiaxihh.github.io/STOP/" target="_blank" rel="noopener">项目主页</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>Video-R1</strong>
      <p>R1 式视频推理的代码与数据集。</p>
      <a href="https://github.com/tulerfeng/Video-R1" target="_blank" rel="noopener">代码仓库</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>CoRT</strong>
      <p>代码集成推理的相关资源。</p>
      <a href="https://github.com/ChengpengLi1003/CoRT" target="_blank" rel="noopener">代码仓库</a>
    </div>
  </div>
</section>

<div class="impact-actions">
  <a class="impact-action secondary" href="/projects/">返回项目页</a>
</div>

</div>

</div>
