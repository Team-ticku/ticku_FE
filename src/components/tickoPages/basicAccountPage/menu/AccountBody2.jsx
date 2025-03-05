import styled from "styled-components";
import StartSpeechBubble from "../../common/speechBubble/StartSpeechBubble";
import ElseSpeechBubble from "../../common/speechBubble/ElseSpeechBubble";
import Menu from "../../common/menu/Menu";

const BodyWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 55px 20px 10px 10px;
`;

const menuList = [
  {
    link: "/ticko/account/2_1",
    title: "ISA",
    padding: "9px 100px",
  },
  {
    link: "/ticko/account/2_2",
    title: "퇴직 연금",
    padding: "9px 100px",
  },
  {
    link: "/ticko/account/2_3",
    title: "개인 연금",
    padding: "9px 100px",
  },
];

export default function AccountBody2() {
  return (
    <BodyWrap>
      <StartSpeechBubble context="절세 계좌를 골랐구나!"></StartSpeechBubble>
      <ElseSpeechBubble context="아래 항목 중에서 어떤 게 궁금한지 알려줘~"></ElseSpeechBubble>
      <Menu list={menuList} flexDirection="column"></Menu>
    </BodyWrap>
  );
}
