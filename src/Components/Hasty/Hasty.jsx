import React from 'react'
import { Btn, BtnWrap, Container, ContainerItem, H1, H3, WrapTitle, Image, ImageContainer, ImgSmall, Image1, P, Apos, ImgSmall1 } from './style'
import { hastyData } from '../../Utils/coruselData'
import { Card2Desc } from '../Card/style'

function Hasty() {
    return (
        <Container>
            <ContainerItem>
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
                        <Card2Desc style={{ fontSize: "18px", lineHeight: "24px" }}>{item.desc}</Card2Desc>
                        <BtnWrap>
                            <Btn>{item.btn}</Btn>
                        </BtnWrap>
                    </div>
                ))}
            </ContainerItem>
        </Container>
    )
}

export default Hasty