import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
// import Foto from "../../assets/img/Rectangle108school.png";
import Wisuda from "../../assets/icon/ph_student-light.svg";
import Loc from "../../assets/icon/loc.svg";
import Telf from "../../assets/icon/telfon.svg";
// import data from "../../assets/json/school";
// import schoolsData from "../../assets/json/school";

// import SchoolDetail from "../SchoolDetail/Index";
const data = {
  "bahasa": [
    {
      "id": 1,
      "name": "TK Perguruan Cikini, Jakarta Pusat",
      "type": "TK",
      "image": "Rectangle108school.png",
      "students": 200,
      "address": "Jl. Cikini Raya No.74-76 14, RT.14/RW.5, Cikini, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330",
      "phone": "08-",
      "visi": "Yayasan Perguruan “Cikini” mengutamakan pendidikan berwawasan kebangsaan dan budi pekerti yang luhur dengan memberdayakan kemampuan putra-putri bangsa agar dapat mengatasi tantangan masa depan dalam kehidupan bermasyarakat dan berbangsa.",
      "misi": "/misi.png",
      "fasilitas": [
        {
          "title": "Ruang kelas",
          "desc": "Digunakan sebagai ...",
          "imgUrl": "/Ruang Kelas.png"
        },
        {
          "title": "Laboratorium",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Labolatorium.png"
        },
        {
          "title": "Ruang Kerja",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Ruang Kerja.png"
        },
        {
          "title": "Perpustakaan",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Perpustakaan.png"
        },
        {
          "title": "Cafetaria/Kantin",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Cafetaria atau Kantin.png"
        },
        {
          "title": "Gedung Aula",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Gedung Aula.png"
        },
        {
          "title": "Gudang Sekolah",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Gudang sekolah.png"
        },
        {
          "title": "Kendaraan operasional",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Kendaraan operasional.png"
        },
        {
          "title": "Jaringan Internet",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Jaringan Internet.png"
        }
      ],
      "ekstrakulikuler": [
        {
          "title": "Renang",
          "desc": "-",
          "imgUrl": "/Ruang Kelas.png"
        },
        {
          "title": "Sepak Bola",
          "desc": "-",
          "imgUrl": "/Ruang Kelas.png"
        }
      ],
      "sambutan":{
        "name": "Dr. Setiawan Nazir",
        "image":  "Rectangle108school.png",
        "desc" : "Lorem Lipsum"
      }
    },
    {
      "id": 2,
      "name": "SD Perguruan Cikini, Jakarta Pusat",
      "type": "SD",
      "image": "Rectangle108school.png",
      "students": 250,
      "address": "Jl. Cikini Raya No.74-76 14, RT.14/RW.5, Cikini, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330",
      "phone": "085yyyyyy",
      "visi": "Yayasan Perguruan “Cikini” mengutamakan pendidikan berwawasan kebangsaan dan budi pekerti yang luhur dengan memberdayakan kemampuan putra-putri bangsa agar dapat mengatasi tantangan masa depan dalam kehidupan bermasyarakat dan berbangsa.",
      "misi": "/misi.png",
      "fasilitas": [
        {
          "title": "Ruang kelas",
          "desc": "Digunakan sebagai ...",
          "imgUrl": "/Ruang Kelas.png"
        },
        {
          "title": "Laboratorium",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Labolatorium.png"
        },
        {
          "title": "Ruang Kerja",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Ruang Kerja.png"
        },
        {
          "title": "Perpustakaan",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Perpustakaan.png"
        },
        {
          "title": "Cafetaria/Kantin",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Cafetaria atau Kantin.png"
        },
        {
          "title": "Gedung Aula",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Gedung Aula.png"
        },
        {
          "title": "Gudang Sekolah",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Gudang sekolah.png"
        },
        {
          "title": "Kendaraan operasional",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Kendaraan operasional.png"
        },
        {
          "title": "Jaringan Internet",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Jaringan Internet.png"
        }
      ],
      "ekstrakulikuler": [
        {
          "title": "Renang",
          "desc": "22222",
          "imgUrl": "/Ruang Kelas.png"
        },
        {
          "title": "Sepak Bola",
          "desc": "11111",
          "imgUrl": "/Ruang Kelas.png"
        }
      ],
      "sambutan":{
        "name": "Dr. Setiawan Nazir",
        "image":  "Rectangle108school.png",
        "desc" : "Lorem Lipsum"
      }
    },
    {
      "id": 3,
      "name": "SMK 3 PERGURUAN “CIKINI”",
      "type": "SMK",
      "image": "Rectangle108school.png",
      "students": 1246,
      "address": "Jl. Cikini Raya No.74-76 14, RT.14/RW.5, Cikini, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330",
      "phone": "085yyyyyy",
      "visi": "Yayasan Perguruan “Cikini” mengutamakan pendidikan berwawasan kebangsaan dan budi pekerti yang luhur dengan memberdayakan kemampuan putra-putri bangsa agar dapat mengatasi tantangan masa depan dalam kehidupan bermasyarakat dan berbangsa.",
      "misi": "/misi.png",
      "fasilitas": [
        {
          "title": "Ruang kelas",
          "desc": "Digunakan sebagai ...",
          "imgUrl": "/Ruang Kelas.png"
        },
        {
          "title": "Laboratorium",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Labolatorium.png"
        },
        {
          "title": "Ruang Kerja",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Ruang Kerja.png"
        },
        {
          "title": "Perpustakaan",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Perpustakaan.png"
        },
        {
          "title": "Cafetaria/Kantin",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Cafetaria atau Kantin.png"
        },
        {
          "title": "Gedung Aula",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Gedung Aula.png"
        },
        {
          "title": "Gudang Sekolah",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Gudang sekolah.png"
        },
        {
          "title": "Kendaraan operasional",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Kendaraan operasional.png"
        },
        {
          "title": "Jaringan Internet",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Jaringan Internet.png"
        }
      ],
      "ekstrakulikuler": [
        {
          "title": "Renang",
          "desc": "-",
          "imgUrl": "/Ruang Kelas.png"
        },
        {
          "title": "Sepak Bola",
          "desc": "-",
          "imgUrl": "/Ruang Kelas.png"
        }
      ],
      "sambutan":{
        "name": "Dr. Setiawan Nazir",
        "image":  "Rectangle108school.png",
        "desc" : "Lorem Lipsum"
      }
    },
    {
      "id": 4,
      "name": "SMA PERGURUAN “CIKINI",
      "type": "SMK",
      "image": "Rectangle108school.png",
      "students": 406,
      "address": "Jl. Duren Tiga Raya No.1 Pancoran Jakarta Selatan, Daerah Khusus Ibukota Jakarta 10330",
      "phone": "08-",
      "visi": "Menjadi center of excellence  di bidang pendidikan dalam mencetak generasi panutan yang beriman dan bertakwa, berwawasan kebangsaan, pancasilais, berbudi pekerti luhur, mandiri dan berwawasan lingkungan, sesuai perkembangan zaman, dengan tetap menjaga keberlangsungan Yayasan Perguruan ”Cikini” yang selalu bertumbuh",
      "misi": "/misi.png",
      "fasilitas": [
        {
          "title": "Ruang kelas",
          "desc": "Digunakan sebagai ...",
          "imgUrl": "/Ruang Kelas.png"
        },
        {
          "title": "Laboratorium",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Labolatorium.png"
        },
        {
          "title": "Ruang Kerja",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Ruang Kerja.png"
        },
        {
          "title": "Perpustakaan",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Perpustakaan.png"
        },
        {
          "title": "Cafetaria/Kantin",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Cafetaria atau Kantin.png"
        },
        {
          "title": "Gedung Aula",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Gedung Aula.png"
        },
        {
          "title": "Gudang Sekolah",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Gudang sekolah.png"
        },
        {
          "title": "Kendaraan operasional",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Kendaraan operasional.png"
        },
        {
          "title": "Jaringan Internet",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Jaringan Internet.png"
        }
      ],
      "ekstrakulikuler": [
        {
          "title": "Renang",
          "desc": "22222",
          "imgUrl": "/Ruang Kelas.png"
        },
        {
          "title": "Sepak Bola",
          "desc": "11111",
          "imgUrl": "/Ruang Kelas.png"
        }
      ],
      "sambutan":{
        "name": "Dr. Setiawan Nazir",
        "image":  "Rectangle108school.png",
        "desc" : "Lorem Lipsum"
      }
    },
    {
      "id": 5,
      "name": "SMK 1 PERGURUAN “CIKINI”",
      "type": "SMK",
      "image": "Rectangle108school.png",
      "students": 1183,
      "address": "Jl Alur laut blok NN no 1, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330",
      "phone": "08-",
      "visi": "Yayasan Perguruan “Cikini” mengutamakan pendidikan berwawasan kebangsaan dan budi pekerti yang luhur dengan memberdayakan kemampuan putra-putri bangsa agar dapat mengatasi tantangan masa depan dalam kehidupan bermasyarakat dan berbangsa.",
      "misi": "/misi.png",
      "fasilitas": [
        {
          "title": "Ruang kelas",
          "desc": "Digunakan sebagai ...",
          "imgUrl": "/Ruang Kelas.png"
        },
        {
          "title": "Laboratorium",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Labolatorium.png"
        },
        {
          "title": "Ruang Kerja",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Ruang Kerja.png"
        },
        {
          "title": "Perpustakaan",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Perpustakaan.png"
        },
        {
          "title": "Cafetaria/Kantin",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Cafetaria atau Kantin.png"
        },
        {
          "title": "Gedung Aula",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Gedung Aula.png"
        },
        {
          "title": "Gudang Sekolah",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Gudang sekolah.png"
        },
        {
          "title": "Kendaraan operasional",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Kendaraan operasional.png"
        },
        {
          "title": "Jaringan Internet",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Jaringan Internet.png"
        }
      ],
      "ekstrakulikuler": [
        {
          "title": "Renang",
          "desc": "22222",
          "imgUrl": "/Ruang Kelas.png"
        },
        {
          "title": "Sepak Bola",
          "desc": "11111",
          "imgUrl": "/Ruang Kelas.png"
        }
      ],
      "sambutan":{
        "name": "Dr. Setiawan Nazir",
        "image":  "Rectangle108school.png",
        "desc" : "Lorem Lipsum"
      }
    },
    {
      "id": 6,
      "name": "SMK MUSIK PERGURUAN “CIKINI”",
      "type": "SMK",
      "image": "Rectangle108school.png",
      "students": 37,
      "address": "L Duren Tiga Raya NO 1, Pancoran, Jakarta Selatan, Daerah Khusus Ibukota Jakarta 10330",
      "phone": "08-",
      "visi": "Yayasan Perguruan “Cikini” mengutamakan pendidikan berwawasan kebangsaan dan budi pekerti yang luhur dengan memberdayakan kemampuan putra-putri bangsa agar dapat mengatasi tantangan masa depan dalam kehidupan bermasyarakat dan berbangsa.",
      "misi": "/misi.png",
      "fasilitas": [
        {
          "title": "Ruang kelas",
          "desc": "Digunakan sebagai ...",
          "imgUrl": "/Ruang Kelas.png"
        },
        {
          "title": "Laboratorium",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Labolatorium.png"
        },
        {
          "title": "Ruang Kerja",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Ruang Kerja.png"
        },
        {
          "title": "Perpustakaan",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Perpustakaan.png"
        },
        {
          "title": "Cafetaria/Kantin",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Cafetaria atau Kantin.png"
        },
        {
          "title": "Gedung Aula",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Gedung Aula.png"
        },
        {
          "title": "Gudang Sekolah",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Gudang sekolah.png"
        },
        {
          "title": "Kendaraan operasional",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Kendaraan operasional.png"
        },
        {
          "title": "Jaringan Internet",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Jaringan Internet.png"
        }
      ],
      "ekstrakulikuler": [
        {
          "title": "Renang",
          "desc": "22222",
          "imgUrl": "/Ruang Kelas.png"
        },
        {
          "title": "Sepak Bola",
          "desc": "11111",
          "imgUrl": "/Ruang Kelas.png"
        }
      ],
      "sambutan":{
        "name": "Dr. Setiawan Nazir",
        "image":  "Rectangle108school.png",
        "desc" : "Lorem Lipsum"
      }
    },
    {
      "id": 7,
      "name": "SMP PERGURUAN “CIKINI”",
      "type": "SMP",
      "image": "Rectangle108school.png",
      "students": 133,
      "address": "Jl. Cikini Raya No. 74-76, Menteng, Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330",
      "phone": "08-",
      "visi": "Yayasan Perguruan “Cikini” mengutamakan pendidikan berwawasan kebangsaan dan budi pekerti yang luhur dengan memberdayakan kemampuan putra-putri bangsa agar dapat mengatasi tantangan masa depan dalam kehidupan bermasyarakat dan berbangsa.",
      "misi": "/misi.png",
      "fasilitas": [
        {
          "title": "Ruang kelas",
          "desc": "Digunakan sebagai ...",
          "imgUrl": "/Ruang Kelas.png"
        },
        {
          "title": "Laboratorium",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Labolatorium.png"
        },
        {
          "title": "Ruang Kerja",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Ruang Kerja.png"
        },
        {
          "title": "Perpustakaan",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Perpustakaan.png"
        },
        {
          "title": "Cafetaria/Kantin",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Cafetaria atau Kantin.png"
        },
        {
          "title": "Gedung Aula",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Gedung Aula.png"
        },
        {
          "title": "Gudang Sekolah",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Gudang sekolah.png"
        },
        {
          "title": "Kendaraan operasional",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Kendaraan operasional.png"
        },
        {
          "title": "Jaringan Internet",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Jaringan Internet.png"
        }
      ],
      "ekstrakulikuler": [
        {
          "title": "Renang",
          "desc": "22222",
          "imgUrl": "/Ruang Kelas.png"
        },
        {
          "title": "Sepak Bola",
          "desc": "11111",
          "imgUrl": "/Ruang Kelas.png"
        }
      ],
      "sambutan":{
        "name": "Dr. Setiawan Nazir",
        "image":  "Rectangle108school.png",
        "desc" : "Lorem Lipsum"
      }
    },
    {
      "id": 8,
      "name": "SMK Perguruan CIKINI-KIIC Karawang",
      "type": "SMP",
      "image": "Rectangle108school.png",
      "students": 190,
      "address": "Jalan Permatan IV, Kawasan industry KIIC, Desa Sukaluyu, Kec. Teluk Jamber Timur, Karawang, Jawa Barat.",
      "phone": "08-",
      "visi": "Yayasan Perguruan “Cikini” mengutamakan pendidikan berwawasan kebangsaan dan budi pekerti yang luhur dengan memberdayakan kemampuan putra-putri bangsa agar dapat mengatasi tantangan masa depan dalam kehidupan bermasyarakat dan berbangsa.",
      "misi": "/misi.png",
      "fasilitas": [
        {
          "title": "Ruang kelas",
          "desc": "Digunakan sebagai ...",
          "imgUrl": "/Ruang Kelas.png"
        },
        {
          "title": "Laboratorium",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Labolatorium.png"
        },
        {
          "title": "Ruang Kerja",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Ruang Kerja.png"
        },
        {
          "title": "Perpustakaan",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Perpustakaan.png"
        },
        {
          "title": "Cafetaria/Kantin",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Cafetaria atau Kantin.png"
        },
        {
          "title": "Gedung Aula",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Gedung Aula.png"
        },
        {
          "title": "Gudang Sekolah",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Gudang sekolah.png"
        },
        {
          "title": "Kendaraan operasional",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Kendaraan operasional.png"
        },
        {
          "title": "Jaringan Internet",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Jaringan Internet.png"
        }
      ],
      "ekstrakulikuler": [
        {
          "title": "Renang",
          "desc": "22222",
          "imgUrl": "/Ruang Kelas.png"
        },
        {
          "title": "Sepak Bola",
          "desc": "11111",
          "imgUrl": "/Ruang Kelas.png"
        }
      ],
      "sambutan":{
        "name": "Dr. Setiawan Nazir",
        "image":  "Rectangle108school.png",
        "desc" : "Lorem Lipsum"
      }
    }

  ],
  "english": [
    {
      "id": 1,
      "name": "TK Perguruan Cikini, Jakarta Pusat",
      "type": "TK",
      "image": "Rectangle108school.png",
      "students": 200,
      "address": "Jl. Cikini Raya No.74-76 14, RT.14/RW.5, Cikini, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330",
      "phone": "08-",
      "visi": "Yayasan Perguruan “Cikini” mengutamakan pendidikan berwawasan kebangsaan dan budi pekerti yang luhur dengan memberdayakan kemampuan putra-putri bangsa agar dapat mengatasi tantangan masa depan dalam kehidupan bermasyarakat dan berbangsa.",
      "misi": "/misi.png",
      "fasilitas": [
        {
          "title": "Ruang kelas",
          "desc": "Digunakan sebagai ...",
          "imgUrl": "/Ruang Kelas.png"
        },
        {
          "title": "Laboratorium",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Labolatorium.png"
        },
        {
          "title": "Ruang Kerja",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Ruang Kerja.png"
        },
        {
          "title": "Perpustakaan",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Perpustakaan.png"
        },
        {
          "title": "Cafetaria/Kantin",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Cafetaria atau Kantin.png"
        },
        {
          "title": "Gedung Aula",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Gedung Aula.png"
        },
        {
          "title": "Gudang Sekolah",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Gudang sekolah.png"
        },
        {
          "title": "Kendaraan operasional",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Kendaraan operasional.png"
        },
        {
          "title": "Jaringan Internet",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Jaringan Internet.png"
        }
      ],
      "ekstrakulikuler": [
        {
          "title": "Renang",
          "desc": "-",
          "imgUrl": "/Ruang Kelas.png"
        },
        {
          "title": "Sepak Bola",
          "desc": "-",
          "imgUrl": "/Ruang Kelas.png"
        }
      ],
      "sambutan":{
        "name": "Dr. Setiawan Nazir",
        "image":  "Rectangle108school.png",
        "desc" : "Lorem Lipsum"
      }
    },
    {
      "id": 2,
      "name": "SD Perguruan Cikini, Jakarta Pusat",
      "type": "SD",
      "image": "Rectangle108school.png",
      "students": 250,
      "address": "Jl. Cikini Raya No.74-76 14, RT.14/RW.5, Cikini, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330",
      "phone": "085yyyyyy",
      "visi": "Yayasan Perguruan “Cikini” mengutamakan pendidikan berwawasan kebangsaan dan budi pekerti yang luhur dengan memberdayakan kemampuan putra-putri bangsa agar dapat mengatasi tantangan masa depan dalam kehidupan bermasyarakat dan berbangsa.",
      "misi": "/misi.png",
      "fasilitas": [
        {
          "title": "Ruang kelas",
          "desc": "Digunakan sebagai ...",
          "imgUrl": "/Ruang Kelas.png"
        },
        {
          "title": "Laboratorium",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Labolatorium.png"
        },
        {
          "title": "Ruang Kerja",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Ruang Kerja.png"
        },
        {
          "title": "Perpustakaan",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Perpustakaan.png"
        },
        {
          "title": "Cafetaria/Kantin",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Cafetaria atau Kantin.png"
        },
        {
          "title": "Gedung Aula",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Gedung Aula.png"
        },
        {
          "title": "Gudang Sekolah",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Gudang sekolah.png"
        },
        {
          "title": "Kendaraan operasional",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Kendaraan operasional.png"
        },
        {
          "title": "Jaringan Internet",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Jaringan Internet.png"
        }
      ],
      "ekstrakulikuler": [
        {
          "title": "Renang",
          "desc": "22222",
          "imgUrl": "/Ruang Kelas.png"
        },
        {
          "title": "Sepak Bola",
          "desc": "11111",
          "imgUrl": "/Ruang Kelas.png"
        }
      ],
      "sambutan":{
        "name": "Dr. Setiawan Nazir",
        "image":  "Rectangle108school.png",
        "desc" : "Lorem Lipsum"
      }
    },
    {
      "id": 3,
      "name": "SMK 3 PERGURUAN “CIKINI”",
      "type": "SMK",
      "image": "Rectangle108school.png",
      "students": 1246,
      "address": "Jl. Cikini Raya No.74-76 14, RT.14/RW.5, Cikini, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330",
      "phone": "085yyyyyy",
      "visi": "Yayasan Perguruan “Cikini” mengutamakan pendidikan berwawasan kebangsaan dan budi pekerti yang luhur dengan memberdayakan kemampuan putra-putri bangsa agar dapat mengatasi tantangan masa depan dalam kehidupan bermasyarakat dan berbangsa.",
      "misi": "/misi.png",
      "fasilitas": [
        {
          "title": "Ruang kelas",
          "desc": "Digunakan sebagai ...",
          "imgUrl": "/Ruang Kelas.png"
        },
        {
          "title": "Laboratorium",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Labolatorium.png"
        },
        {
          "title": "Ruang Kerja",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Ruang Kerja.png"
        },
        {
          "title": "Perpustakaan",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Perpustakaan.png"
        },
        {
          "title": "Cafetaria/Kantin",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Cafetaria atau Kantin.png"
        },
        {
          "title": "Gedung Aula",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Gedung Aula.png"
        },
        {
          "title": "Gudang Sekolah",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Gudang sekolah.png"
        },
        {
          "title": "Kendaraan operasional",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Kendaraan operasional.png"
        },
        {
          "title": "Jaringan Internet",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Jaringan Internet.png"
        }
      ],
      "ekstrakulikuler": [
        {
          "title": "Renang",
          "desc": "-",
          "imgUrl": "/Ruang Kelas.png"
        },
        {
          "title": "Sepak Bola",
          "desc": "-",
          "imgUrl": "/Ruang Kelas.png"
        }
      ],
      "sambutan":{
        "name": "Dr. Setiawan Nazir",
        "image":  "Rectangle108school.png",
        "desc" : "Lorem Lipsum"
      }
    },
    {
      "id": 4,
      "name": "SMA PERGURUAN “CIKINI",
      "type": "SMK",
      "image": "Rectangle108school.png",
      "students": 406,
      "address": "Jl. Duren Tiga Raya No.1 Pancoran Jakarta Selatan, Daerah Khusus Ibukota Jakarta 10330",
      "phone": "08-",
      "visi": "Menjadi center of excellence  di bidang pendidikan dalam mencetak generasi panutan yang beriman dan bertakwa, berwawasan kebangsaan, pancasilais, berbudi pekerti luhur, mandiri dan berwawasan lingkungan, sesuai perkembangan zaman, dengan tetap menjaga keberlangsungan Yayasan Perguruan ”Cikini” yang selalu bertumbuh",
      "misi": "/misi.png",
      "fasilitas": [
        {
          "title": "Ruang kelas",
          "desc": "Digunakan sebagai ...",
          "imgUrl": "/Ruang Kelas.png"
        },
        {
          "title": "Laboratorium",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Labolatorium.png"
        },
        {
          "title": "Ruang Kerja",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Ruang Kerja.png"
        },
        {
          "title": "Perpustakaan",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Perpustakaan.png"
        },
        {
          "title": "Cafetaria/Kantin",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Cafetaria atau Kantin.png"
        },
        {
          "title": "Gedung Aula",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Gedung Aula.png"
        },
        {
          "title": "Gudang Sekolah",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Gudang sekolah.png"
        },
        {
          "title": "Kendaraan operasional",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Kendaraan operasional.png"
        },
        {
          "title": "Jaringan Internet",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Jaringan Internet.png"
        }
      ],
      "ekstrakulikuler": [
        {
          "title": "Renang",
          "desc": "22222",
          "imgUrl": "/Ruang Kelas.png"
        },
        {
          "title": "Sepak Bola",
          "desc": "11111",
          "imgUrl": "/Ruang Kelas.png"
        }
      ],
      "sambutan":{
        "name": "Dr. Setiawan Nazir",
        "image":  "Rectangle108school.png",
        "desc" : "Lorem Lipsum"
      }
    },
    {
      "id": 5,
      "name": "SMK 1 PERGURUAN “CIKINI”",
      "type": "SMK",
      "image": "Rectangle108school.png",
      "students": 1183,
      "address": "Jl Alur laut blok NN no 1, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330",
      "phone": "08-",
      "visi": "Yayasan Perguruan “Cikini” mengutamakan pendidikan berwawasan kebangsaan dan budi pekerti yang luhur dengan memberdayakan kemampuan putra-putri bangsa agar dapat mengatasi tantangan masa depan dalam kehidupan bermasyarakat dan berbangsa.",
      "misi": "/misi.png",
      "fasilitas": [
        {
          "title": "Ruang kelas",
          "desc": "Digunakan sebagai ...",
          "imgUrl": "/Ruang Kelas.png"
        },
        {
          "title": "Laboratorium",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Labolatorium.png"
        },
        {
          "title": "Ruang Kerja",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Ruang Kerja.png"
        },
        {
          "title": "Perpustakaan",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Perpustakaan.png"
        },
        {
          "title": "Cafetaria/Kantin",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Cafetaria atau Kantin.png"
        },
        {
          "title": "Gedung Aula",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Gedung Aula.png"
        },
        {
          "title": "Gudang Sekolah",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Gudang sekolah.png"
        },
        {
          "title": "Kendaraan operasional",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Kendaraan operasional.png"
        },
        {
          "title": "Jaringan Internet",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Jaringan Internet.png"
        }
      ],
      "ekstrakulikuler": [
        {
          "title": "Renang",
          "desc": "22222",
          "imgUrl": "/Ruang Kelas.png"
        },
        {
          "title": "Sepak Bola",
          "desc": "11111",
          "imgUrl": "/Ruang Kelas.png"
        }
      ],
      "sambutan":{
        "name": "Dr. Setiawan Nazir",
        "image":  "Rectangle108school.png",
        "desc" : "Lorem Lipsum"
      }
    },
    {
      "id": 6,
      "name": "SMK MUSIK PERGURUAN “CIKINI”",
      "type": "SMK",
      "image": "Rectangle108school.png",
      "students": 37,
      "address": "L Duren Tiga Raya NO 1, Pancoran, Jakarta Selatan, Daerah Khusus Ibukota Jakarta 10330",
      "phone": "08-",
      "visi": "Yayasan Perguruan “Cikini” mengutamakan pendidikan berwawasan kebangsaan dan budi pekerti yang luhur dengan memberdayakan kemampuan putra-putri bangsa agar dapat mengatasi tantangan masa depan dalam kehidupan bermasyarakat dan berbangsa.",
      "misi": "/misi.png",
      "fasilitas": [
        {
          "title": "Ruang kelas",
          "desc": "Digunakan sebagai ...",
          "imgUrl": "/Ruang Kelas.png"
        },
        {
          "title": "Laboratorium",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Labolatorium.png"
        },
        {
          "title": "Ruang Kerja",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Ruang Kerja.png"
        },
        {
          "title": "Perpustakaan",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Perpustakaan.png"
        },
        {
          "title": "Cafetaria/Kantin",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Cafetaria atau Kantin.png"
        },
        {
          "title": "Gedung Aula",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Gedung Aula.png"
        },
        {
          "title": "Gudang Sekolah",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Gudang sekolah.png"
        },
        {
          "title": "Kendaraan operasional",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Kendaraan operasional.png"
        },
        {
          "title": "Jaringan Internet",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Jaringan Internet.png"
        }
      ],
      "ekstrakulikuler": [
        {
          "title": "Renang",
          "desc": "22222",
          "imgUrl": "/Ruang Kelas.png"
        },
        {
          "title": "Sepak Bola",
          "desc": "11111",
          "imgUrl": "/Ruang Kelas.png"
        }
      ],
      "sambutan":{
        "name": "Dr. Setiawan Nazir",
        "image":  "Rectangle108school.png",
        "desc" : "Lorem Lipsum"
      }
    },
    {
      "id": 7,
      "name": "SMP PERGURUAN “CIKINI”",
      "type": "SMP",
      "image": "Rectangle108school.png",
      "students": 133,
      "address": "Jl. Cikini Raya No. 74-76, Menteng, Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330",
      "phone": "08-",
      "visi": "Yayasan Perguruan “Cikini” mengutamakan pendidikan berwawasan kebangsaan dan budi pekerti yang luhur dengan memberdayakan kemampuan putra-putri bangsa agar dapat mengatasi tantangan masa depan dalam kehidupan bermasyarakat dan berbangsa.",
      "misi": "/misi.png",
      "fasilitas": [
        {
          "title": "Ruang kelas",
          "desc": "Digunakan sebagai ...",
          "imgUrl": "/Ruang Kelas.png"
        },
        {
          "title": "Laboratorium",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Labolatorium.png"
        },
        {
          "title": "Ruang Kerja",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Ruang Kerja.png"
        },
        {
          "title": "Perpustakaan",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Perpustakaan.png"
        },
        {
          "title": "Cafetaria/Kantin",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Cafetaria atau Kantin.png"
        },
        {
          "title": "Gedung Aula",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Gedung Aula.png"
        },
        {
          "title": "Gudang Sekolah",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Gudang sekolah.png"
        },
        {
          "title": "Kendaraan operasional",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Kendaraan operasional.png"
        },
        {
          "title": "Jaringan Internet",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Jaringan Internet.png"
        }
      ],
      "ekstrakulikuler": [
        {
          "title": "Renang",
          "desc": "22222",
          "imgUrl": "/Ruang Kelas.png"
        },
        {
          "title": "Sepak Bola",
          "desc": "11111",
          "imgUrl": "/Ruang Kelas.png"
        }
      ],
      "sambutan":{
        "name": "Dr. Setiawan Nazir",
        "image":  "Rectangle108school.png",
        "desc" : "Lorem Lipsum"
      }
    },
    {
      "id": 8,
      "name": "SMK Perguruan CIKINI-KIIC Karawang",
      "type": "SMP",
      "image": "Rectangle108school.png",
      "students": 190,
      "address": "Jalan Permatan IV, Kawasan industry KIIC, Desa Sukaluyu, Kec. Teluk Jamber Timur, Karawang, Jawa Barat.",
      "phone": "08-",
      "visi": "Yayasan Perguruan “Cikini” mengutamakan pendidikan berwawasan kebangsaan dan budi pekerti yang luhur dengan memberdayakan kemampuan putra-putri bangsa agar dapat mengatasi tantangan masa depan dalam kehidupan bermasyarakat dan berbangsa.",
      "misi": "/misi.png",
      "fasilitas": [
        {
          "title": "Ruang kelas",
          "desc": "Digunakan sebagai ...",
          "imgUrl": "/Ruang Kelas.png"
        },
        {
          "title": "Laboratorium",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Labolatorium.png"
        },
        {
          "title": "Ruang Kerja",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Ruang Kerja.png"
        },
        {
          "title": "Perpustakaan",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Perpustakaan.png"
        },
        {
          "title": "Cafetaria/Kantin",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Cafetaria atau Kantin.png"
        },
        {
          "title": "Gedung Aula",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Gedung Aula.png"
        },
        {
          "title": "Gudang Sekolah",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Gudang sekolah.png"
        },
        {
          "title": "Kendaraan operasional",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Kendaraan operasional.png"
        },
        {
          "title": "Jaringan Internet",
          "desc": "Digunakan sebagai...",
          "imgUrl": "/Jaringan Internet.png"
        }
      ],
      "ekstrakulikuler": [
        {
          "title": "Renang",
          "desc": "22222",
          "imgUrl": "/Ruang Kelas.png"
        },
        {
          "title": "Sepak Bola",
          "desc": "11111",
          "imgUrl": "/Ruang Kelas.png"
        }
      ],
      "sambutan":{
        "name": "Dr. Setiawan Nazir",
        "image":  "Rectangle108school.png",
        "desc" : "Lorem Lipsum"
      }
    }
  ]
}

