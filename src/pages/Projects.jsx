import React from "react";
import PostGeneratos from "../components/PostGeneratos";
import TodoGenerator from "../components/TodoGenerator";
import PokeApiGenerator from "../components/PokeApiGenerator";
import RickAndMortyGenerator from "../components/RickAndMortyGenerator";

const Projects = () => {
  return (
    <div className="my-10 pt-10 grid">
      <div className="grid items-center">
        <PostGeneratos></PostGeneratos>
        <TodoGenerator></TodoGenerator>
        <PokeApiGenerator></PokeApiGenerator>
        <RickAndMortyGenerator></RickAndMortyGenerator>
        <link href="https://endearing-mermaid-953900.netlify.app" title="Test en vue"/>
      </div>
    </div>
  );
};

export default Projects;
