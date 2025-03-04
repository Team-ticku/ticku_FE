import { Routes, Route } from "react-router-dom";

import BasicWordPage from "./BasicWordPage";

export default function TickoRouting() {
  return (
    <>
      <Routes>
        {/* 주식 기초 지식 설명 페이지 */}
        <Route path="/ticko/basic" element={<BasicWordPage />}></Route>
        {/* 차트 설명 페이지 */}
        <Route path="/ticko/chart" element={<div>차트 페이지</div>}></Route>
        {/* 계좌 설명 페이지 */}
        <Route path="/ticko/account" element={<div>계좌 페이지</div>}></Route>
      </Routes>
    </>
  );
}
