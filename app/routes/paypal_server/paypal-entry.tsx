import { useState } from 'react';
import { useNavigate } from '@remix-run/react';

export default function BasicPaymentEntryPage() {
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handleProceed = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();//to prevetnfull page reload
   
    navigate('/paypal-test');
  };

  return (
    <div>
      <h1>Amount</h1>
      <form onSubmit={handleProceed}>
        <input
          type="number"
          id="amount" 
          name="amount" 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">
          Go to Payment
        </button>
      </form>
    </div>
  );
}