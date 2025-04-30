// C:\Users\jetin\Documents\Codux\oakhillsreact\app\routes\api\create-paypal-order.ts
import { ActionFunctionArgs, json } from "@remix-run/node";
import { createPayPalClient } from "../utils/paypal.server";

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const { amount, description } = await request.json();
    
    if (!amount || isNaN(parseFloat(amount))) {
      return json({ error: "Invalid amount" }, { status: 400 });
    }

    const client = createPayPalClient();
    const paypalRequest = new client.orders.OrdersCreateRequest();
    
    paypalRequest.prefer("return=representation");
    paypalRequest.requestBody({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: amount.toString(),
          },
          description: description || "Oak Hills Farm Service"
        },
      ],
    });

    const response = await client.execute(paypalRequest);
    
    return json({
      id: response.result.id,
      status: response.result.status
    });
  } catch (error) {
    console.error("Error creating PayPal order:", error);
    return json(
      { error: "Failed to create PayPal order" },
      { status: 500 }
    );
  }
}
