import React from "react";
import ReactDOM from "react-dom/client";
import { VitePluginFonts } from "vite-plugin-fonts";

import App from "./components/App";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
