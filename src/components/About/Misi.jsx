import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import Foto from "../../assets/img/unsplash_pAtA8xe_iVM.png";

const Misi = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);

  return (
    <>
      <div className="p-5 lg:p-8">
        <div className="text-center text-3xl lg:text-5xl font-bold mb-10">
          Visi Misi
        </div>
        <div className="border w-full bg-[#5FBEFF] rounded-xl p-5 lg:p-14">
          {/* <div className="flex justify-start gap-5 mt-5">
            <div className="border bg-[#09588D] w-[300px] h-fit lg:w-[700px] lg:h-[170px] rounded-lg border-none p-3">
              <div className="flex gap-2">
                <div className="border p-4 bg-[#F47E29] flex items-center justify-center text-4xl border-none rounded-lg text-white font-bold">
                  <div className="">1</div>
                </div>
                <div className="text-white ml-0 lg:ml-5 p-1 lg:text-md text-[7px] lg:text-4xl">
                  <div className="text-white p-1">Pendidikan Berkualitas:</div>
                  <div className="text-white p-1">
                    Menyediakan akses dan sumber daya untuk pendidikan
                    berkualitas bagi semua lapisan masyarakat. Melalui
                    program-program inovatif, kami bertujuan untuk meningkatkan
                    tingkat literasi dan membuka pintu peluang bagi anak-anak
                    dan dewasa.
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="flex justify-start gap-5 mt-5">
            <div className="border bg-[#09588D] w-[300px] h-fit lg:w-[700px] lg:h-[170px] rounded-lg border-none p-3">
              <div className="flex gap-2">
                <div className="border p-4 bg-[#F47E29] flex items-center justify-center text-4xl border-none rounded-lg text-white font-bold">
                  <div className="">2</div>
                </div>
                <div className="text-white ml-0 lg:ml-5 p-1 lg:text-md text-[7px]">
                  <div className="text-white p-1">
                    Kesehatan dan Kesejahteraan:
                  </div>
                  <div className="text-white p-1">
                    Memastikan akses universal terhadap layanan kesehatan yang
                    berkualitas. Kami berkomitmen untuk mengurangi disparitas
                    kesehatan dan meningkatkan kesadaran akan pentingnya pola
                    hidup sehat di kalangan masyarakat.
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="flex justify-start gap-5 mt-5">
            <div className="border bg-[#09588D] w-[300px] h-fit lg:w-[700px] lg:h-[170px] rounded-lg border-none p-3">
              <div className="flex gap-2">
                <div className="border p-4 lg:w-[350px] lg:h-[145px] bg-[#F47E29] flex items-center justify-center text-4xl border-none rounded-lg text-white font-bold">
                  <div className="">1</div>
                </div>
                <div className="text-white ml-0 lg:ml-5 p-1 text-[7px] lg:text-lg">
                  <div className="text-white ">Pendidikan Berkualitas:</div>
                  <div className="text-white mt-2">
                    Menyediakan akses dan sumber daya untuk pendidikan
                    berkualitas bagi semua lapisan masyarakat. Melalui
                    program-program inovatif, kami bertujuan untuk meningkatkan
                    tingkat literasi dan membuka pintu peluang bagi anak-anak
                    dan dewasa.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-5 mt-5">
            <div className="border bg-[#09588D] w-[300px] h-fit lg:w-[700px] lg:h-[170px] rounded-lg border-none p-3">
              <div className="flex gap-2">
                <div className="border p-4 lg:w-[350px] lg:h-[145px] bg-[#F47E29] flex items-center justify-center text-4xl border-none rounded-lg text-white font-bold">
                  <div className="">2</div>
                </div>
                <div className="text-white ml-0 lg:ml-5 p-1 text-[7px] lg:text-lg">
                  <div className="text-white ">
                    Kesehatan dan Kesejahteraan:
                  </div>
                  <div className="text-white mt-2">
                    Memastikan akses universal terhadap layanan kesehatan yang
                    berkualitas. Kami berkomitmen untuk mengurangi disparitas
                    kesehatan dan meningkatkan kesadaran akan pentingnya pola
                    hidup sehat di kalangan masyarakat.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start gap-5 mt-5">
            <div className="border bg-[#09588D] w-[300px] h-fit lg:w-[700px] lg:h-[170px] rounded-lg border-none p-3">
              <div className="flex gap-2">
                <div className="border p-4 lg:w-[350px] lg:h-[145px] bg-[#F47E29] flex items-center justify-center text-4xl border-none rounded-lg text-white font-bold">
                  <div className="">3</div>
                </div>
                <div className="text-white ml-0 lg:ml-5 p-1 text-[7px] lg:text-lg">
                  <div className="text-white ">Pemberdayaan Ekonomi:</div>
                  <div className="text-white mt-2">
                    Melindungi dan melestarikan lingkungan alam. Kami aktif
                    terlibat dalam proyek-proyek keberlanjutan, penghijauan, dan
                    pengelolaan sumber daya alam demi memastikan bumi ini tetap
                    lestari untuk generasi mendatang.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex justify-end gap-5 mt-5">
            <div className="border bg-[#09588D] w-[700px] h-[170px] rounded-lg border-none p-3">
              <div className="flex gap-2">
                <div className="border w-[350px] h-[145px] bg-[#F47E29] flex items-center justify-center text-4xl border-none rounded-lg text-white font-bold">
                  <div>2</div>
                </div>
                <div className="text-white ml-5 p-1">
                  <div className="text-white p-1">
                    Kesehatan dan Kesejahteraan:
                  </div>
                  <div className="text-white p-1 text-justify">
                    Memastikan akses universal terhadap layanan kesehatan yang
                    berkualitas. Kami berkomitmen untuk mengurangi disparitas
                    kesehatan dan meningkatkan kesadaran akan pentingnya pola
                    hidup sehat di kalangan masyarakat.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start gap-5 mt-5">
            <div className="border bg-[#09588D] w-[700px] h-[170px] rounded-lg border-none p-3">
              <div className="flex gap-2">
                <div className="border w-[350px] h-[145px] bg-[#F47E29] flex items-center justify-center text-4xl border-none rounded-lg text-white font-bold">
                  <div>3</div>
                </div>
                <div className="text-white ml-5 p-1">
                  <div className="text-white p-1">Pemberdayaan Ekonomi:</div>
                  <div className="text-white p-1 text-justify">
                    Memberdayakan komunitas untuk menciptakan mata pencaharian
                    yang berkelanjutan. Melalui pelatihan keterampilan, dukungan
                    kewirausahaan, dan pembangunan ekonomi lokal, kami berusaha
                    meningkatkan taraf hidup dan kemandirian ekonomi.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-5 mt-5">
            <div className="border bg-[#09588D] w-[700px] h-[170px] rounded-lg border-none p-3">
              <div className="flex gap-2">
                <div className="border w-[350px] h-[145px] bg-[#F47E29] flex items-center justify-center text-4xl border-none rounded-lg text-white font-bold">
                  <div>4</div>
                </div>
                <div className="text-white ml-5 p-1">
                  <div className="text-white p-1">
                    Keberlanjutan Lingkungan:
                  </div>
                  <div className="text-white p-1 text-justify">
                    Melindungi dan melestarikan lingkungan alam. Kami aktif
                    terlibat dalam proyek-proyek keberlanjutan, penghijauan, dan
                    pengelolaan sumber daya alam demi memastikan bumi ini tetap
                    lestari untuk generasi mendatang.
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Misi;
