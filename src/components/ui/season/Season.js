import React, { useState, useEffect } from "react";
import { MenuWrapper, Ul, Li } from "../navigation/NavStyled";
import Nav from "../navigation/Nav";
import SeasonItem from "./SeasonItem";
import { seasons } from "../../../utils/seasons";
import { SeasonFlex, SeasonContainer } from "./SeasonStyled";
import Tilt from "react-tilt";

const Season = () => {
  const [bodyClass, setBodyClass] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("active", bodyClass);
  }, [bodyClass]);
  const setClasses = () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active", !bodyClass);
    setBodyClass(!bodyClass);
  };
  return (
    <>
      <MenuWrapper>
        <Ul>
          <Li onClick={() => setClasses()}>
            <i className="fas fa-bars"></i>
          </Li>
        </Ul>
      </MenuWrapper>
      <Nav setClasses={setClasses} />
      <SeasonFlex>
        <SeasonContainer>
          {seasons.map((season) => {
            return (
              <Tilt
                className="Tilt"
                options={{
                  max: 20,
                  speed: 100,
                  easing: "cubic-bezier(.03,.98,.52,.99)",
                  perspective: 1000,
                }}
                key={season.id}
              >
                <SeasonItem
                  season={season.season}
                  id={season.id}
                  year={season.year}
                  description={season.description}
                />
              </Tilt>
            );
          })}
        </SeasonContainer>
      </SeasonFlex>
    </>
  );
};

export default Season;
