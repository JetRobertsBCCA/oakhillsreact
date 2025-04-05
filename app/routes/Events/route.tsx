import React, { useEffect, useState } from 'react';
import { Link } from '@remix-run/react';
import styles from '../AboutUs/aboutus.module.scss';
import Pxl20250308162929633Copy1Jpg from '../../../src/assets/pxl_20250308_162929633_copy1.jpg';
import styles0 from './events.scss';
import classNames from 'classnames';
import AsdfasdPng from '../../../src/assets/asdfasd.png';
import OakfarmlogoTesterPng from '../../../src/assets/oakfarmlogo_tester.png';
import Pxl20250308161751449Jpg from '../../../src/assets/pxl_20250308_161751449.jpg';

export default function Aboutus() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await fetch('/api/events');
            const data = await response.json();
            setEvents(data);
        };

        fetchEvents();
    }, []);

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
                        <Link to="/events" className={styles.navLinkRight}>
                            Events
                        </Link>
                        <Link to="/routes/ContactUs" className={styles.navLinkRight}>
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>

            <div className={styles.locationSection}>
                <h2 className={styles.subHeading}>Upcoming Events</h2>
                <ul>
                    {events.map((event, index) => (
                        <li key={index}>
                            <h3>{event.eventName}</h3>
                            <p>
                                <strong>Date:</strong> {event.eventTime}
                            </p>
                            <p>
                                <strong>Location:</strong> {event.location}
                            </p>
                            <p>
                                <strong>Cost:</strong> ${event.cost}
                            </p>
                            <p>{event.description}</p>
                            <a href={event.paymentLink} target="_blank" rel="noopener noreferrer">
                                Payment Link
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.footerSection}>
                <div className={styles.footerLinks}>
                    <Link to="/pricing" className={styles.footerLink}>
                        Pricing
                    </Link>
                    <Link to="/terms" className={styles.footerLink}>
                        Terms & Conditions
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
