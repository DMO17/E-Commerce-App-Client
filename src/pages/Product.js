import styled from "styled-components";

import { Announcement } from "../components/Announcement";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { ProductInfo } from "../components/ProductInfo";

const Container = styled.div``;

export const Product = () => {
  return (
    <Container>
      <Announcement />
      <NavBar />
      <ProductInfo />

      <Footer />
    </Container>
  );
};
