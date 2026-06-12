---
layout: distill
title: "Open Medical AI Infrastructure: 让通用医疗智能成为公共责任"
date: 2026-06-13
description: "FreedomAI 倡议把 Generalist Medical AI 从单模型竞赛推进为开放、专家共治、可审计、面向真实医疗场景的社会基础设施。"
tags: medical-llm medical-benchmark biomedical-ai open-source evaluation

authors:
  - name: FreedomAI Lab
    url: "https://freedomintelligence.github.io/"
    affiliations:
      name: CUHKSZ

toc:
  - name: 医疗 AI 的真正难题
  - name: 倡议的核心
  - name: 四层基础设施
  - name: 我们为什么必须认真
  - name: 加入这件事

_styles: >
  .open-med-lead {
    border-left: 4px solid #0f766e;
    color: var(--global-text-color);
    font-size: 1.05rem;
    line-height: 1.85;
    margin: 1.2rem 0 1.6rem;
    padding: 0.25rem 0 0.25rem 1rem;
  }

  .open-med-callout {
    background: color-mix(in srgb, var(--global-theme-color) 8%, var(--global-bg-color));
    border: 1px solid color-mix(in srgb, var(--global-theme-color) 22%, var(--global-divider-color));
    border-radius: 8px;
    margin: 1.25rem 0;
    padding: 1rem 1.1rem;
  }

  .open-med-callout strong {
    color: var(--global-theme-color);
    display: block;
    font-size: 0.95rem;
    letter-spacing: 0;
    margin-bottom: 0.35rem;
  }

  .open-med-pillars {
    display: grid;
    gap: 0.9rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin: 1.2rem 0 1.5rem;
  }

  .open-med-pillar {
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    padding: 1rem;
  }

  .open-med-pillar h3 {
    font-size: 1rem;
    margin: 0 0 0.45rem;
  }

  .open-med-pillar p {
    color: var(--global-text-color);
    font-size: 0.95rem;
    line-height: 1.65;
    margin: 0;
  }

  .open-med-actions {
    border-top: 1px solid var(--global-divider-color);
    display: grid;
    gap: 0.8rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-top: 1.3rem;
    padding-top: 1rem;
  }

  .open-med-actions span {
    color: var(--global-text-color-light);
    display: block;
    font-size: 0.88rem;
    line-height: 1.55;
  }

  @media (max-width: 700px) {
    .open-med-pillars,
    .open-med-actions {
      grid-template-columns: 1fr;
    }
  }
---

<p class="open-med-lead">
医疗 AI 不是“再发布一个更大的模型”。它面对的是人的疼痛、等待、误诊风险、医疗资源不均等，以及每一次真实临床决策背后的责任。FreedomAI 正在发起 Open Medical AI Infrastructure 倡议：把通用医疗智能建设成开放、专家共治、可审计、可持续演进的公共基础设施。
</p>

## 医疗 AI 的真正难题

今天的 Generalist Medical AI (GMAI) 已经能够读病历、看影像、理解多轮问诊、调用工具、生成诊疗建议和医学解释。但在医疗场景里，“更强的模型”并不自动等于“更可信的医疗智能”。真正稀缺的不是某一个模型参数规模，而是被医疗体系分散保存的高质量数据、专家经验、临床反馈和治理机制。

医院有纵向病程和真实工作流，基层机构有公共卫生和慢病管理经验，医学中心有高水平专科知识，患者群体有长期体验与可用性反馈，研究机构有评测和建模能力。这些资源天然分散，并且受到隐私、安全、伦理、许可、责任归属等边界约束。它们不能被简单地集中收集，也不应该被少数封闭系统独占。

{% include figure.html path="assets/img/freedomai-2026/blog/open-medical-ai/sleeping-medical-data.png" class="img-fluid rounded z-depth-0" zoomable=true caption="Sleeping medical data: 高价值医疗数据和专家知识大部分沉在水面之下。真正的问题不是有没有数据，而是如何让它们在隐私、许可、专家审查和公共利益的框架下被发现、连接、验证和使用。" %}

这就是“沉睡的医疗数据”问题。它提醒我们：医疗 AI 的基础不只是公开数据和排行榜，而是能让医院、医生、患者、研究者、公共卫生系统和产业伙伴共同参与的基础设施。

## 倡议的核心

我们的核心主张很直接：GMAI 不能被理解为单纯的 model-scaling race。医疗智能需要一个缺失的中间层，把上层通用医学模型与下层专科模型、临床工具、本地流程和真实医疗环境连接起来。

这个中间层不是一个新的封闭平台，而是一套开放、社区治理、专家背书的基础设施。它要回答四个问题：

- 哪些医疗资源可以被发现、复用和负责任地共享？
- 哪些模型和系统在临床意义上可信，而不只是答题准确？
- 哪些工具、接口和部署流程可以被审计、授权和持续改进？
- 哪个共同体来维护标准、教育新人、资助公共项目，并对长期风险负责？

<div class="open-med-callout">
  <strong>一句话总结</strong>
  Open Medical AI Infrastructure 要把医疗 AI 从“模型能力展示”推进到“共同体可治理的医疗基础设施”。它既需要 serious research，也需要 real community。
