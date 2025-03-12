import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 1px solid #b2c4df;
  padding: 20px;
  gap: 20px;
  margin: 20px 30px 30px 30px;
`;

const MenuContainer = styled.div`
  text-align: center;
  font-size: 18px;
  padding: 18px;
  border-radius: 20px;
  border: 1px solid #b2c4df;
  background-color: rgba(178, 196, 223, 0.2);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
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
