import PostButton from "./PostButton";
//Context
import { useLanguajeContex } from "../context/LanguajeContex";
import { useInteractionContex } from "../context/InteractionContex";
export default function PostAdd({ createPost }) {
  const { languaje } = useLanguajeContex();
  const { borderSelectedGray } = useInteractionContex();
  const { borderSelectedGreen } = useInteractionContex();
  const { colorSelectedGreen } = useInteractionContex();
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
    <div
      className={`justify-items-center  items-center border m-3 grid ${borderSelectedGray} bg-white rounded-xl`}
    >
      <h2 className="text-center my-2 text-xl sm:text-1xl md:text-1xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold">
        {languaje ? "Create a Post" : "Crea un post"}
      </h2>
      <form
        className="justify-items-center  items-center my-1 container"
        onSubmit={onSubmit}
      >
        <div></div>
        <div className="grid grid-rows-1 items-center m-2">
          <div className="grid input-group-text justify-items-center items-center m-2">
            <label htmlFor="title" id="lables-title">
              {languaje ? "Title:" : "Titulo:"}
            </label>
          </div>
          <div className="grid input-group-text  justify-items-center items-center m-2">
            <input
              id="title"
              type="text"
              name="title"
              className={`px-1 text-center border ${borderSelectedGreen} rounded-lg`}
              required
            />
          </div>
        </div>
        <div className="grid grid-rows-1 items-center m-2">
          <div className="grid input-group-text justify-items-center items-center m-2">
            <label htmlFor="content" id="lables-content">
              {languaje ? "Content:" : "Contenido:"}
            </label>
          </div>
          <div className="grid input-group-text  justify-items-center items-center m-2">
            <input
              id="content"
              className={`px-1 text-center border ${borderSelectedGreen} rounded-lg`}
              type="text"
              name="content"
              required
            />
          </div>
        </div>
        <div className="grid input-group-text  justify-items-center items-center">
          <PostButton
            type="submit"
            className={`rounded-lg ${colorSelectedGreen} px-3 py-2 font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-lime-600`}
          >
            {languaje ? "Create a Post" : "Crear Publicación"}
          </PostButton>
        </div>
      </form>
    </div>
  );
}
