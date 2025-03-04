import React from "react";
import styled from "styled-components";
import BottomNavBar from "../../components/common/bottomNavBars/BottomNavBar";
import Navigation from "../../components/information/Navigation";
import InfoFirst from "../../components/information/InfoFirst";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import TopScrollBtn from "../../components/common/TopScrollBtn";
import Chart from "./Chart";
import List from "./List";

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
                  element={<div>기업 재무 페이지 (임시)</div>}
                />
                <Route
                  path="volume"
                  element={<div>거래량 페이지 (임시)</div>}
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
