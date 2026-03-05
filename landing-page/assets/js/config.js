// ============================================================
// Stripe Configuration
// Set MODE to "test" or "production"
// ============================================================

const STRIPE_MODE = "test";

const STRIPE_KEYS = {
  test: "pk_test_51LQVcPSJskYSwv1INO8qc9eryy7E7r1PZlCfSUI4KSo4qDzyzpbGA4Z7f704sLca22anpThrBfnuN82K2Erv2d1900hZwZ0ik8",
  production: "pk_live_51LQVcPSJskYSwv1IO0RqpWHXNnMNPMDxblRDSNA2priyDgWA5xOGemZcqLOoyqy7oZ8HBYi0ioFPUPfZ9pZPbFWz00adJKXuAf"
};

const STRIPE_PRICE_IDS = {
  test: "price_1T7g91SJskYSwv1ItbeNWFBJ",
  production: "price_1T7g6dSJskYSwv1IuzaYbCO3"
};

const STRIPE_CONFIG = {
  publishableKey: STRIPE_KEYS[STRIPE_MODE],
  priceId: STRIPE_PRICE_IDS[STRIPE_MODE],
  successUrl: window.location.origin + "/landing-page/success.html",
  cancelUrl: window.location.origin + "/"
};
