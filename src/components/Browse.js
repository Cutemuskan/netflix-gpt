
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {/*- MainContainer
               - Videobackground
               - VideoTitle
          - SecondaryContainer
             - MovieList * name 
             - cards * n */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}
export default Browse