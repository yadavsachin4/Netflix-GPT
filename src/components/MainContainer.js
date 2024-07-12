import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitile from "./VideoTitile";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[6];

  const {original_title, overview,id}=mainMovie;
  return (
    <div>
      <VideoTitile title={original_title} overview={overview} />
      <VideoBackground movieid={id}/>
    </div>
  );
};

export default MainContainer;
