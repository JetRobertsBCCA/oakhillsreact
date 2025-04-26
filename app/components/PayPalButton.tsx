import React, { useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

interface PayPalButtonProps {
  amount: number;
  currency?: string;
  onSuccess?: (details: any) => void;
  onError?: (error: any) => void;
  disabled?: boolean;
}

const PayPalButton: React.FC<PayPalButtonProps> = ({
  amount,
  currency = 'USD',
  onSuccess,
  onError,
  disabled = false,
}) => {
  // Get environment variables
  const env = import.meta.env;
  const clientId = env.PAYPAL_CLIENT_ID || env.VITE_PAYPAL_CLIENT_ID;
  const environment = env.PAYPAL_ENV || env.VITE_PAYPAL_ENV || 'sandbox';

  // Debug logging
  useEffect(() => {
    console.log('Environment Variables Status:');
    console.log('Client ID exists:', !!clientId);
    console.log('Environment:', environment);
    console.log('Available env vars:', {
      PAYPAL_CLIENT_ID: env.PAYPAL_CLIENT_ID,
      VITE_PAYPAL_CLIENT_ID: env.VITE_PAYPAL_CLIENT_ID,
      MODE: env.MODE,
      DEV: env.DEV,
      PROD: env.PROD
    });
  }, [clientId, environment]);

  // Validate client ID
  if (!clientId) {
    console.error('PayPal Client ID missing. Check .env file configuration.');
    return (
      <div style={{ color: 'red', padding: '20px', textAlign: 'center' }}>
        Payment system configuration error. Please contact support.
        {env.DEV && (
          <div style={{ fontSize: '0.8em', marginTop: '10px' }}>
            Developer Note: Neither PAYPAL_CLIENT_ID nor VITE_PAYPAL_CLIENT_ID is set in environment variables.
            <br />
            Current environment: {env.MODE}
            <br />
            Make sure your .env file is in the correct location and properly formatted.
          </div>
        )}
      </div>
    );
  }

  const initialOptions = {
    clientId: clientId,
    currency: currency,
    intent: 'capture',
    'enable-funding': 'venmo,card',
    'disable-funding': 'paylater,credit',
    'data-namespace': 'PayPalSDK',
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        style={{ 
          layout: 'vertical',
          shape: 'rect',
          color: 'gold'
        }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount.toString(),
                  currency_code: currency,
                },
                description: 'Oak Hill Farm Services',
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          try {
            const details = await actions.order?.capture();
            console.log('Payment completed successfully:', details);
            if (onSuccess) {
              onSuccess(details);
            }
          } catch (error) {
            console.error('Payment capture failed:', error);
            if (onError) {
              onError(error);
            }
          }
        }}
        onError={(err) => {
          console.error('PayPal error:', err);
          if (onError) {
            onError(err);
          }
        }}
        disabled={disabled}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton; 