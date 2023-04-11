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
    <div className="grid align-items-center border m-3 gap-2 text-center bg-white">
      <h1 className="my-4 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl cursor-pointer font-bold">
        Tarea
      </h1>
      <form
        className="grid justify-items-center  items-center "
        onSubmit={handleSubmit}
      >
        <div className="grid justify-items-center  items-center grid-cols-1 sm:grid-cols-2">
          <label htmlFor="titleTodo" className="font-bold">
            Tarea
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
        <div className="grid justify-items-center  items-center grid-cols-1 sm:grid-cols-2 m-2">
          <label htmlFor="descriptionTodo" className="ml-4 font-bold">
            Descripción
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
        <div className="grid justify-items-center  items-center grid-cols-1 sm:grid-cols-2 m-2">
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
        <button
          type="submit"
          className="button bg-blue-600 rounded-lg p-2 text-white hover:bg-blue-400 m-2"
        >
          Agregar Todo
        </button>
      </form>
    </div>
  );
};
export default TodoFormulario;
