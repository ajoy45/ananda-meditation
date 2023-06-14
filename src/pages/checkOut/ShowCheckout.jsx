import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';
const stripePromise = loadStripe(`${import.meta.env.VITE_payment_PK}`);
const ShowCheckout = () => {
    const selectClass=useLoaderData();
   
    return (
        <div className='w-1/2 mx-auto shadow-xl py-12 px-12 mt-12'>
            <Elements stripe={stripePromise}>
                <CheckoutForm selectClass={selectClass}/>
            </Elements>
        </div>
    );
};

export default ShowCheckout;