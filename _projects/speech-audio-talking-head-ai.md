---
layout: page
title: Speech, Audio, and Talking-Head AI
title_zh: "语音、音频与说话人视频 AI"
direction: multimodal-interaction
description: Speech-language alignment, paralinguistic evaluation, empathetic speech benchmarks, and audio-driven video generation.
description_zh: "语音-语言对齐、副语言评测、共情语音评测基准，以及音频驱动的视频生成。"
img: assets/img/research/speech-llms.svg
importance: 9
category: work
github: https://github.com/FreedomIntelligence/TalkVid
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div data-lang="en">

<div class="impact-kicker">Speech and audio AI</div>

<div class="impact-tags">
  <span class="impact-tag">Soundwave</span>
  <span class="impact-tag">TalkVid</span>
  <span class="impact-tag">EchoMind</span>
  <span class="impact-tag">S2S-Arena</span>
  <span class="impact-tag">Audio-driven video</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://github.com/FreedomIntelligence/TalkVid" target="_blank" rel="noopener">TalkVid</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/S2S-Arena" target="_blank" rel="noopener">S2S-Arena</a>
  <a class="impact-action secondary" href="https://huggingface.co/datasets/FreedomIntelligence/TalkVid" target="_blank" rel="noopener">TalkVid data</a>
  <a class="impact-action secondary" href="https://hlt-cuhksz.github.io/EchoMind/" target="_blank" rel="noopener">EchoMind</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/research/speech-llms.svg" alt="Diagram: speech in, speech LLM, speech out, carrying tone, emotion, and paralinguistic cues" width="1200" height="675">
</div>

<p class="impact-lede">
The speech and audio line extends the lab's model ecosystem from text and images to how people actually communicate: voice, prosody, empathy, paralinguistic cues, and audio-driven face or talking-head generation.
</p>

<section class="impact-section">
  <h2>Research Storyline</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>Align</span>
      <div><strong>Soundwave connects speech and text</strong><p>The first question is how little speech supervision is needed to ground LLMs in spoken input and output.</p></div>
    </div>
    <div class="impact-step">
      <span>Evaluate</span>
      <div><strong>S2S-Arena tests how things are spoken</strong><p>Speech-to-speech systems need to follow paralinguistic instructions, not just transcribe or answer textually.</p></div>
    </div>
    <div class="impact-step">
      <span>Empathy</span>
      <div><strong>EchoMind measures affective speech behavior</strong><p>Empathetic speech requires multi-level evaluation of emotion, response style, and conversational alignment.</p></div>
    </div>
    <div class="impact-step">
      <span>Embody</span>
      <div><strong>TalkVid turns speech into talking-head generation</strong><p>Audio-driven video generation connects speech understanding to visible, embodied communication.</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Project Threads</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>Soundwave</strong>
      <p>Studies speech-text alignment for LLMs, asking how much speech supervision is actually needed for strong speech-language grounding.</p>
    </div>
    <div class="impact-card">
      <strong>S2S-Arena</strong>
      <p>Evaluates paralinguistic instruction following in speech-to-speech systems, moving beyond word accuracy into how something is spoken.</p>
    </div>
    <div class="impact-card">
      <strong>EchoMind</strong>
      <p>Benchmarks empathetic speech language models with multi-level evaluation of affective and conversational signals.</p>
    </div>
    <div class="impact-card">
      <strong>TalkVid</strong>
      <p>Provides a diversified dataset for audio-driven talking-head synthesis across multiple languages and video generation settings.</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Display Figures</h2>
  <div class="impact-gallery">
    <figure>
      <img src="/assets/img/media-roundup-2026/socratic-pipeline.png" alt="Speech and interactive AI pipeline">
      <figcaption>The speech line shares a common pipeline with interactive agents: perceive, reason, respond, and evaluate behavior.</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/freedomai-2026/impact/github-impact.jpg" alt="Open source impact">
      <figcaption>Open datasets and benchmarks make speech and embodied interaction research easier to reproduce.</figcaption>
    </figure>
  </div>
