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
 <h1 class="ds-hero-title">Crude Connections</h1>
 <p class="ds-hero-subtitle">
 When the boss (oil) makes a move, who thrives and who survives?
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
 is structured. No stock is an island. Every company sits within an industry, and industries are grouped
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

 <p class="ds-lead">
 With the market structure in place, we now turn to the behavior of oil prices themselves.
 If oil truly acts as the boss in this setting, its mood is far from stable. Periods of calm
 are punctuated by sudden swings, sharp spikes, and abrupt reversals, often linked to geopolitical
 events, demand shifts, or broader economic stress.
 </p>

 <p class="ds-lead">
 The figure below shows the evolution of crude oil prices at a monthly frequency from
 <strong>1960 to 2025</strong>, providing a long-run view of the environment in which firms and sectors operate.
 While this full history offers useful context, our empirical analysis focuses on the period from
 <strong>January 2000 to April 1, 2020</strong>, the window over which sector and industry data are consistently available.
 This interval spans several oil price regimes and major disruptions, making it particularly informative
 for studying how shocks propagate through the market.
 </p>

 <div class="ds-static-figure">
 <!--
 Animated version (recommended): export an SVG from your matplotlib script
 and give the main line an id="oil-line" (see notes below).

 Fallback: keep the PNG so the figure still shows if SVG loading fails.
 -->
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

</section>

<p class="ds-lead">
 Before interpreting these market reactions, it is essential to
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
 We begin with the high-level view. We look at a compact summary
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
Because large oil price changes are often driven by events outside equity markets, such as
geopolitical tensions or supply disruptions, oil prices can reasonably be treated as
external shocks. This makes them a useful starting point for examining directional effects
across sectors.
</p>

<hr>

<h2>Who moves first?: does oil lead sector returns?</h2>

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
consistent timing pattern: oil prices tend to move first, and certain sectors, especially
energy-related ones, tend to react afterward. This pattern is consistent with viewing oil
price shocks as external disturbances that affect sectors differently depending on their
economic exposure.
</p>

<h2>When the boss makes a sudden move: abnormal returns during oil shocks</h2>

<p class="ds-lead">
So far, we have shown that oil price movements tend to precede returns in certain sectors.
We now ask a more direct question: when the boss makes a sudden, dramatic announcement, a sharp
oil price shock, which departments and teams experience abnormal performance?
</p>

<p class="ds-lead">
To answer this, we estimate regressions of monthly returns on oil price shocks at both the sector and
industry level, controlling for overall market movements. The coefficients measure how much
each unit <em>overperforms or underperforms</em> during shock months, relative to normal periods.
</p>

<p class="ds-lead">
Oil shocks are not symmetric. A sudden price collapse (negative shock) hits the company very
differently than a sudden price surge (positive shock). Some departments thrive when oil prices spike,
others when they crash. The interactive map below reveals these asymmetric exposures across both
sectors and their underlying industries.
</p>

<section class="ds-wrap ds-figure-section">

 <div class="ds-embed">
 <iframe
 src="{{ '/assets/interactive/rq1_shock_exposure_map.html' | relative_url }}"
 width="100%"
 height="600"
 style="border:0; border-radius:12px;"
 loading="lazy">
 </iframe>
 </div>

 <p class="ds-caption">
 <strong>Figure 6.</strong> Shock exposure map: abnormal returns during negative vs. positive
 oil shocks (β ± 95% CI). Each point represents a sector or industry, plotted by its
 sensitivity to oil price collapses (x-axis) and oil price surges (y-axis). Use the dropdown
 to toggle between sectors, industries, or both. The diagonal line indicates symmetric exposure;
 points far from it reveal asymmetric behavior.
 </p>

</section>

<p class="ds-lead">
The map reveals striking patterns. When you look at individual industries, the asymmetries become clear.
Oil & Gas E&P and Oil & Gas Integrated show the strongest positive response to oil price surges, when
the boss announces good news (higher oil prices), these teams celebrate with abnormal gains of 5-9%.
But when oil crashes, their losses are more contained (around -3% to -6%), showing they've learned to
weather the bad announcements.
</p>

<p class="ds-lead">
Other teams tell different stories. Airlines sit in the opposite corner: when oil prices collapse,
they benefit from cheaper fuel costs. Marine Shipping and Oil & Gas Refining show strong negative
exposure to oil price crashes, losing roughly 7-10% during negative shock months. Meanwhile,
defensive teams like Grocery Stores and regulated Utilities cluster near the origin, these departments
barely react to the boss's announcements, operating steadily regardless of oil market drama.
</p>

