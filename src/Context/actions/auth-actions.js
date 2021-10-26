import * as actions from "../action-types";
import { provider, auth } from "Configs/firebase";
import { signInWithPopup } from "firebase/auth";

// Auth acitons for google
const googleAuthinIt = (data) => {
  return {
    type: actions.GOOGLE_AUTH_INIT,
    payload: data,
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

const googleAuth = (args, dispatch) => {
  dispatch(googleAuthinIt());

  signInWithPopup(auth, provider)
    .then((res) => {
      dispatch(googleAuthSuccess(res.user));
      console.log("Success:", res);
    })
    .catch((err) => {
      dispatch(googleAuthFail(err));
      console.log("Fail:", err);
    });
};

//   Auth actions for facebook

const facebookAuthinIt = (data) => {
  return {
    type: actions.FACEBOOK_AUTH_INIT,
    payload: data,
  };
};

const facebookAuthSuccess = (user) => {
  return {
    type: actions.FACEBOOK_AUTH_SUCCESS,
    payload: user,
  };
};
const facebookAuthFail = (error) => {
  return {
    type: actions.FACEBOOK_AUTH_FAIL,
    payload: error,
  };
};

const facebookAuth = (args, dispatch) => {
  dispatch(facebookAuthinIt());
  dispatch(facebookAuthSuccess());
  dispatch(facebookAuthFail());
};

export { facebookAuth, googleAuth };
