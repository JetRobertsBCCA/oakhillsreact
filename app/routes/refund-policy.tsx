import styles from '../styles/contact-us.module.scss';
import Footer from '../components/Footer/Footer';

export default function RefundPolicy() {
  return (
    <div>
      <div className={styles.pageWrapper}>
        <div className={styles.heroSection}>
          <h1>Refund Policy</h1>
          <p>Understanding our payment and refund terms for Oak Hill Stable services</p>
        </div>

        <div className={styles.contactSection}>
          <div className={styles.contactInfo}>
            <div className={styles.contactInfoCard}>
              <h2 className={styles.sectionHeading}>Deposits</h2>
              <div className={styles.infoRow}>
                All deposits are non-refundable. This includes but is not limited to:
                <ul>
                  <li>Birthday party deposits ($100)</li>
                  <li>Event registration deposits</li>
                  <li>Training session deposits</li>
                </ul>
              </div>

              <h2 className={styles.sectionHeading}>Full Payments</h2>
              <div className={styles.infoRow}>
                For services under $300, full payment is required at the time of booking. For services over $300 
                (such as 6-week homeschool programs), a non-refundable deposit is required with the remaining balance 
                due according to the payment schedule provided at booking.
              </div>

              <h2 className={styles.sectionHeading}>Cancellations</h2>
              <div className={styles.infoRow}>
                Cancellations must be made at least 24 hours in advance of your scheduled service. Late cancellations 
                may incur additional fees.
              </div>

              <h2 className={styles.sectionHeading}>Weather-Related Cancellations</h2>
              <div className={styles.infoRow}>
                In cases of inclement weather (including lightning and high winds), Oak Hill Farm reserves the right 
                to reschedule services for safety reasons. In these cases, your payment will be applied to the 
                rescheduled service.
              </div>

              <h2 className={styles.sectionHeading}>Payment Methods</h2>
              <div className={styles.infoRow}>
                We accept the following payment methods:
                <ul>
                  <li>Venmo</li>
                  <li>CashApp</li>
                  <li>Square (for in-person payments)</li>
                  <li>PayPal</li>
                </ul>
              </div>

              <div className={styles.infoRow}>
                For any questions about our refund policy, please contact us at{' '}
                <a href="mailto:robinson.llinda@yahoo.com">robinson.llinda@yahoo.com</a> or call us 
                at (662) 202-8899.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 