import styled from "styled-components";
import StartSpeechBubble from "../common/speechBubble/StartSpeechBubble";
import ElseSpeechBubble from "../common/speechBubble/ElseSpeechBubble";
import ImgMenu from "./ImgMenu";

const BodyWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 55px 20px 10px 10px;
`;

const menuList = [
  {
    link: "/ticko/chart/2",
    title: "상승형",
    padding: "15px",
    src: "/images/basicChartPage/rise.png",
  },
  {
    link: "/ticko/chart/3",
    title: "하락형",
    padding: "15px",
    src: "/images/basicChartPage/fall.png",
  },
  {
    link: "/ticko/chart/4",
    title: "장대양봉",
    padding: "15px",
    src: "/images/basicChartPage/longrise.png",
  },
  {
    link: "/ticko/chart/5",
    title: "장대음봉",
    padding: "15px",
    src: "/images/basicChartPage/longfall.png",
  },
];

export default function ChartBody() {
  return (
    <BodyWrap>
      <StartSpeechBubble context="차트를 골랐구나!"></StartSpeechBubble>
      <ElseSpeechBubble context="차트 중에서도 캔들스틱 차트에 대해 설명해줄게!"></ElseSpeechBubble>
      <ElseSpeechBubble context="아래 항목 중에서 어떤 게 궁금한지 알려줘~"></ElseSpeechBubble>
      <ImgMenu list={menuList}></ImgMenu>
    </BodyWrap>
  );
}
