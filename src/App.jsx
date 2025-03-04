import { Routes, Route, BrowserRouter } from "react-router-dom";

// import CalendarPage from "./pages/CalendarPage";
// import CommunityPostPage from "./pages/CommunityPostsPage";
// import InformationPage from "./pages/InformationPage";
import MainPage from "./pages/mainpage/MainPage";
import MyPage from "./pages/MyPages/MyPage";
import PortfolioMainPage from "./pages/portfolioPages/PortfolioMainPage";
import TickoPage from "./pages/tickoPages/TickoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/portmn" element={<PortfolioMainPage />}></Route>
          {/* <Route path="/information" element={<InformationPage />}></Route>
        <Route path="/communityposts" element={<CommunityPostPage />}></Route>*/}
          <Route path="/mypage" element={<MyPage />}></Route>
          {/* <Route path="/calen" element={<CalendarPage />}></Route> */}
          {/* <Route path="/ticko" element={<TickoPage />}></Route>  */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
