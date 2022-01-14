import * as React from "react";
import styled from "styled-components";
import CloseButton from "../buttons/closeButton";
import DeleteButton from "../buttons/deleteButton";
import Button from "../buttons/button"

const MainCont = styled.div`
  width: 380px;
  height: 900px;
  background-color: #33b0cc;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
`;

const CardText = styled.p`
  font-weight: ${(props) => props.fWeight};
  color: white;
  font-size:20px;
`;

const TextCont = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  flex-basis: 200px;
`;

const TextSubCont = styled.div`
  margin-bottom: -20px;
  flex-basis:80px;
`;

const RowCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const IconCont = styled.div`
  flex-basis: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:10px;
`;

// const CloseCont = styled.div`
//   position:absolute;
//   left:830px;

// `

export default function Card({
  text = "Date",
  header = "Title",
  header1 = "Item Title",
  header2 = "Expiry Date",
  fWeight = 900,
  onClickClose = () => {}
}) {
  return (
    <MainCont>
      <TextCont>
        <TextSubCont>
          <RowCont>
            <CardText fWeight={fWeight}>{header1}</CardText>
            <CloseButton onClick={onClickClose} />
          </RowCont>
          <form>
            <input id='Item Title' type='text' placeholder="Add New Item"></input>
          </form>
        </TextSubCont>
        <TextSubCont>
          <CardText>{header2}</CardText>
          <form>
            <input id='Expiry Date' type='date'></input>
          </form>
        </TextSubCont>

      </TextCont>

      <IconCont>
        <DeleteButton width={"55px"} height={"55px"}/>
        <Button width={"130px"} height={"55px"}/>
      </IconCont>
    </MainCont>
  );
}
