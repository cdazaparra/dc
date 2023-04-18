// Librerias de React
import React from "react";
import HomeNetworsProfileData from "./HomeNetworsProfileData";
// Arreglo con información de los perfiles
import { dataNetWork } from "../helpers/data";
//Context
import { useLanguajeContex } from "../context/LanguajeContex";
const HomeNetworksProfiles = () => {
  const { languaje } = useLanguajeContex();
  return (
    <div className="container m-auto p-0">
      <div className="grid grid-rows-1 md:grid-rows-2 mb-5">
        <h1 className="my-4 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          {languaje ? "My job profiles" : "Mis perfiles laborales"}
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
