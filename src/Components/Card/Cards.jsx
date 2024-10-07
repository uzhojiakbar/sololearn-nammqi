import React from "react";
import { card2, card2later, CardsData } from "../../Utils/coruselData";

function Cards() {
  return (
    <div className="bg-[#eaf0f3] w-full">
      {/* WrapperBox */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 mx-12 mb-8">
        {CardsData?.map((item) => (

          <div key={item.id} className="bg-white rounded-lg px-2 pb-6 flex flex-col  text-center ">
            <img src={item.image} className="w-[110%] " alt="" />
            <div className="flex flex-col justify-between items-center h-full"><div>
              <div className="text-[#2d3846] text-3xl font-bold mt-4">{item.name}</div>
              <p className="text-[#6b7f99] px-2 mt-4  sm:leading-7 ">{item.desc}</p>
            </div>
              <button className="w-[223px]  h-12 text-white bg-[#2493df]  font-bold rounded mt-6 hover:bg-[#58b5f3]">
                {item.btn}
              </button>
            </div>
          </div>

        ))}
        {card2later?.map((item) => (
          <div key={item.id} className="bg-white rounded-lg px-2 lg:fixed pb-6 flex flex-col  text-center ">
            <img src={item.image} className="w-[110%] " alt="" />
            <div className="flex flex-col justify-between items-center h-full"><div>
              <div className="text-[#2d3846] text-3xl font-bold mt-4">{item.name}</div>
              <p className="text-[#6b7f99] px-2 mt-4 leading-7">{item.desc}</p>
            </div>
              <button className="w-[223px] h-12  text-white bg-[#40BF9C] font-bold rounded mt-6 hover:bg-[#4febbe]">
                {item.btn}
              </button>
            </div>
          </div>
        ))}
      </div>



      <div className=" gap-8 mx-12 mt-5 pb-12 ">
        {card2?.map((item) => (
          <div key={item.id} >
            <div className="grid h-full grid-cols-2 lg:w-[773px] md:w-full sm:w-full items-center bg-white rounded-lg md:px-4 md:py-4 p-4 lg:p-6  gap-8">
              <div>
                <div className="text-[#2d3846] lg:text-4xl md:text-2xl font-bold">{item.name}</div>
                <p className="text-[#6b7f99] text-lg mt-4 md:leading-6">{item.desc}</p>
                <h2 className="text-2xl font-bold my-4">{item.qrname}</h2>
                <div className="grid grid-cols-2 gap-2">
                  <img src={item.childImg1} className="w-[136px] h-[136px]" alt="" />
                  <div>
                    <img src={item.appstoe} className="w-[200px]" alt="" />
                    <img src={item.google_play} className="w-[165px]" alt="" />
                  </div>
                </div>
              </div>
              <img src={item.image} alt="" className="w-full " />
            </div>

          </div>
        ))}

        {card2later?.map((item) => (
          <div key={item.id} className="bg-white rounded-lg fixed  px-2 pb-6 flex flex-col items-center text-center">
            <img src={item.image} className="w-full" alt="" />
            <div className="text-[#2d3846] text-4xl font-bold mt-4">{item.name}</div>
            <p className="text-[#6b7f99] text-lg mt-4 leading-7">{item.desc}</p>
            <button className="w-[223px] h-12 text-white bg-[#40BF9C] text-lg font-bold rounded mt-6 hover:bg-[#4febbe]">
              {item.btn}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
