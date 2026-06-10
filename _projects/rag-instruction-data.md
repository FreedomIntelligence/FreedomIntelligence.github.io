---
layout: page
title: RAG and Instruction Data Infrastructure
description: Open data, instruction tuning, and retrieval-augmented resources for downstream LLM builders.
img: assets/img/freedomai-2026/impact/github-repos.png
importance: 8
category: work
github: https://github.com/FreedomIntelligence/RAG-Instruct
---

<link rel="stylesheet" href="{{ '/assets/css/project-detail.css' | relative_url }}">

<div class="impact-project">

<div class="impact-kicker">Open data infrastructure</div>

<div class="impact-tags">
  <span class="impact-tag">RAG-Instruct</span>
  <span class="impact-tag">LLMZoo</span>
  <span class="impact-tag">InstructionZoo</span>
  <span class="impact-tag">Huatuo-26M</span>
  <span class="impact-tag">ApolloCorpus</span>
</div>

<div class="impact-actions">
  <a class="impact-action" href="https://github.com/FreedomIntelligence/RAG-Instruct" target="_blank" rel="noopener">RAG-Instruct</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/LLMZoo" target="_blank" rel="noopener">LLMZoo</a>
  <a class="impact-action secondary" href="https://github.com/FreedomIntelligence/InstructionZoo" target="_blank" rel="noopener">InstructionZoo</a>
  <a class="impact-action secondary" href="https://huggingface.co/datasets/FreedomIntelligence/RAG-Instruct" target="_blank" rel="noopener">Dataset</a>
</div>

<div class="impact-hero">
  <img src="/assets/img/freedomai-2026/impact/github-repos.png" alt="FreedomIntelligence open source repository overview">
</div>

<p class="impact-lede">
Many FreedomAI projects are useful because they release the substrate that other builders need: instruction data, domain corpora, retrieval-augmented tasks, medical QA datasets, multimodal feedback data, and reproducible model checkpoints.
</p>

<section class="impact-section">
  <h2>Research Storyline</h2>
  <div class="impact-storyline">
    <div class="impact-step">
      <span>Collect</span>
      <div><strong>Build reusable domain corpora</strong><p>Huatuo-26M, ApolloCorpus, PubMedVision, and related releases give medical and multilingual projects a stronger data substrate.</p></div>
    </div>
    <div class="impact-step">
      <span>Ground</span>
      <div><strong>Teach models to use retrieved evidence</strong><p>RAG-Instruct turns retrieval into an instruction-following skill rather than a post-hoc wrapper around memorized model answers.</p></div>
    </div>
    <div class="impact-step">
      <span>Package</span>
      <div><strong>Release models with data and tasks</strong><p>LLMZoo, InstructionZoo, and Hugging Face checkpoints make the data useful to people who want to reproduce or extend the recipe.</p></div>
    </div>
    <div class="impact-step">
      <span>Feed back</span>
      <div><strong>Connect infrastructure to benchmarks</strong><p>Datasets are most useful when paired with CMB, Apollo evaluation, multimodal medical benchmarks, and downstream project pages.</p></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Infrastructure Pieces</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <strong>RAG-Instruct</strong>
      <p>Retrieval-augmented instruction data designed to teach models how to use retrieved evidence rather than only memorize parametric knowledge.</p>
    </div>
    <div class="impact-card">
      <strong>LLMZoo and InstructionZoo</strong>
      <p>Curated model, data, evaluation, and instruction-tuning resources that made the lab's early open LLM ecosystem easier to reproduce.</p>
    </div>
    <div class="impact-card">
      <strong>Domain corpora</strong>
      <p>Huatuo-26M, ApolloCorpus, PubMedVision, and other datasets provide domain-specific supervision for medicine, multilingual AI, and visual reasoning.</p>
    </div>
    <div class="impact-card">
      <strong>Model releases</strong>
      <p>Small and mid-size checkpoints such as RAG-Instruct-Llama3-3B let researchers test data recipes without rebuilding the whole pipeline.</p>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Paper Trail</h2>
  <div class="impact-paper-trail">
    <div class="impact-paper">
      <span>Medical data</span>
      <div><strong>Huatuo-26M</strong><p>Large-scale Chinese medical QA data that feeds medical LLM instruction tuning and evaluation.</p><a href="https://github.com/FreedomIntelligence/Huatuo-26M" target="_blank" rel="noopener">Repository</a></div>
    </div>
    <div class="impact-paper">
      <span>RAG</span>
      <div><strong>RAG-Instruct: Boosting LLMs with Diverse Retrieval-Augmented Instructions</strong><p>Teaches models how to condition answers on retrieved evidence across diverse tasks.</p><a href="https://github.com/FreedomIntelligence/RAG-Instruct" target="_blank" rel="noopener">Repository</a></div>
    </div>
    <div class="impact-paper">
      <span>Multilingual</span>
      <div><strong>ApolloCorpus and PubMedVision</strong><p>Domain corpora for multilingual medical modeling and medical visual-language supervision.</p><a href="https://huggingface.co/datasets/FreedomIntelligence/ApolloCorpus" target="_blank" rel="noopener">ApolloCorpus</a></div>
    </div>
  </div>
</section>

<section class="impact-section">
  <h2>Design Principles</h2>
  <ul class="impact-list">
    <li>Data releases should be paired with model checkpoints, paper context, and task definitions so they are usable rather than merely downloadable.</li>
    <li>Retrieval-augmented instruction data should stress evidence use, citation-sensitive reasoning, and answer grounding.</li>
    <li>Domain corpora should connect to benchmarks so downstream work can measure whether adaptation helped.</li>
  </ul>
</section>

<section class="impact-section">
  <h2>Resource Map</h2>
  <div class="impact-grid">
    <div class="impact-card impact-resource">
      <strong>RAG-Instruct model</strong>
      <p>A Llama3-based checkpoint trained with retrieval-augmented instruction data.</p>
      <a href="https://huggingface.co/FreedomIntelligence/RAG-Instruct-Llama3-3B" target="_blank" rel="noopener">Model</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>Huatuo-26M</strong>
      <p>Large Chinese medical QA data used across medical LLM research.</p>
      <a href="https://github.com/FreedomIntelligence/Huatuo-26M" target="_blank" rel="noopener">Repository</a>
    </div>
    <div class="impact-card impact-resource">
      <strong>ApolloCorpus</strong>
      <p>Multilingual medical corpus for the Apollo model family.</p>
      <a href="https://huggingface.co/datasets/FreedomIntelligence/ApolloCorpus" target="_blank" rel="noopener">Dataset</a>
    </div>
  </div>
</section>

</div>
