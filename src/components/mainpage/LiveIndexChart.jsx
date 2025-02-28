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

const LiveIndexText = styled.div`
  font-size: 21px;
  font-weight: 500;
  margin-bottom: 8px;
  margin-left: 1px;
`;

const LiveIndexChartBox = styled.div`
  width: 300px;
  height: 190px;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  background-color: #eeeeee;
`;

function LiveIndexChart(props) {
  return (
    <Div>
      <Box>
        <LiveIndexText>실시간 지수</LiveIndexText>
        <LiveIndexChartBox />
      </Box>
    </Div>
  );
}

export default LiveIndexChart;
