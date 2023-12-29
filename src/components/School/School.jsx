import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";

const School = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);

  return (
    <div>{globalState.globalProperty === "IND" ? "Sekolah" : "School"}</div>
  );
};

export default School;
