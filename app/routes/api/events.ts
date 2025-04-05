// app/routes/api/events.ts
import { json } from '@remix-run/node';

let events = []; // This should ideally be a database or persistent storage

export const action = async ({ request }) => {
    const newEvent = await request.json();
    events.push(newEvent); // Save the new event
    return json({ success: true });
};

export const loader = () => {
    return json(events); // Return the list of events
};
