//Context
import { useLanguajeContex } from "../context/LanguajeContex";
import { useInteractionContex } from "../context/InteractionContex";
export default function Post({ post, children }) {
  const { languaje } = useLanguajeContex();
  const { borderSelectedGray } = useInteractionContex();
  return (
    <div
      className={`border ${borderSelectedGray} m-1 p-1 grid justify-items-center rounded-xl`}
    >
      <div className="grid grid-rows-3 justify-items-center  items-center">
        <div className="font-bold grid-rows-1">
          {languaje ? "Title:" : "Título"} {post.title}
        </div>
        <div className="grid-rows-1">
          <span className="font-bold">
            {languaje ? "Content: " : "Contenido: "}
          </span>
          <span>{post.content}</span>
        </div>
      </div>
      <div className="grid-rows-1">{children}</div>
    </div>
  );
}
