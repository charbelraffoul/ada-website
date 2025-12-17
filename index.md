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
    Oil is more than just a commodity, it is a macroeconomic force that quietly shapes costs, expectations,
    and risk across financial markets. When oil prices move abruptly, markets react, but not all in the same way.
    Some sectors feel the impact immediately through input costs and margins, others through demand and investor sentiment,
    while a few appear relatively insulated.
  </p>

  <p class="ds-lead">
    A simple way to think about it is this: imagine <strong>oil as a boss</strong>.
    On calm days, decisions are predictable and business runs smoothly. On stressful days, sudden changes force every team
    to adapt, and not every team is equally exposed.
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

  <p class="ds-lead">
    Before looking at how oil shocks propagate through the market, we first need to clarify how the market itself
    is structured. Stocks are not analyzed in isolation. Each company belongs to an industry, and industries are grouped
    into broader sectors that capture shared economic exposure.
  </p>

  <p class="ds-lead">
    This hierarchy allows us to study how common forces. such as energy price shocks, affect groups of firms with
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
  </p>

<section class="ds-wrap ds-figure-section">

  <p class="ds-figure-intro">
    With the market structure in place, we now turn to the behavior of oil prices themselves.
    If oil truly acts as the boss in this setting, its mood is far from stable. Periods of calm
    are punctuated by sudden swings, sharp spikes, and abrupt reversals, often linked to geopolitical
    events, demand shifts, or broader economic stress.
  </p>

  <p class="ds-figure-intro">
    The figure below shows the evolution of crude oil prices at a monthly frequency from
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
    <strong>Figure 2.</strong> Crude oil price (monthly, USD per barrel), 1960–2025.
  </p>

</section>

<p class="ds-lead">
  From this point onward, our study focuses exclusively on the period from
  <strong>January 2000 to April 1, 2020</strong>. All sector and industry level
  analyses, as well as the identification of oil price shocks, are conducted
  within this time window. This choice reflects both data availability and the
  desire to concentrate on a modern market environment characterized by repeated
  episodes of oil market stress and heightened financial integration.

</p><p class="ds-lead">
  Within this time frame, oil price movements occasionally depart sharply from their
  usual patterns. These episodes play a central role in what follows and motivate a
  closer look at how abrupt changes in oil prices propagate through financial markets.
</p>

<p class="ds-lead">
  To better understand how oil price movements transmit to the market, we begin by
  examining how sectors—and, in some cases, industries—react when oil prices experience
  sudden disruptions. Before turning to these responses, however, it is essential to
  clarify what we mean by an oil price shock.
</p>

<h2>What are oil price shocks?</h2>

<p class="ds-lead">
  Oil prices do not always evolve smoothly. While many changes reflect gradual
  adjustments in supply and demand, some episodes are characterized by abrupt and
  unusually large movements that arrive unexpectedly. These moments interrupt the
  normal pace of adjustment and force market participants to react quickly.
</p>

<p class="ds-lead">
  The analogy introduced earlier is useful here. When conditions are stable, decisions
  unfold predictably and responses are measured. When an unexpected decision arrives,
  timelines compress and reactions reveal underlying exposures. Oil price shocks
  correspond to these moments of disruption.
</p>

<p class="ds-lead">
  In this study, we use the term <em>oil price shocks</em> to refer to such sudden and
  pronounced movements in crude oil prices that stand out from typical month-to-month
  variation. Identifying these episodes provides a natural starting point for examining
  how different sectors and industries respond when confronted with unexpected changes
  in a key macroeconomic input.
</p>

<section class="ds-wrap ds-figure-section">

  <p class="ds-figure-intro">
    To concretize this definition, we identify oil price shocks using monthly
    crude oil log returns. Months corresponding to unusually large price
    movements are classified as shocks.
  </p>

  <div class="ds-embed">
    <iframe
      src="{{ '/assets/interactive/oil_shocks.html' | relative_url }}"
      width="100%"
      height="520"
      style="border: 0; border-radius: 12px;"
      loading="lazy"
    ></iframe>
  </div>

  <p class="ds-caption">
    <strong>Figure 3.</strong> Oil price shocks identified from monthly Crude oil
    log returns over the period January 2000 to April 1, 2020. Shocks correspond to
    extreme movements relative to typical month-to-month variation.
  </p>

