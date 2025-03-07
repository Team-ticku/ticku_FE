import { BrowserRouter } from "react-router-dom";
// 하단 내브바
import BottomNavBarRoutes from "./BottomNavBarRoutes";
// 티코 페이지
import TickoMainRoutes from "./tickoPages/tickoMainRoutes";
import WordMenuRoutes from "./tickoPages/WordMenuRoutes";
import ChartMenuRoutes from "./tickoPages/ChartMenuRoutes";
import AccountMenuRoutes from "./tickoPages/AccountMenuRoutes";
// 마이 페이지
import MyPageRoutes from "./myPages/MyPageRoutes";
// 로그인 페이지
import LoginRoutes from "./loginPage/LoginRoutes";
// 회원가입 페이지
import JoinPage from "../pages/joinPage/JoinPage";
// 커뮤니티 페이지
import PostViewRoute from "./communityPages/PostViewRoutes";

export default function TotalRoutes() {
  return (
    <BrowserRouter>
      {/* 하단 내브바 */}
      <BottomNavBarRoutes />

      {/* 티코 페이지 */}
      <TickoMainRoutes />
      <WordMenuRoutes />
      <ChartMenuRoutes />
      <AccountMenuRoutes />

      {/* 마이 페이지 */}
      <MyPageRoutes />
      {/* 로그인 페이지 */}
      <LoginRoutes />
      {/* 회원 가입 페이지 */}
      <JoinPage />
      {/* 커뮤니티 페이지 */}
      <PostViewRoute />

    </BrowserRouter>
  );
}
