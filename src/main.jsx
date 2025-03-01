import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import BottomNavBar from "/src/components/common/bottomNavBars/BottomNavBar";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <BottomNavBar />
    </BrowserRouter>
  </StrictMode>
);
