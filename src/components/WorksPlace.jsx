import React from "react";

const WorksPlace = ({ data }) => {
  return (
    <div className="grid grid-cols-2  justify-items-center  items-center border rounded m-3 gap-2 border-lime-300">
      <div className="p-2">
        <img src={data.src}></img>
      </div>
      <div>
        <p className="text-center font-bold">{data.cargo}</p>
        <p className="text-center px-2">{data.empresa}</p>
        <p className="text-center">
          <span className="text-center font-bold">Inicio: </span> {data.ingreso}
        </p>
        <p className="text-center">
          <span className="text-center font-bold">Fin: </span>
          {data.egreso}
        </p>
        <p className="text-justify px-4">{data.descripción}</p>
      </div>
    </div>
  );
};

export default WorksPlace;
