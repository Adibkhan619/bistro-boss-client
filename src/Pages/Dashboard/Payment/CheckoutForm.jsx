import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState()
    const [message, setMessage] = useState()
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

          if (error) {
            console.log('[error]', error);
                setError(error.message);
            
          } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError("")
            setMessage('Payment Successful !')
          }
    };
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
                <button className="btn btn-primary my-5" type="submit" disabled={!stripe}>
                    Pay
                </button>

            </form>
         <div>
         {
            error? <p className="text-red-500">{error}</p>
            :
            <p className="text-green-500">{message}</p> 
         }
         </div>
        </div>
    );
};

export default CheckoutForm;
