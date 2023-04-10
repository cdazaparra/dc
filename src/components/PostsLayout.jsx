export default function PostsLayout({ children }) {
  return (
    <div className="justify-items-center  items-center border rounded m-3 gap-2 border-gray-300">
      <h2 className="text-center my-4 text-xl sm:text-1xl md:text-1xl lg:text-2xl xl:text-2xl 2xl:text-3xl">
        Lista de todos los posts
      </h2>
      {children}
    </div>
  );
}
