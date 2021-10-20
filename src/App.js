import "./App.css";
import React, { useState, useReducer, useEffect,createContext } from "react";
import FirstComponent from "./components/first-component";
function App() {
  // const [count, setCount] = useState(0);
  // const [currentState, dispatch] = useReducer(()=>setCount(item=>item+1),count);

  
  
  return (
   <FirstComponent/>
  );
}

export default App;
