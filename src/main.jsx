import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@fontsource/poppins"; // Regular 400
import "@fontsource/poppins/600.css"; // Semibold 600
import "@fontsource/poppins/700.css"; // Bold 700

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
