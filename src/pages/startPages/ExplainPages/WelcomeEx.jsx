import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  width: 390px;
  height: 792px;
  justify-content: center;
  padding-top: 170px;
  box-sizing: border-box;
`;

const Logo = styled.div`
  border-radius: 50%;
  background-color: #b2b2b2;
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
`;

export default function WelcomeEx() {
  return (
    <Wrap>
      <Logo>로고</Logo>
    </Wrap>
  );
}
