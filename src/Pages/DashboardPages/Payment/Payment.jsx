import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// Load Stripe public key
const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);

const Payment = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-200 to-blue-100 py-10 px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-indigo-500 to-purple-500">
          <h1 className="text-3xl font-bold text-white text-center">
            Secure Payment
          </h1>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/Sx5w4Gn/pngimg-com-credit-card-PNG23.png"
            alt="Credit Card"
            className="w-60 h-60 object-contain"
          />
        </div>

        {/* Payment Form */}
        <div className="p-6">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
