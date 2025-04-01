import React from 'react';
import { Link } from '@remix-run/react';
import styles from './aboutus.module.scss';
import Pxl20250308162929633Copy1Jpg from '../../../src/assets/pxl_20250308_162929633_copy1.jpg';
import styles0 from './route.module.scss';
import classNames from 'classnames';
import AsdfasdPng from '../../../src/assets/asdfasd.png';
import OakfarmlogoTesterPng from '../../../src/assets/oakfarmlogo_tester.png';
import Pxl20250308161751449Jpg from '../../../src/assets/pxl_20250308_161751449.jpg';

export default function Aboutus() {
    return (
        <div className={styles.root}>
            <nav className={styles.nav1}>
                <Link to="/home" className={styles.a1}>
                    Home
                </Link>
                {' | '}
                <Link to="/projects" className={styles.a2}>
                    Events
                </Link>

                {' | '}
                <Link to="/contact" className={styles.a4}>
                    Contact Us
                </Link>
            </nav>
            <h2 className={styles.title}>About Oak Hill Farms</h2>
            <img src={Pxl20250308162929633Copy1Jpg} className={styles0.img1} />
            <p className={styles.p1}>
                Oak Hill Stables is in a setting of rolling hills, low land and beautiful forest. We
                offer horse boarding, riding lessons, horse training and birthday parties in a
                family-friendly environment. Our mission is to create a safe, clean, and fun place
                for horse enthusiast of all ages to enjoy riding and learn new skills, in a warm,
                welcoming community. Our passion for horses and dedication to their care shines
                through every aspect of our work, from our well-maintained facilities to the
                supportive community we&apos;ve built.
            </p>
            <span className={styles.paragraph}>
                <div className={styles['text-main-content']}>
                    <h4
                        className={classNames(
                            styles['gjs-heading'],
                            styles['gjs-text-blue'],
                            styles0.header2
                        )}
                    ></h4>
                    <h2 className={classNames(styles['gjs-heading'], styles0.header3)}>
                        Our Staff
                    </h2>
                    <p className={styles0.p2}>
                        At Oak Hill Stable, our team is passionate about horses, committed to
                        providing excellent care, and dedicated to creating a welcoming environment
                        for both horses and riders. Each member of our staff brings a unique set of
                        skills, experiences, and love for equestrian life. We’re proud to introduce
                        you to the hardworking individuals who make our ranch a special place.
                    </p>
                </div>
                <div className={classNames(styles['text-main-content'], styles0.div3)}>
                    <strong id="ifags8" className={styles0.strong2}>
                        Linda Robinson – Ranch Manager &amp; Head Trainer
                    </strong>
                    <p className={styles0.p4}>
                        With over 15 years of experience in the equestrian world, Jane is the
                        backbone of our ranch. A certified equestrian trainer, she oversees all
                        aspects of the ranch&apos;s operations, from horse care to training
                        programs. Jane’s gentle yet firm approach with the horses has earned her the
                        trust of both the animals and the riders. When she’s not working with our
                        horses, Jane enjoys trail riding and competing in dressage.
                    </p>
                    <strong id="ifags8">Tom Harris – Stable Manager</strong>
                    <p className={styles0.p5}>
                        Tom has a true love for horses and has been managing stables for the past
                        decade. He ensures that our horses are well cared for, from grooming to
                        feeding, and maintains the ranch’s facilities. Tom has an eye for detail and
                        ensures that every stall is clean and every horse is happy. His background
                        in veterinary care makes him a great resource for our team when it comes to
                        horse health.
                    </p>
                    <strong id="ifags8">Emily Williams – Rider &amp; Training Assistant</strong>
                    <p className={styles0.p6}>
                        Emily joined us five years ago and quickly became a valued team member. She
                        assists with training both horses and riders, ensuring that every lesson is
                        effective and enjoyable. Emily’s knowledge of various riding styles, from
                        Western to English, makes her a versatile instructor. Her enthusiasm for
                        teaching and her ability to connect with both horses and students makes her
                        a favorite among riders.
                    </p>
                </div>
                <div className={styles['text-main-content']}>
                    <h4 className={`${styles['gjs-heading']} ${styles['gjs-text-blue']}`}></h4>
                    <h2 className={classNames(styles['gjs-heading'], styles0.header4)}>
                        Our Facility
                    </h2>
                    <img src={Pxl20250308161751449Jpg} alt="" className={styles0.img5} />
                    <p className={styles0.p3}>
                        Our ranch boasts exceptional amenities designed to support both horses and
                        riders. We offer five spacious stalls, a well-equipped tack room, and a
                        round pen for training and groundwork. Our expansive facility includes seven
                        lush paddocks, an 80 x 160 arena for riding and events, and access to scenic
                        horse trails. Additionally, we lease an adjacent property to provide even
                        more space for our equestrian activities.
                    </p>
                </div>
                <div id="iz29ek-2" className={styles['gjs-grid-row']}>
                    <div
                        id="ik2rdi-2"
                        className={classNames(styles['gjs-grid-column'], styles0.div4)}
                    >
                        <h2 id="i83vu9-2" className={styles['gjs-heading']}>
                            How to find us!
                        </h2>
                        <div id="in201n-2" className={styles['text-main-content']}>
                            We are located in Water Valley MS
                            <img src={AsdfasdPng} alt="" className={styles0.img2} />
                            <br />
                        </div>
                        <Link id="iwgwt5-2" to="/waitlist" className={styles['gjs-button']}></Link>
                    </div>
                </div>
                <br />
            </span>
            <img src={OakfarmlogoTesterPng} alt="" className={styles0.img4} />
            <span className={styles.paragraph}>
                <div id="iv3be5-2" className={styles['gjs-grid-row']}>
                    <div id="ilriti-2" className={styles['gjs-grid-column']}>
                        <div id="im0rle-2" className={styles['gjs-grid-row']}>
                            <div id="i1hx7l-2" className={styles['gjs-grid-column']}>
                                <img
                                    src="https://static.wixstatic.com/media/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg/v1/fill/w_600,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg"
                                    alt=""
                                    className={styles0.img3}
                                />
                                <Link
                                    id="ij7g8t-2"
                                    title=""
                                    to="/pricing"
                                    className={styles['gjs-link']}
                                >
                                    <br />
                                </Link>
                                <Link id="ipjdtn-2" to="/terms" className={styles['gjs-link']}>
                                    Terms &amp; Conditions
                                    <br />
                                </Link>
                                <Link
                                    id="ikj01e-2"
                                    to="/refund-policy"
                                    className={styles['gjs-link']}
                                >
                                    Refund Policy
                                    <br />
                                </Link>
                                <Link
                                    id="i2sl68-2"
                                    to="/routes/ContactUs"
                                    className={styles['gjs-link']}
                                >
                                    Contact Us
                                    <br />
                                </Link>
                            </div>
                        </div>
                        <div id="it6g1v-2" className={styles['gjs-text-blue']}>
                            Copyright © 2025 Oak Hill Farm
                        </div>
                    </div>
                </div>
            </span>
        </div>
    );
}
