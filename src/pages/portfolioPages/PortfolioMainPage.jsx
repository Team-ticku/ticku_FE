import React from "react";
// import reactLogo from "./assets/react.svg";
import PortTitle from "../../components/portfoliopage/PortTitle";
import PortBox from "../../components/portfoliopage/PortBox";
import PortButton from "../../components/portfoliopage/PortButtons";

// import "../App.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function PortfolioMainPage() {
  return (
    <Container>
      <PortTitle />
      <PortBox />
      <PortButton />
    </Container>
  );
}

export default PortfolioMainPage;
