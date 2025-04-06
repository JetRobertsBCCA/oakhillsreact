// app/routes/admin-events.tsx
import React, { useState } from 'react';
import { Link } from '@remix-run/react';
import { db } from '../firebaseConfig'; // Adjust the import path if necessary
import { collection, addDoc } from 'firebase/firestore';

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

        try {
            // Add a new document with a generated ID
            await addDoc(collection(db, 'events'), newEvent);
            // Clear the form
            setEventName('');
            setEventTime('');
            setLocation('');
            setCost('');
            setDescription('');
            setPaymentLink('');
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <div>
            <h1>Create New Event</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Event Name" value={eventName} onChange={(e) => setEventName(e.target.value)} required />
                <input type="datetime-local" value={eventTime} onChange={(e) => setEventTime(e.target.value)} required />
                <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
                <input type="number" placeholder="Cost" value={cost} onChange={(e) => setCost(e.target.value)} required />
                <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                <input type="url" placeholder="Payment Link" value={paymentLink} onChange={(e) => setPaymentLink(e.target.value)} required />
                <button type="submit">Create Event</button>
            </form>
            <Link to="/events">Back to Events</Link>
        </div>
    );
}
