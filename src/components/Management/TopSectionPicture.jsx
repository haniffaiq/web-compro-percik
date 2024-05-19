import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import logoYPC from "../../assets/img/logo YPC_PUTIH.png";
// import { Link } from "react-router-dom";

import "./ManagementStyle.css";

const TopSectionPict = ({ selectedButton, manajemenData }) => {
  const { globalState } = useContext(AppContext);
  const filteredData = manajemenData.filter((item) => item.jabatanManajemen === selectedButton);

  if (filteredData.length === 0) {
    return <div>No data available for {selectedButton}</div>;
  }

  if (selectedButton === "Pembina" || selectedButton === "Advisor") {
    return (
      <div>
        {filteredData.map(({ id, namaLengkapManajemen, jabatanManajemen, deskripsiManajemen, imageSourceManajemen }) => (
          <div className="top-section-pict-container">
            <div className="pict-list-management-wrapper">
              <div className="management-image-wrapper" key={id}>
                <img loading="lazy" src={require(`../../assets/${imageSourceManajemen}`)} alt="img" />
              </div>
              <div className="management-text-wrapper">
                <p className="overlay-text-management-tittle leading-normal">{namaLengkapManajemen}</p>

                <div className="overlay-text-management-desc">
                  {deskripsiManajemen.split("\n").map((paragraph, index) => (
                    <p key={index} className="leading-normal">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (selectedButton === "Pengawas" || selectedButton === "Supervisor") {
    return (
      <>
        <div className="layout-pengawas">
          {filteredData.map(({ id, namaLengkapManajemen, jabatanManajemen, deskripsiManajemen, imageSourceManajemen }) => (
            <div className="top-section-pict-container">
              <div className="pict-list-management-wrapper-pengawas">
                <div className="management-image-wrapper" key={id}>
                  <img loading="lazy" src={require(`../../assets/${imageSourceManajemen}`)} alt="img" />
                </div>
                <div className="management-text-wrapper">
                  <p className="overlay-text-management-tittle">{namaLengkapManajemen}</p>

                  <div className="overlay-text-management-desc">
                    {deskripsiManajemen.split("\n").map((paragraph, index) => (
                      <p key={index} className="leading-normal">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="blue-bottom-banner">
            <img src={logoYPC} alt="icon-percik" />
            <p>TURUT BERBAKTI MEMBANGUN NEGERI</p>
          </div>
        </div>
      </>
    );
  }

  if (selectedButton === "Pengurus") {
    return (
      <div className="top-section-pict-container-pengurus">
        {filteredData.map(({ id, namaLengkapManajemen, jabatanManajemen, deskripsiManajemen, imageSourceManajemen }) => (
          <div>
            <div className="pict-list-management-wrapper-pengurus">
              <div className="management-image-wrapper-pengurus" key={id}>
                <img loading="lazy" src={require(`../../assets/${imageSourceManajemen}`)} alt="img" />
              </div>
              {deskripsiManajemen.length >= 719 && globalState.globalProperty === "IND" ? (
                <div className="management-text-wrapper-pengurus">
                  <div className="all-text-wrapper-pengurus">
                    <p className="overlay-text-management-tittle-pengurus">{namaLengkapManajemen}</p>

                    <div className="overlay-text-management-desc-pengurus">
                      {deskripsiManajemen.split("\n").map((paragraph, index) =>
                        // Kondisional render berdasarkan panjang deskripsiManajemen
                        deskripsiManajemen.length < 719 ? (
                          // Jika panjang deskripsi kurang dari 719 karakter, set tinggi
                          <p key={index} style={{ height: "600px", lineHeight: 1.5 }}>
                            {paragraph}
                          </p>
                        ) : (
                          // Jika panjang deskripsi lebih dari atau sama dengan 719 karakter, tinggi tidak diatur (default)
                          <p key={index}>{paragraph}</p>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="management-text-wrapper-pengurus">
                  <div className="all-text-wrapper-pengurus">
                    <p className="overlay-text-management-tittle-pengurus">{namaLengkapManajemen}</p>

                    <div className="overlay-text-management-desc-pengurus">
                      {deskripsiManajemen.split("\n").map((paragraph, index) =>
                        // Kondisional render berdasarkan panjang deskripsiManajemen
                        deskripsiManajemen.length < 719 ? (
                          // Jika panjang deskripsi kurang dari 719 karakter, set tinggi
                          <p key={index} style={{ height: "425px", lineHeight: 1.5 }}>
                            {paragraph}
                          </p>
                        ) : (
                          // Jika panjang deskripsi lebih dari atau sama dengan 719 karakter, tinggi tidak diatur (default)
                          <p key={index}>{paragraph}</p>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (selectedButton === "Administrator") {
    return (
      <div className="top-section-pict-container-pengurus">
        {filteredData.map(({ id, namaLengkapManajemen, jabatanManajemen, deskripsiManajemen, imageSourceManajemen }) => (
          <div>
            <div className="pict-list-management-wrapper-pengurus">
              <div className="management-image-wrapper-pengurus" key={id}>
                <img loading="lazy" src={require(`../../assets/${imageSourceManajemen}`)} alt="img" />
              </div>
              {deskripsiManajemen.length >= 719 && globalState.globalProperty === "IND" ? (
                <div className="management-text-wrapper-pengurus">
                  <div className="all-text-wrapper-pengurus">
                    <p className="overlay-text-management-tittle-pengurus">{namaLengkapManajemen}</p>

                    <div className="overlay-text-management-desc-pengurus">
                      {deskripsiManajemen.split("\n").map((paragraph, index) =>
                        // Kondisional render berdasarkan panjang deskripsiManajemen
                        deskripsiManajemen.length < 719 ? (
                          // Jika panjang deskripsi kurang dari 719 karakter, set tinggi
                          <p key={index} style={{ height: "600px", lineHeight: 1.5 }}>
                            {paragraph}
                          </p>
                        ) : (
                          // Jika panjang deskripsi lebih dari atau sama dengan 719 karakter, tinggi tidak diatur (default)
                          <p key={index}>{paragraph}</p>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="management-text-wrapper-pengurus">
                  <div className="all-text-wrapper-pengurus">
                    <p className="overlay-text-management-tittle-pengurus">{namaLengkapManajemen}</p>

                    <div className="overlay-text-management-desc-pengurus">
                      {deskripsiManajemen.split("\n").map((paragraph, index) =>
                        // Kondisional render berdasarkan panjang deskripsiManajemen
                        deskripsiManajemen.length < 719 ? (
                          // Jika panjang deskripsi kurang dari 719 karakter, set tinggi
                          <p key={index} style={{ height: "600px", lineHeight: 1.5 }}>
                            {paragraph}
                          </p>
                        ) : (
                          // Jika panjang deskripsi lebih dari atau sama dengan 719 karakter, tinggi tidak diatur (default)
                          <p key={index}>{paragraph}</p>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default TopSectionPict;
