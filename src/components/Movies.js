import React from "react";
import { movies } from "../data";

const Movies = ({ movie }) => {
  return (
    <div>
     <h1> Movies Page</h1>
        {movies.map((el) => {
          return (<div><h1>{el.title}</h1><p>{ el.time}</p>{ele.genre.map(gen => {return <p>gen</p>}}</div>);
        })}{" "}
    </div>
  );
};

export default Movies;
