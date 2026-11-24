---
layout: page
title: Dental Foundation Models & Benchmarks
title_zh: 牙科大模型与评测基准
direction: ai-applications
description: Dental multimodal LLMs, clinical reasoning benchmarks, expert-calibrated dental evaluation, and OmniDentBench.
description_zh: 牙科多模态大模型、临床推理评测基准、专家校准的牙科评测，以及 OmniDentBench。
img: assets/img/research/dental-ai.svg
importance: 4
category: work
github: https://github.com/FreedomIntelligence/DentalGPT
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div data-lang="en">

<div class="impact-kicker">Dental LLMs, multimodal diagnosis, and expert-calibrated benchmarks</div>

<div class="impact-tags">
  <span class="impact-tag">Dental Foundation Models</span>
  <span class="impact-tag">DentalGPT</span>
  <span class="impact-tag">GlobalDentBench</span>
  <span class="impact-tag">OmniDentBench</span>
  <span class="impact-tag">Clinical reasoning</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://freedomdle.cn/" target="_blank" rel="noopener">OmniDentBench</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/DentalGPT" target="_blank" rel="noopener">DentalGPT</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/GlobalDentBench" target="_blank" rel="noopener">GlobalDentBench</a>
  <a class="impact-action secondary" href="https://huggingface.co/datasets/FreedomIntelligence/GlobalDentBench-OA" target="_blank" rel="noopener">GlobalDentBench-OA</a>
  <a class="impact-action secondary" href="/projects/">All Projects</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/research/dental-ai.svg" alt="Dental AI at a glance: 120K+ dental images, 8,978 expert-calibrated questions, 88 countries and regions, 14 specialties" width="1200" height="675">
</div>

<p class="impact-lede">
Dental foundation models are a vertical of medical AI that is distinct enough to stand on its own: they must understand oral imaging, dental specialty knowledge, case reasoning, treatment risk, expert scoring, and clinical standards that differ across regions. DentalGPT provides a multimodal dental model route, while GlobalDentBench and OmniDentBench provide high-difficulty, expert-calibrated, clinical-reasoning-oriented benchmark entry points.
</p>

