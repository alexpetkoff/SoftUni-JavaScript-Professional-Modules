import { Routes, Route } from 'react-router-dom';

import Header from '../src/components/header/Header';
import Home from '../src/components/home/Home';
import Login from '../src/components/login/Login';
import Register from '../src/components/register/Register';
import CreateGame from './components/create-game/CreateGame';
import Catalog from './components/catalog/Catalog';
import GameDetails from './components/game-details/GameDetails';

function App() {

  return (
    <div id="box">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/games" element={<Catalog />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/games/create" element={<CreateGame />}></Route>
        <Route path="/games/details/:id" element={<GameDetails />}></Route>
      </Routes>

    </div>
  )
}

export default App;