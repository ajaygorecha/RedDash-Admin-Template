// ============================================================
// PayPal Smart Buttons — client-side only, no backend needed
// Depends on: config.js loaded before this file
// ============================================================

(function () {
  "use strict";

  // ── Dynamically load the PayPal SDK with the configured client ID ──
  function loadPayPalSDK() {
    return new Promise(function (resolve, reject) {
      if (window.paypal) { resolve(); return; }

      var script = document.createElement("script");
      script.src = "https://www.paypal.com/sdk/js"
        + "?client-id=" + PAYPAL_CONFIG.clientId
        + "&currency=" + PAYPAL_CONFIG.currency
        + "&intent=capture";
      script.onload  = resolve;
      script.onerror = function () {
        reject(new Error("Failed to load PayPal SDK."));
      };
      document.head.appendChild(script);
    });
  }

  // ── Render PayPal buttons inside the modal container ──────────────
  function renderPayPalButtons() {
    var container = document.getElementById("paypal-button-container");
    if (!container) return;

    // Clear any previously rendered buttons (e.g. modal re-opened)
    container.innerHTML = "";

    paypal.Buttons({
      style: {
        layout: "vertical",
        color:  "gold",
        shape:  "rect",
        label:  "pay",
        height: 48
      },

      // Create the order
      createOrder: function (_data, actions) {
        return actions.order.create({
          purchase_units: [{
            description: PAYPAL_CONFIG.productName,
            amount: {
              currency_code: PAYPAL_CONFIG.currency,
              value: PAYPAL_CONFIG.amount
            }
          }]
        });
      },

      // On successful payment — capture & redirect
      onApprove: function (_data, actions) {
        return actions.order.capture().then(function () {
          // Close modal
          var modal = bootstrap.Modal.getInstance(
            document.getElementById("paypalModal")
          );
          if (modal) modal.hide();

          // Redirect to success/download page
          window.location.href = PAYPAL_CONFIG.successUrl;
        });
      },

      // Payment cancelled
      onCancel: function () {
        showPaymentMessage("Payment cancelled. You can try again anytime.", "warning");
      },

      // Error
      onError: function (e) {
        console.error("PayPal error:", e);
        showPaymentMessage("Something went wrong with PayPal. Please try again.", "danger");
      }

    }).render("#paypal-button-container");
  }

  // ── Show toast message ─────────────────────────────────────────────
  function showPaymentMessage(message, type) {
    var toast = document.getElementById("paymentToast");
    if (!toast) return;
    toast.className = "toast align-items-center text-bg-" + type + " border-0";
    var body = toast.querySelector(".toast-body");
    if (body) body.textContent = message;
    bootstrap.Toast.getOrCreateInstance(toast).show();
  }

  // ── Open modal & load SDK on first "Buy Now" click ─────────────────
  function handleBuyNow(e) {
    e.preventDefault();

    var modalEl = document.getElementById("paypalModal");
    if (!modalEl) return;

    var modal = new bootstrap.Modal(modalEl);
    modal.show();

    // Load SDK once, then render buttons
    var container = document.getElementById("paypal-button-container");
    if (container) {
      container.innerHTML =
        '<div class="d-flex justify-content-center py-4">'
        + '<div class="spinner-border text-warning" role="status">'
        + '<span class="visually-hidden">Loading PayPal…</span>'
        + '</div></div>';
    }

    loadPayPalSDK()
      .then(renderPayPalButtons)
      .catch(function (err) {
        if (container) {
          container.innerHTML =
            '<p class="text-danger text-center small">Could not load PayPal. '
            + 'Please check your connection and try again.</p>';
        }
      });
  }

  // ── Init ───────────────────────────────────────────────────────────
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-action='buy-now']").forEach(function (btn) {
      btn.addEventListener("click", handleBuyNow);
    });
  });

})();
