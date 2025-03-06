import styled from "styled-components";
import StartSpeechBubble from "../common/speechBubble/StartSpeechBubble";
import ElseSpeechBubble from "../common/speechBubble/ElseSpeechBubble";
import Menu from "../common/menu/Menu";

const BodyWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 55px 20px 10px 10px;
  visibility: hidden;
`;

const menuList = [
  { link: "/ticko/basic/1", title: "주식이란?", padding: "7px 10px" },
  { link: "/ticko/basic/2", title: "주주란?", padding: "7px 10px" },
  {
    link: "/ticko/basic/3",
    title: "주권이란?",
    padding: "7px 10px",
  },
  {
    link: "/ticko/basic/4",
    title: "주식의 보유와 양도",
    padding: "7px 4px",
  },
  {
    link: "/ticko/basic/5",
    title: "거래시장의 분류",
    padding: "7px 4px",
  },
  {
    link: "/ticko/basic/6",
    title: "보통주와 우선주",
    padding: "7px 12px",
  },
  {
    link: "/ticko/basic/7",
    title: "세금과 양도세",
    padding: "7px 12px",
  },
  { link: "/ticko/basic/8", title: "공모", padding: "7px 15px" },
  { link: "/ticko/basic/9", title: "증자", padding: "7px 15px" },
  { link: "/ticko/basic/10", title: "감자", padding: "7px 15px" },
  { link: "/ticko/basic/11", title: "펀드", padding: "7px 15px" },
  {
    link: "/ticko/basic/12",
    title: "인덱스펀드",
    padding: "7px 22px",
  },
  { link: "/ticko/basic/13", title: "ETF", padding: "7px 18px" },
  { link: "/ticko/basic/14", title: "지수", padding: "7px 18px" },
  {
    link: "/ticko/basic/15",
    title: "주식투자 시작하기",
    padding: "7px 10px",
  },
  {
    link: "/ticko/basic/16",
    title: "종목 선택하기",
    padding: "7px",
  },
];

export default function WordBody() {
  return (
    <BodyWrap>
      <StartSpeechBubble context="주식 기초 지식을 골랐구나!"></StartSpeechBubble>
      <ElseSpeechBubble
        context="아래 항목 중에서 어떤 게 궁금한지 알려줘~"
        animationDelay="1s"
      ></ElseSpeechBubble>
      <Menu list={menuList} animationDelay="2s"></Menu>
    </BodyWrap>
  );
}
