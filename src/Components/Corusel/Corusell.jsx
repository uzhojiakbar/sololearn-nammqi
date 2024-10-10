import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { coruselData } from "../../Utils/coruselData";

const CarouselComponent = () => {

  const [count, setCount] = useState(1)
  if (window.innerWidth > 1024) {
    
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: count,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="bg-transparent py-5 relative -top-52">
      <div className="flex flex-col mx-8">
        <h1 className="text-4xl text-[#e5e5e5] text-center mb-8 font-sans">
          Choose a course for you
        </h1>
        <Slider {...settings}>
          {coruselData.map((item) => (
            <div key={item.id} className="p-2 w-[100px] overflow-hidden">
              <div className="bg-[#eaf0f3] p-6 rounded-lg w-[99%] h-[184px] flex flex-col items-center justify-around mt-5">
                <img
                  className="w-16 h-16 rounded-full"
                  src={item.image}
                  alt={item.name}
                />
                <h2 className="text-2xl text-[#2d3846]">{item.name}</h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselComponent;
