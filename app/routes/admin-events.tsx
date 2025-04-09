// app/routes/admin-events.tsx
import React, { useState } from 'react';
import { Link } from '@remix-run/react';
import styles from './admin-events.module.scss';

export default function AdminEvents() {
    const [eventName, setEventName] = useState('');
    const [eventTime, setEventTime] = useState('');
    const [location, setLocation] = useState('');
    const [cost, setCost] = useState('');
    const [description, setDescription] = useState('');
    const [paymentLink, setPaymentLink] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newEvent = {
            eventName,
            eventTime,
            location,
            cost,
            description,
            paymentLink,
        };

        // Send the new event to the server to save it in the JSON file
        await fetch('/save-event', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newEvent),
        });

        // Clear the form
        setEventName('');
        setEventTime('');
        setLocation('');
        setCost('');
        setDescription('');
        setPaymentLink('');
    };

    return (
        <div className={styles.div2}>
            <h1 className={styles.header2}>Create New Event</h1>
            <form onSubmit={handleSubmit} className={styles.form2}>
                <input
                    type="text"
                    placeholder="Event Name"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    required
                />
                <input
                    type="datetime-local"
                    value={eventTime}
                    onChange={(e) => setEventTime(e.target.value)}
                    required
                    className={styles.input4}
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                    className={styles.input3}
                />
                <input
                    type="number"
                    placeholder="Cost"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                    required
                    className={styles.input2}
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className={styles.textarea1}
                />
                <input
                    type="url"
                    placeholder="Payment Link"
                    value={paymentLink}
                    onChange={(e) => setPaymentLink(e.target.value)}
                    required
                    className={styles.input1}
                />
                <button type="submit" className={styles.button1}>
                    Create Event
                </button>
            </form>
            <Link to="/events" className={styles.link}>
                Back to Events
            </Link>
        </div>
    );
}
