import React, { createContext, useContext, useReducer } from "react";

export const Store = createContext("default value");
Store.displayName = "Global Store";

export const useStore = () => useContext(Store);

const StoreProvider = ({ children, initialState, reducer}) => {
  
  const {authReducer,chatReducer}  = reducer;
  // const {auth,chats}  = initialState;

  const [authState, dispatchAuth] = useReducer(authReducer,initialState);
  const [chatState, dispatchChat] = useReducer(chatReducer,initialState);

  return <Store.Provider value={{authState,chatState, dispatchAuth,dispatchChat}}>{children}</Store.Provider>;
};


export default StoreProvider;
