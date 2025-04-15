import React, { useEffect, useState } from 'react';
import styles from './route.module.scss';
import { db } from '../../firebaseConfig';
import { collection, getDocs, DocumentData } from 'firebase/firestore';
import { Link } from '@remix-run/react';

// Define the event type
type EventItem = {
  eventName: string;
  eventTime: string;
  location: string;
  cost: number;
  description: string;
  paymentLink: string;
};

const Events = () => {
  const [events, setEvents] = useState<EventItem[]>([]); 

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'events'));
        const eventsData = querySnapshot.docs.map(doc => doc.data() as EventItem);
        setEvents(eventsData);
      } catch (error) {
        console.error('Error loading events:', error);
      }
    };

    loadEvents();
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.topStickyCover}></div>
      <div className={styles.headerBar}>
        <div className={styles.headerContent}>
          <div className={styles.navRight}>
            <Link to="/aboutus" className={styles.navLinkRight}>About Us</Link>
            <Link to="/horses" className={styles.navLinkRight}>Our Horses</Link>
            <Link to="/events" className={styles.navLinkRight}>Events</Link>
            <Link to="/" className={styles.navLinkRight}>Home</Link>
            <Link to="/contactus" className={styles.navLinkRight}>Contact Us</Link>
          </div>
        </div>
      </div>

      <div className={styles.eventsWrapper}>
        <h1 className={styles.eventsTitle}>Upcoming Events</h1>
        <div className={styles.stickyNoteGrid}>
          {events.map((event, index) => (
            <div key={index} className={styles.stickyNote}>
              <h3>{event.eventName}</h3>
              <p><strong>Date:</strong> {event.eventTime}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Cost:</strong> ${event.cost}</p>
              <p>{event.description}</p>
              <a href={event.paymentLink} target="_blank" rel="noopener noreferrer">
                Payment Link
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;