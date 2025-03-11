import { Routes, Route } from "react-router-dom";

//import CalendarPage from "../pages/CalendarPage";
import PostListPage from "../pages/communityPages/postListPage/PostListPage";
import InformationPage from "../pages/InformationPages/InformationPage";
import MainPage from "../pages/mainpage/MainPage";
import MyPage from "../pages/myPages/MyPage";
import PortfolioMainPage from "../pages/portfolioPages/PortfolioMainPage";
import TickoPage from "../pages/tickoPages/TickoPage";
import StockcalenPages from "../pages/stockcalendarPages/StockcalenPages";

export default function BottomNavBarRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/portmn" element={<PortfolioMainPage />}></Route>
      <Route path="/information/*" element={<InformationPage />}></Route>
      <Route path="/communityposts" element={<PostListPage />}></Route>
      <Route path="/mypage" element={<MyPage />}></Route>
      <Route path="/calen" element={<StockcalenPages />}></Route>
      <Route path="/ticko" element={<TickoPage />}></Route>
    </Routes>
  );
}
