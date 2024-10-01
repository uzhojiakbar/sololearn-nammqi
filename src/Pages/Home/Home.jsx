import React from "react";
import { HomeUi } from "./style";
import Header from "../../Components/Header";
import CarouselComponent from "../../Components/Corusel/Corusell";
import Cards from "../../Components/Card/Cards";
import ThePerfect from "../../Components/ThePerfect/ThePerfect";

const Home = () => {
  return (
    <HomeUi>
      <Header />
      <CarouselComponent />
      <Cards />
      <ThePerfect />
    </HomeUi>
  );
};

export default Home;
