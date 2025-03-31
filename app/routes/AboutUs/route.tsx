import React from 'react';
import { Link } from '@remix-run/react';
import styles from './page.module.scss';
import Pxl20250308162929633Jpg from '../../../src/assets/pxl_20250308_162929633.jpg'; // this is for the hose
import styles0 from './route.module.scss';

export default function Aboutus() {
    return (
        <div id="iau9-2">
            <div id="i6po-2" className={styles['gjs-grid-row']}>
                <div id="itjq-2" className={styles['gjs-grid-column']}>
                    <div id="iyd2-2" className={styles['gjs-grid-row']}>
                        <div id="iffs-2" className={styles['gjs-grid-column']}>
                            <div id="it00l-2" className={styles['gjs-grid-row']}>
                                <div id="irtfd-2" className={styles['gjs-grid-column']}>
                                    <a
                                        id="icfyb-2"
                                        href="#feature-section-2"
                                        className={styles['gjs-link']}
                                    >
                                        About
                                    </a>
                                    <a
                                        href="#feature-section-2"
                                        id="infmy1-2"
                                        className={styles['gjs-link']}
                                    >
                                        Features
                                    </a>
                                </div>
                                <div id="icyzp-2" className={styles['gjs-grid-column']}>
                                    <a
                                        id="i88iz-2"
                                        href="#testimonial-section"
                                        className={styles['gjs-link']}
                                    >
                                        Testimonials
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="id7x-2" className={styles['gjs-grid-column']}>
                            <Link
                                id="i1mew-4-4"
                                to="/routes/AboutUs"
                                className={styles['gjs-button']}
                            >
                                About Us
                            </Link>
                            <Link id="i1mew-4-3-2" to="/horses" className={styles['gjs-button']}>
                                Our Horses
                            </Link>
                            <Link id="i1mew-4-2-2" to="/" className={styles['gjs-button']}>
                                Home
                            </Link>
                            <Link id="i1mew-3-2" to="/events" className={styles['gjs-button']}>
                                Events
                            </Link>
                            <Link
                                id="i1mew-2-2"
                                to="/routes/ContactUs"
                                className={styles['gjs-button']}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div id="irz7b-3" className={styles['gjs-grid-row']}>
                <div id="iycz3-3" className={styles['gjs-grid-column']}>
                    <h1 id="irjua-3" className={styles['gjs-heading']}>
                        Oak Hill Farms
                    </h1>
                    <div id="itndw-3" className={styles['text-main-content']}>
                        About Us
                        <br />
                    </div>
                    <div id="i090ac">
                        Oak Hill Stables is in a setting of rolling hills, low land and beautiful
                        forest. We offer horse boarding, riding lessons, horse training and birthday
                        parties in a family-friendly environment. Our mission is to create a safe,
                        clean, and fun place for horse enthusiast of all ages to enjoy riding and
                        learn new skills, in a warm, welcoming community. Our passion for horses and
                        dedication to their care shines through every aspect of our work, from our
                        well-maintained facilities to the supportive community we&apos;ve built.{' '}
                        <br />
                    </div>
                </div>
            </div>

            <div id="immc62" className={styles['gjs-image-box']}>
                <img src={Pxl20250308162929633Jpg} alt="" className={styles0.img1} />
            </div>

            <div id="feature-section-2" className={styles['gjs-grid-row']}>
                <div id="imymf-2" className={styles['gjs-grid-column']}>
                    <div id="ib541-2" className={styles['gjs-grid-row']}>
                        <div id="iz8m8-2" className={styles['gjs-grid-column']}>
                            <h4
                                id="ij2gh-2"
                                className={`${styles['gjs-heading']} ${styles['gjs-text-blue']}`}
                            >
                                Oak Hill Stable
                            </h4>
                            <h2 id="ism014-2" className={styles['gjs-heading']}>
                                Our Staff
                            </h2>
                            <div id="igrx8-2" className={styles['text-main-content']}>
                                At Oak Hill Stable, our team is passionate about horses, committed
                                to providing excellent care, and dedicated to creating a welcoming
                                environment for both horses and riders. Each member of our staff
                                brings a unique set of skills, experiences, and love for equestrian
                                life. We’re proud to introduce you to the hardworking individuals
                                who make our ranch a special place.
                            </div>
                        </div>
                        <div id="iepks-2" className={styles['gjs-grid-column']}>
                            <img
                                id="itwlwk-2"
                                src="/placeholder.jpg"
                                alt="peding the import thing ill haveto update it soon"
                            />
                            <div id="iub70g">
                                <strong id="ifags8">
                                    Linda Robinson – Ranch Manager &amp; Head Trainer
                                </strong>
                                <br />
                                With over 15 years of experience in the equestrian world, Jane is
                                the backbone of our ranch. A certified equestrian trainer, she
                                oversees all aspects of the ranch&apos;s operations, from horse care
                                to training programs. Jane’s gentle yet firm approach with the
                                horses has earned her the trust of both the animals and the riders.
                                When she’s not working with our horses, Jane enjoys trail riding and
                                competing in dressage.
                                <br />
                                <br />
                                <strong>Tom Harris – Stable Manager</strong>
                                <br />
                                Tom has a true love for horses and has been managing stables for the
                                past decade. He ensures that our horses are well cared for, from
                                grooming to feeding, and maintains the ranch’s facilities. Tom has
                                an eye for detail and ensures that every stall is clean and every
                                horse is happy. His background in veterinary care makes him a great
                                resource for our team when it comes to horse health.
                                <br />
                                <br />
                                <strong>Emily Williams – Rider &amp; Training Assistant</strong>
                                <br />
                                Emily joined us five years ago and quickly became a valued team
                                member. She assists with training both horses and riders, ensuring
                                that every lesson is effective and enjoyable. Emily’s knowledge of
                                various riding styles, from Western to English, makes her a
                                versatile instructor. Her enthusiasm for teaching and her ability to
                                connect with both horses and students makes her a favorite among
                                riders.
                            </div>
                            <img
                                id="ibra9d-2"
                                src="/pxl_20250308_163137314.jpg"
                                alt="Staff Image"
                            />
                        </div>
                    </div>
                    <div id="ib541-2-3" className={styles['gjs-grid-row']}>
                        <div id="iz8m8-2-3" className={styles['gjs-grid-column']}>
                            <h4
                                id="ij2gh-2-3"
                                className={`${styles['gjs-heading']} ${styles['gjs-text-blue']}`}
                            >
                                Oak Hill Stable
                            </h4>
                            <h2 id="ism014-2-3" className={styles['gjs-heading']}>
                                Our Facility
                            </h2>
                            <div id="igrx8-2-3" className={styles['text-main-content']}>
                                Our ranch boasts exceptional amenities designed to support both
                                horses and riders. We offer five spacious stalls, a well-equipped
                                tack room, and a round pen for training and groundwork. Our
                                expansive facility includes seven lush paddocks, an 80 x 160 arena
                                for riding and events, and access to scenic horse trails.
                                Additionally, we lease an adjacent property to provide even more
                                space for our equestrian activities.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="iz29ek-2" className={styles['gjs-grid-row']}>
                <div id="ik2rdi-2" className={styles['gjs-grid-column']}>
                    <h2 id="i83vu9-2" className={styles['gjs-heading']}>
                        How to find us!
                    </h2>
                    <div id="in201n-2" className={styles['text-main-content']}>
                        We are located in Water Valley MS
                        <br />
                    </div>
                    <Link id="iwgwt5-2" to="/waitlist" className={styles['gjs-button']}>
                        Join Waitlist
                    </Link>
                </div>
            </div>

            <div id="iv3be5-2" className={styles['gjs-grid-row']}>
                <div id="ilriti-2" className={styles['gjs-grid-column']}>
                    <div id="im0rle-2" className={styles['gjs-grid-row']}>
                        <div id="i1hx7l-2" className={styles['gjs-grid-column']}>
                            <Link
                                id="ij7g8t-2"
                                title=""
                                to="/pricing"
                                className={styles['gjs-link']}
                            >
                                Pricing
                                <br />
                            </Link>
                            <Link id="ipjdtn-2" to="/terms" className={styles['gjs-link']}>
                                Terms &amp; Conditions
                                <br />
                            </Link>
                            <Link id="ikj01e-2" to="/refund-policy" className={styles['gjs-link']}>
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
        </div>
    );
}
