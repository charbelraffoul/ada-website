---
layout: full
---

<!-- FULL-BLEED HERO (centered title like reference) -->
<div class="ds-hero ds-hero--fullbleed">
  <video
    class="ds-hero-video"
    autoplay
    muted
    loop
    playsinline
    preload="metadata"
    poster="{{ '/assets/img/hero_oil.png' | relative_url }}"
  >
    <source src="{{ '/assets/video/hero.mp4' | relative_url }}" type="video/mp4" />
  </video>

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

<!-- INTRO -->
<section class="ds-wrap ds-top" id="intro">

  <div style="max-width: 820px; margin: 0 auto; font-size: 0.95rem; text-align: center;">

  <p style="margin: 0 0 18px 0; text-align: center;">
    Oil is more than just a commodity; it is a macroeconomic force that quietly shapes costs, expectations,
    and risk across financial markets. When oil prices move abruptly, markets react, but not all in the same way.
    Some sectors feel the impact immediately through input costs and margins, others through demand and investor sentiment,
    while a few appear relatively insulated.
  </p>

  <p style="margin: 0 0 22px 0; text-align: center;">
    A simple way to think about this is to imagine <strong>oil as a boss</strong>, the central decision maker within a firm.
    On calm days, decisions are predictable and business runs smoothly. On stressful days, sudden changes force every team to adapt.
    But not every team is equally exposed: some are directly exposed and must react immediately, while others are affected more indirectly
    or remain relatively protected. This leads us to an essential question:
  </p>

  <p style="margin: 26px auto; text-align: center; line-height: 1.6;">
    <strong><em>How do oil price shocks reshape sector performance, and what does this imply for portfolio design?</em></strong>
  </p>

  <p style="margin: 22px 0 0 0; text-align: center;">
    In this setting, we step in as consultants inside the firm. When the boss is calm, patterns are easy to read.
    When moods shift abruptly, reactions across teams reveal who is exposed, who adapts, and who remains steady.
    Observing these responses closely is often the only way to understand how the organization really functions.
  </p>

  <hr style="margin: 46px 0 10px 0; opacity: 0.5;">

  </div>

</section>


<!-- MARKET STRUCTURE -->
<section class="ds-wrap" id="market-structure" style="padding-top: 10px;">

  <h2 style="margin: 10px 0 12px 0;">Market structure</h2>

  <p class="ds-lead">
    Before looking at how oil shocks propagate through the market, we first clarify how the market itself
    is structured. No stock is an island. Every company sits within an industry, and industries are grouped
    into broader sectors that capture shared economic exposure.
  </p>

  <p class="ds-lead">
    This hierarchy allows us to study how common forces, such as energy price shocks, affect groups of firms
    with similar characteristics rather than individual stocks. In what follows, we focus primarily on sectors,
    while occasionally zooming in on specific industries when finer distinctions are informative. All analyses
    are conducted using monthly data.
  </p>

  <p class="ds-lead">
    To make this structure concrete, the figure below shows how the stock universe is organized, from broad
    sectors down to individual stocks.
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

  <hr style="margin: 44px 0; opacity: 0.3;">

</section>


