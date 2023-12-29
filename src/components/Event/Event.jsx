import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";

const Event = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);

  return <div>{globalState.globalProperty === "IND" ? "Acara" : "Event"}</div>;
};

export default Event;
