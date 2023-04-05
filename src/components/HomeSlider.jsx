// Librerias de React
import React from "react";
import { useState } from "react";
//Imagenes
import btnLeft from "../assets/icons/left.png";
import btnRight from "../assets/icons/right.png";
import background1 from "../assets/images/matri.jpeg";
import HomeSliderData from "./HomeSliderData";
// Arreglo con información de lo que soy
import { dataSlider } from "../helpers/data";
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
