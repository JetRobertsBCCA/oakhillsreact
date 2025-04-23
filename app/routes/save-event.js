import fs from 'fs';
import path from 'path';

const eventsFilePath = path.join(process.cwd(), 'data', 'events.json');

export const action = async ({ request }) => {
    const newEvent = await request.json();
    const existingEvents = JSON.parse(fs.readFileSync(eventsFilePath, 'utf-8'));

   
    existingEvents.push(newEvent);
    fs.writeFileSync(eventsFilePath, JSON.stringify(existingEvents, null, 2));

    return new Response(JSON.stringify({ success: true }), { status: 200 });
};
