import React from "react";

const StudyData = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center  items-center m-4 border-2 border-lime-300 rounded-xl bg-white">
      <img src={data.src}></img>
      <div>
        <div>{data.title}</div>
        <div>{data.university}</div>
        <div>{data.egreso}</div>
        <div>{data.metodo}</div>
        <div>{data.descripción}</div>
      </div>
    </div>
  );
};

export default StudyData;
