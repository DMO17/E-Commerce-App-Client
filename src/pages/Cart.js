import styled from "styled-components";
import { Announcement } from "../components/Announcement";
import { CartHeader } from "../components/Cart/CartHeader";
import { CartProduct } from "../components/Cart/CartProduct";
import { CartSummary } from "../components/Cart/CartSummary";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
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
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Wrapper>
        <CartHeader />
        <Bottom>
          <Info>
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
          </Info>
          <CartSummary />
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};
