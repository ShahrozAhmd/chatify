import * as actions from "../action-types";
import { initialStates } from "Context/state";

const { auth } = initialStates;

export const authReducer = (state = auth, action) => {
  switch (action.type) {
    // GOOGLE LOGIN CASES
    case actions.GOOGLE_AUTH_INIT:
      return {
        ...state,
        auth: { ...auth, isLoading: true, isGoogleLoading: true },
      };
    case actions.GOOGLE_AUTH_SUCCESS:
      return {
        ...state,
        auth: {
          ...auth,
          isGoogleLoading: false,
          isSuccess: true,

          user: action.payload,
        },
      };
    case actions.GOOGLE_AUTH_FAIL:
      return {
        ...state,
        auth: {
          ...auth,
          isGoogleLoading: false,
          isSuccess: false,
          isFail: true,
          errorMessage: action.payload,
          user: {},
        },
      };
    // GITHUB LOGIN CASES
    case actions.GITHUB_AUTH_INIT:
      return {
        ...state,
        auth: { ...auth, isGithubLoading: true },
      };
    case actions.GITHUB_AUTH_SUCCESS:
      return {
        ...state,
        auth: {
          ...auth,
          isGithubLoading: false,
          isSuccess: true,

          user: action.payload,
        },
      };
    case actions.GITHUB_AUTH_FAIL:
      return {
        ...state,
        auth: {
          ...auth,
          isGithubLoading: false,
          isSuccess: false,
          isFail: true,
          errorMessage: action.payload,
          user: {},
        },
      };
    // SIGN OUT CASES
    case actions.SIGNOUT_INIT:
      return {
        ...state,
        auth: { ...auth, isSignoutLoading: true },
      };
    case actions.SIGNOUT_SUCCESS:
      return {
        ...state,
        auth: {
          ...auth,
          isSignoutLoading: false,
          user: {},
        },
      };
    case actions.SIGNOUT_FAIL:
      return {
        ...state,
        auth: {
          ...auth,
          isSignoutLoading: false,
          errorMessage: action.payload,
          user: {},
        },
      };
    default:
      return { ...state };
  }
};
