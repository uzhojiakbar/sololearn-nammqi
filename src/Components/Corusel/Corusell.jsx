// CarouselComponent.jsx
import React from "react";
import {
  Cardtext,
  CoruselBox,
  CoruselCard,
  Coruselwrap,
  ImagWidth,
  Title,
  Wrapper,
} from "./style";
import { coruselData } from "../../Utils/coruselData";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { coruselData } from "../../Utils/coruselData";

const CarouselComponent = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: count,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Wrapper>
      <CoruselBox>
        <Title>Choose a course for you</Title>
        <Slider {...settings}>
          {coruselData.map((item) => {
            return (
              <Coruselwrap key={item.id}>
                <CoruselCard>
                  <ImagWidth src={item.image} alt="" />
                  <Cardtext>{item.name}</Cardtext>
                </CoruselCard>
              </Coruselwrap>
            );
          })}
        </Slider>
      </CoruselBox>
    </Wrapper>
  );
};

export default CarouselComponent;
