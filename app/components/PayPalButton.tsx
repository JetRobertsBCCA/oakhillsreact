import React from 'react';
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
  const initialOptions = {
    clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID || 'test',
    currency: currency,
    intent: 'capture',
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        style={{ layout: 'vertical' }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount.toString(),
                  currency_code: currency,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order?.capture().then((details) => {
            if (onSuccess) {
              onSuccess(details);
            }
          });
        }}
        onError={(err) => {
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