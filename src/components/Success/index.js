import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Footer } from "../Footer";

const Summary = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: space-around;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  height: 55vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const Button = styled.button`
  width: 50%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  pointer: cursor;
`;

const SummaryItemText = styled.span``;

export const Success = () => {
  const navigate = useNavigate();

  return (
    <>
      <Summary>
        <SummaryTitle>SUCCESSFULL</SummaryTitle>
        <SummaryItemText>
          YOUR ORDER IS BEING PREPARED. THANKS FOR SHOPPING!!
        </SummaryItemText>
        <div>
          <Button onClick={() => navigate("../", { replace: true })}>
            Return Shopping
          </Button>
        </div>
      </Summary>
      <Footer />
    </>
  );
};
