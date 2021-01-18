
import React, { useEffect, useState } from 'react';

const SearchBar = (props) => {
  const [searchWord, setSearchWord] = useState('');
  const { job, setJob } = props;

  const searchWordOnChange = (e) => {
    setSearchWord(e.target.value);
  };

  // fetch request to /api/jobs with search word
  async function searchForJob() {
    const data = await fetch('/api/jobs', {
      headers: {
        'Content-type': 'Application/json',
        searchWord,
      },
    });

    const res = await data.json();
    
    setSearchWord('');

    // storing response of totalJobNum and matched job list
    setJob({
      ...job,
      totalJobNum: res.totalJobNum,
      jobList: res.matched,
    });
  }

  return (
    <div className="flex bg-gray-100 ml-2 m-2 -mb-3 w-full items-center select-none ">
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
        className="bg-white p-4 w-full my-2 mr-4 focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
