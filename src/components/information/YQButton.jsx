// FinanceInfo.jsx (타입스크립트 제거, 간결화)
import React, { useState } from "react";
import styled from "styled-components";
import ResultTable from "./ResultTable";

// 스타일 컴포넌트 정의 (이전과 동일)

const MainContainer = styled.div`
  position: relative;
`;

const TabContainer = styled.div`
  display: flex;
  width: 300px;
  margin-bottom: 10px;
  margin-left: 10px;
`;

const TabButton = styled.button`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 40px;
  background-color: ${(props) => (props.active ? "#D9D9D9" : "#F0F0F0")};
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  outline: none;
  margin: 10px;
  &:first-child {
  }
`;

const ContentContainer = styled.div`
  padding: 20px;
  position: relative;
  /* margin-left: 10px; */
  margin-right: 10px;
`;

// 메인 컴포넌트
function YQButton({ yearlyData, quarterlyData }) {
  const [activeTab, setActiveTab] = useState("yearly"); // 'yearly' or 'quarterly'

  // 탭 내용 렌더링
  const content =
    activeTab === "yearly" ? (
      <ResultTable data={yearlyData} />
    ) : (
      <ResultTable data={quarterlyData} />
    );

  return (
    <div>
      <MainContainer>
        <TabContainer>
          <TabButton
            active={activeTab === "yearly"}
            onClick={() => setActiveTab("yearly")}
          >
            연간
          </TabButton>
          <TabButton
            active={activeTab === "quarterly"}
            onClick={() => setActiveTab("quarterly")}
          >
            분기
          </TabButton>
        </TabContainer>
      </MainContainer>
      <ContentContainer>{content}</ContentContainer>
    </div>
  );
}

export default YQButton;
