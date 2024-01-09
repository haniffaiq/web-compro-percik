import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import Foto from "../../assets/img/unsplash_pAtA8xe_iVM.png";

const Visi = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);

  return (
    <>
      <div className="p-8">
        <div className="text-center text-5xl font-bold mb-10">Visi Misi</div>
        <div className="border w-full bg-[#5FBEFF] rounded-xl p-14">
          <div className="flex justify-start gap-5 mt-5">
            <div className="border bg-[#09588D] w-[700px] h-[100px] rounded-lg border-none p-3">
              <div className="flex gap-2">
                <div className="border w-[200px] bg-[#F47E29] flex items-center justify-center text-4xl border-none rounded-lg text-white font-bold">
                  <div>1</div>
                </div>
                <div className="text-white ml-5 p-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, cumque velit, quam exercitationem sint incidunt,
                  earum dicta aliquid explicabo unde deserunt. Iste ut eius
                  veritatis delectus unde at, sed cum!
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-5 mt-5">
            <div className="border bg-[#09588D] w-[700px] h-[100px] rounded-lg border-none p-3">
              <div className="flex gap-2">
                <div className="border w-[200px] bg-[#F47E29] flex items-center justify-center text-4xl border-none rounded-lg text-white font-bold">
                  <div>2</div>
                </div>
                <div className="text-white ml-5 p-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, cumque velit, quam exercitationem sint incidunt,
                  earum dicta aliquid explicabo unde deserunt. Iste ut eius
                  veritatis delectus unde at, sed cum!
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start gap-5 mt-5">
            <div className="border bg-[#09588D] w-[700px] h-[100px] rounded-lg border-none p-3">
              <div className="flex gap-2">
                <div className="border w-[200px] bg-[#F47E29] flex items-center justify-center text-4xl border-none rounded-lg text-white font-bold">
                  <div>3</div>
                </div>
                <div className="text-white ml-5 p-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, cumque velit, quam exercitationem sint incidunt,
                  earum dicta aliquid explicabo unde deserunt. Iste ut eius
                  veritatis delectus unde at, sed cum!
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-5 mt-5">
            <div className="border bg-[#09588D] w-[700px] h-[100px] rounded-lg border-none p-3">
              <div className="flex gap-2">
                <div className="border w-[200px] bg-[#F47E29] flex items-center justify-center text-4xl border-none rounded-lg text-white font-bold">
                  <div>4</div>
                </div>
                <div className="text-white ml-5 p-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, cumque velit, quam exercitationem sint incidunt,
                  earum dicta aliquid explicabo unde deserunt. Iste ut eius
                  veritatis delectus unde at, sed cum!
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start gap-5 mt-5">
            <div className="border bg-[#09588D] w-[700px] h-[100px] rounded-lg border-none p-3">
              <div className="flex gap-2">
                <div className="border w-[200px] bg-[#F47E29] flex items-center justify-center text-4xl border-none rounded-lg text-white font-bold">
                  <div>5</div>
                </div>
                <div className="text-white ml-5 p-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, cumque velit, quam exercitationem sint incidunt,
                  earum dicta aliquid explicabo unde deserunt. Iste ut eius
                  veritatis delectus unde at, sed cum!
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-5 mt-5">
            <div className="border bg-[#09588D] w-[700px] h-[100px] rounded-lg border-none p-3">
              <div className="flex gap-2">
                <div className="border w-[200px] bg-[#F47E29] flex items-center justify-center text-4xl border-none rounded-lg text-white font-bold">
                  <div>6</div>
                </div>
                <div className="text-white ml-5 p-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, cumque velit, quam exercitationem sint incidunt,
                  earum dicta aliquid explicabo unde deserunt. Iste ut eius
                  veritatis delectus unde at, sed cum!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Visi;
