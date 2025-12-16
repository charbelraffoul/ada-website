# Oil Shocks, Sectors, and Portfolio Design

Oil price shocks are a recurring source of macroeconomic stress, yet their impact is far from uniform across financial markets. Some sectors are highly exposed to energy costs, while others act as defensive buffers. Understanding these heterogeneous responses is crucial for both economic interpretation and portfolio construction.

In this project, we study how oil price shocks affect sector-level returns, how these effects vary across economic regimes, and what this implies for cyclical versus defensive investment strategies. We complement our empirical analysis with a causal perspective to better distinguish correlation from structural effects.

This website presents the **main findings and visual insights** of our study.  
All methodological details, statistical models, and robustness checks are fully documented in the accompanying Jupyter notebooks.

---

## Research Questions

**RQ1 — Sector Responses to Oil Shocks**  
How do different economic sectors respond to oil price shocks? Which sectors experience the largest drawdowns, and which display defensive behavior?

**RQ2 — Regime-Dependent Effects**  
Do sector responses to oil shocks differ across economic regimes? Are some regimes more vulnerable to energy price fluctuations than others?

**RQ3 — Portfolio Implications**  
How do cyclical and defensive portfolios perform around oil shock events? Can portfolio composition reduce downside risk during periods of stress?

**Causal Analysis**  
Under which assumptions can we interpret oil price shocks as having a causal effect on sector returns?

---

## Interactive Exploration

To complement the empirical analysis, we provide an **interactive portfolio sandbox** that allows users to simulate how different asset allocations would have performed historically using the data from this project. This tool is designed for exploration and intuition-building rather than investment guidance.

---

## Reproducibility

All results are fully reproducible.  
The complete analysis is available in the following notebooks:

- `11_rq1_sector_shocks.ipynb`
- `12_rq2_regimes.ipynb`
- `13_rq3_cyclical_vs_defensive_portfolio.ipynb`
- `06_causal_analysis.ipynb`

---

## Authors

Project completed as part of **Applied Data Analysis (ADA)**.

---

_This project is for educational purposes only and does not constitute financial or investment advice._

# ADA Template Website

## Usage

1. Fork (copy) this repository by clicking the "Fork" button on the top right corner.
2. Go to "Settings" -> "Pages" in your forked repository. Under "Branch" change "None" to "master" and click "Save".
3. Edit the `_config.yml` file in your forked repository to change the site title (after `title:`) and description (after `description:`).
4. Build your own page by editing this `README.md` (home page) and creating new `.md` files (other pages), formatting is done with standard [GitHub Markdown syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax), we provide an example file `example.md` in the repository.
5. Add your new `.md` files to the site by editing the `_config.yml` file in your forked repository. Under `navigation:` add a new pair of `- title:` and `url:`, and fill their value with your page name and `.md` file name. Remember to remove the `- title:` and `url:` pair for the example page.
6. Go back to "Settings" -> "Pages" to find your website link.
