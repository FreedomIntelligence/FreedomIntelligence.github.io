---
layout: page
title: Medical Evaluation Benchmarks
title_zh: 医疗评测基准
direction: evaluation-safety
description: Benchmark infrastructure for Chinese medical QA, multimodal medical AI, live clinical testing, and doctor workflows.
description_zh: 面向中文医学问答、多模态医疗 AI、实时临床测试和医生工作流的评测基准体系。
img: assets/img/media-roundup-2026/cmb-overview.png
importance: 4
category: work
github: https://github.com/FreedomIntelligence/CMB
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div data-lang="en">

<div class="impact-kicker">Medical evaluation</div>

<div class="impact-tags">
  <span class="impact-tag">CMB</span>
  <span class="impact-tag">GMAI-MMBench</span>
  <span class="impact-tag">LiveClin</span>
  <span class="impact-tag">DxBench</span>
  <span class="impact-tag">Doctor workflow</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://github.com/FreedomIntelligence/CMB" target="_blank" rel="noopener">CMB</a>
  <a class="impact-action secondary" href="https://huggingface.co/datasets/FreedomIntelligence/CMB" target="_blank" rel="noopener">CMB data</a>
  <a class="impact-action secondary" href="https://arxiv.org/abs/2308.08833" target="_blank" rel="noopener">CMB paper</a>
  <a class="impact-action secondary" href="https://github.com/uni-medical/GMAI-MMBench" target="_blank" rel="noopener">GMAI-MMBench</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/media-roundup-2026/cmb-overview.png" alt="CMB benchmark overview">
</div>

<p class="impact-lede">
Medical AI cannot be judged only by generic chat quality. The lab's benchmark work builds domain-specific tests for Chinese medical knowledge, multimodal medical perception, live clinical leakage control, diagnostic reasoning, and doctor-centered workflows.
</p>

<section class="impact-section">
  <h2>Evaluation Storyline</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>Knowledge</span>
      <div><strong>CMB starts from Chinese medical exams and clinical QA</strong><p>It tests whether models know medicine in the language and assessment structure used by Chinese medical education and practice.</p></div>
    </div>
    <div class="impact-step">
      <span>Dialogue</span>
      <div><strong>CMB-Clin adds complex consultation cases</strong><p>Clinical question answering forces models to use patient histories and multi-turn information rather than isolated multiple-choice memory.</p></div>
    </div>
    <div class="impact-step">
      <span>Vision</span>
      <div><strong>GMAI-MMBench moves evaluation into multimodality</strong><p>Medical AI must combine images, reports, and clinical knowledge, so the benchmark stack expands beyond text-only questions.</p></div>
    </div>
    <div class="impact-step">
      <span>Reality</span>
      <div><strong>LiveClin, DxBench, and workflow tests reduce benchmark comfort</strong><p>Later evaluation directions stress leakage control, diagnostic reasoning, and doctor-centered tasks closer to deployed clinical workflows.</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Benchmark Layers</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>CMB</strong>
      <p>A comprehensive Chinese medical benchmark covering medical exams, clinical QA, and Chinese medical knowledge, with code and Hugging Face data.</p>
    </div>
    <div class="impact-card">
      <strong>GMAI-MMBench</strong>
      <p>A multimodal benchmark for general medical AI, testing whether models can combine medical vision, text, and domain reasoning.</p>
    </div>
    <div class="impact-card">
      <strong>LiveClin and DxBench</strong>
      <p>Clinical evaluation directions that reduce leakage risk and stress diagnostic reasoning under more realistic clinical settings.</p>
    </div>
    <div class="impact-card">
      <strong>Workflow-aligned tasks</strong>
      <p>Doctor-centric evaluation reframes medical AI around tasks clinicians actually perform, rather than only static QA accuracy.</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Display Figures</h2>
  <div class="impact-gallery">
    <figure>
      <img src="/assets/img/media-roundup-2026/cmb-overview.png" alt="CMB benchmark structure">
      <figcaption>CMB combines exam-style medical knowledge with clinical diagnostic questions and expert-aligned scoring.</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/media-roundup-2026/huatuogpt-auto-eval.jpeg" alt="Medical model evaluation loop">
      <figcaption>Model building and benchmark design stay connected: evaluation reveals where medical adaptation still fails.</figcaption>
    </figure>
  </div>
