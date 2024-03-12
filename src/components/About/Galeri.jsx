import React, { useContext } from "react";
import { Carousel, ConfigProvider } from "antd";
import AppContext from "../../context/AppContext";
import Header1 from "../../assets/img/unsplash_1-aA2Fadydc.png";

const carouselItems = [
  {
    image: require('../../assets/img/header/img_header1.jpg'), // replace with your image path
    title: 'Mari Bergabung dengan Kami',
    subtitle: 'Mari Kita Menciptakan Anak Didik yang Berbakat',
    buttonText: 'Kunjungi Kami',
  },
  {
    image: require('../../assets/img/header/img_header2.JPG'), // replace with your image path
    title: 'Mari Bergabung dengan Kami',
    subtitle: 'Mari Kita Menciptakan Anak Didik yang Berbakat',
    buttonText: 'Kunjungi Kami',
  },
  {
    image: require('../../assets/img/header/img_header3.jpg'), // replace with your image path
    title: 'Mari Bergabung dengan Kami',
    subtitle: 'Mari Kita Menciptakan Anak Didik yang Berbakat',
    buttonText: 'Kunjungi Kami',
  },
  {
    image: require('../../assets/img/header/img_header4.jpg'), // replace with your image path
    title: 'Mari Bergabung dengan Kami',
    subtitle: 'Mari Kita Menciptakan Anak Didik yang Berbakat',
    buttonText: 'Kunjungi Kami',
  }
]

const Galeri = () => {
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
    // <>
    //   {/* <div className="flex gap-2 lg:h-full lg:w-full h-full w-full overflow-y-hidden p-5">
    //     <img src={Header1} />
    //     <img src={Header1} />
    //     <img src={Header1} />
    //   </div> */}
    // </>
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
      <div className="p-8 hidden lg:block">
        <Carousel autoplay>

          {carouselItems.map((item, index) => (
            <div key={index} className=" lg:h-[300px] relative">
              <div
                className="h-full object-cover"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center p-5 lg:p-0 lg:ml-24">
                <div className="text-white text-center lg:text-left text-[25px] lg:text-[50px] font-[600]">
                  {item.title}
                </div>
                <div className="text-white text-center lg:text-left text-[25px] lg:text-[45px] font-[600]">
                  {item.subtitle}
                </div>
                <div className="flex justify-center lg:justify-start">
                  <button className="border bg-[#2F80ED] text-white py-1 lg:py-2 mt-2 px-2 lg:px-4 text-[10px] lg:text-md border-none rounded-md font-bold">
                    {item.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="h-[300px] ">
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
          <div className="h-[300px] ">
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
          <div className="h-[300px] ">
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
          <div className="h-[300px] ">
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
          </div> */}
        </Carousel>
      </div>
    </ConfigProvider>
  );
};

export default Galeri;
