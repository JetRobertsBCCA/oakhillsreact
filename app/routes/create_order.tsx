import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import paypal from '@paypal/checkout-server-sdk';
import { paypalClient } from "./paypal.server";

export const action = async ({ request }: ActionFunctionArgs) => {
    if (request.method !== "POST") {
        return json({ message: "Method not allowed" }, 405);
    }

    try {
        const { amount = 50, type = 'lesson' } = await request.json();
        
        const request_order = new paypal.orders.OrdersCreateRequest();
        request_order.prefer("return=representation");
        request_order.requestBody({
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'USD',
                    value: amount.toString()
                },
                description: type === 'party' ? 'Party Deposit (Non-Refundable)' : 'Private Riding Lesson'
            }]
        });

        const order = await paypalClient().execute(request_order);
        console.log("Order created:", order.result.id);
        
        return json({ orderID: order.result.id });
    } catch (err) {
        console.error("Failed to create order:", err);
        return json({ message: "Failed to create PayPal order" }, 500);
    }
}; 