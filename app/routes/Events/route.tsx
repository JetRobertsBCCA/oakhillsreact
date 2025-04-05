import React from 'react';
import { Link } from '@remix-run/react';
import styles from './aboutUs.module.scss';
import Pxl20250308162929633Copy1Jpg from '../../../src/assets/pxl_20250308_162929633_copy1.jpg';
import styles0 from './events.module.scss';
import classNames from 'classnames';
import AsdfasdPng from '../../../src/assets/asdfasd.png';
import OakfarmlogoTesterPng from '../../../src/assets/oakfarmlogo_tester.png';
import Pxl20250308161751449Jpg from '../../../src/assets/pxl_20250308_161751449.jpg';

const events = [
    { id: 1, name: "Spring Horse Show", date: "April 15, 2025", description: "A showcase of our finest horses and riders." },
    { id: 2, name: "Trail Riding Weekend", date: "May 20-21, 2025", description: "Join us for a scenic trail riding experience." },
    { id: 3, name: "Summer Riding Camp", date: "June 10-15, 2025", description: "A week-long camp for riders of all levels." },
    { id: 4, name: "Barnyard Family Day", date: "July 4, 2025", description: "Fun activities for the whole family at the ranch." },
    { id: 5, name: "Fall Harvest Festival", date: "October 10, 2025", description: "Celebrate the season with horse rides and festivities." }
];

export default function Aboutus() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.headerBar}>
                <div className={styles.headerContent}>
                    <div className={styles.navRight}>
                        <Link to="/routes/AboutUs" className={styles.navLinkRight}></Link>
                        <Link to="/horses" className={styles.navLinkRight}>Home</Link>
                        <Link to="/" className={styles.navLinkRight}>Our Horses</Link>
                        <Link to="/events" className={styles.navLinkRight}>Events</Link>
                        <Link to="/routes/ContactUs" className={styles.navLinkRight}>Contact Us</Link>
                    </div>
                </div>
            </div>

            <div className={styles.contactSection}></div>

            <div className={styles.locationSection}></div>

            <div className={styles.eventsSection}>
                <h2>Upcoming Events</h2>
                <ul>
                    {events.map(event => (
                        <li key={event.id}>
                            <h3>{event.name}</h3>
                            <p><strong>Date:</strong> {event.date}</p>
                            <p>{event.description}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.footerSection}>
                <div className={styles.footerLinks}>
                    <Link to="/pricing" className={styles.footerLink}></Link>
                    <Link to="/terms" className={styles.footerLink}>Terms & Conditions</Link>
                    <Link to="/refund-policy" className={styles.footerLink}>Refund Policy</Link>
                    <Link to="/routes/ContactUs" className={styles.footerLink}></Link>
                </div>
                <div className={styles.copyright}>Copyright © 2025 Oak Hill Farm</div>
            </div>
        </div>
    );
}
