const API_KEY = "c80f85e697815b2edd14d767a3c30690";

const requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_geners=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_geners=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_geners=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_geners=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_geners=99`
}

export default requests;