<!-- OIL PRICES AND SHOCKS -->
<section class="ds-wrap" id="oil-prices" style="padding-top: 10px;">

  <h2 style="margin: 10px 0 12px 0;">Oil prices and Shocks</h2>

  <p class="ds-lead">
    With the market structure in place, we now turn to the behavior of oil prices themselves. If oil acts as the central decision-maker in this setting, its behavior is far from stable. Extended periods of relative calm are punctuated by sudden swings, sharp spikes, and abrupt reversals, often associated with geopolitical events, shifts in global demand, or episodes of broader economic stress.
  </p>

  <p class="ds-lead">
    The figure below illustrates the evolution of crude oil prices at a monthly frequency from <strong>1960 to 2025</strong>, providing a long-run perspective on the environment in which firms and sectors operate. While this extended history offers valuable context, our empirical analysis focuses on the period from <strong>January 2000 to April 1, 2020</strong>, during which sector- and industry-level data are consistently available. This window spans multiple oil price regimes as well as several major disruptions, making it particularly informative for studying how oil price shocks propagate through the market.
  </p>

  <div class="ds-static-figure">
    <!--
      Animated version (recommended): export an SVG from your matplotlib script
      and give the main line an id="oil-line" (see notes below).
      Fallback: keep the PNG so the figure still shows if SVG loading fails.-->
    <div
      class="ds-svg-figure"
      data-svg-src="{{ '/assets/img/brent_price_monthly.svg' | relative_url }}"
      data-path-selector="#oil-line"
      aria-label="Brent crude oil price (monthly, USD per barrel)"
    >
      <img
        src="{{ '/assets/img/brent_price_monthly.png' | relative_url }}"
        alt="Brent crude oil price (monthly, USD per barrel)"
      />
    </div>
  </div>

  <p class="ds-caption">
    <strong>Figure 2.</strong> Crude oil price (monthly, USD per barrel), 1960–2025.
  </p>

  <p class="ds-lead">
    Before interpreting these market reactions, it is essential to
    clarify what we mean by an oil price shock.
  </p>

  <h3>What are oil price shocks?</h3>

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

  <p class="ds-lead">
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

  <hr style="margin: 44px 0; opacity: 0.5;">

</section>

<section class="ds-wrap" id="rq1" style="padding-top: 10px;">

  <h2 style="margin: 10px 0 12px 0;">Which sectors are most sensitive to oil shocks?</h2>

  <p class="ds-lead">
    With oil price shocks identified, we now turn to how these events translate into movements across the market. We begin with the high-level view: we look at a compact summary of sector behavior across different oil market conditions.
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
    <em>Tip: Double-click a sector in the legend (e.g. Energy) to isolate its performance across oil-shock regimes.</em>
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
    <!-- Animated version: export an SVG and place it at /assets/img/shock_vs_non_shock_mean_return_diff.svg -->
    <div
      class="ds-svg-figure"
      data-svg-src="{{ '/assets/img/shock_vs_non_shock_mean_return_diff.svg' | relative_url }}"
      data-animate="bars"
      aria-label="Shock vs non-shock mean return differences across sectors"
    >
      <img
        src="{{ '/assets/img/shock_vs_non_shock_mean_return_diff.png' | relative_url }}"
        alt="Shock vs non-shock mean return differences across sectors"
      />
    </div>
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

<h2>Who moves first?: does oil lead sector returns?</h2>

<div class="figure-block">
  <img src="{{ '/assets/img/matrix_causal_sectors.png' | relative_url }}"
       alt="Lagged regression p-values across sectors"
       class="img-fluid">
</div>

<p class="ds-caption">
    <strong>Figure 6.</strong> Lagged regressions of sector returns on past oil price changes. Lower values indicate
    stronger evidence that oil prices move before sector returns.
  </p>

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
</div>

<p class="ds-caption">
    <strong>Figure 7.</strong> Granger causality test results summarizing whether oil price changes help predict future
    sector returns. Lower bars indicate stronger evidence of oil leading sector performance.
</p>

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

<h2>Sector-level abnormal returns during oil shocks</h2>

<p class="ds-lead">
So far, we have shown that oil price movements tend to precede returns in certain sectors.
We now ask a complementary question: when an oil shock occurs, how large is the abnormal
performance experienced by each sector?
</p>
<p class="ds-lead">
To answer this, we estimate sector-level regressions of monthly returns on oil price shocks,
controlling for overall market movements. The coefficients can be interpreted as
<em>abnormal returns</em> associated with oil-shock months relative to normal periods.
</p>
<section class="ds-wrap ds-figure-section">

  <div class="ds-two-col-figures">

    <!-- NEGATIVE SHOCK -->
    <div class="ds-figure-col">
      <div class="ds-static-figure">
        <img
          src="{{ '/assets/img/LinREGSectorsNeg.png' | relative_url }}"
          alt="Sector abnormal returns during negative oil shocks"
        />
      </div>
      <p class="ds-caption">
        <strong>Figure 8.a.</strong> Sector-level abnormal returns during <strong>negative</strong>
        oil-shock months (β ± 95% CI).
      </p>
    </div>

    <!-- POSITIVE SHOCK -->
    <div class="ds-figure-col">
      <div class="ds-static-figure">
        <img
          src="{{ '/assets/img/LinRegSectorsPos.png' | relative_url }}"
          alt="Sector abnormal returns during positive oil shocks"
        />
      </div>
      <p class="ds-caption">
        <strong>Figure 8.b.</strong> Sector-level abnormal returns during <strong>positive</strong>
        oil-shock months (β ± 95% CI).
      </p>
    </div>

  </div>

