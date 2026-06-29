---
layout: distill
title: "AI Agents in 2026: From Model Demos to Closed-Loop Delivery"
date: 2026-06-29
description: A structured essay adapted from a recent interview on why AI agents are moving from model-centric demos to closed-loop, verifiable, large-scale delivery.
tags: ai-agents harness-engineering agi

authors:
  - name: Benyou Wang
    url: "https://wabyking.github.io/"
    affiliations:
      name: CUHK-Shenzhen

toc:
  - name: 1. Jagged Intelligence, Not Smooth Intelligence
  - name: 2. Why Tools Matter More Than Many People Realize
  - name: 3. What Separates Production Agents from Demo Ware
  - name: 4. The Core Bottleneck Is Loop Engineering
  - name: 5. Where Enterprises Should Start
  - name: 6. Local AGI Arrives Before General AGI
---

This post is adapted from a recent interview with Red Star News on the state of AI agents in 2026. My central argument is simple: **2026 is not the year AI agents suddenly become universally autonomous; it is the year the field begins to shift from model-centric excitement to closed-loop, verifiable, large-scale delivery.**

In other words, the biggest change is not that models now "think like humans" in a smooth and general way. The bigger change is that they can increasingly operate inside real environments: they can call tools, observe outcomes, repair mistakes, and complete bounded tasks under explicit constraints.

# 1. Jagged Intelligence, Not Smooth Intelligence

One of the most important ideas for understanding today's agents is what I call **jagged intelligence**.

AI capability does not improve as a clean, uniform curve. A model may perform impressively on a difficult coding problem, a complicated data analysis task, or a multi-step document workflow, and then fail on something a human would regard as much simpler. Its ability profile is uneven. It has peaks and valleys rather than a flat frontier.

This matters because the real danger is not merely that agents make mistakes. The real danger is that they can complete several sophisticated steps successfully, earn our trust, and then fail unexpectedly at a later step that looks trivial. Once people have seen a few strong results, they naturally overgeneralize from those results and assume the whole chain is reliable.

This is why I remain cautious about claims of broad, general autonomy. Current agents are already strong in settings where:

- the goal is explicit,
- the information is sufficiently available,
- the task is digital,
- the action space is constrained,
- and the result can be verified.

In these environments, the model is no longer just answering questions. It can form a hypothesis, take an action, observe the outcome, and revise the next step. But once the goal becomes ambiguous, the background knowledge becomes implicit, or the task requires messy organizational judgment, the system becomes much less dependable.

Planning has the same pattern. Today's agents are good at **short closed-loop planning**: take one step, inspect the environment, revise, and continue. They are much weaker at **long open-loop execution**, where a system must commit to a long sequence of actions without frequent feedback. As the chain gets longer, target drift, context loss, and compounded error become increasingly significant.

# 2. Why Tools Matter More Than Many People Realize

If one capability is still underestimated, it is **tool use in a verifiable environment**.

Tools change the nature of intelligence. They allow a model to move from generating text to interacting with the world. Search, file editing, command execution, database access, testing, and programmatic validation all create opportunities for feedback. Once the environment can say "this worked" or "this failed," the agent is no longer forced to succeed in a single shot.

This is one major reason software engineering has become an early breakthrough domain for agents. The key is not simply that models understand code well. The key is that software offers three structural advantages:

- the objects being manipulated are digital,
- the actions can be executed through explicit tools,
- and the results can often be checked automatically through compilation, tests, logs, or runtime behavior.

That is also why products such as Claude Code and Codex are so important for understanding where the field is going. Their practical value does not come from the base model alone. It comes from the full system around the model: repository access, tool invocation, file editing, execution, logging, validation, and retry loops.

This is where **Harness Engineering** becomes decisive. The user does not experience the raw model. The user experiences a system made of:

- the model,
- the tools,
- the available context,
- the validation mechanism,
- the retry policy,
- and the handoff or fallback logic.

The model may still have jagged intelligence. But the product delivered to users cannot have jagged reliability. Good agent systems turn occasional capability spikes into repeatable delivery, while detecting, isolating, and containing capability troughs.

# 3. What Separates Production Agents from Demo Ware

In industry collaborations, the agents that get adopted are not always the ones built on the most advanced model. More often, they are the ones with better **system metrics**.

The first key metric is **end-to-end task completion rate**. Enterprises do not care whether a model gave a polished answer. They care whether an order was processed, a report was delivered, an exception was handled, or a compliance package was completed.

The second is **failure handling**. Many agent demos look excellent on the happy path. But once inputs become messy, a tool fails, or the environment changes, the system collapses. Production agents are better at recognizing uncertainty, retrying appropriately, switching tools when necessary, or handing the task back to humans.

The third is **observability and accountability**. A deployable agent should be able to answer:

