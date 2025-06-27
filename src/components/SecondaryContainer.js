import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies)
    return (
        <div  className="bg-black">
            {/* Movielist - Popular
               MovieCard *n
              Movielist - NonPlaying
              Movielist - Trending 
            */}
            <div  className="-mt-52 pl-12 relative z-20">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Top Rated"} movies={movies.topratedMovies} />
            <MovieList title={"Popular"} movies={movies.popularMovies} />
            <MovieList title={"UpComing Movies"} movies={movies.upcomingMovies} />
          </div>
        </div>
    )
}
export default SecondaryContainer