</section>

<p class="ds-lead">
  With oil price shocks identified, we now turn to how these events translate into
  movements across the market.
</p>

<p class="ds-lead">
  Before examining individual sectors in detail, we first look at a compact summary
  of sector behavior across different oil market conditions.
</p>

<p class="ds-lead">
  The figure below groups months into negative shocks, normal periods, and positive shocks.
  Each point corresponds to a sector, while the box plots summarize how sector returns
  are distributed within each group.
</p>
<section class="ds-figure-section">

  <div class="oil-regime-layout">

    <!-- LEFT: Plot -->
    <div class="oil-regime-plot">
      <iframe
        src="{{ '/assets/interactive/all_sectors_oil_shock_regimes.html' | relative_url }}"
        width="100%"
        height="560"
        style="border: 0; border-radius: 12px;"
        loading="lazy"
      ></iframe>
    </div>

    <!-- RIGHT: Barrels -->
    <div class="oil-regime-icons">
      <div class="oil-icon">
        <img src="{{ '/assets/img/red_barrel_transparent.png' | relative_url }}" alt="Negative shock">
        <span>Negative shock</span>
      </div>

      <div class="oil-icon">
        <img src="{{ '/assets/img/grey_barrel_transparent.png' | relative_url }}" alt="No shock">
        <span>No shock</span>
      </div>

      <div class="oil-icon">
        <img src="{{ '/assets/img/green_barrel_transparent.png' | relative_url }}" alt="Positive shock">
        <span>Positive shock</span>
      </div>
    </div>

  </div>

  <p class="ds-caption">
    <strong>Figure 4.</strong> Sector returns across oil shock regimes.
  </p>
  <p class="ds-note">
  <em>Tip:</em> Double-click a sector in the legend (e.g. <strong>Energy</strong>) to isolate its performance across oil-shock regimes.
</p>

</section>

<p class="ds-lead">
  Two patterns stand out. During large negative oil shocks, sector returns shift downward
  and become more dispersed, indicating that adverse oil movements are associated with
  broad market stress but uneven exposure across sectors. In contrast, positive oil shocks
  are followed by higher and more tightly clustered sector returns, suggesting a more
  uniform response when oil prices rise sharply.
</p>

<p class="ds-lead">
  Normal periods lie between these extremes, with returns that are generally positive
  and less volatile. Together, these distributions suggest that oil shocks matter not
  only through their direction, but also through the way they reshape the cross-section
  of sector performance.
</p>
<p class="ds-lead">
To move beyond distributions and summarize these effects more directly, we now compare
average sector returns during oil-shock periods relative to normal conditions.
</p>
<section class="ds-wrap ds-figure-section">

  <div class="ds-static-figure">
    <img
      src="{{ '/assets/img/shock_vs_non_shock_mean_return_diff.png' | relative_url }}"
      alt="Shock vs non-shock mean return differences across sectors"
    />
  </div>

  <p class="ds-caption">
    <strong>Figure 5.</strong> Difference in average sector returns during positive and negative
    oil-shock periods relative to no-shock periods.
  </p>

</section>
<p class="ds-lead">
The figure highlights a clear asymmetry in how sectors respond to oil price disruptions.
Positive oil shocks are associated with modest improvements in average returns relative
to normal periods across most sectors. In contrast, negative oil shocks lead to
substantially larger declines, indicating that downside effects dominate.
</p>

<p class="ds-lead">
The <strong>Energy</strong> sector stands out most clearly. While it benefits during positive
oil shocks, it experiences by far the largest deterioration during negative shocks,
reflecting its direct exposure to adverse oil price movements. Other sectors display
more muted responses, suggesting that oil shocks primarily reshape the cross-section
of sector performance rather than uniformly shifting returns.
</p>

<h2>From patterns to causality</h2>

<p class="ds-lead">
Up to this point, we have documented clear differences in how sectors behave during periods
of oil price stress. These patterns are visible in the data, but they raise a natural next
question: are oil price movements simply occurring at the same time as sector returns, or
do they tend to happen first and trigger the responses we observe?
</p>

<p class="ds-lead">
To address this question, we shift our focus from co-movements to timing. If changes in oil
prices consistently occur before changes in sector returns, this provides evidence that
oil price shocks act as a leading force rather than merely reflecting broader market
conditions.
</p>

