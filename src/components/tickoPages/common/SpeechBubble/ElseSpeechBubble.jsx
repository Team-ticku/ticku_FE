import styled from "styled-components";
import SpeechBubble from "./SpeechBubble";

const BubbleWrap = styled.div`
  display: flex;
  gap: 5px;
`;
const Dummy = styled.div`
  display: hidden;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  flex-shrink: 0;
`;

export default function ElseSpeechBubble({ context, animationDelay }) {
  return (
    <BubbleWrap>
      <Dummy></Dummy>
      <SpeechBubble
        context={context}
        animationDelay={animationDelay}
      ></SpeechBubble>
    </BubbleWrap>
  );
}
