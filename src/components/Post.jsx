export default function Post({ post, children }) {
  return (
    <div className="card m-2">
      <div className="card-body">
        <div className="card-title">Título: {post.title}</div>
        <div className="card-text">
          Contenido: <p>{post.content}</p>
        </div>
        <div className="secondary">{children}</div>
      </div>
    </div>
  );
}
