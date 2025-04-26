import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import paypal from '@paypal/checkout-server-sdk';
import { paypalClient } from "./paypal.server"; 

export const action = async ({ request }: ActionFunctionArgs) => {
  if (request.method !== "POST") {
    return json({ message: "Method Not Allowed" }, 405);
  }

  console.log("Attempting to create order (Remix)...");
 
  const amount = "50.00";

  const payPalRequest = new paypal.orders.OrdersCreateRequest();
  payPalRequest.prefer("return=representation");
  payPalRequest.requestBody({
    intent: 'CAPTURE',
    purchase_units: [{
      amount: {
        currency_code: 'USD',
        value: String(parseFloat(amount).toFixed(2)),
      },
      description: "Oak Hill Farm Riding Lesson" 
    }],
  });

  try {
    const order = await paypalClient().execute(payPalRequest);
    console.log("Order created successfully (Remix):", order.result.id);
    return json({ orderID: order.result.id });
  } catch (error) {
    console.error("!!! Failed to create PayPal order (Remix) !!!");
    console.error("Status Code:", error.statusCode);
    console.error("Full Error:", JSON.stringify(error, null, 2));
    let errorMessage = "Failed to create order";
    if (error instanceof Error) {
       errorMessage = error.message;
    } else if (error && typeof error === 'object' && 'message' in error) {
       errorMessage = String(error.message);
    }
 
    const statusCode = (error && typeof error === 'object' && 'statusCode' in error) ? Number(error.statusCode) : 500;
    return json({ message: errorMessage }, { status: statusCode || 500 });
  }
}; 