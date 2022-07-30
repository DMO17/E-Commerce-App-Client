import styled from "styled-components";
import { useAuth } from "../../context/AppProvider";
import { popularProducts } from "../../data";
import { Product } from "../Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Products = () => {
  const { products } = useAuth();

  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};
