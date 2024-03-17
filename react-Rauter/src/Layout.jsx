import React from "react";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Home from "./component/home/Home";
import About from "./component/About/About";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
