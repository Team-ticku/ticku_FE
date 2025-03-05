import styled from "styled-components";
import StartSpeechBubble from "../common/speechBubble/StartSpeechBubble";
import ElseSpeechBubble from "../common/speechBubble/ElseSpeechBubble";
import Menu from "../common/menu/Menu";

const BodyWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 55px 20px 10px 10px;
`;

const menuList = [
  {
    link: "/ticko/account/1",
    title: "증권 계좌 생성법",
    padding: "9px 70px",
  },
  {
    link: "/ticko/account/2",
    title: "절세 계좌",
    padding: "9px 70px",
  },
];

export default function AccountBody() {
  return (
    <BodyWrap>
      <StartSpeechBubble context="계좌를 골랐구나!"></StartSpeechBubble>
      <ElseSpeechBubble context="아래 항목 중에서 어떤 게 궁금한지 알려줘~"></ElseSpeechBubble>
      <Menu list={menuList} flexDirection="column"></Menu>
    </BodyWrap>
  );
}
