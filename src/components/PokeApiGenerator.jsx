import React, { useState, useEffect } from "react";
import getPokemonApi from "../api/getPokemonApi";
//Imagenes
import imgPokeBall from "../assets/images/pokeball.png";
import PokeCard from "./PokeCard";

const PokeApiGenerator = () => {
  const [state, setState] = useState(false);
  const [pokemonsList, setPokemonsList] = useState([]);
  const [search, setSearch] = useState("");
  const urlBase = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);
  const loadPokemons = async () => {
    const response = await getPokemonApi(urlBase);
    setPokemonsList(response);
  };
  const searchPokemon = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const validator = search === "" ? true : false;
  return (
    <div className="grid m-2 justify-items-center  items-center border border-lime-300 p-2">
      <h1
        className="my-4 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl cursor-pointer font-bold"
        onClick={() => setState(!state)}
      >
        PokeApi
      </h1>
      {state && (
        <div className="grid m-2 justify-items-center  items-center border border-gray-300 rounded-xl">
          <div className="m-2">
            <img src={imgPokeBall} alt="Pokeball" width="50"></img>
          </div>
          <div className="m-4">
            <input
              className="rounded-xl p-1"
              placeholder="Buscar..."
              onChange={searchPokemon}
            ></input>
          </div>
          <div>
            {/* <PokeList pokemonsList={pokemonsList}></PokeList> */}
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  xl:grid-cols-6 justify-items-center  items-center">
              {pokemonsList.map((pokemons) => (
                <div key={pokemons.id}>
                  <div>
                    {validator && (
                      <div>
                        <PokeCard
                          pokemons={pokemons}
                          key={pokemons.id}
                          search={search}
                        ></PokeCard>
                      </div>
                    )}
                  </div>
                  <div>
                    {!validator && (
                      <div>
                        {pokemons.name.includes(search) && (
                          <div>
                            <PokeCard
                              pokemons={pokemons}
                              key={pokemons.id}
                              search={search}
                            ></PokeCard>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokeApiGenerator;
