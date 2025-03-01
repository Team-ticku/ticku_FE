import styled from "styled-components";

const CharIntroduceWrap = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const Character = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background-color: #b9b9b9;
  text-align: center;
  line-height: 220px;
`;

const Introduce = styled.div`
  /* wrap의 gap 속성 StyledP 적용 방지 */
`;
const StyledP = styled.p`
  font-size: 18px;
  text-align: center;
  /* font-weight: bold; */
  margin: 10px;
`;

export default function CharIntroduce() {
  return (
    <CharIntroduceWrap>
      <Character>캐릭터 이미지 배치 예정</Character>
      <Introduce>
        <StyledP>안녕! 나는 티코야~</StyledP>
        <StyledP>이해가 잘 가지 않는 게 있다면</StyledP>
        <StyledP> 내가 알려줄게! </StyledP>
        <StyledP>뭐가 궁금해서 왔어?</StyledP>
      </Introduce>
    </CharIntroduceWrap>
  );
}
