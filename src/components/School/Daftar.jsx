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
    <div className="p-5 lg:p-8 lg:mx-[250px]">
      <div className="mx-auto px-4 sm:px-6 lg:mx-16">
        <div className="flex flex-col gap-4 lg:gap-10 lg:grid lg:grid-cols-3">
          {sortedData.map((school) => (
            <div key={school.id} to={`/school-detail/${school.id}`} className="w-full">
              <div
                // onClick={() => {
                //   setSaveId(school.id);
                //   console.log(school.id);
                //   // <SchoolDetail data={saveId} />;
                // }}
                className="border-4 rounded-lg p-4"
                style={{ margin: "10px 0" }}
              >
                <div className="w-full h-64 lg:h-64 overflow-hidden">
                  <img className="w-full h-full object-cover" src={require(`../../assets/img/school/${school.image}`)} alt={`${school.name}`} />
                </div>
                <div className="text-start text-lg lg:text-2xl mt-5 font-bold">
                  {school.name.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index !== school.name.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
                {/* <hr className="border-yellow-400 border-t-8 mt-2 w-[103px]" /> */}
                <div className="flex gap-3 text-start mt-3">
                  <img loading="lazy" src={Wisuda} alt="logo" />
                  <div className="text-[#000] text-[14px] flex items-center lg:text-lg leading-normal	">{school.students} Siswa</div>
                </div>
                <div className="flex gap-3 items-start text-start mt-3">
                  <img loading="lazy" className=" " src={Loc} alt="logo" />
                  <div className="text-[#000] text-[14px] flex items-center lg:text-lg leading-normal	">{school.address}</div>
                </div>
                <div className="flex gap-3 text-start mt-3">
                  <img loading="lazy" src={Telf} alt="Telf" />
                  <div className="text-[#000] text-[14px] flex items-center lg:text-lg leading-normal	">{school.phone}</div>
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
