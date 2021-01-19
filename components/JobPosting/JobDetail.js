import React, { useEffect, useState } from 'react';

const JobDetail = (props) => {
  const { hours, workSchedule, summary, dept } = props;
  
  return (
    <div className="w-full mt-5 h-full bg-white">
      <div className=" w-10/12 ">
          <div
            className="table-row grid-cols-3 divansform scale-100
                    text-xs py-1 cursor-default bg-white bg-opacity-25">
            <div className="table-row grid md:flex relative items-center whitespace-flex-wrap font-semibold text-black">
              <div className="mr-32">Department:</div>
              <div className="leading-5 table-cell py-3 text-gray-500 font-medium">
                {dept}
              </div>
           

            <div className="relative grid md:flex table-row items-center whitespace-flex-wrap font-semibold text-black">
              <div className="mr-32 whitespace-nowrap">Hours / shifts:</div>
              <div className="md:-ml-2 leading-5 table-cell whitespace-nowrap  py-3 text-gray-500 font-medium">
                {hours} hours / {workSchedule}
              </div>
            </div>
            <div className="relative grid md:flex table-row items-center whitespace-flex-wrap font-semibold text-black">
              <div className="mr-36">Summary</div>
              <div className="md:ml-1 table-cell leading-5 text-gray-500 py-3 font-medium">
                {summary}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:grid md:float-right md:-mt-32">
        <div className="md:m-2">
          <button
            type="submit"
            className=" whitespace-nowrap bg-blue-500 rounded-md text-white text-xs 
            text-center px-2 py-2 divansition duration-300 ease-in-out hover:bg-blue-600 "
          >
            Job details
          </button>
        </div>

        <div className="mx-3">
          <button
            type="submit"
            className=" border-2 whitespace-nowrap border-blue-500 rounded-md text-ts 
            text-blue-500 px-2 py-1.5 divansition duration-300 ease-in-out hover:bg-blue-500 hover:text-white "
          >
            Save job
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
