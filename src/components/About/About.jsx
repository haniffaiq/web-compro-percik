import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import Foto from "../../assets/img/unsplash_pAtA8xe_iVM.png";
import data from "../../assets/json/about.json";

const AboutUs = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);

  let selectedData = {};
  if (globalState.globalProperty === "IND") {
    selectedData = data.bahasa;
  } else {
    selectedData = data.english;
  }

  const [html, setHtml] = useState({ __html: "" });
  const [html2, setHtml2] = useState({ __html: "" });
  // const [html3, setHtml3] = useState({ __html: "" });

  let descLoader = () => {
    setHtml({
      __html: `<div>${selectedData[0].desc.replace(/\n/g, "<br><br>")}</div>`,
    });
    setHtml2({
      __html: `<div>${selectedData[1].desc.replace(/\n/g, "<br><br>")}</div>`,
    });
    // setHtml3({
    //   __html: `<div>${selectedData[2].desc.replace(/\n/g, "<br><br>")}</div>`,
    // });
  };

  useEffect(() => {
    descLoader();
  }, []);

  return (
    <>
      <div className="p-5 lg:p-8">
        <div className="text-center text-3xl lg:text-5xl font-bold mb-10 ">TENTANG KAMI</div>
        {selectedData.map((value, index) => {
          return (
            <div
              style={{
                background: "linear-gradient(90deg, #09588D 50%, rgba(9, 88, 141, 0.00) 92.59%)",
              }}
              className="w-full rounded-xl mt-10"
            >
              <div className="grid grid-cols-2 mt-0 lg:mt-10 lg:gap-0 gap-5">
                <div className="text-white p-5 lg:p-14">
                  <div className="text-[12px] lg:text-4xl font-bold">{value.title}</div>
                  <div className="text-[10px] lg:text-[25px]">{value.name}</div>
                  <div className="flex flex-col gap-5 text-[4px] lg:text-sm mt-5 lg:mt-10 ">{index == 0 ? <div dangerouslySetInnerHTML={html} /> : index == 1 ? <div dangerouslySetInnerHTML={html2} /> : <div></div>}</div>
                </div>
                <div className="flex justify-end h-full lg:h-full">
                  <img src={Foto} className="object-cover rounded-lg" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AboutUs;
