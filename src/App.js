import "./App.css";
import React, { useState, useReducer, useEffect, createContext } from "react";
import FirstComponent from "./Components/first-component";
import { provider, auth } from "./Configs/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
function App() {
  // const [count, setCount] = useState(0);
  // const [currentState, dispatch] = useReducer(()=>setCount(item=>item+1),count);

  
  return (
    <>
      <button
        onClick={() => {
          signInWithPopup(auth, provider)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        Click
      </button>
      <FirstComponent />
    </>
  );
}

export default App;
