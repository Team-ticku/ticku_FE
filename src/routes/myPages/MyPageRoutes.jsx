import { Routes, Route } from "react-router-dom";

import ScrapNews from "../../pages/myPages/ScrapNews";
import FavoriteCompanies from "../../pages/myPages/FavoriteCompanies";
import MyPortfolio from "../../pages/myPages/MyPortfolio";

function MyPageRoutes() {
  return (
    <Routes>
      <Route path="/mypage/scrapnews" element={<ScrapNews />}></Route>
      <Route path="/mypage/favorites" element={<FavoriteCompanies />}></Route>
      <Route path="/mypage/myportfolio" element={<MyPortfolio />}></Route>
    </Routes>
  );
}

export default MyPageRoutes;
