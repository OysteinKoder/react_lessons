import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";

// HashRouter is wrapped around App. This makes the router work on everything inside the App
// HashRouter is used instead of BrowserRouter to make the app work on github pages
ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);
