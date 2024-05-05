import { MdOutlineDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import d404 from "../assets/404.jpg";

const BlogCard = ({ blog, deletable, handleDelete }) => {
  const { id, title, cover_image, published_at, description } = blog;
  return (
    <>
      <div className=" flex relative">
        <Link
          to={`/blog/${id}`}
          rel="noopener noreferrer"
          href="#"
          className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50 hover:scale-105 border-2 border-primary border-opacity-40 hover:border-secondary transition-transform"
        >
          <img
            role="presentation"
            className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500"
            src={cover_image || d404}
          />
          <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
              {title}
            </h3>
            <span className="text-xs text-gray-400 dark:text-gray-600">
              {new Date(published_at).toLocaleTimeString()}
            </span>
            <p>{description}</p>
          </div>
        </Link>
        {deletable && (
          <div
            onClick={() => handleDelete(id)}
            className="bg-secondary hover:bg-primary  absolute -top-3 -right-3 flex justify-center items-center text-white text-xl rounded-full hover:scale-120 w-[40px] h-[40px]"
          >
            <MdOutlineDeleteForever />
          </div>
        )}
      </div>
    </>
  );
};

export default BlogCard;
