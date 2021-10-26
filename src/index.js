import React from "react";
import ReactDOM from "react-dom";
import "index.css";
import App from "App";
import StoreProvider from "Context/store";
import {authReducer} from "Context/reducers/auth-reducers"
import { initialStates } from "Context/state";

ReactDOM.render(
  <StoreProvider initialState={initialStates} reducer={authReducer}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StoreProvider>,
  document.getElementById("root")
);