</section>

<section class="impact-section">
  <h2>Paper Trail</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>Speech</span>
      <div><strong>Soundwave: Less is More for Speech-Text Alignment in LLMs</strong><p>Studies efficient speech-text alignment so LLMs can connect spoken signals and language behavior.</p><a href="https://github.com/FreedomIntelligence/Soundwave" target="_blank" rel="noopener">Repository</a></div>
    </div>
    <div class="impact-paper">
      <span>Eval</span>
      <div><strong>S2S-Arena and EchoMind</strong><p>Benchmarks paralinguistic instruction following and empathetic speech model behavior.</p><a href="https://github.com/FreedomIntelligence/S2S-Arena" target="_blank" rel="noopener">S2S-Arena</a></div>
    </div>
    <div class="impact-paper">
      <span>Video</span>
      <div><strong>TalkVid</strong><p>Provides diversified audio-driven talking-head data so voice can control visible speech behavior.</p><a href="https://huggingface.co/datasets/FreedomIntelligence/TalkVid" target="_blank" rel="noopener">Dataset</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Why It Matters</h2>
  <ul class="impact-list">
    <li>Human-facing agents need to understand how speech is delivered, not only the transcript.</li>
    <li>Medical, education, and companionship scenarios require empathy, timing, tone, and paralinguistic control.</li>
    <li>Audio-driven video generation connects speech understanding with embodied and visual communication.</li>
  </ul>
</section>

<section class="impact-section">
  <h2>Resource Map</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>TalkVid</strong>
      <p>Large-scale diversified dataset for audio-driven talking-head synthesis.</p>
      <a href="https://huggingface.co/datasets/FreedomIntelligence/TalkVid" target="_blank" rel="noopener">Dataset</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>S2S-Arena</strong>
      <p>Evaluation benchmark for paralinguistic instruction following in speech-to-speech models.</p>
      <a href="https://github.com/FreedomIntelligence/S2S-Arena" target="_blank" rel="noopener">Repository</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>EchoMind</strong>
      <p>Benchmark site for empathetic speech language model evaluation.</p>
      <a href="https://hlt-cuhksz.github.io/EchoMind/" target="_blank" rel="noopener">Project</a>
    </div>
  </div>
</section>

</div>

<div data-lang="zh">

<div class="impact-kicker">语音与音频 AI</div>

<div class="impact-tags">
  <span class="impact-tag">Soundwave</span>
  <span class="impact-tag">TalkVid</span>
  <span class="impact-tag">EchoMind</span>
  <span class="impact-tag">S2S-Arena</span>
  <span class="impact-tag">音频驱动视频</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://github.com/FreedomIntelligence/TalkVid" target="_blank" rel="noopener">TalkVid</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/S2S-Arena" target="_blank" rel="noopener">S2S-Arena</a>
  <a class="impact-action secondary" href="https://huggingface.co/datasets/FreedomIntelligence/TalkVid" target="_blank" rel="noopener">TalkVid 数据</a>
  <a class="impact-action secondary" href="https://hlt-cuhksz.github.io/EchoMind/" target="_blank" rel="noopener">EchoMind</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/research/speech-llms-zh.svg" alt="示意图：语音输入、语音大模型、语音输出，同时理解语气、情绪与副语言信息" width="1200" height="675">
</div>

<p class="impact-lede">
语音与音频研究线把实验室的模型生态从文本和图像延伸到人们真实的交流方式：声音、韵律、共情和副语言线索，以及音频驱动的人脸与说话人视频生成。
</p>

