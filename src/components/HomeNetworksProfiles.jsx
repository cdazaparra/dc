// Librerias de React
import React from "react";
// Imagenes
import NetGitHub from "../assets/images/github.png";
import NetPlatzi from "../assets/images/platzi.png";
import NetLinkedId from "../assets/images/LinkedIn.png";
import NetCvlac from "../assets/images/cvlac.png";
import HomeNetworsProfileData from "./HomeNetworsProfileData";
// Arreglo con información de los perfiles
const dataNetWork = [
  {
    src: NetGitHub,
    href: "https://github.com/cdazaparra",
    id: 0,
    alt: "GitHub Carlos Daza",
    title: "GitHub"
  },
  {
    src: NetPlatzi,
    href: "https://platzi.com/p/ingandresdaza/",
    id: 1,
    alt: "Platzi Carlos Daza",
    title: "Platzi"
  },
  {
    src: NetLinkedId,
    href: "https://www.linkedin.com/in/cdazaparra/",
    id: 2,
    alt: "LinkedIn Carlos Daza",
    title: "LinkedIn"
  },
  {
    src: NetCvlac,
    href: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001614128",
    id: 3,
    alt: "Cvlac Carlos Daza",
    title: "Colciencias"
  }
];
const HomeNetworksProfiles = () => {
  return (
    <div className="container m-auto p-0">
      <div className="grid grid-rows-1 md:grid-rows-2 mb-5">
        <h1 className="my-4 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          Mis perfiles laborales
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center  items-center mb-5">
          {dataNetWork.map((data) => {
            return (
              <div key={data.id}>
                <HomeNetworsProfileData data={data}></HomeNetworsProfileData>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeNetworksProfiles;
