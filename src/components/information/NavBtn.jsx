import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
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

function NavBtn({ icon, text, bgColor, link, stockCode, stockName }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link === "chart") {
      if (stockCode && stockName) {
        // 차트 버튼이고, stockCode와 stockName이 있으면 /information/chart로 이동
        navigate("/information/chart", { state: { stockCode, stockName } });
      } else {
        // 차트 버튼이고, stockCode나 stockName이 없으면 /information/search로 이동
        navigate("/information/search");
      }
    } else {
      // 다른 버튼은 /information/link로 이동
      navigate("/information/" + link);
    }
  };
  return (
    <NavDiv>
      <NavComponentBtn backgroundColor={bgColor} onClick={handleClick}>
        <NavComponentImg src={icon} alt={text} />
      </NavComponentBtn>
      <NavComponentText>{text}</NavComponentText>
    </NavDiv>
  );
}

export default NavBtn;
