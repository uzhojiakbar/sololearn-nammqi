import React from "react";
import { HomeUi } from "./style";
import Header from "../../Components/Header";
import CarouselComponent from "../../Components/Corusel/Corusell";
import Cards from "../../Components/Card/Cards";
import ThePerfect from "../../Components/ThePerfect/ThePerfect";
import Comuty from "../../Components/Comunty/Comuty";
import Whycode from "../../Components/Whycode/Whycode";

const Home = () => {
  return (
    <HomeUi>
      <Header />
      <CarouselComponent />
      <Cards />
      <ThePerfect />
      <Comuty/>
      <Whycode/>
    </HomeUi>
  );
};

export default Home;
