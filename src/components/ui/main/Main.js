import React, { useState, useEffect } from "react";
import {
  MainFlex,
  MainContainer,
  MainWrapper,
  Content,
  ColumnOne,
  ColumnTwo,
  Image,
  TextWrapper,
  Title,
  SubTitle,
} from "./MainStyled";
import { MenuWrapper, Ul, Li } from "../navigation/NavStyled";
import img from "../../../images/walter_white.png";
import Nav from "../navigation/Nav"
const Main = () => {
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
    <MainFlex>
      <MainContainer>
        <MainWrapper>
          <MenuWrapper>
              <Ul>
              <Li onClick={() => setClasses()}>
                <i className="fas fa-bars"></i>
              </Li>
              </Ul>
          </MenuWrapper>
          <Content>
            <ColumnOne>
              <TextWrapper>
                <Title>Breaking bad</Title>
                <SubTitle>
                  Unlimited access to everything you need to know about the
                  series
                </SubTitle>
              </TextWrapper>
            </ColumnOne>
            <ColumnTwo>
              <Image src={img} alt="Heisenberg" />
            </ColumnTwo>
          </Content>
        </MainWrapper>
      </MainContainer>
    </MainFlex>
    <Nav setClasses={setClasses}/>
    </>
  );
};

export default Main;
