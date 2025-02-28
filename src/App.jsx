import { Routes, Route } from "react-router-dom";

import CalendarPage from "./pages/CalendarPage";
import CommunityPostPage from "./pages/CommunityPostsPage";
import InformationPage from "./pages/InformationPage";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import PortfolioMainPage from "./pages/PortfolioMainPage";
import TickoPage from "./pages/TickoPage";

function Tmp() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/information" element={<InformationPage />}></Route>
        <Route path="/portmn" element={<PortfolioMainPage />}></Route>
        <Route path="/communityposts" element={<CommunityPostPage />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/calen" element={<CalendarPage />}></Route>
        <Route path="/ticko" element={<TickoPage />}></Route>
      </Routes>
    </>
  );
}

export default Tmp;
