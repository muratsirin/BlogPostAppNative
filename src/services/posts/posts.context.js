import React, { useState, createContext, useEffect } from "react";
import {
  postsRequest,
  postsTransform,
  addPostRequest,
  postsRequestFirebase,
} from "./posts.service";

export const PostsContext = createContext();

export const PostsContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setErorr] = useState(null);

  const retrievePosts = () => {
    setIsLoading(true);
    setPosts([]);

    setTimeout(() => {
      postsRequest()
        .then(postsTransform)
        .then((results) => {
          setIsLoading(false);
          setPosts(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setErorr(err);
        });
    }, 2000);
  };

  const getPosts = () => {
    setIsLoading(true);
    setPosts([]);

    setTimeout(() => {
      postsRequestFirebase()
        .then((results) => {
          setIsLoading(false);
          setPosts(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setErorr(err);
        });
    }, 2000);
  };

  const addPost = (title, content, image) => {
    setIsLoading(true);
    addPostRequest(title, content, image)
      .then((p) => {
        console.log(p);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setErorr(e);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, isLoading, error, addPost }}>
      {children}
    </PostsContext.Provider>
  );
};
