import React from "react";

const TodoDescription = () => {
  return (
    <div className="justify-items-center  items-center border rounded m-3 gap-2 border-gray-300 bg-white">
      <h2 className="text-center my-4 text-xl sm:text-1xl md:text-1xl lg:text-2xl xl:text-2xl 2xl:text-3xl">
        Descripción
      </h2>
      <p className="text-center p-4">
        El proyecto está actualmente funcionando con contexto, usa sweet alert,
        <br />
        localstorage y permite crear tareas, marcarlas por completadas y las
        <br />
        ordena según la prioridad y si fueron realizadas.
      </p>
    </div>
  );
};

export default TodoDescription;
