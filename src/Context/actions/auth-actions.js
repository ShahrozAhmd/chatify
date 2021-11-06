import * as actions from "../action-types";
import {
  auth,
  githubProvider,
  googleProvider,
  signInWithPopup,
  signOut,
} from "Configs/firebase";

// Auth acitons for google
const googleAuthinIt = () => {
  return {
    type: actions.GOOGLE_AUTH_INIT,
  };
};

const googleAuthSuccess = (user) => {
  return {
    type: actions.GOOGLE_AUTH_SUCCESS,
    payload: user,
  };
};
const googleAuthFail = (error) => {
  return {
    type: actions.GOOGLE_AUTH_FAIL,
    payload: error,
  };
};

const googleAuth = (dispatch, history) => {
  dispatch(googleAuthinIt());

  signInWithPopup(auth, googleProvider)
    .then((res) => {
      dispatch(googleAuthSuccess(res.user));
      history.push("/chat");
      console.log("Success:", res);
    })
    .catch((err) => {
      dispatch(googleAuthFail(err));
      console.log("Fail:", err);
    });
};

//   Auth actions for github

const githubAuthinIt = (data) => {
  return {
    type: actions.GITHUB_AUTH_INIT,
    payload: data,
  };
};

const githubAuthSuccess = (user) => {
  return {
    type: actions.GITHUB_AUTH_SUCCESS,
    payload: user,
  };
};
const githubAuthFail = (error) => {
  return {
    type: actions.GITHUB_AUTH_FAIL,
    payload: error,
  };
};

const githubAuth = (dispatch) => {
  dispatch(githubAuthinIt());
  signInWithPopup(auth, githubProvider)
    .then((res) => {
      dispatch(githubAuthSuccess(res.user));
      console.log("Success:", res);
    })
    .catch((err) => {
      dispatch(githubAuthFail(err.message));
      console.log("Fail:", err);
    });
};
// SIGNOUT ACTIONS
const signoutInit = () => {
  return {
    type: actions.SIGNOUT_INIT,
  };
};

const signoutSuccess = (response) => {
  return {
    type: actions.SIGNOUT_SUCCESS,
    payload: response,
  };
};

const signoutFail = (response) => {
  return {
    type: actions.SIGNOUT_FAIL,
    payload: response,
  };
};

const signout = (dispatch,history) => {
  dispatch(signoutInit);
  signOut(auth)
    .then((response) => {
      dispatch(signoutSuccess(response));
      history.push("/");
      console.log(response)
    })
    .catch((error) => {
      dispatch(signoutFail(error));
      console.log(error)
    });
};

export { githubAuth, googleAuth, signout };
