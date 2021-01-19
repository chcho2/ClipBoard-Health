import React, { useState, useEffect } from 'react';

const SortBy = (props) => {
 
  const [dropDown, setDropDown] = useState(false);
  const [order, setOrder] = useState('');
  const {
    value,
    type,
    job,
    setJob,
  } = props;

  function dropDownOnChange() {
    setDropDown(!dropDown);
  }

  function orderOnChange(order,e) {
    setDropDown(!dropDown);

    if (order === 'Remove' && Object.values(job.sortby).length === 1) {
      setJob({ ...job, jobList: [...job.initialJobList], sortby: {}});
      setOrder('');
      return;

    } else if (order === 'Remove') {
      const deepCopySortby = JSON.parse(JSON.stringify(job.sortby));
      delete deepCopySortby[type];
      setJob({ ...job, sortby: {...deepCopySortby} });
      setOrder('');
      return;

    } else {
      setJob({ ...job, sortby: {...job.sortby, [type]: order} });
    }
    
    setOrder(order.slice(0, 3));  
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
