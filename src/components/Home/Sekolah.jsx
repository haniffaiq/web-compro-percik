import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";

import Wisuda from "../../assets/icon/ph_student-light.svg";
import Loc from "../../assets/icon/loc.svg";
import Telf from "../../assets/icon/telfon.svg";
import data from "../../assets/json/school.json";
import selengkapnya from "../../assets/img/Home/Selengkapnya.png"



const Sekolah = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  console.log(globalState.globalProperty);
  let schoolsData = data.bahasa
  const [saveId, setSaveId] = useState(null);
  console.log(globalState.globalProperty + saveId);

  return (
    <>
      <div className="flex flex-col gap-2 p-5 lg:p-14">

        {/* <div className="flex w-full overflow-y-hidden lg:overflow-hidden lg:grid lg:grid-cols-3 gap-5 lg:gap-28 lg:w-full container">
          {data.bahasa.slice(0, 3).map(school => (
            <SchoolCard
              key={school.id}
              name={school.name}
              image={require(`../../assets/img/school/${school.image}`)}
              address={school.address}
            />
          ))}
        </div> */}

        <div className="p-5 lg:p-8">
          <div className="text-center text-3xl lg:text-5xl font-bold mb-10">DAFTAR SEKOLAH</div>
          <div className="mx-auto max-w-fit px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 lg:gap-10 lg:grid lg:grid-cols-5">
              {schoolsData.slice(0, 5).map((school) => (
                <div key={school.id} to={`/school-detail/${school.id}`} className="w-[300px]">
                  <div
                    // onClick={() => {
                    //   setSaveId(school.id);
                    //   console.log(school.id);
                    // }}
                    className="border rounded-lg p-3 w-full"
                    style={{ height: '100%' }}
                  >
                    <div className="w-full h-32 lg:h-64 overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={require(`../../assets/img/school/${school.image}`)}
                        alt={`${school.name}`}
                      />
                    </div>
                    <div className="text-start text-sm lg:text-2xl mt-5 font-bold">{school.name}</div>
                    <hr className="border-yellow-400 border-t-8 mt-2 w-[103px]" />
                    <div className="flex gap-3 text-start mt-3">
                      <img loading="lazy" src={Wisuda} alt="logo" />
                      <div className="text-[#8d8f91] text-[10px] flex items-center lg:text-lg">{school.students} Siswa</div>
                    </div>
                    <div className="flex gap-3 items-start text-start mt-3">
                      <img loading="lazy" className=" " src={Loc} alt="logo" />
                      <div className="text-[#8d8f91] text-[10px] flex items-center lg:text-lg">{school.address}</div>
                    </div>
                    <div className="flex gap-3 text-start mt-3">
                      <img loading="lazy" src={Telf} alt="Telf" />
                      <div className="text-[#8d8f91] text-[10px] flex items-center lg:text-lg">{school.phone}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Link to="/school" className="flex mt-auto item-center justify-center">
          <button className="font-semibold item-center">
            <img src={selengkapnya} alt="Selengkapnya" />
          </button>
        </Link>

      </div>
    </>
  );
};

export default Sekolah;
