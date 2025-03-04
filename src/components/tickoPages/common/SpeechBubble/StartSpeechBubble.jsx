import styled from "styled-components";
import SpeechBubble from "./SpeechBubble";

const StartWrap = styled.div`
  display: flex;
  gap: 5px;
`;
const Character = styled.div`
  background-color: #c0c0c0;
  border-radius: 50%;
  width: 45px;
  height: 45px;
`;
const StartSpeech = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
const StartName = styled.div`
  font-size: 12px;
`;

export default function StartSpeechBubble() {
  return (
    <StartWrap>
      <Character></Character>
      <StartSpeech>
        <StartName>티코</StartName>
        <SpeechBubble context="주식 기초 지식을 골랐구나!"></SpeechBubble>
      </StartSpeech>
    </StartWrap>
  );
}
