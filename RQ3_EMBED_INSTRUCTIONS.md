# RQ3 Interactive Widget - Jekyll Embed Instructions

## Files Created

1. **Data file**: `assets/data/rq3_widget_data.json` (25.1 KB)
   - Contains all precomputed portfolio outcomes for 5 oil shock events
   - Includes data for all 5 portfolio types across 4 time horizons

2. **Widget HTML**: `assets/interactive/rq3_portfolio_widget.html`
   - Standalone interactive widget using Plotly.js
   - Loads data dynamically from the JSON file
   - Fully responsive and styled to match your site

## How to Add to Your Jekyll Site

Add this code snippet to your `index.md` (or wherever you want the widget):

```markdown
<section class="ds-wrap ds-figure-section">

<h2>RQ3: Portfolio Response to Oil Shocks</h2>

<p class="ds-lead">
The interactive tool below allows you to explore how different portfolios respond to 
major oil shocks across multiple time horizons. Select an initial investment amount, 
choose a historical oil shock event, and pick a portfolio strategy to see realized 
historical outcomes.
</p>

<div class="ds-embed">
  <iframe
    src="{{ '/assets/interactive/rq3_portfolio_widget.html' | relative_url }}"
    width="100%"
    height="900"
    style="border:0; border-radius: 12px;"
    loading="lazy"
  ></iframe>
</div>

<p class="ds-caption">
  <strong>Figure X.</strong> Interactive portfolio simulation tool showing outcomes 
  for different investment strategies around major oil shock events. Entry assumed 
  one month before the shock.
</p>

</section>
```

## Portfolio Types Available

1. **Energy producers** - Oil & gas companies (benefit from price spikes)
2. **Oil users (transport & airlines)** - Sectors with high fuel costs
3. **Defensive staples** - Food, utilities (low oil sensitivity)
4. **Mixed exposure (producers + users)** - Balanced portfolio
5. **Broad diversified mix** - Economy-wide exposure

## Oil Shock Events Included

1. **2002-12** - Venezuela oil strike (supply collapse, +17.9%)
2. **2003-04** - Iraq war disruption (demand shock, -17.5%)
3. **2008-05** - Pre-crisis demand surge (+12.5%)
4. **2014-12** - Supply glut (oversupply, -20.5%)
5. **2016-01** - Multi-year lows (weak demand, -18.3%)

## Customization Options

### Adjust iframe height
If the widget content is cut off, increase the `height` value (currently 900px).

### Add introduction text
Place contextual text before the embed explaining RQ3 and what users should look for.

### Style matching
The widget uses neutral styling that should work with your existing design. If you need 
to adjust colors or fonts, edit the `<style>` section in `rq3_portfolio_widget.html`.

## Regenerating Data

If you update the analysis or add more shock events, regenerate the data file:

```bash
cd /Users/khamis/Desktop/ada_updated_NK
python scripts/export_rq3_data.py -o /Users/khamis/Desktop/ada-website/assets/data/rq3_widget_data.json
```

## Testing

To test the widget locally:
1. Start your Jekyll server: `bundle exec jekyll serve`
2. Navigate to the page where you embedded the widget
3. Interact with the dropdowns and click "Run scenario"
4. Check browser console (F12) for any JavaScript errors

## Troubleshooting

**Widget shows "Could not load widget data"**
- Check that `assets/data/rq3_widget_data.json` exists
- Verify the relative path in the fetch() call matches your Jekyll structure

**Plot doesn't appear**
- Check that Plotly CDN is loading (see network tab in dev tools)
- Try a different Plotly version if needed

**Styling looks off**
- The widget uses inline styles and should be self-contained
- If needed, adjust the `<style>` block in the HTML file
