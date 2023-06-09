// Librerias de react
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
//Context
import { useLanguajeContex } from "../context/LanguajeContex";
import { useInteractionContex } from "../context/InteractionContex";
//Imagenes
import imgLogo from "../assets/images/logo.png";
import imgThemeMenu from "../assets/icons/day-and-night.png";
import imgLanguageMenuEs from "../assets/icons/languageEs.png";
import imgLanguageMenuEng from "../assets/icons/languageEng.png";

const Menu = () => {
  const [state, setState] = useState(false);
  const handleMenu = () => {
    setState(!state);
  };
  const { languaje } = useLanguajeContex();
  const { handleClick } = useLanguajeContex();
  const { languajeSelected } = useLanguajeContex();
  const { colorSelectedBlue } = useInteractionContex();
  const { handleColor } = useInteractionContex();
  return (
    <div
      className={`mt-0 fixed w-full z-10 top-0 text-center flex flex-wrap items-center justify-between ${colorSelectedBlue}`}
    >
      <div className="mx-6 flex flex-shrink-0 items-center text-white">
        <img
          className="mr-3"
          alt="Logo dc"
          src={imgLogo}
          width="54"
          height="54"
        ></img>
        <span className="text-xl font-semibold tracking-tight">
          Carlos Daza
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          className="mx-4 flex items-center rounded border border-white-400 px-3 py-2 text-blue-200 hover:border-white hover:text-white"
          onClick={handleMenu}
        >
          <svg
            className="h-3 w-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={
          state
            ? "block grid w-full flex-grow justify-items-center  items-center text-center lg:flex lg:w-auto"
            : "block grid hidden w-full flex-grow justify-items-center  items-center text-center lg:flex  lg:w-auto"
        }
      >
        <div className="container justify-center align-middle text-sm lg:flex-grow">
          <NavLink
            to="/dc"
            className="mr-4 mt-4 block text-lg text-blue-100 hover:text-white lg:mt-0 lg:inline-block active:text-white"
            onClick={handleMenu}
          >
            {languajeSelected.menuHome}
          </NavLink>
          <NavLink
            to="/Study"
            className="mr-4 mt-4 block text-lg text-blue-100 hover:text-white lg:mt-0 lg:inline-block"
            onClick={handleMenu}
          >
            {languajeSelected.menuStudies}
          </NavLink>
          <NavLink
            to="/Works"
            className="mr-4 mt-4 block text-lg text-blue-100 hover:text-white lg:mt-0 lg:inline-block"
            onClick={handleMenu}
          >
            {languajeSelected.menuWorks}
          </NavLink>
          <NavLink
            to="/projects"
            className="mr-4 mt-4 block text-lg text-blue-100 hover:text-white lg:mt-0 lg:inline-block"
            onClick={handleMenu}
          >
            {languajeSelected.menuProjects}
          </NavLink>
        </div>
        <div className="container m-2 text-sm lg:flex-grow">
          <div className="grid grid-cols-2 justify-between justify-items-center gap-4">
            <img
              src={imgThemeMenu}
              className="icons col-span-1 mr-4 mt-4 block  text-lg text-blue-100 hover:text-white lg:mt-0 lg:inline-block "
              alt="Dark and light mode"
              width="25"
              height="25"
              onClick={handleColor}
            ></img>
            {/* <img
              className="icons col-span-1 mr-4 mt-4 block text-lg text-blue-100 hover:text-white lg:mt-0 lg:inline-block"
              alt="Change menu position"
              src={imgPositionMenu}
              width="25"
              height="25"
            ></img> */}
            <img
              src={languaje ? imgLanguageMenuEng : imgLanguageMenuEs}
              className="icons col-span-1 mr-4 mt-4 block text-lg text-blue-100 hover:text-white lg:mt-0 lg:inline-block"
              alt="Languaje Eng or Esp"
              width="25"
              height="25"
              onClick={handleClick}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
