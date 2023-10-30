import movies from '../components/movies.js';
import MovieList from '../components/MovieList';
import Timer from '../components/Timer.jsx';
import './App.css'

function App() {

  return (
    <>
      <Timer timer={0} />
      <div>
        <MovieList movies={movies} heading='My Top Movie List' />
      </div>

    </>


  )
}

export default App