</section>

<section class="impact-section">
  <h2>Evaluation Philosophy</h2>
  <div class="impact-callout">
Benchmarks should not reward fluent medical-sounding text alone. Strong medical evaluation asks whether the model uses evidence, handles uncertainty, follows workflow constraints, avoids memorized leakage, and supports the clinician's actual decision process.
  </div>
</section>

<section class="impact-section">
  <h2>Paper Trail</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>CMB</span>
      <div><strong>CMB: A Comprehensive Medical Benchmark in Chinese</strong><p>Builds a Chinese medical benchmark with exam and clinical components, giving Chinese medical LLMs a domain-specific yardstick.</p><a href="https://github.com/FreedomIntelligence/CMB" target="_blank" rel="noopener">Repository</a></div>
    </div>
    <div class="impact-paper">
      <span>Vision</span>
      <div><strong>GMAI-MMBench: A Comprehensive Multimodal Evaluation Benchmark Towards General Medical AI</strong><p>Extends the evaluation stack to general medical AI scenarios that require multimodal perception and domain reasoning.</p><a href="https://uni-medical.github.io/GMAI-MMBench.github.io/" target="_blank" rel="noopener">Project site</a></div>
    </div>
    <div class="impact-paper">
      <span>Clinical</span>
      <div><strong>LiveClin and DxBench</strong><p>Push medical evaluation toward live, leakage-resistant, diagnostic, and workflow-aligned settings.</p><a href="https://github.com/AQ-MedAI/LiveClin" target="_blank" rel="noopener">LiveClin</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Resource Map</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>CMB code</strong>
      <p>Core Chinese medical benchmark repository and evaluation tooling.</p>
      <a href="https://github.com/FreedomIntelligence/CMB" target="_blank" rel="noopener">Repository</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>CMB dataset</strong>
      <p>Hugging Face release for reproducible Chinese medical benchmark experiments.</p>
      <a href="https://huggingface.co/datasets/FreedomIntelligence/CMB" target="_blank" rel="noopener">Dataset</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>GMAI-MMBench</strong>
      <p>Multimodal general medical AI benchmark and public project resources.</p>
      <a href="https://uni-medical.github.io/GMAI-MMBench.github.io/" target="_blank" rel="noopener">Project</a>
    </div>
  </div>
</section>

</div>

<div data-lang="zh">

<div class="impact-kicker">医疗评测</div>

<div class="impact-tags">
  <span class="impact-tag">CMB</span>
  <span class="impact-tag">GMAI-MMBench</span>
  <span class="impact-tag">LiveClin</span>
  <span class="impact-tag">DxBench</span>
  <span class="impact-tag">医生工作流</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://github.com/FreedomIntelligence/CMB" target="_blank" rel="noopener">CMB</a>
  <a class="impact-action secondary" href="https://huggingface.co/datasets/FreedomIntelligence/CMB" target="_blank" rel="noopener">CMB 数据</a>
  <a class="impact-action secondary" href="https://arxiv.org/abs/2308.08833" target="_blank" rel="noopener">CMB 论文</a>
  <a class="impact-action secondary" href="https://github.com/uni-medical/GMAI-MMBench" target="_blank" rel="noopener">GMAI-MMBench</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/media-roundup-2026/cmb-overview.png" alt="CMB 评测基准概览">
</div>

<p class="impact-lede">
医疗 AI 不能只看通用对话质量。实验室的评测工作分别针对中文医学知识、多模态医学感知、防泄漏的实时临床测试、诊断推理，以及以医生为中心的工作流，构建专门的测试。
</p>

