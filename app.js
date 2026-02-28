// ================================================
// SALES PERFORMANCE DASHBOARD — APP MODULE
// Initialization + interactivity
// ================================================

document.addEventListener('DOMContentLoaded', () => {
  initCharts();
  initTable();
  initNav();
  initFilters();
  animateKPIs();
});

function initNav() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

function initFilters() {
  document.getElementById('regionFilter').addEventListener('change', function() {
    updateChartsForRegion(this.value);
  });
}

function animateKPIs() {
  const targets = {
    revenue:   { el: 'kpi-revenue',   end: 4.82, prefix: '$', suffix: 'M', decimals: 2 },
    units:     { el: 'kpi-units',     end: 127340, prefix: '', suffix: '', decimals: 0, comma: true },
    aov:       { el: 'kpi-aov',       end: 37.84, prefix: '$', suffix: '', decimals: 2 },
    win:       { el: 'kpi-win',       end: 68.3, prefix: '', suffix: '%', decimals: 1 },
    customers: { el: 'kpi-customers', end: 8921, prefix: '', suffix: '', decimals: 0, comma: true },
  };

  Object.values(targets).forEach(({ el, end, prefix, suffix, decimals, comma }) => {
    const elem = document.getElementById(el);
    const duration = 1600;
    const start = performance.now();
    const startVal = 0;
    const raf = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const val = startVal + (end - startVal) * ease;
      const formatted = comma
        ? Math.round(val).toLocaleString()
        : val.toFixed(decimals);
      elem.textContent = prefix + formatted + suffix;
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  });
}

function exportData() {
  const rows = [
    ['Region','Product','Revenue','Units','Target','Achievement%'],
    ...SALES_DATA.tableData.map(r => [
      r.region, r.product, r.revenue, r.units, r.target,
      getAchievement(r.revenue, r.target) + '%'
    ])
  ];
  const csv = rows.map(r => r.join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'sales_performance_2024.csv';
  a.click();
}
