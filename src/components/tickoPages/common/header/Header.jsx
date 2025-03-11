import styled from "styled-components";
import BackButton from "../../../common/BackButton";
import CharacterProfile from "./CharacterProfile";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 390px;
  height: 50px;
  position: fixed;
  background-color: white;
  align-items: center;
  z-index: 1;
`;

export default function Header({ link }) {
  return (
    <HeaderContainer>
      <BackButton width="30px" height="30px" link={link} />
      <CharacterProfile />
    </HeaderContainer>
  );
}
