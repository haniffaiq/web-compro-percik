import React, { useContext, useState, useEffect } from "react";
import AppContext from "../../context/AppContext";
import dataSambutan from "../../assets/json/about.json";

const Sambutan = () => {
  const { globalState } = useContext(AppContext);
  const [html, setHtml] = useState({ __html: "" });
  const [selectedData, setSelectedData] = useState([]);

  useEffect(() => {
    let selectedData = [];

    if (globalState.globalProperty === "IND") {
      selectedData = dataSambutan.bahasa;
    } else {
      selectedData = dataSambutan.english;
    }

    // Combine all descriptions into a single string with new lines for each
    const combinedDesc = selectedData.map((item) => item.desc).join("\n\n");

    setHtml({
      __html: `<p>${combinedDesc.replace(/\n/g, "<br><br>")}</p>`,
    });
    setSelectedData(selectedData);

    window.scrollTo(0, 0);
  }, [globalState, dataSambutan]);

  return (
    <>
      {selectedData.map((user) => (
        <div key={user.name} className="w-full lg:flex lg:flex-row gap-[20px] flex-col flex lg:mx-[190px] mt-[30px] mx-[20px] ">
          <img loading="lazy" src={require(`../../assets/${user.img}`)} alt="img" className="rounded-lg lg:w-[318px] lg:h-[394px] w-[330px] h-[400px] " />
          <div className="lg:flex-col flex flex-col lg:mt-[37px] mt-[-30px]">
            <div className="flex flex-col">
              <h1 className="lg:text-[40px] text-[26px] mt-[20px] lg:mt-0 w-[285px] mx-[40px] lg:w-full" style={{ fontFamily: "Hedvig Letters Serif, serif", lineHeight: 1.4 }}>
                {user.name}
              </h1>
              <h1 className="lg:text-[20px] text-[14px] mx-[40px]" style={{ fontFamily: "Maven Pro", color: "#034da2" }}>
                {user.title}
              </h1>
            </div>
            <div className="leading-normal lg:w-[881px] lg:mt-[50px] lg:mb-[50px] mt-[30px] lg:text-[20px] text-[16px] mb-[50px] mx-[40px] w-[270px]" style={{ fontFamily: "Maven Pro" }}>
              <p dangerouslySetInnerHTML={html} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Sambutan;
