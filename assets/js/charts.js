/* ==========================================================================
   REDDASH ADMIN TEMPLATE - CHART.JS INITIALIZATIONS
   ========================================================================== */

const ChartsManager = (() => {

  function getThemeColors() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    return {
      text: isDark ? '#8d96a4' : '#6c757d',
      grid: isDark ? '#2a2d35' : '#e9ecef',
      background: isDark ? '#1c1f26' : '#ffffff'
    };
  }

  const primary = '#ff0038';
  const primaryAlpha = 'rgba(255,0,56,0.12)';

  function globalDefaults() {
    if (typeof Chart === 'undefined') return;
    const c = getThemeColors();
    Chart.defaults.font.family = "'Inter', sans-serif";
    Chart.defaults.font.size = 12;
    Chart.defaults.color = c.text;
    Chart.defaults.plugins.legend.labels.usePointStyle = true;
    Chart.defaults.plugins.legend.labels.padding = 16;
    Chart.defaults.plugins.tooltip.backgroundColor = '#1c1f26';
    Chart.defaults.plugins.tooltip.titleColor = '#e4e6eb';
    Chart.defaults.plugins.tooltip.bodyColor = '#8d96a4';
    Chart.defaults.plugins.tooltip.borderColor = '#2a2d35';
    Chart.defaults.plugins.tooltip.borderWidth = 1;
    Chart.defaults.plugins.tooltip.padding = 10;
    Chart.defaults.plugins.tooltip.cornerRadius = 8;
  }

  // Revenue Area Chart
  function initRevenueChart() {
    const ctx = document.getElementById('revenueChart');
    if (!ctx || typeof Chart === 'undefined') return;

    const c = getThemeColors();

    return new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Revenue',
            data: [42000, 56000, 48000, 72000, 65000, 88000, 94000, 78000, 102000, 91000, 110000, 125000],
            borderColor: primary,
            backgroundColor: primaryAlpha,
            fill: true,
            tension: 0.45,
            pointBackgroundColor: primary,
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6,
          },
          {
            label: 'Expenses',
            data: [28000, 32000, 30000, 41000, 38000, 52000, 55000, 46000, 60000, 54000, 68000, 72000],
            borderColor: '#6c757d',
            backgroundColor: 'rgba(108,117,125,0.08)',
            fill: true,
            tension: 0.45,
            pointBackgroundColor: '#6c757d',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6,
            borderDash: [4, 4],
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: { position: 'top' },
          tooltip: {
            callbacks: {
              label: ctx => ` ${ctx.dataset.label}: $${ctx.parsed.y.toLocaleString()}`
            }
          }
        },
        scales: {
          x: { grid: { color: c.grid, drawBorder: false }, ticks: { color: c.text } },
          y: {
            grid: { color: c.grid, drawBorder: false },
            ticks: {
              color: c.text,
              callback: v => '$' + (v / 1000) + 'k'
            }
          }
        }
      }
    });
  }

  // Donut Chart
  function initDonutChart() {
    const ctx = document.getElementById('donutChart');
    if (!ctx || typeof Chart === 'undefined') return;

    return new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Direct', 'Organic', 'Referral', 'Social'],
        datasets: [{
          data: [38, 27, 22, 13],
          backgroundColor: [primary, '#6c757d', '#0dcaf0', '#ffc107'],
          borderColor: 'transparent',
          hoverOffset: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '72%',
        plugins: {
          legend: { position: 'bottom', labels: { padding: 20 } }
        }
      }
    });
  }

  // Bar Chart
  function initBarChart() {
    const ctx = document.getElementById('barChart');
    if (!ctx || typeof Chart === 'undefined') return;

    const c = getThemeColors();

    return new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'This Week',
            data: [42, 68, 57, 83, 74, 61, 49],
            backgroundColor: primary,
            borderRadius: 6,
            borderSkipped: false,
          },
          {
            label: 'Last Week',
            data: [36, 52, 48, 71, 62, 55, 40],
            backgroundColor: 'rgba(108,117,125,0.3)',
            borderRadius: 6,
            borderSkipped: false,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: { position: 'top' }
        },
        scales: {
          x: { grid: { display: false }, ticks: { color: c.text } },
          y: { grid: { color: c.grid, drawBorder: false }, ticks: { color: c.text } }
        }
      }
    });
  }

  // Mini sparkline
  function initSparklines() {
    if (typeof Chart === 'undefined') return;

    document.querySelectorAll('[data-sparkline]').forEach(canvas => {
      const values = canvas.dataset.sparkline.split(',').map(Number);
      const color = canvas.dataset.color || primary;
      const positive = canvas.dataset.direction !== 'down';

      new Chart(canvas, {
        type: 'line',
        data: {
          labels: values.map((_, i) => i),
          datasets: [{
            data: values,
            borderColor: color,
            backgroundColor: positive ? `${color}22` : `${color}22`,
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 2
          }]
        },
        options: {
          responsive: false,
          plugins: { legend: { display: false }, tooltip: { enabled: false } },
          scales: { x: { display: false }, y: { display: false } },
          animation: { duration: 800 }
        }
      });
    });
  }

  // Users growth chart
  function initUsersChart() {
    const ctx = document.getElementById('usersChart');
    if (!ctx || typeof Chart === 'undefined') return;

    const c = getThemeColors();

    return new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'New Users',
          data: [320, 445, 382, 510, 480, 620, 710, 590, 745, 680, 820, 960],
          backgroundColor: `${primary}bb`,
          borderColor: primary,
          borderWidth: 1,
          borderRadius: 4,
          borderSkipped: false,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false }, ticks: { color: c.text } },
          y: { grid: { color: c.grid }, ticks: { color: c.text } }
        }
      }
    });
  }

  // Projects status radar
  function initRadarChart() {
    const ctx = document.getElementById('radarChart');
    if (!ctx || typeof Chart === 'undefined') return;

    const c = getThemeColors();

    return new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Design', 'Development', 'Marketing', 'Sales', 'Support', 'Analytics'],
        datasets: [{
          label: 'This Month',
          data: [85, 78, 65, 72, 88, 70],
          borderColor: primary,
          backgroundColor: primaryAlpha,
          pointBackgroundColor: primary,
        }, {
          label: 'Last Month',
          data: [70, 65, 72, 58, 75, 60],
          borderColor: '#6c757d',
          backgroundColor: 'rgba(108,117,125,0.1)',
          pointBackgroundColor: '#6c757d',
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom' } },
        scales: {
          r: {
            grid: { color: c.grid },
            ticks: { color: c.text, backdropColor: 'transparent', stepSize: 20 },
            pointLabels: { color: c.text }
          }
        }
      }
    });
  }

  function init() {
    globalDefaults();
    initRevenueChart();
    initDonutChart();
    initBarChart();
    initSparklines();
    initUsersChart();
    initRadarChart();
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', () => ChartsManager.init());
