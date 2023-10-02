import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/moviesSlice";
import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";

const useFetchNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", TMDB_API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results))
  }

  useEffect(()=>{getNowPlayingMovies()},[])
};

export default useFetchNowPlayingMovies;