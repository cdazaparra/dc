import React from "react";
import PostGeneratos from "../components/PostGeneratos";
import TodoGenerator from "../components/TodoGenerator";

const Projects = () => {
  return (
    <div className="my-10 pt-10 grid">
      <div>
        <PostGeneratos></PostGeneratos>
        <TodoGenerator></TodoGenerator>
      </div>
    </div>
  );
};

export default Projects;
