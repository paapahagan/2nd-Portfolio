import React from "react";

function About() {
  return (
    <div className="flex justify-center mt-10 w-full bg-grain">
      <div className="container flex justify-start bg-gray-800 rounded ">
        <div className="grid content-start pt-5 pb-5 pl-5  ">
          <p className="text-4xl text-red-200 font-bold pb-5">ABOUT ME</p>

          <hr className="border-2 border-red-200 w-36 mb-5" />

          <p className="text-4xl text-red-200 pb-5">Frontend Developer</p>
          <p className="text-lg text-white">
            I have a strong understanding of HTML, CSS, and JavaScript, and I am
            familiar with
          </p>
          <p className="text-lg text-white">
            popular frameworks such as React. I am also knowledgeable in web
            design principles,
          </p>
          <p className="text-lg  text-white">
            such as typography, color theory, and layout.
          </p>
          <p className="text-lg text-white">
            I am able to create custom designs that are optimized for mobile
            devices and browsers
          </p>
          <p className="text-lg text-white"> </p>
        </div>
      </div>
    </div>
  );
}

export default About;
