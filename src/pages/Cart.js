import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useAuth } from "../context/AppProvider";

import { CartHeader } from "../components/Cart/CartHeader";
import { CartProduct } from "../components/Cart/CartProduct";
import { CartSummary } from "../components/Cart/CartSummary";
import { Footer } from "../components/Footer";

import { tablet } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${tablet({ padding: "5px", marginTop: "30px" })}
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${tablet({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

export const Cart = () => {
  const { user, accessToken } = useAuth();

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const { data } = await axios.get(`/cart/${user?._id}`, {
        headers: { authorization: `Bearer ${accessToken}` },
      });
      data?.success && setCart(data?.cart);
    };

    fetchCart();
  }, [user?._id, accessToken]);

  const totalCartAmount = Object.values(cart)[2].reduce((total, item) => {
    return item?.quantity * item?.productId?.price + total;
  }, 0);

  return (
    <Container>
      <Wrapper>
        <CartHeader />
        <Bottom>
          <Info>
            {cart?.products?.map((item) => (
              <CartProduct item={item} />
            ))}
          </Info>
          <CartSummary totalCartAmount={totalCartAmount} />
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};
