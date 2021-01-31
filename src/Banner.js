import React, { useEffect, useState } from 'react'
import instance from "./axios.js"
import request from "./requests.js"
import "./Banner.css"
const Banner = () => {

    const[movie,setMovie]=useState([])

    useEffect(()=>{
       fetchData()
    },[])

    console.log(movie)
    const fetchData=async ()=>{
       const response=await instance.get(request.fetchNetflixOriginals)
       setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length-1)]);
       return response;
    }
    return (
        <header className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage:`url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition:"center center"       
        }}
        >
        <div className="banner__contents">
        <h1 className="banner__title">{movie?.title||movie?.name||movie?.original_name}</h1>
        <div className="banner__buttons">
        <button className="banner__button">Play</button>
        <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
        {movie?.overview}
        </h1>
        </div>
        <div className="banner__fadeBottom"/>
        </header>
    )
}

export default Banner
