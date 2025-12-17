---
layout: full
---

<!-- FULL-BLEED HERO (centered title like reference) -->
<div class="ds-hero ds-hero--fullbleed">
  <img
    class="ds-hero-img"
    src="{{ '/assets/img/hero_oil.png' | relative_url }}"
    alt="Oil price shocks and market reactions"
  />

  <div class="ds-hero-overlay"></div>

  <div class="ds-hero-center">
    <div>
      <h1 class="ds-hero-title">Oil shocks, sectors, and portfolio design</h1>
      <p class="ds-hero-subtitle">
        How do oil shocks reshape sector performance and portfolio design?
      </p>
    </div>
  </div>

  <div class="ds-hero-foot">
    <p class="ds-hero-credit">
      A project created by Team LEMONADA • Charbel • Nicolas • Kevin • Ivana • Lea
    </p>
  </div>
</div>

<!-- PAGE CONTENT (contained) -->
<section class="ds-wrap ds-top">

  <h1 style="margin: 18px 0 10px 0;">Introduction</h1>

  <p class="ds-lead">
    Oil is more than just a commodity — it is a macroeconomic force that quietly shapes costs, expectations,
    and risk across financial markets. When oil prices move abruptly, markets react, but not all in the same way.
    Some sectors feel the impact immediately through input costs and margins, others through demand and investor sentiment,
    while a few appear relatively insulated.
  </p>

  <p class="ds-lead">
    A simple way to think about it is this: imagine <strong>oil as a boss</strong>.
    On calm days, decisions are predictable and business runs smoothly. On stressful days, sudden changes force every team
    to adapt — and not every team is equally exposed.
  </p>

  <blockquote class="ds-quote">
    <strong>This leads us to an essential question:</strong> how do oil price shocks reshape sector performance,
    and what does this imply for portfolio design?
  </blockquote>

  <p class="ds-lead">
  In this setting, we step in as consultants inside the firm. When the boss is calm, patterns are easy to read.
  When moods shift abruptly, reactions across teams reveal who is exposed, who adapts, and who remains steady.
  Watching these responses closely is often the only way to understand how the organization really works.
</p>
  </div>

   <p class="ds-lead">
    In this setting, we step in as consultants inside the firm. When the boss is calm, patterns are easy to read.
    When moods shift abruptly, reactions across teams reveal who is exposed, who adapts, and who remains steady.
    Watching these responses closely is often the only way to understand how the organization really works.
  </p>

  <p class="ds-lead">
    Before looking at how oil shocks propagate through the market, we first need to clarify how the market itself
    is structured. Stocks are not analyzed in isolation. Each company belongs to an industry, and industries are grouped
    into broader sectors that capture shared economic exposure.
  </p>

  <p class="ds-lead">
    This hierarchy allows us to study how common forces — such as energy price shocks — affect groups of firms with
    similar characteristics rather than individual stocks. In what follows, we focus primarily on sectors, while
    occasionally zooming in on specific industries when finer distinctions are informative. All analyses are conducted
    using monthly data.
  </p>

<p class="ds-lead">
    To make this structure concrete, the figure below shows how the stock universe is organized, from broad sectors down to individual stocks.

  </p>
<div class="ds-embed">
  <iframe
    src="{{ '/assets/interactive/treemap.html' | relative_url }}"
    width="100%"
    height="650"
    style="border:0; border-radius: 12px;"
    loading="lazy"
  ></iframe>
</div>
  <p class="ds-caption">
    <strong>Figure 1.</strong> Stock universe organized by sector, industry, and individual stocks.
    Tile size reflects median monthly dollar trading volume.
  </p>edian monthly dollar trading volume.

<section class="ds-wrap ds-figure-section">

  <p class="ds-figure-intro">
    With the market structure in place, we now turn to the behavior of oil prices themselves.
    If oil truly acts as the boss in this setting, its mood is far from stable. Periods of calm
    are punctuated by sudden swings, sharp spikes, and abrupt reversals, often linked to geopolitical
    events, demand shifts, or broader economic stress.
  </p>

  <p class="ds-figure-intro">
    The figure below shows the evolution of Brent crude oil prices at a monthly frequency from
    <strong>1960 to 2025</strong>, providing a long-run view of the environment in which firms and sectors operate.
    While this full history offers useful context, our empirical analysis focuses on the period from
    <strong>January 2000 to April 1, 2020</strong>, the window over which sector and industry data are consistently available.
    This interval spans several oil price regimes and major disruptions, making it particularly informative
    for studying how shocks propagate through the market.
  </p>

  <div class="ds-static-figure">
    <img
      src="{{ '/assets/img/brent_price_monthly.png' | relative_url }}"
      alt="Brent crude oil price (monthly, USD per barrel)"
    />
  </div>

  <p class="ds-caption">
    <strong>Figure 2.</strong> Brent crude oil price (monthly, USD per barrel), 1960–2025.
    The analysis in this study focuses on the period January 2000 to April 1, 2020.
  </p>

</section>

</section>
