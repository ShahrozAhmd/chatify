import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import StoreProvider from "Context/store";
import { initialState, reducer } from "Context/reducer";

ReactDOM.render(
  <StoreProvider initialState={initialState} reducer={reducer}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StoreProvider>,
  document.getElementById("root")
);
