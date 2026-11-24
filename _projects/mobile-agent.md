---
layout: page
title: Mobile Agent
title_zh: 手机智能体
direction: agentic-ai
description: Benchmarks, environments, safety tests, and training recipes for phone-use agents operating real mobile workflows.
description_zh: 面向真实手机工作流的手机使用智能体：评测基准、环境、安全测试与训练方案。
img: assets/img/media-roundup-2026/phoneharness-overview.png
importance: 0
category: work
github: https://github.com/PhoneHarness/PhoneHarness
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div data-lang="en">

<div class="impact-kicker">Phone-use agents and mobile workflow execution</div>

<div class="impact-tags">
  <span class="impact-tag">Mobile Agent</span>
  <span class="impact-tag">Phone-use agents</span>
  <span class="impact-tag">GUI agents</span>
  <span class="impact-tag">Privacy and safety</span>
  <span class="impact-tag">Agent training</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://phoneharness.github.io/" target="_blank" rel="noopener">PhoneHarness</a>
  <a class="impact-action secondary" href="https://github.com/PhoneHarness/PhoneHarness" target="_blank" rel="noopener">GitHub</a>
  <a class="impact-action secondary" href="https://huggingface.co/datasets/PhoneHarness/phoneharness-bench" target="_blank" rel="noopener">Dataset</a>
  <a class="impact-action secondary" href="/projects/long-context-multimodal/">Long-context MLLMs</a>
  <a class="impact-action secondary" href="/projects/">All Projects</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/media-roundup-2026/phoneharness-overview.png" alt="PhoneHarness mobile agent overview">
</div>

<p class="impact-lede">
Mobile Agent builds the infrastructure, benchmarks, and training recipes for phone-use agents that can operate mobile workflows reliably, privately, and safely. The research line moves beyond screenshot QA toward executable tasks, auditable traces, mixed action spaces, simulated phone environments, and real-app reinforcement learning.
</p>

<section class="impact-section">
  <h2>Background and Motivation</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>Phones are a natural agent arena</strong>
      <p>Daily work already happens across mobile apps, permissions, notifications, files, accounts, and dynamic screens, making phones a realistic testbed for general-purpose agents.</p>
    </div>
    <div class="impact-card">
      <strong>GUI-only evaluation is too narrow</strong>
      <p>Real workflows often require a mixture of GUI interaction, command-line execution, tool calls, state inspection, and verification beyond simple click trajectories.</p>
    </div>
    <div class="impact-card">
      <strong>Success must be safe and private</strong>
      <p>An agent that completes a task while leaking data, overusing permissions, or taking unsafe actions is not deployment-ready.</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Research Storyline</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>Privacy</span>
      <div><strong>Measure whether phone agents respect user data</strong><p>MyPhoneBench reframes phone-agent readiness around permissioned access, minimal disclosure, and user-controlled memory.</p></div>
    </div>
    <div class="impact-step">
      <span>Safety</span>
      <div><strong>Separate safe behavior from incapability</strong><p>PhoneSafety evaluates safety-critical moments and distinguishes safe actions, unsafe actions, and failures to do anything useful.</p></div>
    </div>
    <div class="impact-step">
      <span>World</span>
      <div><strong>Scale controllable phone environments</strong><p>PhoneWorld turns real GUI trajectories and screenshots into reusable environments with executable tasks, state transitions, and verifiers.</p></div>
    </div>
    <div class="impact-step">
      <span>Harness</span>
      <div><strong>Combine GUI, CLI, and tool actions</strong><p>PhoneHarness gives phone agents a mixed-action execution framework with auditable traces and task-level verification.</p></div>
    </div>
    <div class="impact-step">
      <span>Train</span>
      <div><strong>Train open models for real phone use</strong><p>PhoneBuddy combines real-app environments and mock environments so open models can learn robust agentic phone-use behavior.</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Representative Work</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>Privacy</span>
      <div><strong>Do Phone-Use Agents Respect Your Privacy?</strong><p>Introduces MyPhoneBench for evaluating privacy risks in phone-use agents across realistic mobile tasks.</p><a href="https://arxiv.org/abs/2604.00986" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Safety</span>
      <div><strong>Safe, or Simply Incapable?</strong><p>Rethinks safety evaluation by separating genuinely safe choices from unhelpful or failed actions.</p><a href="https://arxiv.org/abs/2605.07630" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Env</span>
      <div><strong>PhoneWorld: Scaling Phone-Use Agent Environments</strong><p>Builds scalable phone-use environments from real GUI traces, controllable screens, executable tasks, and verifiers.</p><a href="https://arxiv.org/abs/2605.29486" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Harness</span>
      <div><strong>PhoneHarness: Harnessing Phone-Use Agents through Mixed GUI, CLI, and Tool Actions</strong><p>Expands agent execution beyond GUI-only actions and evaluates whether mobile workflows are truly completed.</p><a href="https://arxiv.org/abs/2606.14832" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Training</span>
      <div><strong>PhoneBuddy: Training Open Models for Agentic Phone Use</strong><p>Uses real-app and mock phone environments to train open models for stronger agentic phone-use performance.</p><a href="https://arxiv.org/abs/2606.23049" target="_blank" rel="noopener">Paper</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Technical Layers</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>Environment construction</strong>
      <p>Reusable mobile environments make real app workflows controllable, replayable, and measurable.</p>
    </div>
    <div class="impact-card">
      <strong>Mixed action execution</strong>
      <p>Agents can combine GUI operations, CLI commands, and tool calls while leaving traces that humans and verifiers can audit.</p>
    </div>
    <div class="impact-card">
      <strong>Task-level verification</strong>
      <p>Benchmarks judge whether the external phone state changed correctly, not just whether the model produced plausible intermediate actions.</p>
    </div>
    <div class="impact-card">
      <strong>Safety and privacy constraints</strong>
      <p>Evaluation tracks permission use, data disclosure, memory control, unsafe operations, and refusal behavior in mobile settings.</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Display Figures</h2>
  <div class="impact-gallery">
    <figure>
      <img src="/assets/img/media-roundup-2026/phoneharness-overview.png" alt="PhoneHarness overview">
      <figcaption>PhoneHarness evaluates whether mobile agents complete real workflows, not only whether their GUI traces look plausible.</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/media-roundup-2026/phoneharness-architecture.png" alt="PhoneHarness architecture">
      <figcaption>The harness combines GUI, CLI, tool actions, system state, task traces, and verifier signals.</figcaption>
    </figure>
  </div>
