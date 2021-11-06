import React, { useState, useEffect } from "react";
import Header from "Components/Header/header";
import { useStore } from "Context/store";

const Chat = () => {
  const [state, dispatch] = useStore();
  const { auth, chat } = state;

  return (
    <>
      <Header />
    </>
  );
};

export default Chat;
