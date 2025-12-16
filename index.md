---
layout: full
---

<!-- HERO (contained, premium overlay) -->
<section class="ds-container">
  <div class="ds-hero">
    <img src="{{ '/assets/img/hero_oil.png' | relative_url }}" alt="Oil price shocks and market reactions">
    <div class="ds-hero-content">
      <div class="ds-hero-card">
        <span class="ds-kicker">A data story</span>
        <h1 class="ds-title">Oil shocks, sectors, and portfolio design</h1>
        <p class="ds-subtitle">
          When oil moves abruptly, different parts of the market react in different ways.
          We quantify those reactions, examine how they change across environments, and translate them into portfolio insights.
        </p>
      </div>
    </div>
  </div>

  <p class="ds-lead">
    Oil price shocks are a recurring source of stress for financial markets, but their impact is far from uniform.
    Some sectors react immediately through costs and margins, others through demand and risk sentiment,
    while a few appear comparatively resilient.
  </p>

  <p class="ds-lead">
    A simple way to think about it is this: imagine <strong>oil as a boss</strong>.
    On calm days, decisions are predictable and business runs smoothly.
    On bad days, sudden changes force every team to adjust — and not every team is equally exposed.
  </p>

  <p class="ds-lead">
    The metaphor is just a guide for intuition. The analysis itself is data-driven:
    we measure how sector returns respond to oil shocks, how those responses vary across market environments,
    and what this implies for cyclical versus defensive portfolio design.
  </p>

  <div class="ds-divider"></div>

  <div class="ds-grid">
    <div class="ds-card span-6">
      <span class="ds-tag">Core idea</span>
      <h3>One shock, many outcomes</h3>
      <p>
        We treat oil price shocks as stress events and examine heterogeneous sector responses around them.
        The goal is to identify which parts of the market are consistently exposed versus consistently resilient.
      </p>
    </div>

    <div class="ds-card span-6">
      <span class="ds-tag">Why it matters</span>
      <h3>From explanation to allocation</h3>
      <p>
        If sensitivity differs by sector and environment, portfolio construction should reflect that.
        We evaluate the trade-off between cyclical upside and defensive protection, especially around shock periods.
      </p>
    </div>

  </div>

  <div class="ds-divider"></div>

  <h2 style="margin: 8px 0 12px 0; letter-spacing:-0.01em;">What we study</h2>

  <div class="ds-grid">
    <div class="ds-card span-4">
      <span class="ds-tag">RQ1</span>
      <h3>Sector responses</h3>
      <p>Which sectors are most sensitive to oil shocks, and which behave more defensively?</p>
    </div>

    <div class="ds-card span-4">
      <span class="ds-tag">RQ2</span>
      <h3>Market environments</h3>
      <p>Do sector responses change across regimes? Does the same shock behave differently depending on context?</p>
    </div>

    <div class="ds-card span-4">
      <span class="ds-tag">RQ3</span>
      <h3>Portfolio implications</h3>
      <p>How do cyclical vs defensive portfolios behave around oil shocks, especially in drawdowns?</p>
    </div>

    <div class="ds-card span-6">
      <span class="ds-tag">Causal perspective</span>
      <h3>Interpreting effects</h3>
      <p>
        We complement the empirical analysis with a causal framing to assess whether observed patterns are consistent
        with oil shocks having a direct effect on sector returns (assumptions and checks are in the notebook).
      </p>
    </div>

    <div class="ds-card span-6">
      <span class="ds-tag">Next</span>
      <h3>Start with sector exposure</h3>
      <p>
        We begin by ranking sector responses around shock events, then move to regimes and portfolio-level consequences.
      </p>
    </div>

  </div>
</section>
