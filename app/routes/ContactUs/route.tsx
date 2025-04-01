import React from 'react';
import { Link } from '@remix-run/react';
import styles from './contactUs.module.scss'; // it should link to is own css thing on the folders this is tempoary
//we weill need to have a global css file so our fonts and stuff are synced across pages but for now jused wanted to separeted it
//in case it interferes with quans code

export default function ContactUs() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.headerBar}>
                <div className={styles.headerContent}>
                    <div className={styles.navRight}>
                        <Link to="/routes/AboutUs" className={styles.navLinkRight}>
                            About Us
                        </Link>
                        <Link to="/horses" className={styles.navLinkRight}>
                            Our Horses
                        </Link>
                        <Link to="/" className={styles.navLinkRight}>
                            Home
                        </Link>
                        <Link to="/events" className={styles.navLinkRight}>
                            Events
                        </Link>
                        <Link to="/routes/ContactUs" className={styles.navLinkRight}>
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>

            <div className={styles.contactSection}>
                <div className={styles.contentWrapper}>
                    <h1 className={styles.mainHeading}>Oak Hill Farms</h1>
                    <h2 className={styles.subHeading}>Contact Us</h2>

                    <div className={styles.contactInfo}>
                        <p>
                            <strong>Phone:</strong>
                            <br />
                            (123) 456-7890
                        </p>
                        <p>
                            <strong>Email:</strong>
                            <br />
                            info@oakhillfarms.com
                        </p>
                        <p>
                            <strong>Business Hours:</strong>
                            <br />
                            Monday – Friday: 9:00 AM – 5:00 PM
                            <br />
                            Saturday: 10:00 AM – 3:00 PM
                            <br />
                            Sunday: Closed
                        </p>
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
                                    href="https://facebook.com/oakhillfarms"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    facebook.com/oakhillfarms
                                </a>{' '}
                            
                            </li>
                            <li>
                                Instagram:{' '}
                                <a
                                    href="https://instagram.com/oakhillfarms"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    @oakhillfarms
                                </a>{' '}
                            
                            </li>
                            <li>
                                Twitter:{' '}
                                <a
                                    href="https://twitter.com/oakhillfarms"
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

            <div className={styles.locationSection}>
                <div className={styles.locationContent}>
                    <h2 className={styles.subHeading}>How to find us!</h2>
                    <p className={styles.bodyText}>We are located in Water Valley MS</p>
                    <Link to="/waitlist" className={styles.button}>
                        Join Waitlist
                    </Link>
                </div>
            </div>
            <div className={styles.footerSection}>
                <div className={styles.footerLinks}>
                    <Link to="/pricing" className={styles.footerLink}>
                        Pricing
                    </Link>
                    <Link to="/terms" className={styles.footerLink}>
                        Terms &amp; Conditions
                    </Link>
                    <Link to="/refund-policy" className={styles.footerLink}>
                        Refund Policy
                    </Link>
                    <Link to="/routes/ContactUs" className={styles.footerLink}>
                        Contact Us
                    </Link>
                </div>
                <div className={styles.copyright}>Copyright © 2025 Oak Hill Farm</div>
            </div>
        </div>
    );
}