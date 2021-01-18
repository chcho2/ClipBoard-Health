import React, { useState } from 'react';
import JobList from './JobList';

const Jobs = (props) => {
  const { hospName, index, hospJobs, items, setJob } = props;
  const [hospIsClicked, setHospIsClicked] = useState(false);

  function expandHospHandler(e) {
    setHospIsClicked(!hospIsClicked);
  }

  return (
    <div className="flex flex-col ml-6">
      <div key={hospName}>
        <a
          className="mt-4 cursor-pointer flex focus:outline-none"
          id={index}
          onClick={(e) => expandHospHandler(e.target.id)}
        >
          <button className=" whitespace-nowrap h-6 w-6 bg-gray-400 rounded-md text-white text-xs text-center px-1 py-1 transition duration-300 ease-in-out ">
            <span
              className="h-5 w-5 fill-current
											dark:text-white"
            >
              {hospName.slice(0, 2).toUpperCase()}
            </span>
          </button>
          <p
            className="ml-2 text-sm text-gray-600
											dark:text-gray-300"
          >
            {hospJobs} jobs for {hospName}
          </p>
        </a>

        {hospIsClicked ? (
          items.map((job, i) => (
            <JobList
              key={`${hospName}${i}`}
              id={i}
              hospName={hospName}
              eachJob={job}
            />
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Jobs;
