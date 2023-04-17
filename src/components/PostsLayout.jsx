export default function PostsLayout({ children }) {
  return (
    <div className="justify-items-center  items-center border m-3 gap-2 border-gray-300 bg-white rounded-xl">
      <h2 className="text-center my-4 text-xl sm:text-1xl md:text-1xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold m-2">
        Lista de todos los posts
      </h2>
      {children}
    </div>
  );
}
