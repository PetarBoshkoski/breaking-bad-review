import React from "react";
import {
  CardWrapper,
  SeasonCard,
  CardBody,
  Title,
  Description,
  Button,
  LinkStyled,
} from "./SeasonStyled";

const SeasonItem = (props) => {
  return (
    <CardWrapper>
      <SeasonCard>
        <CardBody>
          <Title>Season {props.season} ({props.year})</Title>
          <Description>{props.description}</Description>
          <LinkStyled to={`season/${props.season}/episodes`}>
            <Button>
              <i className="fas fa-arrow-right"></i> Episodes
            </Button>
          </LinkStyled>
        </CardBody>
      </SeasonCard>
    </CardWrapper>
  );
};

export default SeasonItem;
