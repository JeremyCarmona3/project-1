import React from 'react';
import styled from 'styled-components';

// import { FiMoreVertical } from "react-icons/fi";


const BtnCont = styled.div`
  align-items: center;
  justify-content: center;
  width: ${props => props.Width};
  height: ${props => props.Height};
  background-color: ${props => props.BgColor};
  border-radius: 17px;
`;

const BtnText = styled.text`
  font-weight: 700;
  font-size: 20px;
  color: #FFFFFF;
`;

export default function SmallButton({
  width = '66px',
  height = '66px',
  bgColor = '#280BB5',
}) {
  return (
    <BtnCont
      Width={width} 
      Height={height}
      BgColor={bgColor}
    >
      <BtnText></BtnText>
    </BtnCont>
  );
}