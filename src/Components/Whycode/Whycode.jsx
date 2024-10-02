import React from 'react'
import { Btn, Card, CardWrapp, Container, Span, Title,Img ,H1} from './atyle'
import { Card2Desc } from '../Card/style'
import './style.css'
import { NavLink } from 'react-router-dom'
import { WhyData } from '../../Utils/coruselData'

function Whycode() {
  return (
    <Container>
      <Title>
        Why <Span>code <div className='slesh'></div></Span>
      </Title>
      <CardWrapp>
            {WhyData?.map((item)=>(
              <Card key={item.id}>
                <Img src={item.image} alt="" />
                <H1>{item.name}</H1>
                <Card2Desc>{item.desc}</Card2Desc>
              </Card>
            ))}
      </CardWrapp>
      <NavLink to={'account/sign-in'}><Btn>I want to code</Btn></NavLink>
    </Container>
  )
}

export default Whycode