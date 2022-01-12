import React from 'react';
import styled from 'styled-components';

import { RiDeleteBin6Line } from "react-icons/ri";


const BtnCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.Width};
  height: ${props => props.Height};
  background-color: ${props => props.BgColor};
  border-radius: ${props => props.BorderRadius};
`;

export default function DeleteButton({
  width = '66px',
  height = '66px',
  bgColor = '#280BB5',
  borderRadius = '17px',
}) {
  return (
    <BtnCont
      Width={width} 
      Height={height}
      BgColor={bgColor}
      BorderRadius={borderRadius}
    >
      <RiDeleteBin6Line size='2em' color='#fff' />
    </BtnCont>
  );
}