// SalesYearChart.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

const ChartContainer = styled.div`
  width: 100%;
  height: 300px; /* 차트 높이 조절 */
  padding: 20px; /* 여백 추가 */
  /* background-color: #f8f9fa;  배경색 (선택 사항) */
`;

function SalesYearChart({ data }) {
  // 데이터 가공: rechart에 맞는 형태로 변환

  // data가 undefined나 null일 경우 빈 배열로 처리
  const safeData = data || [];

  const chartData =
    safeData.length > 0
      ? Object.keys(safeData[0])
          .filter((key) => key !== "category")
          .sort((a, b) => b - a)
          .map((year) => {
            const yearData = { year };
            safeData.forEach((item) => {
              yearData[item.category] =
                item[year] !== "N/A"
                  ? parseInt(item[year].replace(/,/g, ""), 10)
                  : 0; // 쉼표 제거 후 숫자로 변환, "N/A"는 0으로
            });
            return yearData;
          })
      : [];

  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <Tooltip />
          <Legend />
          <Bar dataKey="매출액(억)" fill="#82ca9d" name="매출액" /> {/* 녹색 */}
          <Bar dataKey="영업이익(억)" fill="#8884d8" name="영업이익" />{" "}
          {/* 파란색 */}
          <Bar dataKey="순이익(억)" fill="#ff7f50" name="순이익" />{" "}
          {/* 빨간색 */}
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

export default SalesYearChart;
