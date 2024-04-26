import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import Foto from "../../assets/img/1 13264.webp";

const Alur = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  console.log(globalState.globalProperty);
  return (
    <>
      <div className="p-5 lg:p-8">
        <div className="text-center text-3xl lg:text-5xl font-bold mb-5">ALUR PENERIMAAN</div>
        <div className="flex justify-center">
          <div className=" text-center text-xs lg:text-md w-[900px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, non quae nihil dicta nulla a? Ut expedita dolorem error iusto, ratione optio ducimus animi eaque, vitae praesentium quam laboriosam inventore! Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Consequatur, voluptatem eius! Porro incidunt quidem error placeat possimus, mollitia voluptates, aspernatur nihil quod nulla tempore est in provident laudantium. Animi, incidunt.
          </div>
        </div>
        <div className="w-full flex justify-center mt-10">
          <img loading="lazy" src={Foto} alt="lazy loading" />
        </div>
      </div>
    </>
  );
};

export default Alur;
