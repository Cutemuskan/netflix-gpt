import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  addPopularMovies } from "../utils/movieSlice";
import { Api_Options } from "../utils/constants";

// custom hooks 
const usePopularMovies = () => {
     //fetch daat from TMDB API and update the store
  const dispatch = useDispatch();

  const getNowPopularMovies = async () => {
   const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', 
    Api_Options
  );
   const resultdata = await data.json();
   console.log('see movie popular movies: ',resultdata.results);
   dispatch(addPopularMovies(resultdata.results));
  }

  useEffect(() => {
    getNowPopularMovies();
  },[])
}
export default usePopularMovies;