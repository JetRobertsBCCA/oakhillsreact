// C:\Users\jetin\Documents\Codux\oakhillsreact\app\utils\paypal.server.ts
import paypal from "@paypal/checkout-server-sdk";

const clientId = process.env.PAYPAL_CLIENT_ID;
const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
const environmentMode = process.env.PAYPAL_MODE || "sandbox";

// Gracefully handle missing credentials
if (!clientId || !clientSecret) {
  console.warn('PayPal client ID or secret not found in environment variables.');
}

export function createPayPalClient() {
  const environment = environmentMode === "production"
    ? new paypal.core.LiveEnvironment(clientId || "", clientSecret || "")
    : new paypal.core.SandboxEnvironment(clientId || "", clientSecret || "");
    
  return new paypal.core.PayPalHttpClient(environment);
}
