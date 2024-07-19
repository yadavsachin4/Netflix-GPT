import React, { useRef } from "react";
import lang from "./utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "./utils/openai";
import { API_OPTIONS } from "./utils/constants";
import { json } from "react-router-dom";
import { addGptMovieResult } from "./utils/GptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptsearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a Movie Recommendations system and suggest some movies for the query " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Exmaple Result : Gadat, Sholay, Don, 3idiot, koi mil gaya ";

    const GPTResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!GPTResults.choices) {
      // to do error handling
    }

    console.log(GPTResults.choices?.[0]?.message?.content);

    const GPTMovies = GPTResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = GPTMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbMovieResult = await Promise.all(promiseArray);

    console.log(tmdbMovieResult);

    dispatch(
      addGptMovieResult({
        movieNmaes: GPTMovies,
        movieResults: tmdbMovieResult,
      })
    );
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].GptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptsearchClick}
        >
          {lang[langKey].Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
