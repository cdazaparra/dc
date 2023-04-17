import Todo from "../components/Todo";

const Todos = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <div className="grid justify-content-center align-items-center m-3 p-8 gap-2 text-center">
      <h1 className="my-4 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl cursor-pointer font-bold m-2">
        Lista de Tareas
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 m-2 gap-2">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
        {todos.length === 0 && (
          <div className="list-group-item text-center">Sin todos</div>
        )}
      </div>
    </div>
  );
};
export default Todos;
