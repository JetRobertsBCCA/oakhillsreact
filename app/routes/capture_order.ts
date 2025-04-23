
import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import paypal from '@paypal/checkout-server-sdk';
import { paypalClient } from "./paypal_server/paypal.server"; 


export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return json({ message: "Method Not Allowed" }, 405);
  }

  try {
    const { orderID } = await request.json();
    if (!orderID || typeof orderID !== 'string') {
      return json({ message: "Invalid Order ID" }, 400);
    }

    const requestPayPal = new paypal.orders.OrdersCaptureRequest(orderID);
    requestPayPal.requestBody({});//keeping it empty for now but borkes out an dsays theres an error

  
    const capture = await paypalClient().execute(requestPayPal);

    
    const captureResult = capture.result;
    const captureStatus = captureResult.status; 

    if (captureStatus === 'COMPLETED') {
     
      console.log("Payment successful!", captureResult);
     
      return json({ success: true, capture: captureResult });
    } else {
    
      console.warn("Payment capture status not completed:", captureStatus, captureResult);
    
      return json({ success: false, message: `Payment status: ${captureStatus}` }, 400); 
    }

  } catch (error: any) {
    console.error("Failed to capture PayPal order:", error);
    const errorMessage = error.message || "Failed to capture payment";
    return json({ message: errorMessage }, 500);
  }
}