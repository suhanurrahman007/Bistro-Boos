import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()

    const [error, setError] = useState() 

    const handleSubmit = async (e) =>{
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card 
        })

        if (error) {
            console.log("[error]", error);
            setError(error.message)
        }else{
            console.log("[PaymentMethod]", paymentMethod);

            setError("")
        }
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
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
          <button className="btn my-5 btn-outline btn-success" type="submit" disabled={!stripe}>
            Pay
          </button>
        </form>
        <p className="text-red-700 mt-4">{error}</p>
      </div>
    );
};

export default CheckoutForm;