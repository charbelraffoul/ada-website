---
layout: full
---

<!-- HERO -->
<section class="full-bleed ds-hero">
  <img src="{{ '/assets/img/hero_oil.png' | relative_url }}" alt="Oil as a moody boss">
  <div class="ds-hero-content">
    <div class="ds-hero-card ds-container">
      <span class="ds-kicker">Crude connections • Pre-COVID (≤ Apr 1, 2020)</span>
      <h1 class="ds-title">Oil Shocks, Sectors, and Portfolio Design</h1>
      <p class="ds-subtitle">
        A data story about how sudden oil price shocks ripple through “departments” of the economy,
        why the impact depends on the market’s mood, and what that implies for building resilient portfolios.
      </p>
    </div>
  </div>
</section>

<section class="ds-container" style="margin-top:22px;">

  <div class="ds-card">
    <span class="ds-pill">How to read this story</span>
    <p>
      We use one playful analogy to make the narrative intuitive, but we keep claims precise.
      <strong>The metaphor is illustrative.</strong> The conclusions come from the data, and the methods live in the notebooks.
    </p>
  </div>

  <div class="ds-divider"></div>

  <h2 style="margin: 8px 0 12px 0; letter-spacing:-0.01em;">The metaphor</h2>

  <div class="ds-grid">
    <div class="ds-card span-4">
      <span class="ds-pill">The Boss</span>
      <h3>Oil shocks</h3>
      <p>
        Sudden price movements that act like external “decisions”, affecting costs, inflation pressure, and risk sentiment.
      </p>
    </div>

    <div class="ds-card span-4">
      <span class="ds-pill">The Departments</span>
      <h3>Sectors &amp; industries</h3>
      <p>
        Each department has different exposure. Some are energy-sensitive, others are defensive, others react through demand.
      </p>
    </div>

    <div class="ds-card span-4">
      <span class="ds-pill">The Moods</span>
      <h3>Economic regimes</h3>
      <p>
        Context matters. The same shock can land differently depending on whether the environment is calm, tense, or stressed.
      </p>
    </div>

  </div>

  <div class="ds-divider"></div>

  <div class="ds-note">
    <p style="margin:0;">
      <strong>Why we stop at Apr 1, 2020:</strong>
      COVID marks a structural break with lockdowns and extraordinary interventions. In the analogy, it’s not a mood swing —
      it’s the moment the office shuts down and normal dynamics stop applying. To avoid confounding oil effects with a system-wide shock,
      we focus on the pre-COVID period.
      <span class="ds-muted">(Details and robustness checks are in the notebooks.)</span>
    </p>
  </div>

  <div class="ds-divider"></div>

  <h2 style="margin: 8px 0 12px 0; letter-spacing:-0.01em;">What we ask</h2>

  <div class="ds-grid">
    <div class="ds-card span-6">
      <span class="ds-pill">RQ1 • Shock days</span>
      <h3>When the boss snaps, who gets hurt?</h3>
      <p>
        We quantify how different sectors respond around identified oil shock events and rank which departments are most exposed versus most resilient.
      </p>
    </div>

    <div class="ds-card span-6">
      <span class="ds-pill">RQ2 • Mood swings</span>
      <h3>Does the same shock behave differently by regime?</h3>
      <p>
        We compare sector responses across regimes to test whether the macro “mood” amplifies or dampens the impact.
      </p>
    </div>

    <div class="ds-card span-6">
      <span class="ds-pill">RQ3 • Company policy</span>
      <h3>What does this imply for portfolios?</h3>
      <p>
        We evaluate cyclical vs defensive portfolio constructions, focusing on drawdowns and behavior specifically around shock periods.
      </p>
    </div>

    <div class="ds-card span-6">
      <span class="ds-pill">Causal add-on</span>
      <h3>Is it correlation or causation?</h3>
      <p>
        We add a causal framing to estimate the effect of oil shocks under explicit assumptions, with sensitivity checks in the notebook.
      </p>
    </div>

  </div>

  <div style="margin-top:20px;" class="ds-card">
    <span class="ds-pill">Next</span>
    <p style="margin:0;">
      We start with <strong>RQ1</strong>: a “performance review” of departments after shock events —
      who reliably takes the hit, and who keeps the lights on.
    </p>
  </div>

</section>
