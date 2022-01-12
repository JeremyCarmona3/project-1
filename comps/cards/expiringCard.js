import React from 'react';
import styled from 'styled-components';

const CardUI = styled.div`
width: 372px;
height: 75px;
background-color: #CC337C;
color: #ffffff;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 12px;
position: relative;
`
const CardHeader = styled.text`
font-size: 20px;
display: flex;
justify-content: flex-start;
align-items: baseline;
position: absolute;
top: 5px;
left: 15px;
`

const CardText = styled.text`
font-size: 18px;
display: flex;
justify-content: flex-end;
align-items: baseline;
position: absolute;
bottom: 5px;
right: 15px;
`

export default function ExpCard ({headerText="Bread",expiryDate="0 days"} ) {
  return (
  <CardUI>
    <CardHeader>{headerText}</CardHeader>
    <CardText>{expiryDate}</CardText>
  </CardUI>
  );
};