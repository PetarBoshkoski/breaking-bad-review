import React from "react";
import { NavWrapper, Ul, Li, LinkRouter } from "./NavStyled";

const Nav = (props) => {
  return (
    <NavWrapper className="menu" id="menu">
      <Ul>
        <LinkRouter to="/">
          <Li onClick={() => props.setClasses()}>Home</Li>
        </LinkRouter>
        <LinkRouter to="/seasons">
          <Li onClick={() => props.setClasses()}>Seasons</Li>
        </LinkRouter>
        <LinkRouter to="/characters">
          <Li onClick={() => props.setClasses()}>Characters</Li>
        </LinkRouter>
      </Ul>
    </NavWrapper>
  );
};

export default Nav;
