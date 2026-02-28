# 📊 Sales Performance Dashboard

> **Interactive sales analytics dashboard** — Region, Product & Time-based KPI analysis built with vanilla HTML/CSS/JS + Chart.js

![Dashboard Preview](https://img.shields.io/badge/Status-Live%20Demo-brightgreen?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat-square&logo=chart.js&logoColor=white)

---

## 🎯 Project Overview

This project simulates a **Power BI / Tableau–style Sales Performance Dashboard**, demonstrating data analysis, KPI design, and interactive visualization using web technologies. It was built to showcase skills in:

- **Data Cleaning & Transformation** — Raw CSV-style data normalized into structured JS objects
- **KPI Definition** — Revenue, Units Sold, AOV, Win Rate, Customer Count
- **Visual Analytics** — Trend lines, donut charts, stacked bar charts, progress trackers
- **Business Insights** — Regional high-performers and underperforming category detection

---

## 📸 Features

| Feature | Description |
|---|---|
| 📈 Revenue Trend | Monthly 2024 vs 2023 line chart with fill |
| 🗺️ Region Breakdown | Doughnut chart with % distribution |
| 🛍️ Product Performance | Revenue vs Target horizontal bars |
| 🔄 Pipeline View | Stacked quarterly Won/Lost/In-Progress |
| 📋 Data Table | Searchable, sortable regional breakdown |
| 💡 Insight Cards | Auto-derived top performer & risk flags |
| 📥 CSV Export | One-click data download |
| 🎛️ Filters | Year + Region filter (live chart update) |

---

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/sales-performance-dashboard.git
cd sales-performance-dashboard
```

### 2. Run Locally (No Build Required)
```bash
# Option A – Python (built-in)
python3 -m http.server 8080
# Open → http://localhost:8080

# Option B – Node.js
npx serve .
# Open → http://localhost:3000

# Option C – VS Code
# Install "Live Server" extension → Right-click index.html → Open with Live Server
```

---

## 📁 Project Structure

```
sales-performance-dashboard/
├── index.html              # Main dashboard layout & HTML structure
├── src/
│   ├── style.css           # Full design system (CSS variables, dark theme)
│   ├── data.js             # All sales data (cleaned & normalized)
│   ├── charts.js           # Chart.js chart constructors
│   ├── table.js            # Table render, sort, search logic
│   └── app.js              # App init, KPI animations, filters, export
├── data/
│   └── sales_data.csv      # Raw data file (source of truth)
├── docs/
│   ├── KPI_DEFINITIONS.md  # Business KPI definitions & formulas
│   └── INSIGHTS_REPORT.md  # Derived business insights
└── README.md
```

---

## 📊 KPIs Tracked

| KPI | Formula | Benchmark |
|---|---|---|
| **Total Revenue** | Σ(Sale Price × Units) | YoY +18.4% |
| **Units Sold** | Σ(Units per transaction) | 127,340 |
| **Avg Order Value** | Revenue ÷ # Orders | $37.84 |
| **Win Rate** | Won ÷ (Won + Lost) × 100 | 68.3% |
| **Customer Count** | # Unique customer IDs | 8,921 |

---

## 🔍 Key Insights Derived

### 🏆 High-Performing
- **North America — Electronics**: Exceeded target by **34%**, highest AOV at $89. Drives 28% of global revenue.
- **Asia Pacific — Software**: YoY growth of **41%**, fastest growing segment.

### ⚠️ Underperforming
- **Latin America — Apparel**: Only **64% target achievement**. Supply chain delays in Q2–Q3 impacted performance.
- **Europe — Industrial**: Near-flat **2% growth** amid regulatory changes in Q3.

### 📌 Recommendations
1. Increase sales headcount in Asia Pacific Software by 20%
2. Conduct pricing & logistics review for LATAM Apparel
3. Restructure European Industrial portfolio for regulatory compliance
4. Replicate NA Electronics campaign strategy in Q4 globally

---

## 🛠️ Tech Stack

- **HTML5** — Semantic layout
- **CSS3** — Custom properties, Grid, Flexbox, animations
- **JavaScript (ES6+)** — Vanilla JS, no framework dependency
- **[Chart.js v4](https://www.chartjs.org/)** — All data visualizations
- **[Google Fonts](https://fonts.google.com/)** — Syne (display) + DM Mono (data)

---

## 🧩 Extending This Project

To connect real data:
1. Replace `src/data.js` values with API fetch calls
2. Add `async/await` in `app.js` for live data loading
3. Use environment variables for API keys

To connect to Power BI / Tableau:
- Export cleaned `data/sales_data.csv` into Power BI Desktop
- Use the same KPI formulas in DAX or Calculated Fields

---


## 🙋‍♂️ Author

> ⭐ If you found this useful, drop a star!
