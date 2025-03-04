// InformationPage.jsx (수정)
import React from "react";
import styled from "styled-components";
import BottomNavBar from "../../components/common/bottomNavBars/BottomNavBar";
import Navigation from "../../components/information/Navigation";
import InfoFirst from "../../components/information/InfoFirst";
import { Routes, Route, Outlet } from "react-router-dom";
import TopScrollBtn from "../../components/common/TopScrollBtn";
// import CompanyInfo from "../../components/information/CompanyInfo"; // 이 import는 필요 없음
import Chart from "./Chart"; // 컴포넌트 import  (ChartPage -> Chart)

const DIV = styled.div`
  height: 2000px;
`;

function Information() {
  const chartData = {
    logo: "", // 이미지 URL 또는 import된 이미지
    altText: "기업 로고",
    name: "기업 이름",
    code: "기업 코드",
    price: "가격",
    change: "변화량",
  };

  return (
    <DIV>
      <BottomNavBar />
      <Navigation />
      <Routes>
        <Route path="/" element={<InfoFirst />} />
        <Route
          path="chart"
          element={<Chart chartData={chartData} />} // chartData를 props로 전달
        />
        <Route path="finance" element={<div>기업 재무 페이지 (임시)</div>} />
        <Route path="volume" element={<div>거래량 페이지 (임시)</div>} />
        <Route path="news" element={<div>뉴스 페이지 (임시)</div>} />
        <Route path="dividend" element={<div>배당 페이지 (임시)</div>} />
        <Route path="result" element={<div>실적 페이지 (임시)</div>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      <Outlet />
      <TopScrollBtn />
    </DIV>
  );
}

export default Information;
