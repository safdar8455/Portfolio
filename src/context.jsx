import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const intialState = {
  name: "",
  image: "",
};



const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Safdar Hussain",
        image: "./images/hero.svg",
        para: "I'm Safdar Hussain. A Full stack Developer, Building a successful product is a challenge. I am highly energetic in user experience design, interfaces and web development.",
      },
    });
  };
  
  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Safdar Hussain",
        image: "./images/about1.png",
        para: "I'm Safdar Hussain. A Full stack Developer, Intend to work in a challenging and competitive environment where a strong sense of responsibility and commitment requires, where the dignity of work provides job satisfaction, and the place of work provides potential avenues for learning.",
      },
    });
  };

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider, useGlobalContext };
