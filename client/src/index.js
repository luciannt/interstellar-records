import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import StateContextProvider from "./context/AppContext";
import "./styles/global.scss";

ReactDOM.render(
  <BrowserRouter>
    <StateContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </StateContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
