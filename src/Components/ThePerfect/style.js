import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  padding: 70px;
`;
const Title = styled.h1`
  font-size: 64px;
  text-align: center;
  color: #2d3846;
`;
const ContainerCards = styled.div`
  border: 1px solid white;
  display: flex;
  text-align: center;
  gap: 50px;
`;
const Cards = styled.div`
  padding: 10px;
`;
const Text = styled.h1`
  color: #6b7f99;
  font-size: 20px;
  margin-top: 15px;
  line-height: 30px;
  font-weight: 400;
  margin-top: 25px;
`;
const Btn = styled.button`
  width: 223px;
  height: 48px;
  color: white;
  color: white;
  background-color: #2493df;
  font-size: 18px;
  font-weight: bold;
  border: none;
  margin-top: 25px;
  border-radius: 5px;
`;
const CardTitle = styled.h1`
  font-size: 40px;
  color: #2d3846;
`;
const Img = styled.img`
  width: 100%;
`;
export { Container, Title, ContainerCards, Cards, Text, Btn, CardTitle, Img };
