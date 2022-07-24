import styled from "styled-components";
import { tablet } from "../../responsive";
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${tablet({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

export const CartHeader = () => {
  return (
    <Top>
      <TopButton>CONTINUE SHOPPING</TopButton>
      <TopTexts>
        <TopText>Shopping Bag(2)</TopText>
        <TopText>Your Wishlist (0)</TopText>
      </TopTexts>
      <TopButton type="filled">CHECKOUT NOW</TopButton>
    </Top>
  );
};
