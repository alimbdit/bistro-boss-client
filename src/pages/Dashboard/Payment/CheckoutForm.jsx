import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import './CheckoutForm.css'
import Swal from "sweetalert2";

const CheckoutForm = ({cart, price}) => {
  const {user} = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('')
  // console.log(price)

  useEffect(() => {
    if(price>0){
      axiosSecure.post('/create-payment-intent', {price})
    .then(res => {
      setClientSecret(res.data.clientSecret)
    })
    }
  }, [price, axiosSecure])

  const handleSubmit = async(event) => {
    event.preventDefault();

    if (!stripe || !elements) {
        return;
    }
    
    const card = elements.getElement(CardElement)

    if(card === null){
        return;
    }
    
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card
      })

      if(error){
        setCardError(error.message)
      }
      else{
        setCardError('')
        // console.log(paymentMethod)
      }

      setProcessing(true)
      const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: user?.displayName || "Anonymous",
              email: user?.email || "Unknown",
            },
          },
        },
      );

      if(confirmError){
        console.log(confirmError);
        setCardError(confirmError);
      }
      setProcessing(false)
      if(paymentIntent.status === "succeeded"){
        setTransactionId(paymentIntent.id);
        
        // save payment information to the server
        const payment = {
          email: user?.email,
          transactionId: paymentIntent.id,
          price,
          date: new Date(),
          quantity: cart.length,
          status: 'service pending',
          cartItems: cart.map(item => item._id),
          menuItems: cart.map(item => item.menuItemId),
          itemNames: cart.map(item => item.name)
        }
        axiosSecure.post('/payments', payment)
        .then(res => {
          console.log(res.data)
          if(res.data.insertResult.insertedId){

            // display confirm

            // Swal.fire({
            //   position: 'top-end',
            //   icon: 'success',
            //   title: 'Payment successful',
            //   showConfirmButton: false,
            //   timer: 1500
            // })
          }
        })
      }

  }

  

  return (
   <>
    <form className="payment" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button className="btn btn-primary btn-sm my-4" type="submit" disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
    </form>
    {cardError && <p className="text-red-600">{cardError}</p>}
    {transactionId && <p className="text-green-600">Transaction complete with transactionId: {transactionId}</p>}
   </>
  );
};

export default CheckoutForm;
