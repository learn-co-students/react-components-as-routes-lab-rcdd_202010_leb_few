import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
       {directors.map((el) => {
          return (<div><h1>{el.name}</h1>{ele.movies.map(gen => {return <p>gen</p>}}</div>);
        })}{" "}
    </div>
  );
}

export default Directors
