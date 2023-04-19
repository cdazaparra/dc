import React from "react";
//Context
import { useLanguajeContex } from "../context/LanguajeContex";
import { useInteractionContex } from "../context/InteractionContex";
const PokeCard = ({ pokemons }) => {
  const { languaje } = useLanguajeContex();
  const { borderSelectedGreen } = useInteractionContex();
  return (
    <div
      className={`grid border ${borderSelectedGreen} rounded-lg justify-items-center  items-center bg-white m-1`}
    >
      <h1 className="font-bold uppercase">{pokemons.name}</h1>
      <img
        src={pokemons.sprites.front_default}
        alt="Pokemon name"
        width="150"
      ></img>
      <div>
        <p>
          <span className="font-bold">{languaje ? "Type:" : "Tipo:"}</span>{" "}
          {pokemons.types[0].type.name}
        </p>
        <p>
          <span className="font-bold">{languaje ? "Weight:" : "Peso:"}</span>{" "}
          {pokemons.weight}
        </p>
        <p>
          <span className="font-bold">{languaje ? "Height:" : "Altura:"}</span>{" "}
          {pokemons.height}
        </p>
      </div>
    </div>
  );
};

export default PokeCard;
