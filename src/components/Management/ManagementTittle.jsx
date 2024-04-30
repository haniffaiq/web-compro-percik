import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import "./ManagementStyle.css";

const ManagementTittle = () => {
  const { globalState } = useContext(AppContext);

  return (
    <div>
      <div className="tittle-management-wrapper">
        <div className="tittle-container">
          <p>{globalState.globalProperty === "IND" ? "MANAJEMEN" : "MANAGEMENT"}</p>
        </div>
        <div className="yellow-bar-header"></div>
      </div>
    </div>
  );
};

export default ManagementTittle;
