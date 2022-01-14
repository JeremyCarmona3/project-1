import React from 'react';
import styled from 'styled-components';

import { RiCloseFill } from "react-icons/ri";


const BtnCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.Width};
  height: ${props => props.Height};
  border-radius: 17px;
`;

export default function CloseButton({
  width = '66px',
  height = '66px',
  onClick = () => {}
}) {
  return (
    <BtnCont
      Width={width} 
      Height={height}
      onClick={onClick}
    >
      <RiCloseFill size='2em' color='#FFF' />
    </BtnCont>
  );
}