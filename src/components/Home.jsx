import React from "react";

function Home() {
  return (
    <div className="flex justify-center pt-5 pb-5">
      <div className="container flex justify-between rounded-lg pt-10 pb-10 pl-5 pr-5 bg-gray-800">
        <div className="grid content-evenly ">
          <p className="text-3xl mb-2 text-red-200">Hey there, my name is</p>
          <p className="text-5xl text-white mb-2">
            <span className="text-red-200 text-7xl font-bold">
              Paa kwesi Hagan
            </span>
          </p>
          <p className="text-3xl  text-white mb-2">
            And i am a Frontend developer and this is my portfolio
          </p>
        </div>
        <div className="">
          <img src="p.jpeg" className="rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default Home;
