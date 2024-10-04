import React from 'react'
import { Card, Container, ContainerItem, P, H2 } from './style'
import { H1 } from '../Hasty/style'
import { awardData } from '../../Utils/Awarddata'
function Award() {
  return (
    <Container>
      <H1>Award winning experience</H1>
      <ContainerItem>
        {awardData?.map((item) => (
          <Card key={item.id}>
            <H2>{item.title}</H2>
            <P>{item.text}</P>
          </Card>
        ))}
      </ContainerItem>
    </Container>
  )
}

export default Award