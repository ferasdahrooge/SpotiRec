import React from "react";
import Header from "../Components/Header/Header";
import Home from "../Content/Home/Home";
import Footer from "../Components/Footer/Footer";
import "./Layout.scss";

interface LayoutProps {
  content: React.FC;
}
const Layout: React.FC<LayoutProps> = ({ content: Content }) => {
  return (
    <div className='Main'>
      <Header
        title={{ "/": "SpotiRec" }}
        links={{ "/": "Home", "/about": "About" }}
      />
      <Content />
      <Footer name='Powered By Some Random' />
    </div>
  );
};

export default Layout;
