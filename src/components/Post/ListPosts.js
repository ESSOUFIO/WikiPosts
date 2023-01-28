import { Post_Context } from "../../Context/PostContext";
import Post from "./Post";

const ListPosts = () => {
  const { ListOfPosts } = Post_Context();

  //Mapping
  const PostsContent =
    ListOfPosts &&
    ListOfPosts.map((post) => {
      return <Post key={post.id} post={post} />;
    });
  return <div className="ListPosts">{PostsContent}</div>;
};

export default ListPosts;
