import { createContext, useContext, useEffect, useState } from "react";
import { useFirebase } from "../firebase/useFirebase";

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const { posts } = useFirebase();
  // const [inFiltre, setInFiltre] = useState("");

  // const getFiltreInput = (title) => {
  //   setInFiltre(title);
  // };

  // const ListOfPosts = () => {
  //   if (inFiltre) {
  //     return posts.filter((el) => el.title.includes(inFiltre));
  //   }
  //   return posts;
  // };
  const [ListOfPosts, setListOfPosts] = useState();

  useEffect(() => {
    setListOfPosts(posts);
  }, [posts]);

  const getFiltreInput = (title) => {
    console.log(title);
    if (title) {
      const result = posts.filter((el) =>
        el.title.toLowerCase().includes(title.toLowerCase())
      );
      setListOfPosts(result);
    } else {
      setListOfPosts(posts);
    }
  };

  return (
    <PostContext.Provider value={{ ListOfPosts, getFiltreInput }}>
      {children}
    </PostContext.Provider>
  );
};

export const Post_Context = () => {
  return useContext(PostContext);
};

export default PostProvider;
