import React from "react";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import SideBar from "../SideBar/SideBar";

const Layout = ({ sideBarOpened, children }) => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Navigation />
      {sideBarOpened && <SideBar />}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
