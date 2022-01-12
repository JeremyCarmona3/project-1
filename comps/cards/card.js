import * as React from "react";
import styled from "styled-components";
import CloseButton from "../buttons/closeButton";
import DeleteButton from "../buttons/deleteButton";
import Button from "../buttons/button"

const MainCont = styled.div`
  width: 250px;
  height: 500px;
  background-color: #33b0cc;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
`;

const CardText = styled.p`
  font-weight: ${(props) => props.fWeight};
  color: white;
`;

const TextCont = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  flex-basis: 100px;
`;

const TextSubCont = styled.div`
  margin-bottom: -20px;
`;

const IconCont = styled.div`
  flex-basis: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:10px;
`;

const CloseCont = styled.div`
  position:absolute;
  left:220px;

`

export default function Card({
  text = "Date",
  header = "Title",
  fWeight = 900
}) {
  return (
    <MainCont>
      <TextCont>
        <TextSubCont>
          <CardText fWeight={fWeight}>{header}</CardText>
        </TextSubCont>
        <TextSubCont>
          <CardText>{text}</CardText>
        </TextSubCont>
        <CloseCont>
        <CloseButton/>
        </CloseCont>
    
      </TextCont>

      <TextCont>
        <TextSubCont>
          <CardText fWeight={fWeight}>{header}</CardText>
        </TextSubCont>
        <TextSubCont>
          <CardText>{text}</CardText>
        </TextSubCont>
      </TextCont>

      <TextCont>
        <TextSubCont>
          <CardText fWeight={fWeight}>{header}</CardText>
        </TextSubCont>
        <TextSubCont>
          <CardText>{text}</CardText>
        </TextSubCont>
      </TextCont>

      <TextCont>
        <TextSubCont>
          <CardText fWeight={fWeight}>{header}</CardText>
        </TextSubCont>
        <TextSubCont>
          <CardText>{text}</CardText>
        </TextSubCont>
      </TextCont>

      <IconCont>
        <DeleteButton width={"55px"} height={"55px"}/>
        <Button width={"130px"} height={"55px"}/>
      </IconCont>
    </MainCont>
  );
}
