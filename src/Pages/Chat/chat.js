import React, { useState, useEffect } from "react";
import Header from "Components/Header/header";
import { useStore } from "Context/store";
import { ChatEngine } from "react-chat-engine";
import { createNewUser } from "Context/actions/chat-actions";

const Chat = () => {
  const { authState, chatState, dispatchChat } = useStore();
  const { chats } = chatState;
  const { auth } = authState;

  useEffect(() => {
    console.log("Use Effect is runnig");
    if (auth.user && !auth.isSignout) {
      createNewUser(dispatchChat, auth.user);
    }
  }, [auth.user]);
  console.log(auth);
  return (
    <>
      <Header />
      {chats.isSuccess && !auth.isSignout && auth.user ? (
        <ChatEngine
          height="100vh"
          userName={Object.keys(auth).length >  0 && auth.user.displayName}
          userSecret={Object.keys(auth).length >  0 && auth.user.uid}
          projectID={process.env.REACT_APP_PROJECT_ID}
        />
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default Chat;
