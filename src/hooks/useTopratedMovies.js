import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies, addTopRatedMovies, addTrailorVideos } from "../utils/movieSlice";
import { Api_Options } from "../utils/constants";

const useTopratedMovies = () => {
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
            Api_Options
        );
        const resultdata = await data.json();
        console.log('see movie toprated movies: ', resultdata.results);
        dispatch(addTopRatedMovies(resultdata.results));
    }

    useEffect(() => {
        getTopRatedMovies();
    }, [])

}
export default useTopratedMovies