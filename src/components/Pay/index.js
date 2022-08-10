import { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../context/AppProvider";

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

export const Pay = ({ totalCartAmount }) => {
  const { accessToken, user } = useAuth();

  const [stripeToken, setStripeToken] = useState(null);

  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  const stripeAmount = totalCartAmount * 100;

  useEffect(() => {
    const makeRequest = async () => {
      const { data } = await axios.post("/order/payment", {
        tokenId: stripeToken.id,
        amount: stripeAmount,
      });

      const { data: orderData } = await axios.post(
        "/order",
        {
          address: `${data?.billing_details?.line1} ${data?.billing_details?.postal_code} ${data?.billing_details?.city} ${data?.billing_details?.country}`,
          amount: totalCartAmount,
          userId: user?._id,
        },
        {
          headers: { authorization: `Bearer ${accessToken}` },
        }
      );

      orderData && navigate("/success");
    };
    stripeToken && makeRequest();
  }, [
    stripeToken,
    navigate,
    totalCartAmount,
    accessToken,
    stripeAmount,
    user?._id,
  ]);

  const desc = `YOUR TOTAL IS £ ${totalCartAmount}`;

  return (
    <StripeCheckout
      name="SHOP FUN"
      description={desc}
      image="https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg?compress=1&resize=400x300"
      currency="GBP"
      billingAddress
      shippingAddress
      amount={stripeAmount}
      token={onToken}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <Button>CHECKOUT NOW</Button>
    </StripeCheckout>
  );
};
