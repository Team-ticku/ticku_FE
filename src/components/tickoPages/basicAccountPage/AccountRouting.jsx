import { Routes, Route } from "react-router-dom";

import AccountPage2 from "../../../pages/tickoPages/accountMenuPages/AccountPage2";

export default function AccountRouting() {
  return (
    <>
      <Routes>
        <Route
          path="/ticko/account/1"
          element={<div>계좌-증권 계좌</div>}
        ></Route>
        <Route
          path="/ticko/account/2"
          element={<AccountPage2></AccountPage2>}
        ></Route>
        <Route path="/ticko/account/2_1" element={<div>계좌-ISA</div>}></Route>
        <Route
          path="/ticko/account/2_2"
          element={<div>절세 계좌-퇴직 연금</div>}
        ></Route>
        <Route
          path="/ticko/account/2_3"
          element={<div>절세 계좌-개인 연금</div>}
        ></Route>
      </Routes>
    </>
  );
}
