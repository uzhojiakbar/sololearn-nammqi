import React from "react";
import { HomeUi } from "./style";
import Header from "../../Components/Header";
import CarouselComponent from "../../Components/Corusel/Corusell";
import Cards from "../../Components/Card/Cards";

const Home = () => {
  return (
    <HomeUi>
      <Header />
      <CarouselComponent/>
      <Cards/>
    </HomeUi>
  );
};

export default Home;
