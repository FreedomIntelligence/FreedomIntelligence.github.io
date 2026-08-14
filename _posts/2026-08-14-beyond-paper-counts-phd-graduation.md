---
layout: distill
title: "Beyond Paper Counts: A Standard for PhD Graduation"
date: 2026-08-14
permalink: /blog/2026/beyond-paper-counts-phd-graduation/
description: "A durable PhD graduation standard should evaluate two things: whether a student can independently complete an important intellectual journey, and whether the result matters to a real community."
tags: phd-training research-culture mentorship impact independence

authors:
  - name: Benyou Wang
    url: "https://wabyking.github.io/"
    affiliations:
      name: CUHK-Shenzhen

toc:
  - name: "1. What a Durable Standard Requires"
  - name: "2. The Two Graduation Tests: Impact and Independence"
  - name: "3. Impact: Recognition With Consequence"
    subsections:
      - name: "Choosing a Defensible Domain"
      - name: "Evaluating Impact"
      - name: "An Impact Portfolio"
  - name: "4. Independence: End-to-End Ownership"
    subsections:
      - name: "The Full Research Cycle"
  - name: "5. Growth Matters More Than Volume"
  - name: "6. One Bar, Different Career Paths"
  - name: "7. A Practical Graduation Standard"
  - name: "8. What We Look for in PhD Students"

