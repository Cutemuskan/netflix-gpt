import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../utils/movieSlice";
import { Api_Options } from "../utils/constants";

// custom hooks 
const useNowPlayingMovies = () => {
     //fetch daat from TMDB API and update the store
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
   const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', 
    Api_Options
  );
   const resultdata = await data.json();
   console.log('see movie palying: ',resultdata.results);
   dispatch(addNowPlaying(resultdata.results));
  }

  useEffect(() => {
    getNowPlayingMovies();
  },[])
}
export default useNowPlayingMovies;