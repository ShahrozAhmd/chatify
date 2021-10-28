import React from "react";
import ReactDOM from "react-dom";
import "index.css";
import App from "App";
import StoreProvider from "Context/store";
import { authReducer } from "Context/reducers/auth-reducers";
import { initialStates } from "Context/state";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <StoreProvider initialState={initialStates} reducer={authReducer}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);