</div>

{% include figure.html path="assets/img/freedomai-2026/blog/open-medical-ai/gmai-framework.png" class="img-fluid rounded z-depth-0" zoomable=true caption="The Framework of GMAI: 通用医疗模型、专科模型与临床工具之间需要一个 community-governed infrastructure。这个缺失层由资源、信任、部署和共同体生态四部分组成。" %}

## 四层基础设施

<div class="open-med-pillars">
  <div class="open-med-pillar">
    <h3>1. Resource Infrastructure</h3>
    <p>建设可发现、可引用、可治理的医疗资源层，包括 PatientHub / Cohort Commons、证据百科、开放模型与数据目录，以及 Open GMAI License。目标不是粗暴集中数据，而是在清晰许可、脱敏、溯源、用途边界和贡献记录之上，让长期病程、队列资源、临床案例和医学知识能够被共同体负责任地使用。</p>
  </div>
  <div class="open-med-pillar">
    <h3>2. Trust Infrastructure</h3>
    <p>用 Doctor’s Last Exam、专家持续审查、医生反馈、患者可用性反馈和安全案例库，建立“活的”医学评测体系。医疗 AI 不能只看多选题准确率，还必须看诊断推理、分诊、纵向照护、证据引用、工具调用、拒答边界和对真实工作流的适配。</p>
  </div>
  <div class="open-med-pillar">
    <h3>3. Deployment Infrastructure</h3>
    <p>通过 Medical MCP、AI-native HIS、Agentic Hospital 和医疗 API hub，把模型部署变成可审计、可授权、可回滚、有人类确认的系统工程。低风险工具可以自动调用，高风险行为必须经过明确许可和专家复核。真正的医疗智能应该能在真实流程中被测试，而不是只存在于 demo 页面里。</p>
  </div>
  <div class="open-med-pillar">
    <h3>4. Community Ecosystem</h3>
    <p>围绕 Happy Medical AI、医学 AI 教育、标注 fellowship、医院试点、创业基金和区域社区，形成长期维护公共基础设施的共同体。医疗 AI 的能力建设不能只服务少数技术团队，也应该让医生、医学生、患者组织、基层公共卫生人员和开发者都能理解、评测、使用和贡献。</p>
  </div>
</div>

## 我们为什么必须认真

医疗是 AI 最应该谦卑的领域之一。一个系统在论文表格里多几个百分点，不能自动转化为对患者安全的承诺；一个模型能流利回答医学问题，也不能自动获得临床部署的资格。越是接近真实医疗，越要把透明评测、专家复核、证据追踪、权限控制、审计日志、伦理许可和部署后反馈放在核心位置。

这也是 FreedomAI 对这件事的社会责任感。我们相信 AI 可以帮助缓解医疗资源不均，让基层医生获得更强的知识支持，让患者更早理解自己的风险，让医学教育更开放，让公共卫生系统更快响应复杂需求。但这种希望不能建立在不可解释、不可监督、不可共享的黑箱之上。

所以这项倡议不是宣称“AI 已经解决医疗”，而是承认医疗 AI 仍然需要漫长、严肃、共同体驱动的建设。我们需要让研究者愿意做基础设施，医生愿意参与评测，医院愿意贡献真实反馈，产业愿意把部分能力投入开放生态，政策制定者愿意支持负责任的试点和治理。

<div class="open-med-callout">
  <strong>我们的边界</strong>
  这是一个研究议程和行动倡议，不是已经被充分验证的临床解决方案。越是面向医疗，我们越应该把谨慎、审计和共同体治理写进系统设计本身。
</div>

## 加入这件事

Open Medical AI Infrastructure 需要很多种贡献，而不只需要训练模型的人。

- 机器学习研究者可以贡献医学评测协议、开放模型、工具调用框架、安全红队方法和可复现实验。
- 医生、医学教师和医院可以共同设计 Doctor’s Last Exam，提供去标识化案例、工作流反馈和专家审查。
- 医疗机构和公共卫生系统可以参与 PatientHub、队列资源和部署试点，把真实需求变成可治理的基础设施问题。
- 产业伙伴和创业团队可以把工具接入 Medical MCP，公开 schema、适用边界、验证状态和风险等级。
- 医学生、患者组织和开发者社区可以参与 Happy Medical AI，把医学 AI 教育、标注、评测和本地化带到更多地区。

<div class="open-med-actions">
  <span><strong>Build resources.</strong><br>让沉睡的数据、案例、工具和医学知识被发现、被许可、被追踪。</span>
  <span><strong>Build trust.</strong><br>让评测从静态 benchmark 走向专家共治、持续更新、面向真实安全问题。</span>
  <span><strong>Build community.</strong><br>让医疗 AI 成为共同体长期维护的公共能力，而不是短期模型竞赛。</span>
</div>

如果通用医疗智能真的要进入医院、基层、公共卫生和医学教育，它就必须以公共责任的方式被建造。FreedomAI 希望和更多临床专家、研究者、医院、企业、政策伙伴和开源社区一起，把开放医疗 AI 基础设施变成一件可以被长期信任的事情。
