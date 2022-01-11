import React from 'react';
import styled from 'styled-components';

const CardUI = styled.div`
width: 372px;
height: 75px;
background-color: #CC337C;
color: #ffffff;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 12px;
`
const CardHeader = styled.text`
font-size: 20px;
display: flex;
justify-content: flex-start;
align-items: baseline;
margin: 15px;
padding-top: 5px;
`

const CardText = styled.text`
font-size: 18px;
display: flex;
justify-content: flex-end;
align-items: baseline;
margin: 10px;
`

export default function ExpCard () {
  return (
  <CardUI>
    <CardHeader>Bread</CardHeader>
    <CardText>Days</CardText>
  </CardUI>
  );
};