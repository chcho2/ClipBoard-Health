import React, { useEffect, useState } from 'react';
import jobList from '../pages/api/jobs';

const Filters = (props) => {
  const [filtering, setFiltering] = useState([]);
  const { job, setJob } = props;

  // fetching filters data and assigning to filtering
  const fetchData = async () => {
    await fetch('/api/filters')
      .then((data) => data.json())
      .then((res) => {
        setFiltering(res.filtersData);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className="hidden md:inline-block md:flex-shrink-0 md:w-60 bg-gray-100 dark:bg-gray-800 select-none m-1
		 text-xs duration-500 ease-in-out"
    >
      {Object.entries(filtering).map((filter) => (
        <div className="flex flex-col m-2 bg-white" key={filter[0]}>
          <h6
            className=" font-light font-semibold text-black m-2
				transition duration-500 ease-in-out"
          >
            {filter[0].replace('_', ' ').toUpperCase()}
          </h6>
          {filter[1].map((obj) => (
            <button
              key={obj.key}
              className="flex hover:text-gray-400 focus:outline-none font-light mx-2 my-1"
            >
              <span
                className="text-left"
                id={obj.key}
                value={filter[0]}
                key={obj.key}
              >
                {obj.key}
              </span>
              <span className="text-gray-400 ml-2">{obj.doc_count}</span>
            </button>
          ))}
          <br></br>
        </div>
      ))}
    </div>
  );
};

export default Filters;
