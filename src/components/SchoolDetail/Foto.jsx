import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import Foto from "../../assets/img/unsplash_pAtA8xe_iVM.png";
import data from "../../assets/json/about";

const Sambutan = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  const [html, setHtml] = useState({ __html: "" });
  const [html2, setHtml2] = useState({ __html: "" });
  const [html3, setHtml3] = useState({ __html: "" });

  // let descLoader = () => {
  //   setHtml({
  //     __html: `<div>${data.bahasa[0].desc.replace(/\n/g, "<br><br>")}</div>`,
  //   });
  //   setHtml2({
  //     __html: `<div>${data.bahasa[1].desc.replace(/\n/g, "<br><br>")}</div>`,
  //   });
  //   setHtml3({
  //     __html: `<div>${data.bahasa[2].desc.replace(/\n/g, "<br><br>")}</div>`,
  //   });
  // };

  // useEffect(() => {
  //   descLoader();
  // }, []);

  return (
    <>
      <div className="p-5 lg:p-8">
        <div
          style={{
            background:
              "linear-gradient(285deg, #09588D 40.58%, rgba(9, 88, 141, 0.00) 94.41%)              ",
          }}
          className="w-full rounded-xl mt-10"
        >
          <div className="grid grid-cols-2 mt-0 lg:mt-10 lg:gap-0 gap-5">
            <div className="flex justify-start h-full lg:h-full">
              <img src={Foto} className="object-cover rounded-lg" />
            </div>
            <div className="text-white p-5 lg:p-14">
              <div className="text-[12px] lg:text-4xl font-bold">
                Sambutan Kepala Sekolah
              </div>
              <div className="text-[10px] lg:text-[25px]">
                Dr. Setiawan Nazir
              </div>
              <div className="flex flex-col gap-5 text-[4px] lg:text-sm mt-5 lg:mt-10 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                beatae reiciendis id fugiat et? Harum, voluptatibus omnis nemo
                cumque doloremque porro accusamus libero facilis expedita modi
                quod corrupti veritatis excepturi!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sambutan;
