import styled from "styled-components";
import BackButton from "../../../common/BackButton";
import CharacterProfile from "./CharacterProfile";

const HeaderContainer = styled.div`
  display: flex;
  width: 390px;
  position: fixed;
  background-color: white;
  align-items: center;
  padding: 5px 0;
`;

export default function Header({ link }) {
  return (
    <HeaderContainer>
      <BackButton width="30px" height="30px" link={link} />
      <CharacterProfile />
    </HeaderContainer>
  );
}
