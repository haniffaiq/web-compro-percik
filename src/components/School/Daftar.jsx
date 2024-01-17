import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import Foto from "../../assets/img/Rectangle108school.png";
import Wisuda from "../../assets/icon/ph_student-light.svg";
import Loc from "../../assets/icon/loc.svg";
import Telf from "../../assets/icon/telfon.svg";

const Daftar = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);

  return (
    <>
      <div className="p-8">
        <div className="text-center text-5xl font-bold mb-10">Daftar Sekolah</div>
        <div className="grid grid-cols-3 gap-10">
          <button className="border rounded-lg p-3">
            <img className="flex justify-center  w-full" src={Foto} />
            <div className="text-start text-2xl mt-5">TK Perguruan Cikini, Jakarta Pusat</div>
            <div className="flex gap-3 text-start mt-3">
              <img src={Wisuda} alt="logo" />
              <div className="text-[#8d8f91]">200 Siswa</div>
            </div>
            <div className="flex gap-3 items-start text-start mt-3">
              <img className=" " src={Loc} alt="logo" />
              <div className="text-[#8d8f91]">Jl. Cikini Raya No.74-76 14, RT.14/RW.5, Cikini, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330</div>
            </div>
            <div className="flex gap-3 text-start mt-3">
              <img src={Telf} alt="logo" />
              <div className="text-[#8d8f91]">085xxxxxx</div>
            </div>
          </button>
          <button className="border rounded-lg p-3">
            <img className="flex justify-center  w-full" src={Foto} />
            <div className="text-start text-2xl mt-5">SD Perguruan Cikini, Jakarta Pusat</div>
            <div className="flex gap-3 text-start mt-3">
              <img src={Wisuda} alt="logo" />
              <div className="text-[#8d8f91]">200 Siswa</div>
            </div>
            <div className="flex gap-3 items-start text-start mt-3">
              <img className=" " src={Loc} alt="logo" />
              <div className="text-[#8d8f91]">Jl. Cikini Raya No.74-76 14, RT.14/RW.5, Cikini, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330</div>
            </div>
            <div className="flex gap-3 text-start mt-3">
              <img src={Telf} alt="logo" />
              <div className="text-[#8d8f91]">085xxxxxx</div>
            </div>
          </button>
          <button className="border rounded-lg p-3">
            <img className="flex justify-center  w-full" src={Foto} />
            <div className="text-start text-2xl mt-5">SMP Perguruan Cikini, Jakarta Pusat</div>
            <div className="flex gap-3 text-start mt-3">
              <img src={Wisuda} alt="logo" />
              <div className="text-[#8d8f91]">200 Siswa</div>
            </div>
            <div className="flex gap-3 items-start text-start mt-3">
              <img className=" " src={Loc} alt="logo" />
              <div className="text-[#8d8f91]">Jl. Cikini Raya No.74-76 14, RT.14/RW.5, Cikini, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330</div>
            </div>
            <div className="flex gap-3 text-start mt-3">
              <img src={Telf} alt="logo" />
              <div className="text-[#8d8f91]">085xxxxxx</div>
            </div>
          </button>
          <button className="border rounded-lg p-3">
            <img className="flex justify-center  w-full" src={Foto} />
            <div className="text-start text-2xl mt-5">SMA Perguruan Cikini, Jakarta Selatan</div>
            <div className="flex gap-3 text-start mt-3">
              <img src={Wisuda} alt="logo" />
              <div className="text-[#8d8f91]">200 Siswa</div>
            </div>
            <div className="flex gap-3 items-start text-start mt-3">
              <img className=" " src={Loc} alt="logo" />
              <div className="text-[#8d8f91]">Jl. Cikini Raya No.74-76 14, RT.14/RW.5, Cikini, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330</div>
            </div>
            <div className="flex gap-3 text-start mt-3">
              <img src={Telf} alt="logo" />
              <div className="text-[#8d8f91]">085xxxxxx</div>
            </div>
          </button>
          <button className="border rounded-lg p-3">
            <img className="flex justify-center  w-full" src={Foto} />
            <div className="text-start text-2xl mt-5">SMK 1 Perguruan Cikini, Jakarta Utara</div>
            <div className="flex gap-3 text-start mt-3">
              <img src={Wisuda} alt="logo" />
              <div className="text-[#8d8f91]">200 Siswa</div>
            </div>
            <div className="flex gap-3 items-start text-start mt-3">
              <img className=" " src={Loc} alt="logo" />
              <div className="text-[#8d8f91]">Jl. Cikini Raya No.74-76 14, RT.14/RW.5, Cikini, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330</div>
            </div>
            <div className="flex gap-3 text-start mt-3">
              <img src={Telf} alt="logo" />
              <div className="text-[#8d8f91]">085xxxxxx</div>
            </div>
          </button>
          <button className="border rounded-lg p-3">
            <img className="flex justify-center  w-full" src={Foto} />
            <div className="text-start text-2xl mt-5">SMK 2 Musik Perguran Cikini, Jakarta Selatan</div>
            <div className="flex gap-3 text-start mt-3">
              <img src={Wisuda} alt="logo" />
              <div className="text-[#8d8f91]">200 Siswa</div>
            </div>
            <div className="flex gap-3 items-start text-start mt-3">
              <img className=" " src={Loc} alt="logo" />
              <div className="text-[#8d8f91]">Jl. Cikini Raya No.74-76 14, RT.14/RW.5, Cikini, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330</div>
            </div>
            <div className="flex gap-3 text-start mt-3">
              <img src={Telf} alt="logo" />
              <div className="text-[#8d8f91]">085xxxxxx</div>
            </div>
          </button>
          <button className="border rounded-lg p-3">
            <img className="flex justify-center  w-full" src={Foto} />
            <div className="text-start text-2xl mt-5">SMK 3 Perguruan Cikini, Jakarta Selatan</div>
            <div className="flex gap-3 text-start mt-3">
              <img src={Wisuda} alt="logo" />
              <div className="text-[#8d8f91]">200 Siswa</div>
            </div>
            <div className="flex gap-3 items-start text-start mt-3">
              <img className=" " src={Loc} alt="logo" />
              <div className="text-[#8d8f91]">Jl. Cikini Raya No.74-76 14, RT.14/RW.5, Cikini, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330</div>
            </div>
            <div className="flex gap-3 text-start mt-3">
              <img src={Telf} alt="logo" />
              <div className="text-[#8d8f91]">085xxxxxx</div>
            </div>
          </button>
          <button className="border rounded-lg p-3">
            <img className="flex justify-center  w-full" src={Foto} />
            <div className="text-start text-2xl mt-5">SMA 2 Perguruan Cikini, Jakarta Selatan</div>
            <div className="flex gap-3 text-start mt-3">
              <img src={Wisuda} alt="logo" />
              <div className="text-[#8d8f91]">200 Siswa</div>
            </div>
            <div className="flex gap-3 items-start text-start mt-3">
              <img className=" " src={Loc} alt="logo" />
              <div className="text-[#8d8f91]">Jl. Cikini Raya No.74-76 14, RT.14/RW.5, Cikini, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330</div>
            </div>
            <div className="flex gap-3 text-start mt-3">
              <img src={Telf} alt="logo" />
              <div className="text-[#8d8f91]">085xxxxxx</div>
            </div>
          </button>
          <button className="border rounded-lg p-3">
            <img className="flex justify-center  w-full" src={Foto} />
            <div className="text-start text-2xl mt-5">Institut Sains dan Teknologi Nasional, Jakarta Selatan</div>
            <div className="flex gap-3 text-start mt-3">
              <img src={Wisuda} alt="logo" />
              <div className="text-[#8d8f91]">200 Siswa</div>
            </div>
            <div className="flex gap-3 items-start text-start mt-3">
              <img className=" " src={Loc} alt="logo" />
              <div className="text-[#8d8f91]">Jl. Cikini Raya No.74-76 14, RT.14/RW.5, Cikini, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330</div>
            </div>
            <div className="flex gap-3 text-start mt-3">
              <img src={Telf} alt="logo" />
              <div className="text-[#8d8f91]">085xxxxxx</div>
            </div>
          </button>
          <button className="border rounded-lg p-3">
            <img className="flex justify-center  w-full" src={Foto} />
            <div className="text-start text-2xl mt-5">Pendidikan Musik Yayasan Perguruan Cikini, Jakarta Pusat</div>
            <div className="flex gap-3 text-start mt-3">
              <img src={Wisuda} alt="logo" />
              <div className="text-[#8d8f91]">200 Siswa</div>
            </div>
            <div className="flex gap-3 items-start text-start mt-3">
              <img className=" " src={Loc} alt="logo" />
              <div className="text-[#8d8f91]">Jl. Cikini Raya No.74-76 14, RT.14/RW.5, Cikini, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330</div>
            </div>
            <div className="flex gap-3 text-start mt-3">
              <img src={Telf} alt="logo" />
              <div className="text-[#8d8f91]">085xxxxxx</div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Daftar;
