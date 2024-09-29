import React from 'react'
import { Card, Wrapper, WrapperBox, Image, Title, Text, Btn, Wrappdesc, WrapperChild } from './style'
import { CardsData } from '../../Utils/coruselData'

function Cards() {
    return (
        <Wrapper>
            <WrapperBox>

                {CardsData?.map((item) => (
                    <Card>
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
                <div>
                    <div>1</div>
                    <div>2</div>
                </div>
                <div>
                    salom
                </div>
            </WrapperChild>
        </Wrapper>
    )
}

export default Cards