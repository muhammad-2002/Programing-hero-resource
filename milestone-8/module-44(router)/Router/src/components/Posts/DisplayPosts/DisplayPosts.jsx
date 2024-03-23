import { Link } from "react-router-dom";

const DisplayPosts = ({ post }) => {
  const { id, title, body, userId } = post;
  return (
    <div>
      <h1>{title}</h1>
      <p>
        <small>{body}</small>
      </p>
      <Link to={`/post/${id}`}>
        <button>Show details</button>
      </Link>
    </div>
  );
};

export default DisplayPosts;
