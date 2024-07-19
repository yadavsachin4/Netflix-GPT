import React from "react";

const VideoTitile = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl  md:text-6xl font-bold">{title}</h1>
      <p className="hidden  md:inline-block py-6 md:text-lg md:w-1/4">
        {overview}
      </p>

      <div className="my-4 md:m-0">
        <button className="bg-white text-black py-1 md:py-4  px-2 md:px-12 text-lg rounded-lg hover:bg-opacity-80">
          {" "}
          ▶ Play
        </button>
        <button className="bg-gray-500 hidden md:inline-block text-white p-4 px-12 text-lg bg-opacity-50 rounded-lg mx-2 hover:bg-opacity-80 ">
          {" "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitile;
