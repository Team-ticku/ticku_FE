import React from "react";
import styled from "styled-components";
import Navigation from "../components/information/Navigation";
import InfoFirst from "../components/information/InfoFirst";
import { Routes, Route } from "react-router-dom";

function Information() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/chart" element={<div>차트 페이지</div>} />
        <Route path="/finance" element={<div>기업 재무 페이지</div>} />
        <Route path="/volume" element={<div>거래량 페이지</div>} />
        <Route path="/news" element={<div>뉴스 페이지</div>} />
        <Route path="/dividend" element={<div>배당 페이지</div>} />
        <Route path="/result" element={<div>실적 페이지</div>} />
        <Route path="/" element={<InfoFirst />} />{" "}
        <Route path="*" element={<div>404 Not Found</div>} />{" "}
      </Routes>
    </div>
  );
}

export default Information;
