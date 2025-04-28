import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

interface EventRegistrationData {
    name: string;
    email: string;
    phone: string;
    eventName: string;
    orderID: string;
}

export const action = async ({ request }: ActionFunctionArgs) => {
    if (request.method !== "POST") {
        return json({ message: "Method not allowed" }, 405);
    }

    try {
        const data: EventRegistrationData = await request.json();
        
        // Add the registration to Firestore
        const docRef = await addDoc(collection(db, 'eventRegistrations'), {
            name: data.name,
            email: data.email,
            phone: data.phone,
            eventName: data.eventName,
            orderID: data.orderID,
            timestamp: new Date(),
            status: 'registered'
        });

        console.log("New event registration added with ID:", docRef.id);

        return json({ 
            success: true,
            registrationId: docRef.id
        });
    } catch (error) {
        console.error("Failed to process event registration:", error);
        return json({ message: "Failed to process registration" }, 500);
    }
}; 