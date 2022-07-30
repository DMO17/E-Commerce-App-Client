import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AppProvider";
import { Product } from "../Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Products = () => {
  const { products } = useAuth();

  let navigate = useNavigate();

  const navigateToItemPage = (id) =>
    navigate(`../products/${id}`, { replace: true });

  return (
    <Container>
      {products.map((item) => (
        <Product
          item={item}
          navigateToItemPage={navigateToItemPage}
          key={item._id}
        />
      ))}
    </Container>
  );
};
