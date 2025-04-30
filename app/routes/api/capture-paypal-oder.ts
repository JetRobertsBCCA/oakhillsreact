// C:\Users\jetin\Documents\Codux\oakhillsreact\app\routes\api\capture-paypal-order.ts
import { ActionFunctionArgs, json } from "@remix-run/node";
import { createPayPalClient } from "../utils/paypal.server";

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const { orderId } = await request.json();
    
    if (!orderId) {
      return json({ error: "Order ID is required" }, { status: 400 });
    }

    const client = createPayPalClient();
    const paypalRequest = new client.orders.OrdersCaptureRequest(orderId);
    paypalRequest.requestBody({});
    
    const response = await client.execute(paypalRequest);
    
    return json({
      id: response.result.id,
      status: response.result.status,
      payer: response.result.payer,
      purchase_units: response.result.purchase_units
    });
  } catch (error) {
    console.error("Error capturing PayPal order:", error);
    return json(
      { error: "Failed to capture PayPal order" },
      { status: 500 }
    );
  }
}
