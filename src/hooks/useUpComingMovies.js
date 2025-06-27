import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  addUpComingMovies } from "../utils/movieSlice";
import { Api_Options } from "../utils/constants";

// custom hooks 
const useUpComingMovies = () => {
     //fetch daat from TMDB API and update the store
  const dispatch = useDispatch();

  const getUpComingMovies = async () => {
   const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', 
    Api_Options
  );
   const resultdata = await data.json();
   console.log('see movie Upcoming movies: ',resultdata.results);
   dispatch(addUpComingMovies(resultdata.results));
  }

  useEffect(() => {
    getUpComingMovies();
  },[])
}
export default useUpComingMovies;