import { useEffect, useState } from "react";
import JobsCard from "./JobsCard";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("./jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  const [defaultValue, setValue] = useState(4);
  const handleClick = () => {
    setValue(jobs.length);
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-10  md:grid-cols-2">
        {jobs.slice(0, defaultValue).map((job) => (
          <JobsCard key={job.id} job={job}></JobsCard>
        ))}
      </div>
      <p className="text-center my-8">
        <button
          onClick={handleClick}
          className={`btn btn-primary ${
            jobs.length === defaultValue && "hidden"
          }`}
        >
          See more..
        </button>
      </p>
    </div>
  );
};

export default AllJobs;
