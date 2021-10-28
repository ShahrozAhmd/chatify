import "./App.css";
import React, { useEffect } from "react";
import { useStore } from "Context/store";
import {
  auth,
  githubProvider,
  googleProvider,
  signInWithPopup,
} from "Configs/firebase";
const App = () => {
  const [state, dispatch] = useStore();
  // const { auth } = state;

  return (
    <>
      <p>Chatify</p>
      <button
        onClick={() => {
          signInWithPopup(auth, githubProvider)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        Github Auth
      </button>
    </>
  );
};

export default App;
