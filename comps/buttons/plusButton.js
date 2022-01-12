import React from 'react';
import styled from 'styled-components';

import { AiOutlinePlus } from "react-icons/ai";


const BtnCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.Width};
  height: ${props => props.Height};
  background-color: ${props => props.BgColor};
  border-radius: ${props => props.BorderRadius};
`;

export default function PlusButton({
  width = '66px',
  height = '66px',
  bgColor = '#280BB5',
  borderRadius = '100px',
}) {
  return (
    <BtnCont
      Width={width} 
      Height={height}
      BgColor={bgColor}
      BorderRadius={borderRadius}
    >
      <AiOutlinePlus size='2em' color='#fff' />
    </BtnCont>
  );
}