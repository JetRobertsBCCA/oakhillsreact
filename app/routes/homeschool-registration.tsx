import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

interface RegistrationData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    orderID: string;
}

export const action = async ({ request }: ActionFunctionArgs) => {
    if (request.method !== "POST") {
        return json({ message: "Method not allowed" }, 405);
    }

    try {
        const data: RegistrationData = await request.json();
        
        // TODO: Add your database or email service integration here
        // For now, we'll just log the data
        console.log("New homeschool registration:", {
            student: `${data.firstName} ${data.lastName}`,
            contact: {
                email: data.email,
                phone: data.phone
            },
            orderID: data.orderID
        });

        return json({ success: true });
    } catch (error) {
        console.error("Failed to process registration:", error);
        return json({ message: "Failed to process registration" }, 500);
    }
}; 