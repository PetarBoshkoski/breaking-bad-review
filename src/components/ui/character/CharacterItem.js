import React from "react";
import {
  CardWrapper,
  CharacterCard,
  CardBody,
  Image,
  BodyText,
} from "./CharacterStyled";

const CharacterItem = (props) => {
  return (
    <CardWrapper>
      <CharacterCard>
        <CardBody>
            <Image
              src={props.characterData.img} alt={props.characterData.name}/>
            <BodyText>
                {props.characterData.name}
                <div>Nickname: {props.characterData.nickname}</div>
            </BodyText>
        </CardBody>
      </CharacterCard>
    </CardWrapper>
  );
};

export default CharacterItem;
