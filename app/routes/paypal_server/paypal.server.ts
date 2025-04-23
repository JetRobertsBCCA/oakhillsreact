
import paypal from '@paypal/checkout-server-sdk';


const clientId = process.env.PAYPAL_CLIENT_ID;
const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  throw new Error("PayPal client ID or secret not found in environment variables.");
}


const environment = process.env.PAYPAL_MODE === 'live'
  ? new paypal.core.LiveEnvironment(clientId, clientSecret)
  : new paypal.core.SandboxEnvironment(clientId, clientSecret);

const client = new paypal.core.PayPalHttpClient(environment);

export function paypalClient() {
  return client;
}