<section class="impact-section">
  <h2>Research Storyline</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>Model</span>
      <div><strong>Train a multimodal dental LLM</strong><p>DentalGPT strengthens multimodal complex reasoning with large-scale dental images, professional captions, instruction tuning, and GRPO.</p></div>
    </div>
    <div class="impact-step">
      <span>Bench</span>
      <div><strong>Build a multinational clinical-reasoning benchmark</strong><p>GlobalDentBench covers 88 countries and regions, 14 dental specialties, and multiple question types, with an emphasis on expert calibration and risk analysis.</p></div>
    </div>
    <div class="impact-step">
      <span>ODB</span>
      <div><strong>Build an open evaluation platform</strong><p>OmniDentBench targets complex clinical decision-making and biomedical research, and offers global dental benchmarking with a leaderboard entry point.</p></div>
    </div>
    <div class="impact-step">
      <span>Context</span>
      <div><strong>Align with external dental benchmarks</strong><p>Work such as DentalBench, OralGPT-Omni, and OralMLLM-Bench shows that a dedicated model and evaluation ecosystem is taking shape in dentistry.</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Representative Work</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>Model</span>
      <div><strong>DentalGPT: Incentivizing Multimodal Complex Reasoning in Dentistry</strong><p>Builds a specialized 7B dental MLLM with domain knowledge injection and reinforcement learning for dental visual reasoning.</p><a href="https://arxiv.org/abs/2512.11558" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Bench</span>
      <div><strong>GlobalDentBench</strong><p>A multinational benchmark for LLM clinical reasoning in dentistry with expert calibration, specialty taxonomy, and risk analysis.</p><a href="https://arxiv.org/abs/2605.24636" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>Platform</span>
      <div><strong>OmniDentBench</strong><p>A global dental benchmarking platform for high-difficulty clinical decision-making and biomedical research evaluation.</p><a href="https://freedomdle.cn/" target="_blank" rel="noopener">Platform</a></div>
    </div>
    <div class="impact-paper">
      <span>QA</span>
      <div><strong>DentalBench</strong><p>A bilingual dental QA benchmark and DentalCorpus for evaluating and adapting LLMs in dentistry.</p><a href="https://arxiv.org/abs/2508.20416" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="impact-paper">
      <span>MLLM</span>
      <div><strong>OralGPT-Omni</strong><p>A dental-specialized multimodal LLM and MMOral-Uni benchmark for dental image analysis.</p><a href="https://arxiv.org/abs/2511.22055" target="_blank" rel="noopener">Paper</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Benchmark Layers</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>Dental visual understanding</strong>
      <p>Intraoral photos, panoramic X-rays, periapical radiographs, and dental-specific VQA expose failures that generic medical MLLMs often miss.</p>
    </div>
    <div class="impact-card">
      <strong>Clinical reasoning complexity</strong>
      <p>GlobalDentBench moves from knowledge recall to routine reasoning and individualized reasoning with patient-specific constraints.</p>
    </div>
    <div class="impact-card">
      <strong>Expert calibration</strong>
      <p>Dentist-in-the-loop validation and rubric-based scoring make dental evaluation more clinically meaningful than generic QA accuracy.</p>
    </div>
    <div class="impact-card">
      <strong>Risk analysis</strong>
      <p>Dental AI needs to track unsafe treatment suggestions, irreversible harm risks, and specialty-specific failure modes.</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Resource Map</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>OmniDentBench</strong>
      <p>Global dental benchmark platform and leaderboard.</p>
      <a href="https://freedomdle.cn/" target="_blank" rel="noopener">Platform</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>DentalGPT</strong>
      <p>Dental multimodal model repository and evaluation setup.</p>
      <a href="https://github.com/FreedomIntelligence/DentalGPT" target="_blank" rel="noopener">Repository</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>GlobalDentBench</strong>
      <p>Expert-calibrated multinational dental clinical reasoning benchmark.</p>
      <a href="https://github.com/FreedomIntelligence/GlobalDentBench" target="_blank" rel="noopener">Repository</a>
    </div>
  </div>
</section>

<div class="impact-actions">
  <a class="impact-action secondary" href="/projects/">Back to Projects</a>
</div>

</div>

<div data-lang="zh">

<div class="impact-kicker">牙科大模型、多模态诊断与专家校准的评测基准</div>

<div class="impact-tags">
  <span class="impact-tag">牙科大模型</span>
  <span class="impact-tag">DentalGPT</span>
  <span class="impact-tag">GlobalDentBench</span>
  <span class="impact-tag">OmniDentBench</span>
  <span class="impact-tag">临床推理</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://freedomdle.cn/" target="_blank" rel="noopener">OmniDentBench</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/DentalGPT" target="_blank" rel="noopener">DentalGPT</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/GlobalDentBench" target="_blank" rel="noopener">GlobalDentBench</a>
  <a class="impact-action secondary" href="https://huggingface.co/datasets/FreedomIntelligence/GlobalDentBench-OA" target="_blank" rel="noopener">GlobalDentBench-OA</a>
  <a class="impact-action secondary" href="/projects/">全部项目</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/research/dental-ai-zh.svg" alt="牙科 AI 一览：120K+ 牙科图像、8,978 道专家校准题、88 个国家和地区、14 个专科" width="1200" height="675">
</div>

<p class="impact-lede">
牙科大模型是医疗 AI 里足够独立的一条垂直线：它需要理解口腔影像、牙科专科知识、病例推理、治疗风险、专家评分和跨地区诊疗标准。DentalGPT 提供多模态牙科模型路线，GlobalDentBench 和 OmniDentBench 则提供高难度、专家校准、临床推理导向的评测基准入口。
</p>

