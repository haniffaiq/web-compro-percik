import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import "./EventDetailStyle.css";

const EventDetail = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  return (
    <>
      <div className="flex gap-1 ml-[35px] py-9">
        <Link to="/" className="">
          {globalState.globalProperty === "IND" ? "Home" : "Home"}
        </Link>
        <span> / </span>
        <Link to="/project" className="">
          {globalState.globalProperty === "IND" ? "Detail Berita & Acara" : "News & Event Details"}
        </Link>
      </div>
    </>
  );
};

export default EventDetail;
