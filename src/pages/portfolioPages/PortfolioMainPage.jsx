import React from "react";
// import reactLogo from "./assets/react.svg";
import PortTitle from "../../components/portfoliopage/PortTitle";
import PortBox from "../../components/portfoliopage/PortBox";
import PortButton from "../../components/portfoliopage/PortButtons";
import BottomNavBar from "../../components/common/bottomNavBars/BottomNavBar";

// import "../App.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrap = styled.div`
  width: 390px;
`;

function PortfolioMainPage({ display }) {
  return (
    <Wrap>
      <BottomNavBar display={display} />
      <Container>
        <PortTitle />
        <PortBox link={"make"} />
        <PortButton />
      </Container>
    </Wrap>
  );
}

export default PortfolioMainPage;
