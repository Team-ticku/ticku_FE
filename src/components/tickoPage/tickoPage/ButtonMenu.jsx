import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 2px solid #0d1b2a;
  padding: 10px 15px 0 15px;
  gap: 20px;
  margin: 20px 30px 30px 30px;
  background-color: #0d1b2a;
`;

const MenuContainer = styled.div`
  text-align: center;
  font-size: 18px;
  padding: 18px;
  border-radius: 20px;
  border: 1px solid #1c2f43a5;
  background-color: #1c2f43a5;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fffffff4;
`;

export default function ButtonMenu() {
  return (
    <MenuWrap>
      <StyledLink to="/ticko/basic">
        <MenuContainer>주식 기초 지식</MenuContainer>
      </StyledLink>
      <StyledLink to="/ticko/chart">
        <MenuContainer>차트</MenuContainer>
      </StyledLink>
      <StyledLink to="/ticko/account">
        <MenuContainer>절세 계좌</MenuContainer>
      </StyledLink>
    </MenuWrap>
  );
}
