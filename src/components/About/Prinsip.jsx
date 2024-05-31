import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import data from "../../assets/json/about";
import Logo from "../../assets/logo/logo.svg";

const Prinsip = () => {
    const { globalState, updateGlobalState } = useContext(AppContext);
    const [html, setHtml] = useState({ __html: "" });

    // Teks dalam bahasa Indonesia
    let PrinsipDescIndo =
        "Prinsip lambang Perguruan “Cikini” masih sesuai dengan aslinya sejak pembuatan awal, kecuali ejaan lama diganti dengan ejaan baru pada tulisan “Tjikini” menjadi “Cikini”.Lambang Perguruan “Cikini” adalah karya dari Bapak Dukut Hendronoto (Pak Ooq), orang tua murid, guru gambar SMP Perguruan Cikini dan cartoonist pada Perusahaan Film Negara (PFN) .\n\n<b>GAMBAR:</b>\nBusur siap sedia meluncurkan anak panahnya ke tujuan yang lurus, mengarah ke atas.\n\n<b>KETERANGAN:</b>\nBusur : Guru\nAnak Panah : Murid\nMatahari : Cahaya tujuan\nTinggi : Pendidikan\nBuku : Pengetahuan\n\n<b>MEMBERI ARTI:</b>\nGuru memberi dorongan dan bimbingan kepada murid untuk tujuan lurus menuju setinggi-tingginya dengan berdasarkan penerangan, pendidikan, dan pengetahuan.";

    // Teks dalam bahasa Inggris
    let PrinsipDescEnglish =
        "The philosophy of the emblem of 'Cikini' School remains true to its original form since its inception, except for the old spelling replaced with the new spelling in the inscription 'Tjikini' becoming 'Cikini'. The emblem of 'Cikini' School is the work of Mr. Dukut Hendronoto (Pak Ooq), parent of a student, drawing teacher at Cikini Junior High School, and cartoonist at the State Film Company (PFN).\n\n<b>IMAGE:</b>\nThe bow is ready to launch its arrow towards a straight target, aiming upwards.\n\n<b>DESCRIPTION:</b>\nBow: Teacher\nArrow: Student\nSun: The light of purpose\nHeight: Education\nBook: Knowledge\n\n<b>SIGNIFICANCE:</b>\nThe teacher provides encouragement and guidance to the student towards a straight goal to reach the highest point based on enlightenment, education, and knowledge.";

    let descLoader = () => {
        // Menentukan teks yang akan ditampilkan berdasarkan nilai globalProperty
        const descText =
            globalState.globalProperty === "IND"
                ? PrinsipDescIndo
                : PrinsipDescEnglish;

        // Menetapkan HTML yang akan disetel sebagai state untuk ditampilkan
        setHtml({
            __html: `<div>${descText.replace(/\n/g, "<br>")}</div>`,
        });
    };

    useEffect(() => {
        descLoader();
    }, [globalState.globalProperty]); // Memperbarui teks ketika globalProperty berubah

    return (
        <>
            <div className="lg:lg:flex flex-col items-center justify-center lg:flex-row lg:justify-start ">
                <div className=" bg-[#E1E1E1] w-full lg:py-[28px]">
                    <div className="text-black text-lg lg:text-5xl mt-16 lg:mt-0 lg:ml-32 lg:text-left">
                        {globalState.globalProperty === "IND"
                            ? "Prinsip Dasar Dalam Membangun Pendidikan Di Bawah Yayasan Perguruan 'CIKINI'"
                            : "Prinsip Dasar"}
                    </div>
                    {/* <div className="border-t-7 border-yellow-400 w-[103px] lg:absolute left-[125px] lg:border-[6px]"></div> */}
                </div>
            </div>
            <div className="p-5 lg:p-8 lg:mx-16">
                <div className="w-full rounded-xl lg:my-10 ">
                    <div className="leading-normal	border-4">
                        <div className="text-white py-5 px-5 lg:px-0 lg:py-14 lg:col-span-2 lg:row-span-2 ">
                            <div className="flex flex-col gap-5 text-sm lg:text-lg mt-5 lg:mt-0 text-black leading-normal px-4">
                                <ul className="list-inside list-disc">
                                    <li>Universal dan obyektif dalam ilmu pengetahuan untuk mencapai kenyataan dan kebenaran.</li>
                                    <li>Kebebasan akademik yang dilaksanakan dengan hikmah dan bertanggungjawab.</li>
                                    <li>Keadaban, kemanfaatan, kebahagiaan, kemanusiaan, dan kesejahteraan.</li>
                                    <li>Aktualisasi nilai-nilai kebangsaan dan Pancasila dalam kehidupan akademik.</li>
                                    <li>Pendidikan yang unggul.</li>
                                    <li>Pengembangan IPTEK secara kreatif dan inovatif untuk mewujudkan keunggulan bangsa.</li>
                                    <li>Pemanfaatan hasil IPTEK untuk memberdayakan masyarakat serta mendukung pembangunan nasional dan daerah.</li>
                                    <li>Pengayaan budaya untuk mendukung kemandirian serta keutuhan bangsa dan negara.</li>
                                    <li>Transformasi organisasi dan pengelolaan untuk mengembangkan keunggulan akademik serta meningkatkan efisiensi dan produktivitas melalui penerapan prinsip “sentralisasi administrasi keuangan, desentralisasi akademik dan riset”.</li>
                                    <li>Penyediaan sarana dan prasarana kampus untuk mendukung posisi Perguruan 'Cikini' ke taraf mutu internasional.</li>
                                    <li>Pengembangan jaringan kerjasama menuju pembangunan masyarakat yang demokratis.</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Prinsip;
