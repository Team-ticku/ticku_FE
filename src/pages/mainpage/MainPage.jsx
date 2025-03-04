import React from "react";

import BottomNavBar from "../../components/common/bottomNavBars/BottomNavBar";
import SearchBar from "../../components/common/SearchBar";
import LiveSearchRank from "../../components/mainpage/LiveSearchRank";
import LiveIndexChart from "../../components/mainpage/LiveIndexChart";
import MainPortfolio from "../../components/mainpage/MainPortfolio";

function MainPage(props) {
  return (
    <>
      <BottomNavBar />
      <SearchBar />
      <LiveSearchRank />
      <LiveIndexChart />
      <MainPortfolio />
    </>
  );
}
export default MainPage;
