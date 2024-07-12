import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import Header from "./Header";
import useNowPlayingMovies from "./hooks/useNowPalyingMovies";
import usePopularMovies from "./hooks/usePopularMovies";
import useTopRatedMovies from "./hooks/useTopRatedMovies";
import useUpcomingMovies from "./hooks/useUpcomingMovies";
import MainContainer from "./MainContainer";
import SecondaryComponent from "./SecondaryComponent";

const Browse = () => {
  const showgptSearch = useSelector((store) => store.gpt.showgptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />

      {showgptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryComponent />
        </>
      )}
    </div>
  );
};

export default Browse;
