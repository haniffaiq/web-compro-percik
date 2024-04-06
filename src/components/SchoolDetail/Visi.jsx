import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import data from "../../assets/json/school";

const Visi = (props) => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  let a = props.idSchool;
  console.log(globalState.globalProperty );
  return (
    <>
      <div className="p-9">
        <div className="text-center text-3xl lg:text-5xl font-bold mb-10">
          Visi
        </div>
        <div className="text-md lg:text-xl text-center">
          {data.bahasa[a - 1].visi}
        </div>
        <div className="text-center text-3xl lg:text-5xl font-bold mb-10 mt-10">
          Misi
        </div>
        <div className="flex justify-center">
          <img loading="lazy" src={require(`../../assets/img${data.bahasa[a - 1].misi}`)} />
        </div>
      </div>
    </>
  );
};

export default Visi;
