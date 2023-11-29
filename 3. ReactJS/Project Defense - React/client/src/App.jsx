import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Iphone from "./components/iPhone/Iphone";
import Macbook from "./components/macbook/Macbook";
import Mac from "./components/mac/Mac";
import MacStudio from './components/macStudio/MacStudio';
import Cart from './components/cart/Cart';
import Login from './components/login/Login';

function App() {

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/macbook" element={<Macbook />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/macStudio" element={<MacStudio />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  )
}

export default App;