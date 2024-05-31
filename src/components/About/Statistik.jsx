import React, { useContext, useEffect, useState, useRef } from "react";
import AppContext from "../../context/AppContext";
import Chart from "chart.js/auto";

const Statistik = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);

  const chartRef = useRef(null);

  useEffect(() => {
    const startYear = 2000;
    const endYear = 2024;

    const xValues = Array.from({ length: endYear - startYear + 1 }, (_, index) => startYear + index);
    const yValues = [1000, 1092, 1386, 1823, 2321, 2683, 2966, 3273, 3497, 3674, 3766, 3888, 3926, 3948, 3969, 3985, 3993, 3999, 4000, 4000, 4000, 4000, 4000, 4000];

    if (chartRef.current) {
      // Hancurkan grafik yang telah ada sebelumnya jika ada
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      // Buat grafik baru
      const ctx = chartRef.current.getContext("2d");
      chartRef.current.chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: xValues,
          datasets: [
            {
              label: "Statistik Jumlah Alumni",
              backgroundColor: "rgba(0,0,255,0.2)",
              borderColor: "rgba(0,0,255,1)",
              borderWidth: 2,
              data: yValues,
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              title: {
                display: true,
                text: "X Axis",
              },
            },
            y: {
              title: {
                display: true,
                text: "Y Axis",
              },
            },
          },
        },
      });
    }
  }, []);

  return (
    <>
      <div className="lg:lg:flex flex-col items-center justify-center lg:flex-row lg:justify-start ">
        <div className=" bg-[#E1E1E1] w-full lg:py-[28px]">
          <div className="text-black  text-md  lg:text-5xl mt-16 lg:mt-0 lg:ml-16 py-2 text-center lg:text-left" style={{ fontFamily: 'Hedvig Letters Serif, serif' }}>
{globalState.globalProperty === "IND" ? "Statistik Pertumbuhan Alumni" : "Statistics of Alumni Growth"}</div>
          {/* <div className="border-t-7 border-yellow-400 w-[103px] lg:absolute left-[125px] lg:border-[6px]"></div> */}
        </div>
      </div>

      <div className="p-5 lg:p-8 lg:mx-16">
        <canvas ref={chartRef} id="myChart"></canvas>
      </div>
    </>
  );
};

export default Statistik;
