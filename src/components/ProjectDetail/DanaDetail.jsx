import React, { useContext, useState } from "react";
import "antd/dist/reset.css";
import "./ProjectDetailStyle.css";
import data from "../../assets/json/project.json";

const DanaDetail = ({ Getid }) => {
  const galleryId = Getid;
  console.log("Gallery id = ", galleryId);
  const projectDatas = data.bahasa.find((item) => item.id === parseInt(galleryId));
  console.log("data Gallery=", projectDatas);

  return (
    <>
      <div className="dana-detail-container">
        <div className="dana-detail-content-layout">
          {projectDatas.rincianDanaPict.map((imageUrl, index) => (
            <div key={index}>
              <img loading="lazy" src={require(`../../assets/img/project/${imageUrl}`)} alt="rincian-dana" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DanaDetail;