<section class="impact-section">
  <h2>研究脉络</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>模型</span>
      <div><strong>训练牙科多模态大模型</strong><p>DentalGPT 用大规模牙科图像、专业图像描述、指令微调和 GRPO 强化多模态复杂推理。</p></div>
    </div>
    <div class="impact-step">
      <span>基准</span>
      <div><strong>构建跨国临床推理评测基准</strong><p>GlobalDentBench 覆盖 88 个国家和地区、14 个牙科专科和多种题型，强调专家校准和风险分析。</p></div>
    </div>
    <div class="impact-step">
      <span>ODB</span>
      <div><strong>搭建开放评测平台</strong><p>OmniDentBench 面向复杂临床决策和生物医学研究，提供全球牙科基准评测与排行榜入口。</p></div>
    </div>
    <div class="impact-step">
      <span>背景</span>
      <div><strong>对齐外部牙科评测基准</strong><p>DentalBench、OralGPT-Omni 和 OralMLLM-Bench 等工作显示牙科领域正在形成专门的模型和评测生态。</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>代表性工作</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>模型</span>
      <div><strong>DentalGPT: Incentivizing Multimodal Complex Reasoning in Dentistry</strong><p>构建了专门面向牙科的 7B 多模态大模型，用领域知识注入和强化学习提升牙科视觉推理。</p><a href="https://arxiv.org/abs/2512.11558" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>基准</span>
      <div><strong>GlobalDentBench</strong><p>面向牙科临床推理的跨国大模型评测基准，包含专家校准、专科分类体系和风险分析。</p><a href="https://arxiv.org/abs/2605.24636" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>平台</span>
      <div><strong>OmniDentBench</strong><p>全球牙科评测基准平台，面向高难度的临床决策和生物医学研究评测。</p><a href="https://freedomdle.cn/" target="_blank" rel="noopener">平台</a></div>
    </div>
    <div class="impact-paper">
      <span>问答</span>
      <div><strong>DentalBench</strong><p>双语牙科问答评测基准和 DentalCorpus，用于评测和适配牙科领域的大模型。</p><a href="https://arxiv.org/abs/2508.20416" target="_blank" rel="noopener">论文</a></div>
    </div>
    <div class="impact-paper">
      <span>多模态大模型</span>
      <div><strong>OralGPT-Omni</strong><p>面向牙科图像分析的专用多模态大模型，以及 MMOral-Uni 评测基准。</p><a href="https://arxiv.org/abs/2511.22055" target="_blank" rel="noopener">论文</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>评测层次</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>牙科视觉理解</strong>
      <p>口内照片、全景 X 线片、根尖片和牙科专用的视觉问答（VQA），能暴露通用医疗多模态大模型常常忽略的问题。</p>
    </div>
    <div class="impact-card">
      <strong>临床推理的复杂度</strong>
      <p>GlobalDentBench 的题目从知识回忆，推进到常规推理，再到带有患者个体约束的个性化推理。</p>
    </div>
    <div class="impact-card">
      <strong>专家校准</strong>
      <p>牙医参与的验证和基于 rubric 的评分，让牙科评测比通用问答准确率更具临床意义。</p>
    </div>
    <div class="impact-card">
      <strong>风险分析</strong>
      <p>牙科 AI 需要追踪不安全的治疗建议、不可逆损害的风险，以及各专科特有的失败模式。</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>资源导航</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>OmniDentBench</strong>
      <p>全球牙科评测基准平台与排行榜。</p>
      <a href="https://freedomdle.cn/" target="_blank" rel="noopener">平台</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>DentalGPT</strong>
      <p>牙科多模态模型的代码仓库与评测设置。</p>
      <a href="https://github.com/FreedomIntelligence/DentalGPT" target="_blank" rel="noopener">代码仓库</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>GlobalDentBench</strong>
      <p>经专家校准的跨国牙科临床推理评测基准。</p>
      <a href="https://github.com/FreedomIntelligence/GlobalDentBench" target="_blank" rel="noopener">代码仓库</a>
    </div>
  </div>
</section>

<div class="impact-actions">
  <a class="impact-action secondary" href="/projects/">返回项目页</a>
</div>

</div>

</div>

