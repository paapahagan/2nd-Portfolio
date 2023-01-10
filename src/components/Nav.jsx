import React from "react";

function Nav() {
  return (
    <nav className="w-full  flex items-center justify-center mb-10  ">
      <div className="container flex justify-between item pt-5 pb-5 bg-gray-800">
        <div className="font-bold text-white   ml-4">HAGAN</div>
        <div className="flex">
          <ul className="flex font-bold ">
            <li className="mr-10 text-white ">
              <a href="">HOME</a>
            </li>
            <li className="mr-10 text-white  ">
              <a href="">ABOUT</a>
            </li>
            <li className="mr-10 text-white  ">
              <a href="">PROJECTS</a>
            </li>
            <li className="mr-10 text-white  ">
              <a href="">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
