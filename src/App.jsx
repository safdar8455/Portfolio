import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Services from "./Services"; 
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/Portfolio/" element = {<Home />} />
      <Route path="/Portfolio/about" element = {<About />} />
      <Route path="/Portfolio/services" element = {<Services />} />
      <Route path="/Portfolio/contact" element = {<Contact />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  );
};

export default App;
