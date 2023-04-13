import React from "react";
const PokeCard = ({ pokemons }) => {
  return (
    <div className="grid grid-rows-3 border">
      <div className="grid grid-cols-5  justify-items-center  items-center">
        <h1 className="grid col-span-4">Name: {pokemons.name}</h1>
        <p className="grid col-span-1">😐</p>
        <p>Hola</p>
      </div>
      <img src={pokemons.sprites.back_default} alt="Pokemon name"></img>
    </div>
  );
};

export default PokeCard;
