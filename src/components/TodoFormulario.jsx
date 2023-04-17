import Swal from "sweetalert2";
import { useState } from "react";

const TodoFormulario = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    title: "Todo #01",
    description: "Descripción #01",
    state: "pendiente",
    priority: true
  });

  const { title, description, state, priority } = todo;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Titulo y descripción obligatorios"
      });
    }

    addTodo({
      id: Date.now(),
      ...todo,
      state: state === "completado"
    });

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Todo agregado correctamente",
      showConfirmButton: false,
      timer: 1500
    });
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;

    setTodo({
      ...todo,
      [name]: type === "checkbox" ? checked : value
    });
  };

  return (
    <div>
      <h1 className="my-5 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl cursor-pointer font-bold">
        Crea Una Tarea
      </h1>
      <div className="grid align-items-center border rounded-xl m-3 gap-2 text-center bg-white">
        <form
          className="grid justify-items-center  items-center "
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 m-2 justify-items-center  items-center">
            <div className="grid m-2 justify-items-center  items-center">
              <label htmlFor="titleTodo" className="font-bold my-1">
                Tarea:
              </label>
              <input
                type="text"
                placeholder="Ingrese Todo"
                className=" border rounded-lg text-center border-blue-200"
                name="title"
                id="titleTodo"
                value={title}
                onChange={handleChange}
              />
            </div>
            <div className="grid m-2 justify-items-center  items-center">
              <label htmlFor="descriptionTodo" className="font-bold my-1">
                Descripción:
              </label>
              <textarea
                className=" border rounded-lg text-center border-blue-200"
                placeholder="Ingrese descripción"
                name="description"
                id="descriptionTodo"
                value={description}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 m-3 justify-items-center  items-center">
            <div className="grid justify-items-center items-center grid-cols-1 sm:grid-cols-2 m-2">
              <input
                type="checkbox"
                name="priority"
                className="form-check-input"
                id="inputCheck"
                checked={priority}
                onChange={handleChange}
              />
              <label htmlFor="inputCheck">Dar prioridad</label>
            </div>
            <select
              className=" border rounded-lg text-center m-2 border-blue-200"
              name="state"
              value={state}
              onChange={handleChange}
            >
              <option value="pendiente">Pendiente</option>
              <option value="completado">Completado</option>
            </select>
          </div>

          <button
            type="submit"
            className="button bg-blue-600 rounded-lg p-2 text-white hover:bg-blue-400 my-3"
          >
            Agregar Todo
          </button>
        </form>
      </div>
    </div>
  );
};
export default TodoFormulario;