<p class="ds-lead">
Because large oil price changes are often driven by events outside equity markets—such as
geopolitical tensions or supply disruptions—oil prices can reasonably be treated as
external shocks. This makes them a useful starting point for examining directional effects
across sectors.
</p>

<hr>

<h2>Causal analysis: does oil lead sector returns?</h2>

<div class="figure-block">
  <img src="{{ '/assets/img/matrix_causal_sectors.png' | relative_url }}"
       alt="Lagged regression p-values across sectors"
       class="img-fluid">
  <p class="figure-caption">
    Lagged regressions of sector returns on past oil price changes. Lower values indicate
    stronger evidence that oil prices move before sector returns.
  </p>
</div>

<p class="ds-lead">
The heatmap above examines whether past oil price changes help explain sector returns at
different time delays. Each row corresponds to a sector, and each column represents how many
periods earlier the oil price change occurred.
</p>

<p class="ds-lead">
The results vary substantially across sectors. The Energy sector shows consistently low
p-values at short lags, indicating that oil price movements are often followed by changes
in energy-sector returns. Other sectors display weaker, less consistent patterns, with
significance appearing only at certain lags or not at all.
</p>

<div class="figure-block">
  <img src="{{ '/assets/img/p_value_causal.png' | relative_url }}"
       alt="Granger causality results for oil and sector returns"
       class="img-fluid">
  <p class="figure-caption">
    Granger causality test results summarizing whether oil price changes help predict future
    sector returns. Lower bars indicate stronger evidence of oil leading sector performance.
  </p>
</div>

<p class="ds-lead">
The bar chart provides a more direct summary of timing. Each bar shows the strength of
evidence that oil price changes help predict future sector returns after accounting for the
sector’s own past behavior. The dashed line marks the conventional 5% significance level.
</p>

<p class="ds-lead">
The Energy sector stands out with very strong evidence that oil prices precede returns.
Healthcare, Financial Services, and Real Estate also show some evidence of a leading
relationship, although less strongly. Industrials sits close to the significance threshold,
while sectors such as Technology and Utilities show no evidence that oil prices lead their
returns.
</p>

<p class="ds-lead">
Overall, the results are clearly heterogeneous. Oil price movements do not lead the entire
market in the same way. Instead, their effects are strongest in sectors with direct or
meaningful exposure to oil prices, and weak or absent elsewhere.
</p>

<p class="ds-lead">
These findings do not prove causality in a strict structural sense. However, they reveal a
consistent timing pattern: oil prices tend to move first, and certain sectors—especially
energy-related ones—tend to react afterward. This pattern is consistent with viewing oil
price shocks as external disturbances that affect sectors differently depending on their
economic exposure.
</p>

<p class="ds-lead">

</p>

<h2>At this point, it is tempting to stop at the sector level.</h2>

<div class="ds-transition-box">
  <p>
    We would not give bonuses to—or fire—an entire department because of one team.
    To see who is really driving the results, we now dive deeper into industries.
  </p>
</div>

<p class="ds-lead">
Looking at industries lets us see which teams are actually driving the sector-level results.
Some are highly exposed to oil prices, others much less so.
</p>

<p class="ds-lead">
Let’s dive deeper and see where these effects really come from.
</p>

<p class="ds-lead">
TODO, add causality to industries</p>

<div class="ds-transition-box">
  <p>
    As good consultants, we know that numbers alone rarely tell the full story. Once the
    patterns are clear, the next step is to step back and understand the broader context in
    which they emerge.
  </p>
</div>

<h2>Choose your oil regime</h2>

<p class="ds-lead">
Looking back, the company goes through three very different management styles. You can
think of them as three bosses. Meet them—and pick one to explore.
</p>

