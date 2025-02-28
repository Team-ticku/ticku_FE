import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";

const NavDiv = styled.div`
  padding-top: 30px;
  cursor: pointer;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 8px;
  align-items: center;
`;

const NavComponentBtn = styled.button`
  width: 60px;
  height: 60px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;
const NavComponentImg = styled.img`
  width: 30px;
  height: 30px;
`;

const NavComponentText = styled.p`
  text-align: center;
  margin: 8px 0;
`;

function NavBtn({ icon, text, bgColor, onClick }) {
  return (
    <NavDiv>
      <NavComponentBtn backgroundColor={bgColor} onClick={onClick}>
        <NavComponentImg src={icon} />
      </NavComponentBtn>
      <NavComponentText>{text}</NavComponentText>
    </NavDiv>
  );
}

export default NavBtn;
