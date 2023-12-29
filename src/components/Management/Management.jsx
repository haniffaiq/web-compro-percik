import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";

const Management = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);

  return (
    <div>
      {globalState.globalProperty === "IND" ? "Manajemen" : "Management"}
    </div>
  );
};

export default Management;
