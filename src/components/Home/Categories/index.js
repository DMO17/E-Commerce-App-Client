import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { categories } from "../../../data";
import { tablet } from "../../../responsive";
import { CategoryItem } from "../CategoryItem";
import { useAuth } from "../../../context/AppProvider";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${tablet({ padding: "0px", flexDirection: "column" })}
`;

export const Categories = () => {
  const { filterProducts } = useAuth();

  const navigate = useNavigate();

  const navigateToCategory = (type) => {
    filterProducts(type);
    navigate("../products", { replace: true });
  };

  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem
          item={item}
          key={item.id}
          navigateToCategory={navigateToCategory}
        />
      ))}
    </Container>
  );
};
