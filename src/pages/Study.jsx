import React from "react";
// COMPONENTES
import StudyData from "../components/StudyData";
import StudyCourse from "../components/StudyCourse";
//Helpers
import { dataStudy, dataCourses } from "../helpers/data";
//Context
import { useLanguajeContex } from "../context/LanguajeContex";

const Study = () => {
  const { languaje } = useLanguajeContex();
  return (
    <div className="container m-auto p-0 mt-20">
      <h1 className="mt-4 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
        {languaje ? "Professional Studies" : "Estudios Profesionales"}
      </h1>
      <div className="grid grid-rows-1 mb-5">
        <div>
          {dataStudy.map((data) => {
            return (
              <div key={data.id}>
                <StudyData data={data}></StudyData>
              </div>
            );
          })}
        </div>
        <h1 className="my-4 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          {languaje ? "Certified Courses" : "Cursos Certificados"}
        </h1>
        <div className="grid grid-rows-1 mb-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {dataCourses.map((data) => {
              return (
                <div key={data.id}>
                  <StudyCourse data={data}></StudyCourse>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Study;
