
import React, { useEffect, useState } from 'react';

const SearchBar = (props) => {
  const [searchWord, setSearchWord] = useState('');
  const { job, setJob } = props;

  const searchWordOnChange = (e) => {
    setSearchWord(e.target.value);
  };


  function searchForJob() {
    const regex = new RegExp(searchWord, 'i');
    let i = 0;
    const matched = [];
    let totalJobNum = 0;

    while (i < job.jobList.length) {

      const hospital = job.jobList[i];

      // checking if searchword is in name or job_title of the hospital
      if (hospital.name.match(regex) || hospital.job_title.match(regex)) {
        matched.push(hospital);
        totalJobNum += hospital.total_jobs_in_hospital;
        i++;

      // going inside the items array to check the searchword
      } else {
        const newItems = [];
        hospital.items.forEach((eachJob) => {
          Object.entries(eachJob).forEach(([k, v]) => {
            if (
              k === 'required_skills' ||
              (k === 'department' && !newItems.includes(eachJob))
            ) {
              if (v.some((str) => str.match(regex))) {
                newItems.push(eachJob);
                return;
              }
            } else {
              // using new String to convert number to string
              if (new String(v).match(regex) && !newItems.includes(eachJob)) {
                newItems.push(eachJob);
                return;
              }
            }
          });
        });
        hospital.items = newItems;

        // checking the length of hospital.items to make sure to not push if empty
        if (hospital.items.length !== 0) {
          hospital.total_jobs_in_hospital = hospital.items.length;
          matched.push(hospital);
          totalJobNum += hospital.total_jobs_in_hospital;
        }

        i++;
      }
    }
    setSearchWord('');

      // storing response of totalJobNum and matched job list
      setJob({
        ...job,
        totalJobNum: totalJobNum,
        jobList: matched,
      });
  }

  return (
    <div className="flex bg-gray-100 ml-3 m-2 -mb-3 w-full items-center select-none ">
      <button
        type="submit"
        className="flex items-center focus:outline-none py-3 px-3 leading-none bg-white
        select-none "
        onClick={searchForJob}
      >
        <svg
          className="h-8 w-8 text-gray-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <input
        type="text"
        placeholder="Search for any job, title, keywords or company"
        name="SearchBar"
        value={searchWord}
        onChange={searchWordOnChange}
        className="bg-white p-4 w-full my-2 mr-6 focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