<p class="ds-lead">
At the sector level, the Energy department shows a moderate positive tilt: it gains about 5% when
oil surges but loses only 3% when oil crashes, a relatively resilient department overall. Consumer
Cyclical sits slightly below the diagonal, reflecting the airline and transportation teams within it
that benefit from oil price drops.
</p>

<p class="ds-lead">
Crucially, looking only at sectors would mask these stories. The Energy sector's moderate profile
hides industries with 9% upside exposure. The Consumer Cyclical sector's near-zero response conceals
airlines with strong asymmetric behavior. The industry-level granularity reveals who is truly listening
to the boss, and who can afford to ignore the announcement entirely.
</p>

<div class="ds-transition-box">
 <p>
 As good consultants, we know that numbers alone rarely tell the full story. Once the
 patterns are clear, the next step is to step back and understand the broader context in
 which they emerge.
 </p>
</div>

<hr>
<h2>Choose your oil regime</h2>

<p class="ds-lead">
Looking back, the company goes through three very different management styles. You can
think of them as three bosses. Meet them, and pick one to explore.
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
 <figcaption class="ds-caption">
 Monthly Brent oil prices with regime markers: the Global Financial Crisis (2008–2009),
 the high-price Plateau (2010–2014), and the Shale period (2014–2016).
 </figcaption>
</figure>

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
 <figcaption class="ds-caption">
 Rolling 12-month volatility of Brent log returns (standard deviation), with the same regime markers.
 Higher values indicate a more turbulent oil market.
 </figcaption>
</figure>

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

 <h3>Boss #1, GFC (2008–2009)</h3>

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

 <h3>Boss #2, Plateau (2010–2014)</h3>

 <p class="ds-lead">
 This boss presides over a period of relative stability. Oil prices remain high, around
 $100 per barrel, but fluctuate within a narrow range. Shocks occur, but the environment
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

 <h3>Boss #3, Shale (2014–2016)</h3>

 <p class="ds-lead">
 This boss arrives during a supply shock. Rapid growth in U. S. shale production floods
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
 <div class="ds-caption">
 36-month rolling oil beta by sector. Each line shows how a sector’s sensitivity to oil
 price changes evolves over time in rolling windows.
 </div>
</div>

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
 <figcaption class="ds-caption">
 Sector-level oil exposure by regime. Red indicates positive sensitivity to oil price
 changes, blue indicates negative sensitivity, and lighter colors indicate weaker
 relationships.
 </figcaption>
</figure>

<p class="ds-lead">
Having seen that departments respond differently depending on which boss is in charge, we
now quantify these differences more precisely. The interactive figure below reports sector-level oil
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
 <strong>Figure 7.</strong> Sector-level oil betas by regime (β ± 95% confidence intervals),
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
traditionally defensive departments, such as Utilities and Consumer Defensive, remain
comparatively insulated across regimes.
</p>

<p class="ds-lead">
In short, the boss matters, not only in direction, but in credibility. Oil price movements
do not carry a single, fixed meaning for the company. Their impact on departments depends
on who is in charge, how stable the environment is, and how clearly the boss’s signals are
heard amid broader market noise.
</p>

<hr>
<h2>From understanding to action: building portfolios around oil shocks</h2>

<p class="ds-lead">
So far, we have studied how departments and teams respond when the boss changes mood. We have
seen that reactions vary by management style, by department exposure, and by the type of shock
that arrives. These patterns are real, but they remain abstract.
</p>

<p class="ds-lead">
Now, we ask a more practical question: <strong>what happens to your money when you invest
before a major oil shock?</strong> If oil truly acts as a boss whose decisions reshape
performance across the company, then choosing which teams to back should matter, especially
when the boss is about to make a major, disruptive announcement.
</p>

<p class="ds-lead">
To answer this, we move from regressions to portfolios. Instead of estimating coefficients,
we track actual dollar outcomes. We pick a historical oil shock, invest in a specific
portfolio strategy one month before the shock hits, and follow the money through short,
medium, and long horizons.
</p>

<p class="ds-lead">
This is not a forecasting tool. It is a historical scenario simulator that shows you
<em>what actually happened</em> to different portfolio strategies during past oil disruptions.
The goal is to make the abstract patterns we documented earlier concrete and actionable.
</p>

<div class="ds-transition-box">
 <p>
 Before major announcements, consultants know that positioning matters. Some teams will
 benefit, others will struggle, and some will remain steady. The interactive tool below
 lets you explore these dynamics yourself.
 </p>
</div>