<div class="boss-grid">

  <!-- Boss 1 -->
  <article class="boss-card boss-gfc">
    <div class="boss-media">
      <img src="{{ '/assets/img/first_regime_orange.png' | relative_url }}" alt="Boss: GFC">
      <div class="boss-tag">Crisis Manager</div>
    </div>

    <div class="boss-body">
      <h3>Boss #1 — The Crisis Manager (GFC)</h3>
      <p class="boss-desc">
        Walks into the office, immediately flips the table, and calls it “risk management.”
        In this era, demand evaporates, volatility spikes, and even well-run departments can
        look bad simply because the whole building is shaking.
      </p>

      <div class="boss-stats">
        <div class="stat">
          <div class="stat-k">Era</div>
          <div class="stat-v"><!-- TODO --> 2008–2009</div>
        </div>
        <div class="stat">
          <div class="stat-k">Avg Brent</div>
          <div class="stat-v"><!-- TODO --> $— / bbl</div>
        </div>
        <div class="stat">
          <div class="stat-k">Volatility</div>
          <div class="stat-v"><!-- TODO --> —</div>
        </div>
        <div class="stat">
          <div class="stat-k">Worst drawdown</div>
          <div class="stat-v"><!-- TODO --> —%</div>
        </div>
      </div>

      <p class="boss-takeaway">
        <strong>What to expect:</strong> noisy signals, strong co-movement, and “everything reacts at once.”
      </p>
    </div>

  </article>

  <!-- Boss 2 -->
  <article class="boss-card boss-plateau">
    <div class="boss-media">
      <img src="{{ '/assets/img/second_regime.png' | relative_url }}" alt="Boss: Plateau">
      <div class="boss-tag">Stable Operator</div>
    </div>

    <div class="boss-body">
      <h3>Boss #2 — The Stable Operator (Plateau)</h3>
      <p class="boss-desc">
        Loves routines, hates surprises, and runs a tight ship. Oil stays high and fairly
        steady, so energy isn’t a one-off drama — it’s a standing line item in everyone’s budget.
      </p>

      <div class="boss-stats">
        <div class="stat">
          <div class="stat-k">Era</div>
          <div class="stat-v"><!-- TODO --> 2010–2014</div>
        </div>
        <div class="stat">
          <div class="stat-k">Avg Brent</div>
          <div class="stat-v"><!-- TODO --> $— / bbl</div>
        </div>
        <div class="stat">
          <div class="stat-k">Volatility</div>
          <div class="stat-v"><!-- TODO --> —</div>
        </div>
        <div class="stat">
          <div class="stat-k">Months &gt; $100</div>
          <div class="stat-v"><!-- TODO --> —</div>
        </div>
      </div>

      <p class="boss-takeaway">
        <strong>What to expect:</strong> clearer exposure differences across departments, slower but persistent effects.
      </p>
    </div>

  </article>

  <!-- Boss 3 -->
  <article class="boss-card boss-shale">
    <div class="boss-media">
      <img src="{{ '/assets/img/third_regime.png' | relative_url }}" alt="Boss: Shale">
      <div class="boss-tag">Rule Changer</div>
    </div>

    <div class="boss-body">
      <h3>Boss #3 — The Rule Changer (Shale)</h3>
      <p class="boss-desc">
        Shows up with new technology, rewrites the org chart, and suddenly supply is flexible.
        Oil becomes less of a universal constraint — shocks still happen, but they don’t always
        take the whole company hostage.
      </p>

      <div class="boss-stats">
        <div class="stat">
          <div class="stat-k">Era</div>
          <div class="stat-v"><!-- TODO --> 2014–2016</div>
        </div>
        <div class="stat">
          <div class="stat-k">Avg Brent</div>
          <div class="stat-v"><!-- TODO --> $— / bbl</div>
        </div>
        <div class="stat">
          <div class="stat-k">Volatility</div>
          <div class="stat-v"><!-- TODO --> —</div>
        </div>
        <div class="stat">
          <div class="stat-k">Price floor</div>
          <div class="stat-v"><!-- TODO --> $—</div>
        </div>
      </div>

      <p class="boss-takeaway">
        <strong>What to expect:</strong> more regime-specific winners/losers, and less “one shock moves everything.”
      </p>
    </div>

  </article>

</div>

<p class="ds-lead">
With the bosses introduced, we can now ask a sharper question: which departments (sectors)
and which teams (industries) performed differently under each management era?
</p>
<p class="ds-lead">
The key idea is simple: the same oil price movement can lead to different outcomes depending
on which boss is in charge. Next, we examine sector behavior conditional on these regimes.
</p>

<!-- OPTIONAL: Your existing regime visualization section can sit right after this -->
<!-- (keep your iframe block below) -->
</section>
