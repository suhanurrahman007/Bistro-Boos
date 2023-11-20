import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = () => {
  const [error, setError] = useState("") 
  const [clientSecret, setClientSecret]= useState("")
  const [transactionId, setTransactionId] = useState("")
    const stripe = useStripe() 
    const elements = useElements()
    const axios = useAxios()
    const {user} = useAuth()
    const [cart] = useCart()
    const totalPrice = cart?.reduce((total, item)=>  total + item.price, 0)

    useEffect(()=>{
      axios.post("/create-payment-intent", {price: totalPrice})
      .then(res =>{
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret)
      })
    },[axios, totalPrice])


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


        //confirm payment 
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email || "anonymous",
              name: user?.displayName || "anonymous"
            }
          }
        })

        if (confirmError) {
          console.log("confirm Error");
        }else{
          console.log("payment intent", paymentIntent);
          if (paymentIntent.status === "succeeded") {
            console.log(paymentIntent.id);
            setTransactionId(paymentIntent.id)

            const payment = {
              email: user?.email,
              price: totalPrice,
              data: new Date(),
              transactionId: paymentIntent?.id,
              cartIds : cart?.map(item => item?._id),
              menuItemIds : cart?.map(item => item?.menu_Id),
              status : "pending"
            }
            const res = await axios.post("/payment", payment)
            console.log(res.data);
          }
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
          <button
            className="btn my-5 btn-outline btn-success"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </form>
        <p className="text-red-700 mt-4">{error}</p>
        {transactionId && (
          <p className="text-green-400 mt-4">{transactionId}</p>
        )}
      </div>
    );
};

export default CheckoutForm;