import React from "react";
import { createRoot } from "react-dom/client";
import { HomePage } from "./pages/HomePage";
import "./global.css";
import "./i18n";

createRoot(document.querySelector("#app")).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
