import { Link } from '@remix-run/react';
import { useState } from 'react';
import styles from './lessons-info.module.scss';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import Footer from '../components/Footer/Footer';

interface PayPalData {
  orderID: string;
}

export default function PrivateLessonsInfoPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [liabilityAgreed, setLiabilityAgreed] = useState(false);
  const [showPayPalButtons, setShowPayPalButtons] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');
  const [{ isPending }] = usePayPalScriptReducer();

  const isFormValid = liabilityAgreed && !!firstName && !!lastName && !!email && !!phone;

  const handleProceedToPayment = () => {
    if (!isFormValid) {
      alert('Please fill all required fields and agree to the liability waiver.');
      return;
    }
    if (isPending) {
        setPaymentStatus("Payment system loading, please wait...");
        return;
    }
    setShowPayPalButtons(true);
    setPaymentStatus('');
  };

  const createPayPalOrder = async () => {
    setPaymentStatus('Creating order...');
    try {
      const response = await fetch("/create_order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 50,
          type: 'lesson'
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const orderData = await response.json();
      setPaymentStatus('');
      console.log("Order ID created:", orderData.orderID);
      if (!orderData.orderID) {
          throw new Error("Order ID not received from server");
      }
      return orderData.orderID;
    } catch (error: unknown) {
      console.error("Failed to create PayPal order:", error);
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      setPaymentStatus(`Error creating order: ${errorMessage}`);
      setShowPayPalButtons(false);
      return null;
    }
  };

  const onPayPalApprove = async (data: PayPalData) => {
      setPaymentStatus('Processing payment...');
      try {
          const response = await fetch("/paypal_server/capture_order", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({
                  orderID: data.orderID
              }),
          });

          if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
          }

          const captureData = await response.json();
          console.log("Payment successful:", captureData);
          setPaymentStatus('Payment Successful! Thank you.');
          setShowPayPalButtons(false);

      } catch (error: unknown) {
          console.error("Failed to capture PayPal order:", error);
          const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
          setPaymentStatus(`Payment failed: ${errorMessage}`);
      }
  };

    const onPayPalError = (err: unknown) => {
        console.error("PayPal Button Error:", err);
        const errorMessage = err instanceof Error ? err.message : 'Please try again.';
        setPaymentStatus(`Payment error: ${errorMessage}`);
        setShowPayPalButtons(false);
    };

  return (
    <>
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
            <div>
              <h3>Secure Your Lesson</h3>
              <p>$50 per hour</p>
              <p className={styles.smallText}>Full payment required at time of booking</p>
              <PayPalButtons
                createOrder={createPayPalOrder}
                onApprove={onPayPalApprove}
                onError={onPayPalError}
                onCancel={() => {
                  setShowPayPalButtons(false);
                  setPaymentStatus('Payment cancelled.');
                }}
                style={{
                  layout: "vertical",
                  shape: "rect",
                  color: "gold"
                }}
              />
            </div>
          )}
          {paymentStatus && !paymentStatus.includes('Successful') && (
            <p className={styles.paymentStatus}>{paymentStatus}</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}