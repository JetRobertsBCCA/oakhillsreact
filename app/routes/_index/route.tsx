import { Link } from '@remix-run/react';
import Footer from '../../components/Footer/Footer';
import styles from './route.module.scss';
import Shotcut000008100Png from '../../../src/assets/shotcut_00_00_08_100.png';

export default function Home() {
    return (
        <div>
            <div className={styles.pageWrapper}>
                <div className={styles.heroImage}>
                    <img src={Shotcut000008100Png} alt="" className={styles.heroImageImg} />
                    <div className={styles.heroImageContentBox}>
                        <h1 className={styles.heroImageTitle}>Oak Hill Stable</h1>
                        <p className={styles.heroImageDescription}>
                            Welcome to Oak Hill Stables, where the spirit of the countryside meets
                            the beauty of nature. Nestled in the heart of rolling hills, our ranch
                            offers a serene haven for horse lovers and nature enthusiasts alike.
                            With acres of lush pastures, state-of-the-art facilities, and a team
                            dedicated to the care and training of our magnificent horses, Oak Hill
                            Stables is more than just a ranch—it's a place where memories are made,
                            and a love for horses is shared. Whether you're looking for a peaceful
                            retreat, a place to learn the art of horsemanship, or a new equestrian
                            companion, we invite you to experience the beauty and tranquility of Oak
                            Hill Stables.
                        </p>
                    </div>
                </div>
                <div className={styles.pricing}>
                    <h1 className={styles.pricingTitle}>Our Training Programs</h1>
                    <div className={styles.pricingCards}>
                        <div className={styles.pricingCard}>
                            <div className={styles.pricingPlanOverview}>
                                <h2 className={styles.pricingHeaderTitle}>
                                    Horse Boarding Lessons
                                </h2>
                                <h1 className={styles.pricingHeaderCost}>$300+</h1>
                                <p className={styles.pricingHeaderDescription}></p>
                            </div>
                            <ul className={styles.pricingPlanFeatures}>
                                <li className={styles.pricingFeature}>
                                    <img
                                        src="https://static.wixstatic.com/media/13128652dab8451db4ce3e8b1b00d5b0.png/v1/fit/w_640,h_640/V Logo.png"
                                        alt="V Logo on Dark Background"
                                        className={styles.pricingImage}
                                    />
                                    <p>Full payments </p>
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
                                    <p>Waiver sign on site: </p>
                                </li>
                                <li className={styles.pricingFeature}>
                                    <p></p>
                                </li>
                            </ul>
                            <Link to="lessons-info" className={styles.pricingButton}>
                                View All Schooling Here!
                            </Link>
                        </div>
                        <div className={styles.pricingCard}>
                            <div className={styles.pricingPlanOverview}>
                                <h2 className={styles.pricingHeaderTitle}>Upcoming Events</h2>
                                <h1 className={styles.pricingHeaderCost}>$200+</h1>
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
                            <button className={styles.pricingButton}>View Upcoming Events!</button>
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
