import styled from "styled-components";

const SpeechWrap = styled.div`
  border: 2px solid #b2c4df;
  border-radius: 0 15px 15px 15px;
  padding: 11px 15px;
  max-width: 245px;
`;

const StyledContext = styled.div`
  font-size: 16px;
`;

export default function SpeechBubble({ context }) {
  return (
    <SpeechWrap>
      <StyledContext>{context}</StyledContext>
    </SpeechWrap>
  );
}
