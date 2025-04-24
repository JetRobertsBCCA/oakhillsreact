import { useState, useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import type { LoaderFunctionArgs } from "@remix-run/node"; 
import { json } from "@remix-run/node"; 
import { useLoaderData } from "@remix-run/react";


export async function loader({}: LoaderFunctionArgs) {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  if (!clientId) {
   
    console.error("eror with teh client id her");
    throw new Error("PayPal configuration error.");
  }
  return json({ paypalClientId: clientId });
}

export default function PaypalTestPage() {
  const { paypalClientId } = useLoaderData<typeof loader>();
  const [message, setMessage] = useState("Test message");
  const [error, setError] = useState<string | null>(null);

 
  if (!paypalClientId) {
      return <div>Loading PayPal configuration...</div>;
  }

  const initialOptions = {
    clientId: paypalClientId,
    currency: "USD", 
    intent: "capture", 
  };

  
  const createOrder = async () => {
    setMessage("Creating order...");
    setError(null);
    try {
      const response = await fetch("/create_order", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
       
      });

      const orderData = await response.json();

      if (!response.ok) {
          throw new Error(orderData.message || `HTTP error! status: ${response.status}`);
      }

      if (orderData.orderID) {
        setMessage(`Order created: ${orderData.orderID}`);
        return orderData.orderID;
      } else {
        throw new Error("Failed to get order ID from backend");
      }
    } catch (err: any) {
      console.error("Error creating order:", err);
      setError(`Error creating order: ${err.message}`);
      setMessage("Error creating order.");
     
       throw err;
    }
  };


  const onApprove = async (data: any) => {
    setMessage(`Processing payment for order ${data.orderID}...`);
    setError(null);
    try {
      const response = await fetch("/capture_order", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderID: data.orderID,
        }),
      });

       const captureData = await response.json();

      if (!response.ok) {
          throw new Error(captureData.message || `HTTP error! status: ${response.status}`);
      }

      console.log("Capture result:", captureData);
      setMessage(`Payment Successful! Capture ID: ${captureData?.capture?.purchase_units[0]?.payments?.captures[0]?.id || 'N/A'}`);
      setError(null);
     

    } catch (err: any) {
      console.error("Error capturing order:", err);
      setError(`Error capturing payment: ${err.message}`);
      setMessage("Error capturing payment.");
    
    }
  };

 //for pretty much catching any error it might show
  const onError = (err: any) => {
    console.error("PayPal Button Error:", err);
    setError(`PayPal Error: ${err.toString()}`);
   
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px", textAlign: "center" }}>
      <h1>PayPal Test Payment</h1>
      <p>{message}</p>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onError}
        />
      </PayPalScriptProvider>
    </div>
  );
}