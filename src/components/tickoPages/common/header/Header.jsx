import styled from "styled-components";
import BackButton from "../../../common/BackButton";
import CharacterProfile from "./CharacterProfile";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <BackButton width="30px" height="30px" link="/ticko" />
      <CharacterProfile />
    </HeaderContainer>
  );
}
