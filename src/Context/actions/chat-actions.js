import * as actions from "../action-types";
import axios from "axios";
import { getOrCreateUserApi } from "Configs/chat-engine-api";

const createNewUserInit = () => {
  return {
    type: actions.CREATE_NEW_USER_INIT,
  };
};

const createNewUserSuccess = (response) => {
  return {
    type: actions.CREATE_NEW_USER_SUCCESS,
    payload: response,
  };
};

const createNewUserFail = (response) => {
  return {
    type: actions.CREATE_NEW_USER_FAIL,
    payload: response,
  };
};

const createNewUser = (dispatch, user) => {
  dispatch(createNewUserInit());
  let copyUserData = { ...user };
  let finalUserData = {
    username: copyUserData.displayName,
    secret: copyUserData.uid,
  };
  console.log("finalUserData: ", finalUserData);
  axios({
    method: "PUT",
    url: getOrCreateUserApi,
    data: finalUserData,
    headers: {
      "PRIVATE-KEY": process.env.REACT_APP_PROJECT_KEY,
    },
  })
    .then((response) => {
      console.log("Response:", response);
      dispatch(createNewUserSuccess(response.data));
    })
    .catch((err) => {
      console.log("Error:", err);
      dispatch(createNewUserFail(err));
    });
};

export { createNewUser };
