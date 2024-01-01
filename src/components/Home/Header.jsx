import React, { useContext } from "react";
import { Carousel, ConfigProvider } from "antd";
import AppContext from "../../context/AppContext";
import Header1 from "../../assets/img/unsplash_1-aA2Fadydc.png";

const Header = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  console.log(globalState, "DIHeader");

  const customDotRender = (index, { isActive }) => {
    const dotStyle = {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      backgroundColor: isActive ? "#1890ff" : "#fff",
      margin: "0 3px",
    };

    return <span style={dotStyle} />;
  };

  return (
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
        <div className="h-[700px] ">
          <div
            className="h-full object-cover"
            style={{
              backgroundImage: `url(${Header1})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="h-full flex flex-col justify-center ml-24">
              <div className="text-white text-[50px] font-[600]">
                Mari Bergabung dengan Kami
              </div>
              <div className="text-white text-[45px] font-[600]">
                Mari Kita Menciptakan Anak Didik yang Berbakat
              </div>
              <div>
                <button className="border bg-[#2F80ED] text-white py-2 mt-2 px-4 text-md border-none rounded-md font-bold">
                  Kunjungi Kami
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[700px] ">
          <div
            className="h-full object-cover"
            style={{
              backgroundImage: `url(${Header1})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="h-full flex flex-col justify-center ml-24">
              <div className="text-white text-[50px] font-[600]">
                Mari Bergabung dengan Kami
              </div>
              <div className="text-white text-[45px] font-[600]">
                Mari Kita Menciptakan Anak Didik yang Berbakat
              </div>
              <div>
                <button className="border bg-[#2F80ED] text-white py-2 mt-2 px-4 text-md border-none rounded-md font-bold">
                  Kunjungi Kami
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[700px] ">
          <div
            className="h-full object-cover"
            style={{
              backgroundImage: `url(${Header1})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="h-full flex flex-col justify-center ml-24">
              <div className="text-white text-[50px] font-[600]">
                Mari Bergabung dengan Kami
              </div>
              <div className="text-white text-[45px] font-[600]">
                Mari Kita Menciptakan Anak Didik yang Berbakat
              </div>
              <div>
                <button className="border bg-[#2F80ED] text-white py-2 mt-2 px-4 text-md border-none rounded-md font-bold">
                  Kunjungi Kami
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[700px] ">
          <div
            className="h-full object-cover"
            style={{
              backgroundImage: `url(${Header1})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="h-full flex flex-col justify-center ml-24">
              <div className="text-white text-[50px] font-[600]">
                Mari Bergabung dengan Kami
              </div>
              <div className="text-white text-[45px] font-[600]">
                Mari Kita Menciptakan Anak Didik yang Berbakat
              </div>
              <div>
                <button className="border bg-[#2F80ED] text-white py-2 mt-2 px-4 text-md border-none rounded-md font-bold">
                  Kunjungi Kami
                </button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
      <div className="bg-[#EEF8FF] pt-24 pb-24 grid grid-cols-3 gap-5">
        <div className="flex flex-col items-center justify-center ml-24 gap-5">
          <div className="text-8xl font-semibold">5K +</div>
          <div className="text-center text-[19px] text-[#6A858C] tracking-wider">
            Mendidik Pelajar / Mahasiswa berkualitas yang siap dengan dunia
            kerja
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border-l border-r border-[#C0CFD3] gap-2">
          <div className="text-8xl font-semibold">50 +</div>
          <div className="text-center text-[19px] text-[#6A858C] tracking-wider">
            Menorehkan beberapa prestasi bergengsi baik tingkat regional maupun
            nasional
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mr-24 gap-2">
          <div className="text-8xl font-semibold">80%</div>
          <div className="text-center text-[19px] text-[#6A858C] tracking-wider">
            Tingkat Keberhasilan Pelajar/Mahasiswa yang diterima kerja
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Header;
