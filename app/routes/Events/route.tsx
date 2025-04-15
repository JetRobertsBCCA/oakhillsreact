import React, { useEffect, useState } from 'react';
import styles from './route.module.scss';
import { db } from '../../firebaseConfig'; // Adjust the path if necessary
import { collection, getDocs } from 'firebase/firestore';

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const loadEvents = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'events')); // 'events' is the collection name
                const eventsData = querySnapshot.docs.map(doc => doc.data());
                setEvents(eventsData);
            } catch (error) {
                console.error('Error loading events:', error);
            }
        };

        loadEvents();
    }, []);

    return (
        <div className={styles.div1}>
            <h1>Upcoming Events</h1>
            {events.map((event, index) => (
                <div key={index} className={styles.eventContainer}>
                    <h3>{event.name}</h3>
                    <p>
                        <strong>Date:</strong> {event.date}
                    </p>
                    <p>
                        <strong>Time:</strong> {event.time}
                    </p>
                    <p>
                        <strong>Location:</strong> {event.location}
                    </p>
                    {/* Add any additional fields you may have */}
                </div>
            ))}
        </div>
    );
};

export default Events;
