import React from "react";
import { useState } from "react";
//Components
import PostsLayout from "../components/PostsLayout";
import PostAdd from "../components/PostAdd";
import Post from "../components/Post";
import PostButton from "../components/PostButton";
import PostChange from "../components/PostChange";
// Data
import { initialPosts } from "../helpers/data";
import PostDescription from "./PostDescription";

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
      <h1
        className="my-4 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl cursor-pointer"
        onClick={() => setPostState(!poststate)}
      >
        Generador de post
      </h1>
      {poststate && (
        <div className="justify-items-center  items-center border rounded m-3 gap-2 border-lime-300">
          <PostDescription></PostDescription>
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
                <PostButton
                  onClick={() => deletePost(post.id)}
                  className="btn btn-warning"
                >
                  Eliminar
                </PostButton>
                <PostButton
                  onClick={() => changePost(post)}
                  className="btn btn-secondary"
                >
                  Cambiar el contenido(Borrará el contenido actual)
                </PostButton>
              </Post>
            ))}

            {posts.length === 0 && <article>No hay Posts</article>}
          </PostsLayout>
        </div>
      )}
    </div>
  );
};

export default PostGeneratos;
