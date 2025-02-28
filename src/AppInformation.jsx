import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Information from "./pages/InformationPage";
import ScrollToTopButton from "./components/common/TopScrollBtn";
import SearchBar from "./components/common/SearchBar";
import "./App.css";
import styled from "styled-components";
// import CalendarPage from "./pages/CalendarPage";
// import CommunityPostPage from "./pages/CommunityPostsPage";
// import InformationPage from "./pages/InformationPage";
// import MainPage from "./pages/MainPage";
// import MyPage from "./pages/MyPage";
// import PortfolioMainPage from "./pages/PortfolioMainPage";
// import TickoPage from "./pages/TickoPage";
const DIV = styled.div`
  height: 2000px;
`;

function App() {
  return (
    <DIV>
      <SearchBar />
      {/* Information 컴포넌트는 Routes 바깥에 있어야 합니다. */}
      <Information />
      <Routes>
        {/* AppbottomNav.jsx의 Routes 내용을 여기에 배치 */}
        {/* <Route path="/" element={<MainPage />} /> */}
        {/* <Route path="/information" element={<InformationPage />} /> */}
        {/* <Route path="/portmn" element={<PortfolioMainPage />} /> */}
        {/* <Route path="/communityposts" element={<CommunityPostPage />} /> */}
        {/* <Route path="/mypage" element={<MyPage />} /> */}
        {/* <Route path="/calen" element={<CalendarPage />} /> */}
        {/* <Route path="/ticko" element={<TickoPage />} /> */}
      </Routes>
      <ScrollToTopButton />
    </DIV>
  );
}

export default App;
