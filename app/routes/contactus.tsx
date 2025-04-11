import React from 'react';
import { Link } from '@remix-run/react';
import styles from './contactUs.module.scss';
import styles0 from './contactus.module.scss'; // it should link to is own css thing on the folders this is tempoary
//we weill need to have a global css file so our fonts and stuff are synced across pages but for now jused wanted to separeted it
//in case it interferes with quans code

export default function ContactUs() {
    return (
       
        <div className={styles.pageContainer}>
            <div className={styles.headerBar}>
            <div className={styles.topStickyCover}></div>
                <div className={styles.headerContent}>
                    <div className={styles.navRight}>
                        <Link to="/aboutus" className={styles.navLinkRight}>
                            About Us
                        </Link>
                        <Link to="/horses" className={styles.navLinkRight}>
                            Our Horses
                        </Link>
                        <Link to="/events" className={styles.navLinkRight}>
                            Events
                        </Link>
                    </div>
                </div>
            </div>


             <div className={styles.contactPage}>
            {/* Hero Section */}
            <div className={styles.heroSection}>
                <h1>Get in Touch with Oak Hill Farms</h1>
                <p>We’re here to answer any questions and welcome you to our beautiful farm!</p>
            </div>

            {/* Main Contact Section */}
            <div className={styles.contactSection}>
                <div className={styles.locationContent}>
                    <h2 className={styles.subHeading}>How to find us!</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.059960857979!2d-89.5879805256308!3d34.170384611485176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8880697720080de9%3A0x5adbc59099274ad9!2sOak%20Hill%20Farm%20Water%20Valley%20Mississippi!5e0!3m2!1sen!2sus!4v1743825641509!5m2!1sen!2sus"
                        width="100%"
                        height="400"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>

                {/* Contact Information */}
                <div className={styles.contactInfo}>
                    <h2 className={styles.subHeading}>Contact Details</h2>
                    <p><strong>Phone:</strong> (662) 202-8899</p>
                    <p><strong>Email:</strong> robinson.llinda@yahoo.com</p>
                    <h3>Business Hours</h3>
                    <ul>
                        <li>Monday - Wednesday: Closed</li>
                        <li>Thursday - Sunday: 9:00 AM – 5:00 PM</li>
                    </ul>
                    <h3>Follow Us</h3>
                    <ul className={styles.socialLinks}>
                        <li><a href="https://facebook.com/oakhillfarms" target="_blank">Facebook</a></li>
                        <li><a href="https://instagram.com/oakhillfarms" target="_blank">Instagram</a></li>
                        <li><a href="https://twitter.com/oakhillfarms" target="_blank">Twitter</a></li>
                    </ul>
                
                </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formSection}>
                <h2>Send Us a Message</h2>
                <form className={styles.contactForm}>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit" className={styles.button}>Send Message</button>
                </form>
            </div>

            {/* Footer */}
            <div className={styles.footerSection}>
                <div className={styles.footerLinks}>
                    <Link to="/terms" className={styles.footerLink}>Terms & Conditions</Link>
                    <Link to="/refund-policy" className={styles.footerLink}>Refund Policy</Link>
                </div>
                <div className={styles.copyright}>© 2025 Oak Hill Farm</div>
            </div>
        </div>
    );
}
             