import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
// import Foto from "../../assets/img/Rectangle108school.png";
import Wisuda from "../../assets/icon/ph_student-light.svg";
import Loc from "../../assets/icon/loc.svg";
import Telf from "../../assets/icon/telfon.svg";
import data from "../../assets/json/school.json";
// import SchoolDetail from "../SchoolDetail/Index";

const Daftar = () => {
  let schoolsData = data.bahasa
  const {globalState, updateGlobalState } = useContext(AppContext);
  const [saveId, setSaveId] = useState(null);
  console.log(schoolsData)
  return (
    <div className="p-5 lg:p-8">
      <div className="text-center text-3xl lg:text-5xl font-bold mb-10">DAFTAR SEKOLAH</div>
      <div className="grid grid-cols-2 lg:grid lg:grid-cols-3 gap-2 lg:gap-10">
        {schoolsData.map((school) => (
          <Link key={school.id} to={`/school-detail/${school.id}`}>
            <button
              onClick={() => {
                setSaveId(school.id);
                console.log(school.id);
                // <SchoolDetail data={saveId} />;
              }}
              className="border rounded-lg p-3"
            >
              <img className="flex justify-center w-full" src={require(`../../assets/img/school/${school.image}`)} alt={`${school.name}`} />
              <div className="text-start text-sm lg:text-2xl mt-5">{school.name}</div>
              <div className="flex gap-3 text-start mt-3">
                <img src={Wisuda} alt="logo" />
                <div className="text-[#8d8f91] text-[10px] flex items-center lg:text-lg">{school.students} Siswa</div>
              </div>
              <div className="flex gap-3 items-start text-start mt-3">
                <img className=" " src={Loc} alt="logo" />
                <div className="text-[#8d8f91] text-[10px] flex items-center lg:text-lg">{school.address}</div>
              </div>
              <div className="flex gap-3 text-start mt-3">
                <img src={Telf} alt="Telf" />
                <div className="text-[#8d8f91] text-[10px] flex items-center lg:text-lg">{school.phone}</div>
              </div>
            </button>
          </Link>
        ))}
      </div>
      {/* <div className="hidden">
        <SchoolDetail data={{ saveId }} />
      </div> */}
    </div>
  );
};

export default Daftar;
