import React from "react";
// import reactLogo from "./assets/react.svg";
import PortTitle from "../../components/portfolioPages/PortTitle";
import PortBox from "../../components/portfolioPages/PortBox";
import PortButton from "../../components/portfolioPages/PortButton";
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
