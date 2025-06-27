const VideoTitle = ({title, overview}) => {
    return (
        <div className=" w-screen  aspect-square pt-[20%] px-12 absolute text-white  from-black">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div className="">
            <button className="bg-white text-black p-4 px-12 text-xl hover:bg-opacity-80 rounded-lg "> 
             ► Play 
             </button>
            <button className="bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg mx-2 "> 
            More Info 
            </button>
        </div>
        </div>
    )

}
export default VideoTitle