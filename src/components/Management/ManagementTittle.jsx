import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import "./ManagementStyle.css";

const ManagementTittle = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);

  return (
    <div>
      <div className="tittle-management-wrapper">
        <div className="tittle-container">
          <p>{globalState.globalProperty === "IND" ? "MANAJEMEN" : "MANAGEMENT"}</p>
        </div>
        <div className="deskripsi-management-container">
          <p>
            Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
            Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManagementTittle;
