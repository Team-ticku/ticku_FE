import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppInformation from "./AppInformation.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppInformation />
  </StrictMode>
);
