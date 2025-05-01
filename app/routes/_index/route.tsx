import React from 'react';
import { Link } from '@remix-run/react';
import Footer from '../../components/Footer/Footer';
import styles from './route.module.scss';
import Logo1Png from '../../../src/assets/logo1.png';

export default function Home() {
    return (
        <div className={styles.div2}>
            <div className={styles.div3}>
                <img src={Logo1Png} alt="" />
                <p className={styles.p3}>
                    Welcome to Oak Hill Stables — your escape to the heart of the countryside.
                    Tucked away among rolling hills, our ranch is a place where the beauty of nature
                    and a passion for horses come together. With acres of green pastures, modern
                    facilities, and a dedicated team who treat every horse like family, Oak Hill
                    Stables is more than just a destination — it’s an experience. Whether
                    you&apos;re dreaming of a peaceful retreat, eager to learn the art of
                    horsemanship, or searching for your perfect equine companion, we can&apos;t wait
                    to welcome you to the unforgettable world of Oak Hill Stables.
                </p>
            </div>
            <div className={styles.pageWrapper}>
                <p className={styles.p4}>
                    At Oak Hill Stables, we believe that every rider’s journey is unique. That’s why
                    we offer personalized training programs designed to meet you where you are,
                    whether you’re saddling up for the first time or refining advanced skills. Our
                    experienced team is here to guide you every step of the way, focusing on
                    building confidence, fostering a deep bond between horse and rider, and making
                    every ride a memorable one. Beyond the arena, our ranch offers endless
                    opportunities to connect with nature. Explore scenic trails that wind through
                    rolling hills, enjoy the peaceful rhythm of daily life on the ranch, or simply
                    relax and take in the beauty around you. At Oak Hill Stables, it&apos;s not just
                    about riding — it’s about creating lasting memories, embracing new adventures,
                    and becoming part of a community that shares your love of horses and the great
                    outdoors.
                </p>
                <div className={styles.pricing}>
                    <h1 className={styles.pricingTitle}>Our Training Programs</h1>
                    <div className={styles.pricingCards}>
                        <div className={styles.pricingCard}>
                            <div className={styles.pricingPlanOverview}>
                                <h2 className={styles.pricingHeaderTitle}>Homeschooling Program</h2>
                                <h1 className={styles.pricingHeaderCost}>$300</h1>
                            </div>
                            <ul className={styles.pricingPlanFeatures}>
                                <li className={styles.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={styles.pricingImage}
                                    />
                                    <p>6-week program</p>
                                </li>
                                <li className={styles.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={styles.pricingImage}
                                    />
                                    <p>Full payment required</p>
                                </li>
                                <li className={styles.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={styles.pricingImage}
                                    />
                                    <p>Non-refundable deposit</p>
                                </li>
                                <li className={styles.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png"
                                        alt="V Logo on Dark Background"
                                        className={styles.pricingImage}
                                    />
                                    <p>Sign waiver at site</p>
                                </li>
                            </ul>
                            <Link to="/homeschool-info" className={styles.pricingButton}>
                                LEARN MORE
                            </Link>
                        </div>
                        <div className={styles.pricingCard}>
                            <div className={styles.pricingPlanOverview}>
                                <h2 className={styles.pricingHeaderTitle}>
                                    Private Birthday Parties
                                </h2>
                                <h1 className={styles.pricingHeaderCost}>$100</h1>
                                <p className={styles.pricingHeaderDescription}></p>
                            </div>
                            <ul className={styles.pricingPlanFeatures}>
                                <li className={styles.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={styles.pricingImage}
                                    />
                                    <p>Trail rides </p>
                                </li>
                                <li className={styles.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={styles.pricingImage}
                                    />
                                    <p>Birthday Parties</p>
                                </li>
                                <li className={styles.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={styles.pricingImage}
                                    />
                                    <p>Haunted Trail </p>
                                </li>
                                <li className={styles.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={styles.pricingImage}
                                    />
                                    <p>More Events ! </p>
                                </li>
                            </ul>
                            <Link to="/party-info" className={styles.pricingButton}>
                                BOOK A PARTY
                            </Link>
                        </div>
                        <div className={styles.pricingCard}>
                            <div className={styles.pricingPlanOverview}>
                                <h2 className={styles.pricingHeaderTitle}>
                                    Private Riding Lessons
                                </h2>
                                <h1 className={styles.pricingHeaderCost}>$50/hour</h1>
                                <p className={styles.pricingHeaderDescription}></p>
                            </div>
                            <ul className={styles.pricingPlanFeatures}>
                                <li className={styles.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={styles.pricingImage}
                                    />
                                    <p>Full Payments </p>
                                </li>
                                <li className={styles.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={styles.pricingImage}
                                    />
                                    <p>Deposit non refundable</p>
                                </li>
                                <li className={styles.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={styles.pricingImage}
                                    />
                                    <p>Waiver sign at site! </p>
                                </li>
                                <li className={styles.pricingFeature}>
                                    <p></p>
                                </li>
                            </ul>
                            <Link to="lessons-info" className={styles.pricingButton}>
                                SIGN UP HERE!
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
