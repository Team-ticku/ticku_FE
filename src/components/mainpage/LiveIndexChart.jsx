import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

// Filler 플러그인 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Div = styled.div`
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 30px;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background: ${({ active }) =>
    active
      ? "linear-gradient(145deg, #00ffc3bb, #00ebff)" // 활성화된 버튼
      : "linear-gradient(145deg, #00ffc3bb, #00ebff)"};
  color: #fff;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: ${({ active }) =>
    active
      ? "4px 4px 8px rgba(0, 0, 0, 0.1)"
      : "4px 4px 8px rgba(0, 0, 0, 0.2)"};
  opacity: ${({ active }) => (active ? 1 : 0.5)}; // 눌리지 않은 버튼의 투명도

  &:hover {
    background: linear-gradient(145deg, #00ffc3bb, #00ebff);
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    background: #00ebff;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
    transform: translateY(1px);
  }
`;

const PeriodGroup = styled.div`
  display: flex;
  margin-right: 200px;
`;

const PeriodButton = styled.div`
  cursor: pointer;
  padding: 5px 10px;
  font-weight: ${({ active }) => (active ? "500" : "300")};
  text-align: center;
`;

const LiveIndexText = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin: 5px;
`;

const LiveIndexChartBox = styled.div`
  width: 87%;
  height: 200px;
  max-width: 800px;
  border-radius: 8px;
  background-color: #1c2f43a5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 20px;
`;

const IndexValue = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const fetchData = async (setData, setLoading, index, period) => {
  setLoading(true);
  try {
    const response = await fetch(
      `http://localhost:5000/indexData?index=${index}&period=${period}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    setData(result);
  } catch (error) {
    console.error("API 요청 오류:", error);
  } finally {
    setLoading(false);
  }
};

function LiveIndexChart() {
  const [data, setData] = useState({ kospi: [], kosdaq: [] });
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState("kospi"); // KOSPI/KOSDAQ 선택
  const [selectedPeriod, setSelectedPeriod] = useState("3months"); // 1주일/3개월 기간 선택

  useEffect(() => {
    fetchData(setData, setLoading, selectedIndex, selectedPeriod);
    const interval = setInterval(
      () => fetchData(setData, setLoading, selectedIndex, selectedPeriod),
      60000
    );
    return () => clearInterval(interval);
  }, [selectedIndex, selectedPeriod]); // selectedIndex와 selectedPeriod가 변경될 때마다 데이터 새로 가져오기

  // 1주일 데이터를 현재 날짜로부터 1주일 전까지 필터링
  const filterLastWeekData = (indexData) => {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7); // 현재 날짜로부터 1주일 전
    return indexData.filter((item) => new Date(item.date) >= oneWeekAgo);
  };

  const formatLabels = (data) => {
    if (selectedPeriod === "1week") {
      return data
        .slice(-7) // 마지막 7개만 가져옴 (1주일 데이터를 정확히 7개로 맞춤)
        .map((item) =>
          new Date(item.date).toLocaleDateString("ko-KR", {
            month: "short",
            day: "numeric",
          })
        );
    }
    return Object.values(
      data.reduce((acc, item) => {
        const date = new Date(item.date);
        const label = date.toLocaleDateString("ko-KR", {
          month: "short",
          year: "2-digit",
        });
        if (!acc[label]) {
          acc[label] = label;
        }
        return acc;
      }, {})
    );
  };

  const chartOptions = {
    responsive: true,
    plugins: { tooltip: { mode: "index", intersect: false } },
    scales: {
      x: {
        title: {
          display: true,
          text: selectedPeriod === "3months" ? "Month" : "Date",
        },
        ticks:
          selectedPeriod === "1week"
            ? {
                autoSkip: false, // 자동 건너뛰기 비활성화
                maxTicksLimit: 7, // 최대 7개 눈금 표시
                stepSize: 1, // 하루 단위로 강제 표시
              }
            : {
                autoSkip: true,
                maxTicksLimit: 7,
              },
      },
      y: {
        title: { display: true, text: "Price" },
        ticks: {
          callback: (value) => `${value.toLocaleString()}`,
        },
      },
    },
  };

  const createChartData = (indexData, label) => {
    // 1주일 그래프일 경우 데이터 필터링
    if (selectedPeriod === "1week") {
      indexData = filterLastWeekData(indexData);
    }

    if (!indexData || indexData.length === 0) {
      return {
        labels: ["No Data"],
        datasets: [
          {
            label,
            data: [0],
            borderColor: "gray",
            backgroundColor: "rgba(200, 200, 200, 0.2)",
            fill: true,
          },
        ],
      };
    }

    return {
      labels: formatLabels(indexData),
      datasets: [
        {
          label,
          data: indexData.map((item) => item?.close ?? 0),
          borderColor:
            label === "KOSPI" ? "rgb(75, 192, 192)" : "rgb(255, 99, 132)",
          backgroundColor:
            label === "KOSPI"
              ? "rgba(75, 192, 192, 0.2)"
              : "rgba(255, 99, 132, 0.2)",
          fill: "origin",
          pointStyle: "circle",
          radius: 5,
        },
      ],
    };
  };

  if (loading) {
    return (
      <Div>
        <Box>
          <LiveIndexText>Loading...</LiveIndexText>
        </Box>
      </Div>
    );
  }

  return (
    <Div>
      <Box>
        {/* KOSPI / KOSDAQ 버튼 */}
        <ButtonGroup>
          <Button
            active={selectedIndex === "kosdaq"}
            onClick={() => setSelectedIndex("kosdaq")}
          >
            KOSDAQ
          </Button>
          <Button
            active={selectedIndex === "kospi"}
            onClick={() => setSelectedIndex("kospi")}
          >
            KOSPI
          </Button>
        </ButtonGroup>

        {/* 1주일 / 3개월 텍스트 버튼 */}
        <PeriodGroup>
          <PeriodButton
            active={selectedPeriod === "1week"}
            onClick={() => setSelectedPeriod("1week")}
          >
            1주일
          </PeriodButton>
          <PeriodButton
            active={selectedPeriod === "3months"}
            onClick={() => setSelectedPeriod("3months")}
          >
            3개월
          </PeriodButton>
        </PeriodGroup>

        <LiveIndexChartBox>
          <Line
            data={createChartData(
              selectedIndex === "kospi" ? data.kospi : data.kosdaq,
              selectedIndex === "kospi" ? "KOSPI" : "KOSDAQ"
            )}
            options={chartOptions}
          />
        </LiveIndexChartBox>

        {/* 지수 값 표시 */}
        <IndexValue>
          {selectedIndex === "kospi"
            ? `📉 KOSPI: ${
                data.kospi[data.kospi.length - 1]?.close
                  ? data.kospi[data.kospi.length - 1]?.close.toFixed(2)
                  : "데이터 없음"
              }`
            : `📈 KOSDAQ: ${
                data.kosdaq[data.kosdaq.length - 1]?.close
                  ? data.kosdaq[data.kosdaq.length - 1]?.close.toFixed(2)
                  : "데이터 없음"
              }`}
        </IndexValue>
      </Box>
    </Div>
  );
}

export default LiveIndexChart;
