import React from "react";

const RickAndMorthyCard = ({ character }) => {
  return (
    <div className="grid justify-items-center  items-center border-gray-400 border rounded-xl m-1">
      <div className="font-bold uppercase text-center">{character.name}</div>
      <img src={character.image} alt={character.name}></img>
      <div className="grid  justify-items-start  items-center m-1">
        <div>
          <span className="font-bold">Estado:</span> {character.status}
        </div>
        <div>
          <span className="font-bold">Especie:</span> {character.species}
        </div>
        <div>
          <span className="font-bold">Genero:</span> {character.gender}
        </div>
        {character.type ? (
          <div>
            <span className="font-bold">Tipo:</span> {character.type}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default RickAndMorthyCard;
