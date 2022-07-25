import styled from "styled-components";
import { sliderItems } from "../../../data";
import { tablet } from "../../../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  ${tablet({ display: "none" })}
`;

const Image = styled.img`
  height: 80%;
  width: 90%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

export const Slider = () => {
  return (
    <Container>
      <Wrapper>
        <Slide bg={sliderItems[0].bg} key={sliderItems[0].id}>
          <ImgContainer>
            <Image src={sliderItems[0].img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{sliderItems[0].title}</Title>
            <Desc>{sliderItems[0].desc}</Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
    </Container>
  );
};
