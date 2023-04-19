import React from "react";

//Context
import { useLanguajeContex } from "../context/LanguajeContex";
import { useInteractionContex } from "../context/InteractionContex";
const RickAndMorthyCard = ({ character }) => {
  const { languaje } = useLanguajeContex();
  const { borderSelectedGray } = useInteractionContex();
  return (
    <div
      className={`grid justify-items-center  items-center ${borderSelectedGray} border rounded-xl m-1`}
    >
      <div className="font-bold uppercase text-center">{character.name}</div>
      <img
        src={character.image}
        alt={character.name}
        className="rounded-full"
      ></img>
      <div className="grid  justify-items-start  items-center m-1">
        <div>
          <span className="font-bold">{languaje ? "Status:" : "Estado:"}</span>{" "}
          {character.status}
        </div>
        <div>
          <span className="font-bold">
            {languaje ? "Species:" : "Especie:"}
          </span>{" "}
          {character.species}
        </div>
        <div>
          <span className="font-bold">{languaje ? "Gender:" : "Genero:"}</span>{" "}
          {character.gender}
        </div>
        {character.type ? (
          <div>
            <span className="font-bold">{languaje ? "Type:" : "Tipo:"}</span>{" "}
            {character.type}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default RickAndMorthyCard;