<section class="impact-section">
  <h2>研究脉络</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>对齐</span>
      <div><strong>Soundwave 连接语音与文本</strong><p>首要问题是：要让大模型接入语音输入和输出，最少需要多少语音监督。</p></div>
    </div>
    <div class="impact-step">
      <span>评测</span>
      <div><strong>S2S-Arena 考察“怎么说”</strong><p>语音到语音系统需要遵循副语言指令，而不只是转写语音或给出文字回答。</p></div>
    </div>
    <div class="impact-step">
      <span>共情</span>
      <div><strong>EchoMind 衡量语音中的情感表现</strong><p>共情语音需要多层级评测，覆盖情绪、回应风格和对话契合度。</p></div>
    </div>
    <div class="impact-step">
      <span>具身</span>
      <div><strong>TalkVid 让语音驱动说话人视频生成</strong><p>音频驱动的视频生成把语音理解与看得见的具身交流连接起来。</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>子项目</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>Soundwave</strong>
      <p>研究大模型的语音-文本对齐，追问要获得扎实的语音-语言对应，究竟需要多少语音监督。</p>
    </div>
    <div class="impact-card">
      <strong>S2S-Arena</strong>
      <p>评测语音到语音系统的副语言指令跟随能力，评价重点从字词准确率延伸到说话方式。</p>
    </div>
    <div class="impact-card">
      <strong>EchoMind</strong>
      <p>为共情语音语言模型建立评测基准，分多个层级评估情感信号和对话信号。</p>
    </div>
    <div class="impact-card">
      <strong>TalkVid</strong>
      <p>提供多样化的数据集，支持跨多种语言和多种视频生成设置的音频驱动说话人视频合成。</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>图示</h2>
  <div class="impact-gallery">
    <figure>
      <img src="/assets/img/media-roundup-2026/socratic-pipeline.png" alt="语音与交互式 AI 流程">
      <figcaption>语音研究线与交互式智能体共用一条流程：感知、推理、回应，并评测行为。</figcaption>
    </figure>
    <figure>
      <img src="/assets/img/freedomai-2026/impact/github-impact.jpg" alt="开源影响力">
      <figcaption>开放的数据集和评测基准，让语音与具身交互研究更容易复现。</figcaption>
    </figure>
  </div>
</section>

<section class="impact-section">
  <h2>论文脉络</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>语音</span>
      <div><strong>Soundwave: Less is More for Speech-Text Alignment in LLMs</strong><p>研究高效的语音-文本对齐，让大模型把语音信号与语言行为联系起来。</p><a href="https://github.com/FreedomIntelligence/Soundwave" target="_blank" rel="noopener">代码仓库</a></div>
    </div>
    <div class="impact-paper">
      <span>评测</span>
      <div><strong>S2S-Arena 与 EchoMind</strong><p>为副语言指令跟随与共情语音模型的行为建立评测基准。</p><a href="https://github.com/FreedomIntelligence/S2S-Arena" target="_blank" rel="noopener">S2S-Arena</a></div>
    </div>
    <div class="impact-paper">
      <span>视频</span>
      <div><strong>TalkVid</strong><p>提供多样化的音频驱动说话人视频数据，让声音可以控制可见的说话行为。</p><a href="https://huggingface.co/datasets/FreedomIntelligence/TalkVid" target="_blank" rel="noopener">数据集</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>研究意义</h2>
  <ul class="impact-list">
    <li>直接面向用户的智能体，不能只理解转写文本，还要理解语音是怎样表达出来的。</li>
    <li>医疗、教育和陪伴场景需要共情、时机、语气和副语言层面的控制。</li>
    <li>音频驱动的视频生成把语音理解与具身、可视的交流连接起来。</li>
  </ul>
</section>

<section class="impact-section">
  <h2>资源导航</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>TalkVid</strong>
      <p>面向音频驱动说话人视频合成的大规模多样化数据集。</p>
      <a href="https://huggingface.co/datasets/FreedomIntelligence/TalkVid" target="_blank" rel="noopener">数据集</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>S2S-Arena</strong>
      <p>评测语音到语音模型副语言指令跟随能力的基准。</p>
      <a href="https://github.com/FreedomIntelligence/S2S-Arena" target="_blank" rel="noopener">代码仓库</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>EchoMind</strong>
      <p>共情语音语言模型评测基准的项目网站。</p>
      <a href="https://hlt-cuhksz.github.io/EchoMind/" target="_blank" rel="noopener">项目主页</a>
    </div>
  </div>
</section>

</div>

</div>
