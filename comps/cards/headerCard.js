import React from 'react';
import styled from 'styled-components';

const CardUI = styled.div`
  width: 416px;
  height: 70px;
  display: flex;
  align-items: center;
  background-color: #280BB5;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
`
const CardText = styled.text`
  font-size: 24px;
  color: #ffffff;
  padding-left: 10px;
`

export default function HeaderCard ({text="Your Items"}) {
  return (
  <CardUI>
    <CardText>{text}</CardText>
  </CardUI>
  );
}