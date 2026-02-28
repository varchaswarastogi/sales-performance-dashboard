// ================================================
// SALES PERFORMANCE DASHBOARD — DATA MODULE
// Simulates real-world sales data (CSV/DB source)
// ================================================

const SALES_DATA = {
  months: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],

  revenue2024: [312000, 287000, 398000, 421000, 389000, 445000, 412000, 478000, 502000, 531000, 619000, 724000],
  revenue2023: [268000, 241000, 312000, 358000, 337000, 380000, 365000, 401000, 433000, 455000, 502000, 610000],

  regions: {
    labels: ['North America','Europe','Asia Pacific','Latin America'],
    revenue: [1847000, 1213000, 1089000, 671000],
    colors: ['#E8FF47','#47FFB2','#FF6B47','#8888FF'],
    targets: [1700000, 1300000, 900000, 800000]
  },

  products: {
    labels: ['Electronics','Software','Apparel','Industrial','Services','Accessories'],
    revenue:  [1240000, 980000, 720000, 650000, 840000, 390000],
    targets:  [1100000, 900000, 850000, 600000, 800000, 400000],
  },

  pipeline: {
    labels: ['Q1','Q2','Q3','Q4'],
    won:        [182, 201, 224, 287],
    lost:       [63,  71,  58,  49],
    inProgress: [120, 98,  145, 167]
  },

  tableData: [
    { region: 'North America', product: 'Electronics',  revenue: 680000, units: 7620, target: 600000 },
    { region: 'North America', product: 'Software',     revenue: 520000, units: 5100, target: 500000 },
    { region: 'North America', product: 'Apparel',      revenue: 290000, units: 9400, target: 350000 },
    { region: 'North America', product: 'Services',     revenue: 357000, units: 2200, target: 300000 },
    { region: 'Europe',        product: 'Electronics',  revenue: 412000, units: 4910, target: 430000 },
    { region: 'Europe',        product: 'Industrial',   revenue: 380000, units: 1820, target: 370000 },
    { region: 'Europe',        product: 'Software',     revenue: 280000, units: 2700, target: 300000 },
    { region: 'Europe',        product: 'Services',     revenue: 141000, units: 900,  target: 200000 },
    { region: 'Asia Pacific',  product: 'Software',     revenue: 420000, units: 4200, target: 350000 },
    { region: 'Asia Pacific',  product: 'Electronics',  revenue: 371000, units: 4100, target: 400000 },
    { region: 'Asia Pacific',  product: 'Accessories',  revenue: 298000, units: 8900, target: 260000 },
    { region: 'Latin America', product: 'Apparel',      revenue: 210000, units: 6800, target: 330000 },
    { region: 'Latin America', product: 'Electronics',  revenue: 177000, units: 2100, target: 200000 },
    { region: 'Latin America', product: 'Industrial',   revenue: 284000, units: 1400, target: 280000 },
  ],

  kpiSparklines: {
    revenue:   [81, 74, 89, 92, 88, 95, 91, 97, 100, 104, 118, 134],
    units:     [72, 68, 81, 87, 84, 90, 88, 93, 96, 101, 113, 127],
    aov:       [100, 103, 98, 96, 95, 97, 94, 96, 97, 94, 95, 93],
    win:       [62, 63, 65, 65, 66, 67, 67, 68, 68, 69, 68, 69],
    customers: [88, 86, 90, 91, 92, 92, 93, 91, 92, 93, 94, 94],
  }
};

// Utility helpers
function formatCurrency(val) {
  if (val >= 1000000) return '$' + (val / 1000000).toFixed(2) + 'M';
  if (val >= 1000) return '$' + (val / 1000).toFixed(0) + 'K';
  return '$' + val;
}

function formatNumber(val) {
  return val.toLocaleString();
}

function getAchievement(revenue, target) {
  return Math.round((revenue / target) * 100);
}

function getBadge(pct) {
  if (pct >= 100) return { label: 'Achieved', cls: 'achieved' };
  if (pct >= 80)  return { label: 'On Track', cls: 'partial' };
  return { label: 'Below',   cls: 'below' };
}
