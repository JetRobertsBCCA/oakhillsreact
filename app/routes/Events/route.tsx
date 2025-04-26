// app/routes/Events/route.tsx
import React, { useEffect, useState } from 'react';
import styles from './route.module.scss';
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import slide1 from '../../../src/assets/pxl_20250308_162929633.jpg';
import slide2 from '../../../src/assets/pxl_20250308_163053898.jpg';
import slide3 from '../../../src/assets/pxl_20250308_163137314.jpg';
import slide4 from '../../../src/assets/pxl_20250308_163707963.jpg';
import Footer from '../../components/Footer/Footer';
import SignupModal from '../../components/SignupModal/SignupModal';

interface Event {
    name: string;
    date: string;
    time: string;
    location: string;
    description: string;
    price?: string;
}

const Events = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // Add these states for the modal
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [currentEventName, setCurrentEventName] = useState('');

    const images = [slide1, slide2, slide3, slide4];
    const totalSlides = Math.ceil(images.length / 3);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };
    
    // Add this function to handle opening the signup modal
    const handleSignupClick = (eventName: string) => {
        setCurrentEventName(eventName);
        setShowSignupModal(true);
    };

    useEffect(() => {
        const loadEvents = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'events'));
                const eventsData = querySnapshot.docs.map(doc => doc.data() as Event);
                setEvents(eventsData);
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

                {/* Carousel Section */}
                <div className={styles.slideshowSection}>
                    <button 
                        className={`${styles.carouselButton} ${styles.prev}`}
                        onClick={prevSlide}
                        aria-label="Previous slide"
                    >
                        ←
                    </button>
                    <div 
                        className={styles.slideshowWrapper}
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {visibleImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className={styles.slideImage}
                            />
                        ))}
                    </div>
                    <button 
                        className={`${styles.carouselButton} ${styles.next}`}
                        onClick={nextSlide}
                        aria-label="Next slide"
                    >
                        →
                    </button>
                    <div className={styles.carouselDots}>
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.dot} ${currentIndex === index ? styles.active : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Event Posters Grid */}
                <div className={styles.eventsGrid}>
                    {events.map((event, index) => (
                        <div key={index} className={styles.eventContainer}>
                            <h3>{event.name}</h3>
                            <p><strong>Date:</strong> {event.date}</p>
                            <p><strong>Time:</strong> {event.time}</p>
                            <p><strong>Location:</strong> {event.location}</p>
                            <p><strong>Price:</strong> {event.price || 'Free'}</p>
                            <p><strong>Description:</strong> {event.description}</p>
                            <button 
                                className={styles.signUpButton}
                                onClick={() => handleSignupClick(event.name)}
                            >
                                Sign Up
                            </button>
                        </div>
                    ))}
                </div>

                {/* Map Section */}
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
                
                {/* Add the SignupModal component */}
                <SignupModal 
                    eventName={currentEventName}
                    isOpen={showSignupModal}
                    onClose={() => setShowSignupModal(false)}
                />
            </div>
            <Footer />
        </div>
    );
};

export default Events;
