import styled from "styled-components";

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

// 더미 - 캐릭터 이미지 배치 공간
const DummyImage = styled.div`
  width: 35px;
  height: 35px;

  // 나중에 지워질 속성
  background-color: #c7c7c7;
  border-radius: 50%;
  font-size: 10px;
  text-align: center;
  line-height: 40px;
`;

const CharacterName = styled.div`
  font-size: 15px;
`;

export default function CharacterProfile() {
  return (
    <HeaderWrap>
      <DummyImage></DummyImage>
      <CharacterName>티코</CharacterName>
    </HeaderWrap>
  );
}
