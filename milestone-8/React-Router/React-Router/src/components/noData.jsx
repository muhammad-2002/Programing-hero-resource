/* eslint-disable react/prop-types */

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const NoData = ({ message, address, label }) => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-116px)] flex-col gap-5 ">
      <Helmet>
        <title>ByteBlaze | BookMark</title>
      </Helmet>
      <h1 className="text-2xl font-bold">{message}</h1>
      <Link
        to={address}
        className="relative inline-block px-4 py-2 font-medium group"
      >
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
        <span className="relative text-black group-hover:text-white">
          {label}
        </span>
      </Link>
    </div>
  );
};

export default NoData;
