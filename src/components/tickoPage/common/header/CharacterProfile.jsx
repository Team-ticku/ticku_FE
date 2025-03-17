import styled from "styled-components";

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

// 더미 - 캐릭터 이미지 배치 공간
const CharacterImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

const CharacterName = styled.div`
  font-size: 15px;
`;

export default function CharacterProfile() {
  return (
    <HeaderWrap>
      <CharacterImg src="/images/ticko_profile.png"></CharacterImg>
      <CharacterName>티코</CharacterName>
    </HeaderWrap>
  );
}
