import React from "react";
import { useState } from "react";
//Components
import PostsLayout from "../components/PostsLayout";
import PostAdd from "../components/PostAdd";
import Post from "../components/Post";
import PostButton from "../components/PostButton";
// Data
import { initialPosts } from "../helpers/data";
// Imágenes
import btnDelete from "../assets/icons/eliminar.png";
import btnEdit from "../assets/icons/editar.png";

const PostGeneratos = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [state, setState] = useState(false);
  const [poststate, setPostState] = useState(false);
  const [change, setChange] = useState("");

  const createPost = (post) => {
    setPosts([...posts, post]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };
  const handleInputChange = (event) => {
    const cambio = event.target.value;
    setChange(cambio);
    return change;
  };
  const changePost = (post) => {
    const id = post.id;
    setState(!state);
    const newArray = posts.map((post) => {
      if (post.id === id) {
        const change = handleInputChange(event);
        post.content = change;
      }
      return post;
    });
    setPosts(newArray);
  };
  return (
    <div className="justify-items-center  items-center ">
      <h1
        className="my-4 text-center text-xl"
        onClick={() => setPostState(!poststate)}
      >
        Actualmente está en construcción, se debe dar click en el título del
        proyecto para verlo
      </h1>
      <div className="grid m-2 justify-items-center  items-center border border-lime-300">
        <h1
          className="my-4 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl cursor-pointer font-bold"
          onClick={() => setPostState(!poststate)}
        >
          Generador de post
        </h1>
        {poststate && (
          <div className="justify-items-center  items-center border m-3 gap-2 border-gray-300 rounded-xl">
            <PostAdd createPost={createPost} />
            <PostsLayout>
              {posts.map((post) => (
                <Post key={post.id} post={post}>
                  {state && (
                    <input
                      className="form-control"
                      name="changecontent"
                      placeholder="Cambiar contenido"
                      type="text"
                      id="Change"
                      onChange={handleInputChange}
                    ></input>
                  )}
                  <div className="grid grid-cols-2 gap-1">
                    <PostButton onClick={() => deletePost(post.id)}>
                      <img
                        src={btnDelete}
                        alt="Delete"
                        className="cursor-pointer"
                        width="25"
                      ></img>
                    </PostButton>
                    <PostButton onClick={() => changePost(post)}>
                      <img
                        src={btnEdit}
                        alt="Delete"
                        className="cursor-pointer"
                        width="25"
                      ></img>
                    </PostButton>
                  </div>
                </Post>
              ))}

              {posts.length === 0 && <article>No hay Posts</article>}
            </PostsLayout>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostGeneratos;
