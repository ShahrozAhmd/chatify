import * as actions from "../action-types";
import { initialStates } from "Context/state";

const { auth } = initialStates;

export const authReducer = (state = auth, action) => {
  switch (action.type) {
    case actions.GOOGLE_AUTH_INIT:
      return { ...state, auth: { ...auth, isLoading: true } };
    case actions.GOOGLE_AUTH_SUCCESS:
      return {
        ...state,
        auth: {
          ...auth,
          isLoading: false,
          isSuccess: true,

          user: action.payload,
        },
      };
    case actions.GOOGLE_AUTH_FAIL:
      return {
        ...state,
        auth: {
          ...auth,
          isLoading: false,
          isSuccess: false,
          isFail: true,
          errorMessage: action.payload,
          user: [],
        },
      };
    case actions.GITHUB_AUTH_INIT:
      return { ...state, auth: { ...auth, isLoading: true } };
    case actions.GITHUB_AUTH_SUCCESS:
      return {
        ...state,
        auth: {
          ...auth,
          isLoading: false,
          isSuccess: true,

          user: action.payload,
        },
      };
    case actions.GITHUB_AUTH_FAIL:
      return {
        ...state,
        auth: {
          ...auth,
          isLoading: false,
          isSuccess: false,
          isFail: true,
          errorMessage: action.payload,
          user: [],
        },
      };
    default:
      return { ...state };
  }
};
