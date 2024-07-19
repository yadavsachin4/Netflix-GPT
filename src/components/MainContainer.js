import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitile from "./VideoTitile";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[3];

  const { original_title, overview, id } = mainMovie;
  return (
    <div className="pt-[20%] bg-black md:pt-0">
      <VideoTitile title={original_title} overview={overview} />
      <VideoBackground movieid={id} />
    </div>
  );
};

export default MainContainer;
