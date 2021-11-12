import React from "react";
import { Switch, Link, Route, Redirect } from "react-router-dom";
import { Auth, Chat } from "Pages";
import { initialStates } from "Context/state";
import { useStore } from "Context/store";
const Routes = () => {
  const { authState, dispatchAuth } = useStore();
  const { auth } = authState;

  return (
    <>
      <Switch>
        <Route exact path="/" component={Auth} />
        {Object.keys(auth.user).length == 0 ? (
          <Redirect to="/" />
        ) : (
          <Route exact path="/chat" component={Chat} />
        )}
      </Switch>
    </>
  );
};

export default Routes;
