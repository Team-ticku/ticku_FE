import styled from "styled-components";
import CompanyInfo from "../../components/information/CompanyInfo";
import React from "react";
import VolumeInfo from "../../components/information/VolumeInfo";
import YQButton from "../../components/information/YQButton";

function Result({ chartData, yearlyData, quarterlyData }) {
  return (
    <div>
      <VolumeInfo title="실적"></VolumeInfo>
      <YQButton
        yearlyData={yearlyData}
        quarterlyData={quarterlyData}
      ></YQButton>
    </div>
  );
}

export default Result;
