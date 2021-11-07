import React, { useState, useEffect } from "react";
import Header from "Components/Header/header";
import { useStore } from "Context/store";
import { ChatEngine } from "react-chat-engine";
import { createNewUser } from "Context/actions/chat-actions";

const Chat = () => {
  const { authState, chatState, dispatchChat } = useStore();
  const { chats } = chatState;
  const { auth } = authState;

  // console.log("chats state : ", chats)
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
      {/* <ChatEngine
          height="100vh"
          userName={"shahroz"}
          userSecret={"shahroz123"}
          projectID={process.env.REACT_APP_PROJECT_ID}
        /> */}
      {chats.isSuccess && !auth.isSignout ? (
        auth.user? (
          <ChatEngine
            height="100vh"
            userName={auth.user.displayName}
            userSecret={auth.user.uid}
            projectID={process.env.REACT_APP_PROJECT_ID}
          />
        ) : null
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default Chat;
