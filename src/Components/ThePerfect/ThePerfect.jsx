import React from 'react'
import { Cards, Container, ContainerCards, Title, Text, Btn, CardTitle,Img } from './style'
import { TheCardsData, theCardsTitle } from '../../Utils/coruselData'

function ThePerfect() {
    return (
        <Container>
            <Title>{theCardsTitle}</Title>
            <ContainerCards>
                {TheCardsData?.map((item) => (
                    <Cards key={item.id}>
                        <Img src={item.image} alt="" />
                        <CardTitle>{item.name}</CardTitle>
                        <Text>{item.desc}</Text>
                        <Btn>{item.btn}</Btn>
                    </Cards>
                ))}
            </ContainerCards>
        </Container>
    )
}

export default ThePerfect