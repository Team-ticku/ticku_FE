import React from "react";
import styled from "styled-components";
import BottomNavBar from "../../components/common/bottomNavBars/BottomNavBar";
import Navigation from "../../components/information/Navigation";
import InfoFirst from "../../components/information/InfoFirst";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import TopScrollBtn from "../../components/common/TopScrollBtn";
import Chart from "./Chart";
import List from "./List";
import Finance from "./Finance";
import VolumePage from "./Volume";

const DIV = styled.div`
  height: 2000px;
`;

function Information() {
  const chartData = {
    logo: "", // 여기에 이미지 url
    altText: "기업 로고", // 이미지 alt(없어도 상관없음)
    name: "기업 이름", // 기업 이름
    code: "기업 코드", // 기업 종목 코드
    price: "가격", // 기업 현재가
    change: "변화량", // 기업 가격 변화량
  };

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
  ];

  return (
    <DIV>
      <Routes>
        {/* /Information/List 경로 */}
        <Route path="list" element={<List />} />

        {/* /Information 및 기타 하위 경로 (/Information/Chart 등) */}
        <Route
          path="*" // 와일드카드(*) 경로 사용
          element={
            <>
              <Navigation />
              <Routes>
                {/* 중첩 라우팅:  /information/ 하위의 모든 경로. */}
                <Route path="" element={<InfoFirst />} /> {/* /Information */}
                <Route path="chart" element={<Chart chartData={chartData} />} />
                <Route
                  path="finance"
                  element={
                    <Finance chartData={chartData} financeData={financeData} />
                  }
                />
                <Route
                  path="volume"
                  element={
                    <VolumePage chartData={chartData} volumeData={volumeData} />
                  }
                />
                <Route path="news" element={<div>뉴스 페이지 (임시)</div>} />
                <Route
                  path="dividend"
                  element={<div>배당 페이지 (임시)</div>}
                />
                <Route path="result" element={<div>실적 페이지 (임시)</div>} />
                <Route path="*" element={<div>404 Not Found</div>} />{" "}
                {/* /information/* */}
              </Routes>
              <TopScrollBtn />
              <BottomNavBar />
            </>
          }
        />
      </Routes>
    </DIV>
  );
}
export default Information;
