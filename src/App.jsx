import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Services from "./Services"; 
import Error from "./Error";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {ThemeProvider} from 'styled-components';
import { GlobalStyle } from "./GlobalStyle";
import GoToTop from "./components/GoToTop";

const App = () => {
  const theme ={
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/Portfolio/" element = {<Home />} />
      <Route path="/Portfolio/about" element = {<About />} />
      <Route path="/Portfolio/services" element = {<Services />} />
      <Route path="/Portfolio/contact" element = {<Contact />} />
      <Route path="/Portfolio/*" element = {<Error />} />
    </Routes>
    <GoToTop />
    <Footer />
    </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
