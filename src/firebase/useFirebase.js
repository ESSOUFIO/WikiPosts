import { useEffect, useState } from "react";
import { db } from "./firebase";

export const useFirebase = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("posts").onSnapshot((snap) => {
      let fitched = snap.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setPosts(fitched);
    });

    return unsubscribe;
  }, []);

  const deletePost = (id) => {
    db.collection("posts").doc(id).delete();
  };

  const addPost = async (post) => {
    const { id, ...rest } = post;
    await db.collection("posts").doc(post.id).set(rest);
  };

  return { posts, deletePost, addPost };
};
