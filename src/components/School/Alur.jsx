import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import Foto from "../../assets/img/image 23.png";

const Alur = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);

  return (
    <>
      <div className="p-8">
        <div className="text-center text-5xl font-bold mb-5">
          Alur Penerimaan
        </div>
        <div className="flex justify-center">
          <div className=" text-center text-md w-[900px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
            non quae nihil dicta nulla a? Ut expedita dolorem error iusto,
            ratione optio ducimus animi eaque, vitae praesentium quam laboriosam
            inventore! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur, voluptatem eius! Porro incidunt quidem error placeat
            possimus, mollitia voluptates, aspernatur nihil quod nulla tempore
            est in provident laudantium. Animi, incidunt.
          </div>
        </div>
        <div className="w-full flex justify-center mt-10">
          <img src={Foto} />
        </div>
      </div>
    </>
  );
};

export default Alur;
