import { IMG_CDNURL } from "../utils/constants"

const MovieCard = ({posterPath}) =>{
    return (
        // <div className="w-48 pr-4">
         <div className="w-36 flex-shrink-0">
            <img 
            className="rounded-lg shadow-md hover:scale-105 transition-transform"
            src= {IMG_CDNURL + posterPath}
            alt ="Movie Card"/>
        </div>
    )
}
export default MovieCard