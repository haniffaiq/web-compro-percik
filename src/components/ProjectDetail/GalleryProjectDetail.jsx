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
  const projectDatas = data.bahasa.find((item) => (item.id = galleryId));
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
      <div className="gallery-tittle">
        <h2>Gallery</h2>
      </div>
      <div className="gallery-outer-container">
        <div className="gallery-container">
          <Carousel autoplay slidesToShow={3} {...settings}>
            {projectDatas.urlGallery.map((imageUrl, index) => (
              <div key={index}>
                <img src={require(`../../assets/img/project/${imageUrl}`)} alt={`Image ${index + 1}`} className="gallery-project-detail-layout" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default GalleryProjectDetail;
