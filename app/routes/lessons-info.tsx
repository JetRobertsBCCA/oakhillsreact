import { Link } from '@remix-run/react';
import { useState } from 'react';
import logoImage from '../../public/images/oakhillshdlogo.png';
import PayPalButton from '../components/PayPalButton';
import styles from './lessons-info.module.scss';

export default function PrivateLessonsInfoPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [liabilityAgreed, setLiabilityAgreed] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');

  const isFormValid = liabilityAgreed && !!firstName && !!lastName && !!email && !!phone;

  const handlePaymentSuccess = (details: any) => {
    console.log('Payment successful:', details);
    setPaymentStatus('Payment Successful! Thank you for booking your lesson.');
  };

  const handlePaymentError = (error: any) => {
    console.error('Payment error:', error);
    setPaymentStatus('There was an error processing your payment. Please try again.');
  };

  return (
    <div className={styles.lessonsPage}>
      <div className={styles.heroSection}>
        <h1>Private Riding Lessons</h1>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.contentBlock}>
          <h2>Price</h2>
          <p><strong>$50 per hour.</strong></p>

          <h2>Lesson Details & Duration</h2>
          <p>Our riding lessons are one hour long. This hour includes the time it takes to get the horse prepared for the lesson (grooming, tacking up) and post-ride care (untacking, cooling off, etc.). Beginners are taught these preparation and care steps.</p>
          <p>As a student progresses to where they need less supervision preparing each horse for riding, then the actual riding time increases.</p>
          <p>Students are responsible for cleaning and replacing all tack used for their lesson—grooming box, helmet, saddle pad, bridle, and any other items used.</p>

          <h2>Timing & Punctuality</h2>
          <p>Your lesson begins at your scheduled time, not when you actually arrive at the barn. Most of our students arrive early, get the horse ready for the lesson, and are at the round pen at the appointed time.</p>
          <p>If you are late for your lesson, you still are required to get the horse ready and then join your lesson in progress. Your lesson ends at the appointed time.</p>

          <h2>Required Attire</h2>
          <ul>
            <li>An approved helmet must be worn by all riders anytime they are on a horse. (Helmets may be available on site - check availability).</li>
            <li>Long pants are required.</li>
            <li>Closed-toe shoes with a small heel are required (e.g., riding boots, hiking boots).</li>
            <li>Waterproof or water-resistant shoes are recommended.</li>
            <li>Specifically disallowed: Rain boots, muck boots, open-heeled or open-toed shoes (sandals, Crocs, slip-ons, etc.).</li>
          </ul>
          <p>There are places to change into riding clothes if coming from school or an after-school activity.</p>

          <h2>Scheduling and Payment</h2>
          <p>We encourage you to schedule and pay for your lesson on our website. Once you have scheduled your lesson, you will be added to our system where you can easily manage your account and lessons.</p>
          <p>If you do not wish to take part in this automated system of scheduling and payment services, you may text Oak Hill at: <strong>662-202-8899</strong>.</p>
        </div>
      </div>

      <div className={styles.bookingForm}>
        <h2>Your Details to Book</h2>
        {paymentStatus.includes('Successful') ? (
          <p className={styles.successMessage}>{paymentStatus}</p>
        ) : (
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName">First name</label>
              <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="lastName">Last name</label>
              <input type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            </div>
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
          </div>
        )}
      </div>

      {!paymentStatus.includes('Successful') && (
        <div className={styles.liabilitySection}>
          <h2>Liability Waiver Requirement</h2>
          <p>A liability waiver must be signed before participation. Please read and acknowledge our liability waiver before proceeding to payment. You can view or print the full waiver form here:</p>
          <a href="/waiver.pdf" target="_blank" rel="noopener noreferrer" className={styles.waiverLink}>
            View/Print Liability Waiver (PDF)
          </a>
          <div className={styles.checkboxGroup}>
            <input type="checkbox" id="liability" name="liability" checked={liabilityAgreed} onChange={(e) => setLiabilityAgreed(e.target.checked)} />
            <label htmlFor="liability">
              I acknowledge that I have read and agree to the terms of the Oak Hill Farm Liability Waiver.
            </label>
          </div>
        </div>
      )}

      <div className={styles.mapSection}>
        <h2>Important: Location & Map</h2>
        <p>Please note that cell phone service can be unreliable at Oak Hill Farm. We highly recommend downloading a map of the property before your visit to help you navigate the grounds.</p>
        <a href="/offlinemap.pdf" download className={styles.mapDownloadButton}>
          Download Property Map (PDF)
        </a>
      </div>

      <div className={styles.paymentSection}>
        {!paymentStatus.includes('Successful') && isFormValid && (
          <PayPalButton
            amount={50.00}
            currency="USD"
            onSuccess={handlePaymentSuccess}
            onError={handlePaymentError}
            disabled={false}
          />
        )}

        {!paymentStatus.includes('Successful') && !isFormValid && (
          <p className={styles.formMessage}>
            Please fill out all form fields and agree to the liability waiver to proceed with payment.
          </p>
        )}

        {paymentStatus && (
          <p className={paymentStatus.includes('Successful') ? styles.successMessage : styles.errorMessage}>
            {paymentStatus}
          </p>
        )}
      </div>

      <div className={styles.footer}>
        <img src={logoImage} alt="Oak Hill Farm Logo" className={styles.footerLogo} loading="lazy" />
        <div className={styles.footerLinks}>
          <Link to="/terms" className={styles.footerLink}> Terms & Conditions </Link>
          <Link to="/refund-policy" className={styles.footerLink}> Refund Policy </Link>
        </div>
        <div className={styles.copyright}>Copyright © 2025 Oak Hill Farm</div>
      </div>
    </div>
  );
}