import React, { useContext } from "react";
import { Carousel, ConfigProvider } from "antd";
import AppContext from "../../context/AppContext";
import Rec1 from "../../assets/img/Rectangle18.png";
import Rec2 from "../../assets/img/Rectangle182.png";
import Rec3 from "../../assets/img/Rectangle183.png";
import Loc from "../../assets/icon/Group 3.svg";
import { Link } from "react-router-dom";
import schoolsData from "../../assets/json/sekolah.json";

schoolsData = schoolsData.bahasa.slice(0, 3)
const SchoolCard = ({ name, image, address }) => (
  <div className="h-[200px] w-[200px] lg:h-[400px] lg:w-[400px]">
    <div
      className="h-full object-cover rounded-xl"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col justify-end h-full p-5">
        <div className="font-bold text-3xl text-white">{name}</div>
        <div className="flex gap-2 items-center">
          <div className="text-white">{address}</div>
        </div>
      </div>
    </div>
  </div>
);


const Sekolah = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  // console.log(globalState, "DIHeader");

  return (
    <>
      <div className="flex flex-col gap-2 p-5 lg:p-14">
        <div className="flex justify-between items-center">
          <div className="text-xl lg:text-3xl font-bold mb-5 text-black lg:flex items-center">
            DAFTAR SEKOLAH
          </div>
          <Link to="/school">
            <button className="lg:flex hidden text-sm lg:text-lg text-black items-center">
              SELENGKAPNYA {">>"}
            </button>
          </Link>
        </div>
        <div className="flex w-full overflow-y-hidden lg:overflow-hidden lg:grid lg:grid-cols-3 gap-5 lg:gap-28 lg:w-full container">
          {schoolsData.map(school => (
            <SchoolCard
              key={school.id}
              name={school.name}
              image={require(`../../assets/img/school/${school.image}`)}
              address={school.address}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sekolah;
