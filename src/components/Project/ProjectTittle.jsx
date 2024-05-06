import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import "./ProjectStyle.css";

const ProjectTittle = () => {
  const { globalState } = useContext(AppContext);

  return (
    <div>
      <div className="tittle-management-wrapper">
        <div className="tittle-container">
          <p>{globalState.globalProperty === "IND" ? "PROYEK" : "PROJECT"}</p>
        </div>
        <div className="yellow-bar-header"></div>
      </div>
    </div>
  );
};

export default ProjectTittle;
