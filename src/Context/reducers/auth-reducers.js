import * as actions from "../action-types";
import { initialStates } from "Context/state";

const { auth } = initialStates;

export const authReducer = (state = initialStates, action) => {
  switch (action.type) {
    case actions.GOOGLE_AUTH_INIT:
      return { ...state, auth: { ...auth } };
    case actions.GOOGLE_AUTH_SUCCESS:
      return { ...state, auth: { ...auth,user: action.payload } };
    case actions.GOOGLE_AUTH_FAIL:
      return { ...state, auth: { ...auth } };
    case actions.FACEBOOK_AUTH_INIT:
      return { ...state, auth: { ...auth } };
    case actions.FACEBOOK_AUTH_SUCCESS:
      return { ...state, auth: { ...auth } };
    case actions.FACEBOOK_AUTH_FAIL:
      return { ...state, auth: { ...auth } };
    default:
      return { ...state };
  }
};