</section>

<section class="impact-section">
  <h2>Resource Map</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>PhoneHarness</strong>
      <p>Project site for mixed-action phone-use agent harnessing and benchmark resources.</p>
      <a href="https://phoneharness.github.io/" target="_blank" rel="noopener">Project site</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>PhoneHarness code</strong>
      <p>Open-source implementation for the phone-use harness and evaluation workflow.</p>
      <a href="https://github.com/PhoneHarness/PhoneHarness" target="_blank" rel="noopener">Repository</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>PhoneHarness Bench</strong>
      <p>Dataset release for evaluating phone agents through mixed GUI, CLI, and tool-action traces.</p>
      <a href="https://huggingface.co/datasets/PhoneHarness/phoneharness-bench" target="_blank" rel="noopener">Dataset</a>
    </div>
  </div>
</section>

<div class="impact-actions">
  <a class="impact-action secondary" href="/projects/">Back to Projects</a>
</div>

</div>

<div data-lang="zh">

<div class="impact-kicker">手机使用智能体与移动端工作流执行</div>

<div class="impact-tags">
  <span class="impact-tag">手机智能体</span>
  <span class="impact-tag">手机使用智能体</span>
  <span class="impact-tag">GUI 智能体</span>
  <span class="impact-tag">隐私与安全</span>
  <span class="impact-tag">智能体训练</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://phoneharness.github.io/" target="_blank" rel="noopener">PhoneHarness</a>
  <a class="impact-action secondary" href="https://github.com/PhoneHarness/PhoneHarness" target="_blank" rel="noopener">GitHub</a>
  <a class="impact-action secondary" href="https://huggingface.co/datasets/PhoneHarness/phoneharness-bench" target="_blank" rel="noopener">数据集</a>
  <a class="impact-action secondary" href="/projects/long-context-multimodal/">长上下文多模态大模型</a>
  <a class="impact-action secondary" href="/projects/">全部项目</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/media-roundup-2026/phoneharness-overview.png" alt="PhoneHarness 手机智能体概览">
</div>

<p class="impact-lede">
本项目为手机使用智能体搭建基础设施、评测基准和训练方案，让它们能够可靠、安全地执行手机工作流，并保护用户隐私。这条研究线不止步于截图问答，而是走向可执行的任务、可审计的轨迹、混合动作空间、模拟手机环境，以及真实 App 上的强化学习。
</p>