<section class="impact-section">
  <h2>评测脉络</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>知识</span>
      <div><strong>CMB 从中文医学考试和临床问答出发</strong><p>在中国医学教育与临床实践使用的语言和考核形式下，检验模型是否掌握医学知识。</p></div>
    </div>
    <div class="impact-step">
      <span>对话</span>
      <div><strong>CMB-Clin 加入复杂的问诊病例</strong><p>临床问答要求模型利用病史和多轮信息作答，而不是靠孤立的选择题记忆。</p></div>
    </div>
    <div class="impact-step">
      <span>视觉</span>
      <div><strong>GMAI-MMBench 把评测推向多模态</strong><p>医疗 AI 必须综合图像、报告和临床知识，评测体系也因此不再局限于纯文本题目。</p></div>
    </div>
    <div class="impact-step">
      <span>现实</span>
      <div><strong>LiveClin、DxBench 和工作流测试打破评测的“舒适区”</strong><p>后续评测更强调防数据泄漏、诊断推理，以及以医生为中心、更贴近实际临床工作流的任务。</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>评测层次</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>CMB</strong>
      <p>综合性的中文医学评测基准，涵盖医学考试、临床问答和中文医学知识，并提供代码和 Hugging Face 数据。</p>
    </div>
    <div class="impact-card">
      <strong>GMAI-MMBench</strong>
      <p>面向通用医疗 AI 的多模态评测基准，检验模型能否把医学视觉、文本和领域推理结合起来。</p>
    </div>
    <div class="impact-card">
      <strong>LiveClin 与 DxBench</strong>
      <p>两个临床评测方向：降低数据泄漏风险，并在更贴近真实的临床场景中考察诊断推理。</p>
    </div>
    <div class="impact-card">
      <strong>贴合工作流的任务</strong>
      <p>以医生为中心的评测围绕临床医生实际承担的任务来衡量医疗 AI，而不只看静态问答的准确率。</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>图示</h2>
  <div class="impact-gallery">
    <figure>
      <img src="/assets/img/media-roundup-2026/cmb-overview.png" alt="CMB 评测基准结构">
      <figcaption>CMB 把考试式医学知识与临床诊断问题结合起来，并采用与专家判断一致的评分方式。</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/media-roundup-2026/huatuogpt-auto-eval.jpeg" alt="医疗模型评测闭环">
      <figcaption>模型研发与评测设计紧密相连：评测会暴露医学适配仍然失败的地方。</figcaption>
    </figure>
  </div>
</section>

<section class="impact-section">
  <h2>评测理念</h2>
  <div class="impact-callout">
评测基准不应只奖励流畅、听起来很专业的医学文本。好的医疗评测要看模型是否依据证据作答、能否处理不确定性、是否遵守工作流约束、是否避免靠记住泄漏的题目得分，以及能否真正支持临床医生的决策过程。
  </div>
</section>

<section class="impact-section">
  <h2>论文脉络</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>CMB</span>
      <div><strong>CMB: A Comprehensive Medical Benchmark in Chinese</strong><p>构建包含考试和临床两部分的中文医学评测基准，为中文医疗大模型提供领域专用的衡量标尺。</p><a href="https://github.com/FreedomIntelligence/CMB" target="_blank" rel="noopener">代码仓库</a></div>
    </div>
    <div class="impact-paper">
      <span>视觉</span>
      <div><strong>GMAI-MMBench: A Comprehensive Multimodal Evaluation Benchmark Towards General Medical AI</strong><p>把评测体系扩展到需要多模态感知和领域推理的通用医疗 AI 场景。</p><a href="https://uni-medical.github.io/GMAI-MMBench.github.io/" target="_blank" rel="noopener">项目主页</a></div>
    </div>
    <div class="impact-paper">
      <span>临床</span>
      <div><strong>LiveClin 与 DxBench</strong><p>把医疗评测推向实时更新、抗数据泄漏、侧重诊断推理且贴合工作流的场景。</p><a href="https://github.com/AQ-MedAI/LiveClin" target="_blank" rel="noopener">LiveClin</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>资源导航</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>CMB 代码</strong>
      <p>中文医学评测基准的核心代码仓库和评测工具。</p>
      <a href="https://github.com/FreedomIntelligence/CMB" target="_blank" rel="noopener">代码仓库</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>CMB 数据集</strong>
      <p>在 Hugging Face 上发布的数据，用于复现中文医学评测实验。</p>
      <a href="https://huggingface.co/datasets/FreedomIntelligence/CMB" target="_blank" rel="noopener">数据集</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>GMAI-MMBench</strong>
      <p>面向通用医疗 AI 的多模态评测基准及公开项目资源。</p>
      <a href="https://uni-medical.github.io/GMAI-MMBench.github.io/" target="_blank" rel="noopener">项目主页</a>
    </div>
  </div>
</section>

</div>

</div>
