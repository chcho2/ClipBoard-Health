import styles from '../styles/Home.module.css';
import Filters from '../components/Filters';
import Head from 'next/head';
import Navbar from '../components//Navbar';
import filters from './api/filters';
import SearchBar from '../components/SearchBar';
import Jobs from '../components/JobPosting/Jobs';
import FilterNav from '../components/JobPosting/FilterNav';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import React from 'react';
import jobList from './api/jobs';

const Home = (filters) => {

  // using loading to check if got initial list of job fetch on initial data
  const [loading, setLoading] = useState(true);


  // global state
  const [job, setJob] = useState({
    initialJobList: [],
    jobList: [],
    totalJobNum: 0,
    jobIsClicked: false,
    sortby: {},
    sortOrder: () => sortOrder
  });



  // fetching initial job list and storing in job.jobList state
  const fetchInitialJobs = async () => {
    await fetch('/api/jobs')
      .then((data) => data.json())
      .then((res) => {
        setJob({
          ...job,
          totalJobNum: res.totalJobNum,
          jobList: res.jobs,
          initialJobList: res.jobs
        });
      });

    setLoading(false);
  };

  function sortOrder () {
    if(Object.values(job.sortby).length !== 0) {
      Object.entries(job.sortby).forEach(([k, v]) => {
        job.jobList.sort((a, b) => {
          if (a.items[0][k][0] < b.items[0][k][0]) return -1;
        });
    
        if (v === 'Descending') {
          job.jobList.reverse();
        }
      })
      setJob({ ...job, jobList: job.jobList });
    }
  
    
  
  }
  useEffect(() => {
    sortOrder();
  }, [job.jobList, job.sortby]);

  useEffect(() => {
    fetchInitialJobs();
  }, []);

  return (
    <div>
      <Head>
        <title>Clipboard Health</title>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>

      <Navbar />
      <div className="bg-gray-100 mt-2">
        <SearchBar job={job} setJob={setJob} />
        <div className="h-full flex">
          <Filters job={job} setJob={setJob} />
          <div
            className="flex-1 m-3 bg-white">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <FilterNav
                job={job}
               
                
                setJob={setJob}
              />
            )}
           
               {job.jobList.map((hosp, i) => (
                  <Jobs
                    key={hosp.name}
                    hospName={hosp.name}
                    index={i}
                    hospJobs={hosp.total_jobs_in_hospital}
                    items={hosp.items}
                    setJob={setJob}
                  />
                ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
