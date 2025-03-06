import React from "react";
import styled from "styled-components";

const Div = styled.div`
  margin-top: 45px;
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const PortfolioText = styled.div`
  font-size: 21px;
  font-weight: 500;
  margin-bottom: 8px;
  margin-left: 1px;
`;

const PortfoliotBox = styled.div`
  width: 300px;
  height: 150px;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  background-color: #eeeeee;
`;

function MainPortfolio(props) {
  return (
    <Div>
      <Box>
        <PortfolioText>나의 대표 포트폴리오</PortfolioText>
        <PortfoliotBox />
      </Box>
    </Div>
  );
}

export default MainPortfolio;