</section>
<p class="ds-lead">
To highlight the asymmetric nature of oil shocks, Figure 8 contrasts sector-level abnormal
returns during negative and positive oil-shock months side by side.
</p>

<p class="ds-lead">

</p>

<h2>At this point, it is tempting to stop at the sector level.</h2>

<div class="ds-transition-box">
  <p>
    You wouldn't fire an entire department just because one employee underperformed. Yet, looking only at Sectors does exactly that.
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
<h2>Oil price regimes over time</h2>

<p class="ds-lead">
To understand these bosses, it helps to look at the full picture, and we must first visualize the timeline they operated in. The figure below shows the monthly Brent oil price level, with the three periods we focus on highlighted.
</p>

<p class="ds-lead">
These shaded regions are not based on short-term price movements, but on clear breaks in the
level, volatility, and persistence of oil prices. Each period reflects a distinct market environment in
which oil shocks play out differently.
</p>

<figure class="ds-figure">
  <img
    src="{{ '/assets/img/oil_regime.png' | relative_url }}"
    alt="Monthly Brent oil price level with regime markers"
    style="width:100%; border-radius:12px;"
  >
</figure>

<p class="ds-caption">
    <strong>Figure 9.</strong> Monthly Brent oil prices with regime markers: the Global Financial Crisis (2008–2009),
    the high-price Plateau (2010–2014), and the Shale period (2014–2016).
</p>

<p class="ds-lead">
To make the “environment shift” even more concrete, the next figure shows how turbulent the oil market
is within each period. Volatility spikes during the GFC, falls during the Plateau, and rises again during
the Shale era as the market adjusts to a new supply regime.
</p>

<figure class="ds-figure">
  <img
    src="{{ '/assets/img/12MonthRollingVol.png' | relative_url }}"
    alt="Rolling 12-month volatility of Brent log returns"
    style="width:100%; border-radius:12px;"
  >
</figure>

<p class="ds-caption">
    <strong>Figure 10.</strong> Rolling 12-month volatility of Brent log returns (standard deviation), with the same regime markers.
    Higher values indicate a more turbulent oil market.
</p>

<p class="ds-lead">
With this timeline in mind, we can now meet the three bosses who ran the company during these periods.
</p>

<h2>Meet the bosses</h2>

<p class="ds-lead">
Looking back at oil price history, we can clearly distinguish three short but very different
management periods. Each one corresponds to a specific type of shock and a distinct oil
price environment. To keep things intuitive, we present them as three different bosses.
</p>

