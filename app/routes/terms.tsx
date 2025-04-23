import { Link } from '@remix-run/react';
import styles from './terms.module.scss';


export default function Terms() {
    return (
        <div className={styles.pageContainer}>
        <div className={styles.topStickyCover}></div>
            <div className={styles.headerBar}>
                <div className={styles.headerContent}>
                    <div className={styles.navRight}>
                        <Link to="/aboutus" className={styles.navLinkRight}>
                            About Us
                        </Link>
                        <Link to="/horses" className={styles.navLinkRight}>
                            Our Horses
                        </Link>
                        <Link to="/events" className={styles.navLinkRight}>
                            Events
                        </Link>
                        <Link to="/" className={styles.navLinkRight}>Home</Link>
                        <Link to="/contactus" className={styles.navLinkRight}>Contact Us</Link>
                    </div>
                </div>
            </div>

            <div className={styles.contactSection}>
                <div className={styles.contentWrapper}>
                    <h1 className={styles.mainHeading}>Terms and Conditions</h1>
                    <p className={styles.lastUpdated}>
                      Last updated: March 22, 2025
                    </p>
                    <h2 className={styles.subHeading}>1. AGREEMENT TO OUR LEGAL TERMS</h2>
                    <p className={styles.bodyText}>
                      We are Oak Hill Farm ("Company," "we," "us," "our"), a company registered in Mississippi,
                      United States at 7030 Delay Rd, Water Valley, MS 38965. We operate the website
                      http://www.oakhillfarm.com (the "Site"), as well as any other related products and services that
                      refer or link to these legal terms (the "Legal Terms") (collectively, the "Services"). The Services
                      primarily include horse training sessions, scheduling and payment services, horseback riding,
                      and training services.
                      You can contact us by email at robinson.llinda@yahoo.com or by mail to 7030 Delay Rd, Water
                      Valley, MS 38965, United States.
                    </p>
                    <h2 className={styles.subHeading}>2. USE OF SERVICES</h2>
                    <p className={styles.bodyText}>
                      These Legal Terms constitute a legally binding agreement made between you, whether
                      personally or on behalf of an entity ("you"), and Oak Hill Farm, concerning your access to and
                      use of the Services. You agree that by accessing the Services, including booking horse training
                      sessions and making payments, you have read, understood, and agreed to be bound by all of
                      these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN
                      YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST
                      DISCONTINUE USE IMMEDIATELY.
                    </p>
                    <h2 className={styles.subHeading}>3. BOOKING AND PAYMENT TERMS (SERVICE)</h2>
                    <p className={styles.bodyText}>
                      By using the Services to schedule a training session or other service, you agree to provide accurate and current
                      information during the booking process. You are responsible for ensuring timely payments via
                      the payment methods available on the Site. Payments must be made in full at the time of
                      booking unless otherwise stated. Any cancellation or rescheduling requests must be made at
                      least 24 hours in advance. Late cancellations may incur fees, and refunds for cancellations will
                      be issued according to our separate Refund Policy.
                    </p>
                    <h2 className={styles.subHeading}>4. USER OBLIGATIONS (SERVICE)</h2>
                    <p className={styles.bodyText}>
                      By booking a training session or participating in activities, you agree to arrive on time, ensure that your horse meets
                      our health and safety requirements, and arrive dressed in proper attire suitable for equine activities, including required safety gear as specified by Oak Hill Farm.
                      Oak Hill Farm reserves the right to cancel or reschedule
                      any session if these requirements are not met.
                    </p>
                    <h2 className={styles.subHeading}>5. LIABILITY DISCLAIMER & WAIVER</h2>
                    <p className={styles.bodyText}>
                      Equine activities, including but not limited to riding and training, carry inherent risks. You acknowledge and agree to assume full responsibility for any injury, loss, or damage to person or property sustained while participating in Services or while on Oak Hill Farm premises. Oak Hill Farm, its owners, employees, and agents will not be held liable for any
                      accidents, injuries, or damages that occur during the provision of the Services or related activities, except in cases
                      of gross negligence or willful misconduct by Oak Hill Farm.
                    </p>
                    <p className={styles.bodyText}>
                      Your participation in certain activities, particularly riding and training services, is **conditional upon reading, understanding, and signing a separate Liability Waiver and Release Form** provided by Oak Hill Farm. This form provides a more detailed explanation of the risks involved and confirms your voluntary assumption of those risks and release of liability. Failure to sign this required form will prohibit participation in the relevant activities. These Terms and Conditions incorporate the requirement of signing said waiver.
                    </p>
                    <h2 className={styles.subHeading}>6. MODIFICATIONS TO LEGAL TERMS</h2>
                    <p className={styles.bodyText}>
                      We reserve the right, in our sole discretion, to make changes or modifications to these Legal
                      Terms at any time and for any reason. We will alert you about any changes by updating the
                      "Last updated" date of these Legal Terms, and you waive any right to receive specific notice of
                      each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates.
                    </p>
                </div>
            </div>

            <div className={styles.footerSection}>
                <div className={styles.footerLinks}>
                    <Link to="/pricing" className={styles.footerLink}>Pricing</Link>
                    <Link to="/terms" className={styles.footerLink}>Terms & Conditions</Link>
                    <Link to="/refund-policy" className={styles.footerLink}>Refund Policy</Link>
                    <Link to="/contactus" className={styles.footerLink}>Contact Us</Link>
                </div>
                <div className={styles.copyright}>Copyright © 2025 Oak Hill Farm</div>
            </div>

        </div>
    );
}