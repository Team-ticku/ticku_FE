import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import BottomNavBar from "./components/common/bottomNavBar/BottomNavBar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <BottomNavBar />
      <App />
    </BrowserRouter>
  </StrictMode>
);
