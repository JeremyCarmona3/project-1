import React from 'react';
import styled from 'styled-components';

const MainCont = styled.div`
width:250px;
height:500px;
background-color:#33B0CC;
border-radius:12px;
display:flex;

`

const CardText = styled.text`
`

const TextCont = styled.div`

`
export default function Card ({
  text="haha"
}) {
  return <MainCont>
      <TextCont>
      <CardText>{text}</CardText>
      <CardText>{text}</CardText>
    </TextCont>
  </MainCont>
}