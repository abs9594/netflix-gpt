import { useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const VideoContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    if (!movies) return;

    const mainMovie = movies[(Math.floor(Math.random() * movies.length))];
    const { original_title, overview, id } = mainMovie;
           
    return (
        <>
        {original_title && id ?
            <div>
              <VideoTitle title={original_title} overview={overview} /> 
              <VideoBackground movieId={id} /> 
            </div>
             : null}
        </>
        
    );
};

export default VideoContainer;