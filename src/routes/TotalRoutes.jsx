import { BrowserRouter } from "react-router-dom";
// 하단 내브바
import BottomNavBarRoutes from "./BottomNavBarRoutes";
// 티코 페이지
import TickoMainRoutes from "./tickoPages/tickoMainRoutes";
import WordMenuRoutes from "./tickoPages/WordMenuRoutes";
import ChartMenuRoutes from "./tickoPages/ChartMenuRoutes";
import AccountMenuRoutes from "./tickoPages/AccountMenuRoutes";
import PortfolioPageRoutes from "./portfolioPages/PortfolioRoutes";

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

      {/* 포트폴리오 제작 페이지 */}
      <PortfolioPageRoutes />
    </BrowserRouter>
  );
}
