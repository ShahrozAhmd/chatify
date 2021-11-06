import React, { useState, useEffect } from "react";
import Header from "Components/Header/header";
import { useStore } from "Context/store";
import { ChatEngine } from "react-chat-engine";

const Chat = () => {
  const [state, dispatch] = useStore();
  const { auth, chat } = state;

  return (
    <>
      <Header />
      {/* <ChatEngine
        height="100vh"
        userName="LUser"
        userSecret="abc"
        projectID="077b20de-a730-46c8-8924-7296b5476cba"
      /> */}
    </>
  );
};

export default Chat;
