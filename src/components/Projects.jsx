import React from "react";

function Projects() {
  return (
    <div className="flex justify-center mt-10 mb-10 w-full">
      <div className="container grid justify-items-center pb-10  rounded bg-gray-800">
        <div>
          <p className="mb-10 mt-5 text-4xl text-red-200 font-bold">
            SKILL SET
          </p>
        </div>
        <div className=" container flex justify-around">
          <div className="grid text-white  content-center pt-5">
            <ol className="relative border-l border-red-200 ml-4">
              <li className="mb-10 ml-4 text-lg">
                <div className="absolute w-3 h-3 bg-red-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-red-200"></div>
                Programming languages
              </li>
              <li className="mb-10 ml-4 text-lg">
                <div className="absolute w-3 h-3 bg-red-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-red-200"></div>
                Libraries
              </li>
              <li className="mb-10 ml-4 text-lg">
                <div className="absolute w-3 h-3 bg-red-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-red-200"></div>
                Frameworks
              </li>
            </ol>
          </div>
          <div className="grid content-center">
            <div className="">
              <div className="">
                <p className="text-lg text-white">HTML</p>
              </div>
              <div className=" bg-gray-200 rounded-full h-1.5 w-72 dark:bg-black ">
                <div className="bg-red-200 h-1.5 rounded-full w-64  "></div>
              </div>
              <div className="pt-5">
                <p className="text-lg text-white">CSS</p>
              </div>
              <div className=" bg-gray-200 rounded-full h-1.5 w-72 dark:bg-black ">
                <div className="bg-red-200 h-1.5 rounded-full w-56  "></div>
              </div>
              <div className="pt-5">
                <p className="text-lg text-white">JAVASCRIPT</p>
              </div>
              <div className=" bg-gray-200 rounded-full h-1.5 w-72 dark:bg-black ">
                <div className="bg-red-200 h-1.5 rounded-full w-52  "></div>
              </div>
              <div className="pt-5">
                <p className="text-lg text-white">REACT JS</p>
              </div>
              <div className=" bg-gray-200 rounded-full h-1.5 w-72 dark:bg-black ">
                <div className="bg-red-200 h-1.5 rounded-full w-60  "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
