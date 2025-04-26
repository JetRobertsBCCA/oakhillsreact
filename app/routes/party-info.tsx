import { Link } from '@remix-run/react';
import { useState } from 'react';
import styles from './party-info.module.scss';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import Footer from '../components/Footer/Footer';

interface PayPalData {
  orderID: string;
}

export default function BirthdayPartyInfoPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [liabilityAgreed, setLiabilityAgreed] = useState(false);
  const [showPayPalButtons, setShowPayPalButtons] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');
  const [{ isPending }] = usePayPalScriptReducer();

  const isFormValid = liabilityAgreed && !!firstName && !!lastName && !!email && !!phone;

  const createPayPalOrder = async () => {
    setPaymentStatus('Creating order...');
    try {
      const response = await fetch("/create_order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 100,
          type: 'party'
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
      setPaymentStatus('Payment Successful! Thank you for booking your party.');
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
      <div className={styles.partyPage}>
        <div className={styles.heroSection}>
          <h1>Birthday Parties at Oak Hill Farm</h1>
        </div>

        <div className={styles.infoSection}>
          <div className={styles.contentBlock}>
            <h2>Party Package Details</h2>
            <p><strong>Full Party Package: $300</strong></p>
            <ul>
              <li>Up to 12 People</li>
              <li>2 Hours of Fun</li>
              <li>$15 Per Additional Person (after first 10)</li>
              <li>$100 Non-Refundable Deposit Required to Reserve Date & Time</li>
            </ul>

            <h2>What's Included</h2>
            <ul>
              <li>Guided Horse Riding Experience</li>
              <li>Safety Instructions and Equipment</li>
              <li>Dedicated Party Host</li>
              <li>Private Party Area</li>
              <li>Basic Decorations</li>
            </ul>

            <h2>Important Information</h2>
            <ul>
              <li>Suitable for ages 6 and up</li>
              <li>All riders must wear closed-toe shoes</li>
              <li>Parents must sign liability waivers for all participating children</li>
              <li>Please arrive 15 minutes before your scheduled time</li>
            </ul>
          </div>
        </div>

        <div className={styles.bookingForm}>
          <h2>Book Your Party</h2>
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
            <p>A liability waiver must be signed for all participants. Please read and acknowledge our liability waiver before proceeding to payment.</p>
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
          <p>Please note that cell phone service can be unreliable at Oak Hill Farm. We highly recommend downloading a map of the property before your visit.</p>
          <a href="/offlinemap.pdf" download className={styles.mapDownloadButton}>
            Download Property Map (PDF)
          </a>
        </div>

        <div className={styles.paymentSection}>
          {!paymentStatus.includes('Successful') && isFormValid && (
            <div>
              <h3>Secure Your Party Date</h3>
              <p>$100 Non-Refundable Deposit</p>
              <p className={styles.smallText}>Required to Reserve Your Party Date & Time</p>
              <p className={styles.smallText}>Balance of $200 (or more for additional guests) due on party day</p>
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

          {!paymentStatus.includes('Successful') && !isFormValid && (
            <div className={styles.centeredContent}>
              <p className={styles.formMessage}>
                Please fill out all form fields and agree to the liability waiver to proceed with payment.
              </p>
            </div>
          )}

          {paymentStatus && (
            <p className={paymentStatus.includes('Successful') ? styles.successMessage : styles.errorMessage}>
              {paymentStatus}
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
} 