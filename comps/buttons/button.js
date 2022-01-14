import React from 'react';
import styled from 'styled-components';

const BtnCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.Width};
  height: ${props => props.Height};
  background-color: ${props => props.BgColor};
  border-radius: 17px;
`;

const BtnText = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: #FFFFFF;
`;

export default function Button({
  width = '172px',
  height = '66px',
  bgColor = '#280BB5',
  text = 'Confirm',
  onClick = () => {}
}) {
  return (
    <BtnCont
      Width={width} 
      Height={height}
      BgColor={bgColor}
      onClick={onClick}
    >
      <BtnText>{text}</BtnText>
    </BtnCont>
  );
}