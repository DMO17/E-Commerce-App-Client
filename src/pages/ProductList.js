import styled from "styled-components";

import { Footer } from "../components/Footer";
import { ProductItems } from "../components/ProductItems";
import { useAuth } from "../context/AppProvider";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

export const ProductList = () => {
  const { type } = useAuth();
  return (
    <Container>
      <Title>{type}</Title>
      <ProductItems />
      <Footer />
    </Container>
  );
};
