import { Routes, Route } from "react-router-dom";

import PostListPage from "../pages/communityPages/postListPage/PostListPage";
import InformationPage from "../pages/InformationPages/InformationPage";
import MainPage from "../pages/mainpage/MainPage";
import MyPage from "../pages/myPages/MyPage";
import StockcalenPages from "../pages/stockcalendarPages/StockcalenPages";
import PortfolioMainPage from "../pages/portfolioPages/PortfolioMainPage";
import TickoPage from "../pages/tickoPages/TickoPage";


import StartPage from "../pages/startPages/StartPage";

export default function BottomNavBarRoutes() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />}></Route>
      <Route path="/main" element={<MainPage />}></Route>
      <Route path="/portmn" element={<PortfolioMainPage />}></Route>
      <Route path="/information/*" element={<InformationPage />}></Route>
      <Route path="/communityposts" element={<PostListPage />}></Route>
      <Route path="/mypage" element={<MyPage />}></Route>
      <Route path="/calen" element={<StockcalenPages />}></Route>
      <Route path="/ticko" element={<TickoPage />}></Route>
    </Routes>
  );
}
