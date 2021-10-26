import * as actions from "../action-types";
import { initialStates } from "Context/state";


const {auth} = initialStates;

export const reducer = (state =initialStates, action) => {

  switch (action.type) {
    case actions.ADD_NAME:
      return { ...state, auth:{...auth,name2:action.payload }  };
    case actions.ADD_ID:
      return { ...state,id2:action.payload };
    default:
      return { ...state };
  }
};


