import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { MdBookmarkAdd } from "react-icons/md";
import { Link, Outlet, useLoaderData, useNavigation } from "react-router-dom";
import Loader from "../components/loder";
import { setData } from "../utilities/utilities";

const BlogDetails = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const data = useLoaderData();
  const navigation = useNavigation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (navigation.state === "loading") return <Loader></Loader>;

  console.log(data);
  const {
    title,
    published_at,
    reading_time_minutes,
    public_reactions_count,
    comments_count,
  } = data;
  const handleBookMark = (data) => {
    setData(data);
  };
  return (
    <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
      <Helmet>
        <title>ByteBlaze | BookDetails</title>
      </Helmet>
      <article className="space-y-8  ">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
            {title}
          </h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
            <p className="text-sm">
              {reading_time_minutes} min red •{" "}
              {new Date(published_at).toLocaleDateString()}
            </p>

            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
              {comments_count} comments • {public_reactions_count} views
            </p>
          </div>
        </div>
      </article>
      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap border-opacity-45  ">
        <Link
          to=""
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  dark:border-gray-400 dark:text-gray-600  rounded-sm ${
            tabIndex === 0 ? "border border-b-0" : "border-b"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Contact</span>
        </Link>
        <Link
          to="author"
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3  rounded-sm space-x-2  dark:border-gray-400 dark:text-gray-600 ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Author</span>
        </Link>
        <div
          onClick={() => handleBookMark(data)}
          className=" w-10 h-10 bg-secondary text-xl rounded-full flex items-center justify-center text-white ml-5 cursor-pointer hover:scale-105 hover:bg-primary "
        >
          <MdBookmarkAdd />
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default BlogDetails;
