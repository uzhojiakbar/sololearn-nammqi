import styled from "styled-components";

const Wrapper = styled.div`
background-color: #EAF0F3;
`
const WrapperBox = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 30px;
    margin: 0px 50px;
`

const Card = styled.div`
    background: white;
    border-radius: 8px;
    padding: 8px 32px 32px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Image = styled.img`
    width: 100%;
`
const Title = styled.div`
    color: #2D3846;
    font-size: 40px;
    margin-top: 15px;
    font-weight: bold;
`
const Text = styled.p`
    color: #6B7F99;
    font-size: 20px;
    margin-top: 15px;
    line-height: 30px;
`
const Btn = styled.button`
    width: 223px;
    height: 48px;
    color: white;
    color: white;
    background-color: #2493DF;
    font-size: 18px;
    font-weight: bold;
    border: none;
    margin-top: 25px;
    border-radius: 5px;
`
const Wrappdesc = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
`
const WrapperChild = styled.div`
    display: grid;
    display: flex;
    gap: 30px;
    margin:20px 50px;
`

export {
    Wrapper,
    WrapperBox,
    Card,
    Image,
    Btn,
    Title,
    Text, 
    Wrappdesc,
    WrapperChild,
}