---
layout: distill
title: "CUHK-Shenzhen Student Helps sZs Win the ICRA 2026 LeHome Challenge Real-World Final"
date: 2026-07-10
description: "A CUHK-Shenzhen SDS master's student and 2024 alumnus, Guo Shuqi, was a core member of team sZs, which ranked first in the ICRA 2026 LeHome Challenge real-world final."
tags: robotics embodied-ai lehome-challenge icra-2026 robot-learning
og_image: "/assets/img/media-roundup-2026/lehome-challenge-team.jpg"
source_links:
  - label: "CUHK-Shenzhen SDS WeChat announcement"
    url: "https://mp.weixin.qq.com/s/gFgrhZz7yOGz--WuHTxMCg"
  - label: "LeHome Challenge official website"
    url: "https://lehome-challenge.com/"
  - label: "ICRA 2026 competitions page"
    url: "https://2026.ieee-icra.org/program/competitions/"
  - label: "LeHome Challenge GitHub"
    url: "https://github.com/lehome-official/lehome-challenge"
  - label: "LeHome simulation environment paper"
    url: "https://arxiv.org/abs/2604.22363"

authors:
  - name: FreedomAI Lab
    url: "https://freedomintelligence.github.io/"
    affiliations:
      name: CUHK-Shenzhen

toc:
  - name: Quick Read
  - name: What Is the LeHome Challenge?
  - name: Why Garment Manipulation Is Hard
  - name: From Simulation to Real Robots
  - name: Why This Win Matters
  - name: Resources

_styles: >
  d-article > p {
    color: var(--global-text-color);
    font-size: 1.02rem;
    line-height: 1.86;
    margin: 1rem auto 1.15rem;
    max-width: 780px;
  }

  d-article > h2 {
    border-top: 1px solid var(--global-divider-color);
    font-size: 1.42rem;
    line-height: 1.3;
    margin: 2.45rem 0 1rem;
    padding-top: 1.25rem;
  }

  d-article > h2:first-of-type {
    margin-top: 1.6rem;
  }

  .lehome-hero,
  .lehome-figure {
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    margin: 1.35rem auto 1.8rem;
    max-width: 900px;
    overflow: hidden;
  }

  .lehome-hero img,
  .lehome-figure img {
    display: block;
    width: 100%;
  }

  .lehome-hero figcaption,
  .lehome-figure figcaption {
    color: var(--global-text-color-light);
    font-size: 0.9rem;
    line-height: 1.55;
    margin: 0;
    padding: 0.75rem 0.9rem;
  }

  .lehome-quick {
    background: color-mix(in srgb, var(--global-theme-color) 8%, var(--global-bg-color));
    border: 1px solid color-mix(in srgb, var(--global-theme-color) 22%, var(--global-divider-color));
    border-radius: 8px;
    display: grid;
    gap: 0.75rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin: 1.2rem auto 1.8rem;
    max-width: 900px;
    padding: 1rem;
  }

  .lehome-quick span {
    color: var(--global-text-color-light);
    display: block;
    font-size: 0.92rem;
    line-height: 1.55;
  }

  .lehome-quick strong {
    color: var(--global-theme-color);
    display: block;
    font-size: 0.98rem;
    margin-bottom: 0.25rem;
  }

  .lehome-resources {
    display: grid;
    gap: 0.8rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin: 1.2rem auto 1.6rem;
    max-width: 900px;
  }

  .lehome-resources a {
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    color: var(--global-text-color);
    padding: 0.9rem 1rem;
    text-decoration: none;
  }

  .lehome-resources a:hover {
    border-color: var(--global-theme-color);
    color: var(--global-theme-color);
  }

  @media (max-width: 720px) {
    .lehome-quick,
    .lehome-resources {
      grid-template-columns: 1fr;
    }
  }
---

<figure class="lehome-hero">
  <img src="/assets/img/media-roundup-2026/lehome-challenge-team.jpg" alt="Team sZs at ICRA 2026 LeHome Challenge">
  <figcaption>Team sZs at ICRA 2026. Image retained from the CUHK-Shenzhen SDS WeChat announcement.</figcaption>
</figure>

The CUHK-Shenzhen School of Data Science WeChat account recently reported that team **sZs** ranked first in the **ICRA 2026 LeHome Challenge real-world final**, earning a score of **895**. A core member of the team is **Guo Shuqi**, a CUHK-Shenzhen master's student in the School of Data Science, Shaw College member, and 2024 undergraduate alumnus.

The result is more than a competition headline. LeHome is a robotics challenge about teaching robots to manipulate garments, one of the most stubborn everyday tasks for embodied intelligence. Folding, unfolding, grasping, moving, and reorganizing clothes require a robot to reason about deformable objects whose shapes change continuously under contact.

## Quick Read

