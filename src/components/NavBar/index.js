import styled from "styled-components";
import { mobile, tablet } from "../../responsive";
import Badge from "@mui/material/Badge";
import { FiLogOut } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAuth } from "../../context/AppProvider";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${tablet({ height: "100px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  cursor: pointer;
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

export const NavBar = () => {
  const { isLoggedIn, setIsLoggedIn, productsInCart } = useAuth();

  const navigate = useNavigate();

  const onClickLogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("../", { replace: true });
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <BsSearch style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo onClick={() => navigate("../", { replace: true })}>
            SHOP FUN
          </Logo>
        </Center>
        <Right>
          {!isLoggedIn && (
            <>
              <MenuItem
                onClick={() => navigate("../register", { replace: true })}
              >
                REGISTER
              </MenuItem>
              <MenuItem onClick={() => navigate("../login", { replace: true })}>
                SIGN IN
              </MenuItem>
            </>
          )}
          {isLoggedIn && (
            <>
              <MenuItem onClick={() => navigate("../cart", { replace: true })}>
                <Badge
                  color="primary"
                  overlap="rectangular"
                  badgeContent={productsInCart.length}
                >
                  <AiOutlineShoppingCart style={{ fontSize: 30 }} />
                </Badge>
              </MenuItem>
              <FiLogOut
                style={{ fontSize: 30, marginLeft: 25, cursor: "pointer" }}
                onClick={() => onClickLogOut()}
              />
            </>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};
