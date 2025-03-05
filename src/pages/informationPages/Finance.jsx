// Finance.jsx
import React from "react";
import CompanyInfo from "../../components/information/CompanyInfo";
import styled from "styled-components";
import FinanceInfo from "../../components/information/FinanceInfo";

function Finance({ chartData, financeData }) {
  return (
    <div>
      <CompanyInfo
        logo={chartData.logo}
        altText={chartData.altText}
        name={chartData.name}
        code={chartData.code}
        price={chartData.price}
        change={chartData.change}
      />
      <FinanceInfo
        companyInfo={{
          // companyInfo 객체로 묶어서 전달
          ceo: financeData.ceo,
          establishedDate: financeData.establishedDate,
          stockCode: financeData.stockCode,
          homepage: financeData.homepage,
        }}
        financialStatements={{
          imageUrl: null, // 또는 실제 이미지 URL
        }}
      />
    </div>
  );
}

export default Finance;
