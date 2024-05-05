/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

// eslint-disable-next-line no-unused-vars, react/prop-types
const JobsCard = ({ job }) => {
  const { id, logo, job_title, job_type } = job;

  return (
    <div>
      <div className=" p-6 rounded-md shadow-md min-h-[280px] bg-gray-100  text-gray-50">
        <img src={logo} alt="" className=" rounded-md  " />
        <div className="mt-6 mb-2">
          <h2 className="text-xl font-semibold tracking-wide text-black">
            {job_title}
          </h2>
          <span className="block text-xs font-medium tracking-widest uppercase text-violet-400">
            {job_type}
          </span>
        </div>
        <div className="flex gap-3 text-black">
          <button className=" border-2 border-solid border-primary px-4 py-1 rounded-md text-primary">
            Remote
          </button>
          <button className=" border-2 border-solid border-primary px-4 py-1 rounded-md text-primary">
            Full Time
          </button>
        </div>
        <Link to={`/job/${id}`} state={job_title}>
          <button className="btn btn-primary mt-7">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default JobsCard;
