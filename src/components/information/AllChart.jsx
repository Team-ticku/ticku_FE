// AllChart.jsx (3개월 차트 - 일별 데이터)

import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

function AllChart({ stockCode, period }) {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!stockCode) return;

      try {
        setLoading(true);
        setError(null);

        const today = new Date();
        today.setHours(today.getHours() + 9);
        let startDate = new Date(today);
        let interval = "1d"; // 기본 interval: 1일

        switch (period) {
          case "1w":
            startDate.setDate(startDate.getDate() - 7);
            break;
          case "3m":
            startDate.setMonth(startDate.getMonth() - 3);
            interval = "1d"; // 3개월: 1일 간격
            break;
          case "1y":
            startDate.setFullYear(startDate.getFullYear() - 1);
            interval = "1wk"; // 1년: 1주일 간격 (또는 더 긴 간격)
            break;
          default:
            startDate.setDate(startDate.getDate() - 6);
        }
        startDate.setHours(0, 0, 0, 0);

        // 서버에 period와 interval을 모두 전달
        const response = await fetch(
          `/allchartdata/${stockCode}?period=${period}&interval=${interval}`
        );

        const chartResult = await response.json();

        if (!chartResult || chartResult.length === 0) {
          throw new Error("주가 데이터를 찾을 수 없습니다.");
        }

        const transformedData = chartResult
          .map((item, index, arr) => {
            const date = new Date(item.date);
            date.setHours(date.getHours() + 9);

            if (isNaN(date.getTime())) return null;
            if (item.open === null || item.close === null) return null;

            const previousClose = index > 0 ? arr[index - 1].close : item.open;

            return {
              date: date.getTime(),
              dateString: date.toISOString().split("T")[0],
              dayOfWeek: date.toLocaleDateString("ko-KR", { weekday: "short" }),
              open: item.open,
              high: item.high,
              low: item.low,
              close: item.close,
              volume: item.volume,
              previousClose: previousClose,
              openClose: [item.open, item.close], // [시가, 종가] 배열 추가
            };
          })
          .filter((item) => item !== null)
          .filter((item) => new Date(item.date) >= startDate);

        transformedData.sort((a, b) => a.date - b.date);
        setChartData(transformedData);
      } catch (err) {
        setError(err);
        console.error("Error fetching chart data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [stockCode, period]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (chartData.length === 0) {
    return <div>No data available.</div>;
  }

  const getBarColor = (entry) => {
    return entry.close >= entry.open
      ? "rgba(255, 0, 0, 1)"
      : "rgba(0, 0, 255, 1)";
  };

  // 커스텀 툴팁 컴포넌트
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;

      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "white",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <p>{`날짜: ${label}`}</p>
          <p>{`시가: ${data.open}`}</p>
          <p>{`종가: ${data.close}`}</p>
          <p>{`전일 종가: ${data.previousClose}`}</p>
        </div>
      );
    }

    return null;
  };

  // Y축 domain 계산
  const yAxisDomain = () => {
    if (chartData.length === 0) {
      return [0, 1]; // 기본값
    }

    let minVal = Infinity;
    let maxVal = -Infinity;

    chartData.forEach((item) => {
      minVal = Math.min(minVal, item.open, item.close);
      maxVal = Math.max(maxVal, item.open, item.close);
    });

    const range = maxVal - minVal;
    minVal -= range * 0.05;
    maxVal += range * 0.05;

    return [minVal, maxVal];
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={chartData}
        margin={{
          top: 20,
          right: 30,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="dateString"
          type="category"
          interval={period === "3m" ? 13 : "preserveStartEnd"} // 3개월일 때 틱 간격 조정
        />
        <YAxis domain={yAxisDomain()} />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="openClose" name="주가" fill="rgba(0,0,0,0)" barSize={40}>
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getBarColor(entry)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default AllChart;
