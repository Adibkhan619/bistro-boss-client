import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCarts from "../../../Hooks/useCarts";
import useAuth from "../../../Hooks/useAuth";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState()
    const [message, setMessage] = useState()
    const [transactionId, setTransactionId] = useState();
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const [cart] = useCarts()
    const [clientSecret, setClientSecret] = useState()
    const totalPrice = cart.reduce((total, item) => total + item.price , 0)
    useEffect( () => {
        axiosSecure.post('/create-payment-intent', {price: totalPrice})
        .then(res => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })
    }, [axiosSecure, totalPrice])

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

        //   ! confirm payment ======> 
            const { paymentIntent, error: confirmError} = await stripe.confirmCardPayment(  clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous'
                    }
                }
            })
            if(confirmError){
                console.log('confirm error')
            }else{
                console.log('payment Intent', paymentIntent);
                if(paymentIntent.status === 'succeeded')
                    setTransactionId(paymentIntent.id)
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
                <button className="btn btn-primary my-5" type="submit" disabled={!stripe || !clientSecret }>
                    Pay
                </button>

            </form>
         <div>
         {
            error? <p className="text-red-500">{error}</p>
            :
            <p className="text-green-500">{message}</p> 
         }
         {
            transactionId && <p className="text-green-500">Transaction Id : {transactionId}</p>
         }
         </div>
        </div>
    );
};

export default CheckoutForm;
