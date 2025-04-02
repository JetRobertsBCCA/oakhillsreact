import React from 'react';
import { Link } from '@remix-run/react';
import styles from './home.module.scss'; // it should link to is own css thing on the folders this is tempoary
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
                        <Link to="/events" className={styles.navLinkRight}>
                            Events
                        </Link>
                        <Link to="/routes/ContactUs" className={styles.navLinkRight}>
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>

           
    

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
