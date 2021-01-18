import React, { useState, useEffect } from "react";
import { CharacterFlex, CharacterContainer } from "./CharacterStyled";
import CharacterItem from "./CharacterItem";
import { callApi } from "../../../utils/api";
import Nav from "../navigation/Nav";
import { MenuWrapper, Ul, Li } from "../navigation/NavStyled";

const Character = () => {
  const [apiData, setApiData] = useState([]);
  const [bodyClass, setBodyClass] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("active", bodyClass);
  }, [bodyClass]);

  useEffect(() => {
    callApi("characters").then((response) => setApiData(response));
  }, []);
  const setClasses = () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active", !bodyClass);
    setBodyClass(!bodyClass);
  };
  const characters = apiData.filter(
    (item) => item.category === "Breaking Bad"
  );
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
      <CharacterFlex>
        <CharacterContainer>
            {characters.map((character) => {
                return <CharacterItem characterData={character}/>
            })}
          
        </CharacterContainer>
      </CharacterFlex>
    </>
  );
};

export default Character;
