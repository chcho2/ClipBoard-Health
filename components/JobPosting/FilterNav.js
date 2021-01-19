import SortBy from './SortBy';
import React, { useEffect, useState } from 'react';

const FilterNav = (props) => {
  const { job, setJob } = props;

  const sortedBy = [
    ['Location', 'city'],
    ['Role', 'required_skills'],
    ['Department', 'department'],
    ['Education', 'required_credentials'],
    ['Experience', 'experience'],
  ];

  return (
    <div className="flex px-4 py-6 justify-between">
      <div className="flex items-center justify-between">
        <span className="text-sm ml-2 font-semibold">
          {props.job.totalJobNum}{' '}
        </span>
        <span className="text-sm whitespace-nowrap ml-1 text-gray-600">
          job postings
        </span>
      </div>
      <div className="hidden md:flex float-right space-x-4 text-xs float-right">
        <button className="text-gray-400 whitespace-nowrap ml-8 hover:text-black focus:outline-none">
          Sort by
        </button>

        {sortedBy.map((sort) => (
          <SortBy
            key={sort[0]}
            type={sort[1]}
            value={sort[0]}
            job={job}
            setJob={setJob}
        
         
          />
        ))}
      </div>
    </div>
  );
};

export default FilterNav;
