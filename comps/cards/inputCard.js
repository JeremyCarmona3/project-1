import React from 'react';
import styled from 'styled-components';
import { FiMoreVertical } from "react-icons/fi";
const CardUI = styled.div`
  width: 372px;
  height: 75px;
  background-color: #33B0CC;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  color: #ffffff;
  padding: 0 15px;
`

export default function InputCard ({
  foodItem="item",
  onClick = () => {},
}) {
  return (
    <CardUI>
    <div>{foodItem}</div>
    <FiMoreVertical onClick={onClick}/>
    </CardUI>
  );
}