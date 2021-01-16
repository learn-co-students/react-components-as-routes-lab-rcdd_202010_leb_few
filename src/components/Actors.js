import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
       {actors.map((el) => {
          return (<div><h1>{el.name}</h1>{ele.movies.map(gen => {return <p>gen</p>}}</div>);
        })}{" "}
    </div>
  );
};

export default Actors;
