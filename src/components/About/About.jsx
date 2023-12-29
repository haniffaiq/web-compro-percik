import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";

const About = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);

  return <div>{globalState.globalProperty === "IND" ? "Ebaut" : "About"}</div>;
};

export default About;
