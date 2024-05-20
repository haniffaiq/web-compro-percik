import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import "./ManagementStyle.css";

const ManagementTittle = () => {
  const { globalState } = useContext(AppContext);

  return (
    <div>
      <div className="lg:flex flex-col items-center justify-center lg:flex-row lg:justify-start hidden">
        <div className="tittle-container mb-[-28px] bg-[#ebebeb] lg:mb-0 lg:bg-transparent w-full">
          <p className="text-black  text-3xl font-bold lg:text-5xl">{globalState.globalProperty === "IND" ? "Manajemen" : "Management"}</p>
        </div>
      </div>
    </div>
  );
};

export default ManagementTittle;
