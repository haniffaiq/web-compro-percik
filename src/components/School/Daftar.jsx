import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";

import Wisuda from "../../assets/icon/ph_student-light.svg";
import Loc from "../../assets/icon/loc.svg";
import Telf from "../../assets/icon/telfon.svg";
import data from "../../assets/json/school.json";

const Daftar = () => {
  let schoolsData = data.bahasa;
  const { globalState, updateGlobalState } = useContext(AppContext);
  const [saveId, setSaveId] = useState(null);
  console.log(globalState.globalProperty + saveId);

  let sortedData = {};
  if (globalState.globalProperty === "IND") {
    sortedData = [...data.bahasa];
  } else {
    sortedData = [...data.english];
  }

  return (
    <div className="p-5 lg:p-8 lg:mx-[150px] lg:mb-[120px]">
      <div className="mx-auto px-4 sm:px-6 lg:mx-16">
        <div className="flex flex-col gap-4 lg:gap-10 lg:flex lg:flex-col ">
          {sortedData.map((school) => (
            <div key={school.id} to={`/school-detail/${school.id}`} className="w-full  ">
              <div
                // onClick={() => {
                //   setSaveId(school.id);
                //   console.log(school.id);
                //   // <SchoolDetail data={saveId} />;
                // }}
                className="flex flex-row"
                style={{ margin: "50px 0px 0px 0px" }}
              >
                <div className="w-full h-64 lg:h-[350px] lg:w-[700px] overflow-hidden">
                  <img className="w-full h-full object-cover rounded-xl" src={require(`../../assets/img/school/${school.image}`)} alt={`${school.name}`} />
                </div>
                <div className="ml-[74px]">
                  <div className="text-start text-lg lg:text-2xl" style={{ fontFamily: "Hedvig Letters Serif, serif" }}>
                    {school.name.split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index !== school.name.split("\n").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                  {/* <hr className="border-yellow-400 border-t-8 mt-2 w-[103px]" /> */}
                  {/* <div className="flex gap-3 text-start mt-3">
                    <div className="text-[#000] text-[14px] flex items-center lg:text-lg leading-normal	">{school.students} Siswa</div>
                  </div> */}
                  <div className="flex gap-3 items-start text-start mt-[47px] w-[425px]">
                    <div className="text-[#000] text-[14px] flex items-center lg:text-lg leading-normal	" style={{ fontFamily: "Maven Pro" }}>
                      {school.address}
                    </div>
                  </div>
                  <div className="flex gap-3 text-start mt-[47px] flex-col">
                    <div className="text-[#000] text-[14px] lg:text-lg leading-normal	flex flex-col" style={{ fontFamily: "Maven Pro" }}>
                      {school.phone.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          {index !== school.phone.split("\n").length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Daftar;
