import paypal from '@paypal/checkout-server-sdk';
import 'dotenv/config';

const clientId = process.env.PAYPAL_CLIENT_ID;
const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
const environmentMode = process.env.PAYPAL_MODE || 'sandbox';

if (!clientId || !clientSecret) {
  console.error("FATAL ERROR: PayPal client ID or secret not found in environment variables.");
  process.exit(1);
}

console.log(`--- PayPal Mode (Remix): ${environmentMode} ---`);

const environment = environmentMode === 'live'
  ? new paypal.core.LiveEnvironment(clientId, clientSecret)
  : new paypal.core.SandboxEnvironment(clientId, clientSecret);

const client = new paypal.core.PayPalHttpClient(environment);

export function paypalClient() {
  return client;
} 
export function isServerModule() {
  return true;
}