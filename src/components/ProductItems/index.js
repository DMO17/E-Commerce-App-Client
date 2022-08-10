import { Fragment } from "react";
import styled from "styled-components";
import { useAuth } from "../../context/AppProvider";
import { mobile } from "../../responsive";
import { Products } from "../Products";

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;
export const ProductItems = () => {
  const { filterProducts, type } = useAuth();

  const productTypeFilter = (e) => {
    filterProducts(e.target.value);
  };

  const productPriceFilter = (e) => {
    filterProducts(null, e.target.value);
  };

  return (
    <Fragment>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select onChange={productTypeFilter} defaultValue={type}>
            <Option disabled>type</Option>
            <Option>All Products</Option>
            <Option>Men</Option>
            <Option>Women</Option>
            <Option>Kids</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Price:</FilterText>
          <Select defaultValue="asc" onChange={productPriceFilter}>
            <Option disabled>price</Option>
            <Option>asc</Option>
            <Option>desc</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
    </Fragment>
  );
};
