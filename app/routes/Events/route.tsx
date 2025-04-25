import React, { useEffect, useState } from 'react';
import { Link } from '@remix-run/react';
import styles from './route.module.scss';
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        '/images/slide1.jpg', 
        '/images/slide2.jpg',
        '/images/slide3.jpg',
        '/images/slide4.jpg',
    ];

    useEffect(() => {
        const loadEvents = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'events'));
                const eventsData = querySnapshot.docs.map(doc => doc.data());
                setEvents(eventsData);
            } catch (error) {
                console.error('Error loading events:', error);
            }
        };

        loadEvents();

        // Set up the slideshow interval
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval); // Cleanup the interval when the component is unmounted
    }, []);

    return (
        <div className={styles.div1}>
            <div className={styles.headerBar}>
                <div className={styles.topStickyCover}></div>
                <div className={styles.headerContent}>
                    <div className={styles.navRight}>
                        <Link to="/" className={styles.navLinkRight}>Home</Link>
                        <Link to="/aboutus" className={styles.navLinkRight}>About Us</Link>
                        <Link to="/horses" className={styles.navLinkRight}>Our Horses</Link>
                        <Link to="/events" className={styles.navLinkRight}>Events</Link>
                        <Link to="contactus" className={styles.navLinkRight}>
 Contact Us
                        </Link>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className={styles.heroSection}>
                <h1>Discover What’s Happening at Oak Hill</h1>
                <p>Sign up for fun, learning, and community—right here at the Stable!</p>
            </div>

            {/* Image Slideshow Section */}
            <div className={styles.slideshowSection}>
                <img src={images[currentImageIndex]} alt="Event Slide" className={styles.slideshowImage} />
            </div>

            {/* Event Posters Grid */}
            <div className={styles.eventsGrid}>
                {events.map((event, index) => (
                    <div key={index} className={styles.eventContainer}>
                        <h3>{event.name}</h3>
                        <p><strong>Date:</strong> {event.date}</p>
                        <p><strong>Time:</strong> {event.time}</p>
                        <p><strong>Location:</strong> {event.location}</p>
                        <p><strong>Description:</strong> {event.description}</p>
                        <button className={styles.signUpButton}>Sign Up</button>
                    </div>
                ))}
            </div>

            {/* Map Section Above Footer */}
            <div className={styles.mapSection}>
                <h2>Plan Your Visit</h2>
                <p>We can't wait to welcome you! Here's where to find us:</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.059960857979!2d-89.5879805256308!3d34.170384611485176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8880697720080de9%3A0x5adbc59099274ad9!2sOak%20Hill%20Farm%20Water%20Valley%20Mississippi!5e0!3m2!1sen!2sus!4v1743825641509!5m2!1sen!2sus"
                    width="100%"
                    height="400"
                    style={{ border: 0, borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>

            {/* Footer Section */}
            <div className={styles.footerSection}>
                <div className={styles.footerLinks}>
                    <Link to="/terms" className={styles.footerLink}>Terms & Conditions</Link>
                    <Link to="/refund-policy" className={styles.footerLink}>Refund Policy</Link>
                </div>
                <div className={styles.copyright}>
                    © 2025 Oak Hill Farm
                </div>
            </div>
        </div>
    );
};

export default Events;