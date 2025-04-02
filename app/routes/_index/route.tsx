import React from 'react';
import { Link } from '@remix-run/react';
import styles from './home.module.scss';
import classes from './route.module.scss';
import Pxl20250308162929633Copy1Jpg from '../../../src/assets/pxl_20250308_162929633_copy1.jpg'; // it should link to is own css thing on the folders this is tempoary
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
                <h1 className="largeFont">Oak Hill Farms</h1>
                <h1>Boarding Lessons, Trail rides, Training, Birthday Parties</h1>
                <button>Sign up for events here!</button>
                <div className={classes.heroImage}>
                    <img
                        src={Pxl20250308162929633Copy1Jpg}
                        alt=""
                        className={classes.heroImageImg}
                    />
                    <div className={classes.heroImageContentBox}>
                        <h1 className={classes.heroImageTitle}>Oak Hill Stable</h1>
                        <p className={classes.heroImageDescription}>
                            Welcome to Oak Hill Farms, where the spirit of the countryside meets the
                            beauty of nature. Nestled in the heart of rolling hills, our ranch
                            offers a serene haven for horse lovers and nature enthusiasts alike.
                            With acres of lush pastures, state-of-the-art facilities, and a team
                            dedicated to the care and training of our magnificent horses, Oak Hill
                            Farms is more than just a ranch—it’s a place where memories are made,
                            and a love for horses is shared. Whether you&apos;re looking for a
                            peaceful retreat, a place to learn the art of horsemanship, or a new
                            equestrian companion, we invite you to experience the beauty and
                            tranquility of Oak Hill Farms.
                        </p>
                        <button className={classes.heroImageExploreButton}>Explore</button>
                    </div>
                </div>
                <div className={classes.pricing}>
                    <h1 className={classes.pricingTitle}>Our Training Programs</h1>
                    <div className={classes.pricingCards}>
                        <div className={classes.pricingCard}>
                            <div className={classes.pricingPlanOverview}>
                                <h2 className={classes.pricingHeaderTitle}>
                                    Horse Boarding Lessons
                                </h2>
                                <h1 className={classes.pricingHeaderCost}>$150</h1>
                                <p className={classes.pricingHeaderDescription}>
                                    Valid for 3 months
                                </p>
                            </div>
                            <ul className={classes.pricingPlanFeatures}>
                                <li className={classes.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={classes.pricingImage}
                                    />
                                    <p>Describe the above</p>
                                </li>
                                <li className={classes.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={classes.pricingImage}
                                    />
                                    <p>Describe the above</p>
                                </li>
                                <li className={classes.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={classes.pricingImage}
                                    />
                                    <p>Describe the above</p>
                                </li>
                                <li className={classes.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={classes.pricingImage}
                                    />
                                    <p>Describe the above</p>
                                </li>
                            </ul>
                            <button className={classes.pricingButton}>Buy Now</button>
                        </div>
                        <div className={classes.pricingCard}>
                            <div className={classes.pricingPlanOverview}>
                                <h2 className={classes.pricingHeaderTitle}>Upcoming Events</h2>
                                <h1 className={classes.pricingHeaderCost}>$200</h1>
                                <p className={classes.pricingHeaderDescription}>
                                    Valid for 12 months
                                </p>
                            </div>
                            <ul className={classes.pricingPlanFeatures}>
                                <li className={classes.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={classes.pricingImage}
                                    />
                                    <p>Describe the above</p>
                                </li>
                                <li className={classes.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={classes.pricingImage}
                                    />
                                    <p>Describe the above</p>
                                </li>
                                <li className={classes.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={classes.pricingImage}
                                    />
                                    <p>Describe the above</p>
                                </li>
                                <li className={classes.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={classes.pricingImage}
                                    />
                                    <p>Describe the above</p>
                                </li>
                            </ul>
                            <button className={classes.pricingButton}>Buy Now</button>
                        </div>
                        <div className={classes.pricingCard}>
                            <div className={classes.pricingPlanOverview}>
                                <h2 className={classes.pricingHeaderTitle}>Home Schooling</h2>
                                <h1 className={classes.pricingHeaderCost}>$150</h1>
                                <p className={classes.pricingHeaderDescription}>
                                    Valid for 3 months
                                </p>
                            </div>
                            <ul className={classes.pricingPlanFeatures}>
                                <li className={classes.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={classes.pricingImage}
                                    />
                                    <p>Describe the above</p>
                                </li>
                                <li className={classes.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={classes.pricingImage}
                                    />
                                    <p>Describe the above</p>
                                </li>
                                <li className={classes.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={classes.pricingImage}
                                    />
                                    <p>Describe the above</p>
                                </li>
                                <li className={classes.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={classes.pricingImage}
                                    />
                                    <p>Describe the above</p>
                                </li>
                            </ul>
                            <button className={classes.pricingButton}>Buy Now</button>
                        </div>
                    </div>
                </div>
                <button></button>
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
