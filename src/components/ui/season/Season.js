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

  const ref = React.createRef();

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
              <div ref={ref} key={season.id}>
              <Tilt
              >
                <SeasonItem
                  season={season.season}
                  id={season.id}
                  year={season.year}
                  description={season.description}
                />
              </Tilt>
              </div>
            );
          })}
        </SeasonContainer>
      </SeasonFlex>
    </>
  );
};

export default Season;
