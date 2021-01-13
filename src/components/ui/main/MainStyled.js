import styled from "styled-components";

export const MainFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const MainContainer = styled.div`
  position: relative;
  width: 1024px;
  height: 500px;
  z-index: 1;
`;

export const MainWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  background: rgba(0, 255, 120, 0.1);
  backdrop-filter: blur(7px);
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
`;

export const ColumnOne = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ColumnTwo = styled.div`
  width: 50%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
    width: 70%;
`;

export const TextWrapper = styled.div`
    color: chartreuse;
    text-align: left;
    padding: 0px 30px;
    cursor: default;
`;

export const Title = styled.h1`
    font-size: 88px;
`;

export const SubTitle = styled.p`
    font-size: 40px;
    letter-spacing: -0.5px;
    margin: 0px;
`;