<div class="lehome-quick">
  <span><strong>Result</strong>Team sZs placed first in the real-world challenge leaderboard with 895 points.</span>
  <span><strong>CUHK-Shenzhen link</strong>Guo Shuqi, from CUHK-Shenzhen SDS, is listed on the winning team.</span>
  <span><strong>Research signal</strong>The challenge tests policy learning, visual perception, reasoning, control, and sim-to-real robustness.</span>
</div>

<figure class="lehome-figure">
  <img src="/assets/img/media-roundup-2026/lehome-challenge-leaderboard.png" alt="LeHome Challenge real-world leaderboard showing sZs ranked first with 895 points">
  <figcaption>The real-world leaderboard lists sZs in first place with 895 points. Image retained from the original SDS WeChat announcement.</figcaption>
</figure>

## What Is the LeHome Challenge?

The **LeHome Challenge 2026** was an official ICRA 2026 competition on garment manipulation skill learning in household scenarios. The official ICRA competition page describes garment manipulation as a difficult robotics problem because it involves deformable objects and contact-rich interaction. The LeHome organizers frame the challenge as a standardized benchmark for evaluating whether robots can understand and manipulate garments effectively.

The official challenge website describes a two-phase format. The first phase was an online simulation challenge running from early 2026 through April, and the second phase was a real-world challenge held on-site at ICRA in Vienna. Top teams from simulation were invited to the real-world stage, where the system had to survive the gap between a controlled virtual environment and real physical hardware.

## Why Garment Manipulation Is Hard

Many robotic manipulation benchmarks focus on rigid objects: blocks, tools, boxes, or parts whose geometry can be modeled with relatively stable assumptions. Garments are different. A shirt or pair of pants can fold, twist, wrinkle, occlude itself, and change shape after every grasp.

That makes the task a compact test of embodied intelligence. A useful system needs perception to infer garment state, policy learning to choose actions, control to execute those actions, and verification to decide whether the task is actually progressing. A robot also has to recover from failures, because small physical errors can compound across a long-horizon folding sequence.

The LeHome simulation paper makes this point from the infrastructure side: household robotics needs environments that support deformable objects, realistic interactions, varied categories, and practical robot embodiments. In other words, the field needs benchmarks that look less like isolated pick-and-place demos and more like everyday work.

## From Simulation to Real Robots

The LeHome organizers designated the **LeRobot SO-ARM101** as the robotic arm for both simulation and real-world phases. This matters because it forces teams to think about sim-to-real transfer rather than treating simulation as an isolated leaderboard game.

The challenge GitHub repository also emphasizes an important evaluation detail: garments from different categories are loaded randomly, and participants cannot rely on ground-truth category labels during evaluation. A successful policy therefore has to infer what it is facing and choose actions robustly under uncertainty.

That is why the sZs result is technically meaningful. According to the SDS announcement, the team integrated algorithmic models, visual perception, control strategies, and real-machine deployment into a complete loop. This is precisely where robotics becomes engineering: not just training a policy, but making the system work under timing pressure, camera noise, physical variability, and on-site constraints.

## Why This Win Matters

For CUHK-Shenzhen, the win highlights the value of cross-disciplinary training. Guo Shuqi's work sits at the intersection of vision-language-action models, embodied intelligence, human-robot interaction, and real-world system reliability. The SDS announcement notes that he is advised by Prof. Benyou Wang and Prof. Bingyi Jing, and that his broader research asks how AI systems can move from understanding to reliable action.

For the broader robotics community, LeHome points toward a healthier style of benchmark. The field is moving beyond short demonstrations toward tasks that require long-horizon execution, physical grounding, and repeatable evaluation. A garment-folding robot may sound domestic, but the underlying problem is general: how can an AI system perceive a changing physical state, plan under uncertainty, act through imperfect hardware, and verify its own progress?

That is also why this result belongs on the FreedomAI blog. It connects embodied AI to the lab's wider interest in agents, interaction, evaluation, and real-world deployment. The future of AI will not only be models that answer questions. It will be systems that can close the loop between perception, reasoning, action, and verification.

## Resources

<div class="lehome-resources">
  <a href="https://mp.weixin.qq.com/s/gFgrhZz7yOGz--WuHTxMCg" target="_blank" rel="noopener">Original CUHK-Shenzhen SDS WeChat announcement</a>
  <a href="https://lehome-challenge.com/" target="_blank" rel="noopener">LeHome Challenge official website and leaderboard</a>
  <a href="https://2026.ieee-icra.org/program/competitions/" target="_blank" rel="noopener">ICRA 2026 competitions page</a>
  <a href="https://github.com/lehome-official/lehome-challenge" target="_blank" rel="noopener">LeHome Challenge GitHub repository</a>
  <a href="https://arxiv.org/abs/2604.22363" target="_blank" rel="noopener">LeHome simulation environment paper</a>
  <a href="/projects/llm-agents-applications/">Related FreedomAI project: agents and interaction</a>
</div>
