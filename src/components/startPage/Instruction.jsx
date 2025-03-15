import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    visibility: visible;
  }
  to {
    opacity: 1;
    visibility: visible;
  }
`;

const Wrap = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: ${(props) => props.flexDirection || "column"};
  position: absolute;
  top: ${(props) => props.top || "auto"};
  bottom: ${(props) => props.bottom || "auto"};
  left: ${(props) => props.left || "auto"};
  right: ${(props) => props.right || "auto"};

  /* 애니메이션 */
  animation-duration: 0.5s;
  animation-timing-function: ease-in;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  animation-delay: ${(props) => props.animationDelay || "0s"};
`;

const Character = styled.div`
  background-color: #74a9d8;
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;
const Explain = styled.div`
  background-color: white;
  color: black;
  box-sizing: border-box;
  border-radius: 20px;
  border: 1px solid #b2c4df;
  padding: 13px;
  max-width: ${(props) => props.maxWidth || "260px"};
`;
const ExSpeech = styled.div`
  display: flex;
  align-items: ${(props) => props.alignItems || "start"};
  gap: 10px;
`;
const ExArea = styled.div`
  align-self: ${(props) => props.alignSelf || "flex-start"};
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "100px"};
  border: 4px dashed #ffffff;
  border-radius: 20px;
`;

export default function Instruction({
  top,
  bottom,
  left,
  right,
  context,
  animationDelay,
  flexDirection,
  width,
  height,
  alignSelf,
  alignItems,
  maxWidth,
}) {
  return (
    <Wrap
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      animationDelay={animationDelay}
      flexDirection={flexDirection}
    >
      <ExArea width={width} height={height} alignSelf={alignSelf}></ExArea>
      <ExSpeech alignItems={alignItems}>
        <Character />
        <Explain maxWidth={maxWidth}>{context}</Explain>
      </ExSpeech>
    </Wrap>
  );
}
