import styled from "styled-components";

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

export default function ButtonMenu() {
  return (
    <MenuWrap>
      <MenuContainer>주식 기초 지식</MenuContainer>
      <MenuContainer>차트</MenuContainer>
      <MenuContainer>계좌</MenuContainer>
    </MenuWrap>
  );
}
