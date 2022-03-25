import React from "react";
import Movie from "./Movie";

export default function Movies(props){
  const {movie} = props;
  return(
    <div className="movies">
      { 
        movie.map(item => (
          <Movie key={movie.imdbID} {...item} />
        ))
      }
    </div>
  )
}