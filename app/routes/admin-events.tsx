// app/routes/admin-events.tsx
import React, { useState } from 'react';
import { json, redirect } from '@remix-run/node';
import { Link } from '@remix-run/react';
import styles from './admin-events.module.scss';

export default function AdminEvents() {
    const [eventName, setEventName] = useState('');
    const [eventTime, setEventTime] = useState('');
    const [location, setLocation] = useState('');
    const [cost, setCost] = useState('');
    const [description, setDescription] = useState('');
    const [paymentLink, setPaymentLink] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newEvent = {
            eventName,
            eventTime,
            location,
            cost,
            description,
            paymentLink,
        };

        await fetch('/api/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newEvent),
        });

        redirect('/admin-events');
    };

    return (
        <div className={styles.div1}>
            <h1 className={styles.header1}>Create New Event</h1>
            <form onSubmit={handleSubmit} className={styles.form1}>
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
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Cost"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <input
                    type="url"
                    placeholder="Payment Link"
                    value={paymentLink}
                    onChange={(e) => setPaymentLink(e.target.value)}
                    required
                />
                <button type="submit">Create Event</button>
            </form>
            <Link to="/events">Back to Events</Link>
        </div>
    );
}
