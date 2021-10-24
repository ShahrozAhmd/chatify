import * as actions from "../action-types";

export const addName = (data) => {
  return {
    type: actions.ADD_NAME,
    payload: data,
  };
};

export const addId = (data) => {
  return {
    type: actions.ADD_ID,
    payload: data,
  };
};
