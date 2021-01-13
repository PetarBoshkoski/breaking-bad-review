import styled from "styled-components";
import { Link } from "react-router-dom";

export const SeasonFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-width: 1024px;
  margin: 0 auto;
`;

export const SeasonContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 80vh;
  z-index: 1;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  justify-content: center;
`;
export const CardWrapper = styled.div`
  width: 100%;
  min-height: 250px;
  margin: 10px;
  padding: 10px;
`;
export const SeasonCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  cursor: default;
`;
export const CardBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
`;
export const Title = styled.h1`
  color: #b5b7ef;
  font-size: 30px;
  letter-spacing: 0.5px;
`;

export const Description = styled.p`
  font-family: Arial;
  padding: 5px;
`;

export const Button = styled.button`
  width: 40%;
  min-height: 35px;
  color: #000;
  font-weight: bold;
  margin: 10px 0px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 12px;
  transition: 0.2s;
  &:hover {
      letter-spacing: 0.8px;
  }
`;

export const LinkStyled = styled(Link)`
  width: 100%;
`;