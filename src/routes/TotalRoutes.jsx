import { BrowserRouter } from "react-router-dom";
// 하단 내브바
import BottomNavBarRoutes from "./BottomNavBarRoutes";
// 티코 페이지
import TickoMainRoutes from "./tickoPage/tickoMainRoutes";

import PortfolioPageRoutes from "./portfolioPages/PortfolioRoutes";
// 마이 페이지
import MyPageRoutes from "./myPages/MyPageRoutes";
// 로그인 페이지
import LoginRoutes from "./loginPage/LoginRoutes";
// 회원가입 페이지
import JoinRoutes from "./joinPage/JoinRoutes";
// 커뮤니티 페이지
import CommunityRoutes from "./communityPages/CommunityRoutes";

export default function TotalRoutes() {
  return (
    <BrowserRouter>
      {/* 하단 내브바 */}
      <BottomNavBarRoutes />

      {/* 티코 페이지 */}
      <TickoMainRoutes />

      {/* 포트폴리오 제작 페이지 */}
      <PortfolioPageRoutes />

      {/* 마이 페이지 */}
      <MyPageRoutes />
      {/* 로그인 페이지 */}
      <LoginRoutes />
      {/* 회원 가입 페이지 */}
      <JoinRoutes />
      {/* 커뮤니티 페이지 */}
      <CommunityRoutes />
    </BrowserRouter>
  );
}
