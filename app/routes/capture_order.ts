import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import paypal from '@paypal/checkout-server-sdk';
import { paypalClient } from "./paypal.server"; 

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return json({ message: "Method Not Allowed" }, 405);
  }

  try {
    const { orderID } = await request.json();
    console.log(`Attempting to capture order (Remix): ${orderID}`);

    if (!orderID || typeof orderID !== 'string') {
      return json({ message: "Invalid Order ID" }, 400);
    }

    const payPalRequest = new paypal.orders.OrdersCaptureRequest(orderID);
 

    const capture = await paypalClient().execute(payPalRequest);
    console.log("Capture successful (Remix):", JSON.stringify(capture.result, null, 2));

    const captureResult = capture.result;
    const captureStatus = captureResult.status;

    if (captureStatus === 'COMPLETED') {
      console.log("Payment COMPLETED (Remix)!");
     
      return json({ success: true, capture: captureResult });
    } else {
      console.warn("Payment capture status not completed (Remix):", captureStatus);
      return json({ success: false, message: `Payment status: ${captureStatus}` }, 400);
    }

  } catch (error) {
    console.error("!!! Failed to capture PayPal order (Remix) !!!");
    console.error("Status Code:", error.statusCode);
    console.error("Full Error:", JSON.stringify(error, null, 2));
    let errorMessage = "Failed to capture payment";
    if (error instanceof Error) {
       errorMessage = error.message;
    } else if (error && typeof error === 'object' && 'message' in error) {
       errorMessage = String(error.message);
    }
    const statusCode = (error && typeof error === 'object' && 'statusCode' in error) ? Number(error.statusCode) : 500;
    return json({ message: errorMessage }, { status: statusCode || 500 });
  }
}