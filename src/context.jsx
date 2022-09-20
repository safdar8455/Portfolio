import React, { useContext, useReducer } from "react";
import { useEffect } from "react";
import reducer from "./reducer";
import {data} from './data';

const AppContext = React.createContext();

// const API = "http://safdarapi.herokuapp.com";

const intialState = {
  name: "",
  image: "",
  para: "",
  services: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        title: "Hey folks,",
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
        para: "Hello! I'm Safdar Hussain, a Web Developer based in Karachi, who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends. During my graduation from Sindh Madressatul Islam University, I developed interest in Web Development and dedicated my efforts in learning modern web technologies.",
        
      },
    });
  };

  // to get the api data

  // const getServices = async (url) => {

  //     const res = await fetch(url);
  //     const data = await  res.json();
  //     console.log(data)
  //     dispatch({ type: "GET_SERVICES", payload: data });

  // };

  



  // dispatch({ type: "GET_SERVICES", payload: data });


  // to call the api

  

  // fetch(API)
  //   .then((res) => res.json())
  //   .then((DDD) => setApiData(DDD));

  // const getServices = async () =>{
  //   const res = await fetch(API);
  //   const data = await res.json();
  //   dispatch({ type: "GET_SERVICES", payload: data });
  // }

  // getServices();

  useEffect(() => {
    // getServices();
    dispatch({ type: "GET_SERVICES", payload: data })
    
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider, useGlobalContext };
