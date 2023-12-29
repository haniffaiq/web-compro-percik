import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";

const Project = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);

  return (
    <div>{globalState.globalProperty === "IND" ? "Proyek" : "Project"}</div>
  );
};

export default Project;
