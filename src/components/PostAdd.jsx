import PostButton from "./PostButton";

export default function PostAdd({ createPost }) {
  const onSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const title = data.get("title");
    const content = data.get("content");

    createPost({
      id: Date.now(),
      title,
      content
    });
  };

  return (
    <div className="justify-items-center  items-center border rounded m-3 grid border-gray-300 bg-white">
      <h2 className="text-center my-2 text-xl sm:text-1xl md:text-1xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold">
        Crea un post
      </h2>
      <form
        className="justify-items-center  items-center my-1 container"
        onSubmit={onSubmit}
      >
        <div></div>
        <div className="grid grid-rows-1 items-center m-2">
          <div className="grid input-group-text justify-items-center items-center m-2">
            <label htmlFor="title" id="lables-title">
              Titulo:
            </label>
          </div>
          <div className="grid input-group-text  justify-items-center items-center m-2">
            <input
              id="title"
              type="text"
              placeholder="Título"
              name="title"
              defaultValue="Post"
              className="px-1 text-center border rounded-lg"
            />
          </div>
        </div>
        <div className="grid grid-rows-1 items-center m-2">
          <div className="grid input-group-text justify-items-center items-center m-2">
            <label htmlFor="content" id="lables-content">
              Contenido
            </label>
          </div>
          <div className="grid input-group-text  justify-items-center items-center m-2">
            <input
              id="content"
              className="px-4 text-center border rounded-lg"
              type="text"
              placeholder="Contenido"
              name="content"
              defaultValue="Contenido del post"
            />
          </div>
        </div>
        <div className="grid input-group-text  justify-items-center items-center">
          <PostButton
            type="submit"
            className="rounded-lg bg-lime-500 px-3 py-2 font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-lime-600"
          >
            Crear Post
          </PostButton>
        </div>
      </form>
    </div>
  );
}
