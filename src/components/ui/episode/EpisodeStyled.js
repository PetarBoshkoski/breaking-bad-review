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
`;

export const EpisodeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  background: rgba(0, 255, 120, 0.1);
  backdrop-filter: blur(2px);
`;

export const EpisodeCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin: 10px;
  padding: 10px;
`;
export const EpisodeCard = styled.div`
  position: relative;
  min-height: 100px;
  width: 100%;
  overflow: hidden;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  cursor: default;
`;
export const EpisodeBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
`;