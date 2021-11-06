import * as actions from "../action-types";
import { initialStates } from "Context/state";

const { chats } = initialStates;

const chatReducer = (state = chats, action) => {
  switch (action.type) {
    case actions.CREATE_NEW_USER_INIT:
      return { ...state, chats: { ...chats } };
    case actions.CREATE_NEW_USER_SUCCESS:
      return { ...state, chats: { ...chats } };
    case actions.CREATE_NEW_USER_FAIL:
      return { ...state, chats: { ...chats } };
  }
};

export default chatReducer;
