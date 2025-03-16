import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  margin-top: 28px;
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchRankText = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
  margin-right: 10px;
`;

const SearchBar = styled.div`
  width: 100%;
  height: 25px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  background-color: #1c2f43a5;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
`;

const StockInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  width: 100%;
  overflow: hidden;
`;

const StockRank = styled.p`
  font-size: 18px;
  font-weight: 700;
  /* color: #374151; */
`;

const StockName = styled.p`
  font-size: 16px;
  font-weight: 600;
  /* color: #1f2937; */
  flex: 1 0 80px; /* 길이에 맞춰서 flex 크기 조절 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StockPrice = styled.p`
  font-size: 13px;
  font-weight: 700;
  /* color: #111827; */
  flex: 0 1 80px; /* 가격의 고정된 크기 */
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StockRatio = styled.p`
  font-size: 13px;
  font-weight: 600;
  flex: 0 1 80px; /* 비율의 고정된 크기 */
  text-overflow: ellipsis;
  white-space: nowrap;
  ${({ ratio }) =>
    ratio.startsWith("-") ? "color: #e63946;" : "color: #1d4ed8;"}
`;

const FullRanking = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  position: absolute;
  top: 175px;
  left: 0;
  background-color: #1c2f43;
  border-radius: 10px;
  border: 1px solid #1c2f43a5;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: 40px;
  padding: 0 18px;
  width: 70%;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
`;

const RankingItem = styled.div`
  display: flex;
  height: 30px;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding: 5px 0;
  border-bottom: 1px solid #3e5671;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const LiveSearchRank = () => {
  const [rankings, setRankings] = useState([]);
  const [index, setIndex] = useState(0);
  const [showRanking, setShowRanking] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchRankings = async () => {
      try {
        const response = await fetch("http://localhost:5000/searchRanking");
        const data = await response.json();
        setRankings(data.slice(0, 10));
      } catch (error) {
        console.error("Error fetching stock rankings:", error);
      }
    };

    fetchRankings();
  }, []);

  useEffect(() => {
    if (rankings.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rankings.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [rankings]);

  const handleItemClick = (stock) => {
    // 검색결과 페이지로 넘어가기
    navigate(``, { state: { name: stock.name } });
  };

  if (!rankings.length) return <p>Loading...</p>;

  const { rank, name, price, ratio } = rankings[index] || {};

  return (
    <Div>
      <Box>
        <SearchRankText>📊 실시간 검색 상위 종목</SearchRankText>
        <SearchBar onClick={() => setShowRanking((prev) => !prev)}>
          <StockInfo>
            <StockRank>{rank ? `${rank}.` : "-"}</StockRank>
            <StockName title={name}>{name || "데이터 없음"}</StockName>
            <StockPrice>{price ? `${price}원` : "-"}</StockPrice>
            <StockRatio ratio={ratio}>{ratio ? `${ratio}` : "-"}</StockRatio>
          </StockInfo>
        </SearchBar>
        <FullRanking show={showRanking}>
          {rankings.map((stock, idx) => (
            <RankingItem key={idx} onClick={() => handleItemClick(stock)}>
              <StockRank>{stock.rank}.</StockRank>
              <StockName title={stock.name}>{stock.name}</StockName>
              <StockPrice>{stock.price ? `${stock.price}원` : "-"}</StockPrice>
              <StockRatio ratio={stock.ratio}>{stock.ratio}</StockRatio>
            </RankingItem>
          ))}
        </FullRanking>
      </Box>
    </Div>
  );
};

export default LiveSearchRank;
