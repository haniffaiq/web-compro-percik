import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import "./ManagementStyle.css";

const ManagementTittle = () => {
  const { globalState } = useContext(AppContext);

  return (
    <div>
      <div className="lg:flex flex-col items-center justify-center lg:flex-row lg:justify-start hidden">
        <div className="tittle-container mb-[-28px] bg-[#ebebeb] lg:mb-0 lg:bg-transparent w-full">
          <p className="text-black font-segoeui text-3xl font-bold lg:text-5xl">
            {globalState.globalProperty === "IND" ? "MANAJEMEN" : "MANAGEMENT"}
          </p>
        </div>
        <div className="yellow-bar-header border-t-7 border-yellow-400 w-103 absolute top-218 left-125 lg:static lg:border-0"></div>
      </div>
    </div>
  );
};

export default ManagementTittle;
