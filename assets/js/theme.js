/* ==========================================================================
   REDDASH ADMIN TEMPLATE - THEME MANAGER
   ========================================================================== */

const ThemeManager = (() => {
  const STORAGE_KEY = 'reddash_theme';
  const DARK = 'dark';
  const LIGHT = 'light';

  function get() {
    return localStorage.getItem(STORAGE_KEY) || LIGHT;
  }

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    updateToggleIcons(theme);
    updateCharts(theme);
  }

  function toggle() {
    const current = get();
    const next = current === DARK ? LIGHT : DARK;
    apply(next);
  }

  function updateToggleIcons(theme) {
    const icons = document.querySelectorAll('[data-theme-icon]');
    icons.forEach(icon => {
      if (theme === DARK) {
        icon.className = icon.className.replace('ri-moon-line', 'ri-sun-line');
      } else {
        icon.className = icon.className.replace('ri-sun-line', 'ri-moon-line');
      }
    });
  }

  function updateCharts(theme) {
    if (typeof Chart === 'undefined') return;
    const textColor = theme === DARK ? '#8d96a4' : '#6c757d';
    const gridColor = theme === DARK ? '#2a2d35' : '#e9ecef';
    Chart.defaults.color = textColor;
    Chart.defaults.scale.grid = { color: gridColor };
    // Re-render all charts
    Object.values(Chart.instances || {}).forEach(chart => {
      if (chart && chart.options) {
        chart.update();
      }
    });
  }

  function init() {
    const saved = get();
    apply(saved);

    // Bind toggle buttons
    document.addEventListener('click', e => {
      if (e.target.closest('[data-action="toggle-theme"]')) {
        toggle();
      }
    });
  }

  return { init, toggle, get, apply };
})();

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => ThemeManager.init());
