// app/routes/Events/route.tsx
import React, { useEffect, useState } from 'react';
import styles from './route.module.scss';
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import Footer from '../../components/Footer/Footer';
import SignupModal from '../../components/SignupModal/SignupModal';
import { Link } from '@remix-run/react';
import classNames from 'classnames';

// Interface for Event type
interface Event {
    id: string;
    title: string;
    description: string;
    date: string;
    name: string;
    location: string;
    time: string;
    price: string;
}

export default function Events() {
    const [events, setEvents] = useState<Event[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [currentEventName, setCurrentEventName] = useState('');

    // Fetch events from Firestore
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'events'));
                const eventsData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Event[];
                setEvents(eventsData);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    const openModal = (eventName: string) => {
        setCurrentEventName(eventName);
        setShowSignupModal(true);
    };

    const closeModal = () => {
        setShowSignupModal(false);
    };

    // Sample images for slideshow
    const images = [
        '/images/slide1.PNG',
        '/images/slide2.PNG',
        '/images/slide3.PNG',
        '/images/slide4.PNG',
        '/images/slide5.PNG',
        '/images/slide6.PNG',
        '/images/slide7.PNG',
        '/images/slide8.PNG',
        '/images/slide9.PNG',
        // Add more images as needed
    ];

    const totalSlides = Math.ceil(images.length / 3);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    // Calculate which images to show based on current index
    const visibleImages = [];
    for (let i = 0; i < 3; i++) {
        const imageIndex = (currentIndex * 3 + i) % images.length;
        visibleImages.push(images[imageIndex]);
    }

    return (
        <div className={styles.div1}>
            <div className={styles.contentWrapper}>
                {/* Hero Section */}
                <div className={styles.heroSection}>
                    <h1>Discover What's Happening at Oak Hill</h1>
                    <p>Sign up for fun, learning, and community—right here at the Stable!</p>
                </div>

                {/* Slideshow Section */}
                <div className={styles.slideshowsection}>
                    <h2>Oak Hill Memories</h2>
                    <div className={styles.slideshowControls}>
                        <button onClick={prevSlide} className={styles.slideshowButton}>
                            ❮
                        </button>
                        <button onClick={nextSlide} className={styles.slideshowButton}>
                            ❯
                        </button>
                    </div>
                    <div className={styles.slideshowWrapper}>
                        {visibleImages.map((image, index) => (
                            <img
                                key={`slide-${currentIndex}-${index}`}
                                src={image}
                                alt={`Oak Hill Farm slide ${currentIndex * 3 + index + 1}`}
                                className={styles.slideImage}
                                onError={(e) => {
                                    console.error(`Failed to load image: ${image}`);
                                    e.currentTarget.src = '/images/placeholder.png';
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Events Section */}
                <div className={styles.eventsSection}>
                    <h2>Upcoming Events</h2>
                    <div className={styles.eventsGrid}>
                        {events.length > 0 ? (
                            events.map((event) => (
                                <div key={event.id} className={styles.eventContainer}>
                                    <h3>{event.name || event.title}</h3>
                                    <p>
                                        <strong>Date:</strong> {event.date}
                                    </p>
                                    <p>
                                        <strong>Time:</strong> {event.time}
                                    </p>
                                    <p>
                                        <strong>Location:</strong> {event.location}
                                    </p>
                                    <p>
                                        <strong>Price:</strong> {event.price}
                                    </p>
                                    <p>{event.description}</p>
                                    <button
                                        onClick={() => openModal(event.name || event.title)}
                                        className={classNames(styles.signupButton, styles.button2)}
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p>No upcoming events at the moment. Check back soon!</p>
                        )}
                    </div>
                </div>

                {/* Birthday parties Card - Now positioned after the events section */}
                <div className={styles.eventContainer}>
                    <img
                        src="/images/birthday-party.jpg"
                        alt="Birthday Party"
                        style={{
                            width: '100%',
                            maxWidth: 120,
                            margin: '0 auto 1rem',
                            display: 'block',
                        }}
                    />
                    <h3>Birthday parties</h3>
                    <p>
                        Reserve your special day at Oak Hill Farm! Includes 2 hours, up to 12
                        people, and more.
                    </p>
                    <Link to="/party-info" className={styles.signupButton}>
                        View & Book
                    </Link>
                </div>

                {/* Map Section */}
                <div className={styles.mapSection}>
                    <h2>Find Us</h2>
                    <p>Oak Hill Farm is located in Beautiful Mississippi Countryside</p>
                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.6505746948324!2d-89.60435812393871!3d33.00972337335359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888135bea8a09d3f%3A0x7d00b2a491de3741!2sOak%20Hill%20Farm!5e0!3m2!1sen!2sus!4v1698086622614!5m2!1sen!2sus"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Signup Modal */}
            {showSignupModal && (
                <SignupModal
                    eventName={currentEventName}
                    isOpen={showSignupModal}
                    onClose={closeModal}
                />
            )}

            <Footer />
        </div>
    );
}
