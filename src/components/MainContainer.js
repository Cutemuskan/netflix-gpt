import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle"
import Videobackground from "./VideoBackground"

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return;
    const mainMovie = movies[0];
    console.log(mainMovie)
    const {original_title, overview, id} = mainMovie;
    return (
        <div>
       {/* MainContainer */}
       <VideoTitle title ={original_title} overview= {overview}/>
       <Videobackground movieId = {id} />
        </div>
    )
}
export default MainContainer