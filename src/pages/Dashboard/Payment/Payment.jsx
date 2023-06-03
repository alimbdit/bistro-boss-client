import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../../hooks/useCart";

// TODO: Publishable key

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const Payment = () => {

  const[cart] = useCart();

  const total = cart.reduce((sum, item)=> sum + item.price, 0);
  const price = parseFloat(total.toFixed(2))

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Payment</title>cart
      </Helmet>
      <SectionTitle
        subHeading="Please Process"
        heading="Payment"
      ></SectionTitle>
      <h1 className="text-3xl">Teka o teka tumi uira uira aso.....</h1>
      <div className=" bg-opacity-30 bg-blue-100 m-10 p-10">
        <Elements stripe={stripePromise}>
            <CheckoutForm cart={cart} price={price}/>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