<h2>Meet the portfolios</h2>

<p class="ds-lead">
Before you simulate what happens to your money, meet the five portfolio strategies. Each one
represents a different way to position yourself when the boss is about to make a major move.
Think of them as different bets on which employees will thrive, or survive, when oil prices shift.
</p>

<div class="boss-grid">

 <!-- Energy Producers -->
 <article class="boss-card" data-hover-video>
 <div class="boss-media">
 <img class="boss-img" src="{{ '/assets/img/portfolio_energy.png' | relative_url }}" alt="Energy producers portfolio">
 <video class="boss-video" muted loop playsinline preload="metadata" data-src="{{ '/assets/video/portfolio_energy.mp4' | relative_url }}"></video>
 </div>

 <h3>Energy Producers</h3>

 <p class="ds-lead">
 The all-in bet on oil. This portfolio invests in employees whose paychecks move directly with
 oil prices: Oil & Gas E&P, Oil & Gas Integrated, and Oil & Gas Refining & Marketing.
 </p>

 <ul class="boss-traits">
 <li><strong>Composition:</strong> 50% E&P, 25% Integrated, 25% Refining</li>
 <li><strong>Oil exposure:</strong> very high, direct</li>
 <li><strong>When oil surges:</strong> massive upside</li>
 <li><strong>When oil crashes:</strong> severe downside</li>
 <li><strong>Best for:</strong> betting on rising oil prices</li>
 </ul>

 </article>

 <!-- Oil Users -->
 <article class="boss-card" data-hover-video>
 <div class="boss-media">
 <img class="boss-img" src="{{ '/assets/img/portfolio_users.png' | relative_url }}" alt="Oil users portfolio">
 <video class="boss-video" muted loop playsinline preload="metadata" data-src="{{ '/assets/video/portfolio_users.mp4' | relative_url }}"></video>
 </div>

 <h3>Oil Users (Transport & Airlines)</h3>

 <p class="ds-lead">
 The contrarian bet. This portfolio invests in employees for whom oil is a major cost:
 Airlines, Marine Shipping, and Railroads. They win when fuel gets cheaper.
 </p>

 <ul class="boss-traits">
 <li><strong>Composition:</strong> 40% Airlines, 30% Marine, 30% Rail</li>
 <li><strong>Oil exposure:</strong> high, inverse</li>
 <li><strong>When oil surges:</strong> suffer from fuel costs</li>
 <li><strong>When oil crashes:</strong> benefit from savings</li>
 <li><strong>Best for:</strong> betting on falling oil prices</li>
 </ul>

 </article>

 <!-- Defensive Staples -->
 <article class="boss-card" data-hover-video>
 <div class="boss-media">
 <img class="boss-img" src="{{ '/assets/img/portfolio_defensive.png' | relative_url }}" alt="Defensive staples portfolio">
 <video class="boss-video" muted loop playsinline preload="metadata" data-src="{{ '/assets/video/portfolio_defensive.mp4' | relative_url }}"></video>
 </div>

 <h3>Defensive Staples</h3>

 <p class="ds-lead">
 The safe harbor. This portfolio invests in employees who deliver essentials:
 Regulated Electric Utilities and Grocery Stores. Stable demand, predictable performance.
 </p>

 <ul class="boss-traits">
 <li><strong>Composition:</strong> 60% Utilities, 40% Groceries</li>
 <li><strong>Oil exposure:</strong> very low</li>
 <li><strong>When oil surges:</strong> minimal impact</li>
 <li><strong>When oil crashes:</strong> minimal impact</li>
 <li><strong>Best for:</strong> crisis hedging, stability-seeking</li>
 </ul>

 </article>

 <!-- Mixed Exposure -->
 <article class="boss-card" data-hover-video>
 <div class="boss-media">
 <img class="boss-img" src="{{ '/assets/img/portfolio_mixed.png' | relative_url }}" alt="Mixed exposure portfolio">
 <video class="boss-video" muted loop playsinline preload="metadata" data-src="{{ '/assets/video/portfolio_mixed.mp4' | relative_url }}"></video>
 </div>

 <h3>Mixed Exposure (Producers + Users)</h3>

 <p class="ds-lead">
 The hedged bet. This portfolio balances oil winners and losers: half in energy producers,
 half in transport and airlines. Opposite forces partially cancel out.
 </p>

 <ul class="boss-traits">
 <li><strong>Composition:</strong> 50% producers, 50% users</li>
 <li><strong>Oil exposure:</strong> moderate, balanced</li>
 <li><strong>When oil surges:</strong> muted gains (offset)</li>
 <li><strong>When oil crashes:</strong> muted losses (offset)</li>
 <li><strong>Best for:</strong> diversified oil exposure</li>
 </ul>

 </article>

 <!-- Broad Diversified -->
 <article class="boss-card" data-hover-video>
 <div class="boss-media">
 <img class="boss-img" src="{{ '/assets/img/portfolio_broad.png' | relative_url }}" alt="Broad diversified portfolio">
 <video class="boss-video" muted loop playsinline preload="metadata" data-src="{{ '/assets/video/portfolio_broad.mp4' | relative_url }}"></video>
 </div>

 <h3>Broad Diversified Mix</h3>

 <p class="ds-lead">
 The market-neutral approach. This portfolio spreads investment across energy, transport,
 and defensive sectors. Broad exposure smooths out oil-specific shocks.
 </p>

 <ul class="boss-traits">
 <li><strong>Composition:</strong> energy, transport, utilities, groceries</li>
 <li><strong>Oil exposure:</strong> low to moderate, diversified</li>
 <li><strong>When oil surges:</strong> modest reaction</li>
 <li><strong>When oil crashes:</strong> modest reaction</li>
 <li><strong>Best for:</strong> general market participation</li>
 </ul>

 </article>

