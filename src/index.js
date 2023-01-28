import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UIProvider from "./Context/UIContext";
import PostProvider from "./Context/PostContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <UIProvider>
    <PostProvider>
      <App />
    </PostProvider>
  </UIProvider>
  // </React.StrictMode>
);