<section class="impact-section">
  <h2>背景与动机</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>手机是天然的智能体舞台</strong>
      <p>日常工作本来就横跨手机 App、权限、通知、文件、账号和不断变化的界面，因此手机是检验通用智能体的真实试验场。</p>
    </div>
    <div class="impact-card">
      <strong>只评测 GUI 操作远远不够</strong>
      <p>真实工作流往往需要混合使用 GUI 交互、命令行执行、工具调用、状态检查和验证，远不止简单的点击轨迹。</p>
    </div>
    <div class="impact-card">
      <strong>成功必须安全且保护隐私</strong>
      <p>任务完成了，却泄露数据、滥用权限或执行不安全操作的智能体，还不具备部署条件。</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>研究脉络</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>隐私</span>
      <div><strong>衡量手机智能体是否尊重用户数据</strong><p>MyPhoneBench 围绕权限访问、最小披露和用户可控的记忆，重新定义手机智能体的可部署标准。</p></div>
    </div>
    <div class="impact-step">
      <span>安全</span>
      <div><strong>区分安全行为与能力不足</strong><p>PhoneSafety 评测安全攸关的时刻，区分三类结果：安全的行动、不安全的行动，以及什么也没做成的失败。</p></div>
    </div>
    <div class="impact-step">
      <span>环境</span>
      <div><strong>规模化构建可控的手机环境</strong><p>PhoneWorld 把真实的 GUI 轨迹和截图转化为可复用的环境，带有可执行的任务、状态转移和验证器。</p></div>
    </div>
    <div class="impact-step">
      <span>Harness</span>
      <div><strong>融合 GUI、CLI 和工具动作</strong><p>PhoneHarness 为手机智能体提供混合动作的执行框架，轨迹可审计，并支持任务级验证。</p></div>
    </div>
    <div class="impact-step">
      <span>训练</span>
      <div><strong>训练面向真实手机使用的开源模型</strong><p>PhoneBuddy 结合真实 App 环境和模拟环境，让开源模型学到稳健的手机智能体行为。</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>代表性工作</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>隐私</span>
      <div><strong>Do Phone-Use Agents Respect Your Privacy?</strong><p>提出 MyPhoneBench，在真实的手机任务中评测手机智能体的隐私风险。</p><a href="https://arxiv.org/abs/2604.00986" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>安全</span>
      <div><strong>Safe, or Simply Incapable?</strong><p>重新审视安全评测：把真正安全的选择，与无用或失败的行动分开。</p><a href="https://arxiv.org/abs/2605.07630" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>环境</span>
      <div><strong>PhoneWorld: Scaling Phone-Use Agent Environments</strong><p>从真实 GUI 轨迹出发，构建可扩展的手机环境，提供可控的界面、可执行的任务和验证器。</p><a href="https://arxiv.org/abs/2605.29486" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>Harness</span>
      <div><strong>PhoneHarness: Harnessing Phone-Use Agents through Mixed GUI, CLI, and Tool Actions</strong><p>把智能体的执行扩展到纯 GUI 动作之外，并评测手机工作流是否真正完成。</p><a href="https://arxiv.org/abs/2606.14832" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>训练</span>
      <div><strong>PhoneBuddy: Training Open Models for Agentic Phone Use</strong><p>用真实 App 和模拟手机环境训练开源模型，提升它们作为智能体使用手机的表现。</p><a href="https://arxiv.org/abs/2606.23049" target="_blank" rel="noopener">论文</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>技术层次</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>环境构建</strong>
      <p>可复用的手机环境，让真实 App 工作流变得可控、可回放、可度量。</p>
    </div>
    <div class="impact-card">
      <strong>混合动作执行</strong>
      <p>智能体可以组合 GUI 操作、CLI 命令和工具调用，并留下人和验证器都能审计的轨迹。</p>
    </div>
    <div class="impact-card">
      <strong>任务级验证</strong>
      <p>评测基准判断的是手机的外部状态是否发生了正确变化，而不只是模型的中间动作看上去是否合理。</p>
    </div>
    <div class="impact-card">
      <strong>安全与隐私约束</strong>
      <p>评测会追踪手机场景中的权限使用、数据披露、记忆控制、不安全操作和拒绝行为。</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>图示</h2>
  <div class="impact-gallery">
    <figure>
      <img src="/assets/img/media-roundup-2026/phoneharness-overview.png" alt="PhoneHarness 概览">
      <figcaption>PhoneHarness 评测手机智能体是否真正完成了工作流，而不只是看 GUI 轨迹是否合理。</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/media-roundup-2026/phoneharness-architecture.png" alt="PhoneHarness 架构">
      <figcaption>Harness 整合了 GUI、CLI、工具动作、系统状态、任务轨迹和验证器信号。</figcaption>
    </figure>
  </div>
</section>

<section class="impact-section">
  <h2>资源导航</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>PhoneHarness</strong>
      <p>混合动作手机智能体 Harness 与评测资源的项目主页。</p>
      <a href="https://phoneharness.github.io/" target="_blank" rel="noopener">项目主页</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>PhoneHarness 代码</strong>
      <p>手机智能体 Harness 与评测工作流的开源实现。</p>
      <a href="https://github.com/PhoneHarness/PhoneHarness" target="_blank" rel="noopener">代码仓库</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>PhoneHarness Bench</strong>
      <p>用于评测手机智能体的数据集，包含 GUI、CLI 与工具混合动作的轨迹。</p>
      <a href="https://huggingface.co/datasets/PhoneHarness/phoneharness-bench" target="_blank" rel="noopener">数据集</a>
    </div>
  </div>
</section>

<div class="impact-actions">
  <a class="impact-action secondary" href="/projects/">返回项目页</a>
</div>

</div>

</div>