_styles: >
  d-article > p,
  d-article > ul,
  d-article > ol {
    color: var(--global-text-color);
    font-size: 1.02rem;
    line-height: 1.76;
  }

  d-article h1 {
    border-top: 1px solid var(--global-divider-color);
    margin-top: 3.25rem;
    padding-top: 1.3rem;
  }

  d-article h2 {
    margin-top: 2.2rem;
  }

  .graduation-lead {
    border-left: 4px solid var(--global-theme-color);
    color: var(--global-text-color);
    font-size: 1.18rem;
    line-height: 1.72;
    margin: 0 0 2rem;
    padding: 0.25rem 0 0.25rem 1.1rem;
  }

  .principle-grid,
  .metric-grid,
  .path-grid,
  .standard-grid {
    display: grid;
    gap: 0.9rem;
    margin: 1.35rem 0 1.8rem;
  }

  .principle-grid,
  .path-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .metric-grid,
  .standard-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .principle-card,
  .path-card,
  .standard-card {
    background: color-mix(in srgb, var(--global-theme-color) 5%, var(--global-bg-color));
    border: 1px solid color-mix(in srgb, var(--global-theme-color) 18%, var(--global-divider-color));
    border-radius: 10px;
    padding: 1rem 1.05rem;
  }

  .principle-card strong,
  .path-card strong,
  .standard-card strong {
    color: var(--global-theme-color);
    display: block;
    font-size: 1rem;
    margin-bottom: 0.35rem;
  }

  .principle-card p,
  .path-card p,
  .standard-card p {
    font-size: 0.94rem;
    line-height: 1.58;
    margin: 0;
  }

  .metric-test {
    background: color-mix(in srgb, var(--global-theme-color) 8%, var(--global-bg-color));
    border: 2px solid color-mix(in srgb, var(--global-theme-color) 48%, var(--global-divider-color));
    border-radius: 12px;
    padding: 1.15rem 1.2rem;
  }

  .metric-test__label {
    color: var(--global-theme-color);
    display: block;
    font-size: 0.76rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    margin-bottom: 0.55rem;
    text-transform: uppercase;
  }

  .metric-test strong {
    color: var(--global-text-color);
    display: block;
    font-size: 1.08rem;
    line-height: 1.55;
    margin-bottom: 0.65rem;
  }

  .metric-test p {
    color: var(--global-text-color-light);
    font-size: 0.92rem;
    line-height: 1.58;
    margin: 0;
  }

  .standard-card--primary {
    background: color-mix(in srgb, var(--global-theme-color) 9%, var(--global-bg-color));
    border-width: 2px;
  }

  .standard-card--optional {
    background: var(--global-bg-color);
    border-style: dashed;
  }

  .optional-badge {
    border: 1px solid var(--global-divider-color);
    border-radius: 999px;
    color: var(--global-text-color-light);
    display: inline-block;
    font-size: 0.68rem;
    font-weight: 800;
    letter-spacing: 0.07em;
    margin-bottom: 0.5rem;
    padding: 0.18rem 0.48rem;
    text-transform: uppercase;
  }

  .core-statement {
    background: color-mix(in srgb, var(--global-theme-color) 9%, var(--global-bg-color));
    border: 1px solid color-mix(in srgb, var(--global-theme-color) 25%, var(--global-divider-color));
    border-radius: 12px;
    margin: 1.5rem 0 2rem;
    padding: 1.2rem 1.3rem;
    text-align: center;
  }

  .core-statement .core-label {
    color: var(--global-text-color-light);
    display: block;
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.09em;
    margin-bottom: 0.45rem;
    text-transform: uppercase;
  }

  .core-statement strong {
    color: var(--global-theme-color);
    display: block;
    font-size: clamp(1.15rem, 2.8vw, 1.55rem);
    line-height: 1.42;
  }

  .evidence-table {
    border-collapse: separate;
    border-spacing: 0;
    border: 1px solid var(--global-divider-color);
    border-radius: 10px;
    display: table;
    margin: 1.25rem 0 1.8rem;
    overflow: hidden;
    width: 100%;
  }

  .evidence-table th,
  .evidence-table td {
    border-bottom: 1px solid var(--global-divider-color);
    padding: 0.75rem 0.85rem;
    text-align: left;
    vertical-align: top;
  }

  .evidence-table th {
    background: color-mix(in srgb, var(--global-theme-color) 7%, var(--global-bg-color));
    color: var(--global-theme-color);
    font-size: 0.9rem;
  }

  .evidence-table td {
    color: var(--global-text-color);
    font-size: 0.9rem;
    line-height: 1.55;
  }

  .evidence-table tr:last-child td {
    border-bottom: 0;
  }

  @media (max-width: 780px) {
    .principle-grid,
    .metric-grid,
    .path-grid,
    .standard-grid {
      grid-template-columns: 1fr;
    }

    .evidence-table,
    .evidence-table thead,
    .evidence-table tbody,
    .evidence-table tr,
    .evidence-table th,
    .evidence-table td {
      display: block;
      width: 100%;
    }

    .evidence-table thead {
      display: none;
    }

    .evidence-table td {
      border-bottom: 0;
      padding-bottom: 0.3rem;
      padding-top: 0.3rem;
    }

    .evidence-table td:first-child {
      color: var(--global-theme-color);
      font-weight: 700;
      padding-top: 0.8rem;
    }

    .evidence-table td:last-child {
      border-bottom: 1px solid var(--global-divider-color);
      padding-bottom: 0.8rem;
    }

    .evidence-table tr:last-child td:last-child {
      border-bottom: 0;
    }
  }
---

<p class="graduation-lead">What should it take to graduate with a PhD? Paper counts, venue lists, citations, and awards are useful signals, but they are not a durable definition of doctoral success. The deeper question is whether a candidate has become capable of originating and completing important work that matters beyond the advisor–student relationship.</p>

Research fields evolve. Conferences rise and fall. Publication standards change. New forms of contribution—open-source software, foundation models, benchmarks, products, public infrastructure, and influential technical writing—can become as consequential as traditional papers.

A graduation standard should therefore evaluate something more durable than the prestige hierarchy of the moment.

# 1. What a Durable Standard Requires

We believe a good PhD graduation standard should satisfy three requirements.

<div class="principle-grid">
  <div class="principle-card">
    <strong>Time-consistent</strong>
    <p>The standard should remain meaningful as venues, platforms, technologies, and accepted forms of contribution change.</p>
  </div>
  <div class="principle-card">
    <strong>Operational</strong>
    <p>Expert judgment will remain necessary, but the procedure should be explicit enough for students and committees to use consistently.</p>
  </div>
  <div class="principle-card">
    <strong>Career-aligned</strong>
    <p>Academic, industrial, and entrepreneurial paths may produce different artifacts without lowering the common intellectual bar.</p>
  </div>