<div class="boss-grid">

  <!-- GFC -->
  <article class="boss-card" data-hover-video>
    <div class="boss-media">
      <img class="boss-img" src="{{ '/assets/img/first_regime_orange.png' | relative_url }}" alt="GFC boss">
      <video class="boss-video" muted loop playsinline preload="metadata" data-src="{{ '/assets/video/boss1.mp4' | relative_url }}"></video>
    </div>

    <h3>Boss #1 — GFC (2008–2009)</h3>

    <p class="ds-lead">
      This boss takes over during a demand shock. Oil prices spike and then collapse rapidly
      as global demand disappears. The reaction is chaotic, driven by panic rather than
      gradual adjustment.
    </p>

    <ul class="boss-traits">
      <li><strong>Shock type:</strong> demand shock</li>
      <li><strong>Craziness:</strong> very high</li>
      <li><strong>Predictability:</strong> very low</li>
      <li><strong>Market mood:</strong> panic-driven</li>
      <li><strong>Overall vibe:</strong> crisis management</li>
    </ul>

  </article>

  <!-- Plateau -->
  <article class="boss-card" data-hover-video>
    <div class="boss-media">
      <img class="boss-img" src="{{ '/assets/img/second_regime.png' | relative_url }}" alt="Plateau boss">
      <video class="boss-video" muted loop playsinline preload="metadata" data-src="{{ '/assets/video/boss2.mp4' | relative_url }}"></video>
    </div>

    <h3>Boss #2 — Plateau (2010–2014)</h3>

    <p class="ds-lead">
      This boss presides over a period of relative stability. Oil prices remain high—around
      $100 per barrel—but fluctuate within a narrow range. Shocks occur, but the environment
      itself is steady.
    </p>

    <ul class="boss-traits">
      <li><strong>Shock type:</strong> none dominant</li>
      <li><strong>Craziness:</strong> low</li>
      <li><strong>Predictability:</strong> high</li>
      <li><strong>Market mood:</strong> stable</li>
      <li><strong>Overall vibe:</strong> steady pressure</li>
    </ul>

  </article>

  <!-- Shale -->
  <article class="boss-card" data-hover-video>
    <div class="boss-media">
      <img class="boss-img" src="{{ '/assets/img/third_regime.png' | relative_url }}" alt="Shale boss">
      <video class="boss-video" muted loop playsinline preload="metadata" data-src="{{ '/assets/video/boss3.mp4' | relative_url }}"></video>
    </div>

    <h3>Boss #3 — Shale (2014–2016)</h3>

    <p class="ds-lead">
      This boss arrives during a supply shock. Rapid growth in U.S. shale production floods
      the market, triggering a sharp drop in oil prices followed by continued volatility at
      lower levels.
    </p>

    <ul class="boss-traits">
      <li><strong>Shock type:</strong> supply shock</li>
      <li><strong>Craziness:</strong> medium</li>
      <li><strong>Predictability:</strong> medium</li>
      <li><strong>Market mood:</strong> adjustment phase</li>
      <li><strong>Overall vibe:</strong> rebalancing</li>
    </ul>

  </article>

</div>

<p class="ds-lead">
These three bosses differ in both the source of the shock and the behavior of oil prices.
In the next step, we examine how departments and teams respond under each of these distinct
management environments.
</p>

<p class="ds-lead">
With the bosses introduced, we can now ask a sharper question: which departments (sectors)
and which teams (industries) performed differently under each management era?
</p>
<p class="ds-lead">
The key idea is simple: the same oil price movement can lead to different outcomes depending
on which boss is in charge. Next, we examine sector behavior conditional on these regimes.
</p>
<h2>How departments behave under each boss</h2>

<p class="ds-lead">
Now that we have met the bosses, we can look inside the company. Each boss sets a very
different tone, and departments do not react in the same way under each management style.
</p>
<p class="ds-lead">
So far, we have treated oil exposure as something that can change over time. Before
summarizing these relationships by regime, it is useful to look at this time variation
directly. The interactive figure below shows 36-month rolling oil betas by sector,
estimated while controlling for overall market movements.
</p>

<div class="ds-figure" style="margin: 2rem 0;">
  <iframe
    src="{{ '/assets/interactive/rolling_oil_betas.html' | relative_url }}"
    width="100%"
    height="420"
    style="border: none; border-radius: 12px;"
    scrolling="no"
    loading="lazy">
  </iframe>
</div>

<p class="ds-caption">
    <strong>Figure 12.</strong> 36-month rolling oil beta by sector. Each line shows how a sector’s sensitivity to oil
    price changes evolves over time in rolling windows.
</p>

