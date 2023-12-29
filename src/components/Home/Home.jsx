import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";

const Home = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  console.log(globalState, "DIHOME");

  return <div>{globalState.globalProperty === "IND" ? "Halo" : "Hello"}</div>;
};

export default Home;
