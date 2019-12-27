import React, { useReducer } from "react";
import { basicTheme, blueTheme } from "../themes";

const initialState = {
  theme: { ...basicTheme }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "theme":
      if (action.target === basicTheme.themeName) {
        return { ...state, theme: { ...basicTheme } };
      } else if (action.target === blueTheme.themeName) {
        return { ...state, theme: { ...blueTheme } };
      }
      return state;
    default:
      return state;
  }
};

const AppContext = React.createContext();
const AppContextConsumer = AppContext.Consumer;

const AppContextProvider = props => {
  const [appContext, dispatchApp] = useReducer(reducer, initialState);
  const value = { appContext, dispatchApp };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
export { AppContext, AppContextConsumer };
