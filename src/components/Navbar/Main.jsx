import React from "react";
import Navaman from "./Navaman";
import Navbar1 from "./Navbar1";
import { useLocation } from "react-router-dom";

const Main = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  console.log(isHomePage);

  //   1srt home page?

  return <>{isHomePage ? <Navbar1 /> : <Navaman />}</>;
  //   const isAlternatePage = window.location.pathname === "/";
  //   console.log(isAlternatePage);
  //   return <>{isAlternatePage ? <Navaman /> : <Navbar1 />}</>;
};

export default Main;
