// Librerias de React
import React from "react";
import { useState } from "react";
//Imagenes
import btnLeft from "../assets/icons/left.png";
import btnRight from "../assets/icons/right.png";
import background1 from "../assets/images/matri.jpeg";
import HomeSliderData from "./HomeSliderData";
// Arreglo con información de lo que soy
const dataSlider = [
  {
    src: "https://picsum.photos/id/1011/1072",
    id: 0,
    alt: "Carlos Daza",
    title: "Carlos Andres Daza Parra",
    description:
      "Naci el 15 de noviembre de 1987 en la ciudad de Chiquinquirá(Boyacá). Soy Ingeniero de Sistemas, Especialista en Docencia y Pedagogia y Magister en Sistemas Integrados de Gestión.",
    description2:
      "Soy casado, tengo un hijo de 15 años y dos mascotas. Bruno un perro y Osiris una gata",
    description3:
      "He sido docente universitario de Inglés y materias de desarrollo de software, bases de datos y analisis de datos, auditor y desarrollador de software frontend principalmente. Conosco de bases de datos y Django.",
    description4: "Me gusta mucho leer y la disciplina es mi mejor cualidad"
  },
  {
    src: "https://picsum.photos/id/1011/1072",
    id: 1,
    alt: "image1",
    title: "Hobies",
    description:
      "Ingeniero de Sistemas de la Universidad Distrital francisco José de Caldas en el año 2012.",
    description2:
      "Especialista en Docencia y Pedagogía de la Fundacion del Área Andina en el año 2018.",
    description3:
      "Magister en Sistemas Integrados de Gestión de la Universidad Internacional de La Rioja en el año 2015.",
    description4:
      "Más de 50 cursos certificados de Html5, Sass, Css, Animaciones con Css, Js, React, FireBase, Bulma, Django, Ui, Ux, Tailwind 2 y 3, Boostrap, Python y Vue en Platzi, Udemy, Sena, entre otros"
  },
  {
    src: "https://picsum.photos/id/1012/1072",
    id: 2,
    alt: "image2",
    title: "¿Que se hacer?",
    description:
      "He desarrollado en HTML5, CSS, SASS y he sido docente universitario de asignaturas como desarrollo Web en la que se enfocaba en el diseño de interfaces.",
    description2:
      "He sido administrador de servidores Linux y docente de asigturas de administración de servidores.",
    description3:
      "Desarrollador en Java, Php (Tengo dos softwares registrados) y docente de estructuras de datos, funcamentos de programación, metodologias de desarrollo y auditor de software.",
    description4:
      "Investigador Jr según Colciencias, Director de proyectos tanto de software como de tesis de grado, Lider de equipos de desarrollo Frontend"
  }
];
const HomeSlider = () => {
  const [imagenActual, setImagenActual] = useState(0);
  const cantidad = dataSlider?.length;
  const siguienteImagen = () => {
    setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
  };
  const anteriorImagen = () => {
    setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
  };
  if (!Array.isArray(dataSlider) || cantidad === 0) return;
  return (
    <>
      <div
        className="grid h-full w-full justify-items-center bg-cover bg-center bg-no-repeat items-center mt-20"
        style={{
          backgroundImage: `url(${background1})`
        }}
      >
        <div className="m-2 grid justify-items-center  items-center">
          {dataSlider.map((image, index) => {
            return (
              imagenActual === index && (
                <div
                  key={index}
                  className="grid grid-cols-12 gap-2  justify-items-center  items-center"
                >
                  <div className="col-start-2">
                    <button className="col-span-2" onClick={anteriorImagen}>
                      <img
                        className=""
                        src={btnLeft}
                        alt="anterior"
                        width="20"
                        height="20"
                      ></img>
                    </button>
                  </div>
                  <HomeSliderData image={image}></HomeSliderData>
                  <div className="col-end-12">
                    <button className="col-span-2" onClick={siguienteImagen}>
                      <img
                        className=""
                        width="20"
                        height="20"
                        src={btnRight}
                        alt="siguiente"
                      ></img>
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
