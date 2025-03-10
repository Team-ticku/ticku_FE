import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: rgba(178, 196, 223, 0.2);

  padding: 20px 10px;
  border-radius: 10px;
  border: none;
  margin: 0 10px;
  width: 140px;
  height: 50px;
  text-align: center;
  line-height: 13px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 40px;
`;

const PortButtons = () => {
  return (
    <ButtonContainer>
      <Button>저장하기</Button>
      <Button>삭제하기</Button>
    </ButtonContainer>
  );
};

export default PortButtons;
