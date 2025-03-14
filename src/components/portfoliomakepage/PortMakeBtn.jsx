import React from "react";
import styled from "styled-components";

const MakeDiv = styled.div`
  width: 390px;
  position: fixed;
  bottom: 65px;
`;

const MakeBtn = styled.button`
  width: 100%;
  background-color: #b2c4df;
  height: 60px;
  color: white;
  border: 0;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    background-color: #d3d3d3;
  }
`;

function PortMakeBtn({ onClick, disabled }) {
  return (
    <MakeDiv>
      <MakeBtn onClick={onClick} disabled={disabled}>
        제작하기
      </MakeBtn>
    </MakeDiv>
  );
}

export default PortMakeBtn;
