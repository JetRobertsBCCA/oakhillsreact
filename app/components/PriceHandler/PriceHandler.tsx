// app/components/PriceHandler/PriceHandler.tsx
import React, { useState, useEffect } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import styles from './PriceHandler.module.scss';

interface PriceHandlerProps {
  priceText: string;
  onSuccessfulRegistration: (paymentInfo?: any) => void;
  itemDescription: string;
}

export default function PriceHandler({
  priceText,
  onSuccessfulRegistration,
  itemDescription
}: PriceHandlerProps) {
  const [price, setPrice] = useState<number | null>(null);
  const [isFree, setIsFree] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');
  const [showPayPalButtons, setShowPayPalButtons] = useState(false);

  useEffect(() => {
    // Extract price from the text
    const extractPrice = (text: string): number | null => {
      // Check if it's explicitly marked as free
      if (text.toLowerCase().includes('free')) {
        setIsFree(true);
        return 0;
      }
      
      // Try to extract price with regex
      const priceMatch = text.match(/\$(\d+(\.\d{1,2})?)/);
      if (priceMatch && priceMatch[1]) {
        return parseFloat(priceMatch[1]);
      }
      
      return null; // If no price format is found
    };

    const extractedPrice = extractPrice(priceText);
    setPrice(extractedPrice);
    
    // Show PayPal buttons only if there's a price and it's not free
    setShowPayPalButtons(extractedPrice !== null && extractedPrice > 0);
  }, [priceText]);

  const handleRegisterClick = () => {
    if (isFree || price === 0) {
      // For free events, simply complete the registration
      setPaymentStatus('Registration successful!');
      onSuccessfulRegistration();
    } else {
      // For paid events, show PayPal buttons
      setShowPayPalButtons(true);
    }
  };

  const createOrder = (data: any, actions: any) => {
    if (!price) return Promise.reject('Price not set');
    
    return actions.order.create({
      purchase_units: [
        {
          description: itemDescription,
          amount: {
            value: price.toString(),
            currency_code: 'USD'
          }
        }
      ],
      application_context: {
        shipping_preference: 'NO_SHIPPING'
      }
    });
  };

  const onApprove = async (data: any, actions: any) => {
    try {
      const details = await actions.order.capture();
      setPaymentStatus('Payment successful! Your registration is complete.');
      onSuccessfulRegistration(details);
      setShowPayPalButtons(false);
    } catch (error) {
      console.error('Payment capture failed:', error);
      setPaymentStatus('Payment failed. Please try again or contact support.');
    }
  };

  const onError = (err: any) => {
    console.error('PayPal error:', err);
    setPaymentStatus('An error occurred with the payment system. Please try again later.');
  };

  return (
    <div className={styles.priceHandlerContainer}>
      {price !== null ? (
        <div className={styles.priceInfo}>
          {isFree ? (
            <>
              <p>This event is free!</p>
              <button 
                onClick={handleRegisterClick} 
                className={styles.registerButton}
              >
                Register Now
              </button>
            </>
          ) : (
            <>
              <p>Price: ${price.toFixed(2)}</p>
              {!showPayPalButtons && !paymentStatus.includes('successful') && (
                <button 
                  onClick={handleRegisterClick} 
                  className={styles.paymentButton}
                >
                  Proceed to Payment
                </button>
              )}
            </>
          )}
          
          {showPayPalButtons && price > 0 && (
            <div className={styles.paypalButtonsContainer}>
              <PayPalButtons
                createOrder={createOrder}
                onApprove={onApprove}
                onError={onError}
                style={{
                  layout: 'vertical',
                  color: 'gold',
                  shape: 'rect',
                  label: 'pay'
                }}
              />
            </div>
          )}
          
          {paymentStatus && (
            <p className={styles.statusMessage}>{paymentStatus}</p>
          )}
        </div>
      ) : (
        <p>Loading price information...</p>
      )}
    </div>
  );
}
