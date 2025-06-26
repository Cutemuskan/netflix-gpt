import { useDispatch } from "react-redux";
import {addTrailorVideos} from "../utils/movieSlice";
import { Api_Options } from "../utils/constants";
import { useEffect } from "react";

const useMovieTrailor = (movieId) => {
      const dispatch = useDispatch();
    // fetch trailor video and update the store with trailor video data which have youtube key 
    const fetchMovies = async () => {
      const data =  await fetch(
        "https://api.themoviedb.org/3/movie/"   + 
        movieId +
        "/videos?language=en-US",
        Api_Options);
        const resultvideo = await data.json();
        console.log('seetrailor:',resultvideo);
        const filterdata = resultvideo.results.filter(video => video.type === "Trailer")
        console.log(filterdata)
        const trailor = filterdata.length? filterdata[0] : resultvideo.results[0];
        console.log(trailor)//thi willl contain the youtube key   so we are using dispatch
        dispatch(addTrailorVideos(trailor))
    };
    useEffect(() => {
        fetchMovies()

    },[])
    
}
export default useMovieTrailor