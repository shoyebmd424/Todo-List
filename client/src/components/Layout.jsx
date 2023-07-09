import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ToastContainer } from "react-toastify";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
