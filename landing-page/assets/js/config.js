// ============================================================
// PayPal Configuration
// Set MODE to "sandbox" (testing) or "live" (production)
// ============================================================

const PAYPAL_MODE = "sandbox";

// HOW TO GET YOUR CLIENT IDs:
//   1. Go to https://developer.paypal.com/dashboard/applications
//   2. "Sandbox" tab  → create/copy your sandbox client ID
//   3. "Live" tab     → create/copy your live client ID
const PAYPAL_CLIENT_IDS = {
  sandbox: "AYZLoF4BBFUGHdV6OsS3qxDPbd-m4PnRXPQzQTlXHfWkxb3tpIj6sc1YF9LyGP3RMns2ETi1zFjQKE1T",
  live:    "REPLACE_WITH_LIVE_CLIENT_ID"
};

const PAYPAL_CONFIG = {
  clientId:    PAYPAL_CLIENT_IDS[PAYPAL_MODE],
  currency:    "USD",
  amount:      "29.00",
  productName: "RedDash Admin Template",
  successUrl:  "https://reddash.tech/landing-page/success.html"
};
