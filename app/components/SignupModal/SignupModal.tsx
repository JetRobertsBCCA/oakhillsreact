// app/components/SignupModal/SignupModal.tsx
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import styles from './SignupModal.module.scss';

interface SignupModalProps {
  eventName: string;
  isOpen: boolean;
  onClose: () => void;
}

const SignupModal = ({ eventName, isOpen, onClose }: SignupModalProps) => {
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Handle input change in signup form
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupData({...signupData, [name]: value});
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      
      // Close the modal after 2 seconds
      setTimeout(() => {
        onClose();
        setSubmitMessage('');
      }, 2000);
    } catch (error) {
      console.error('Error submitting signup:', error);
      setSubmitMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

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
        
        {submitMessage ? (
          <div className={styles.successMessage}>{submitMessage}</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={signupData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={signupData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={signupData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Sign Up'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignupModal;
