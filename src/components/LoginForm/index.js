import styled from "styled-components";
import { mobile } from "../../responsive";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AppProvider";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [loginError, setloginError] = useState(false);
  const { setAccessToken, setIsLoggedIn, setUser } = useAuth();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    setLoading(true);

    const { data } = await axios.post(
      "https://shop-fun-ecommerce-api.herokuapp.com/user/login",
      {
        email,
        password,
      }
    );

    if (data.success) {
      setAccessToken(data.accessToken);
      setIsLoggedIn(true);
      setUser(data.user);

      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("user", JSON.stringify(data.user));

      setLoading(false);
      data.success && navigate("../", { replace: true });
    } else {
      setloginError(true);
      setLoading(false);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="email"
            type="email"
            {...register("email", { required: true })}
          />
          <Input
            placeholder="password"
            type="password"
            {...register("password", { required: true })}
          />
          {(errors.email || errors.password) && (
            <span style={{ color: "red" }}>
              All the fields are required to login
            </span>
          )}
          {loginError && <span style={{ color: "red" }}>Failed to login</span>}
          <Button>{loading ? "...Loading" : "LOGIN"}</Button>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};
