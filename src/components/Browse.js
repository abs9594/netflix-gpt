import React from 'react'
import Header from './Header';
import useFetchNowPlayingMovies from '../hooks/useFetchNowPlayingMovies';
import VideoContainer from "./VideoContainer"

const Browse = () => {

  useFetchNowPlayingMovies();

  return (
    <div>
      <Header />
      <VideoContainer/>
    </div>
  );
};

export default Browse