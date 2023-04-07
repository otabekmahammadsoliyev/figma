/* eslint-disable no-unused-vars */
import logo from "./logo.svg";
import Navbar from "./components/Navbar/Navbar";

import Footer from "./components/Footer/Footer";
import HeroHeader from "./Page/Home/HeroHeader";
import AboutHome from "./Page/Home/AboutHome";
import SkillsHome from "./Page/Home/SkillsHome";
import Homep from "./Page/Home/Homep";
import Portfolio from "./Page/Home/Portfolio";
import Contact from "./Page/Home/Contact";

function App() {
  return (
    <>
      {/* <Navbar /> */}
       <HeroHeader />
      <Footer />
      <AboutHome />   
      <SkillsHome />
      <Portfolio />
      <Homep />
      <Contact /> 
    </>
  );
}

export default App;
