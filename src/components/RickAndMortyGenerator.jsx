import React, { useEffect, useState } from "react";
import getCharactersApi from "../api/getCharactersApi";
import RickAndMorthyCard from "./RickAndMorthyCard";
//Context
import { useInteractionContex } from "../context/InteractionContex";
const RickAndMortyGenerator = () => {
  const [state, setState] = useState(false);
  const { borderSelectedGreen } = useInteractionContex();
  const [charactersList, setCharactersList] = useState([]);
  const urlBase = "https://rickandmortyapi.com/api";
  useEffect(() => {
    (async () => {
      await loadCharacters();
    })();
  }, []);
  const loadCharacters = async () => {
    const response = await getCharactersApi(urlBase);
    setCharactersList(response);
  };

  return (
    <div
      className={`grid m-2 justify-items-center  items-center border ${borderSelectedGreen}`}
    >
      <h1
        className="my-4 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl cursor-pointer font-bold"
        onClick={() => setState(!state)}
      >
        Rick And Morthy Api
      </h1>
      {state && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {charactersList.map((character) => (
            <RickAndMorthyCard
              character={character}
              key={character.id}
            ></RickAndMorthyCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default RickAndMortyGenerator;
