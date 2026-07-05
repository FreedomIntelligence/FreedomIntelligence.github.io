---
layout: distill
title: "Interview on the SLAI Open Day: Building AI for Worlds That Think Back"
date: 2026-07-05
permalink: /blog/2026/slai-open-day-interview/
description: "A conversation on why AI must model human beliefs, close real-world feedback loops, and use language-centered intelligence to act responsibly in messy worlds."
tags: slai open-day world-models medical-ai language-models research

authors:
  - name: Benyou Wang
    url: "https://wabyking.github.io/"
    affiliations:
      name: CUHK-Shenzhen

toc:
  - name: "1. Economic World Models Are Not Physics with Prices"
  - name: "2. Deployment Requires Closed Loops, Not Only Strong Models"
  - name: "3. Why SLAI Matters for Young Researchers"
  - name: "4. Language as the Brain of Embodied and Scientific Intelligence"
  - name: "5. Advice to Students: Write Papers on the Real Ground"
---

{% include figure.html path="assets/img/media-roundup-2026/shenzhen-tv-ai-agents-interview.jpg" class="img-fluid rounded z-depth-0" zoomable=true alt="Shenzhen TV interviews Benyou Wang at the SLAI Open Day" caption="Shenzhen TV interview with Benyou Wang at the Shenzhen Loop Area Institute Open Day." %}

This post is adapted from an interview at the Shenzhen Loop Area Institute (SLAI) Open Day, where several demos touched on economic world models, medical AI deployment, embodied intelligence, brain-computer interfaces, and the future of research training.

The central message is simple: **the next stage of AI will not be defined only by larger models, but by whether we can build systems that understand messy worlds, close feedback loops, and solve real problems with responsibility.**

# 1. Economic World Models Are Not Physics with Prices

At the Open Day, one of the demos focused on economic world models. A natural question is how an economic world model differs from the physical world models that many AI researchers are now discussing.

The essential difference is that the physical world is governed primarily by objective laws, while the economic world is shaped by human beliefs, expectations, emotions, and collective behavior.

Newton is often remembered for the idea that we may be able to calculate the motion of planets, but not the madness of people. Even one of the greatest scientists in history suffered losses in financial speculation. That story captures something fundamental: the economic world is not just a system of external objects. It is a world in which human subjectivity participates in the dynamics.

In physics, the rules do not change because particles believe something different about tomorrow. In economics, the rules of the game can change precisely because people change what they believe. Markets are not only mechanisms of price discovery; they are also social arenas of expectation, trust, fear, coordination, and panic.

This makes economic world models unusually difficult. A small change in the beliefs of a few influential actors can trigger a black-swan event. A rumor, a policy expectation, a liquidity shock, or a sudden shift in confidence can reshape the entire landscape. In that sense, the complexity of the economic world may be even higher than that of many physical systems.

This is why economic world models should not be treated as physics models with prices attached. They need to model agents, incentives, information flows, institutional constraints, belief updates, and emergent collective behavior. The challenge is not only to predict trajectories, but to understand how the rules themselves evolve when people react to the model, to each other, and to the imagined future.

# 2. Deployment Requires Closed Loops, Not Only Strong Models

Another question at the Open Day concerned HuatuoGPT, our medical large language model system that has been deployed across hospital and community healthcare settings. What is the core challenge of real AI deployment?

I often think about this through the example of autonomous driving.

Today, it is increasingly hard to deny that AI can drive better than humans on average in many settings. But public acceptance is still not as high as the average capability might suggest. Apart from ethical and legal reasons, one important technical reason is that AI systems may have strong average performance while still having a weak lower bound. They may lack reliable fallback behavior.

This is the key problem in many AI applications. We want AI to autonomously complete a sequence of actions and finish an entire task. But current AI capability is jagged. Some abilities are surprisingly strong, while some seemingly simple tasks still fail. In a long chain of actions, one weak link can break the whole system.

Therefore, the question is not only whether a model is strong. The question is whether the system can remain reliable when the model is uneven.

Domains such as chess, coding, and mathematics show us one path forward. They have relatively well-defined tasks, complete inputs, explicit action spaces, smooth data flow, and verifiable outcomes. In such environments, AI can attempt, verify, repair, and iterate. This is the spirit of what I call **loop engineering**: build a closed loop in which the system can act, receive feedback, detect errors, and improve.

Medical AI needs the same discipline, but the medical world is much more complex. We cannot simply throw an AI system into the deepest clinical decision-making scenarios and hope it behaves safely. We should begin with scenarios where the loop can be closed: pre-consultation, triage, patient education, structured information collection, follow-up support, and other bounded workflows where inputs, outputs, and escalation rules can be defined.

