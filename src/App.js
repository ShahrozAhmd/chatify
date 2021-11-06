import "./App.css";
import React from "react";
import Routes from "Routes/routes";
import { useStore } from "Context/store";

const App = () => {
  const [state] = useStore();

  console.log("Global Store:", state);
  return (
    <>
      <Routes />
    </>
  );
};

export default App;
