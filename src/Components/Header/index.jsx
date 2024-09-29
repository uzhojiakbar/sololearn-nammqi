import React from "react";
import Navbar from "../Navbar/Navbar";
import { Button, HeroContainer, Subtitle, Title } from "./style";

const Header = () => {
  return (
    <div>
      <Navbar />
      <HeroContainer>
        <Title>Learning to code got simplified</Title>
        <Subtitle>
          Learning the latest technology with interactive, hands-on courses. It
          is free!
        </Subtitle>
        <Button>Let's start!</Button>
      </HeroContainer>
    </div>
  );
};

export default Header;
