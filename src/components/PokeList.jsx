import React from "react";
import PokeCard from "../components/PokeCard";
const PokeList = ({ pokemonsList }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {pokemonsList.map((pokemon) => {
        <div>
          <p>{console.log("perra")}</p>
          <p>name: {pokemon.name}</p>
          <PokeCard pokemonsList={pokemonsList}></PokeCard>
        </div>;
      })}
    </div>
  );
};
export default PokeList;
