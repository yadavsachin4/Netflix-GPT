import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movieid) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getmovievideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieid +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results?.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filterData?.length ? filterData[0] : json?.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getmovievideo();
  }, []);
};

export default useMovieTrailer;
