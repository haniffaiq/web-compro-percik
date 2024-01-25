import React, { useContext } from "react";
import { Carousel, ConfigProvider } from "antd";
import AppContext from "../../context/AppContext";
import Header1 from "../../assets/img/unsplash_1-aA2Fadydc.png";

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
    <>
      <div className="">
        <div className="p-5 lg:p-14 text-3xl lg:text-5xl font-bold">Galeri</div>
        <div className="flex gap-2 lg:h-full lg:w-full h-full w-full overflow-y-hidden p-1">
          <img src={Header1} />
          <img src={Header1} />
          <img src={Header1} />
        </div>
      </div>
    </>
    // <ConfigProvider
    //   theme={{
    //     components: {
    //       Carousel: {
    //         dotHeight: 10,
    //         dotWidth: 10,
    //         dotActiveWidth: 10,
    //       },
    //     },
    //   }}
    // >
    //   <div className="p-8">
    //     <Carousel autoplay>
    //       <div className="h-[300px] ">
    //         <div
    //           className="h-full object-cover"
    //           style={{
    //             backgroundImage: `url(${Header1})`,
    //             backgroundPosition: "center",
    //             backgroundSize: "cover",
    //           }}
    //         >
    //           <div className="h-full flex flex-col justify-center ml-24">
    //             <div className="text-white text-[50px] font-[600]">
    //               Mari Bergabung dengan Kami
    //             </div>
    //             <div className="text-white text-[45px] font-[600]">
    //               Mari Kita Menciptakan Anak Didik yang Berbakat
    //             </div>
    //             <div>
    //               <button className="border bg-[#2F80ED] text-white py-2 mt-2 px-4 text-md border-none rounded-md font-bold">
    //                 Kunjungi Kami
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="h-[300px] ">
    //         <div
    //           className="h-full object-cover"
    //           style={{
    //             backgroundImage: `url(${Header1})`,
    //             backgroundPosition: "center",
    //             backgroundSize: "cover",
    //           }}
    //         >
    //           <div className="h-full flex flex-col justify-center ml-24">
    //             <div className="text-white text-[50px] font-[600]">
    //               Mari Bergabung dengan Kami
    //             </div>
    //             <div className="text-white text-[45px] font-[600]">
    //               Mari Kita Menciptakan Anak Didik yang Berbakat
    //             </div>
    //             <div>
    //               <button className="border bg-[#2F80ED] text-white py-2 mt-2 px-4 text-md border-none rounded-md font-bold">
    //                 Kunjungi Kami
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="h-[300px] ">
    //         <div
    //           className="h-full object-cover"
    //           style={{
    //             backgroundImage: `url(${Header1})`,
    //             backgroundPosition: "center",
    //             backgroundSize: "cover",
    //           }}
    //         >
    //           <div className="h-full flex flex-col justify-center ml-24">
    //             <div className="text-white text-[50px] font-[600]">
    //               Mari Bergabung dengan Kami
    //             </div>
    //             <div className="text-white text-[45px] font-[600]">
    //               Mari Kita Menciptakan Anak Didik yang Berbakat
    //             </div>
    //             <div>
    //               <button className="border bg-[#2F80ED] text-white py-2 mt-2 px-4 text-md border-none rounded-md font-bold">
    //                 Kunjungi Kami
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="h-[300px] ">
    //         <div
    //           className="h-full object-cover"
    //           style={{
    //             backgroundImage: `url(${Header1})`,
    //             backgroundPosition: "center",
    //             backgroundSize: "cover",
    //           }}
    //         >
    //           <div className="h-full flex flex-col justify-center ml-24">
    //             <div className="text-white text-[50px] font-[600]">
    //               Mari Bergabung dengan Kami
    //             </div>
    //             <div className="text-white text-[45px] font-[600]">
    //               Mari Kita Menciptakan Anak Didik yang Berbakat
    //             </div>
    //             <div>
    //               <button className="border bg-[#2F80ED] text-white py-2 mt-2 px-4 text-md border-none rounded-md font-bold">
    //                 Kunjungi Kami
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </Carousel>
    //   </div>
    // </ConfigProvider>
  );
};

export default Galeri;
