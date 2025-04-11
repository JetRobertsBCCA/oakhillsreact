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

            <div className={styles.contactSection}>
                <div className={styles.locationContent}>
                    <h2 className={styles.subHeading}>How to find us!</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.059960857979!2d-89.5879805256308!3d34.170384611485176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8880697720080de9%3A0x5adbc59099274ad9!2sOak%20Hill%20Farm%20Water%20Valley%20Mississippi!5e0!3m2!1sen!2sus!4v1743825641509!5m2!1sen!2sus"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <Link to="/waitlist" className={styles.button}>
                        Contact us here!
                    </Link>
                </div>
                <div className={styles.contentWrapper}>
                    <h1 className={styles.mainHeading}>Oak Hill Farms</h1>
                    <h2 className={styles.subHeading}>Contact Us</h2>
                    <div className={styles.contactInfo}>
                        <p>
                            <strong>Phone:</strong>
                            <br />
                            (662) 202-8899
                        </p>
                        <p>
                            <strong>Email:</strong>
                            <br />
                            robinson.llinda@yahoo.com
                        </p>
                        <strong>Business Hours:</strong>
                        <br />
                        Monday: Closed
                        <br />
                        Tuesday: Closed
                        <br />
                        Wednesday: Closed
                        <br />
                        Thursday: 9:00 AM – 5:00 PM
                        <br />
                        Friday: 9:00 AM – 5:00 PM
                        <br />
                        Saturday: 9:00 AM – 5:00 PM
                        <br />
                        Sunday: 9:00 AM – 5:00 PM
                        <p>
                            <strong>Social Media:</strong>
                            <br />
                            Follow us on our social media channels for the latest updates, events,
                            and pictures!
                        </p>
                        <ul>
                            <li>
                                Facebook:{' '}
                                <a
                                    href="https://facebook.com/PLaceholder"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    facebook.com/oakhillfarms
                                </a>{' '}
                            </li>
                            <li>
                                Instagram:{' '}
                                <a
                                    href="https://instagram.com/placeholder"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    @oakhillfarms
                                </a>{' '}
                            </li>
                            <li>
                                Twitter:{' '}
                                <a
                                    href="https://twitter.com/placehlder"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    @oakhillfarms
                                </a>{' '}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.footerSection}>
                <div className={styles.footerLinks}>
                    <Link to="/pricing" className={styles.footerLink}></Link>
                    <Link to="/terms" className={styles.footerLink}>
                        Terms & Conditions
                    </Link>
                    <Link to="/refund-policy" className={styles.footerLink}>
                        Refund Policy
                    </Link>
                    <Link to="/routes/ContactUs" className={styles.footerLink}></Link>
                </div>
                <div className={styles.copyright}>Copyright © 2025 Oak Hill Farm</div>
            </div>
        </div>
    );
}
