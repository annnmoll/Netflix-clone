const API_KEY = 'fbcffb8050f49ba21e60748c6852ce5f' ; 


const requests = {
    fetchTrending : `/trending/all/day?api_key=fbcffb8050f49ba21e60748c6852ce5f`,
    fetchNetflixOriginals :`discover/tv?api_key=${API_KEY}&with_networks=213&with_original_language=en`,
    fetchTopRated : `/movie/top_rated?api_key=fbcffb8050f49ba21e60748c6852ce5f&language=en-US&page=1`,
    fetchActionMovies :`discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies :`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies :`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries :`/discover/movie?api_key=${API_KEY}&with_genres=99`
    
};

export default requests ;