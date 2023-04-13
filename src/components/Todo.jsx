import React from "react";
// Imagenes
import imgImportand from "../assets/icons/advertencia.png";
const Todo = ({ todo, deleteTodo, updateTodo }) => {
  const { title, description, state, priority, id } = todo;

  return (
    <li className="list-group-item p-8 bg-white">
      <div className="grid justify-items-center  items-center align-items-start border">
        <div className="grid justify-items-center  items-center grid-rows-3">
          <div className="grid justify-items-center  items-center">
            {priority && !state && (
              <img
                src={imgImportand}
                alt="importand"
                width="30"
                className="justify-items-center  items-center"
              ></img>
            )}
            <h5 className={`${state && "line-through"} font-bold mx-2`}>
              {title}
            </h5>
          </div>
          <p className={`${state && "line-through"}`}>{description}</p>
          <div className="gap-2">
            <button
              onClick={() => deleteTodo(id)}
              className="button p-1 m-1 bg-red-400 rounded-xl"
            >
              Eliminar
            </button>
            <button
              onClick={() => updateTodo(id)}
              className="button p-1 m-1 bg-yellow-400 rounded-xl"
            >
              Actualizar
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Todo;
