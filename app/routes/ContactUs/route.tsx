import React from 'react';
import { Link } from '@remix-run/react';
import styles from './contactUs.module.scss';

export default function Aboutus() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.headerBar}>
                <div className={styles.headerContent}>
                    <div className={styles.navRight}>
                        <Link to="/routes/AboutUs" className={styles.navLinkRight}></Link>
                        <Link to="/horses" className={styles.navLinkRight}>
                            Home
                        </Link>
                        <Link to="/" className={styles.navLinkRight}>
                            Our Horses
                        </Link>
                        <Link to="/events" className={styles.navLinkRight}>
                            Events
                        </Link>
                        <Link to="/routes/ContactUs" className={styles.navLinkRight}>
                            About us
                        </Link>
                    </div>
                </div>
            </div>

            <div className={styles.contactSection}></div>

            <div className={styles.locationSection}></div>
            <div className={styles.footerSection}>
                <div className={styles.footerLinks}>
                    <Link to="/pricing" className={styles.footerLink}></Link>
                    <Link to="/terms" className={styles.footerLink}>
                        Terms &amp; Conditions
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
