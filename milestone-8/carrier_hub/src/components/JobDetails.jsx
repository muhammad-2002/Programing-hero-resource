/* eslint-disable no-unused-vars */
import { useLoaderData, useParams } from "react-router-dom";
import { setData } from "../utilities/localStorageManage";

const JobDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const selectedData = data.find((d) => d.id === parseInt(id));
  const { company_name, job_title, job_type } = selectedData;
  const handleApply = (id) => {
    setData(id);
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 sm:col-span-2 bg-gray-200 p-4">
          <h1>Job summary</h1>
        </div>

        <div className="col-span-3 sm:col-span-1 bg-gray-300 p-4">
          <h1>Job Details</h1>
          <p>Title:{job_title}</p>
          <button onClick={() => handleApply(id)} className="btn btn-primary">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
