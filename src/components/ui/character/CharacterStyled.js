import styled from "styled-components";

export const CharacterFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-width: 1024px;
  margin: 0 auto;
`;

export const CharacterContainer = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 40% 40%;
  }

  @media screen and (max-width: 568px) {
    display: grid;
    grid-template-columns: 70%;
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
  min-height: 200px;
  margin: 10px;
  padding: 10px;
`;

export const CharacterCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background: rgba(100, 100, 100, 0.1);
  backdrop-filter: blur(5px);
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
      transform: scale(1.02);
  }
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

export const BodyImage = styled.div`
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 260px;
  opacity: 0.7;
`;

export const BodyText = styled.div`
  position: absolute;
  width: 100%;
  background: brown;
  opacity: 0.7;
  letter-spacing: 1px;
  padding: 5px 10px;
  text-align: center;
  bottom: 0;
`;