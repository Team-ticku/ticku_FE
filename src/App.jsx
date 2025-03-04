import { Routes, Route, BrowserRouter } from "react-router-dom";

// import CalendarPage from "./pages/CalendarPage";
// import CommunityPostPage from "./pages/CommunityPostsPage";

import MainPage from "./pages/mainpage/MainPage";
import InformationPage from "./pages/InformationPages/InformationPage";
import MyPage from "./pages/myPages/MyPage";
import PortfolioMainPage from "./pages/portfolioPages/PortfolioMainPage";
import TickoPage from "./pages/tickoPages/TickoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/portmn" element={<PortfolioMainPage />}></Route>

          <Route path="/information/*" element={<InformationPage />}></Route>
          {/* <Route path="/communityposts" element={<CommunityPostPage />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/calen" element={<CalendarPage />}></Route>
        <Route path="/ticko" element={<TickoPage />}></Route> */}

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
