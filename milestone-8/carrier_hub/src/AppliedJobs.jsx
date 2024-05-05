/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DisplayApplied from "./components/DisplayApplied";
import { getData } from "./utilities/localStorageManage";

const AppliedJobs = () => {
  const [localData, setLocalData] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const getIntoLocal = getData();

  const handleJobs = (fillter) => {
    if (fillter === "all") {
      setDisplayJobs(localData);
    } else if (fillter === "remote") {
      const Remote = localData.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      console.log(Remote);
      setDisplayJobs(Remote);
    } else if (fillter == "Onsite") {
      const Onsite = localData.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(Onsite);
    }
  };

  const Data = useLoaderData();

  useEffect(() => {
    const AlradyAplied = [];
    if (getIntoLocal.length > 0) {
      getIntoLocal.forEach((element) => {
        const data = Data.find((d) => d.id === parseInt(element));

        if (data) {
          AlradyAplied.push(data);
        }
      });
      setLocalData(AlradyAplied);
    }
  }, [Data]);

  // useEffect(() => {
  //   const applied = [];
  //   getIntoLocal.forEach((job) => {
  //     applied.push(Data.find((d) => d.id == job));
  //   });
  //   setDisplayJobs(applied);
  // }, [Data]);

  return (
    <div>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          Click
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li onClick={() => handleJobs("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobs("remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobs("Onsite")}>
            <a>Onsite</a>
          </li>
        </ul>
      </div>

      {displayJobs.map((job) => (
        <DisplayApplied key={job.id} job={job}></DisplayApplied>
      ))}
    </div>
  );
};

export default AppliedJobs;
