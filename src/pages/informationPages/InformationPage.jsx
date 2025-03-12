// InformationPage.jsx
import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import BottomNavBar from "../../components/common/bottomNavBars/BottomNavBar";
import Navigation from "../../components/information/Navigation";
import InfoFirst from "../../components/information/InfoFirst";
import {
  Routes,
  Route,
  useLocation,
  Outlet,
  useNavigate,
  Navigate,
} from "react-router-dom";
import TopScrollBtn from "../../components/common/TopScrollBtn";
import Chart from "./Chart";
import Finance from "./Finance";
import VolumePage from "./Volume";
import DividendPage from "./DividendPage";
import Result from "./Result";
import NewsPage from "./NewsPage";
import Search from "./Search";

const Wrap = styled.div`
  width: 390px;
`;

const ContentWrapper = styled.div`
  overflow-y: auto;
  height: calc(100vh);
  position: relative;
  padding-bottom: 100px;
`;

// Search 컴포넌트를 감싸는 div 추가 (스타일링 목적)
const SearchContainer = styled.div`
  /* padding: 10px; */
  /* background-color: #f8f9fa; */
  /* border-bottom: 1px solid #dee2e6; */
`;

function Information({ display }) {
  const contentContainerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // ... (financeData, volumeData, dividendData, yearlyData, quarterlyData, newsData는 이전과 동일) ...
  const financeData = {
    ceo: "한종희", // 대표 이사
    establishedDate: "1969.01.13", // 설립일
    stockCode: "005930", //종목 코드
    homepage: "www.samsung.com/sec", // 홈페이지
  };

  // 거래량 데이터
  const volumeData = [
    {
      date: "02.21",
      closingPrice: "126,782원",
      changeRate: "+5.18%",
      volume: "15,128,831",
    },
    {
      date: "02.20",
      closingPrice: "120,535원",
      changeRate: "+0.40%",
      volume: "5,015,229",
    },
    {
      date: "02.19",
      closingPrice: "120,045원",
      changeRate: "+1.29%",
      volume: "5,948,149",
    },
    {
      date: "02.18",
      closingPrice: "118,505원",
      changeRate: "+5.72%",
      volume: "8,712,148",
    },
    {
      date: "02.14",
      closingPrice: "112,086원",
      changeRate: "-1.21%",
      volume: "9,875,485",
    },
    {
      date: "02.13",
      closingPrice: "113,467원",
      changeRate: "-3.61%",
      volume: "10,809,249",
    },
    {
      date: "02.12",
      closingPrice: "117,728원",
      changeRate: "-2.32%",
      volume: "6,427,373",
    },
    {
      date: "02.11",
      closingPrice: "115,238원",
      changeRate: "-2.32%",
      volume: "6,427,373",
    },
  ];

  // 배당 데이터
  const dividendData = [
    {
      year: "2024",
      dividendPrice: "1,446",
      dividendRate: "2.72%",
    },
    {
      year: "2023",
      dividendPrice: "1,444",
      dividendRate: "1.84%",
    },
    {
      year: "2022",
      dividendPrice: "1,444",
      dividendRate: "2.61%",
    },
  ];

  //실적 연간 데이터
  const yearlyData = [
    {
      category: "매출액(억)",
      2023: "2,589,354",
      2022: "3,022,314",
      2021: "2,796,048",
    },
    {
      category: "영업이익(억)",
      2023: "65,669",
      2022: "433,766",
      2021: "516,339",
    },
    {
      category: "순이익(억)",
      2023: "154,871",
      2022: "556,541",
      2021: "399,074",
    },
  ];

  // 실적 분기 데이터
  const quarterlyData = [
    {
      category: "매출액(억)",
      "2023Q4": "677,799",
      "2023Q3": "674,047",
      "2023Q2": "600,055",
      "2023Q1": "637,454",
    },
    {
      category: "영업이익(억)",
      "2023Q4": "28,247",
      "2023Q3": "24,336",
      "2023Q2": "6,685",
      "2023Q1": "6,402",
    },
    {
      category: "순이익(억)",
      "2023Q4": "63,178",
      "2023Q3": "174,995",
      "2023Q2": "156,268",
      "2023Q1": "110,430",
    },
  ];

  const newsData = [
    {
      title: "코스피, 개인·기관 순매수에 강보합 마감…",
      content: "코스피가 장 초반 하락세를 딛고...",
      hasImage: true,
      image: "../../public/images/information/NewsSampleImage.png", // 실제 이미지 URL
      sourceName: "동아일보",
      sourceImage: "../../public/images/information/dongaLogo.png", // 실제 로고 URL
      defaultBookmarked: false,
    },
    {
      title: "코스피, 개인·기관 순매수에 강보합 마감…",
      content: "코스피가 장 초반 하락세를 딛고...",
      hasImage: true,
      image: "../../public/images/information/NewsSampleImage.png", // 실제 이미지 URL
      sourceName: "동아일보",
      sourceImage: "../../public/images/information/dongaLogo.png", // 실제 로고 URL
      defaultBookmarked: false,
    },

    // ... 추가 뉴스 기사 데이터 ...
  ];

  useEffect(() => {
    if (contentContainerRef.current) {
      const contentHeight = contentContainerRef.current.scrollHeight;
      console.log(contentHeight);
    }
  }, []);

  return (
    <Wrap>
      <ContentWrapper ref={contentContainerRef}>
        {/* 최상위 Route에서 /information 경로를 /information/search로 리디렉션 */}

        <Routes>
          {/* /information 경로 (index route) */}
          <Route
            index
            element={
              <>
                <Navigation />
                <InfoFirst />
              </>
            }
          />
          {/* /information/* (나머지 경로) */}
          <Route
            path="*"
            element={
              <>
                <Navigation />
                <SearchContainer>
                  <Search />
                </SearchContainer>
                <Routes>
                  {/* <Route path="" element={<InfoFirst />} /> */}
                  {/* InfoFirst는 index route에서 이미 렌더링되므로 제거 */}
                  <Route path="chart" element={<Chart />} />
                  <Route
                    path="finance"
                    element={<Finance financeData={financeData} />}
                  />
                  <Route
                    path="volume"
                    element={<VolumePage volumeData={volumeData} />}
                  />
                  <Route
                    path="news"
                    element={<NewsPage newsData={newsData} />}
                  />
                  <Route
                    path="dividend"
                    element={<DividendPage dividendData={dividendData} />}
                  />
                  <Route
                    path="result"
                    element={
                      <Result
                        yearlyData={yearlyData}
                        quarterlyData={quarterlyData}
                      />
                    }
                  />
                </Routes>
              </>
            }
          />
          {/* /information으로 접속했을 때 /information/search로 리디렉션 */}
          <Route path="/" element={<Navigate to="/information/search" />} />
        </Routes>
      </ContentWrapper>
      <TopScrollBtn display={display} />
      <BottomNavBar display={display} />
    </Wrap>
  );
}

export default Information;
