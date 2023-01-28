import "./Post.css";
import React from "react";
import { FaWindowClose } from "react-icons/fa";
import { useFirebase } from "../../firebase/useFirebase";

const Post = ({ post }) => {
  const { deletePost } = useFirebase();
  return (
    <div className="Post">
      <h6>#{post.id}</h6>
      <h5>{post.title}</h5>
      <p>
        <span dangerouslySetInnerHTML={{ __html: post.description }} />
      </p>

      <div className="PostIconClose" onClick={() => deletePost(post.id)}>
        <FaWindowClose />
      </div>
    </div>
  );
};

export default Post;
