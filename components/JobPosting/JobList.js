import React, { useEffect, useState } from 'react';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import JobDetail from './JobDetail';

const JobList = (props) => {
  const [dropDown, setDropDown] = useState(false);
  const { eachJob, hospName, id } = props;
  const [jobIsClicked, setJobIsClicked] = useState(false);

  function expandJobHandler(e) {
    setJobIsClicked(!jobIsClicked);
  }
  return (
    <div className="w-full h-full -ml-4 bg-white" id="journal-scroll">
      <a
        key={`${hospName}${id}`}
        onClick={(e) => expandJobHandler(e.target.id)}
      >
        <table className="w-full my-3 border-b-2 border-gray-100">
          <tbody className="">
            <tr
              className="relative scale-90
                    text-xs py-1 cursor-default 
            bg-white bg-opacity-25"
            >
              <td className="pl-5 cursor-pointer  pr-3 whitespace-no-wrap">
                <div className="text-black font-semibold">
                  {eachJob.job_title}
                </div>
                <div id={id} className="text-gray-500 text-xs">
                  {eachJob.job_type} | ${eachJob.salary_range[0]} - $
                  {eachJob.salary_range[1]} an hour | {eachJob.city}{' '}
                  <div className="leading-5 mr-2 md:float-right text-gray-500 font-medium ">
                    {formatDistanceToNowStrict(new Date(eachJob.created))} ago
                  </div>
                </div>

                <div>
                  {jobIsClicked ? (
                    <JobDetail
                      key={id}
                      hours={eachJob.hours[0]}
                      workSchedule={eachJob.work_schedule}
                      summary={eachJob.description}
                      dept={eachJob.department}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </a>
    </div>
  );
};

export default JobList;
