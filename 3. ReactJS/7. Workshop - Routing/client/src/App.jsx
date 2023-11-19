import { Routes, Route } from 'react-router-dom'

import Header from '../src/components/header/Header';
import Home from '../src/components/home/Home';
import Login from '../src/components/login/Login';
import Register from '../src/components/register/Register';
import CreateGame from './components/create-game/CreateGame';

function App() {

  return (
    <div id="box">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/games/create" element={<CreateGame />}></Route>
      </Routes>

    </div>
  )
}

export default App;