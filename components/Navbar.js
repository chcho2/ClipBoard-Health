import React from 'react';

const Navbar = () => (
  <div>
    <nav className="bg-white w-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 duration-500 ease-in-out">
        <div className="flex items-center justify-between h-16">
          <div className="md:hidden sm:ml-6 ml-10 inline-flex space-x-4">
            <span
              className="bg-white-800 -mx-8 p-2 rounded-md text-gray-600 hover:text-black 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </span>
          </div>

          <a
            href="#"
            className="text-blue-500 whitespace-nowrap hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            HEALTH EXPLORE
          </a>

          <div className="flex items-center">
            <div className="hidden md:flex ml-10 items-baseline space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-black px-3 py-2 rounded-md text-xs font-medium"
              >
                PROFILE
              </a>

              <a
                href="#"
                className="text-gray-600 hover:text-black px-3 py-2 rounded-md text-xs font-medium"
              >
                JOBS
              </a>

              <a
                href="#"
                className="text-gray-600 whitespace-nowrap hover:text-black px-3 py-2 rounded-md text-xs font-medium"
              >
                PROFESSIONAL NETWORK
              </a>

              <a
                href="#"
                className="text-gray-600 hover:text-black px-3 py-2 rounded-md text-xs font-medium"
              >
                LOUNGE
              </a>

              <a
                href="#"
                className="text-gray-600 hover:text-black px-3 py-2 rounded-md text-xs font-medium"
              >
                SALARY
              </a>
            </div>
          </div>

          <div className="ml-4 flex items-center md:ml-6">
            <button className="hidden md:flex text-xs border-2 mr-7 py-1.5 px-3 border-blue-400 hover:text-blue-700 text-blue-500 rounded">
              CREATE JOB
            </button>
            <button className="flex bg-blue-500 p-1 rounded-full text-sm text-white hover:bg-blue-900 h-7 w-7 items-center mr-2 justify-center">
              JO
            </button>

            <a
              href="#"
              className="hidden md:flex text-gray-600 hover:text-black px-3 py-2 rounded-md text-xs font-medium"
            >
              LOGOUT
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