</div>

<h2>Interactive portfolio simulator</h2>

<p class="ds-lead">
The tool below allows you to simulate investment outcomes around five major oil shock events
from 2002 to 2016. You can choose from five portfolio strategies, each representing a
different bet on how the company will respond when the boss makes a sudden, major decision.
</p>

<p class="ds-lead">
Each portfolio is built from industry-level returns, reflecting the granular patterns we
documented earlier. When you run a scenario, you see both the cumulative profit-and-loss
trajectory and the final outcomes at fixed horizons: 1 month, 3 months, 6 months, and
12 months after entering the position.
</p>

<section class="ds-wrap ds-figure-section">

<div class="ds-embed">
  <iframe
    src="{{ '/assets/interactive/rq3_portfolio_widget.html' | relative_url }}"
    width="100%"
    height="950"
    style="border:0; border-radius: 12px;"
    loading="lazy"
  ></iframe>
</div>

<p class="ds-caption">
  <strong>Figure 8.</strong> Interactive portfolio simulation tool. Choose an initial
  investment amount, select a historical oil shock event (shock month = month 0), and
  pick a portfolio strategy. The tool assumes you enter the position at the start of
  month −1 (one month before the shock) and tracks realized historical outcomes.
</p>

</section>

<h3>What the portfolios represent</h3>

<p class="ds-lead">
Each portfolio corresponds to a different strategy for navigating oil-driven environments:
</p>

<ul class="ds-lead">
  <li><strong>Energy producers:</strong> Bet on the teams whose revenues move directly with
  oil prices. High upside when oil surges, severe downside when it collapses.</li>
  
  <li><strong>Oil users (transport & airlines):</strong> Bet on teams for whom fuel is a
  major cost. Benefit when oil prices fall, suffer when they rise, unless broader demand
  collapses.</li>
  
  <li><strong>Defensive staples:</strong> Bet on essential goods and regulated utilities.
  Low sensitivity to oil prices; act as stabilizers, especially during crises.</li>
  
  <li><strong>Mixed exposure (producers + users):</strong> Balance winners and losers.
  Smoother short-term reactions; diversification across oil channels.</li>
  
  <li><strong>Broad diversified mix:</strong> Spread exposure across energy and non-energy
  teams. Absorbs sector-specific shocks but remains exposed to global macro events.</li>
</ul>

<h3>What the scenarios reveal</h3>

<p class="ds-lead">
Exploring the scenarios makes three patterns immediately clear:
</p>

<p class="ds-lead">
<strong>First, short-term outcomes are driven by direct oil exposure.</strong> In the first
month after a shock, portfolios concentrated in energy producers move almost one-for-one
with oil. Oil users react in the opposite direction. Defensive portfolios barely move.
This is the immediate repricing phase, where markets digest the announcement and adjust
expectations.
</p>

<p class="ds-lead">
<strong>Second, medium-term adjustments reshape the story.</strong> By three to six months
out, firms and consumers have begun to adapt. Cost pass-through occurs, investment plans
change, and demand shifts. Early winners sometimes fade, and early losers often stabilize.
The oil shock itself becomes less dominant as operational adjustments take hold.
</p>

