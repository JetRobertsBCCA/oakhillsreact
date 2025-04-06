// app/routes/Events/route.tsx
import React, { useEffect, useState } from 'react';
import { db } from '../../firebaseConfig'; // Adjust the import path if necessary
import { collection, getDocs } from 'firebase/firestore';
import styles from './events.scss'; // Adjust the path if necessary

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const eventsCollection = collection(db, 'events');
                const eventSnapshot = await getDocs(eventsCollection);
                const eventList = eventSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setEvents(eventList);
            } catch (error) {
                console.error('Error fetching events: ', error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div className={styles.pageContainer}>
            <h1>Upcoming Events</h1>
            <ul>
                {events.map((event) => (
                    <li key={event.id}>
                        <h3>{event.eventName}</h3>
                        <p>
                            <strong>Date:</strong> {event.eventTime}
                        </p>
                        <p>
                            <strong>Location:</strong> {event.location}
                        </p>
                        <p>
                            <strong>Cost:</strong> ${event.cost}
                        </p>
                        <p>{event.description}</p>
                        <a href={event.paymentLink} target="_blank" rel="noopener noreferrer">
                            Payment Link
                        </a>
                    </li>
                ))}
            </ul>{' '}
            {/* Link to the admin event creation page */}
        </div>
    );
};

export default Events;
