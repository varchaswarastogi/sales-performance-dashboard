// ================================================
// SALES PERFORMANCE DASHBOARD — TABLE MODULE
// ================================================

let tableRows = [];
let sortDir = 1;

function renderTable(data) {
  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = '';
  data.forEach(row => {
    const pct = getAchievement(row.revenue, row.target);
    const badge = getBadge(pct);
    const fillColor = pct >= 100 ? '#47FFB2' : pct >= 80 ? '#E8FF47' : '#FF6B47';
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong style="color:#e8e8f0">${row.region}</strong></td>
      <td>${row.product}</td>
      <td style="color:#E8FF47; font-weight:500">${formatCurrency(row.revenue)}</td>
      <td>${formatNumber(row.units)}</td>
      <td style="color:#6b6b80">${formatCurrency(row.target)}</td>
      <td>
        <div class="progress-bar-wrap">
          <div class="progress-bar">
            <div class="progress-fill" style="width:${Math.min(pct,100)}%;background:${fillColor}"></div>
          </div>
          <span style="color:${fillColor};font-size:0.75rem">${pct}%</span>
        </div>
      </td>
      <td><span class="badge ${badge.cls}">${badge.label}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

function filterTable(query) {
  const q = query.toLowerCase();
  const filtered = SALES_DATA.tableData.filter(r =>
    r.region.toLowerCase().includes(q) || r.product.toLowerCase().includes(q)
  );
  renderTable(filtered);
}

function sortTable(colIndex) {
  const keys = ['region','product','revenue','units','target'];
  const key = keys[colIndex];
  if (!key) return;
  sortDir *= -1;
  const sorted = [...SALES_DATA.tableData].sort((a,b) => {
    const av = a[key], bv = b[key];
    if (typeof av === 'string') return av.localeCompare(bv) * sortDir;
    return (av - bv) * sortDir;
  });
  renderTable(sorted);
}

function initTable() {
  renderTable(SALES_DATA.tableData);
}
