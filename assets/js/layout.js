/* ==========================================================================
   REDDASH ADMIN TEMPLATE - LAYOUT MANAGER
   ========================================================================== */

const LayoutManager = (() => {
  const STORAGE_KEY = 'reddash_layout';

  const defaults = {
    sidebarCollapsed: false,
    layout: 'default', // default | horizontal | boxed
    rtl: false
  };

  function get() {
    try {
      return Object.assign({}, defaults, JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'));
    } catch {
      return { ...defaults };
    }
  }

  function save(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  // Sidebar toggle
  function toggleSidebar() {
    const body = document.body;
    const state = get();

    if (window.innerWidth <= 991) {
      body.classList.toggle('sidebar-open');
    } else {
      const collapsed = !state.sidebarCollapsed;
      state.sidebarCollapsed = collapsed;
      save(state);
      body.classList.toggle('sidebar-collapsed', collapsed);
    }
  }

  // Set layout variant
  function setLayout(variant) {
    const body = document.body;
    body.classList.remove('layout-horizontal', 'layout-boxed');
    if (variant === 'horizontal') body.classList.add('layout-horizontal');
    if (variant === 'boxed') body.classList.add('layout-boxed');

    const state = get();
    state.layout = variant;
    save(state);

    // Update settings panel active state
    document.querySelectorAll('[data-layout]').forEach(el => {
      el.classList.toggle('active', el.dataset.layout === variant);
    });
  }

  // RTL toggle
  function setRTL(enabled) {
    document.documentElement.dir = enabled ? 'rtl' : 'ltr';
    const state = get();
    state.rtl = enabled;
    save(state);
  }

  // Settings panel
  function openSettings() {
    document.getElementById('settingsPanel')?.classList.add('open');
    document.getElementById('settingsOverlay')?.classList.add('open');
  }

  function closeSettings() {
    document.getElementById('settingsPanel')?.classList.remove('open');
    document.getElementById('settingsOverlay')?.classList.remove('open');
  }

  // Scroll to top
  function initScrollToTop() {
    const btn = document.getElementById('scrollToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 300);
    });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Active sidebar link
  function setActiveLink() {
    const current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.sidebar-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href && href === current) {
        link.classList.add('active');
        // Expand parent submenu if needed
        const parent = link.closest('.collapse');
        if (parent) {
          parent.classList.add('show');
          const trigger = document.querySelector(`[href="#${parent.id}"]`);
          if (trigger) trigger.setAttribute('aria-expanded', 'true');
        }
      }
    });
  }

  // Sidebar submenu accordion
  function initSubmenus() {
    document.querySelectorAll('.sidebar-link[data-bs-toggle="collapse"]').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('data-bs-target') || link.getAttribute('href'));
        if (!target) return;

        const isOpen = target.classList.contains('show');

        // Close others at same level
        const siblings = link.closest('.sidebar-nav')?.querySelectorAll('.sidebar-submenu.show');
        siblings?.forEach(s => s.classList.remove('show'));

        target.classList.toggle('show', !isOpen);
        link.setAttribute('aria-expanded', !isOpen);
      });
    });
  }

  // Mobile overlay close
  function initOverlay() {
    document.querySelector('.sidebar-overlay')?.addEventListener('click', () => {
      document.body.classList.remove('sidebar-open');
    });
  }

  // Dropdown menus
  function initDropdowns() {
    document.addEventListener('click', e => {
      const trigger = e.target.closest('[data-dropdown-trigger]');
      if (trigger) {
        e.stopPropagation();
        const targetId = trigger.dataset.dropdownTrigger;
        const menu = document.getElementById(targetId);
        if (!menu) return;

        // Close others
        document.querySelectorAll('.dropdown-menu.show').forEach(m => {
          if (m !== menu) m.classList.remove('show');
        });

        menu.classList.toggle('show');
      } else {
        // Click outside — close all
        document.querySelectorAll('.dropdown-menu.show').forEach(m => m.classList.remove('show'));
      }
    });
  }

  // Tabs
  function initTabs() {
    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const targetId = tab.dataset.tab;
        if (!targetId) return;

        const tabGroup = tab.closest('.nav-tabs-custom');
        const contentGroup = tabGroup?.nextElementSibling;

        tabGroup.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        contentGroup?.querySelectorAll('.tab-pane').forEach(pane => {
          pane.classList.toggle('active', pane.id === targetId);
        });
      });
    });
  }

  // Accordions
  function initAccordions() {
    document.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        const isOpen = body.classList.contains('open');

        // Close all in same accordion
        const accordion = header.closest('.accordion');
        accordion?.querySelectorAll('.accordion-body').forEach(b => b.classList.remove('open'));
        accordion?.querySelectorAll('.accordion-header').forEach(h => h.classList.remove('active'));

        if (!isOpen) {
          body.classList.add('open');
          header.classList.add('active');
        }
      });
    });
  }

  // Modals
  function initModals() {
    // Open
    document.querySelectorAll('[data-modal-target]').forEach(btn => {
      btn.addEventListener('click', () => {
        const modal = document.getElementById(btn.dataset.modalTarget);
        if (modal) modal.classList.add('open');
      });
    });

    // Close on overlay click or close btn
    document.addEventListener('click', e => {
      if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.remove('open');
      }
      if (e.target.closest('.modal-close')) {
        e.target.closest('.modal-overlay')?.classList.remove('open');
      }
    });

    // Close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
      }
    });
  }

  // Toast system
  function showToast({ title = '', message = '', type = 'primary', duration = 4000 } = {}) {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const iconMap = {
      primary: 'ri-information-line',
      success: 'ri-checkbox-circle-line',
      danger: 'ri-error-warning-line',
      warning: 'ri-alert-line',
      info: 'ri-information-line'
    };

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <i class="${iconMap[type] || iconMap.primary} toast-icon"></i>
      <div class="toast-body">
        ${title ? `<div class="toast-title">${title}</div>` : ''}
        ${message ? `<div class="toast-message">${message}</div>` : ''}
      </div>
      <button class="toast-close"><i class="ri-close-line"></i></button>
    `;

    toast.querySelector('.toast-close').addEventListener('click', () => removeToast(toast));
    container.appendChild(toast);

    if (duration > 0) {
      setTimeout(() => removeToast(toast), duration);
    }
  }

  function removeToast(toast) {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(20px)';
    toast.style.transition = 'opacity 0.3s, transform 0.3s';
    setTimeout(() => toast.remove(), 300);
  }

  // Apply stored layout
  function applyStoredLayout() {
    const state = get();
    if (state.sidebarCollapsed) document.body.classList.add('sidebar-collapsed');
    if (state.rtl) document.documentElement.dir = 'rtl';
    setLayout(state.layout || 'default');
  }

  function init() {
    applyStoredLayout();
    setActiveLink();
    initSubmenus();
    initOverlay();
    initDropdowns();
    initTabs();
    initAccordions();
    initModals();
    initScrollToTop();

    // Sidebar toggle button
    document.addEventListener('click', e => {
      if (e.target.closest('[data-action="toggle-sidebar"]')) {
        toggleSidebar();
      }
      if (e.target.closest('[data-action="open-settings"]')) {
        openSettings();
      }
      if (e.target.closest('[data-action="close-settings"]')) {
        closeSettings();
      }
    });

    document.getElementById('settingsOverlay')?.addEventListener('click', closeSettings);

    // Layout switcher
    document.querySelectorAll('[data-layout]').forEach(el => {
      el.addEventListener('click', () => setLayout(el.dataset.layout));
    });

    // RTL toggle
    document.querySelector('[data-action="toggle-rtl"]')?.addEventListener('change', e => {
      setRTL(e.target.checked);
    });

    // Expose toast globally
    window.showToast = showToast;
  }

  return { init, toggleSidebar, setLayout, setRTL, showToast };
})();

document.addEventListener('DOMContentLoaded', () => LayoutManager.init());
