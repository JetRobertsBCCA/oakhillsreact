
import { Link } from '@remix-run/react';
import styles from './aboutus.module.scss';

import classNames from 'classnames';

export default function Aboutus() {
    return (
        <div className={styles.pageContainer}>

            <div className={styles.headerBar}>
                <div className={styles.headerContent}>
                    <div className={styles.navRight}>
                        <Link to="/" className={styles.navLinkRight}>Home</Link>
                        <Link to="/horses" className={styles.navLinkRight}>Our Horses</Link>
                        <Link to="/events" className={styles.navLinkRight}>Events</Link>
                        <Link to="/contactus" className={styles.navLinkRight}>Contact Us</Link>
                    </div>
                </div>
            </div>

            <div className={styles.contactSection}>
                <div className={styles.contentWrapper}>
                    <h1 className={styles.mainHeading}>Oak Hill Farms</h1>
                    <h2 className={styles.subHeading}>About Us</h2>
                    <p className={styles.bodyText}>
                        Oak Hill Stables is in a setting of rolling hills, low land and beautiful forest. We offer horse
                        boarding, riding lessons, horse training and birthday parties in a family-friendly environment. Our mission is
                        to create a safe, clean, and fun place for horse enthusiast of all ages to enjoy riding and learn new skills, in
                        a warm, welcoming community. Our passion for horses and dedication to their care shines through every aspect of
                        our work, from our well-maintained facilities to the supportive community we've built.
                    </p>
                </div>
            </div>

            <div className={styles.contactSection}>
                <div className={styles.contentWrapper}>
                    <h4>Oak Hill Stable</h4>
                    <h2 className={styles.subHeading}>Our Staff</h2>
                    <p className={styles.bodyText}>
                        At Oak Hill Stable, our team is passionate about horses, committed
                        to providing excellent care, and dedicated to creating a welcoming environment for both horses and riders.
                        Each member of our staff brings a unique set of skills, experiences, and love for equestrian life. We’re
                        proud to introduce you to the hardworking individuals who make our ranch a special place.
                    </p>

                    <div className={styles.imageWrapper}>
                         <img
                         
                           alt="" 
                           className={styles.staffImage}
                         />
                    </div>

                    <div className={styles.contactInfo}>
                        <p><strong>Linda Robinson – Ranch Manager &amp; Head Trainer</strong><br />
                        With over 15 years of experience in the equestrian world, Jane is the backbone of our ranch. A certified equestrian trainer, she oversees all aspects of the ranch's operations, from horse care to training programs. Jane’s gentle yet firm approach with the horses has earned her the trust of both the animals and the riders. When she’s not working with our horses, Jane enjoys trail riding and competing in dressage.</p>
                        <p><strong>Tom Harris – Stable Manager</strong><br />
                        Tom has a true love for horses and has been managing stables for the past decade. He ensures that our horses are well cared for, from grooming to feeding, and maintains the ranch’s facilities. Tom has an eye for detail and ensures that every stall is clean and every horse is happy. His background in veterinary care makes him a great resource for our team when it comes to horse health.</p>
                        <p><strong>Emily Williams – Rider &amp; Training Assistant</strong><br />
                        Emily joined us five years ago and quickly became a valued team member. She assists with training both horses and riders, ensuring that every lesson is effective and enjoyable. Emily’s knowledge of various riding styles, from Western to English, makes her a versatile instructor. Her enthusiasm for teaching and her ability to connect with both horses and students makes her a favorite among riders.</p>
                    </div>
                </div>
            </div>

            <div className={styles.contactSection}>
                 <div className={styles.contentWrapper}>
                    <h4>Oak Hill Stable</h4>
                    <h2 className={styles.subHeading}>Our Facility</h2>
                    <p className={styles.bodyText}>
                        Our ranch boasts exceptional amenities designed to support both
                        horses and riders. We offer five spacious stalls, a well-equipped tack room, and a round pen for training
                        and groundwork. Our expansive facility includes seven lush paddocks, an 80 x 160 arena for riding and
                        events, and access to scenic horse trails. Additionally, we lease an adjacent property to provide even more
                        space for our equestrian activities.
                    </p>
                 </div>
            </div>

            <div className={styles.locationSection}>
                <div className={styles.locationContent}>
                    <h2 className={styles.subHeading}>How to find us!</h2>
                    <p className={styles.bodyText}>
                        We are located in Water Valley MS
                    </p>

                    <div className={styles.mapContainer}>
                    <iframe
                          
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.059960857979!2d-89.5879805256308!3d34.170384611485176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8880697720080de9%3A0x5adbc59099274ad9!2sOak%20Hill%20Farm%20Water%20Valley%20Mississippi!5e0!3m2!1sen!2sus!4v1743825641509!5m2!1sen!2sus" 
                            width="100%" 
                            height="450"
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" 
                            ></iframe>
                    </div>

                </div>
            </div>

            <div className={styles.footerSection}>
                <div className={styles.footerLinks}>
                    <Link to="/pricing" className={styles.footerLink}>Pricing</Link>
                    <Link to="/terms" className={styles.footerLink}>Terms & Conditions</Link>
                    <Link to="/refund-policy" className={styles.footerLink}>Refund Policy</Link>
                    <Link to="/contact-us" className={styles.footerLink}>Contact Us</Link>
                </div>
                <div className={styles.copyright}>Copyright © 2025 Oak Hill Farm</div>
            </div>

        </div>
    );
}