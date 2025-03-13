// InformationPage.jsx
import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import BottomNavBar from "../../components/common/bottomNavBars/BottomNavBar";
import Navigation from "../../components/information/Navigation";
import InfoFirst from "../../components/information/InfoFirst";
import {
  Routes,
  Route,
  useLocation,
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
import Search from "./Search"; // Search 컴포넌트

const Wrap = styled.div`
  width: 390px;
`;

const ContentWrapper = styled.div`
  overflow-y: auto;
  height: calc(100vh); // 뷰포트 높이 전체 사용
  position: relative; // 상대 위치 지정
  padding-bottom: 100px;
`;

const SearchContainer = styled.div`
  /* padding: 10px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6; */
`;

function Information({ display }) {
  const contentContainerRef = useRef(null); // ref는 초기값 null
  const location = useLocation();
  const navigate = useNavigate(); // useNavigate 훅 사용

  const [financeData, setFinanceData] = useState(null); // 초기값 null
  const [yearResultData, setYearResultData] = useState(null); // yearResultData 상태 추가
  const [stockCode, setStockCode] = useState(null); // Add stockCode state
  const [volumeData, setVolumeData] = useState(null); // Add volumeData state

  // location.state 변경 감지 -> financeData 업데이트
  useEffect(() => {
    // location.state에서 financeData와 yearResultData를 가져옴
    if (location.state && location.state.financeData) {
      setFinanceData(location.state.financeData);
    }
    if (location.state && location.state.yearResultData) {
      setYearResultData(location.state.yearResultData);
    }
    if (location.state && location.state.stockCode) {
      setStockCode(location.state.stockCode); // Store the stockCode
      console.log(
        "InformationPage useEffect - stockCode:",
        location.state.stockCode
      );
    }
  }, [location.state]);

  useEffect(() => {
    const fetchVolumeData = async () => {
      if (stockCode) {
        try {
          const response = await fetch(
            `http://localhost:5000/volumes/${stockCode}`
          );
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();

          if (!data.chartData || data.chartData.length === 0) {
            setVolumeData([]); // No data, set empty array
            return;
          }
          // Calculate changeRate here, *before* setting volumeData
          const processedData = data.chartData.map((item, index, array) => {
            let changeRate = null;
            //  *** Change here: Use < array.length - 1 ***
            if (index < array.length - 1) {
              // Check if it's NOT the *last* element
              const prevClose = array[index + 1].종가; //  + 1, *next* day's close
              const currentClose = item.종가;
              if (prevClose !== null && currentClose !== null) {
                changeRate =
                  (((currentClose - prevClose) / prevClose) * 100).toFixed(2) +
                  "%";
              }
            }
            return {
              date: item.날짜,
              closingPrice: item.종가 ? item.종가.toFixed(0) + "원" : null,
              changeRate: changeRate,
              volume: item.거래량 ? item.거래량.toLocaleString() : null,
            };
          });
          processedData.pop();
          setVolumeData(processedData);
        } catch (error) {
          console.error("Error fetching volume data:", error);
        }
      }
    };
    fetchVolumeData();
  }, [stockCode]);

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

  return (
    <Wrap>
      <ContentWrapper ref={contentContainerRef}>
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
                  {/* Search 컴포넌트 */}
                  <Search />
                </SearchContainer>
                <Routes>
                  {/* 중첩 라우팅 */}
                  <Route path="chart" element={<Chart />} />
                  <Route
                    path="finance"
                    element={
                      <Finance
                        financeData={financeData}
                        yearResultData={yearResultData}
                      />
                    }
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
          <Route path="/" element={<Navigate to="/information/search" />} />
        </Routes>
      </ContentWrapper>

      {/* TopScrollBtn, BottomNavBar는 그대로 */}
      <TopScrollBtn display={display} />
      <BottomNavBar display={display} />
    </Wrap>
  );
}

export default Information;
