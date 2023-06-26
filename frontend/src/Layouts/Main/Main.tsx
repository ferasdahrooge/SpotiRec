import React from "react";
import Header from "../../Components/Header/Header";
import Home from "../../Content/Home/Home";
import Footer from "../../Components/Footer/Footer";
import "./Main.scss";

const Main: React.FC = () => {
  return (
    <div className='Main'>
      <Header
        title={{ "/": "SpotiRec" }}
        links={{ "/": "Home", "/about": "About" }}
      />
      <Home />
      <Footer name='Powered By Some Random' />
    </div>
  );
};

export default Main;
