import React, { createContext, useContext } from "react";
import { useAppReducer } from './reducers';

const AppContext = createContext();
const { Provider } = AppContext;

const AppProvider = ({ value = [], ...props }) => {
  // I'd like to rename this to useAppReducer
  const [state, dispatch] = useAppReducer({
    currentUser: {}, 
    products: [], // default value ...
    categories: [],
    currentCategory: '',
  });
  // use this to confirm it works!
  console.log(state);
  return <Provider value={[state, dispatch]} {...props} />;
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };