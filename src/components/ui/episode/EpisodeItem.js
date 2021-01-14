import React from "react";
import { EpisodeCardWrapper, EpisodeCard, EpisodeBody } from "./EpisodeStyled";

const EpisodeItem = (props) => {
  
  return (
      <EpisodeCardWrapper>
          <EpisodeCard>
              <EpisodeBody>
              <div>{props.title}</div>
              </EpisodeBody>
          </EpisodeCard>
      </EpisodeCardWrapper>
   
  );
};

export default EpisodeItem;