</div>

This is not an argument for replacing judgment with a formula. It is an argument for making the object of judgment clearer.

# 2. The Two Graduation Tests: Impact and Independence

Two dimensions capture the essence of doctoral training. To make them operational, we propose two direct graduation tests.

<div class="metric-grid">
  <div class="metric-test">
    <span class="metric-test__label">Metric 01 · Domain recognition</span>
    <strong>After defining a defensible domain, can five to ten of the most recognized active figures in that domain identify the PhD candidate and positively recognize the candidate's main contribution?</strong>
    <p>This is the clearest operational test of impact: serious people outside the candidate's immediate group know what the candidate contributed and believe that it matters.</p>
  </div>
  <div class="metric-test">
    <span class="metric-test__label">Metric 02 · Independent publication</span>
    <strong>At one of the conferences or journals the candidate reads most often, can the candidate independently take one paper from idea to publication without substantive help from any senior researcher?</strong>
    <p>This is the clearest operational test of independence: the candidate can originate, execute, write, submit, revise, and complete work at the level of a venue central to their intellectual development.</p>
  </div>
</div>

These are the two primary indicators. **Impact and independence are necessary conditions for graduation, but they are not sufficient conditions.** A candidate who lacks either one has not met the core graduation threshold. Satisfying both establishes that threshold, but does not automatically guarantee graduation.

<div class="core-statement">
  <span class="core-label">The central proposition</span>
  <strong>A PhD graduate should independently complete an important intellectual journey and show that the result mattered beyond the student and the advisor.</strong>
</div>

# 3. Impact: Recognition With Consequence

Impact does not require changing an entire discipline or becoming globally famous. It requires becoming meaningfully known for a specific contribution within a credible intellectual community.

The relevant community may be broad—language models, medical AI, embodied intelligence—or narrow, such as clinical-reasoning models for rare diseases or vision-language systems for ophthalmology. Breadth changes the level of evidence required, but narrowness does not make a domain less respectable.

The key question is:

> **Within a credible domain, has the candidate produced something that serious people know, value, and use?**

## Choosing a Defensible Domain

Domain selection must be flexible without becoming gameable. A student should not define a field so narrowly that it contains only the student, the advisor, and a few collaborators.

A defensible domain should have:

- an intellectually coherent problem or body of practice;
- active participants beyond the candidate's immediate network;
- independent experts who can assess quality;
- and recognizable standards of evidence or usefulness.

The committee should approve the domain before the final evaluation. Strong impact in a broad field is exceptional; strong impact in a narrow but important field is fully respectable. An inability to demonstrate meaningful impact even after repeatedly narrowing the domain is a warning sign.

## Evaluating Impact

Near graduation, the student and committee should identify **five to ten of the most recognized, active figures in the approved domain**. Depending on the work, these evaluators may be researchers, engineers, clinicians, entrepreneurs, policymakers, educators, or open-source maintainers.

**The impact test is explicit: can these five to ten leading figures identify the PhD candidate, describe the candidate's main contribution, and recognize it positively?**

They can be asked four simple questions:

1. Are you aware of the candidate or the candidate's work?
2. Can you identify the candidate's main contribution?
3. Do you regard that contribution positively?
4. Has it influenced your research, engineering, evaluation, deployment, teaching, decision-making, or understanding of the problem?

Recognition alone is not enough: a controversial or incorrect result may be widely known. The relevant standard is **positive, contribution-specific recognition**.

Four properties make the evidence stronger:

1. **Externality:** recognition comes from people outside the advisor's immediate network.
2. **Attribution:** external users can explain what the student actually contributed.
3. **Durability:** the work continues to matter after its launch or publicity cycle.
4. **Consequence:** the contribution changed how someone researches, builds, decides, teaches, deploys, or serves others.

Raw numbers—citations, stars, downloads, page views, media mentions, or revenue—can support the case, but none should settle it on their own. Impact should be demonstrated through evidence, not asserted through metrics.