HuatuoGPT has moved forward with the strong support of Academician Zhi-Quan Luo, The Chinese University of Hong Kong, Shenzhen, and Shenzhen Research Institute of Big Data. The strategy is to start from healthcare scenarios where closed-loop optimization is possible, build fallback mechanisms, and then gradually expand toward deeper medical workflows.

Real deployment is not a press release. It is an engineering process of building capability, reliability, and trust step by step.

# 3. Why SLAI Matters for Young Researchers

I have had the opportunity to visit and collaborate with several leading international institutions. From that perspective, what is most distinctive about SLAI as a platform for young scholars?

For me, the greatest strength of SLAI is that it is designed as a cross-sector, interdisciplinary platform. It sits at the intersection of academia, industry, and research application. This makes it easier to organize work that would be difficult inside a traditional university structure.

Recently, we have been exploring ways to connect multiple centers and research teams, including social intelligence, language and interactive intelligence, and embodied intelligence. The goal is to design new paradigms for human-AI interaction: interaction that is closer to the full-duplex nature of human conversation, and systems that can connect dialogue, action planning, and execution.

This kind of work requires many types of expertise at the same time. It needs language models, multimodal perception, embodied planning, social simulation, human-computer interaction, cognitive modeling, and real application scenarios. It also needs young researchers who are willing to cross disciplinary boundaries and build something together.

That is where SLAI is especially attractive. It creates a space where young researchers from different backgrounds can coordinate around ambitious systems, rather than staying isolated within narrow disciplinary boxes.

# 4. Language as the Brain of Embodied and Scientific Intelligence

Many demos at the Open Day involved embodied intelligence and brain-computer interfaces. Since my own background is in natural language processing, I was asked how I see the foundational role of language models in these interdisciplinary directions.

Noam Chomsky once argued that the primary function of language is not merely communication, but thought. Whether or not one accepts this statement in full, it captures an important intuition for AI: language is not only a channel for exchanging messages; it is also a medium for abstraction, planning, reasoning, and self-reflection.

We can see that animals such as dogs have impressive embodied capabilities. They move smoothly, coordinate perception and action, and interact with the physical world with remarkable agility. But their intelligence seems to face a ceiling, partly because their language system is limited. Without a rich symbolic and compositional medium, it is much harder to build abstract thought, long-horizon planning, and transferable knowledge.

For AI, this suggests that language intelligence remains one of the crown jewels. Embodied robots need strong perception and control, but they also need a high-level brain for task understanding, planning, explanation, correction, and coordination with humans. AI for science needs tools, data, simulation, and domain knowledge, but it also needs a language-centered reasoning layer that can form hypotheses, connect concepts, and communicate with scientists.

My view of general artificial intelligence is therefore language-centered. Not language-only, but language-centered.

Future intelligent systems will certainly be multimodal, embodied, tool-using, and connected to the physical and social world. But language will remain the organizing medium that connects perception, action, memory, reasoning, and communication. It is the interface through which AI systems can become not only reactive machines, but thinking partners.

# 5. Advice to Students: Write Papers on the Real Ground

Many students at the Open Day are aiming for top conferences such as NeurIPS, ICML, and ICLR. Having served as an area chair for these venues, what would I most like to tell them?

Academician Zhi-Quan Luo often reminds us that research is not leaderboard chasing. Research should solve real problems in the real world.

In an earlier stage of AI research, a student could often start with a well-defined problem, a clear evaluation protocol, a complete dataset, and a known research setting. With a good architecture, a good loss function, or a clever algorithm, it was possible to write a strong paper.

That kind of research still has value. But as AI develops rapidly, the frontier is moving.

Today, excellent research increasingly requires students to go into real scenarios, identify painful problems, develop their own technical edge, and connect research results with application deployment and product iteration. The loop should not stop at the paper. It should connect problem discovery, technical invention, system building, user feedback, and scientific contribution.

In Chinese, we sometimes say that one should "write papers on the land of the motherland." The deeper meaning is not nationalism in a narrow sense. It means that research should not remain on paper only. It should touch the ground. It should respond to real constraints, real people, real systems, and real needs.

For students who want to publish at top conferences, my advice is therefore:

- do not only ask what benchmark you can improve;
- ask what real problem has not yet been properly defined;
- do not only search for a clever trick;
- build a technical moat that comes from understanding the scenario;
- do not only finish an experiment;
- create a loop where research, deployment, feedback, and iteration strengthen one another.

The best AI research in the coming years will not be pure paper exercises. It will be research that survives contact with the world.

That is also the spirit I hope students can take away from the SLAI Open Day: build models, but also build worlds; chase top conferences, but also chase real problems; develop algorithms, but also develop the judgment and responsibility to use them well.
