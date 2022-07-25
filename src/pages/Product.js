import styled from "styled-components";

import { Footer } from "../components/Footer";
import { ProductInfo } from "../components/ProductInfo";

const Container = styled.div``;

export const Product = () => {
  return (
    <Container>
      <ProductInfo />
      <Footer />
    </Container>
  );
};
