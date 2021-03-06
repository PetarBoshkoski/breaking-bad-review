import styled from "styled-components";

export const EpisodeFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const EpisodeContainer = styled.div`
  position: relative;
  width: 1024px;
  z-index: 1;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;

export const EpisodeWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  background: rgba(0, 255, 120, 0.1);
  backdrop-filter: blur(2px);
  display: grid;
  grid-template-columns: 40% 60%;
  padding: 25px 0px;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 100%;
    margin: 0 auto;
  }
`;

export const EpisodeCardWrapper = styled.div`
  margin: 0 auto;
  padding: 10px;
  width: 90%;
`;
export const EpisodeCard = styled.div`
  position: relative;
  min-height: 100px;
  width: 100%;
  overflow: hidden;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  background: rgba(122, 122, 122, 0.1);
  backdrop-filter: blur(5px);
  cursor: default;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: 0.2s linear;

  &:hover {
    cursor: pointer;
  }
`;
export const EpisodeBody = styled.div`
  font-family: "Arial", sans-serif;
  padding: 5px 10px;
  width: 100%;
  height: 100%;
  color: #fff;
  display: grid;
  background: rgba(255, 255, 255, 0.1);
  grid-template-columns: 30% 70%;
  justify-content: center;

  @media screen and (max-width: 1024p) {
    display: grid;
    grid-template-columns: 40% 60%;
  }

  @media screen and (max-width: 468px) {
    grid-template-columns: 100%;
  }
`;

export const BodyImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    display: ${props => props.main ? "flex" : "block"};
    justify-content: ${props => props.main ? "center" : ""};
    align-items: ${props => props.main ? "center" : ""};
    margin: 0 auto;
    width: ${props => props.main ? "50%" : "100%"};
    height: ${props => props.main ? "50%" : "100%"};
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: chartreuse;
  opacity: 0.2;
`;

export const BodyText = styled.div`
  width: 100%;
  padding: 5px 10px;
  text-align: left;
`;

export const BodyTextTitle = styled.h1`
  font-size: 25px;
  font-weight: normal;
`;
