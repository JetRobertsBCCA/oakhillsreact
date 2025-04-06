// app/routes/save-event.js
import fs from 'fs';
import path from 'path';

const eventsFilePath = path.join(process.cwd(), 'data', 'events.json');

export const action = async ({ request }) => {
    const newEvent = await request.json();

    // Read the existing events from the JSON file
    const existingEvents = JSON.parse(fs.readFileSync(eventsFilePath, 'utf-8'));

    // Add the new event to the existing events
    existingEvents.push(newEvent);

    // Write the updated events back to the JSON file
    fs.writeFileSync(eventsFilePath, JSON.stringify(existingEvents, null, 2));

    return new Response(JSON.stringify({ success: true }), { status: 200 });
};
