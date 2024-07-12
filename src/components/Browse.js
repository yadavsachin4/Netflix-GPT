import Header from "./Header";
import useNowPlayingMovies from "./hooks/useNowPalyingMovies";
import usePopularMovies from "./hooks/usePopularMovies";
import useTopRatedMovies from "./hooks/useTopRatedMovies";
import useUpcomingMovies from "./hooks/useUpcomingMovies";
import MainContainer from "./MainContainer";
import SecondaryComponent from "./SecondaryComponent";


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies()
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryComponent/>
    </div>
  );
};

export default Browse;
