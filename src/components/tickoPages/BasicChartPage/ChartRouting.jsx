import { Routes, Route } from "react-router-dom";

export default function ChartRouting() {
  return (
    <>
      <Routes>
        <Route path="/ticko/chart/1" element={<div>차트-기간</div>}></Route>
        <Route path="/ticko/chart/2" element={<div>차트-상승형</div>}></Route>
        <Route path="/ticko/chart/3" element={<div>차트-하락형</div>}></Route>
        <Route path="/ticko/chart/4" element={<div>차트-장대양봉</div>}></Route>
        <Route path="/ticko/chart/5" element={<div>차트-장대음봉</div>}></Route>
      </Routes>
    </>
  );
}
