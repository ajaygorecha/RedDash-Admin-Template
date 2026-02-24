/* ==========================================================================
   REDDASH ADMIN TEMPLATE - GSAP ANIMATIONS
   ========================================================================== */

const AnimationManager = (() => {

  // Page fade-in on load
  function pageEnter() {
    if (typeof gsap === 'undefined') return;

    gsap.from('.page-content', {
      opacity: 0,
      y: 16,
      duration: 0.5,
      ease: 'power2.out'
    });

    gsap.from('.stat-card', {
      opacity: 0,
      y: 20,
      duration: 0.4,
      stagger: 0.08,
      ease: 'power2.out',
      delay: 0.1
    });

    gsap.from('.card', {
      opacity: 0,
      y: 16,
      duration: 0.45,
      stagger: 0.06,
      ease: 'power2.out',
      delay: 0.15
    });
  }

  // Animated counter
  function animateCounters() {
    if (typeof gsap === 'undefined') return;

    document.querySelectorAll('[data-counter]').forEach(el => {
      const target = parseFloat(el.dataset.counter);
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      const decimals = el.dataset.decimals || 0;

      gsap.from({ val: 0 }, {
        val: target,
        duration: 1.8,
        ease: 'power2.out',
        delay: 0.3,
        onUpdate: function () {
          el.textContent = prefix + this.targets()[0].val.toFixed(decimals) + suffix;
        }
      });
    });
  }

  // Sidebar slide animation
  function sidebarAnimate(open) {
    if (typeof gsap === 'undefined') return;

    if (open) {
      gsap.from('.sidebar', {
        x: -20,
        opacity: 0.8,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  }

  // Notification dropdown animation
  function notificationDropdown(el) {
    if (typeof gsap === 'undefined') return;

    gsap.from(el, {
      opacity: 0,
      y: -8,
      duration: 0.2,
      ease: 'power2.out'
    });
  }

  // Modal entrance
  function modalEnter(el) {
    if (typeof gsap === 'undefined') return;

    gsap.from(el, {
      opacity: 0,
      scale: 0.94,
      y: -12,
      duration: 0.22,
      ease: 'back.out(1.5)'
    });
  }

  // Card hover effect
  function initCardHover() {
    document.querySelectorAll('.card-hover').forEach(card => {
      card.addEventListener('mouseenter', () => {
        if (typeof gsap === 'undefined') return;
        gsap.to(card, { y: -4, boxShadow: 'var(--shadow)', duration: 0.2, ease: 'power2.out' });
      });
      card.addEventListener('mouseleave', () => {
        if (typeof gsap === 'undefined') return;
        gsap.to(card, { y: 0, boxShadow: 'var(--shadow-sm)', duration: 0.2, ease: 'power2.out' });
      });
    });
  }

  // Progress bar fill animation
  function animateProgress() {
    if (typeof gsap === 'undefined') {
      // Fallback: just set the width directly
      document.querySelectorAll('.progress-bar[data-width]').forEach(bar => {
        bar.style.width = bar.dataset.width;
      });
      return;
    }

    document.querySelectorAll('.progress-bar[data-width]').forEach(bar => {
      gsap.from(bar, {
        width: 0,
        duration: 1.2,
        ease: 'power2.out',
        delay: 0.2
      });
      bar.style.width = bar.dataset.width;
    });
  }

  // Staggered list animation
  function animateList(selector, delay = 0) {
    if (typeof gsap === 'undefined') return;
    gsap.from(selector, {
      opacity: 0,
      x: -10,
      duration: 0.35,
      stagger: 0.07,
      ease: 'power2.out',
      delay
    });
  }

  function init() {
    pageEnter();
    animateCounters();
    initCardHover();
    animateProgress();
  }

  return { init, pageEnter, animateCounters, sidebarAnimate, notificationDropdown, modalEnter, animateProgress, animateList };
})();

document.addEventListener('DOMContentLoaded', () => AnimationManager.init());
