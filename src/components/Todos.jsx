import Todo from "../components/Todo";

const Todos = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <div className="grid justify-content-center align-items-center border m-3 gap-2 text-center ">
      <h1 className="my-4 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl cursor-pointer font-bold">
        Todos
      </h1>
      <ul className="list-group m-2">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
        {todos.length === 0 && (
          <li className="list-group-item text-center">Sin todos</li>
        )}
      </ul>
    </div>
  );
};
export default Todos;
