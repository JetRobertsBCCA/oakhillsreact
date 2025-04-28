import React, { useState } from 'react';
import styles from './contact-us.module.scss';
import Footer from '../components/Footer/Footer';
import fbLogo from '../../src/fb_logo.png';

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
                        <div className={styles.contactInfoCard}>
                            <h2 className={styles.sectionHeading}>Contact Details</h2>
                            <div className={styles.infoRow}>
                                <span className={styles.infoLabel}>Phone:</span> (662) 202-8899
                            </div>
                            <div className={styles.infoRow}>
                                <span className={styles.infoLabel}>Email:</span>
                                <a href="mailto:robinson.llinda@yahoo.com">robinson.llinda@yahoo.com</a>
                            </div>
                            <div className={styles.infoRow}>
                                <span className={styles.infoLabel}>Address:</span>
                                7030 County Road 224, Water Valley, MS 38965, United States
                            </div>

                            <h2 className={styles.sectionHeading}>Business Hours</h2>
                            <div className={styles.infoRow}>Monday - Wednesday: Closed</div>
                            <div className={styles.infoRow}>Thursday - Sunday: 9:00 AM – 5:00 PM</div>

                            <h2 className={styles.sectionHeading}>Follow Us On</h2>
                            <div className={styles.socialSection}>
                                <a 
                                    href="https://www.facebook.com/oakhillfarm7030/" 
                                    className={styles.socialLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <img 
                                        src={fbLogo} 
                                        alt="Facebook" 
                                        className={styles.socialIcon} 
                                    />
                                    <span>Facebook</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
