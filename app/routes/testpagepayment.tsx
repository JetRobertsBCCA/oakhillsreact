import React, { useState } from 'react';
import PayPalButton from '../components/PayPalButton';

export default function TestPaymentPage() {
  // Prevent access in production
  if (import.meta.env.PROD) {
    return (
      <div className="paymentContainer">
        <h1>Page Not Available</h1>
        <p>This page is only available in development environment.</p>
      </div>
    );
  }

  const [paymentStatus, setPaymentStatus] = useState<string>('');

  const handlePaymentSuccess = (details: any) => {
    console.log('Payment successful:', details);
    setPaymentStatus('Payment successful! Thank you for your purchase.');
  };

  const handlePaymentError = (error: any) => {
    console.error('Payment error:', error);
    setPaymentStatus('There was an error processing your payment. Please try again.');
  };

  return (
    <div className="paymentContainer">
      <h1>Test Payment Page (Development Only)</h1>
      <div className="paymentDetails">
        <h2>Payment Details</h2>
        <p>Amount: $10.00 USD</p>
        <p className="environment-notice">Currently in: {import.meta.env.DEV ? 'Development' : 'Production'} mode</p>
      </div>
      <div className="paypalButtonContainerActual">
        <PayPalButton
          amount={10.00}
          currency="USD"
          onSuccess={handlePaymentSuccess}
          onError={handlePaymentError}
        />
      </div>
      {paymentStatus && (
        <div className={`paymentStatus ${paymentStatus.includes('success') ? 'success' : 'error'}`}>
          {paymentStatus}
        </div>
      )}
    </div>
  );
}
