import React from "react";
import PostGeneratos from "../components/PostGeneratos";
import TodoGenerator from "../components/TodoGenerator";
import PokeApiGenerator from "../components/PokeApiGenerator";

const Projects = () => {
  return (
    <div className="my-10 pt-10 grid">
      <div>
        <PostGeneratos></PostGeneratos>
        <TodoGenerator></TodoGenerator>
        <PokeApiGenerator></PokeApiGenerator>
      </div>
    </div>
  );
};

export default Projects;
