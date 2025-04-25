import React, { useState } from 'react';
import { Link } from '@remix-run/react';
import styles from './contactUs.module.scss'; 
import global from './global.module.scss'; 

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
    
        <div className={global.pageContainer}>
     
            <div className={global.headerBar}>
                <div className={global.headerContent}>
                    <div className={global.navRight}>
                        <Link to="/" className={global.navLinkRight}>
                            Home
                        </Link>
                        <Link to="/aboutus" className={global.navLinkRight}>
                            About Us
                        </Link>
                        <Link to="/FAQ" className={global.navLinkRight}>
                            FAQ
                        </Link>
                        <Link to="/events" className={global.navLinkRight}>
                            Events
                        </Link>
                  
                    </div>
                </div>
            </div>

        
            <div className={styles.contactPage}>
                <div className={styles.heroSection}>
                    <h1>Get in Touch with Oak Hill Stable</h1>
                    <p>We’re here to answer any questions and welcome you to our beautiful farm!</p>
                </div>

                <div className={styles.contactSection}>
                    <div className={styles.locationContent}>
                 
                        <h2 className={styles.subHeading}>How to find us!</h2>
                        <iframe
                      
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..."
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
                                    Facebook
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

              
                <div className={global.footerSection}>
                    <div className={global.footerLinks}>
                        <Link to="/terms" className={global.footerLink}>
                            Terms & Conditions
                        </Link>
                        <Link to="/refund-policy" className={global.footerLink}>
                            Refund Policy
                        </Link>
                    </div>
                    <div className={global.copyright}>© 2025 Oak Hill Farm</div>
                </div>
            </div>
        </div>
    );
}