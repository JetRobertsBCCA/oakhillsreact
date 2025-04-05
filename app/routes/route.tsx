import React from 'react';
import { Link } from '@remix-run/react';
import styles from './home.module.scss';
import classes from './route.module.scss';
import Pxl20250308162929633Copy1Jpg from '../../../src/assets/pxl_20250308_162929633_copy1.jpg';
import OakfarmlogoTesterPng from '../../../src/assets/oakfarmlogo_tester.png';
import classNames from 'classnames'; // it should link to is own css thing on the folders this is tempoary
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
                <h1 className={classNames('largeFont', classes.header2)}></h1>
                <h1 className={classNames('largeFont', classes.header3)}>
                    Oak Hill Farms
                    <span></span>
                    <video
                        controls={true}
                        src="https://video.wixstatic.com/video/604302_5625733f4f4642dfb33652d680e51846/480p/mp4/file.mp4"
                        className={classes.video1}
                    />
                </h1>
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
                        <button className={classes.heroImageExploreButton}>
                            View our horses here!
                        </button>
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
                                <p className={classes.pricingHeaderDescription}></p>
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
                            <button className={classes.pricingButton}>
                                View All Lessons Here!
                            </button>
                        </div>
                        <div className={classes.pricingCard}>
                            <div className={classes.pricingPlanOverview}>
                                <h2 className={classes.pricingHeaderTitle}>Upcoming Events</h2>
                                <h1 className={classes.pricingHeaderCost}>$200</h1>
                                <p className={classes.pricingHeaderDescription}></p>
                            </div>
                            <ul className={classes.pricingPlanFeatures}>
                                <li className={classes.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={classes.pricingImage}
                                    />
                                    <p>Trail rides          </p>
                                </li>
                                <li className={classes.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={classes.pricingImage}
                                    />
                                    <p>Birthday Parties</p>
                                </li>
                                <li className={classes.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={classes.pricingImage}
                                    />
                                    <p>Haunted Trail    </p>
                                </li>
                                <li className={classes.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={classes.pricingImage}
                                    />
                                    <p>More Events !   </p>
                                </li>
                            </ul>
                            <button className={classes.pricingButton}>
                                View Upcoming Events! 
                            </button>
                        </div>
                        <div className={classes.pricingCard}>
                            <div className={classes.pricingPlanOverview}>
                                <h2 className={classes.pricingHeaderTitle}>Home Schooling</h2>
                                <h1 className={classes.pricingHeaderCost}>$150</h1>
                                <p className={classes.pricingHeaderDescription}></p>
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
                            <button className={classes.pricingButton}>Sign up Here! </button>
                        </div>
                    </div>
                </div>
                <div className={classes.about}>
                    <h5 className={classes.aboutSubtitleText}>
                        <img src={OakfarmlogoTesterPng} alt="" />
                    </h5>
                    <div className={classes.aboutContentText}>
                        We are Located in Water Valley MS!
                    </div>
                    <div className={classes.aboutButtonCell}>
                        <button className={classes.aboutButton}>Contact Us!</button>
                    </div>
                </div>
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
