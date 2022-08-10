import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Footer } from "../components/Footer";
import { ProductInfo } from "../components/ProductInfo";
import { useEffect } from "react";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

export const Product = () => {
  const [product, setProduct] = useState();
  const [error, setError] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProductById = async () => {
      const { data } = await axios.get(`/products/${productId}`);

      if (data?.success) {
        setProduct(data.product);
      } else {
        setError(true);
      }
    };

    fetchProductById();
  }, [productId]);

  return (
    <Container>
      {!error ? (
        <>
          <ProductInfo product={product} productId={productId} />
          <Footer />
        </>
      ) : (
        <Title>That product does'nt exist</Title>
      )}
    </Container>
  );
};
