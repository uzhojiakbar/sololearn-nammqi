import styled from "styled-components";


const CoruselBox = styled.div`  

margin: 0 50px;
padding: 30px;
background-color: white;
`
const Title = styled.h1`
    text-align: center;
    font: 40px;
`
const Coruselwrap = styled.div`
    width: 100px;
    padding: 10px;
    overflow: hidden;
    overflow: auto;
`
const CoruselCard = styled.div`
    background: #EAF0F3;
    padding: 24px 8px 16px;
    border-radius: 8px;
    width: 100%;
    height: 184px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    margin-top: 20px;
`
const ImagWidth = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 100%;
`
const Cardtext = styled.h2`
    font-size: 20px;
    color: #2D3846;

`
const Wrapper = styled.div`
    background-color:#EAF0F3 ;
    padding: 10px 0px 100px 0px;
`
export {
    CoruselBox,
    Title,
    CoruselCard,
    Coruselwrap,
    ImagWidth,
    Cardtext,
    Wrapper,
}