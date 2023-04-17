import React from "react";
const PokeCard = ({ pokemons }) => {
  return (
    <div className="grid border rounded-lg justify-items-center  items-center bg-white m-1">
      <h1 className="font-bold uppercase">{pokemons.name}</h1>
      <img
        src={pokemons.sprites.front_default}
        alt="Pokemon name"
        width="150"
      ></img>
      <div>
        <p>
          <span className="font-bold">Tipo:</span> {pokemons.types[0].type.name}
        </p>
        <p>
          <span className="font-bold">Peso:</span> {pokemons.weight}
        </p>
        <p>
          <span className="font-bold">Altura:</span> {pokemons.height}
        </p>
      </div>
    </div>
  );
};

export default PokeCard;