- What information did it see?
- Which tool did it call?
- Why did it make that choice?
- Where did the failure happen?
- Can the action be rolled back?

One especially underappreciated metric is not "how often the agent acted," but **how often it correctly chose not to act when confidence was insufficient**. In real systems, restraint is often more valuable than reckless autonomy.

Finally, the true signal of value is whether people keep using the system. Many agent projects look impressive in a one-time acceptance demo, but users abandon them after two weeks. Real production value shows up in reuse rate, workflow penetration, and reduced human burden over time.

# 4. The Core Bottleneck Is Loop Engineering

From a technical perspective, the biggest bottleneck for large-scale deployment is no longer simply whether a model can perform a given operation. The bigger question is whether the system can **notice when the model is wrong, contain the impact, and let it try again**.

This is a reliability problem. Multi-step execution compounds error multiplicatively, not additively. Even if each individual step looks strong in isolation, the full chain may still be fragile.

That is why I believe the key concept is **Loop Engineering**: designing workflows in which the agent can act, be checked, receive feedback, repair itself, and continue until a concrete completion condition is met.

A usable loop should include at least five elements:

- the current state can be observed,
- the operation can be executed through tools,
- the result can be verified,
- mistakes can be rolled back or contained,
- and the system has a clear stop condition or handoff rule.

This is the practical difference between "prompting a model" and "building an agent system." The user is no longer writing one clever instruction and hoping for the best. Instead, the designer creates an environment where the model can repeatedly execute, inspect, and revise.

The hardest part is that many real-world domains do not naturally provide fast, clean feedback. In urban governance, healthcare, manufacturing, and public services, outcomes may take hours, days, or months to materialize. Some actions involve multiple organizations. Some mistakes are expensive or irreversible. In those settings, replacing one model with a bigger one is rarely enough. The real work is to transform a messy open-world process into smaller, observable, controllable closed loops.

This is why large-scale agent deployment is fundamentally an **environment engineering problem**. The upper bound of an agent may be set by the model, but the lower bound of reliability is set by the environment.

# 5. Where Enterprises Should Start

If a vertical enterprise wants to build its own agent system, my advice is straightforward: **do not begin by saying you want to train a foundation model**.

Start with one concrete workflow.

Not "build a finance agent."
Not "build a manufacturing model."
Instead:

- identify one type of abnormal order,
- one category of equipment fault diagnosis,
- one class of compliance material generation and checking,
- or one high-frequency, measurable, expensive workflow with digital inputs and outputs.

The best starting workflow has several properties:

- it happens often,
- current labor cost is nontrivial,
- inputs and outputs are already digital,
- success can be defined,
- and errors can be intercepted or rolled back.

Once that workflow is chosen, enterprises should prioritize building five assets:

- a clear completion standard for the task,
- the tool interfaces the model can call,
- the relevant knowledge and contextual memory,
- an evaluation set drawn from real operational cases,
- and governance mechanisms for permissions, auditing, rollback, and human takeover.

Together, these assets form the agent's **harness**. In practice, what many enterprises truly need to build is not a proprietary base model, but a proprietary task environment, tool ecosystem, evaluation standard, and data feedback loop.

These assets also matter because the same model can behave very differently inside different harnesses. Performance is not determined by the base model alone. It depends on how well the model fits the tool descriptions, context organization, permission design, and feedback format of the actual runtime environment.

The harness built for inference can also support future training. Real task traces, failures, human corrections, and tool feedback can later become evaluation data, supervised fine-tuning data, or reinforcement learning signals. But the evaluation benchmark itself should still remain independent; otherwise the system risks learning to pass the test rather than solve the real problem.

# 6. Local AGI Arrives Before General AGI

I have become more optimistic about AGI than I was a few years ago, but not because I think models have suddenly become universally general.

I am more optimistic because we are now seeing systems that can operate in real environments, call tools continuously, receive feedback, and close the loop on meaningful work. That is a stronger signal than isolated benchmark gains.

Still, AGI will not arrive all at once, and it will not arrive uniformly across every domain. A better way to think about the next phase is **local AGI**: systems that reach or exceed ordinary human performance in a meaningful fraction of bounded knowledge work, especially where workflows are digital, tools are available, and outcomes can be validated.

That means the first strong AGI-like systems will likely appear in places such as:

- software engineering,
- data analysis,
- research assistance,
- operations support,
- and other environments with clear boundaries and strong feedback loops.

So if I had to summarize the state of the field in one sentence, it would be this:

> **2026 is the turning point when AI agents in China begin to move from model capability competition toward closed-loop engineering and scalable delivery, and AGI starts to emerge first as local AGI in well-bounded environments rather than as uniform general intelligence everywhere at once.**

That is the transition worth watching.
