// ============================================================
// Stripe Checkout Integration
// Depends on: config.js loaded before this file
// ============================================================

(function () {
  "use strict";

  let stripeInstance = null;

  function initStripe() {
    if (typeof Stripe === "undefined") {
      console.error("Stripe.js not loaded.");
      return;
    }
    stripeInstance = Stripe(STRIPE_CONFIG.publishableKey);
  }

  async function handleBuyNow(e) {
    e.preventDefault();

    const btn = e.currentTarget;
    const originalText = btn.innerHTML;

    btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Processing…';
    btn.disabled = true;

    try {
      const { error } = await stripeInstance.redirectToCheckout({
        lineItems: [{ price: STRIPE_CONFIG.priceId, quantity: 1 }],
        mode: "payment",
        successUrl: STRIPE_CONFIG.successUrl,
        cancelUrl: STRIPE_CONFIG.cancelUrl
      });

      if (error) {
        showPaymentError(error.message);
        btn.innerHTML = originalText;
        btn.disabled = false;
      }
    } catch (err) {
      showPaymentError("Something went wrong. Please try again.");
      btn.innerHTML = originalText;
      btn.disabled = false;
    }
  }

  function showPaymentError(message) {
    const toast = document.getElementById("paymentErrorToast");
    if (!toast) return;
    const body = toast.querySelector(".toast-body");
    if (body) body.textContent = message;
    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();
  }

  function attachBuyButtons() {
    document.querySelectorAll("[data-action='buy-now']").forEach(function (btn) {
      btn.addEventListener("click", handleBuyNow);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initStripe();
    attachBuyButtons();
  });
})();
