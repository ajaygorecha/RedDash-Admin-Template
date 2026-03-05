// ============================================================
// Stripe Configuration
// Set MODE to "test" or "production"
// ============================================================

const STRIPE_MODE = "test";

const STRIPE_KEYS = {
  test: "pk_test_REPLACE_WITH_YOUR_TEST_KEY",
  production: "pk_live_REPLACE_WITH_YOUR_LIVE_KEY"
};

const STRIPE_PRICE_IDS = {
  test: "price_REPLACE_WITH_YOUR_TEST_PRICE_ID",
  production: "price_REPLACE_WITH_YOUR_LIVE_PRICE_ID"
};

const STRIPE_CONFIG = {
  publishableKey: STRIPE_KEYS[STRIPE_MODE],
  priceId: STRIPE_PRICE_IDS[STRIPE_MODE],
  successUrl: window.location.origin + "/landing-page/success.html",
  cancelUrl: window.location.origin + "/"
};
