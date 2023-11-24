import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { userLogin } from './services/userServices';
import { userLogout } from './services/userServices';

import Header from '../src/components/header/Header';
import Home from '../src/components/home/Home';
import Login from '../src/components/login/Login';
import Register from '../src/components/register/Register';
import CreateGame from './components/create-game/CreateGame';
import Catalog from './components/catalog/Catalog';
import GameDetails from './components/game-details/GameDetails';
import AuthContext from './contexts/authContext';

function App() {

  const [auth, setAuth] = useState({});
  const navigate = useNavigate();

  const loginSubmitHandler = async (values) => {
    const result = await userLogin(values);
    setAuth(result);
    navigate('/');
  }

  const logoutHandler = async () => {
    await userLogout(auth.accessToken);
    setAuth({});
    navigate('/');
  }

  return (

    <AuthContext.Provider value={{loginSubmitHandler, auth, setAuth, logoutHandler}}>
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
    </AuthContext.Provider>
  )
}

export default App;