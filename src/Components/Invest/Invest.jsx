import React from 'react'
import { Container, Title, TitleIcon, Card, H1, CardItem, CardNum, Carddesc, H2, Subtext, Subtext2, Btn, Box } from './style'
import { InvetData, subtext, subtext2 } from '../../Utils/coruselData'
import { NavLink } from 'react-router-dom';
import { HiCheck } from "react-icons/hi2";
function Invest() {
    let [{ title }] = InvetData;
    let [{ titleIcon }] = InvetData;
    let [{ btn }] = InvetData;
    return (
        <Container>
            <Title>
                <h1 style={{ fontSize: '64px' }}>{title}</h1>
                <TitleIcon>{titleIcon}</TitleIcon>
            </Title>
            <Card>
                {InvetData?.map((item) => (
                    <CardItem key={item.id}>
                        <H1>{item?.cardTitle}</H1>
                        <CardNum>{item.cardNum}</CardNum>
                        <Carddesc>{item.carDesc}</Carddesc>
                    </CardItem>
                ))}
            </Card>
            {subtext?.map((item) => (
                <Subtext key={item.id}>
                    <H2><HiCheck /> {item.text1}</H2>
                    <H2><HiCheck />{item.text2}</H2>
                    <H2><HiCheck />{item.text3}</H2>
                    <H2><HiCheck />{item.text4}</H2>
                </Subtext>
            ))}
            {subtext2.map((item) => (
                <Subtext2 key={item.id}>
                    <H2><HiCheck /> {item.text1}</H2>
                    <H2><HiCheck />{item.text2}</H2>
                    <H2><HiCheck />{item.text3}</H2>
                </Subtext2>
            ))}
            <Box>
                <NavLink to={'account/sign-in'}>
                    <Btn>{btn}</Btn>
                </NavLink>
            </Box>
        </Container>
    )
}

export default Invest