import styled from "styled-components";

import { Footer } from "../components/Footer";
import { ProductItems } from "../components/ProductItems";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

export const ProductList = () => {
  return (
    <Container>
      <Title>Dresses</Title>
      <ProductItems />
      <Footer />
    </Container>
  );
};
