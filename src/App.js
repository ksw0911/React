
import './App.css';
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
 

function App() {
  const  [movies,setMovies] = useState([]);




 useEffect (() =>{
  fetch('https://api.themoviedb.org/3/movie/popular?api_key=e95c643ec7010c428f95ebaceec03873&language=en-US&page=1')
    .then(res => res.json())
    .then(data => setMovies(data.results))
    .catch(err => console.error(err));

},[])

//  console.log(movies);

  return (
    <div className="App">
     <div className='search_nav'>
      <div>
        <h1>Movies</h1>
      </div>
     </div> 

    <div>
      <form>
        <input/>
        <button>Search</button>
      </form>
    </div>
    
    <div className='movies'>
    {movies.map((movie) => 
      <MovieCard {...movie}/>
    )}
    </div>

    </div> 
  );
}

export default App;