<p class="ds-lead">
<strong>Third, long-term outcomes are dominated by the macroeconomic context.</strong> At the
12-month horizon, the original oil movement matters far less than the broader economic
environment in which the shock occurred. If the shock coincided with a demand collapse or
financial crisis, even diversified portfolios suffer. If the shock was isolated, most
portfolios recover. The boss's mood matters, but so does the state of the entire firm.
</p>

<h3>Key takeaway: oil shocks do not translate mechanically</h3>

<p class="ds-lead">
The simulator shows that oil price shocks do not produce uniform, predictable portfolio
outcomes. Their impact depends on three dimensions:
</p>

<ol class="ds-lead">
  <li><strong>What you own:</strong> Portfolio composition determines immediate sensitivity.
  Energy producers amplify oil moves; defensive portfolios dampen them.</li>
  
  <li><strong>How long you hold:</strong> Short horizons are dominated by repricing; medium
  horizons by operational adjustment; long horizons by macroeconomic forces.</li>
  
  <li><strong>Which shock occurs:</strong> Supply shocks, demand shocks, and crisis-linked
  shocks generate very different trajectories, even when the oil price change is similar
  in magnitude.</li>
</ol>

<p class="ds-lead">
In short, there is no single "oil shock effect" on portfolios. The relationship is
conditional, dynamic, and context-dependent. Diversification helps smooth short-term
fluctuations, but it cannot fully shield portfolios from large, systemic disruptions.
</p>

<hr>

<h2>Conclusion</h2>

<p class="ds-lead">
We began this analysis with a simple premise: oil acts like a boss whose decisions ripple
through the entire company. When the boss is calm, patterns are predictable and responses
are measured. When the boss makes sudden, disruptive announcements, departments and teams
react, but not all in the same way, and not all with the same intensity.
</p>

<p class="ds-lead">
Through this lens, we examined how sectors and industries respond to oil price shocks. We
showed that these responses are highly heterogeneous: some teams are directly exposed,
others are insulated, and many fall somewhere in between. We demonstrated that oil price
movements tend to precede changes in sector returns, especially for energy-related
industries, providing evidence of a leading rather than coincident relationship.
</p>

<p class="ds-lead">
We then showed that the broader environment matters. The same oil price movement can lead
to very different outcomes depending on whether the shock reflects a demand collapse, a
supply glut, or broader financial stress. Sector sensitivities are regime-dependent, not
universal, and understanding the context in which a shock occurs is essential for
interpreting its effects.
</p>

<p class="ds-lead">
Finally, we translated these statistical patterns into portfolio outcomes. Using an
interactive simulator, we traced how different investment strategies evolved around major
historical oil shocks. The results reinforce a central message: oil shocks do not
translate mechanically into market returns. Their impact depends on what you own, how
long you hold it, and the economic regime in which the shock occurs.
</p>

<p class="ds-lead">
For investors, the implications are clear. Oil price movements carry information, but that
information is conditional. Portfolios with direct energy exposure amplify oil-driven
volatility, while defensive portfolios dampen it. Diversification helps in normal times
but offers less protection during systemic crises. Timing matters, but so does context.
</p>

<p class="ds-lead">
For researchers, this work highlights the value of moving beyond average effects.
Aggregate oil-equity relationships obscure the rich heterogeneity across sectors,
industries, and time periods. Understanding these dimensions is essential for building
more accurate models of how energy markets interact with financial markets.
</p>

<p class="ds-lead">
Ultimately, oil remains what it has always been: a macroeconomic force that shapes costs,
expectations, and risk across the global economy. When oil prices move abruptly, markets
react, but those reactions reveal deeper structures. By studying them carefully, we gain
insight not only into oil itself, but into how interconnected economic forces propagate
through complex systems.
</p>

<p class="ds-lead">
The boss may be unpredictable, but by watching how different teams respond, we learn
something essential about the organization itself.
</p>

<div class="ds-transition-box">
 <p>
 One final note: our analysis ends in March 2020. That's when COVID-19 hit and the entire
 company went into lockdown. All employees went home, not because of the boss's mood, but
 because the office building itself shut down. That story deserves its own analysis.
 </p>
 <p style="text-align: center; margin-top: 1.5rem; font-weight: 600; font-size: 1.1em;">
 To be continued...
 </p>
</div>

<div style="text-align: center; margin: 3rem 0 2rem 0;">
 <p style="font-size: 1.1em; color: #666;">
 Thank you for reading.
 </p>
 <p style="font-weight: 600; color: #2c7fb8;">
 Team LEMONADA<br>
 Charbel • Nicolas • Kevin • Ivana • Lea
 </p>
</div>

</section>
