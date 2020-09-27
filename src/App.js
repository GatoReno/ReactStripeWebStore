import React from 'react';
import logo from './logo.svg';
import  {loadStripe} from '@stripe/stripe-js';
import {Elements,
        CardElement} from '@stripe/react-stripe-js';
 
import './App.css';

const stripePromise = loadStripe('pk_test_Qt5RGMIGZjmsSsuPq0YbcnLJ');
const CheckoutForm = () => {
  const handleSubmit = (e)=> {
    e.preventDefault();
    console.log('submited');

  };
  return <form onSubmit={handleSubmit}>
    <CardElement/> 
    <button>
      Buy
    </button>
  </form>
};
function App() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm/>
    </Elements>
  );
};

export default App;
