import { Routes, Route } from "react-router-dom";

export default function WordRouting() {
  return (
    <>
      <Routes>
        <Route path="/ticko/basic/1" element={<div>용어-주식</div>}></Route>
        <Route path="/ticko/basic/2" element={<div>용어-주주</div>}></Route>
        <Route path="/ticko/basic/3" element={<div>용어-주권</div>}></Route>
        <Route
          path="/ticko/basic/4"
          element={<div>용어-주식의 보유와 양도</div>}
        ></Route>
        <Route
          path="/ticko/basic/5"
          element={<div>용어-거래시장의 분류</div>}
        ></Route>
        <Route
          path="/ticko/basic/6"
          element={<div>용어-보통주와 우선주</div>}
        ></Route>
        <Route
          path="/ticko/basic/7"
          element={<div>용어-세금과 양도세</div>}
        ></Route>
        <Route path="/ticko/basic/8" element={<div>용어-공모</div>}></Route>
        <Route path="/ticko/basic/9" element={<div>용어-증자</div>}></Route>
        <Route path="/ticko/basic/10" element={<div>용어-감자</div>}></Route>
        <Route path="/ticko/basic/11" element={<div>용어-펀드</div>}></Route>
        <Route
          path="/ticko/basic/12"
          element={<div>용어-인덱스펀드</div>}
        ></Route>
        <Route path="/ticko/basic/13" element={<div>용어-ETF</div>}></Route>
        <Route path="/ticko/basic/14" element={<div>용어-지수</div>}></Route>
        <Route
          path="/ticko/basic/15"
          element={<div>용어-주식투자 시작하기</div>}
        ></Route>
        <Route
          path="/ticko/basic/16"
          element={<div>용어-종목 선택하기</div>}
        ></Route>
      </Routes>
    </>
  );
}
