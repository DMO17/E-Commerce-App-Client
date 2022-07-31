import { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

export const Pay = ({ totalCartAmount }) => {
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
      navigate("/success");
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate]);

  const desc = `YOUR TOTAL IS £ ${totalCartAmount}`;

  return (
    <>
      {stripeToken ? (
        <span>Processing. Please Wait</span>
      ) : (
        <StripeCheckout
          name="SHOP FUN"
          description={desc}
          image="https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg?compress=1&resize=400x300"
          currency="GBP"
          billingAddress
          shippingAddress
          amount={2000}
          token={onToken}
          stripeKey="pk_test_51LO1QkLlAqWAEMgmPxqtGMbNCWC0rdQ6h5TTYpzGSPmeySM9JHRT1n8esAfGj4F4BBGJeyWpfJEOFKmUksE8tKUt00Gwk2yXof"
        >
          <Button>CHECKOUT NOW</Button>
        </StripeCheckout>
      )}
    </>
  );
};
