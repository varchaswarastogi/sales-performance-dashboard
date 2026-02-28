# KPI Definitions & Business Logic

## Revenue KPIs

### Total Revenue
- **Formula**: `SUM(units × unit_price)` per period
- **Aggregation**: Monthly, Quarterly, Annual
- **Benchmark**: YoY growth ≥ 15% = exceeds target

### Average Order Value (AOV)
- **Formula**: `Total Revenue ÷ Number of Transactions`
- **Why it matters**: Indicates upsell success and pricing health
- **Benchmark**: $35–$42 is healthy for current product mix

### Win Rate
- **Formula**: `Won Deals ÷ (Won + Lost) × 100`
- **Benchmark**: >65% = strong pipeline efficiency

## Operational KPIs

### Target Achievement %
- **Formula**: `Actual Revenue ÷ Target Revenue × 100`
- **Thresholds**:
  - ≥100% = Achieved 🟢
  - 80–99% = On Track 🟡
  - <80% = Below Target 🔴

### Units Sold
- **Formula**: `SUM(units)` per filter selection
- **Use**: Volume metric, separates from revenue (AOV analysis)

## Growth KPIs

### YoY Revenue Growth
- **Formula**: `(Current Year Revenue - Prior Year Revenue) ÷ Prior Year Revenue × 100`
- **Target**: ≥15% globally

### Region Contribution %
- **Formula**: `Region Revenue ÷ Total Revenue × 100`
- **Purpose**: Portfolio balance; no single region >40% dependency

---

## Data Cleaning Notes
- Removed 4 duplicate transaction IDs found in raw export
- Standardized region naming (e.g. "APAC" → "Asia Pacific")
- Converted currency to USD using monthly average exchange rates
- Flagged 3 transactions with missing customer IDs as orphaned records
- Winsorized unit_price outliers at 99th percentile to remove data entry errors
