import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    
    useMovieTrailer(movieId);

    return (
        <div className="w-screen">
        <iframe
            className="w-screen aspect-video overscroll-contain"
            src={
            "https://www.youtube-nocookie.com/embed/" +
            trailerVideo?.key +
                "?&controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=" +
                trailerVideo?.key 
            }
            title="YouTube video player"
            allow="autoplay;"
        ></iframe>
        </div>
    );
};
export default VideoBackground;