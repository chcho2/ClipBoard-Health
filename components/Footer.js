import React from 'react';

const Footer = () => {
  return (
    <div className="w-full flex-col m-2 text-xs mt-5 h-full md:grid md:grid-cols-4 md:grid-flow-col bg-white">
      <div className="p-2 md:col-span-2 m-2 mr-4 relative items-center whitespace-flex-wrap font-semibold text-black">
        <h4 className="mr-32">About us</h4>

        <p className="leading-5 py-3 text-black font-light">
          We are a team of nurses, doctors, technologists and executives
          dedicated to help nurses find jobs that they love.
        </p>
        <span className=" py-3 text-black font-light">
          All copyrights reserved © 2020 - Health Explore
        </span>
      </div>

      <div className="p-2 relative m-2  whitespace-flex-wrap font-semibold text-black">
        <h4 className="mr-32 whitespace-nowrap">Sitemap</h4>
        <div className=" leading-5 whitespace-nowrap  py-3 text-black font-light">
          <ul>
            <li>Nurses</li>
            <li>Employers</li>
            <li>Social networking</li>
            <li>Jobs</li>
          </ul>
        </div>
      </div>
      <div className="p-2 relative m-2 whitespace-flex-wrap font-semibold text-black">
        <h4 className="mr-32">Privacy</h4>
        <div className="leading-5 text-black py-3 font-light">
          <ul>
            <li>Terms of use</li>
            <li>Privacy policy</li>
            <li>Cookie policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
