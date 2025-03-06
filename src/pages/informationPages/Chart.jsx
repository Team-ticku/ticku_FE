import React from "react";
import CompanyInfo from "../../components/information/CompanyInfo";

function ChartPage({ chartData }) {
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
    </div>
  );
}

//폴더 이름 수정

export default ChartPage;
