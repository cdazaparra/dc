import React from "react";
// COMPONENTES
import StudyData from "../components/StudyData";
// IMAGENES
import imgPregado from "../assets/images/pregrado.png";
import imgPostgrado from "../assets/images/postgrado.png";
import imgMaestria from "../assets/images/maestria.png";
const dataStudy = [
  {
    id: 0,
    src: imgPregado,
    title: "Ingeniero de Sistemas",
    university: "Universidad Distrital Francisco Jóse de Caldas",
    egreso: "2012",
    metodo: "Tesis de grado:",
    descripción:
      "Software de análisis empresarial hecho en PHP, CSS y HTML para medianas y pequeñas empresas que permite un análisis de los inventarios"
  },
  {
    id: 1,
    src: imgPostgrado,
    title: "Especialista en docencia y pedagogía",
    university: "Fundacion universitaria del area andina",
    egreso: "2018",
    metodo: "Tesis de grado:",
    descripción:
      "Equivalencia de resultados en pruebas internas y externas en la lectura comunicativa y razonamiento matemático en la institución nuestra señora del carmen"
  },
  {
    id: 2,
    src: imgMaestria,
    title: "Magister en Sistemas Integrados de Gestión",
    university: "Universidad internacional de la rioja",
    egreso: "2015",
    metodo: "Tesis de grado:",
    descripción:
      "Sistema Integrado de Gestión de Calidad y Medio Ambiente en la especialidad de Ergonomía y Psicosociología Aplicada"
  }
];
const Study = () => {
  return (
    <div className="container m-auto p-0 mt-20">
      <h1 className="my-4 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
        Estudios
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
      </div>
    </div>
  );
};

export default Study;