<p class="ds-lead">
Several features stand out immediately. Oil exposure is far from stable: sector betas drift,
switch sign, and occasionally spike during periods of stress. Even traditionally oil-linked
departments do not move with oil in a uniform way across time.
</p>

<p class="ds-lead">
While these rolling estimates reveal rich dynamics, they are difficult to compare across
broader market environments. To make sense of these patterns, we now aggregate oil
sensitivities by regime, asking how departments typically respond to oil price movements
when a given boss is in charge.
</p>

<figure class="ds-figure">
  <img
    src="{{ '/assets/img/oil_beta_by_sector_regime.png' | relative_url }}"
    alt="Oil beta by sector and regime"
    style="width:100%; border-radius:12px;"
  >
</figure>

<p class="ds-caption">
    <strong>Figure 13.</strong> Sector-level oil exposure by regime. Red indicates positive sensitivity to oil price
    changes, blue indicates negative sensitivity, and lighter colors indicate weaker
    relationships.
</p>

<p class="ds-lead">
Two patterns stand out clearly. First, department behavior is highly regime-dependent: the
same department can react very differently depending on which boss is in charge. Second,
some relationships only become visible under specific management styles.
</p>

<p class="ds-lead">
For example, the Energy department shows its strongest alignment with oil prices under the
Shale boss, when supply-side dynamics dominate. During the GFC boss’s tenure, however,
many departments move together regardless of oil, reflecting broad panic rather than
sector-specific exposure.
</p>

<p class="ds-lead">
The Plateau boss paints yet another picture: oil prices are high but stable, and most
departments show weaker, more muted responses. In this environment, oil is present in the
background, but it does not dominate day-to-day performance.
</p>

<p class="ds-lead">
Having seen that departments respond differently depending on which boss is in charge, we
now quantify these differences more precisely. The figure below reports sector-level oil
betas estimated separately for each management style, while controlling for overall market
movements.
</p>
<section class="ds-wrap ds-figure-section">

  <div class="ds-embed">
    <iframe
      src="{{ '/assets/interactive/oil_beta_by_sector_interactive.html' | relative_url }}"
      width="100%"
      height="560"
      style="border:0; border-radius:12px;"
      loading="lazy">
    </iframe>
  </div>

  <p class="ds-caption">
    <strong>Figure X.</strong> Sector-level oil betas by regime (β ± 95% confidence intervals),
    controlling for overall market returns. Each point shows how strongly a department
    listens to the boss under a given management style.
  </p>

</section>

<p class="ds-lead">
Two patterns stand out clearly. First, department behavior is highly regime-dependent: the
same department can react very differently depending on which boss is in charge. Second,
the strength and precision of these reactions vary substantially across management styles.
</p>

<p class="ds-lead">
The Energy department listens most closely to the boss during the Shale period, when
supply-side dynamics dominate and oil prices play a central role in firm profitability.
During the Global Financial Crisis, however, confidence intervals widen and sector responses
become less distinct, reflecting an environment in which panic and broad market forces
overshadow oil-specific signals.
</p>

<p class="ds-lead">
Other departments display more nuanced behavior. Cyclical sectors such as Industrials and
Consumer Cyclical show sensitivity to oil under certain bosses but not others, while
traditionally defensive departments—such as Utilities and Consumer Defensive—remain
comparatively insulated across regimes.
</p>

<p class="ds-lead">
In short, the boss matters—not only in direction, but in credibility. Oil price movements
do not carry a single, fixed meaning for the company. Their impact on departments depends
on who is in charge, how stable the environment is, and how clearly the boss’s signals are
heard amid broader market noise.
</p>

<p class="ds-lead">
To summarize, the boss matters. Oil price movements do not have a single, fixed meaning for the
company. Their impact on departments depends on who is in charge and the broader
environment they create.
</p>

<p class="ds-lead">
But departments are still large units. Just as in any real company, not all teams inside a
department behave the same way. To understand where these patterns truly come from, we
now dive one level deeper and examine industry-level behavior.
</p>

<p class="ds-lead">
TODO: industry-level analysis goes here.
</p>

</section>
