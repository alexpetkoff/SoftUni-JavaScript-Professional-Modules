import movies from '../components/movies.js';
import MovieList from '../components/MovieList';
import Timer from '../components/Timer.jsx';
import './App.css'

function App() {

  return (
    <>
        <Timer />
    <div>
      <MovieList movies={movies} heading='My Top Movie List'/>
    </div>
    
    </>


  )
}

export default App
