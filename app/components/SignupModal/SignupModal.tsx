// app/components/SignupModal/SignupModal.tsx
import React, { useState } from 'react';
import styles from './SignupModal.module.scss';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import PriceHandler from '../PriceHandler/PriceHandler';

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
  registrationComplete = false
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    if (!phone.trim()) newErrors.phone = 'Phone number is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setFormSubmitted(true);
    
    // If the event is free, complete registration immediately
    if (eventPrice.toLowerCase().includes('free')) {
      onSuccessfulRegistration();
    }
    // For paid events, the PriceHandler component will handle the payment flow
  };

  const handlePaymentSuccess = (paymentInfo?: any) => {
    // Pass payment info up to parent component
    onSuccessfulRegistration(paymentInfo);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.glassmorphicCard}>
        <button 
          className={styles.closeButton}
          onClick={onClose}
        >
          ×
        </button>
        <h3>Sign Up for {eventName}</h3>
        
        {registrationComplete ? (
          <div className={styles.successMessage}>
            <h4>Thank you for registering!</h4>
            <p>We've sent confirmation details to your email.</p>
            <button 
              onClick={onClose}
              className={styles.closeBtn}
            >
              Close
            </button>
          </div>
        ) : formSubmitted ? (
          <PayPalScriptProvider options={{
            "client-id": process.env.PAYPAL_CLIENT_ID || "test", 
            currency: "USD",
            intent: "capture"
          }}>
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
          <form onSubmit={handleSubmit} className={styles.signupForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={errors.name ? styles.inputError : ''}
              />
              {errors.name && <span className={styles.errorText}>{errors.name}</span>}
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.email ? styles.inputError : ''}
              />
              {errors.email && <span className={styles.errorText}>{errors.email}</span>}
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={errors.phone ? styles.inputError : ''}
              />
              {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
            </div>
            
            <div className={styles.priceInfo}>
              <p><strong>Price:</strong> {eventPrice}</p>
            </div>
            
            <button type="submit" className={styles.submitButton}>
              Continue
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignupModal;
