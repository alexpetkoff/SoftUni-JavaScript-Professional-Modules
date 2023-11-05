import movies from '../components/movies.js';
import MovieList from '../components/MovieList';
import Timer from '../components/Timer.jsx';
import Counter from '../components/Counter.jsx';

import './App.css'

function App() {

  return (
    
    <>
      <Counter count={0} />
      <Timer count={0} />
      <div>
        <MovieList movies={movies} heading='My Top Movie List' />
      </div>

    </>

  )
}

export default App;
