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
    <div className="justify-items-center  items-center border rounded m-3 gap-2 border-gray-300">
      <form className="form m-5" onSubmit={onSubmit}>
        <h2 className="text-center my-4 text-xl sm:text-1xl md:text-1xl lg:text-2xl xl:text-2xl 2xl:text-3xl">
          Crea un post
        </h2>
        <div className="input-group flex-nowrap m-2">
          <span className="input-group-text " id="basic-addon1">
            Titulo
          </span>
          <input
            className="form-control"
            type="text"
            placeholder="Título"
            name="title"
            defaultValue="Post 4"
          />
        </div>
        <div className="input-group flex-nowrap m-2">
          <span className="input-group-text" id="basic-addon1">
            Contenido
          </span>
          <input
            className="form-control"
            type="text"
            placeholder="Contenido"
            name="content"
            defaultValue="Contenido del post 4"
          />
        </div>
        <PostButton type="submit" className="btn btn-primary">
          Crear Post
        </PostButton>
      </form>
    </div>
  );
}
