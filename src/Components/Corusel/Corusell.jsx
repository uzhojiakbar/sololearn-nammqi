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

const CarouselComponent = () => {
  const settings = {
    // dots: true, // pastki qismida nuqtalar ko'rsatiladi
    infinite: true, // slayder cheksiz bo'ladi
    speed: 500, // slayd o'tish tezligi
    slidesToShow: 4, // bir vaqtning o'zida nechta karta ko'rsatiladi
    slidesToScroll: 1, // bitta slaydda nechta kartani o'tkazish
    autoplay: true, // avtomatik slayd o'tishi
    autoplaySpeed: 2000, // avtomatik slaydlar oralig'i (2 soniya)
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
