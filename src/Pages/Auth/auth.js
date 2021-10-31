import React from "react";
import { Image, Title, Button } from "Components";

const Auth = () => {
  return (
    <div
      className="
      flex 
      justify-center 
      items-center 
      w-full  
      h-screen"
    >
      <div
        className="
        login-box-container 
        tbl:w-2/5
        msm:w-full
        lpt:w-2/5
        msm:m-2
        h-3/4 
        border 
        shadow 
        rounded-sm 
        bg-white"
      >
        <div className="elements-container flex flex-col justify-evenly items-center h-full w-full">
          <Image />
          <Title content="Chatify" tagline="A Simple Chat App" />
          <Button text="Sign In With Google" icon="googleIcon" />
          <Button text="Sign In With Github" icon="githubIcon" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
