import React from "react";
import {
  EpisodeCardWrapper,
  EpisodeCard,
  EpisodeBody,
  BodyImage,
  Image,
  BodyText,
  BodyTextTitle,
  ImageOverlay,
} from "./EpisodeStyled";
import img from "../../../images/episodes.jpg";

const EpisodeItem = (props) => {
  return (
    <EpisodeCardWrapper>
      <EpisodeCard>
        <EpisodeBody>
          <BodyImage>
            <Image src={img}/>
            <ImageOverlay />
          </BodyImage>
          <BodyText>
            <BodyTextTitle>Title: {props.episodeData.title}</BodyTextTitle>
            <div>Episode: {props.episodeData.episode}</div>
            <div>Season: {props.episodeData.season}</div>
            <div>Air date: {props.episodeData.air_date}</div>
            <div>
              <strong style={{color: "chartreuse"}}>Characters in this episode: </strong>
              <span>{props.episodeData.characters.join(", ")}</span>
            </div>
          </BodyText>
        </EpisodeBody>
      </EpisodeCard>
    </EpisodeCardWrapper>
  );
};

export default EpisodeItem;