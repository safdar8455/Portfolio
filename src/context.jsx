import React, { useContext, useReducer } from "react";
import { useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const API = "http://safdarapi.herokuapp.com";

const intialState = {
  name: "",
  image: "",
  services: [],
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

  // to get the api data

  const getServices = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "GET_SERVICES", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  // to call the api
  useEffect(() => {
    getServices(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider, useGlobalContext };
