import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import paypal from '@paypal/checkout-server-sdk';
import { paypalClient } from "./paypal_server/paypal.server"; //

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return json({ message: "Method Not Allowed" }, 405);
  }

  try {//TEST THE 50 DOLLA FOR PRIVATE LESSONS FIRST
   
    const amount = "50.00";
  
    const requestPayPal = new paypal.orders.OrdersCreateRequest();
    requestPayPal.prefer("return=representation");
    requestPayPal.requestBody({
      intent: 'CAPTURE',
      purchase_units: [{
        amount: {
          currency_code: 'USD',
        
          value: amount, 
        },
      }],
    });

    const order = await paypalClient().execute(requestPayPal); //
    return json({ orderID: order.result.id }); //

  } catch (error) {
    console.error("Failed to create PayPal order:", error); //
    const errorMessage = error instanceof Error ? error.message : "Unknown error creating order";
    return json({ message: `Failed to create order: ${errorMessage}` }, 500); //
  }
}