## An Impact Portfolio

The recognized contribution does not have to be a paper. The form should follow the problem and the intended community.

<table class="evidence-table">
  <thead>
    <tr>
      <th>Form of contribution</th>
      <th>Credible evidence of impact</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Academic work</td>
      <td>An influential idea or paper, independent replication, sustained citations, a best-paper award, or recognition by respected researchers. The venue is evidence, not the definition.</td>
    </tr>
    <tr>
      <td>Open source, models, data, and benchmarks</td>
      <td>External contributors, integrations, downstream projects, substantial real use, independent evaluation, or a community that continues to build around the artifact.</td>
    </tr>
    <tr>
      <td>Industrial systems and products</td>
      <td>Continued production use, documented improvements in cost or performance, meaningful retention, revenue, or public acknowledgment of adoption.</td>
    </tr>
    <tr>
      <td>Entrepreneurship</td>
      <td>A differentiated product, customer validation, a capable team, high-quality funding, recurring revenue, defensible technology, or organizational sustainability.</td>
    </tr>
    <tr>
      <td>Public writing and community building</td>
      <td>An original framework, course, standard, competition, or technical explanation that reorganizes a field, changes professional practice, or enables others to contribute.</td>
    </tr>
    <tr>
      <td>Public interest and global influence</td>
      <td>Adoption by hospitals, schools, public institutions, low-resource communities, international organizations, or overseas users; influence on policy, standards, or social outcomes.</td>
    </tr>
  </tbody>
</table>

Context matters. A clinical system used every day by one hundred physicians may be more consequential than a consumer application opened once by one hundred thousand people. Work with limited commercial value can still have profound social value. The task of evaluation is to understand what changed, for whom, and for how long.

# 4. Independence: End-to-End Ownership

A PhD is not merely a collection of technically correct results. It is training in intellectual independence.

Independence is not isolation. Leading junior students, engineers, or collaborators can be stronger evidence of independence than completing a solo project. The relevant distinction is between **ownership** and **participation**: can the candidate provide intellectual and organizational leadership without relying on a senior researcher to define every problem, design every method, resolve every obstacle, and drive the project to completion?

A useful counterfactual test is:

> **Had the senior researchers stepped back after the initial discussion, would the student still have been capable of completing the project?**

For graduation, this counterfactual should be demonstrated through one concrete result:

> **At one of the conferences or journals the candidate reads most often, the candidate should independently take at least one paper from idea to publication without substantive help from any senior researcher.**

“Without substantive help” means that no senior researcher materially defines the problem, designs the central method, rescues the execution, rewrites the paper, or drives the submission and revision process. The candidate may still lead peers or junior collaborators; independence is ownership, not isolation.

## The Full Research Cycle

At least once during the PhD, the candidate should lead a substantial project through the complete cycle:

1. identify an important problem;
2. understand the relevant literature and real-world context;
3. formulate a clear research question or product thesis;
4. design an appropriate methodology;
5. obtain or organize the necessary resources;
6. implement and evaluate the idea;
7. diagnose failures and revise the approach;
8. coordinate collaborators where necessary;
9. communicate the result clearly and respond to criticism;
10. bring the work to publication, deployment, adoption, or another credible form of completion.

The advisor may challenge assumptions, offer high-level feedback, and help the student avoid strategic mistakes. The project, however, should not collapse whenever detailed instructions stop.

# 5. Growth Matters More Than Volume

A PhD student does not need a very large number of papers. Early projects are part of training, and it is reasonable for one or two of them to be limited in ambition or quality. What matters is the trajectory.

Later work should be more original, rigorous, ambitious, complete, or consequential than earlier work. A healthy PhD should read as intellectual development, not repeated production at the same level.

Publishing many papers of nearly identical quality can therefore be risky. It may show that a student has become efficient at a publication pattern without developing stronger judgment, deeper ownership, or greater ambition.

The final-stage work should demonstrate some combination of:

