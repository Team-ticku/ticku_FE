import WelcomeEx from "./ExplainPages/WelcomeEx";
import MainPage from "../mainpage/MainPage";
import Information from "../InformationPages/InformationPage";
import StockcalenPages from "../stockcalendarPages/StockcalenPages";
import PortfolioMainPage from "../portfolioPages/PortfolioMainPage";
import TickoPage from "../tickoPages/TickoPage";
import PostListPage from "../communityPages/postListPage/PostListPage";
import Instruction from "../../components/startPage/Instruction";

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
// 웰컴 문구
const Welcome = styled.div`
  position: absolute;
  top: 400px;
  left: 50px;
  font-size: 50px;
  color: #fffffff2;
  /* 애니메이션 */
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  animation-delay: "2s";
`;

// 각 설명 페이지 배열 (각 페이지 + 설명 문구로 구성된 페이지)
const comList = [
  {
    page: <WelcomeEx />,
    instruction: <Welcome>Welcome to Ticku!</Welcome>,
  },
  {
    page: <MainPage display="none" />,
    instruction: [
      <Instruction
        key="Main_1"
        top="12px"
        left="36px"
        context="여기서 원하는 기업을 찾아볼 수 있어!"
        animationDelay="1s"
        width="310px"
        height="60px"
      ></Instruction>,
      <Instruction
        key="Main_2"
        bottom="90px"
        left="35px"
        context="내가 설정한 대표 포트폴리오가 여기에 뜰 거야!"
        animationDelay="3s"
        flexDirection="column-reverse"
        width="315px"
        height="195px"
        alignItems="end"
      ></Instruction>,
    ],
  },
  {
    page: <Information display="none" />,
    instruction: (
      <Instruction
        key="Infor_1"
        top="100px"
        left="20px"
        context="검색한 기업에 대해 알고 싶은 정보를 한 눈에 볼 수 있어!"
        animationDelay="1s"
        width="350px"
        height="110px"
        maxWidth="300px"
      ></Instruction>
    ),
  },
  {
    page: <StockcalenPages display="none" />,
    instruction: [
      <Instruction
        key="Calen_1"
        top="30px"
        left="15px"
        context="날짜를 선택해봐~"
        animationDelay="1s"
        width="350px"
        height="300px"
        flexDirection="column-reverse"
        alignItems="end"
      ></Instruction>,
      <Instruction
        key="Calen_2"
        bottom="260px"
        left="5px"
        context="그 날짜가 배당일인 기업 목록이 나올 거야!"
        animationDelay="2s"
        width="140px"
        height="40px"
        alignItems="end"
      ></Instruction>,
    ],
  },
  {
    page: <PortfolioMainPage display="none" />,
    instruction: [
      <Instruction
        key="Portfolio_1"
        top="75px"
        left="36px"
        context="여길 누르면 너만의 포트폴리오를 만들 수 있어~"
        animationDelay="1s"
        width="310px"
        height="260px"
        flexDirection="column-reverse"
        alignItems="end"
      ></Instruction>,
      <Instruction
        key="Portfolio_2"
        bottom="280px"
        left="35px"
        context="만든 포트폴리오를 저장하고 싶으면 꼭 저장하기를 눌러줘!"
        animationDelay="4s"
        flexDirection="column-reverse"
        width="150px"
        height="60px"
        alignItems="end"
      ></Instruction>,
      <Instruction
        key="Portfolio_3"
        bottom="200px"
        left="36px"
        context="만든 포트폴리오가 마음에 들지 않으면 삭제할 수 있어!"
        animationDelay="7s"
        width="150px"
        height="60px"
        alignSelf="flex-end"
      ></Instruction>,
    ],
  },
  {
    page: <PostListPage display="none" />,
    instruction: [
      <Instruction
        key="PostList_1"
        top="110px"
        left="20px"
        context="얘기하고 싶은 주제를 선택해서 글을 작성해봐~"
        animationDelay="1s"
        width="60px"
        height="40px"
      ></Instruction>,
      <Instruction
        key="PostList_2"
        bottom="270px"
        right="10px"
        context="실시간으로 다른 사람들과 소통할 수 있어!"
        animationDelay="3s"
        width="50px"
        height="40px"
        alignSelf="flex-end"
      ></Instruction>,
    ],
  },
  {
    page: <TickoPage display="none" />,
    instruction: (
      <Instruction
        key="Portfolio_1"
        bottom="90px"
        left="20px"
        context="주식 초보가 이해하기 쉽게 티코가 설명해줄게! 궁금한 게 생기면 날 보러와~"
        animationDelay="1s"
        width="345px"
        height="280px"
        maxWidth="285px"
        flexDirection="column-reverse"
        alignItems="end"
      ></Instruction>
    ),
  },
];

import ExPageForm from "../../components/startPage/ExPageForm";

export default function ExFullPages({ curPage, transition, insKey }) {
  const exPageList = comList.map((com, idx) => (
    <ExPageForm
      page={com.page}
      instruction={com.instruction}
      key={idx}
      curPage={curPage}
      transition={transition}
      insKey={insKey}
    ></ExPageForm>
  ));
  return exPageList;
}
