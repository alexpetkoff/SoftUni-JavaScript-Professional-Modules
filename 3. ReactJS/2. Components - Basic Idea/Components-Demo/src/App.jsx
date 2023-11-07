import movies from '../components/movies.js';
import MovieList from '../components/MovieList';
import Timer from '../components/Timer.jsx';
import Counter from '../components/Counter.jsx';
import Starwars from '../components/Starwars.jsx';
import './App.css'

function App() {

  return (
    
    <>
      <Counter count={0} />
      <Timer count={0} />
      <div>
        <MovieList movies={movies} heading='My Top Movie List' />
      </div>
      <div>
        <Starwars heading='Star Wars characters:'/>
      </div>
    </>

  )
}

export default App;