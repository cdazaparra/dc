import React from "react";
import { useEffect, useState } from "react";
//Componentes
import TodoFormulario from "../components/TodoFormulario";
import Todos from "../components/Todos";
import TodoDescription from "./TodoDescription";
// Estado inicial
const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];
const TodoGenerator = () => {
  const [todos, setTodos] = useState(initialStateTodos);
  const [todoMaker, setTodoMaker] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    const newArray = todos.filter((todo) => todo.id !== id);
    setTodos(newArray);
  };

  const updateTodo = (id) => {
    const newArray = todos.map((todo) => {
      todo.id === id && (todo.state = !todo.state);
      return todo;
      // if (todo.id === id) {
      //   todo.state = !todo.state;
      // }
      // return todo;
    });
    setTodos(newArray);
  };

  const orderTodo = (arrayTodos) => {
    return arrayTodos.sort((a, b) => {
      if (a.priority === b.priority) return 0;
      if (a.priority) return -1;
      if (!a.priority) return 1;
    });
  };
  const orderMake = (arrayTodos) => {
    return arrayTodos.sort((a, b) => {
      //No hace nungun orden
      if (a.state === b.state) return 0;
      if (!a.state) return -1;
      if (!a.state === true) return 1;
    });
  };
  return (
    <div className="grid m-2 justify-items-center  items-center border border-lime-300">
      <h1
        className="my-4 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl cursor-pointer font-bold"
        onClick={() => setTodoMaker(!todoMaker)}
      >
        Tareas
      </h1>
      {todoMaker && (
        <div>
          <TodoDescription></TodoDescription>
          <TodoFormulario addTodo={addTodo} />
          <Todos
            todos={orderMake(orderTodo(todos))}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          ></Todos>
        </div>
      )}
    </div>
  );
};

export default TodoGenerator;
