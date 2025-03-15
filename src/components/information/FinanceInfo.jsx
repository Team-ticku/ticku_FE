// FinanceInfo.jsx
import React, { useState } from "react";
import styled from "styled-components";
import YearResultTable from "./YearResult"; // YearResultTable import
import YearResultChart from "./YearResultChart";

const MainContainer = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 20px;
    right: 20px;
    height: 2px;
    background-color: #b2c4df;
  }
`;

const TabContainer = styled.div`
  display: flex;
  width: 250px;
  margin-bottom: 10px;
  margin-left: 10px;
`;

const TabButton = styled.button`
  flex: 1;
  padding: 10px;
  border: none;
  background-color: transparent;
  color: ${(props) => (props.active ? "black" : "#B3B3B3")};
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  outline: none;

  &:first-child {
    border-right: 1px solid #b2c4df;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;

const ContentContainer = styled.div`
  padding: 20px;
  position: relative;
  margin-right: 10px;
`;

const CompanyInfoContainer = styled.div``;

const InfoItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.span`
  font-weight: bold;
  margin-right: 5px;
  display: inline-block;
  width: 120px;
  /* color: #777; */
`;

const Value = styled.span``;

const NoData = styled.p`
  color: #999;
  font-style: italic;
`;

// 기업 정보 컴포넌트
function CompanyInfoContent({ ceo, establishedDate, stockCode, homepage }) {
  return (
    <CompanyInfoContainer>
      <InfoItem>
        <Label>대표이사</Label>
        <Value>{ceo || <NoData>정보 없음</NoData>}</Value>
      </InfoItem>
      <InfoItem>
        <Label>설립일</Label>
        <Value>{establishedDate || <NoData>정보 없음</NoData>}</Value>
      </InfoItem>
      <InfoItem>
        <Label>주식 종목코드</Label>
        <Value>{stockCode || <NoData>정보 없음</NoData>}</Value>
      </InfoItem>
      <InfoItem>
        <Label>홈페이지</Label>
        <Value>
          {homepage ? (
            <a href={homepage} target="_blank" rel="noopener noreferrer">
              {homepage}
            </a>
          ) : (
            <NoData>정보 없음</NoData>
          )}
        </Value>
      </InfoItem>
    </CompanyInfoContainer>
  );
}

// 재무 제표 컴포넌트
function FinancialStatementsContent({ yearResultData }) {
  // yearResultData prop 받기
  return (
    <div>
      {/* yearResultData를 YearResultTable에 전달 */}
      <YearResultChart data={yearResultData} />
      <YearResultTable data={yearResultData} />
    </div>
  );
}

function FinanceInfo({ companyInfo, yearResultData }) {
  // yearResultData prop 추가
  const [activeTab, setActiveTab] = useState("companyInfo");

  const tabContents = {
    companyInfo: <CompanyInfoContent {...companyInfo} />,
    // yearResultData 전달
    financialStatements: (
      <FinancialStatementsContent yearResultData={yearResultData} />
    ),
  };

  return (
    <div>
      <MainContainer>
        <TabContainer>
          <TabButton
            active={activeTab === "companyInfo"}
            onClick={() => setActiveTab("companyInfo")}
          >
            기업 정보
          </TabButton>
          <TabButton
            active={activeTab === "financialStatements"}
            onClick={() => setActiveTab("financialStatements")}
          >
            재무 제표
          </TabButton>
        </TabContainer>
      </MainContainer>
      <ContentContainer>{tabContents[activeTab]}</ContentContainer>
    </div>
  );
}

export default FinanceInfo;
