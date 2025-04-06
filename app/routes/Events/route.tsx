import React, { useEffect, useState } from 'react';
import { loader } from '../../../data/eventLoader'; // Adjust the path based on your structure

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const loadEvents = async () => {
            const response = await loader();
            setEvents(response);
        };

        loadEvents();
    }, []);

    return (
        <div>
            <h1>Upcoming Events</h1>
            <ul>
                {events.map((event, index) => (
                    <li key={index}>
                        <h3>{event.eventName}</h3>
                        <p><strong>Date:</strong> {event.eventTime}</p>
                        <p><strong>Location:</strong> {event.location}</p>
                        <p><strong>Cost:</strong> ${event.cost}</p>
                        <p>{event.description}</p>
                        <a href={event.paymentLink} target="_blank" rel="noopener noreferrer">Payment Link</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Events;
