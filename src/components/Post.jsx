export default function Post({ post, children }) {
  return (
    <div className="border border-gray-200 m-1 p-1 grid justify-items-center rounded-xl">
      <div className="grid grid-rows-3 justify-items-center  items-center">
        <div className="font-bold grid-rows-1">Título: {post.title}</div>
        <div className="grid-rows-1">
          <span className="font-bold">Contenido:</span>{" "}
          <span>{post.content}</span>
        </div>
      </div>
      <div className="grid-rows-1">{children}</div>
    </div>
  );
}
