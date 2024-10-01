import React from "react";
import {
  Card,
  Wrapper,
  WrapperBox,
  Image,
  Title,
  Text,
  Btn,
  Btn2,
  Wrappdesc,
  WrapperChild,
  Card2,
  WrapItem,
  Card2Desc,
  ImgConteiner,
  ImgConteinerItem1,
  ImgConteinerItem2,
  ImgConteinerItem3,
} from "./style";
import { card2, card2later, CardsData } from "../../Utils/coruselData";

function Cards() {
  return (
    <Wrapper>
      <WrapperBox>
        {CardsData?.map((item) => (
          <Card key={item.id}>
            <Image src={item.image} />
            <Wrappdesc>
              <div>
                <Title>{item.name}</Title>
                <Text>{item.desc}</Text>
              </div>
              <Btn>{item.btn}</Btn>
            </Wrappdesc>
          </Card>
        ))}
      </WrapperBox>

      <WrapperChild>
        {card2?.map((item) => (
          <WrapItem key={item.id}>
            <Card2>
              <div>
                <Title>{item.name}</Title>
                <Card2Desc>{item.desc}</Card2Desc>
                <h2 style={{ margin: "15px 0px" }}>{item.qrname}</h2>
                <ImgConteiner>
                  <ImgConteinerItem1 src={item.childImg1} alt="" />
                  <div>
                    <ImgConteinerItem2 src={item.appstoe} alt="" />
                    <ImgConteinerItem3 src={item.google_play} alt="" />
                  </div>
                </ImgConteiner>
              </div>
              <Image src={item.image} alt="" />
            </Card2>
          </WrapItem>
        ))}

        {card2later?.map((item) => (
          <Card key={item.id}>
            <ImgConteinerItem2 src={item.image} />
            <Title>{item.name}</Title>
            <Text>{item.desc}</Text>
            <Btn2>{item.btn}</Btn2>
          </Card>
        ))}
      </WrapperChild>
    </Wrapper>
  );
}

export default Cards;
