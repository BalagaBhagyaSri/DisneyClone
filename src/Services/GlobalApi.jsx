import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "0ba4e9d88c78a974c7a7ed261393caf1";

const movieByGenreBaseURL = "https://api.themoviedb.org/3/discover/movie?api_key=" + api_key;

// Make getTrendingVideos a function
const getTrendingVideos = () => 
    axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);

const getMovieByGenreId = (id) => 
    axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
    getTrendingVideos,
    getMovieByGenreId
};
