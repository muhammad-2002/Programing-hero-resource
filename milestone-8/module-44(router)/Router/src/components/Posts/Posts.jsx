import { useLoaderData } from "react-router-dom";
import DisplayPosts from "./DisplayPosts/DisplayPosts";

const Posts = () => {
  const posts = useLoaderData();
  console.log(posts);

  return (
    <div className="grid grid-col-3 ">
      <h1>TOTAL POST : {posts.length}</h1>
      <div>
        {posts.map((post) => (
          <DisplayPosts post={post}></DisplayPosts>
        ))}
      </div>
    </div>
  );
};

export default Posts;
