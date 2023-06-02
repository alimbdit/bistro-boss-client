import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO: Publishable key

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const Payment = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Payment</title>
      </Helmet>
      <SectionTitle
        subHeading="Please Process"
        heading="Payment"
      ></SectionTitle>
      <h1 className="text-3xl">Teka o teka tumi uira uira aso.....</h1>
      <div className=" bg-opacity-30 bg-blue-100 m-10 p-10">
        <Elements stripe={stripePromise}>
            <CheckoutForm/>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
