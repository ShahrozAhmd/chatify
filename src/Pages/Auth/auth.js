import React from "react";
import { Image, Title, Button } from "Components";
import { useStore } from "Context/store";
import { githubAuth, googleAuth } from "Context/actions/auth-actions";
import { useHistory } from "react-router-dom";
import ErrorBar from "Components/ErrorBar/error-bar";

const Auth = () => {
  let history = useHistory();

  const { authState, dispatchAuth } = useStore();
  const { auth } = authState;

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
         {auth.isFail && <ErrorBar errorMessage={auth.errorMessage}/>}
          <Image />
          <Title content="Chatify" tagline="A Simple Chat App" />
          <Button
            click={() => googleAuth(dispatchAuth, history)}
            text={auth.isGoogleLoading ? "Signing.." : "Sign In With Google"}
            icon={auth.isGoogleLoading ? "spinner" : "googleIcon"}
          />
          <Button
            click={() => githubAuth(dispatchAuth, history)}
            text={auth.isGithubLoading ? "Signing.." : "Sign In With Github"}
            icon={auth.isGithubLoading ? "spinner" : "githubIcon"}
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;
