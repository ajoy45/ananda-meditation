import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
const CheckoutForm = ({selectClass}) => {
  console.log(selectClass.price)
  const{user}=useContext(AuthContext)
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const[clientSecret,setClientSecret]=useState('');
  useEffect(()=>{
    if(selectClass?.price){
      axios.post('https://assingement-12-server.vercel.app/create-payment-intent',{price:selectClass?.price}).then(res=>{
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret)
      })
    }
     fetch('')
  },[selectClass])
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setCardError(error.message)
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
    // confirm payment
    const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName||"unknown",
            email:user?.email ||"anonymous "
          },
        },
      },
    );
    if (confirmError) {
      console.log('[error]', confirmError);
      setCardError(confirmError.message)
    } else {
      console.log('[paymentIntent]', paymentIntent);
      if(paymentIntent.status==='succeeded'){
        const paymentInfo={
          ...selectClass,
          transactionId:paymentIntent?.id,
          data:new Date()
        }
         fetch('https://assingement-12-server.vercel.app/confirm',{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(paymentInfo)
         }).then(res=>res.json())
         .then(data=>console.log(data))
      }
    }
  };
 

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {
        cardError && <p className='text-red-500'>{cardError}</p>
      }
    </>
  );
};
export default CheckoutForm