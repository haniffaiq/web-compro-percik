import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import Header from "./Header";
import About from "./About";
import Partnership from "./Partnership";
import Sekolah from "./Sekolah";
import Berita from "./Berita";

const Home = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  console.log(globalState, "DIHOME");

  return (
    <>
      <Header />
      <About />
      <Partnership />
      <Sekolah />
      <Berita />
    </>
  );
};

export default Home;
