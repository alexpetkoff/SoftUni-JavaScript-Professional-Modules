import Header from '../src/components/header/Header';
import Home from '../src/components/home/Home';
import Login from '../src/components/login/Login';
import Register from '../src/components/register/Register';
import CreateGame from './components/create-game/CreateGame';

function App() {

  return (
    <div id="box">
      <Header />
      <Home />
      <Login />
      <Register />
      <CreateGame />
    </div>
  )
}

export default App;