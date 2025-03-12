// components/information/Search.jsx
import React from "react";
import CompanyInfo from "../../components/information/CompanyInfo"; // 경로 확인
import useStockData from "../../components/information/useStockData"; // 경로 확인
import { useLocation, useNavigate } from "react-router-dom";

function Search() {
  const location = useLocation();
  const navigate = useNavigate(); // useNavigate 훅 사용
  const { stockCode, stockName } = location.state || {};
  const chartData = useStockData(stockCode, stockName);

  return (
    <>
      <CompanyInfo
        name={chartData.name}
        code={chartData.code}
        price={chartData.price}
        change={chartData.change}
      />
    </>
  );
}

export default Search;
