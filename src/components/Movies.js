import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
       <h1>Movies Page</h1>
   
   {movies.map(m =>(
          <div>
              <h1>Name:{m.title}</h1>
              <h1>Time:{m.time}</h1>
              <h1>Genres:</h1>
              <ul>
                  {m.genres.map(g=> 
                      <li>{g}</li>
                  )}
              </ul>
          </div>
      ))}
       </div>
  );
};

export default Movies;
