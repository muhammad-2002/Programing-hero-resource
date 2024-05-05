import { useEffect, useState } from "react";

import { Helmet } from "react-helmet-async";
import BlogCard from "../components/BlogCard";
import NoData from "../components/noData";
import { getData, removeData } from "../utilities/utilities";

const BookMark = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const blogs = getData();
    setBlog(blogs);
  }, []);
  const handleDelete = (id) => {
    removeData(id);
    const blogs = getData();
    setBlog(blogs);
  };
  if (blog.length < 1) {
    return (
      <NoData
        message={"No BookMark Availavile !"}
        label={"Go To Blog"}
        address={"/blog"}
      ></NoData>
    );
  }

  return (
    <div className="grid px-4 sm:px-8 lg:px-12 py-6 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <Helmet>
        <title>ByteBlaze | BookMark</title>
      </Helmet>
      ;
      {blog.map((blog) => (
        <BlogCard
          handleDelete={handleDelete}
          deletable={true}
          blog={blog}
          key={blog.id}
        ></BlogCard>
      ))}
    </div>
  );
};

export default BookMark;
