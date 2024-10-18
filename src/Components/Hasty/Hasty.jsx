import React from "react";
import { hastyData } from "../../Utils/coruselData";
import { Card2Desc } from "../Card/style";

function Hasty() {
  return (
    <div className="bg-white py-32">
      <div className=" px-12 sm:px-24  lg:px-64 mx-auto">
        {hastyData?.map((item) => (
          <div key={item.id}>
            <ImageContainer>
              <Image src={item.image} alt="" />
              <ImgSmall>
                <Image1 src={item.image1} alt="" />
                <P>{item.chilTitle1}</P>
              </ImgSmall>
              <Apos>"</Apos>
              <ImgSmall1>
                <Image1 src={item.image1} alt="" />
                <P>{item.chilTitle2}</P>
              </ImgSmall1>
            </ImageContainer>

            <WrapTitle>
              <H1>{item.title}</H1>
              <H3>{item.text}</H3>
            </WrapTitle>
            <Card2Desc style={{ fontSize: "18px", lineHeight: "24px" }}>
              {item.desc}
            </Card2Desc>
            <BtnWrap>
              <Btn>{item.btn}</Btn>
            </BtnWrap>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hasty;
