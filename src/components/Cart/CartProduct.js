import { Fragment, useState } from "react";
import styled from "styled-components";
import { tablet } from "../../responsive";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${tablet({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  cursor: pointer;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${tablet({ margin: "3px 10px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${tablet({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

export const CartProduct = ({
  item,
  deleteItemFromCart,
  setRefetch,
  navigateToProductOnClick,
}) => {
  const [quantity, setQuantity] = useState(item?.quantity);

  return (
    <Fragment>
      <Product>
        <ProductDetail>
          <Image
            src={item?.productId?.img}
            onClick={() => navigateToProductOnClick(item?.productId?._id)}
          />
          <Details>
            <AiFillDelete
              style={{ cursor: "pointer", fontSize: 30 }}
              onClick={() => {
                deleteItemFromCart(item?._id);
                setRefetch((prevState) => prevState + 1);
              }}
            />
            <ProductName>
              <b>Product:</b> {item?.productId?.title}
            </ProductName>
            <ProductColor color={item?.productId?.color} />
            <ProductSize>
              <b>Size:</b> {item?.size}
            </ProductSize>
          </Details>
        </ProductDetail>
        <PriceDetail>
          <ProductAmountContainer>
            <AiOutlinePlus
              style={{ cursor: "pointer", fontSize: 25 }}
              onClick={() => setQuantity((prevState) => prevState + 1)}
            />
            <ProductAmount>{quantity}</ProductAmount>
            <AiOutlineMinus
              style={{ cursor: "pointer", fontSize: 25 }}
              onClick={() => setQuantity((prevState) => prevState - 1)}
            />
          </ProductAmountContainer>
          <ProductPrice>£{item?.productId?.price}</ProductPrice>
        </PriceDetail>
      </Product>
      <Hr />
    </Fragment>
  );
};
