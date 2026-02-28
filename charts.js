// ================================================
// SALES PERFORMANCE DASHBOARD — CHARTS MODULE
// Chart.js powered visualizations
// ================================================

Chart.defaults.color = '#6b6b80';
Chart.defaults.borderColor = '#ffffff10';
Chart.defaults.font.family = "'DM Mono', monospace";
Chart.defaults.font.size = 11;

let charts = {};

function buildRevenueChart() {
  const ctx = document.getElementById('revenueChart').getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, 0, 220);
  gradient.addColorStop(0, '#E8FF4722');
  gradient.addColorStop(1, '#E8FF4700');

  charts.revenue = new Chart(ctx, {
    type: 'line',
    data: {
      labels: SALES_DATA.months,
      datasets: [
        {
          label: '2024',
          data: SALES_DATA.revenue2024,
          borderColor: '#E8FF47',
          backgroundColor: gradient,
          borderWidth: 2,
          pointBackgroundColor: '#E8FF47',
          pointRadius: 3,
          pointHoverRadius: 6,
          tension: 0.4,
          fill: true,
        },
        {
          label: '2023',
          data: SALES_DATA.revenue2023,
          borderColor: '#ffffff22',
          backgroundColor: 'transparent',
          borderWidth: 1.5,
          borderDash: [4, 4],
          pointRadius: 0,
          tension: 0.4,
        }
      ]
    },
    options: {
      responsive: true,
      interaction: { intersect: false, mode: 'index' },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#18181f',
          borderColor: '#ffffff20',
          borderWidth: 1,
          padding: 12,
          callbacks: {
            label: ctx => ` ${ctx.dataset.label}: ${formatCurrency(ctx.raw)}`
          }
        }
      },
      scales: {
        x: { grid: { color: '#ffffff08' }, ticks: { color: '#6b6b80' } },
        y: {
          grid: { color: '#ffffff08' },
          ticks: { color: '#6b6b80', callback: v => formatCurrency(v) }
        }
      }
    }
  });
}

function buildRegionChart() {
  const ctx = document.getElementById('regionChart').getContext('2d');
  charts.region = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: SALES_DATA.regions.labels,
      datasets: [{
        data: SALES_DATA.regions.revenue,
        backgroundColor: ['#E8FF4720','#47FFB220','#FF6B4720','#8888FF20'],
        borderColor:      ['#E8FF47','#47FFB2','#FF6B47','#8888FF'],
        borderWidth: 2,
        hoverBorderWidth: 3,
        hoverOffset: 8,
      }]
    },
    options: {
      responsive: true,
      cutout: '70%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: { padding: 14, usePointStyle: true, pointStyleWidth: 8, color: '#6b6b80', font: { size: 11 } }
        },
        tooltip: {
          backgroundColor: '#18181f',
          borderColor: '#ffffff20',
          borderWidth: 1,
          callbacks: { label: ctx => ` ${ctx.label}: ${formatCurrency(ctx.raw)}` }
        }
      }
    }
  });
}

function buildProductChart() {
  const ctx = document.getElementById('productChart').getContext('2d');
  charts.product = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: SALES_DATA.products.labels,
      datasets: [
        {
          label: 'Revenue',
          data: SALES_DATA.products.revenue,
          backgroundColor: '#E8FF4730',
          borderColor: '#E8FF47',
          borderWidth: 1.5,
          borderRadius: 4,
        },
        {
          label: 'Target',
          data: SALES_DATA.products.targets,
          backgroundColor: 'transparent',
          borderColor: '#ffffff25',
          borderWidth: 1.5,
          borderDash: [3, 3],
          borderRadius: 4,
          type: 'bar',
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#18181f',
          borderColor: '#ffffff20',
          borderWidth: 1,
          callbacks: { label: ctx => ` ${ctx.dataset.label}: ${formatCurrency(ctx.raw)}` }
        }
      },
      scales: {
        x: { grid: { display: false }, ticks: { color: '#6b6b80', maxRotation: 30 } },
        y: {
          grid: { color: '#ffffff08' },
          ticks: { color: '#6b6b80', callback: v => formatCurrency(v) }
        }
      }
    }
  });
}

function buildPipelineChart() {
  const ctx = document.getElementById('pipelineChart').getContext('2d');
  charts.pipeline = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: SALES_DATA.pipeline.labels,
      datasets: [
        {
          label: 'Won',
          data: SALES_DATA.pipeline.won,
          backgroundColor: '#47FFB230',
          borderColor: '#47FFB2',
          borderWidth: 1.5,
          borderRadius: 4,
          stack: 'pipeline'
        },
        {
          label: 'In Progress',
          data: SALES_DATA.pipeline.inProgress,
          backgroundColor: '#E8FF4720',
          borderColor: '#E8FF4760',
          borderWidth: 1.5,
          borderRadius: 0,
          stack: 'pipeline'
        },
        {
          label: 'Lost',
          data: SALES_DATA.pipeline.lost,
          backgroundColor: '#FF6B4720',
          borderColor: '#FF6B4760',
          borderWidth: 1.5,
          borderRadius: 0,
          stack: 'pipeline'
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
          labels: { color: '#6b6b80', usePointStyle: true, pointStyleWidth: 8, font: { size: 11 } }
        },
        tooltip: { backgroundColor: '#18181f', borderColor: '#ffffff20', borderWidth: 1 }
      },
      scales: {
        x: { grid: { display: false }, stacked: true, ticks: { color: '#6b6b80' } },
        y: { grid: { color: '#ffffff08' }, stacked: true, ticks: { color: '#6b6b80' } }
      }
    }
  });
}

function buildSparkline(canvasId, dataKey) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  canvas.width = canvas.parentElement.clientWidth - 40;
  canvas.height = 32;
  const ctx = canvas.getContext('2d');
  const data = SALES_DATA.kpiSparklines[dataKey];
  const max = Math.max(...data);
  const min = Math.min(...data);
  const w = canvas.width, h = canvas.height;
  const pad = 2;
  
  ctx.clearRect(0, 0, w, h);
  ctx.beginPath();
  data.forEach((v, i) => {
    const x = pad + (i / (data.length - 1)) * (w - pad * 2);
    const y = h - pad - ((v - min) / (max - min || 1)) * (h - pad * 2);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.strokeStyle = '#E8FF47';
  ctx.lineWidth = 1.5;
  ctx.stroke();
}

function initCharts() {
  buildRevenueChart();
  buildRegionChart();
  buildProductChart();
  buildPipelineChart();
  setTimeout(() => {
    buildSparkline('spark-revenue', 'revenue');
    buildSparkline('spark-units', 'units');
    buildSparkline('spark-aov', 'aov');
    buildSparkline('spark-win', 'win');
    buildSparkline('spark-customers', 'customers');
  }, 100);
}

function updateChartsForRegion(region) {
  // Simulate region filter (scale by factor)
  const factors = { all:1, north:0.38, europe:0.25, asia:0.23, latam:0.14 };
  const f = factors[region] || 1;
  charts.revenue.data.datasets[0].data = SALES_DATA.revenue2024.map(v => Math.round(v * f));
  charts.revenue.update('active');
}
