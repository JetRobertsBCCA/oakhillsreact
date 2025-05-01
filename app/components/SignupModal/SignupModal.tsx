// app/components/SignupModal/SignupModal.tsx
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import styles from './SignupModal.module.scss';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import PriceHandler from '../PriceHandler/PriceHandler';
import classNames from 'classnames';

interface SignupModalProps {
    eventName: string;
    eventPrice: string;
    isOpen: boolean;
    onClose: () => void;
    onSuccessfulRegistration?: (paymentInfo?: any) => void;
    registrationComplete?: boolean;
}

const SignupModal: React.FC<SignupModalProps> = ({
    eventName,
    eventPrice,
    isOpen,
    onClose,
    onSuccessfulRegistration = () => {},
    registrationComplete = false,
}) => {
    const [signupData, setSignupData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    if (!isOpen) return null;

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!signupData.name.trim()) newErrors.name = 'Name is required';
        if (!signupData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(signupData.email)) newErrors.email = 'Email is invalid';
        if (!signupData.phone.trim()) newErrors.phone = 'Phone number is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSignupData({ ...signupData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitMessage('');

        try {
            // Add the signup data to Firestore
            await addDoc(collection(db, 'signUps'), {
                ...signupData,
                eventName,
                timestamp: new Date()
            });

            // Reset form and show success message
            setSignupData({
                name: '',
                email: '',
                phone: ''
            });
            setSubmitMessage('Thank you for signing up!');
            setFormSubmitted(true);

            // If the event is free, complete registration immediately
            if (eventPrice.toLowerCase().includes('free')) {
                onSuccessfulRegistration();
            }
            // For paid events, the PriceHandler component will handle the payment flow
        } catch (error) {
            console.error('Error submitting signup:', error);
            setSubmitMessage('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handlePaymentSuccess = (paymentInfo?: any) => {
        // Pass payment info up to parent component
        onSuccessfulRegistration(paymentInfo);
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.glassmorphicCard}>
                <button className={styles.closeButton} onClick={onClose}>
                    ×
                </button>
                <h3 className={styles.header1}>Sign Up for {eventName}</h3>

                {registrationComplete ? (
                    <div className={styles.successMessage}>
                        <h4>Thank you for registering!</h4>
                        <p>We've sent confirmation details to your email.</p>
                        <button onClick={onClose} className={styles.closeBtn}>
                            Close
                        </button>
                    </div>
                ) : formSubmitted ? (
                    <PayPalScriptProvider
                        options={{
                            'client-id': process.env.PAYPAL_CLIENT_ID || 'test',
                            currency: 'USD',
                            intent: 'capture',
                        }}
                    >
                        <div className={styles.paymentSection}>
                            <h4>Complete Your Registration</h4>
                            <PriceHandler
                                priceText={eventPrice}
                                onSuccessfulRegistration={handlePaymentSuccess}
                                itemDescription={`Registration for ${eventName}`}
                            />
                        </div>
                    </PayPalScriptProvider>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className={classNames(styles.signupForm, styles.form1)}
                    >
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={signupData.name}
                                onChange={handleInputChange}
                                className={errors.name ? styles.inputError : ''}
                                required
                            />
                            {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={signupData.email}
                                onChange={handleInputChange}
                                className={errors.email ? styles.inputError : ''}
                                required
                            />
                            {errors.email && (
                                <span className={styles.errorText}>{errors.email}</span>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="phone">Phone</label>
                            <input
                                id="phone"
                                type="tel"
                                name="phone"
                                value={signupData.phone}
                                onChange={handleInputChange}
                                className={errors.phone ? styles.inputError : ''}
                                required
                            />
                            {errors.phone && (
                                <span className={styles.errorText}>{errors.phone}</span>
                            )}
                        </div>

                        <div className={styles.priceInfo}>
                            <p className={styles.p1}>
                                <strong>Price:</strong> {eventPrice}
                            </p>
                        </div>

                        <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Continue'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default SignupModal;
