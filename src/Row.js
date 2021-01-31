import React,{useState,useEffect} from 'react'
import YouTube from 'react-youtube';
import instance from "./axios"
import movieTrailer from "movie-trailer"
import "./Row.css"

const base_url="https://image.tmdb.org/t/p/original/";
const Row = ({title,fetchUrl,isLargeRow}) => {

    const [movies,setMovies]=useState([])
    const[trailerUrl,setTrailerUrl]=useState("");
       
    useEffect(() => {
        fetchdata()
    }, [fetchUrl])
 
    const opts={
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1
        },
    }
    const fetchdata=async ()=>{
         const response= await instance.get(fetchUrl);
         setMovies(response.data.results)
         return response
    }
     
    const handleClick=(movie)=>{
        if(trailerUrl){
            setTrailerUrl('');
        }else{
            movieTrailer(movie?.name||movie?.title|| "")
            .then(url=>{
                  const urlParams=new URLSearchParams(new URL(url).search)
                  setTrailerUrl(urlParams.get("v"));
            }).catch(err=>console.log(err))
        }
    }
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
            {movies.map(movie=>(
                <img key={movie.id} 
                onClick={()=>handleClick(movie)}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`} 
                alt={movie.name}/>
            ))}
            </div>
        {trailerUrl&&<YouTube videoId={trailerUrl} opts={opts}/>}
            </div>
    )
}

export default Row
