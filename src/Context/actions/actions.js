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

export const addFatherName = (data) => {
  return {
    type: actions.ADD_FATHER_NAME,
    payload: data,
  };
};
