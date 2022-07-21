import { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      const { data } = await axios.post("/api/order/payment", {
        tokenId: stripeToken.id,
        amount: 2000,
      });

      console.log(data);
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <>
      {stripeToken ? (
        <span>Processing. Please Wait</span>
      ) : (
        <StripeCheckout
          name="E-com Store"
          description="YOUR TOTAL IS £20"
          image="https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg?compress=1&resize=400x300"
          currency="GBP"
          billingAddress
          shippingAddress
          amount={2000}
          token={onToken}
          stripeKey="pk_test_51LO1QkLlAqWAEMgmPxqtGMbNCWC0rdQ6h5TTYpzGSPmeySM9JHRT1n8esAfGj4F4BBGJeyWpfJEOFKmUksE8tKUt00Gwk2yXof"
        >
          <div
            style={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
              style={{
                border: "none",
                width: 150,
                borderRadius: 5,
                padding: "20",
                color: "white",
                backgroundColor: "black",
                fontSize: 50,
                cursor: "pointer",
              }}
            >
              PAY NOW
            </button>
          </div>
        </StripeCheckout>
      )}

      <button
        onClick={() => {
          navigate("/success");
        }}
      >
        click me
      </button>
    </>
  );
};
