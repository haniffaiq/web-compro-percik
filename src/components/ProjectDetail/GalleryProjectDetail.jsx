import React, { useContext, useState } from "react";
import { Carousel, ConfigProvider } from "antd";
import "antd/dist/reset.css";
import AppContext from "../../context/AppContext";
import "./ProjectDetailStyle.css";
import data from "../../assets/json/project.json";

const GalleryProjectDetail = ({ Getid }) => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  const galleryId = Getid;
  console.log("Gallery id = ", galleryId);
  const projectDatas = data.bahasa.find((item) => item.id === parseInt(galleryId));
  console.log("data Gallery=", projectDatas);

  const settings = {
    dots: true,
    customPaging: (i) => <Carousel />, // Gunakan fungsi customPaging untuk mengganti dot default
  };

  if (!projectDatas) {
    return <p>Project not found</p>;
  }

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
      {projectDatas.urlGallery.length > 0 && ( // Conditional rendering based on projectDatas.urlGallery
        <div className="gallery-tittle">
          <h2>{globalState.globalProperty === "IND" ? "Galeri" : "Gallery"}</h2>
        </div>
      )}
      <div className="gallery-outer-container">
        <div className="gallery-container">
          <Carousel autoplay slidesToShow={3} {...settings}>
            {projectDatas.urlGallery.map((imageUrl, index) => (
              <div key={index}>
                <img loading="lazy" src={require(`../../assets/img/project/${imageUrl}`)} alt={`gambar ${index + 1}`} className="gallery-project-detail-layout" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default GalleryProjectDetail;
