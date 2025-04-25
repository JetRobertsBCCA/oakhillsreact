import { Link } from '@remix-run/react';
import navbar from '../navbarglobal.module.scss';
import classes from './route.module.scss';
import OakfarmlogoTesterPng from '../../../src/assets/oakfarmlogo_tester.png';
import classNames from 'classnames';
import Pxl20250308162929633Copy1Jpg from '../../../src/assets/pxl_20250308_162929633_copy1.jpg';

export default function Home() {
    return (
        <div className={navbar.pageContainer}>
            <div className={navbar.headerBar}>
                <div className={navbar.headerContent}>
                    <div className={navbar.navRight}>
                        <Link to="aboutus" className={navbar.navLinkRight}>
                            About Us
                        </Link>
                        <Link to="FAQ" className={navbar.navLinkRight}>
                            FAQ
                        </Link>
                        <Link to="events" className={navbar.navLinkRight}>
                            Events
                        </Link>
                        <Link to="contactus" className={navbar.navLinkRight}>
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>

            <div className={navbar.footerSection}>
                <h1 className={classNames('largeFont', classes.header2)}></h1>
                <h1 className={classNames('largeFont', classes.header3)}>
                    <span></span>
                    <div className={navbar.videoWrapper}>
                        <video
                            className={classNames(navbar.videoBackground, classes.video1)}
                            autoPlay
                            muted
                            loop
                            playsInline
                            src="https://video.wixstatic.com/video/604302_170103629c8347c8891c63ad35f4486f/480p/mp4/file.mp4"
                        />
                    </div>
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
                            and a love for horses is shared. Whether you're looking for a
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
                        {/* Card 1: Horse Boarding Lessons */}
                        <div className={classes.pricingCard}>
                            <div className={classes.pricingPlanOverview}>
                                <h2 className={classes.pricingHeaderTitle}>
                                    Horse Boarding Lessons
                                </h2>
                                <h1 className={classes.pricingHeaderCost}>$300+</h1>
                                <p className={classes.pricingHeaderDescription}></p>
                            </div>
                            <ul className={classes.pricingPlanFeatures}>
                                <li className={classes.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={classes.pricingImage}
                                    />
                                    <p>Full payments              </p>
                                </li>
                                <li className={classes.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={classes.pricingImage}
                                    />
                                    <p>Deposit non refundable</p>
                                </li>
                                <li className={classes.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={classes.pricingImage}
                                    />
                                    <p>Waiver sign on site:       </p>
                                </li>
                                <li className={classes.pricingFeature}>
                                    <p></p>
                                </li>
                            </ul>
                            <Link to="lessons-info" className={classes.pricingButton}>
                                View All Schooling Here!
                            </Link>
                        </div>
                        {/* Card 2: Upcoming Events */}
                        <div className={classes.pricingCard}>
                            <div className={classes.pricingPlanOverview}>
                                <h2 className={classes.pricingHeaderTitle}>Upcoming Events</h2>
                                <h1 className={classes.pricingHeaderCost}>$200+</h1>
                                <p className={classes.pricingHeaderDescription}></p>
                            </div>
                            <ul className={classes.pricingPlanFeatures}>
                                <li className={classes.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={classes.pricingImage}
                                    />
                                    <p>Trail rides         </p>
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
                                    <p>Haunted Trail     </p>
                                </li>
                                <li className={classes.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={classes.pricingImage}
                                    />
                                    <p>More Events !   </p>
                                </li>
                            </ul>
                            <button className={classes.pricingButton}>
                                View Upcoming Events!
                            </button>
                        </div>
                        {/* Card 3: Private Riding Lessons */}
                        <div className={classes.pricingCard}>
                            <div className={classes.pricingPlanOverview}>
                                <h2 className={classes.pricingHeaderTitle}>Private Riding Lessons</h2>
                                <h1 className={classes.pricingHeaderCost}>$50/hour</h1>
                                <p className={classes.pricingHeaderDescription}></p>
                            </div>
                            <ul className={classes.pricingPlanFeatures}>
                                <li className={classes.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={classes.pricingImage}
                                    />
                                    <p>Full Payments              </p>
                                </li>
                                <li className={classes.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={classes.pricingImage}
                                    />
                                    <p>Deposit non refundable</p>
                                </li>
                                <li className={classes.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={classes.pricingImage}
                                    />
                                    <p>Waiver sign at site!       </p>
                                </li>
                                <li className={classes.pricingFeature}>
                                    <p></p>
                                </li>
                            </ul>
                            <Link to="lessons-info" className={classes.pricingButton}>
                                SIGN UP HERE!
                            </Link>
                        </div>
                    </div>
                </div>
            <div className={classes.about}>
                 <img src={OakfarmlogoTesterPng} alt="Oak Hill Farm Logo" className={classes.aboutLogo} />

                <div className={classes.aboutButtonCell}>
                    <button className={classes.aboutButton}>Contact Us!</button>
                </div>

                <div className={classes.mapWrapper}>
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.059960857979!2d-89.5879805256308!3d34.170384611485176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8880697720080de9%3A0x5adbc59099274ad9!2sOak%20Hill%20Farm%20Water%20Valley%20Mississippi!5e0!3m2!1sen!2sus!4v1743825641509!5m2!1sen!2sus"
                    className={classes.map}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <div className={navbar.mapContainer}>
                <div className={navbar.footerLinks}>
                    <Link to="/pricing" className={navbar.footerLink}></Link>
                    <Link to="/terms" className={navbar.footerLink}>
                        Terms & Conditions
                    </Link>
                    <Link to="/refund-policy" className={navbar.footerLink}>
                        Refund Policy
                    </Link>
                    <Link to="/routes/ContactUs" className={navbar.footerLink}></Link>
                </div>
                <div className={navbar.copyright}>Copyright © 2025 Oak Hill Farm</div>
            </div>
        </div>
    </div>
    );
}