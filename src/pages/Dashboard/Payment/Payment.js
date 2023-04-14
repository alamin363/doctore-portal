import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData, useNavigation } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import Loading from "../../Share/Loading/Loading";
const stripePromise = loadStripe(
  "pk_test_51M6B1DFokKCixQB7Y8Z9czvVpjrMle29Y2irFLPNQSdqcVpEPrmRSxwwJM2i8EzhBnIeMuevF1Gx63LCYz1hObUo00FNk82CFQ"
);

const Payment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation()
  const { treatment, price, appointmentDate, slot } = booking;

  if(navigation.state === "loading"){
    return <Loading></Loading>
  }

  return (
    <div>
      <h3 className="text-3xl">Payment for {treatment}</h3>

      <p className="text-xl">
        Please pay <strong>${price}</strong> for your appointment on{" "}
        {appointmentDate} at {slot}
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckOutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
