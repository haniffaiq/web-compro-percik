import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import AppContext from "../../context/AppContext";
import Header from "./Header";
import Fasilitas from "./Fasilitas";
import Ekstrakulikuler from "./Ekstrakulikuler";
import Galeri from "./Galeri";
import Visi from "./Visi";
import Sambutan from "./Foto";
// import data from "../../assets/json/school";
// import AboutUs from "./About";
// import Visi from "./Visi";
// import Prestasi from "./Prestasi";
// import Galeri from "./Galeri";
// import Misi from "./Misi";
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
const SchoolDetail = (props) => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  console.log(globalState, "DIAbout");
  const location = useLocation();
  const { id } = useParams();

  const detailSchool = data.bahasa[id - 1].name;
  const detailSchool2 = data.english[id - 1].name;
  const res = detailSchool.split(",");
  const res2 = detailSchool2.split(",");

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(id);
  }, [id]);

  return (
    <>
      {/* {console.log(detailSchool, "INIPROPS")} */}
      <div className="hidden lg:flex gap-1 ml-[40px] py-9 ">
        <Link to="/" className="">
          {globalState.globalProperty === "IND" ? "Home" : "Home"}
        </Link>
        <span> / </span>
        <Link to="/school" className="">
          {globalState.globalProperty === "IND" ? "Sekolah" : "School"}
        </Link>
        <span> / </span>
        <Link to="/school-detail" className="font-bold">
          {globalState.globalProperty === "IND" ? res[0] : res2[0]}
        </Link>
      </div>
      <Header idSchool={id} />
      {/* <Sambutan idSchool={id}/> */}
      {/* <Visi idSchool={id} /> */}
      <Fasilitas idSchool={id} />
      {/* <Ekstrakulikuler idSchool={id} /> */}
      {/* <Galeri idSchool={id} /> */}
    </>
  );
};

export default SchoolDetail;
