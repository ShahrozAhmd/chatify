import React from "react";
import ReactDOM from "react-dom";
import "index.css";
import App from "App";
import StoreProvider from "Context/store";
import { reducer } from "Context/reducers/reducer";
import { initialStates } from "Context/state";

ReactDOM.render(
  <StoreProvider initialState={initialStates} reducer={reducer}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StoreProvider>,
  document.getElementById("root")
);