const Daftar = () => {
  let schoolsData = data.bahasa
  const {globalState, updateGlobalState } = useContext(AppContext);
  const [saveId, setSaveId] = useState(null);
  console.log(data)
  return (
    <div className="p-5 lg:p-8">
      <div className="text-center text-3xl lg:text-5xl font-bold mb-10">DAFTAR SEKOLAH</div>
      <div className="grid grid-cols-2 lg:grid lg:grid-cols-3 gap-2 lg:gap-10">
        {schoolsData.map((school) => (
          <Link key={school.id} to={`/school-detail/${school.id}`}>
            <button
              onClick={() => {
                setSaveId(school.id);
                console.log(school.id);
                // <SchoolDetail data={saveId} />;
              }}
              className="border rounded-lg p-3"
            >
              <img className="flex justify-center w-full" src={require(`../../assets/img/school/${school.image}`)} alt={`${school.name}`} />
              <div className="text-start text-sm lg:text-2xl mt-5">{school.name}</div>
              <div className="flex gap-3 text-start mt-3">
                <img src={Wisuda} alt="logo" />
                <div className="text-[#8d8f91] text-[10px] flex items-center lg:text-lg">{school.students} Siswa</div>
              </div>
              <div className="flex gap-3 items-start text-start mt-3">
                <img className=" " src={Loc} alt="logo" />
                <div className="text-[#8d8f91] text-[10px] flex items-center lg:text-lg">{school.address}</div>
              </div>
              <div className="flex gap-3 text-start mt-3">
                <img src={Telf} alt="Telf" />
                <div className="text-[#8d8f91] text-[10px] flex items-center lg:text-lg">{school.phone}</div>
              </div>
            </button>
          </Link>
        ))}
      </div>
      {/* <div className="hidden">
        <SchoolDetail data={{ saveId }} />
      </div> */}
    </div>
  );
};

export default Daftar;
