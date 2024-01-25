import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import FotoHeader from "../../assets/img/image19.png";
import Misi from "../../assets/img/image26.png";
import { Carousel, ConfigProvider } from "antd";
import Wisuda from "../../assets/icon/ph_student-light.svg";
import Loc from "../../assets/icon/loc.svg";
import Telf from "../../assets/icon/telfon.svg";
import Foto from "../../assets/img/Rectangle108school.png";

const Header = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);

  return (
    <>
      <div className="p-5 lg:p-14">
        <div className="text-center lg:text-start text-3xl lg:text-5xl font-bold mb-10">
          SD Perguruan Cikini
        </div>
        <ConfigProvider
          theme={{
            components: {
              Carousel: {
                dotHeight: 10,
                dotWidth: 10,
                dotActiveWidth: 10,
              },
            },
          }}
        >
          <Carousel autoplay>
            <div className="h-[300px] lg:h-[700px]">
              <div
                className="h-full object-cover border border-none rounded-lg"
                style={{
                  backgroundImage: `url(${FotoHeader})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  //   borderRadius: "10px",
                }}
              ></div>
            </div>
            <div className="h-[300px] lg:h-[700px]">
              <div
                className="h-full object-cover border border-none rounded-lg"
                style={{
                  backgroundImage: `url(${FotoHeader})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  //   borderRadius: "10px",
                }}
              ></div>
            </div>
          </Carousel>
        </ConfigProvider>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2 max-w-[150px] lg:max-w-[700px]">
            <div className="mt-5 text-sm lg:text-lg">Detail Sekolah</div>
            <div className="flex gap-3 text-start ">
              <img src={Wisuda} alt="logo" />
              <div className="text-[#8d8f91] text-[10px] flex items-center lg:text-lg">
                200 Siswa
              </div>
            </div>
            <div className="flex gap-3 items-start text-start ">
              <img className=" " src={Loc} alt="logo" />
              <div className="text-[#8d8f91] text-[10px] flex items-center lg:text-lg">
                Jl. Cikini Raya No.74-76 14, RT.14/RW.5, Cikini, Kec. Menteng,
                Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330
              </div>
            </div>
            <div className="flex gap-3 text-start ">
              <img src={Telf} alt="logo" />
              <div className="text-[#8d8f91] text-[10px] flex items-center lg:text-lg">
                085xxxxxx
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button className="border py-5 px-7 border-none bg-[#09588D] rounded-lg text-white font-bold text-[10px] lg:text-xl">
              Website Sekolah
            </button>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center">
          <div className="text-3xl lg:text-5xl font-bold">Visi</div>
          <div className="w-full lg:w-[900px] text-center text-sm lg:text-lg mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, reiciendis? Natus rem culpa, aliquid voluptas
            necessitatibus dicta! Dolorem ut voluptas ducimus voluptates ratione
            velit! Aliquam aliquid quae deserunt velit magnam! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Vero unde, tempore expedita
            esse nemo omnis laborum recusandae, aspernatur, nisi beatae
            adipisci. Repudiandae, magnam ea. Quas hic quis nam enim rem.
          </div>
          <div className="text-3xl lg:text-5xl font-bold mt-14">Misi</div>
          <div className=" mt-10">
            <img src={Misi} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
