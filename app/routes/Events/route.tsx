// app/routes/Events/route.tsx
import React, { useEffect, useState } from 'react';
import styles from './route.module.scss';
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import Footer from '../../components/Footer/Footer';
import SignupModal from '../../components/SignupModal/SignupModal';
import classNames from 'classnames';

// Interface for Event type
interface Event {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    price: string;
}

export default function Events() {
    const [events, setEvents] = useState<Event[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [currentEventName, setCurrentEventName] = useState('');

    // Define images in the public folder
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
    ];

    const totalSlides = Math.ceil(images.length / 3);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    const openModal = (eventName: string) => {
        setCurrentEventName(eventName);
        setShowSignupModal(true);
    };

    const closeModal = () => {
        setShowSignupModal(false);
    };

    useEffect(() => {
        const loadEvents = async () => {
            try {
                const eventsCollection = collection(db, 'events');
                const eventsSnapshot = await getDocs(eventsCollection);
                const eventsList = eventsSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Event[];
                setEvents(eventsList);
            } catch (error) {
                console.error('Error loading events:', error);
            }
        };

        loadEvents();

        // Set up the slideshow interval
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

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
                    <div className={styles.slideshowWrapper}>
                        {images
                            .slice(currentIndex * 3, currentIndex * 3 + 3)
                            .map((image, index) => (
                                <img
                                    key={`slide-${currentIndex}-${index}`}
                                    src={image}
                                    alt={`Oak Hill Farm slide ${currentIndex * 3 + index + 1}`}
                                    className={styles.slideImage}
                                    onError={(e) => {
                                        console.error(`Failed to load image: ${image}`);
                                        e.currentTarget.src = '/images/placeholder.png'; // Fallback image
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
                                    <h3>{event.title}</h3>
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
                                        onClick={() => openModal(event.title)}
                                        className={classNames(styles.signupButton, styles.button1)}
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
            </div>
            <Footer />
            {showSignupModal && <SignupModal eventName={currentEventName} onClose={closeModal} />}
        </div>
    );
}
