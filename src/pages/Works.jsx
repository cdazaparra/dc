import React from "react";
//Helpers
import { dataWorks } from "../helpers/data";
//Componentes
import WorksPlace from "../components/WorksPlace";
//Context
import { useLanguajeContex } from "../context/LanguajeContex";

const Works = () => {
  const { languaje } = useLanguajeContex();
  return (
    <div className="mt-20">
      <h1 className="text-6xl text-center mb-5">
        {languaje ? "Works" : "Trabajos"}
      </h1>
      <div className="grid grid-rows-1 mb-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {dataWorks.map((data) => {
            return (
              <div className="grid grid-rows-1 mb-5" key={data.id}>
                <WorksPlace data={data}></WorksPlace>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Works;
