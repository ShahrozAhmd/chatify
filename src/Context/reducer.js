import * as actions from "./action-types";

export const initialState = {
// initial state to be place here
};

export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actions.ADD_NAME:
      return { ...state, name2:action.payload };
    case actions.ADD_ID:
      return { ...state,id2:action.payload };
    default:
      return { ...state };
  }
};


