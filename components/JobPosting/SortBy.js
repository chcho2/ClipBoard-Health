import React, { useState, useEffect } from 'react';

const SortBy = (props) => {
 
  const [dropDown, setDropDown] = useState(false);
  const [order, setOrder] = useState('');
  const {
    value,
    type,
    job,
    setJob,
    clickedSortBy,
    setClickedSortBy,
  } = props;

  function dropDownOnChange() {
    setDropDown(!dropDown);
  }

  function orderOnChange(order) {
    setDropDown(!dropDown);

    if (order === 'Remove') {
      setClickedSortBy(false);
      setJob({ ...job, sortedJob: [] });
      setOrder('');
      return;
    }
    setOrder(order.slice(0, 3));
    setClickedSortBy(true);

    if (job.sortedJob.length === 0) {
      
      job.sortedJob = [...job.jobList];
     
    }

    orderOfSort(job.sortedJob, type, order);
    setJob({ ...job, sortedJob: job.sortedJob });
  }

  function orderOfSort(sortedJob, type, order) {

    sortedJob.sort((a, b) => {
      if (a.items[0][type][0] < b.items[0][type][0]) return -1;
    });

    if (order === 'Descending') {
      sortedJob.reverse();
    }
  
  }

  return (
    <div>
      <button
        className="ml-3 bg-white p-2 focus:outline-none
      hover:text-gray-500"
        onClick={dropDownOnChange}
      >
        {value}
        <span className="ml-2 text-gray-400">{order}</span>
      </button>
      {dropDown ? (
        <div className=" absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              id="Ascending"
              onClick={(e) => orderOnChange(e.target.id)}
            >
              Ascending
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              id="Descending"
              onClick={(e) => orderOnChange(e.target.id)}
            >
              Descending
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              id="Remove"
              onClick={(e) => orderOnChange(e.target.id)}
            >
              Remove
            </a>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default SortBy;
