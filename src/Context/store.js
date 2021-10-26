import React, { createContext, useContext, useReducer } from "react";

export const Store = createContext("default value");
Store.displayName = "Global Store";

export const useStore = () => useContext(Store);

const StoreProvider = ({ children, initialState, reducer }) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  
  return <Store.Provider value={[state, dispatch]}>{children}</Store.Provider>;
};

export default StoreProvider;
 