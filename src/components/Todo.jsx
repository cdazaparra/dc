import React from "react";
// Imagenes
import imgImportand from "../assets/icons/advertencia.png";
//Context
import { useLanguajeContex } from "../context/LanguajeContex";
const Todo = ({ todo, deleteTodo, updateTodo }) => {
  const { title, description, state, priority, id } = todo;

  const { languaje } = useLanguajeContex();
  return (
    <div
      className={`grid justify-items-center  items-center align-items-center border bg-white rounded-3xl " ${
        state ? "text-gray-200" : "text-black"
      }`}
    >
      {state && (
        <div className="text-black">
          {languaje ? "Todo Finished" : "Tarea Realizada"}
        </div>
      )}
      <div className="grid justify-items-center  items-center grid-rows-3">
        {priority && !state && (
          <div className="grid justify-items-center  items-center text-center">
            <div className="grid grid-cols-3 justify-items-center  items-center">
              <span className="font-bold uppercase text-center col-span-2 mx-2">
                {languaje ? "Urgent" : "Es urgente"}
              </span>
              <img
                className="col-span-1 mx-2"
                src={imgImportand}
                alt="importand"
                width="30"
              ></img>
            </div>
            <hr width="150"></hr>
          </div>
        )}
        <div className="grid grid-rows-2  justify-items-center  items-center">
          <span className="mt-2 mx-2">
            {languaje ? "Todo Name:" : "Nombre de la tarea:"}
          </span>
          <h5 className={`${state && "line-through"} font-bold mx-2`}>
            {title}
          </h5>
        </div>
        <div className="grid grid-rows-2  justify-items-center  items-center">
          <span className="mt-2">
            {languaje ? "Todo Description:" : "Descripción de la tarea:"}
          </span>
          <p className={`${state && "line-through"} italic`}>{description}</p>
        </div>
        <div className="m-2 grid grid-cols-2">
          <button
            onClick={() => deleteTodo(id)}
            className="button px-2 bg-red-100 rounded-xl hover:bg-red-400"
          >
            {languaje ? "Delete" : "Eliminar"}
          </button>
          <button
            onClick={() => updateTodo(id)}
            className="button px-2 bg-yellow-100 rounded-xl hover:bg-yellow-400"
          >
            {languaje ? "Update" : "Actualizar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
