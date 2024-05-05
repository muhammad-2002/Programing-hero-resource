import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import BlogCard from "../components/BlogCard";

const Blog = () => {
  const data = useLoaderData();
  // const filteredData = data.filter(
  //   (removeData) => removeData.id !== data[0].id
  // );
  return (
    <section className="bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
      <Helmet>
        <title>ByteBlaze | Blog</title>
      </Helmet>
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900 dark:bg-gray-50"
        >
          <img
            src={data[0].cover_image}
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5 ">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              {data[0].title}
            </h3>
            <br></br>
            <span className="text-xl text-gray-400 dark:text-gray-600 ">
              {new Date(data[0].published_at).toLocaleTimeString()}
            </span>
            <p>{data[0].description}</p>
          </div>
        </a>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.slice(1, 19).map((blog) => (
            <BlogCard blog={blog} key={blog.id}></BlogCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
