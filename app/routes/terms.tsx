import styles from '../styles/terms.module.scss';
import Footer from '../components/Footer/Footer';

export default function Terms() {
    return (
        <div>
            <div className={styles.pageWrapper}>
                <div className={styles.heroSection}>
                    <h1>Terms and Conditions</h1>
                    <p>Last updated: March 22, 2025</p>
                </div>

                <div className={styles.contactSection}>
                    <div className={styles.contactInfo}>
                        <div className={styles.contactInfoCard}>
                            <h2 className={styles.sectionHeading}>1. AGREEMENT TO OUR LEGAL TERMS</h2>
                            <div className={styles.infoRow}>
                                We are Oak Hill Farm ("Company," "we," "us," "our"), a company registered in
                                Mississippi, United States at 7030 Delay Rd, Water Valley, MS 38965. We
                                operate the website http://www.oakhillfarm.com (the "Site"), as well as any
                                other related products and services that refer or link to these legal terms
                                (the "Legal Terms") (collectively, the "Services"). The Services primarily
                                include horse training sessions, scheduling and payment services, horseback
                                riding, and training services. You can contact us by email at
                                robinson.llinda@yahoo.com or by mail to 7030 Delay Rd, Water Valley, MS
                                38965, United States.
                            </div>

                            <h2 className={styles.sectionHeading}>2. USE OF SERVICES</h2>
                            <div className={styles.infoRow}>
                                These Legal Terms constitute a legally binding agreement made between you,
                                whether personally or on behalf of an entity ("you"), and Oak Hill Farm,
                                concerning your access to and use of the Services. You agree that by
                                accessing the Services, including booking horse training sessions and making
                                payments, you have read, understood, and agreed to be bound by all of these
                                Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE
                                EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE
                                IMMEDIATELY.
                            </div>

                            <h2 className={styles.sectionHeading}>3. BOOKING AND PAYMENT TERMS (SERVICE)</h2>
                            <div className={styles.infoRow}>
                                By using the Services to schedule a training session or other service, you
                                agree to provide accurate and current information during the booking
                                process. You are responsible for ensuring timely payments via the payment
                                methods available on the Site. Payments must be made in full at the time of
                                booking unless otherwise stated. Any cancellation or rescheduling requests
                                must be made at least 24 hours in advance. Late cancellations may incur
                                fees, and refunds for cancellations will be issued according to our separate
                                Refund Policy.
                            </div>

                            <h2 className={styles.sectionHeading}>4. USER OBLIGATIONS (SERVICE)</h2>
                            <div className={styles.infoRow}>
                                By booking a training session or participating in activities, you agree to
                                arrive on time, ensure that your horse meets our health and safety
                                requirements, and arrive dressed in proper attire suitable for equine
                                activities, including required safety gear as specified by Oak Hill Farm.
                                Oak Hill Farm reserves the right to cancel or reschedule any session if
                                these requirements are not met.
                            </div>

                            <h2 className={styles.sectionHeading}>5. LIABILITY DISCLAIMER & WAIVER</h2>
                            <div className={styles.infoRow}>
                                Equine activities, including but not limited to riding and training, carry
                                inherent risks. You acknowledge and agree to assume full responsibility for
                                any injury, loss, or damage to person or property sustained while
                                participating in Services or while on Oak Hill Farm premises. Oak Hill Farm,
                                its owners, employees, and agents will not be held liable for any accidents,
                                injuries, or damages that occur during the provision of the Services or
                                related activities, except in cases of gross negligence or willful
                                misconduct by Oak Hill Farm.
                            </div>
                            <div className={styles.infoRow}>
                                Your participation in certain activities, particularly riding and training
                                services, is <strong>conditional upon reading, understanding, and signing a
                                separate Liability Waiver and Release Form</strong> provided by Oak Hill Farm. This
                                form provides a more detailed explanation of the risks involved and confirms
                                your voluntary assumption of those risks and release of liability. Failure
                                to sign this required form will prohibit participation in the relevant
                                activities. These Terms and Conditions incorporate the requirement of
                                signing said waiver.
                            </div>

                            <h2 className={styles.sectionHeading}>6. MODIFICATIONS TO LEGAL TERMS</h2>
                            <div className={styles.infoRow}>
                                We reserve the right, in our sole discretion, to make changes or
                                modifications to these Legal Terms at any time and for any reason. We will
                                alert you about any changes by updating the "Last updated" date of these
                                Legal Terms, and you waive any right to receive specific notice of each such
                                change. It is your responsibility to periodically review these Legal Terms
                                to stay informed of updates.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
