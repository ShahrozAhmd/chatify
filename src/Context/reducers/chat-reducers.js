import * as actions from "../action-types";
import { initialStates } from "Context/state";

const { chats } = initialStates;

const chatReducer = (state = chats, action) => {
  switch (action.type) {
    case actions.CREATE_NEW_USER_INIT:
      return { ...state, chats: { ...chats, isLoading: true } };
    case actions.CREATE_NEW_USER_SUCCESS:
      return {
        ...state,
        chats: {
          ...chats,
          isLoading: false,
          isUserCreated: true,
          isSuccess: true,
          user: action.payload,
        },
      };
    case actions.CREATE_NEW_USER_FAIL:
      return {
        ...state,
        chats: {
          ...chats,
          isLoading: false,
          isUserCreated: false,
          isSuccess: false,
          isFail: true,
          errorMessage: action.payload,
          user: [],
        },
      };
  }
};

export default chatReducer;
