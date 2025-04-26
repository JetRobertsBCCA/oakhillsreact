import React, { useState } from 'react';
import styles from './route.module.scss';
import { Link } from '@remix-run/react';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import Footer from '../../components/Footer/Footer';

interface PayPalData {
  orderID: string;
}

export default function HomeschoolInfo() {
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
                    amount: 100,
                    type: 'homeschool'
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
            }

            const orderData = await response.json();
            setPaymentStatus('');
            if (!orderData.orderID) {
                throw new Error("Order ID not received from server");
            }
            return orderData.orderID;
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
            setPaymentStatus(`Error creating order: ${errorMessage}`);
            setShowPayPalButtons(false);
            return null;
        }
    };

    const onPayPalApprove = async (data: PayPalData) => {
        setPaymentStatus('Processing payment...');
        try {
            // First, capture the payment
            const paymentResponse = await fetch("/paypal_server/capture_order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    orderID: data.orderID
                }),
            });

            if (!paymentResponse.ok) {
                const errorData = await paymentResponse.json();
                throw new Error(errorData.message || `HTTP error! status: ${paymentResponse.status}`);
            }

            const captureData = await paymentResponse.json();
            
            // If payment is successful, send the registration data
            if (captureData.success) {
                const registrationResponse = await fetch("/homeschool-registration", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        firstName,
                        lastName,
                        email,
                        phone,
                        orderID: data.orderID
                    }),
                });

                if (!registrationResponse.ok) {
                    throw new Error("Failed to process registration");
                }
            }

            setPaymentStatus('Payment Successful! Thank you for registering for our homeschool program.');
            setShowPayPalButtons(false);
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
            setPaymentStatus(`Payment failed: ${errorMessage}`);
        }
    };

    const onPayPalError = (err: unknown) => {
        const errorMessage = err instanceof Error ? err.message : 'Please try again.';
        setPaymentStatus(`Payment error: ${errorMessage}`);
        setShowPayPalButtons(false);
    };

    return (
        <>
            <div className={styles.homeschoolPage}>
                <div className={styles.heroSection}>
                    <h1>Homeschool Program at Oak Hill Farm</h1>
                    <p>Join our 6-week homeschool program where students learn horsemanship, riding skills, and horse care in a structured educational environment.</p>
                </div>

                <div className={styles.infoSection}>
                    <div className={styles.contentBlock}>
                        <h2>Program Cost</h2>
                        <p><strong>$300+ for 6 weeks</strong></p>
                        <p>$100 non-refundable deposit required to reserve your spot. Remaining balance due in person.</p>

                        <h2>Program Details</h2>
                        <ul>
                            <li>6-week comprehensive program</li>
                            <li>Small group sizes for personalized attention</li>
                            <li>Full payment required at registration</li>
                            <li>Non-refundable deposit to secure your spot</li>
                        </ul>

                        <h2>What Students Learn</h2>
                        <ul>
                            <li>Safe horse handling and approach techniques</li>
                            <li>Grooming and basic horse care</li>
                            <li>Riding fundamentals and skills development</li>
                            <li>Horse behavior and communication</li>
                            <li>Basic horse anatomy and care requirements</li>
                        </ul>

                        <h2>Required Attire</h2>
                        <ul>
                            <li>Long pants</li>
                            <li>Closed-toe shoes with small heel</li>
                            <li>Weather-appropriate clothing</li>
                            <li>No open-heeled or open-toed shoes (no Crocs, slip-ons, etc.)</li>
                            <li>No rain boots or muck boots (due to stirrup size requirements)</li>
                        </ul>

                        <h2>Weather Policy</h2>
                        <p>Classes may be rescheduled due to inclement weather, including:</p>
                        <ul>
                            <li>Lightning</li>
                            <li>Severe winds</li>
                            <li>Other unsafe weather conditions</li>
                        </ul>
                        <p>We will contact you as soon as possible if rescheduling is necessary.</p>
                    </div>
                </div>

                <div className={styles.bookingForm}>
                    <h2>Book Your Homeschool Program</h2>
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
                            <h3>Secure Your Spot</h3>
                            <p>$100 Non-Refundable Deposit</p>
                            <p className={styles.smallText}>Required to Reserve Your Spot in the Homeschool Program</p>
                            <p className={styles.smallText}>Balance of $200 (or more for additional fees) due on first day</p>
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