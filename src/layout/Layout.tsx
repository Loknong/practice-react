import React, { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import NavBar from "./Navbar/NavBar";
import "./Layout.css";
interface childrenProps {
  children: React.ReactNode;
}

const Layout = ({ children }: childrenProps) => {
  const [toggleNav, setToggleNav] = useState(true);
  return (
    <div className="layout">
      <Header toggle={setToggleNav} isToggle={toggleNav} />
      <div className="middle">
        {/* <div className="navbar">{toggleNav && <NavBar />}</div> */}
        <div className="navbar"><NavBar  isShort={!toggleNav} /></div>
        <div className="content">{children}</div>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
