import React, { useState } from 'react';
import styles from './contactUs.module.scss';
import Footer from '../components/Footer/Footer';

export default function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Form submitted:', { name, email, message });
        setSubmitted(true);
    };

    return (
        <div>
            <div className={styles.pageWrapper}>
                <div className={styles.heroSection}>
                    <h1>Get in Touch with Oak Hill Stable</h1>
                    <p>We're here to answer any questions and welcome you to our beautiful farm!</p>
                </div>

                <div className={styles.contactSection}>
                    <div className={styles.locationContent}>
                        <h2 className={styles.subHeading}>How to find us!</h2>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.059960857979!2d-89.5879805256308!3d34.170384611485176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8880697720080de9%3A0x5adbc59099274ad9!2sOak%20Hill%20Farm%20Water%20Valley%20Mississippi!5e0!3m2!1sen!2sus!4v1743825641509!5m2!1sen!2sus"
                            width="100%" 
                            height="400" 
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div className={styles.contactInfo}>
                        <h2 className={styles.subHeading}>Contact Details</h2>
                        <p>
                            <strong>Phone:</strong> (662) 202-8899
                        </p>
                        <p>
                            <strong>Email:</strong> robinson.llinda@yahoo.com
                        </p>
                        <h3>Business Hours</h3>
                        <ul>
                            <li>Monday - Wednesday: Closed</li>
                            <li>Thursday - Sunday: 9:00 AM – 5:00 PM</li>
                        </ul>
                        <h3>Follow Us</h3>
                        <ul className={styles.socialLinks}>
                            <li>
                                <a href="https://facebook.com/oakhillfarms" target="_blank" rel="noopener noreferrer">
                                    Facebook mental note we need to verify we are linking ther right social media pages!
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/oakhillfarms" target="_blank" rel="noopener noreferrer">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/oakhillfarms" target="_blank" rel="noopener noreferrer">
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.formSection}>
                    <h2>Send Us a Message</h2>
                    {submitted ? (
                        <p>Thank you for your message!</p>
                    ) : (
                        <form className={styles.contactForm} onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <textarea
                                placeholder="Your Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                            <button type="submit" className={styles.button}>
                                Send Message
                            </button>
                        </form>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
} 