- a more important problem or stronger conceptual contribution;
- more rigorous evaluation or a more complete system;
- a larger and more difficult deployment;
- greater leadership responsibility;
- or substantially stronger external recognition.

We would rather see a student progress from a modest first project to a distinctive final contribution than produce a long list of interchangeable papers. The purpose of a PhD is to become capable of work that was previously beyond one's reach.

# 6. One Bar, Different Career Paths

Industry, academia, and entrepreneurship produce different portfolios. They should not produce different standards of intellectual seriousness.

<div class="path-grid">
  <div class="path-card">
    <strong>Frontier industry</strong>
    <p>Evidence may emphasize technical originality, system-building, benchmark performance, open-source influence, or production adoption. Competent execution is a baseline; distinctive depth and frontier judgment are the differentiators.</p>
  </div>
  <div class="path-card">
    <strong>Academia</strong>
    <p>Evidence should show a coherent research agenda, a recognizable intellectual identity, independent problem selection, mentoring ability, and the capacity to build a long-term program—not merely a strong publication list.</p>
  </div>
  <div class="path-card">
    <strong>Entrepreneurship</strong>
    <p>Evidence may include product adoption, customer validation, revenue, financing, team formation, intellectual property, or measurable social value. Starting a company is not itself impact; building something people need is.</p>
  </div>
</div>

The portfolio should be aligned with the candidate's intended next step. The common bar remains the same: independent leadership and externally validated consequence.

# 7. A Practical Graduation Standard

A candidate should be eligible for graduation consideration only when both primary indicators are satisfied. **Impact and independence are necessary, not sufficient:** meeting both establishes the core threshold, while the committee must still consider the quality, integrity, coherence, and overall body of work. Items 3 and 4 below are **optional supporting attributes**; they can strengthen the case, but they are not required and cannot replace either primary test.

<div class="standard-grid">
  <div class="standard-card standard-card--primary">
    <strong>1. Domain recognition</strong>
    <p>Five to ten leading figures in an approved and defensible domain can identify the candidate, explain the candidate's main contribution, and recognize it positively.</p>
  </div>
  <div class="standard-card standard-card--primary">
    <strong>2. Independent publication</strong>
    <p>At one of the conferences or journals the candidate reads most often, the candidate has independently taken at least one paper from idea to publication without substantive help from any senior researcher.</p>
  </div>
  <div class="standard-card standard-card--optional">
    <span class="optional-badge">Optional</span>
    <strong>3. An upward quality trajectory</strong>
    <p>Later work demonstrates clear growth in originality, rigor, ambition, leadership, completeness, or real-world consequence.</p>
  </div>
  <div class="standard-card standard-card--optional">
    <span class="optional-badge">Optional</span>
    <strong>4. Career-relevant readiness</strong>
    <p>The student's portfolio credibly prepares them for frontier industry, academia, entrepreneurship, or another path of comparable ambition.</p>
  </div>
</div>

No fixed number of papers is required by this framework. No single conference, journal, company, funding round, leaderboard position, or media mention guarantees graduation either. The evaluation concerns the whole body of evidence.

# 8. What We Look for in PhD Students

Graduation criteria and admission criteria should be connected. The qualities we expect at graduation should be visible, at least in an early form, when a student enters the group.

**Conviction.** We value students who are willing to form independent views about artificial intelligence, question fashionable assumptions, and pursue ideas because they seem important—not only because they are easy to publish. Conviction must be paired with execution.

**Self-direction.** Research contains long periods of uncertainty, failed experiments, negative reviews, and ambiguous progress. A student should be able to generate momentum, seek resources, identify the next step, and continue learning without constant external motivation.

**Positive leadership.** Leadership may mean mentoring junior students, resolving collaboration problems, building shared infrastructure, organizing discussions, or raising the ambition of the group. A strong researcher improves the environment around them as well as their own work.

**Responsibility and stewardship.** A research group is a community, not a collection of independent contractors. We value people who contribute to shared outcomes and take responsibility for something larger than their own publication record. Such work should never become imposed, unpaid administration; it should reflect professional maturity and institution-building capacity.
