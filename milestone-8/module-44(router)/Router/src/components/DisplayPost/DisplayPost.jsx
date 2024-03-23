import { useLoaderData } from "react-router-dom";

const DisplayPost = () => {
  const post = useLoaderData();
  return (
    <div>
      <h1>Post Details {post.id}</h1>
    </div>
  );
};

export default DisplayPost;
