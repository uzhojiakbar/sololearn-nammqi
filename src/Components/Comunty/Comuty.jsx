import React from 'react'
import { Box1, Box1Img, Box2, Box2Img, Container, Container_Item, Name, Num, Wrapper,P } from './style'
import { Btn2, Card2Desc, ImgConteinerItem2, Title } from '../Card/style'
import { box1Img, CommunityData, data } from '../../Utils/coruselData'
import { NavLink } from 'react-router-dom'

function Comuty() {
    return (
        <section>

            <Container>
                <Box1>
                    {box1Img.map((item) => (
                        <Box1Img key={item.id} width={item.width} type="rounded" src={item.image} />
                    ))}
                </Box1>
                <Box2>{CommunityData?.map((item) => (
                    <div key={item.id}>
                        <Container_Item >
                            <Title>{item.title}</Title>
                            <Num>{item.num}</Num>
                            <Card2Desc>{item.desc}</Card2Desc>
                            <NavLink to={'/account/register'}>
                                <Btn2>{item.btn}</Btn2>
                            </NavLink>
                            <ImgConteinerItem2 src={item.video} alt="video " />
                        </Container_Item>
                    </div>
                ))}
                </Box2>
                <Box1>
                    {box1Img.map((item) => (
                        <Box2Img key={item.id} width={item.width} type="rounded" src={item.image} />
                    ))}
                </Box1>
            </Container>
            <Wrapper>
                {data?.map((item)=>(
                    <div key={item.id}>
                        <Name>{item.name} <P>{item.text2}</P></Name>
                    </div>
                ))}
            </Wrapper>
        </section>
    )
}

export default Comuty