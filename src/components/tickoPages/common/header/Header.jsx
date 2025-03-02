import styled from "styled-components";
import BackButton from "../../../common/BackButton";
import CharacterProfile from "./CharacterProfile";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  padding-top: 10px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <BackButton />
      <CharacterProfile />
    </HeaderContainer>
  );
}
