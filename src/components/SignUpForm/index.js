import styled from "styled-components";
import { mobile } from "../../responsive";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

export const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const [registerError, setRegisterError] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async ({
    firstName,
    lastName,
    username,
    email,
    password,
    confirmPassword,
  }) => {
    if (password !== confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
    } else {
      setLoading(true);

      const { data } = await axios.post(
        "https://shop-fun-ecommerce-api.herokuapp.com/api/user/register",
        {
          firstName,
          lastName,
          username,
          email,
          password,
        }
      );

      if (data.success && data) {
        data.success && navigate("../login", { replace: true });
        setLoading(false);
      } else {
        setRegisterError(true);
        setLoading(false);
      }
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="first name"
            type="text"
            {...register("firstName", { required: true })}
          />
          <Input
            placeholder="last name"
            type="text"
            {...register("lastName", { required: true })}
          />
          <Input
            placeholder="username"
            type="text"
            {...register("username", { required: true })}
          />
          <Input
            placeholder="email"
            type="email"
            {...register("email", { required: true })}
          />
          <Input
            placeholder="password"
            type="password"
            {...register("password", { required: true, min: 6 })}
          />
          <Input
            placeholder="confirm password"
            type="password"
            {...register("confirmPassword", { required: true, min: 6 })}
          />
          {errors.confirmPassword && (
            <span style={{ color: "red" }}>Password don't match</span>
          )}

          {(errors.firstName ||
            errors.lastName ||
            errors.emails ||
            (errors.password && errors.confirmPassword)) && (
            <span style={{ color: "red" }}>
              All the fields are required to register
            </span>
          )}

          {registerError && (
            <span style={{ color: "red" }}>
              Failed to cerate an account, please try again
            </span>
          )}

          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit"> {loading ? "...Loading" : "CREATE"} </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};
